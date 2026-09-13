import { Link } from "react-router-dom";
import { Reveal } from "../../lib/motion";
import { useSEO, useJsonLd } from "../../lib/seo";

const h2 = "mt-10 font-display text-2xl font-bold tracking-tight text-white";
const p = "mt-3 text-slate-400 leading-relaxed";

const TITLE = "AI for Builders & Construction Companies: How It Actually Works";
const DESCRIPTION =
  "A missed call is a missed tender, and paperwork eats the hours you don't have. Here's exactly what an AI system does for a construction business — in plain English.";
const PATH = "/blog/ai-for-construction-companies";
const DATE = "2026-09-13";

const faqs = [
  {
    q: "Does it actually qualify a lead, or just take a message?",
    a: "It asks for scope, budget, and timeline upfront — the same way you would — and only sends you a lead once it's genuinely qualified, not just a name and a maybe.",
  },
  {
    q: "Can it read real tender documents and RFQs?",
    a: "Yes — including PDFs, scanned documents, and messy email attachments. It flags anything missing or ambiguous instead of guessing, so you get a summary, not a stack to read at 9pm.",
  },
  {
    q: "Does it handle variations too?",
    a: "It drafts the variation notice, sends it for approval, and logs the outcome automatically — so there's already a paper trail if a client questions a cost later.",
  },
  {
    q: "Will clients notice it's not a person?",
    a: "It's built to know its limits — if something needs your judgement, it flags it and hands off to you instead of guessing.",
  },
];

export default function AiForConstructionCompanies() {
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
            AI for Builders & Construction Companies: How It Actually Works
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Published{" "}
            <time dateTime={DATE}>
              {new Date(DATE).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
            </time>{" "}
            · 4 min read
          </p>

          <p className={p}>
            Builders rarely lose work on price. They lose it because someone else replied
            first. Here's what an AI system actually does for a construction business — no
            jargon, just the mechanics.
          </p>

          <h2 className={h2}>The real problem isn't skill, it's speed to reply</h2>
          <p className={p}>
            Reply to a genuine enquiry in minutes and you usually win the tender. Reply from
            the ute after knock-off and you usually don't. On top of that, reading RFQs,
            chasing details, and drafting follow-ups is real work — just not the work you got
            into building for.
          </p>

          <h2 className={h2}>Project enquiry qualification</h2>
          <p className={p}>
            Every enquiry — a website form at midnight or a call while you're on site — gets
            captured the same way. The AI asks for scope, budget, and timeline, filters out
            the tyre-kickers, and sends you a lead you can actually act on.
          </p>

          <h2 className={h2}>Reading the paperwork so you don't have to</h2>
          <p className={p}>
            Incoming documents — PDFs, scanned files, even messy email attachments — get read
            automatically. Anything missing or ambiguous gets flagged clearly instead of
            guessed at, and you get a summary instead of reading it line by line at 9pm.
          </p>

          <h2 className={h2}>Variations, documented automatically</h2>
          <p className={p}>
            A variation comes up, the AI drafts the notice, sends it for approval, and logs
            the outcome. If a client questions a cost later, the approval's already on
            record.
          </p>

          <h2 className={h2}>Clients updated before they think to ask</h2>
          <p className={p}>
            Slab poured, frame up, lock-up — each milestone sends the client an update
            automatically. You choose which milestones matter and set the message once; after
            that it just runs, instead of a phone call asking "still on track?"
          </p>

          <h2 className={h2}>Subcontractors and invoices, chased on their own</h2>
          <p className={p}>
            Scope goes out, confirmations come back logged automatically — over SMS or email,
            whichever your subbies actually respond to. Quotes and invoices get the same
            treatment: automatic follow-ups on a set schedule, so nothing sits waiting on you
            to remember.
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
              See how it works for builders
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              A live example of the AI qualifying a real enquiry — built specifically for
              construction and building companies.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link to="/industries/construction" className="btn-primary">
                Building & Construction
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
