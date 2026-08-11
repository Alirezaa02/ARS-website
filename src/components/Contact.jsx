import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../lib/motion";

const field =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-accent/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-accent/20";

export default function Contact({ standalone = false }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Placeholder: wire this to your email service / backend.
    setSent(true);
  };

  return (
    <section className={standalone ? "pt-36 pb-24" : "section"}>
      <div className="mx-auto max-w-5xl px-0 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Tell me about your business
            </h2>
            <p className="mt-4 text-slate-400">
              Send a few details and I'll come back to you with how ARS would fit — usually
              within a business day.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <a href="mailto:hello@ars.com.au" className="flex items-center gap-3 text-slate-300 hover:text-accent">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4zM4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                hello@ars.com.au
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6"/></svg>
                </span>
                Brisbane, Australia
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass rounded-2xl p-6 md:p-8">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="grid min-h-[360px] place-items-center text-center"
                  >
                    <div>
                      <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-white">Message sent</h3>
                      <p className="mt-2 text-sm text-slate-400">
                        Thanks {form.name || "there"} — I'll be in touch shortly.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={submit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs text-slate-400">Your name</label>
                        <input required value={form.name} onChange={update("name")} className={field} placeholder="Ali Smith" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs text-slate-400">Email</label>
                        <input required type="email" value={form.email} onChange={update("email")} className={field} placeholder="you@business.com.au" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs text-slate-400">Business name & type</label>
                      <input value={form.business} onChange={update("business")} className={field} placeholder="e.g. Smith Plumbing · Trades" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs text-slate-400">What are you after?</label>
                      <textarea required rows={5} value={form.message} onChange={update("message")} className={`${field} resize-none`} placeholder="Tell me about your enquiries and how you handle them now..." />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      Send message
                    </button>
                    <p className="text-center text-xs text-slate-600">
                      Placeholder form — connect to your email service to go live.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
