// src/hooks/useChat.js
import { useEffect, useMemo, useState } from "react";

export function useChat({ ideaId, userId }) {
  const [threadId, setThreadId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // local storage keys
  const keys = useMemo(() => {
    const base = `bizpilot:${userId}:${ideaId}`;
    return {
      thread: `${base}:thread`,
      msgs: `${base}:msgs`,
    };
  }, [ideaId, userId]);

  // bootstrap from localStorage (keeps chat state across sessions)
  useEffect(() => {
    try {
      const t = localStorage.getItem(keys.thread);
      const m = localStorage.getItem(keys.msgs);
      if (t) setThreadId(t);
      if (m) setMessages(JSON.parse(m));
    } catch {}
  }, [keys.thread, keys.msgs]);

  function persist(nextThreadId, nextMessages) {
    try {
      if (nextThreadId) localStorage.setItem(keys.thread, nextThreadId);
      localStorage.setItem(keys.msgs, JSON.stringify(nextMessages || []));
    } catch {}
  }

  async function send({ text, imageBase64 }) {
    if (!text && !imageBase64) return;
    const optimistic = text ? [...messages, { role: "user", content: text }] : messages;
    setMessages(optimistic);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          userId,
          ideaId,
          threadId,
          message: text || "",
          imageBase64,
        }),
      });
      const data = await res.json();
      const assistantText =
        typeof data.assistant === "string"
          ? data.assistant
          : "```json\n" + JSON.stringify(data.assistant, null, 2) + "\n```";
      const finalMsgs = [...optimistic, { role: "assistant", content: assistantText }];
      setMessages(finalMsgs);
      setThreadId(data.threadId || threadId);
      persist(data.threadId || threadId, finalMsgs);
    } catch (e) {
      const finalMsgs = [
        ...optimistic,
        { role: "assistant", content: "Sorry, I couldn't reach the server." },
      ];
      setMessages(finalMsgs);
      persist(threadId, finalMsgs);
    } finally {
      setLoading(false);
    }
  }

  async function simulateCostDelta(pct) {
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          userId,
          ideaId,
          threadId,
          simulate: { type: "costDelta", pct, costName: "material", modelIndex: 0 },
        }),
      });
      const data = await res.json();
      const text = "```json\n" + JSON.stringify(data.assistant, null, 2) + "\n```";
      const next = [...messages, { role: "assistant", content: text }];
      setMessages(next);
      setThreadId(data.threadId || threadId);
      persist(data.threadId || threadId, next);
    } catch (e) {
      const next = [
        ...messages,
        { role: "assistant", content: "Simulation failed. Check server." },
      ];
      setMessages(next);
      persist(threadId, next);
    } finally {
      setLoading(false);
    }
  }

  function clearThread() {
    try {
      localStorage.removeItem(keys.thread);
      localStorage.removeItem(keys.msgs);
    } catch {}
    setThreadId(null);
    setMessages([]);
  }

  return { messages, send, simulateCostDelta, loading, threadId, clearThread };
}
