"use client";

import { useState } from "react";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/button";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  budget: string;
  message: string;
  website: string; // honeypot
};

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  subject: "",
  budget: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [data, setData] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | "success" | "error">(null);

  const onChange =
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData((s) => ({ ...s, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOk(null);

    if (data.website) return; // Bot (honeypot)

    if (!data.name || !data.email || !data.message) {
      setOk("error");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setOk("success");
      setData(initial);
    } catch {
      setOk("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="p-6 md:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm text-slate-300">Name *</label>
          <Input value={data.name} onChange={onChange("name")} placeholder="Max Mustermann" required />
        </div>
        <div>
          <label className="text-sm text-slate-300">E-Mail *</label>
          <Input type="email" value={data.email} onChange={onChange("email")} placeholder="max@firma.de" required />
        </div>
        <div>
          <label className="text-sm text-slate-300">Unternehmen</label>
          <Input value={data.company} onChange={onChange("company")} placeholder="Ihre Firma" />
        </div>
        <div>
          <label className="text-sm text-slate-300">Telefon</label>
          <Input value={data.phone} onChange={onChange("phone")} placeholder="+49 ..." />
        </div>
        <div>
          <label className="text-sm text-slate-300">Betreff</label>
          <Input value={data.subject} onChange={onChange("subject")} placeholder="Projektanfrage / Frage / ..." />
        </div>
        <div>
          <label className="text-sm text-slate-300">Budget (optional)</label>
          <Input value={data.budget} onChange={onChange("budget")} placeholder="z. B. 10–25k €" />
        </div>
        {/* Honeypot (unsichtbar) */}
        <input
          aria-hidden
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          name="website"
          value={data.website}
          onChange={onChange("website")}
        />
      </div>

      <div className="mt-4">
        <label className="text-sm text-slate-300">Nachricht *</label>
        <Textarea
          value={data.message}
          onChange={onChange("message")}
          placeholder="Worum geht es? Ziele, Fristen, Rahmen …"
          rows={6}
          required
        />
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <Button
          type="submit"
          disabled={loading}
          className={[
            "rounded-2xl px-5 py-2.5 text-base font-semibold",
            "border border-white/15 bg-white/10 hover:bg-white/20",
            "backdrop-blur-sm transition-all duration-300",
            "hover:-translate-y-0.5",
          ].join(" ")}
        >
          {loading ? "Senden …" : "Nachricht senden"}
        </Button>

        {ok === "success" && (
          <span className="text-green-300 text-sm">Danke! Wir melden uns zeitnah.</span>
        )}
        {ok === "error" && (
          <span className="text-red-300 text-sm">Ups – bitte Pflichtfelder prüfen.</span>
        )}
      </div>

      {/* Alternativen */}
      <div className="mt-5 text-sm text-slate-400">
        Oder direkt per{" "}
        <a className="underline hover:text-slate-200" href="mailto:hello@soule-smart.business">
          E-Mail
        </a>
        .
      </div>
    </form>
  );
}