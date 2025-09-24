// src/components/ChatWindow.jsx
import React, { useRef, useState } from "react";
import MessageBubble from "./MessageBubble";
import { useChat } from "../hooks/useChat";

export default function ChatWindow({ ideaId, userId }) {
  const { messages, send, simulateCostDelta, loading, threadId, clearThread } =
    useChat({ ideaId, userId });

  const [text, setText] = useState("");
  const [img64, setImg64] = useState(null);
  const [imgMime, setImgMime] = useState(null);
  const fileRef = useRef(null);

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
      // e.g. data:image/png;base64,AAAA...
      const mime = (prefix || "").match(/data:(.*);base64/);
      setImgMime(mime ? mime[1] : "image/png");
      setImg64(payload || s);
    };
    r.readAsDataURL(file);
  }

  async function onSend() {
    await send({ text, imageBase64: img64 || undefined });
    setText("");
    setImg64(null);
    setImgMime(null);
    if (fileRef.current) fileRef.current.value = "";
  }

  return (
    <div className="flex flex-col h-full">
      {/* top toolbar */}
      <div className="flex items-center justify-between gap-2 p-2 border-b bg-white">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Quick scenario:</span>
          <button
            onClick={() => simulateCostDelta(0.20)}
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
          {threadId && (
            <button
              onClick={clearThread}
              className="text-xs px-2 py-1 border rounded bg-white hover:bg-gray-50"
              disabled={loading}
              title="Clear local cached messages and thread id"
            >
              Reset chat
            </button>
          )}
        </div>
      </div>

      {/* messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} content={m.content} />
        ))}
        {loading && <div className="text-sm text-gray-500">thinking…</div>}
      </div>

      {/* composer */}
      <div className="p-3 border-t bg-white flex flex-col gap-2">
        {/* image preview */}
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
        <div className="text-xs text-gray-500">
          Tip: attach a supplier quote photo and ask “extract line items and compare to my model”.
        </div>
      </div>
    </div>
  );
}
