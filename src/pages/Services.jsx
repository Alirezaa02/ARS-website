import ServicesSection from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import { useSEO } from "../lib/seo";

export default function Services() {
  useSEO({
    title: "Services — AI Customer Service & Websites | ARS",
    description:
      "Two ways ARS helps Australian small businesses win more work: an AI system that answers calls and books jobs automatically, and custom business websites.",
    path: "/services",
  });
  return (
    <div className="pt-24">
      <ServicesSection />
      <HowItWorks />
      <Features />
    </div>
  );
}
