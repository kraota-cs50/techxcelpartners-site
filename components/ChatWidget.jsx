"use client";
import { useEffect, useRef, useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  async function send() {
    if (!input.trim() || loading) return;
    setError(null);
    const next = [...messages, { role: "user", content: input.trim() }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "Request failed");
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating toggle button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--accent)] shadow-lg transition-colors hover:bg-[color:var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/40 focus:ring-offset-2 focus:ring-offset-[color:var(--background)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[color:var(--background)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
          </svg>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-4 right-4 z-50 flex w-80 flex-col rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-xl border-b border-[color:var(--border)] px-3 py-2.5">
            <span className="text-sm font-semibold text-[color:var(--text-primary)]">TechXcel Assistant</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="h-52 space-y-2 overflow-y-auto p-3 text-sm">
            {messages.length === 0 && (
              <p className="mt-8 text-center text-[color:var(--text-secondary)]">Hi! Ask me anything about TechXcel.</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[75%] rounded-lg px-3 py-1.5 ${
                    m.role === "user"
                      ? "bg-[color:var(--accent)] text-[color:var(--background)]"
                      : "border border-[color:var(--border)] bg-[color:var(--background)] text-[color:var(--text-primary)]"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--text-secondary)] animate-bounce [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--text-secondary)] animate-bounce [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--text-secondary)] animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}
            {error && (
              <p className="text-center text-xs text-red-400">{error}</p>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2 border-t border-[color:var(--border)] p-2">
            <input
              className="flex-1 rounded-md border border-[color:var(--border)] bg-[color:var(--background)] px-2 py-1.5 text-sm text-[color:var(--text-primary)] placeholder:text-[color:var(--text-secondary)]/60 outline-none transition-colors focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/30 disabled:opacity-50"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask TechXcel…"
              disabled={loading}
            />
            <button
              onClick={send}
              disabled={loading}
              className="rounded-md bg-[color:var(--accent)] px-3 py-1.5 text-sm font-medium text-[color:var(--background)] transition-colors hover:bg-[color:var(--accent-hover)] disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
