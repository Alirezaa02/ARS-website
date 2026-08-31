import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import HomeFAQ from "../components/HomeFAQ";
import Contact from "../components/Contact";
import { useSEO } from "../lib/seo";

export default function Home() {
  useSEO({
    title: "ARS — AI customer service for Australian small business",
    description:
      "ARS builds AI customer service systems for Australian small businesses — capture every enquiry, answer missed calls, and book jobs automatically into Outlook.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing compact />
      <Testimonials />
      <HomeFAQ />
      <Contact />
    </>
  );
}
