import { useEffect } from "react";
import { motion } from "framer-motion";
import { Reveal } from "../lib/motion";

const perks = [
  "A 30-minute, no-pressure walkthrough",
  "See the AI capture and book a live enquiry",
  "A recommended setup and honest price for your business",
];

const CALENDLY_URL =
  "https://calendly.com/saebalireza02/ars-demo-call?background_color=080b14&text_color=ffffff&primary_color=22e3c3&hide_gdpr_banner=1";

function CalendlyWidget() {
  useEffect(() => {
    const src = "https://assets.calendly.com/assets/external/widget.js";
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const onMessage = (e) => {
      if (e.data?.event === "calendly.event_scheduled" && typeof window.gtag === "function") {
        window.gtag("event", "schedule_demo", { event_category: "engagement" });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{ minWidth: "320px", height: "650px" }}
    />
  );
}

export default function BookDemo() {
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">Book a demo</span>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              See it capture a lead <span className="h-grad">before you decide</span>
            </h1>
            <p className="mt-5 text-lg text-slate-400">
              Pick a time that suits and I'll show you exactly how ARS would handle
              enquiries for your business — using your real workflow, not a canned demo.
            </p>
            <ul className="mt-8 space-y-4">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="glass mt-10 rounded-xl p-5">
              <p className="text-sm text-slate-400">
                Prefer to talk first? Reach me directly at{" "}
                <a href="mailto:hello@arswebservices.com" className="text-accent hover:underline">
                  hello@arswebservices.com
                </a>
                .
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass overflow-hidden rounded-2xl p-2 shadow-card"
            >
              <CalendlyWidget />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
