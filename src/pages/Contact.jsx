import ContactSection from "../components/Contact";
import { useSEO } from "../lib/seo";

export default function Contact() {
  useSEO({
    title: "Contact ARS — AI Customer Service Brisbane",
    description:
      "Tell us about your business and we'll show you how ARS's AI customer service system would handle your enquiries. Based in Brisbane, serving Australia.",
    path: "/contact",
  });
  return <ContactSection standalone />;
}
