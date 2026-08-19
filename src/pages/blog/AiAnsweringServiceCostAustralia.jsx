import { Link } from "react-router-dom";
import { Reveal } from "../../lib/motion";
import { useSEO, useJsonLd } from "../../lib/seo";

const h2 = "mt-10 font-display text-2xl font-bold tracking-tight text-white";
const p = "mt-3 text-slate-400 leading-relaxed";
const ul = "mt-3 space-y-2 text-slate-400 leading-relaxed list-disc pl-5";

const TITLE = "AI Answering Service Cost in Australia (2026)";
const DESCRIPTION =
  "What does an AI answering service actually cost in Australia? A plain-English breakdown of setup fees, monthly pricing, and what you get — from $200/month.";
const PATH = "/blog/ai-answering-service-cost-australia";
const DATE = "2026-08-19";

const faqs = [
  {
    q: "Is there a per-call charge?",
    a: "No. ARS plans are a flat monthly fee, not charged per call or per enquiry, so your costs stay predictable no matter how busy you get.",
  },
  {
    q: "What's included in the setup fee?",
    a: "Building and tuning the AI system around your specific business — your services, pricing, workflow, and calendar — so it works correctly from day one instead of acting like a generic chatbot.",
  },
  {
    q: "Is there a lock-in contract?",
    a: "No. Plans are month-to-month with no lock-in.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. Most businesses start with a lower tier and move up once their enquiry volume justifies phone answering or a website addition.",
  },
];

export default function AiAnsweringServiceCostAustralia() {
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
            How Much Does an AI Answering Service Cost in Australia?
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Published{" "}
            <time dateTime={DATE}>
              {new Date(DATE).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
            </time>{" "}
            · 5 min read
          </p>

          <p className={p}>
            If you run a small business and you're tired of missing calls while you're on the
            tools, in a meeting, or closed for the day, an AI answering service is one of the
            cheapest ways to stop leads slipping through. But how much does it actually cost in
            Australia? Here's a straight answer, with real numbers.
          </p>

          <h2 className={h2}>The short answer</h2>
          <p className={p}>
            AI answering and customer service systems for Australian small businesses typically
            run as a <strong className="text-slate-300">one-off setup fee plus a flat monthly
            subscription</strong>. At ARS, plans start at{" "}
            <strong className="text-slate-300">$200/month with a $990 one-off setup</strong>,
            and scale up from there depending on how much you need the system to do.
          </p>
          <p className={p}>
            There's no per-call charge and no lock-in — you pay a setup fee to build the system
            around your business, then a predictable monthly amount.
          </p>

          <h2 className={h2}>What you're actually paying for</h2>
          <p className={p}>
            Unlike a traditional call-answering service where a human takes a message, an AI
            system does the work end to end: it answers the enquiry, captures the details, and
            books the job straight into your calendar — 24 hours a day.
          </p>
          <p className={p}>
            The <strong className="text-slate-300">setup fee</strong> covers building and tuning
            the system specifically around your business: your services, your pricing, your
            workflow, and your Outlook calendar. That's what makes the difference between a
            generic bot and something that actually books jobs correctly from day one.
          </p>
          <p className={p}>
            The <strong className="text-slate-300">monthly subscription</strong> keeps it
            running, updated, and supported.
          </p>

          <h2 className={h2}>What the plans cost</h2>
          <p className={p}>
            Most providers offer tiers based on how much of your customer service you want
            automated:
          </p>
          <ul className={ul}>
            <li>
              <strong className="text-slate-300">Solo operator, just stop missing enquiries</strong> —
              expect around $200/month plus a setup fee from around $990. This handles email
              and web-form enquiries and saves every lead so nothing gets lost.
            </li>
            <li>
              <strong className="text-slate-300">Busy, booking-driven business</strong> — around
              $400/month plus setup. This adds missed-call phone answering and automatic
              scheduling into your Outlook calendar.
            </li>
            <li>
              <strong className="text-slate-300">Full system with a website</strong> — around
              $600/month plus setup, where the AI system is paired with a custom website built
              to feed enquiries straight into it.
            </li>
          </ul>

          <h2 className={h2}>Is it worth it?</h2>
          <p className={p}>
            The simple test: what's one job worth to you? For most trades and service
            businesses, a single booked job covers the monthly cost several times over. If
            you're currently missing even one enquiry a week because you couldn't get to the
            phone, the system pays for itself almost immediately.
          </p>

          <h2 className={h2}>How to choose</h2>
          <p className={p}>
            Don't over-buy. If you're a solo operator, start with the entry plan and upgrade
            when your call volume justifies it. If your business genuinely lives and dies by its
            bookings, the mid tier with phone answering and calendar booking is usually the
            sweet spot.
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
            <h2 className="font-display text-xl font-semibold text-white">See exact pricing</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              ARS publishes full pricing upfront — every plan, every inclusion, every setup fee
              — so you can see the cost before you talk to anyone.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link to="/pricing" className="btn-primary">
                View ARS pricing
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
