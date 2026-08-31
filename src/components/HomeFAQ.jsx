import { Reveal } from "../lib/motion";
import { useJsonLd } from "../lib/seo";
import FAQSection from "./industries/FAQSection";
import { faqs } from "../data/industries";

export default function HomeFAQ() {
  useJsonLd("home-faq-schema", {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });

  return (
    <section className="section">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Common questions</span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          Before you book a demo
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="mt-14">
        <FAQSection faqs={faqs} />
      </Reveal>
    </section>
  );
}
