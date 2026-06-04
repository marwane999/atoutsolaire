"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { subscribeNewsletter } from "@/lib/api";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await subscribeNewsletter({ email });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-accent">
        <CheckCircle className="w-5 h-5" />
        <span className="text-sm font-medium">
          Inscription confirmée !
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          required
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <Button type="submit" variant="primary" size="sm" loading={loading}>
        S&apos;inscrire
      </Button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
}
