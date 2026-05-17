"use client";
import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-2.5 text-sm text-[color:var(--text-primary)] placeholder:text-[color:var(--text-secondary)]/60 outline-none transition-colors focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--accent)]/30 disabled:opacity-50";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function update(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function submit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5 text-left">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[color:var(--text-secondary)]">Name</label>
        <input
          name="name"
          required
          value={form.name}
          onChange={update}
          disabled={status === "loading" || status === "success"}
          className={inputClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[color:var(--text-secondary)]">Email</label>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={update}
          disabled={status === "loading" || status === "success"}
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[color:var(--text-secondary)]">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update}
          disabled={status === "loading" || status === "success"}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project…"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="self-start inline-flex items-center justify-center rounded-md bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--background)] transition-colors hover:bg-[color:var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/40 focus:ring-offset-2 focus:ring-offset-[color:var(--background)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : status === "success" ? "✓ Message Sent!" : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
