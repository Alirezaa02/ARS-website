import BookDemo from "../components/BookDemo";
import { useSEO } from "../lib/seo";

export default function Book() {
  useSEO({
    title: "Book a Free Demo — ARS",
    description:
      "See ARS capture and book a live enquiry in a free 30-minute demo, using your own real workflow — no canned pitch.",
    path: "/book",
  });
  return <BookDemo />;
}
