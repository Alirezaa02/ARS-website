import { Reveal } from "../lib/motion";
import { useSEO } from "../lib/seo";

const h2 = "mt-10 font-display text-xl font-semibold text-white";
const p = "mt-3 text-slate-400 leading-relaxed";

export default function Terms() {
  useSEO({
    title: "Terms of Use — ARS",
    description: "Terms governing your use of the ARS website, arswebservices.com.",
    path: "/terms",
  });
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <span className="eyebrow">Legal</span>
          <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Terms of Use
          </h1>
          <p className="mt-4 text-sm text-slate-500">Last updated 15 August 2026</p>

          <p className={p}>
            This site (arswebservices.com) is operated by Alireza Saeb, trading as ARS
            (ABN: 23 833 443 677). By using this site, you agree to the terms below.
          </p>

          <h2 className={h2}>What this site is</h2>
          <p className={p}>
            This is a marketing website describing ARS's AI customer service and website
            services for Australian small businesses. Content here — pricing, descriptions,
            case studies — is provided for general information and doesn't itself form a
            contract. Any actual engagement for services is agreed separately, directly with
            you, before any work begins.
          </p>

          <h2 className={h2}>Intellectual property</h2>
          <p className={p}>
            The content on this site — text, design, and branding — belongs to Alireza Saeb /
            ARS unless otherwise stated. You're welcome to link to it; please don't copy or
            reuse it without asking.
          </p>

          <h2 className={h2}>No warranty</h2>
          <p className={p}>
            We keep this site reasonably up to date, but it's provided "as is" without
            guarantees of accuracy or availability. We're not liable for any loss arising from
            your use of this site, to the extent permitted by Australian law — this doesn't
            affect any rights you have under the Australian Consumer Law that can't be excluded.
          </p>

          <h2 className={h2}>Third-party services</h2>
          <p className={p}>
            Booking a demo uses Calendly, a third-party scheduling service. Your use of that
            widget is also subject to{" "}
            <a
              href="https://calendly.com/terms"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              Calendly's own terms
            </a>
            .
          </p>

          <h2 className={h2}>Governing law</h2>
          <p className={p}>
            These terms are governed by the laws of Queensland, Australia.
          </p>

          <h2 className={h2}>Changes</h2>
          <p className={p}>
            We may update these terms occasionally; the date at the top will always reflect the
            latest version.
          </p>

          <h2 className={h2}>Contact</h2>
          <p className={p}>
            Questions about these terms? Email{" "}
            <a href="mailto:saebalireza02@gmail.com" className="text-accent hover:underline">
              saebalireza02@gmail.com
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
