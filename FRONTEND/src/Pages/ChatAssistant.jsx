import React, { useEffect, useRef, useState } from "react";

/**
 * Simple UI-only chat assistant (no backend).
 * - Text prompt input
 * - Image attach & preview
 * - Quick action: "simulate +20% cost"
 * - Local memory: persists thread to localStorage (ideaId+userId scoped)
 *
 * Props (optional):
 *   ideaId: string (defaults to "demo-idea")
 *   userId: string (defaults to "demo-user")
 */
export default function ChatAssistant({ ideaId = "demo-idea", userId = "demo-user" }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [img64, setImg64] = useState(null);
  const [imgMime, setImgMime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [threadId, setThreadId] = useState(null);
  const fileRef = useRef(null);

  const LS_THREAD = `bizpilot:${userId}:${ideaId}:thread`;
  const LS_MSGS = `bizpilot:${userId}:${ideaId}:msgs`;

  // hydrate from localStorage
  useEffect(() => {
    try {
      const t = localStorage.getItem(LS_THREAD);
      const m = localStorage.getItem(LS_MSGS);
      if (t) setThreadId(t);
      if (m) setMessages(JSON.parse(m));
    } catch {}
  }, []);

  // persist on change
  useEffect(() => {
    try {
      if (threadId) localStorage.setItem(LS_THREAD, threadId);
      localStorage.setItem(LS_MSGS, JSON.stringify(messages));
    } catch {}
  }, [threadId, messages]);

  function onPickFile(file) {
    if (!file) {
      setImg64(null);
      setImgMime(null);
      if (fileRef.current) fileRef.current.value = "";
      return;
    }
    const r = new FileReader();
    r.onload = () => {
      const s = String(r.result);
      const [prefix, payload] = s.split(",");
      const mime = (prefix || "").match(/data:(.*);base64/);
      setImgMime(mime ? mime[1] : "image/png");
      setImg64(payload || s);
    };
    r.readAsDataURL(file);
  }

  // Fake assistant reply (UI demo only)
  function fakeAssistantReply({ userText, hasImage, mode }) {
    setLoading(true);
    setTimeout(() => {
      let reply = "";

      if (mode === "simulate20") {
        reply =
          "```json\n" +
          JSON.stringify(
            {
              baseline: { month6_profit: 12000 },
              scenario: { month6_profit: 9500 },
              delta: { month6_profit_diff: -2500, month6_margin_pp: -3.1 },
              note: "Applied +20% to material costs across 6 months."
            },
            null,
            2
          ) +
          "\n```";
      } else if (hasImage) {
        reply =
          "- Detected supplier quote image.\n" +
          "- (Demo) Extracted items: Material A x 500 @ $2.20, Packaging x 500 @ $0.35.\n" +
          "- Suggested update: add/adjust cost items in your model to reflect the quote.\n";
      } else if (userText?.toLowerCase().includes("simulate") && userText.includes("20")) {
        reply =
          "Simulating a 20% cost increase…\n\n" +
          "```json\n" +
          JSON.stringify(
            {
              baseline: { month6_profit: 12000 },
              scenario: { month6_profit: 9500 },
              delta: { month6_profit_diff: -2500, month6_margin_pp: -3.1 }
            },
            null,
            2
          ) +
          "\n```";
      } else {
        reply =
          "Here’s a concise take:\n" +
          "- I’ll use your current model assumptions as context.\n" +
          "- Ask things like “increase material cost 15%” or attach a quote image for analysis.\n" +
          "- I can respond in Bangla or English.\n";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setThreadId((tid) => tid || cryptoRandom());
      setLoading(false);
    }, 450);
  }

  function cryptoRandom() {
    try {
      return crypto.randomUUID();
    } catch {
      return "thread-" + Math.random().toString(36).slice(2);
    }
  }

  async function onSend() {
    if (!text && !img64) return;
    const userMsg = text || (img64 ? "[image attached]" : "");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);

    // “send” to fake assistant
    fakeAssistantReply({ userText: text, hasImage: !!img64 });

    // clear input
    setText("");
    setImg64(null);
    setImgMime(null);
    if (fileRef.current) fileRef.current.value = "";
  }

  function onSimulate20() {
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "Running quick scenario: +20% material cost…" }
    ]);
    fakeAssistantReply({ mode: "simulate20" });
  }

  function onReset() {
    setMessages([]);
    setThreadId(null);
    try {
      localStorage.removeItem(LS_THREAD);
      localStorage.removeItem(LS_MSGS);
    } catch {}
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* top bar */}
      <div className="flex items-center justify-between gap-2 p-2 border-b bg-white">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Quick scenario:</span>
          <button
            onClick={onSimulate20}
            className="px-3 py-1 rounded border bg-white hover:bg-gray-50"
            disabled={loading}
          >
            +20% material cost
          </button>
        </div>
        <div className="flex items-center gap-3">
          {threadId ? (
            <span className="text-xs text-green-700 bg-green-50 border border-green-200 px-2 py-1 rounded">
              Thread saved
            </span>
          ) : (
            <span className="text-xs text-gray-600">New thread</span>
          )}
          <button
            onClick={onReset}
            className="text-xs px-2 py-1 border rounded bg-white hover:bg-gray-50"
            disabled={loading}
            title="Clear local chat"
          >
            Reset
          </button>
        </div>
      </div>

      {/* messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {!messages.length && (
          <div className="text-sm text-gray-500">
            Start by asking: <span className="italic">“simulate a 20% cost increase”</span> or attach a
            supplier quote photo and say <span className="italic">“analyze this supplier quote”</span>.
          </div>
        )}
        {messages.map((m, i) => (
          <Bubble key={i} role={m.role} content={m.content} />
        ))}
        {loading && <div className="text-sm text-gray-500">thinking…</div>}
      </div>

      {/* composer */}
      <div className="p-3 border-t bg-white flex flex-col gap-2">
        {img64 && (
          <div className="flex items-center gap-3">
            <img
              alt="preview"
              src={`data:${imgMime || "image/png"};base64,${img64}`}
              className="h-16 w-16 object-cover rounded border"
            />
            <button
              onClick={() => {
                setImg64(null);
                setImgMime(null);
                if (fileRef.current) fileRef.current.value = "";
              }}
              className="text-xs px-2 py-1 border rounded bg-white hover:bg-gray-50"
            >
              Remove image
            </button>
          </div>
        )}

        <div className="flex items-center gap-2">
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={(e) => onPickFile(e.target.files?.[0] || null)}
            className="text-sm"
          />
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 px-3 py-2 border rounded-xl"
            placeholder='Ask anything, e.g., "simulate a 20% cost increase" or "analyze this supplier quote"'
          />
          <button
            onClick={onSend}
            disabled={loading || (!text && !img64)}
            className="px-4 py-2 rounded-xl bg-black text-white disabled:opacity-50"
          >
            Send
          </button>
        </div>

        <div className="text-[11px] text-gray-500">
          UI-only demo. To connect a backend later, replace the fake reply with a fetch to <code>/api/chat</code>.
        </div>
      </div>
    </div>
  );
}

/** tiny bubble renderer with fenced JSON support */
function Bubble({ role, content }) {
  const isUser = role === "user";
  const isFenced = String(content).trim().startsWith("```");
  const clean = isFenced
    ? String(content).replace(/^```[a-zA-Z]*\n?/, "").replace(/```$/, "")
    : content;

  return (
    <div
      className={`max-w-[85%] p-3 rounded-2xl shadow-sm whitespace-pre-wrap ${
        isUser ? "bg-blue-50 ml-auto" : "bg-white"
      }`}
    >
      {isFenced ? (
        <pre className="text-xs overflow-x-auto">{clean}</pre>
      ) : (
        clean
      )}
    </div>
  );
}
