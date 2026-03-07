"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    challenge: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mreygrbn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          challenge: formData.challenge,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", challenge: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Request received!</h3>
        <p className="text-warm-gray">I&apos;ll review your brand and reply personally within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
          Your name
        </label>
        <input
          id="name"
          type="text"
          placeholder="First name is fine"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-teal transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
          Your email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@yourcompany.com"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-teal transition-colors"
        />
        <p className="mt-1 text-xs text-warm-gray">
          I&apos;ll reply personally — usually within 48 hours.
        </p>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">
          Company <span className="text-warm-gray font-normal">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          placeholder="Where do you work?"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-teal transition-colors"
        />
      </div>

      <div>
        <label htmlFor="challenge" className="block text-sm font-medium text-navy mb-1.5">
          What&apos;s your brand and biggest GEO challenge?
        </label>
        <textarea
          id="challenge"
          placeholder="Tell me what you sell, who you sell to, and what brought you here. The more context you give me, the more useful my response will be."
          rows={5}
          maxLength={500}
          value={formData.challenge}
          onChange={(e) =>
            setFormData({ ...formData, challenge: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-teal transition-colors resize-y"
        />
        <p className="mt-1 text-xs text-warm-gray text-right">
          {formData.challenge.length} / 500
        </p>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full justify-center !py-3.5 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send my audit request"}
        {status !== "sending" && (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </button>

      <p className="text-xs text-warm-gray text-center flex items-center justify-center gap-1.5">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        I don&apos;t share your information. Ever.
      </p>
    </form>
  );
}
