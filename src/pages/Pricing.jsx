import PricingSection from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import { useSEO } from "../lib/seo";

export default function Pricing() {
  useSEO({
    title: "Pricing — ARS AI Customer Service",
    description:
      "Simple pricing that pays for itself in one saved job. See ARS's plans for AI customer service systems built for Australian small businesses.",
    path: "/pricing",
  });
  return (
    <>
      <PricingSection />
      <Testimonials />
    </>
  );
}
