import { Link } from "react-router-dom";
import { Reveal } from "../../lib/motion";
import { useSEO, useJsonLd } from "../../lib/seo";

const h2 = "mt-10 font-display text-2xl font-bold tracking-tight text-white";
const p = "mt-3 text-slate-400 leading-relaxed";

const TITLE = "AI for Electricians in Australia: How It Actually Works";
const DESCRIPTION =
  "You can't answer the phone with both hands in a switchboard. Here's exactly what an AI system does for an electrical contracting business — in plain English.";
const PATH = "/blog/ai-for-electrical-contractors";
const DATE = "2026-10-25";

const faqs = [
  {
    q: "Can it tell the difference between an emergency and a routine job?",
    a: "Yes — a tripped switchboard with no power gets flagged as urgent and booked in for the next available callout, while a routine job like a power point install gets booked for a normal slot.",
  },
  {
    q: "Does it handle the \"do I need a licensed sparky\" type questions?",
    a: "Yes — it answers the repeat questions you've answered a hundred times, on the spot, so you're not fielding the same call every day.",
  },
  {
    q: "What about solar and EV charger enquiries?",
    a: "Those get qualified straight away instead of going cold waiting on a callback — high-value jobs where whoever responds first usually wins the install.",
  },
  {
    q: "Do I need to change my phone number or booking system?",
    a: "No. It's set up around what you already use — your existing phone number, calendar, and software — so there's nothing to migrate or relearn.",
  },
];

export default function AiForElectricalContractors() {
  useSEO({ title: TITLE, description: DESCRIPTION, path: PATH });

  useJsonLd("article-schema", {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: DATE,
    dateModified: DATE,
    author: { "@type": "Person", name: "Alireza Saeb" },
    publisher: { "@type": "Organization", name: "ARS", url: "https://www.arswebservices.com" },
    mainEntityOfPage: `https://www.arswebservices.com${PATH}`,
  });

  useJsonLd("faq-schema", {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });

  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <Link to="/blog" className="text-sm text-slate-500 hover:text-accent">
            ← Back to blog
          </Link>
          <span className="eyebrow mt-6 block w-fit">Guide</span>
          <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            AI for Electricians in Australia: How It Actually Works
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Published{" "}
            <time dateTime={DATE}>
              {new Date(DATE).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
            </time>{" "}
            · 4 min read
          </p>

          <p className={p}>
            You can't answer the phone with both hands in a switchboard. Half the jobs that call
            an electrician are urgent — if you don't pick up, they just call the next one on the
            list. Here's what an AI system actually does for an electrical contracting business,
            no jargon.
          </p>

          <h2 className={h2}>A missed call is a missed callout</h2>
          <p className={p}>
            There's no "I'll call them back later" in this trade. A tripped switchboard or no
            power doesn't wait — whoever answers first gets the job, and that's it.
          </p>

          <h2 className={h2}>24/7 call answering that knows what's urgent</h2>
          <p className={p}>
            Every call gets answered, even mid-job. The AI captures job type, location, and
            urgency, then books it in or flags your team — a tripped switchboard with no power
            gets flagged straight away, while a routine job gets booked for a normal slot. It
            works after hours and weekends too, not just during the day.
          </p>

          <h2 className={h2}>The same questions, answered automatically</h2>
          <p className={p}>
            "Do I need a licensed sparky for this?" — you've answered it a hundred times, and
            it's still eating your day. The AI handles it on the spot, every time, without it
            landing on your desk.
          </p>

          <h2 className={h2}>Solar and EV enquiries that don't go cold</h2>
          <p className={p}>
            These are high-value jobs, but slow to quote loses them — whoever qualifies the lead
            first usually gets the install. The AI captures the details and gets the job
            qualified immediately, instead of it sitting in a missed-call list until someone
            gets time to call back.
          </p>

          <h2 className={h2}>What it costs</h2>
          <p className={p}>
            ARS plans start at <strong className="text-slate-300">$150/month with a $990
            one-off setup</strong>, no per-call charge and no lock-in, typically live in{" "}
            <strong className="text-slate-300">2–4 weeks</strong>.
          </p>

          <h2 className={h2}>Frequently asked questions</h2>
          <div className="mt-6 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-base font-semibold text-white">{f.q}</h3>
                <p className="mt-2 text-slate-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="glass mt-12 rounded-2xl p-6 text-center md:p-8">
            <h2 className="font-display text-xl font-semibold text-white">
              See how it works for electricians
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              A live example of the AI booking an emergency callout on the spot — built
              specifically for electrical contractors.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link to="/industries/electrical" className="btn-primary">
                Electrical
              </Link>
              <Link to="/book" className="btn-ghost">
                Book a free demo
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
