import React, { useState } from "react";
import { api } from "../Api/client";

export default function IdeaForm({ onCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("Retail");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);
    const files = file ? [{ type: file.type.includes("pdf") ? "pdf" : "image", url: "s3://mock/path" }] : [];
    const res = await api("/api/ideas", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        location,
        budget: Number(budget || 0),
        category,
        files
      })
    });
    setLoading(false);
    onCreated(res.id);
  }

  return (
    <div className="max-w-xl mx-auto p-4 space-y-3 bg-white rounded-2xl shadow">
      <h2 className="text-lg font-semibold">Create an idea</h2>
      <input className="border rounded p-2 w-full" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}/>
      <textarea className="border rounded p-2 w-full min-h-[100px]" placeholder="Short description"
        value={description} onChange={e=>setDesc(e.target.value)} />
      <div className="grid grid-cols-2 gap-2">
        <input className="border rounded p-2" placeholder="Location" value={location} onChange={e=>setLocation(e.target.value)}/>
        <input className="border rounded p-2" placeholder="Budget (USD)" value={budget}
          onChange={e=>setBudget(e.target.value)} />
      </div>
      <select className="border rounded p-2 w-full" value={category} onChange={e=>setCategory(e.target.value)}>
        <option>Retail</option><option>Tech</option><option>Food</option><option>Fashion</option>
      </select>
      <div className="flex items-center gap-2">
        <input type="file" accept="image/*,application/pdf" onChange={e=>setFile(e.target.files?.[0] || null)} />
        {file && <span className="text-xs text-gray-500">{file.name}</span>}
      </div>
      <button onClick={submit} disabled={loading}
        className="px-4 py-2 rounded-xl bg-black text-white disabled:opacity-50">
        {loading ? "saving…" : "Save & Generate"}
      </button>
    </div>
  );
}
