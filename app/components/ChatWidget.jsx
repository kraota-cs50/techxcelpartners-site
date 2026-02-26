"use client";
import { useState } from "react";

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function send() {
    if (!input.trim()) return;
    const next = [...messages, { role: "user", content: input.trim() }];
    setMessages(next);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: next }),
    });
    const data = await res.json();
    if (data.reply) setMessages([...next, { role: "assistant", content: data.reply }]);
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 rounded-lg border border-gray-700 bg-black/60 p-3 backdrop-blur">
      <div className="mb-2 h-48 overflow-y-auto text-sm space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-blue-300" : "text-gray-200"}>
            <b>{m.role === "user" ? "You" : "Assistant"}:</b> {m.content}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 rounded border border-gray-700 bg-black/40 px-2 py-1 outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask TechXcel…"
        />
        <button
          onClick={send}
          className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
}
