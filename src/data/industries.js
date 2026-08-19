import {
  IconMessage,
  IconDocument,
  IconCheck,
  IconPerson,
  IconFlag,
  IconBell,
  IconMail,
  IconSend,
  IconAlert,
} from "../components/industries/icons";

export const howItWorks = [
  { n: "01", title: "A free demo", body: "See it handle a real enquiry for your business before you commit to anything." },
  { n: "02", title: "Built around you", body: "Tuned to your services, your pricing, and the tools you already use — no migration." },
  { n: "03", title: "Tested first", body: "Real enquiries run through it before it ever touches a real customer." },
  { n: "04", title: "It goes live", body: "It starts answering enquiries and booking jobs straight away." },
  { n: "05", title: "Kept running", body: "Updated and supported as your business changes. No lock-in." },
];

export const industries = [
  {
    slug: "construction",
    category: "Trades",
    name: "Building & Construction",
    headline: "AI for Builders & Construction Companies in Australia",
    headlineAccent: "Construction Companies",
    subheadline: "Answer every enquiry, chase every invoice, without adding admin.",
    intro:
      "You're on site, not by a screen — but the enquiry still needs a reply, the RFQ still needs reading, and the client still wants an update. ARS builds AI systems for builders in Brisbane and across Australia that handle all of it, so your team stays focused on the build, not the inbox.",
    typicalTimeline: "Typically 2–4 weeks to go live",
    challenges: [
      {
        title: "A missed call is a missed tender",
        body: "The builder who replies to a project enquiry within minutes usually wins it. The one who replies from the ute after knock-off usually doesn't.",
      },
      {
        title: "Paperwork eats the hours you don't have",
        body: "Reading RFQs, chasing missing details, drafting follow-ups — it's real work, but it's not the work you actually got into building for.",
      },
      {
        title: "Silence makes clients nervous",
        body: "No update means a phone call. Every one of those is a PM pulled off site to say 'yeah, still on track.'",
      },
    ],
    workflows: [
      {
        tag: "Enquiry capture",
        title: "Project enquiry chatbot",
        description:
          "Captures scope, budget, location, and timeline from your website or a phone call. Filters out the tyre-kickers and sends you qualified leads with a full brief attached.",
        steps: [
          { label: "Website enquiry", icon: IconMessage },
          { label: "AI captures details", icon: IconDocument },
          { label: "Qualified", icon: IconCheck },
          { label: "Sent to you", icon: IconPerson },
        ],
      },
      {
        tag: "Document follow-up",
        title: "Tender & document processing",
        description:
          "AI reads incoming documents, pulls out the key details, flags anything missing or unclear, and hands you a summary — instead of you reading it line by line at 9pm.",
        steps: [
          { label: "Document received", icon: IconDocument },
          { label: "AI reads it", icon: IconMessage },
          { label: "Flags gaps", icon: IconAlert },
          { label: "Summary sent", icon: IconSend },
        ],
      },
      {
        tag: "Client updates",
        title: "Milestone update automation",
        description:
          "Slab poured, frame up, lock-up — each milestone triggers an automatic update to the client, so they hear it from you before they think to ask.",
        steps: [
          { label: "Milestone reached", icon: IconFlag },
          { label: "Update drafted", icon: IconDocument },
          { label: "Sent to client", icon: IconSend },
          { label: "Logged", icon: IconCheck },
        ],
      },
      {
        tag: "Payment follow-up",
        title: "Quote & invoice follow-up",
        description:
          "Quotes and invoices get polite, automatic follow-ups on a set schedule, so chasing payment isn't one more thing you have to remember to do.",
        steps: [
          { label: "Quote sent", icon: IconMail },
          { label: "Day 3 reminder", icon: IconBell },
          { label: "Day 7 follow-up", icon: IconBell },
          { label: "Escalated if needed", icon: IconAlert },
        ],
      },
    ],
    toolsExamples: ["Xero", "MYOB", "Outlook Calendar", "Google Calendar", "Gmail"],
    whyNow: {
      paragraphs: [
        "Builders aren't losing work because the quote was wrong — they're losing it because someone else replied first. Speed of response has quietly become one of the biggest edges a small building business can have, and it's the easiest one to fix.",
        "None of the admin — reading RFQs, chasing a signature, sending a status update — actually needs a PM's judgement. It needs someone (or something) to do it promptly and consistently. Handing that off doesn't replace your PMs; it gets them back on site.",
      ],
    },
  },
];

export function getIndustry(slug) {
  return industries.find((i) => i.slug === slug);
}
