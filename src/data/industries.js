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
  { step: "01", title: "Free demo", body: "See it handle a real enquiry for your business before you commit to anything." },
  { step: "02", title: "Build & tune", body: "The system is built around your services, pricing, and the tools you already use." },
  { step: "03", title: "Test it", body: "Real enquiries run through it before it goes live, so nothing's a surprise." },
  { step: "04", title: "Go live", body: "It starts handling enquiries and booking jobs straight away." },
  { step: "05", title: "Ongoing support", body: "Updated and supported as your business changes — no lock-in." },
];

export const industries = [
  {
    slug: "construction",
    category: "Trades",
    name: "Building & Construction",
    headline: "AI for Builders & Construction Companies in Australia",
    subheadline: "From first enquiry to the next follow-up, automated.",
    intro:
      "Construction has long sales cycles, heavy admin, and too many stakeholders to keep across. ARS builds AI systems for builders in Brisbane and across Australia that handle enquiry capture, document follow-up, client updates, and payment chasing — so your team can focus on building, not admin.",
    typicalTimeline: "Typically 2–4 weeks to go live",
    challenges: [
      {
        title: "Slow responses lose tenders",
        body: "A builder who acknowledges a project enquiry within minutes has a real edge over one relying on a PM to reply between site visits.",
      },
      {
        title: "Document chaos eats PM time",
        body: "Reading RFQs, chasing missing details, and drafting follow-ups is repetitive work that pulls PMs away from actually running jobs.",
      },
      {
        title: "Clients left in the dark create friction",
        body: "Without regular updates, clients chase you for status — every unanswered check-in call is time you don't get back.",
      },
    ],
    workflows: [
      {
        tag: "Enquiry capture",
        title: "Project enquiry chatbot",
        description:
          "Captures scope, budget, location, and timeline from your website or a phone call. Filters speculative enquiries and sends qualified leads to you with a full brief.",
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
          "AI reads incoming documents, extracts key details, flags anything missing or ambiguous, and puts together a structured summary — instead of you reading it line by line.",
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
          "As each project milestone is reached, an automatic update goes to the client — reducing the check-in calls that interrupt your day.",
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
          "Quotes and invoices get automatic, polite follow-ups on a set schedule — so chasing payment doesn't fall on you to remember.",
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
        "Australian construction businesses face a real tension: they're often too busy to respond to enquiries quickly, and slow response is one of the most common reasons builders lose work to a competitor who replied first.",
        "Document handling is where a lot of hidden time goes — reading RFQs, chasing missing information, drafting follow-ups. These are repetitive, systematic tasks, not judgment calls. Automating them doesn't replace your PMs; it gives them back time for the work that actually needs their expertise.",
      ],
    },
  },
];

export function getIndustry(slug) {
  return industries.find((i) => i.slug === slug);
}
