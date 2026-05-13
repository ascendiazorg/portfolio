"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm({ error }: { error?: boolean }) {
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);
  const [wrong, setWrong]       = useState(error ?? false);
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setWrong(false);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.refresh();
    } else {
      setWrong(true);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="w-full max-w-sm px-8 py-10 bg-cream-card rounded-2xl border border-border shadow-card">
        <h1 className="font-serif text-2xl font-bold text-charcoal mb-1">Admin</h1>
        <p className="font-sans text-sm text-charcoal-muted mb-8">Enter password to view messages</p>

        <form onSubmit={submit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-cream font-sans text-sm text-charcoal outline-none focus:border-crimson transition-colors"
            autoFocus
          />
          {wrong && (
            <p className="font-sans text-sm text-crimson">Wrong password.</p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 bg-crimson text-cream font-sans font-medium text-sm rounded-lg hover:bg-crimson-light transition-colors disabled:opacity-50"
          >
            {loading ? "Checking..." : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}
