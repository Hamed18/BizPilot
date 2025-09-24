// src/Pages/IdeaChat.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ChatWindow from "../components/ChatWindow";

export default function IdeaChat() {
  const { id } = useParams();
  const userId = "demo-user"; // TODO: replace with your auth user id

  if (!id) return <div className="p-6">Missing idea id.</div>;

  return (
    <div className="h-svh max-h-svh grid grid-rows-[auto_1fr] bg-gray-50">
      <header className="p-3 border-b bg-white flex items-center justify-between">
        <div className="font-semibold">BizPilot · Idea {id}</div>
        <a href="/dashboard" className="text-sm text-blue-600 hover:underline">Back to Dashboard</a>
      </header>
      <ChatWindow ideaId={id} userId={userId} />
    </div>
  );
}
