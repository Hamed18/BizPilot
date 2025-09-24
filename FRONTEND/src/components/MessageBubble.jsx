// src/components/MessageBubble.jsx
import React from "react";

export default function MessageBubble({ role, content }) {
  const isUser = role === "user";
  return (
    <div
      className={`max-w-[85%] whitespace-pre-wrap p-3 rounded-2xl shadow-sm
      ${isUser ? "bg-blue-50 ml-auto" : "bg-white"}`}
    >
      {/* Render simple fenced code blocks if present */}
      {renderMarked(content)}
    </div>
  );
}

function renderMarked(text = "") {
  // very tiny "renderer": if message starts with ```json, show <pre>
  if (text.trim().startsWith("```")) {
    const clean = text.replace(/^```[a-zA-Z]*\n?/, "").replace(/```$/, "");
    return (
      <pre className="text-xs overflow-x-auto">
        {clean}
      </pre>
    );
  }
  return text;
}
