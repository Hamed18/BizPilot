import React, { useEffect, useState } from "react";
import { api } from "../Api/client";
import AiChatAssistant from "../components/AiChatAssistant";
export default function Dashboard() {
  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    api("/api/ideas").then(setIdeas).catch(() => setIdeas([]));
  }, []);
  return (
	<div className="">
		<AiChatAssistant></AiChatAssistant>
	  <div className="p-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {/* {ideas.map(i => (
        <div key={i._id} className="bg-white rounded-2xl p-4 shadow">
          <div className="text-lg font-semibold">{i.title}</div>
          <div className="text-sm text-gray-600">{i.location} · ${i.budget}</div>
          <p className="mt-2 text-sm line-clamp-3">{i.description}</p>
          <a href={`/ideas/${i._id}/chat`} className="mt-3 inline-block text-blue-600 hover:underline">Open Chat</a>
        </div>
      ))} */}
      {/* {!ideas.length && <div className="text-gray-500">No ideas yet — create one</div>} */}
    </div>

	</div>
  );
}
