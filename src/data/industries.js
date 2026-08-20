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
  IconEdit,
  IconUsers,
  IconPhone,
  IconStar,
  IconClock,
  IconCalendar,
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
      "You're on site, not by a screen. ARS builds AI systems that answer enquiries, read the paperwork, and keep clients updated — so you can stay on the build.",
    typicalTimeline: "Typically 2–4 weeks to go live",
    challenges: [
      {
        title: "A missed call is a missed tender",
        body: "Reply in minutes and you usually win the job. Reply from the ute after knock-off and you usually don't.",
      },
      {
        title: "Paperwork eats the hours you don't have",
        body: "Reading RFQs, chasing details, drafting follow-ups — real work, but not the work you got into building for.",
      },
      {
        title: "Silence makes clients nervous",
        body: "No update means a phone call — a PM pulled off site just to say 'yeah, still on track.'",
      },
    ],
    workflows: [
      {
        tag: "Enquiry capture",
        title: "Project enquiry chatbot",
        description:
          "Captures scope, budget, and timeline from your website or a call, filters out the tyre-kickers, and sends you a qualified lead.",
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
          "AI reads incoming documents, flags anything missing, and hands you a summary — no more reading it line by line at 9pm.",
        steps: [
          { label: "Document received", icon: IconDocument },
          { label: "AI reads it", icon: IconMessage },
          { label: "Flags gaps", icon: IconAlert },
          { label: "Summary sent", icon: IconSend },
        ],
      },
      {
        tag: "Variations",
        title: "Variation documentation",
        description:
          "A variation comes up, the AI drafts the notice, sends it for approval, and logs the outcome.",
        steps: [
          { label: "Variation identified", icon: IconEdit },
          { label: "Notice drafted", icon: IconDocument },
          { label: "Sent for approval", icon: IconSend },
          { label: "Logged", icon: IconCheck },
        ],
      },
      {
        tag: "Client updates",
        title: "Milestone update automation",
        description:
          "Slab poured, frame up, lock-up — each milestone sends the client an update before they think to ask.",
        steps: [
          { label: "Milestone reached", icon: IconFlag },
          { label: "Update drafted", icon: IconDocument },
          { label: "Sent to client", icon: IconSend },
          { label: "Logged", icon: IconCheck },
        ],
      },
      {
        tag: "Subcontractors",
        title: "Subcontractor coordination",
        description:
          "Scope goes out, confirmations come back, all logged automatically — no more phone tag.",
        steps: [
          { label: "Scope sent", icon: IconUsers },
          { label: "Briefing sent", icon: IconSend },
          { label: "Confirmed", icon: IconCheck },
          { label: "Logged", icon: IconDocument },
        ],
      },
      {
        tag: "Payment follow-up",
        title: "Quote & invoice follow-up",
        description:
          "Quotes and invoices get automatic follow-ups on a set schedule — one less thing to remember.",
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
        "Builders rarely lose work on price. They lose it because someone else replied first — and that's the easiest edge to fix.",
        "Reading RFQs, chasing signatures, sending updates — none of it needs a PM's judgement, just consistency. Handing it off doesn't replace your PMs. It gets them back on site.",
      ],
    },
  },
  {
    slug: "electrical",
    category: "Trades",
    name: "Electrical",
    headline: "AI for Electrical Contractors in Australia",
    headlineAccent: "Electrical Contractors",
    subheadline: "Answer every call, even the ones that come in mid-job.",
    intro:
      "You can't answer the phone with both hands in a switchboard. ARS builds AI systems that answer every call, qualify the job, and get it booked in — without you touching your phone.",
    typicalTimeline: "Typically 2–4 weeks to go live",
    challenges: [
      {
        title: "A missed call is a missed callout",
        body: "Half the jobs that call an electrician are urgent. If you don't pick up, they just call the next one on the list.",
      },
      {
        title: "The same questions, over and over",
        body: "\"Do I need a licensed sparky for this?\" — you've answered it a hundred times, and it's still eating your day.",
      },
      {
        title: "Solar and EV enquiries go cold fast",
        body: "High-value jobs, but slow to quote loses them. Whoever qualifies the lead first usually gets the install.",
      },
    ],
    workflows: [
      {
        tag: "Call answering",
        title: "24/7 AI call answering",
        description:
          "Every call gets answered, even mid-job. AI captures job type, location, and urgency, then books it in or flags your team.",
        steps: [
          { label: "Call comes in", icon: IconPhone },
          { label: "AI answers", icon: IconMessage },
          { label: "Job captured", icon: IconDocument },
          { label: "Booked in", icon: IconCalendar },
        ],
      },
      {
        tag: "Compliance FAQ",
        title: "Compliance & safety chatbot",
        description:
          "Handles the \"do I need a licensed electrician for this\" questions on its own, and turns the real leads into booked site visits.",
        steps: [
          { label: "Question asked", icon: IconMessage },
          { label: "AI answers", icon: IconCheck },
          { label: "Qualified as lead", icon: IconDocument },
          { label: "Visit booked", icon: IconCalendar },
        ],
      },
      {
        tag: "Solar & EV",
        title: "Solar & EV charger enquiry bot",
        description:
          "Asks the right questions upfront — roof type, budget, target size — and books a site assessment straight into your calendar.",
        steps: [
          { label: "Enquiry in", icon: IconMessage },
          { label: "AI qualifies", icon: IconDocument },
          { label: "Assessment booked", icon: IconCalendar },
          { label: "You're briefed", icon: IconPerson },
        ],
      },
      {
        tag: "Quote follow-up",
        title: "Automated quote follow-up",
        description:
          "Quote sent, then a follow-up sequence runs on its own until the customer accepts — nobody forgotten because you got busy.",
        steps: [
          { label: "Quote sent", icon: IconMail },
          { label: "SMS reminder", icon: IconBell },
          { label: "Follow-up sent", icon: IconSend },
          { label: "Accepted", icon: IconCheck },
        ],
      },
      {
        tag: "Inspections",
        title: "Inspection & testing reminders",
        description:
          "Switchboard checks and safety inspections fall due automatically, and the customer books their own slot without you tracking a spreadsheet.",
        steps: [
          { label: "Due date hits", icon: IconClock },
          { label: "Reminder sent", icon: IconBell },
          { label: "Customer books", icon: IconCalendar },
          { label: "Job created", icon: IconCheck },
        ],
      },
      {
        tag: "Reviews & referrals",
        title: "After-job review & referral requests",
        description:
          "Job marked complete, and the customer gets asked for a review and a referral automatically — two things you'd usually forget to chase.",
        steps: [
          { label: "Job complete", icon: IconCheck },
          { label: "Review asked", icon: IconMessage },
          { label: "Review posted", icon: IconStar },
          { label: "Referral captured", icon: IconUsers },
        ],
      },
    ],
    toolsExamples: ["Xero", "MYOB", "Outlook Calendar", "Google Calendar", "Gmail"],
    whyNow: {
      paragraphs: [
        "Electrical is an emergency-adjacent trade — a lot of enquiries are urgent, and urgent customers don't wait around. Whoever answers first usually gets the job.",
        "Compliance questions, quote chasing, review requests — none of it needs your licence, just someone consistent to handle it. That's exactly what this replaces.",
      ],
    },
  },
];

export function getIndustry(slug) {
  return industries.find((i) => i.slug === slug);
}
