"use client";

import { useState } from "react";

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  read: boolean;
  created_at: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function MessageList({ initial }: { initial: Message[] }) {
  const [messages, setMessages] = useState(initial);
  const [selected, setSelected] = useState<Message | null>(null);

  const open = async (msg: Message) => {
    setSelected(msg);
    if (!msg.read) {
      await fetch("/api/admin/read", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: msg.id }),
      });
      setMessages((prev) =>
        prev.map((m) => (m.id === msg.id ? { ...m, read: true } : m))
      );
    }
  };

  const logout = async () => {
    document.cookie = "admin_session=; Max-Age=0; path=/";
    window.location.reload();
  };

  const unread = messages.filter((m) => !m.read).length;

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-cream-card border-b border-border px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-xl font-bold text-charcoal">Messages</h1>
          <p className="font-sans text-xs text-charcoal-muted mt-0.5">
            {messages.length} total · {unread} unread
          </p>
        </div>
        <button
          onClick={logout}
          className="font-sans text-xs text-charcoal-muted hover:text-crimson transition-colors"
        >
          Logout
        </button>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6 flex gap-5">

        {/* Message list */}
        <div className="w-full max-w-sm flex-shrink-0 space-y-2">
          {messages.length === 0 && (
            <p className="font-sans text-sm text-charcoal-muted py-8 text-center">No messages yet.</p>
          )}
          {messages.map((msg) => (
            <button
              key={msg.id}
              onClick={() => open(msg)}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                selected?.id === msg.id
                  ? "border-crimson bg-crimson/5"
                  : "border-border bg-cream-card hover:border-crimson/40"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-sans text-sm font-semibold text-charcoal truncate">
                  {msg.name}
                </span>
                {!msg.read && (
                  <span className="w-2 h-2 rounded-full bg-crimson flex-shrink-0" />
                )}
              </div>
              <p className="font-sans text-xs text-charcoal-muted truncate mb-1">
                {msg.email}
              </p>
              <p className="font-sans text-xs text-charcoal-muted truncate">
                {msg.message}
              </p>
              <p className="font-sans text-xs text-charcoal-muted/60 mt-2">
                {formatDate(msg.created_at)}
              </p>
            </button>
          ))}
        </div>

        {/* Message detail */}
        <div className="flex-1">
          {selected ? (
            <div className="bg-cream-card rounded-2xl border border-border p-6">
              <div className="mb-6 pb-5 border-b border-border">
                <h2 className="font-serif text-xl font-bold text-charcoal mb-1">{selected.name}</h2>
                <a
                  href={`mailto:${selected.email}`}
                  className="font-sans text-sm text-crimson hover:underline"
                >
                  {selected.email}
                </a>
                <p className="font-sans text-xs text-charcoal-muted mt-1">
                  {formatDate(selected.created_at)}
                </p>
              </div>
              <p className="font-sans text-sm text-charcoal leading-relaxed whitespace-pre-wrap">
                {selected.message}
              </p>
              <a
                href={`mailto:${selected.email}?subject=Re: Portfolio Contact`}
                className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 bg-crimson text-cream font-sans font-medium text-sm rounded-lg hover:bg-crimson-light transition-colors"
              >
                Reply via Email
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          ) : (
            <div className="bg-cream-card rounded-2xl border border-border p-6 flex items-center justify-center h-48">
              <p className="font-sans text-sm text-charcoal-muted">Select a message to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
