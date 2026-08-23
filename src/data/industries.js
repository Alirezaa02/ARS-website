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
  IconDollar,
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
        details:
          "Works the same whether someone fills in a form at midnight or calls while you're on site. If a detail's missing, it asks — you never get a lead you can't act on.",
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
        details:
          "Handles PDFs, scanned documents, even messy email attachments. If something's ambiguous, it flags it clearly instead of guessing.",
        steps: [
          { label: "Document received", icon: IconDocument },
          { label: "AI reads it", icon: IconMessage },
          { label: "Flags gaps", icon: IconAlert, tone: "warn" },
          { label: "Summary sent", icon: IconSend },
        ],
      },
      {
        tag: "Variations",
        title: "Variation documentation",
        description:
          "A variation comes up, the AI drafts the notice, sends it for approval, and logs the outcome.",
        details:
          "Keeps a paper trail automatically, so if a client questions a cost later, the approval's already on record.",
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
        details:
          "You choose the milestones that matter — slab, frame, lock-up, handover — and set the message once. After that it just runs.",
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
        details:
          "Works over SMS or email, whichever your subbies actually respond to. Confirmations get logged against the job automatically.",
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
        details:
          "The tone stays professional and consistent — never a chase that feels awkward. You can see exactly where every quote sits at a glance.",
        steps: [
          { label: "Quote sent", icon: IconMail },
          { label: "Day 3 reminder", icon: IconBell },
          { label: "Day 7 follow-up", icon: IconBell },
          { label: "Escalated if needed", icon: IconAlert, tone: "warn" },
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
        details:
          "Works after hours and on weekends too, not just during the day. Urgent jobs get flagged so you know what to call back first.",
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
        details:
          "Trained on the kinds of questions your customers actually ask, not generic disclaimers. Real jobs still get a proper site visit booked.",
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
        details:
          "Filters out the enquiries that are months away from being real, so your estimator's time goes to the ones ready to move.",
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
        details:
          "Stops automatically the moment the customer responds either way — no awkward reminders after they've already said yes or no.",
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
        details:
          "Pulls from the original job date, so nothing depends on you remembering to set a reminder twelve months later.",
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
        details:
          "Timed to go out once the job's actually wrapped up and the customer's happy — not the moment the invoice is paid.",
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
  {
    slug: "plumbing",
    category: "Trades",
    name: "Plumbing",
    headline: "AI for Plumbers in Australia",
    headlineAccent: "Plumbers",
    subheadline: "Answer every call — burst pipe at 2am or not.",
    intro:
      "Emergencies don't wait for business hours. ARS builds AI systems that answer every call, work out what's urgent, and get routine jobs booked — without you picking up at 2am.",
    typicalTimeline: "Typically 2–4 weeks to go live",
    challenges: [
      {
        title: "A burst pipe won't wait",
        body: "Emergency jobs go to whoever answers first. Miss the call, and it's already booked with someone else.",
      },
      {
        title: "Quote questions eat your evenings",
        body: "\"How much to fix a blocked drain?\" — you've answered it a hundred times, and it's still eating into your night.",
      },
      {
        title: "Invoices don't chase themselves",
        body: "Every unpaid invoice is time you spend chasing instead of on the tools.",
      },
    ],
    workflows: [
      {
        tag: "Call answering",
        title: "24/7 AI call answering",
        description:
          "Every call gets answered straight away, day or night. AI captures job type and address, then books it into your calendar.",
        details:
          "Works the same at 2am as it does at 2pm. If it's urgent, you'll know before you even open the message.",
        steps: [
          { label: "Phone rings", icon: IconPhone },
          { label: "AI answers", icon: IconMessage },
          { label: "Job captured", icon: IconDocument },
          { label: "Booked in", icon: IconCalendar },
        ],
      },
      {
        tag: "Quote chatbot",
        title: "Website quote chatbot",
        description:
          "Handles \"how much to fix...\" questions on your website, asks the right follow-ups, and sends you a qualified lead.",
        details:
          "Filters out the just-browsing enquiries, so you're not quoting jobs that were never going to happen.",
        steps: [
          { label: "Chat opens", icon: IconMessage },
          { label: "AI asks questions", icon: IconDocument },
          { label: "Lead captured", icon: IconCheck },
          { label: "Sent to you", icon: IconSend },
        ],
      },
      {
        tag: "Quote follow-up",
        title: "Automated quote follow-up",
        description:
          "Quote sent, then a follow-up sequence runs on its own until the customer books or declines — no hot lead left to go cold.",
        details:
          "Stops the moment they respond either way. Never an awkward reminder after they've already said yes.",
        steps: [
          { label: "Quote sent", icon: IconMail },
          { label: "SMS reminder", icon: IconBell },
          { label: "Follow-up sent", icon: IconSend },
          { label: "Customer books", icon: IconCheck },
        ],
      },
      {
        tag: "Reviews",
        title: "Review request on completion",
        description:
          "Job marked done, and the customer gets a text asking for a review while the job's still fresh in their mind.",
        details:
          "Timed right after the job, not days later once they've already forgotten how good the work was.",
        steps: [
          { label: "Job complete", icon: IconCheck },
          { label: "SMS sent", icon: IconMessage },
          { label: "Link tapped", icon: IconSend },
          { label: "Review posted", icon: IconStar },
        ],
      },
      {
        tag: "Payment follow-up",
        title: "Invoice & payment reminders",
        description:
          "Overdue invoices get a polite, automatic reminder sequence before it ever needs a personal phone call from you.",
        details:
          "Keeps the tone professional throughout, so the relationship's still intact by the time you do need to step in.",
        steps: [
          { label: "Invoice overdue", icon: IconAlert, tone: "warn" },
          { label: "Day 1 reminder", icon: IconMessage },
          { label: "Day 3 follow-up", icon: IconMail },
          { label: "Escalated to you", icon: IconBell, tone: "warn" },
        ],
      },
      {
        tag: "Emergency triage",
        title: "Emergency call triage",
        description:
          "After-hours calls get triaged for urgency. Genuine emergencies go straight to you; routine jobs get booked for the next slot.",
        details:
          "You only get woken up for the ones that actually need you at 2am — everything else waits for a normal hour.",
        steps: [
          { label: "Call comes in", icon: IconPhone },
          { label: "AI assesses urgency", icon: IconAlert, tone: "warn" },
          { label: "Triaged", icon: IconCheck },
          { label: "Handled", icon: IconCalendar },
        ],
      },
    ],
    toolsExamples: ["Xero", "MYOB", "Outlook Calendar", "Google Calendar", "Gmail"],
    whyNow: {
      paragraphs: [
        "Plumbing has more genuine emergencies than most trades — burst pipes and blocked drains don't wait for business hours. Whoever answers first usually gets the job.",
        "Quote questions, review requests, invoice chasing — none of it needs your trade skills, just consistency. Handing it off means fewer interruptions on the jobs that do.",
      ],
    },
  },
  {
    slug: "air-conditioning",
    category: "Trades",
    name: "Air Conditioning",
    headline: "AI for HVAC & Air Conditioning Businesses in Australia",
    headlineAccent: "Air Conditioning Businesses",
    subheadline: "Handle the summer surge without missing a single call.",
    intro:
      "When temperatures spike, enquiries triple. ARS builds AI systems that answer every call, book every job, and keep your technicians focused on installs — not the phone.",
    typicalTimeline: "Typically 2–4 weeks to go live",
    challenges: [
      {
        title: "Peak season overwhelms the phones",
        body: "You can't hire enough staff for the summer rush. Every missed call in peak season is a job that just went to someone else.",
      },
      {
        title: "Maintenance revenue quietly disappears",
        body: "Units installed years ago need servicing, but nobody's chasing it. No reminder usually means no repeat booking.",
      },
      {
        title: "Ducted quotes take forever to close",
        body: "Site visits, measurements, back-and-forth — by the time you've quoted, the customer's gone with whoever was faster.",
      },
    ],
    workflows: [
      {
        tag: "Call overflow",
        title: "Peak-season call overflow",
        description:
          "Handles a flood of calls at once, no hold music and nothing missed — exactly when you need it most.",
        details:
          "Scales the same whether it's 3 calls or 30. Nobody waits on hold, and nothing falls through during your busiest week of the year.",
        steps: [
          { label: "Calls come in", icon: IconPhone },
          { label: "AI answers all", icon: IconMessage },
          { label: "Booked in", icon: IconCalendar },
          { label: "None missed", icon: IconCheck },
        ],
      },
      {
        tag: "Ducted enquiries",
        title: "Ducted system enquiry chatbot",
        description:
          "Asks about home size, current system, and budget on your website, then books a site assessment — so you arrive pre-qualified, not cold.",
        details:
          "Filters out the people just comparison shopping, so your time goes to enquiries that are actually ready to install.",
        steps: [
          { label: "Enquiry in", icon: IconMessage },
          { label: "AI qualifies", icon: IconDocument },
          { label: "Assessment booked", icon: IconCalendar },
          { label: "You're briefed", icon: IconPerson },
        ],
      },
      {
        tag: "Maintenance",
        title: "Annual maintenance reminders",
        description:
          "Sends a reminder at the 12-month mark automatically, and books the service before the customer thinks about calling someone else.",
        details:
          "Runs in the background with zero effort from you — repeat business that would otherwise just quietly stop.",
        steps: [
          { label: "Install date stored", icon: IconDocument },
          { label: "12 months on", icon: IconClock },
          { label: "Reminder sent", icon: IconBell },
          { label: "Service booked", icon: IconCalendar },
        ],
      },
      {
        tag: "Warranty",
        title: "Warranty registration & scheduling",
        description:
          "Registers the warranty and books the first service automatically the moment an install's marked complete.",
        details:
          "One less form for your team to remember, and the customer's already covered before they even ask.",
        steps: [
          { label: "Install complete", icon: IconCheck },
          { label: "Warranty registered", icon: IconDocument },
          { label: "Confirmation sent", icon: IconMail },
          { label: "Service scheduled", icon: IconCalendar },
        ],
      },
      {
        tag: "Emergency triage",
        title: "Emergency breakdown triage",
        description:
          "After-hours breakdowns get triaged for urgency — genuine emergencies go to your on-call tech, routine ones get the next slot.",
        details:
          "You only get called out at midnight for the ones that actually can't wait until morning.",
        steps: [
          { label: "Call comes in", icon: IconPhone },
          { label: "AI assesses", icon: IconAlert, tone: "warn" },
          { label: "Triaged", icon: IconCheck },
          { label: "Handled", icon: IconCalendar },
        ],
      },
      {
        tag: "Finance",
        title: "Finance enquiry handling",
        description:
          "Explains financing options and connects the customer straight to your finance partner, so a big purchase doesn't stall at reception.",
        details:
          "Keeps the conversation moving instead of leaving a finance question sitting unanswered in an inbox for days.",
        steps: [
          { label: "Finance question", icon: IconDollar },
          { label: "AI explains options", icon: IconDocument },
          { label: "Interest captured", icon: IconCheck },
          { label: "Connected to partner", icon: IconUsers },
        ],
      },
    ],
    toolsExamples: ["Xero", "MYOB", "Outlook Calendar", "Google Calendar", "Gmail"],
    whyNow: {
      paragraphs: [
        "Air conditioning is one of the most seasonal trades there is — demand triples in summer, and whoever answers the phone fastest usually wins the job.",
        "Maintenance reminders and warranty follow-ups are pure repeat revenue that most businesses just let slip. None of it needs a technician's skill, just consistency.",
      ],
    },
  },
  {
    slug: "pest-control",
    category: "Trades",
    name: "Pest Control",
    headline: "AI Answering Service for Pest Control Businesses in Australia",
    headlineAccent: "Pest Control Businesses",
    subheadline: "Never miss an after-hours callout again.",
    intro:
      "Pests don't wait for business hours, and neither do your competitors. ARS builds AI systems that answer every call, qualify the job, and book treatments — without you picking up at 10pm.",
    typicalTimeline: "Typically 2–4 weeks to go live",
    challenges: [
      {
        title: "Urgent jobs go to whoever answers first",
        body: "Rats in the kitchen at 10pm means calling the first three pest controllers on Google. Whoever picks up wins the job.",
      },
      {
        title: "The same questions, every single call",
        body: "Termites, cockroaches, ants, rodents — the qualifying questions barely change, and answering them still eats your day.",
      },
      {
        title: "Recurring treatments slip through the cracks",
        body: "Annual inspections and quarterly treatments are revenue you already earned. No reminder usually means no repeat booking.",
      },
    ],
    workflows: [
      {
        tag: "Call & triage",
        title: "24/7 call answering & emergency triage",
        description:
          "Every call gets answered instantly, day or night. AI captures pest type and property details, then books the job or escalates genuine emergencies straight to you.",
        details:
          "Genuine emergencies go straight to your on-call tech; everything else gets booked without needing you on the phone at all.",
        steps: [
          { label: "Call comes in", icon: IconPhone },
          { label: "AI assesses", icon: IconAlert, tone: "warn" },
          { label: "Job captured", icon: IconDocument },
          { label: "Booked or escalated", icon: IconCalendar },
        ],
      },
      {
        tag: "Quote chatbot",
        title: "Website quote & booking chatbot",
        description:
          "Handles \"how much for a termite inspection\" questions on your website, gives an indicative price, and books the job before they check a competitor.",
        details:
          "Keeps the conversation moving instead of losing them to whoever answers their next open tab first.",
        steps: [
          { label: "Chat opens", icon: IconMessage },
          { label: "AI qualifies", icon: IconDocument },
          { label: "Price given", icon: IconDollar },
          { label: "Booked", icon: IconCalendar },
        ],
      },
      {
        tag: "Inspections",
        title: "Annual inspection reminders",
        description:
          "Sends a reminder at the 12-month mark for termite inspections and periodic treatments — recurring revenue that runs itself.",
        details:
          "Most customers won't call back on their own until they see a problem. This brings them back on schedule instead.",
        steps: [
          { label: "Treatment logged", icon: IconDocument },
          { label: "12 months on", icon: IconClock },
          { label: "Reminder sent", icon: IconBell },
          { label: "Booked in", icon: IconCalendar },
        ],
      },
      {
        tag: "Quote follow-up",
        title: "Quote follow-up automation",
        description:
          "Inspection quote sent, then a follow-up sequence runs on its own until the customer books or declines — no hot lead left to go cold.",
        details:
          "Stops automatically the moment they respond either way — no awkward reminder after they've already said yes.",
        steps: [
          { label: "Quote sent", icon: IconMail },
          { label: "SMS reminder", icon: IconBell },
          { label: "Follow-up sent", icon: IconSend },
          { label: "Booked", icon: IconCheck },
        ],
      },
      {
        tag: "Reviews",
        title: "Review request on completion",
        description:
          "Job marked done, and the customer gets a text asking for a Google review while it's still fresh in their mind.",
        details:
          "Timed right after the job, not days later once they've forgotten how quickly the problem was sorted.",
        steps: [
          { label: "Job complete", icon: IconCheck },
          { label: "SMS sent", icon: IconMessage },
          { label: "Link tapped", icon: IconSend },
          { label: "Review posted", icon: IconStar },
        ],
      },
      {
        tag: "Warranty",
        title: "Warranty & re-treatment scheduling",
        description:
          "Treatments under warranty get logged automatically, and any re-treatment request is captured and booked without chasing paperwork.",
        details:
          "One less thing for your team to track manually, and customers covered under warranty never fall through the cracks.",
        steps: [
          { label: "Treatment logged", icon: IconDocument },
          { label: "Warranty tracked", icon: IconCheck },
          { label: "Re-treatment asked", icon: IconMessage },
          { label: "Booked", icon: IconCalendar },
        ],
      },
    ],
    toolsExamples: ["Xero", "MYOB", "Outlook Calendar", "Google Calendar", "Gmail"],
    whyNow: {
      paragraphs: [
        "Pest control is a speed-to-lead business — when someone's got cockroaches in the kitchen, they're calling multiple businesses in a row until someone picks up. Whoever answers first usually wins, regardless of price.",
        "Inspection reminders and re-treatment follow-ups are recurring revenue most businesses already earned once and then just let go quiet. None of it needs a technician's skill, just consistency.",
      ],
    },
  },
  {
    slug: "curtains-and-blinds",
    category: "Trades",
    name: "Curtains & Blinds",
    headline: "AI for Curtains & Blinds Businesses in Australia",
    headlineAccent: "Curtains & Blinds Businesses",
    subheadline: "Book the measure, send the quote, close the job — automatically.",
    intro:
      "Customers shop around before they buy curtains or blinds. ARS builds AI systems that answer every enquiry, book the measurement, and get the quote out before they choose someone else.",
    typicalTimeline: "Typically 2–4 weeks to go live",
    challenges: [
      {
        title: "Slow follow-up loses the sale",
        body: "Customers usually get a few quotes before deciding. Whoever replies first, and keeps following up, usually wins the job.",
      },
      {
        title: "Booking measurements eats your day",
        body: "Back-and-forth to find a time that works is real admin, and it's not the part of the job you actually get paid for.",
      },
      {
        title: "Repeat business goes unclaimed",
        body: "A customer who did the living room often needs the bedrooms too, but nobody's asking until they think to call.",
      },
    ],
    workflows: [
      {
        tag: "Call answering",
        title: "24/7 AI call answering",
        description:
          "Every call gets answered straight away. AI captures what they need and books them in for a measurement — even after hours.",
        details:
          "Works the same whether it's a call during work hours or someone browsing your site at 9pm.",
        steps: [
          { label: "Call comes in", icon: IconPhone },
          { label: "AI answers", icon: IconMessage },
          { label: "Enquiry captured", icon: IconDocument },
          { label: "Measurement booked", icon: IconCalendar },
        ],
      },
      {
        tag: "Measurement & quoting",
        title: "Measurement & quote booking",
        description:
          "Enquiry comes in, AI checks your real calendar and books a measurement time, confirms details with the customer, then sends the quote automatically once measurements are in.",
        details:
          "This is the same system already built and running for a real ARS client in this exact trade — enquiry to booked measurement to quote, no manual back-and-forth in between.",
        steps: [
          { label: "Enquiry in", icon: IconMessage },
          { label: "Measurement booked", icon: IconCalendar },
          { label: "Details confirmed", icon: IconCheck },
          { label: "Quote sent", icon: IconSend },
        ],
      },
      {
        tag: "Quote chatbot",
        title: "Website quote chatbot",
        description:
          "Asks about window count, style, and budget on your website, then books a measurement instead of leaving them to fill in a form and wait.",
        details:
          "Filters out the just-looking enquiries, so your time goes to people who are actually ready to book.",
        steps: [
          { label: "Chat opens", icon: IconMessage },
          { label: "AI asks questions", icon: IconDocument },
          { label: "Lead qualified", icon: IconCheck },
          { label: "Booked", icon: IconCalendar },
        ],
      },
      {
        tag: "Installation",
        title: "Installation scheduling & reminders",
        description:
          "Once a quote's accepted, the install gets booked and the customer gets a reminder automatically as the date approaches.",
        details:
          "One less thing to track manually, and fewer no-shows on install day.",
        steps: [
          { label: "Quote accepted", icon: IconCheck },
          { label: "Install booked", icon: IconCalendar },
          { label: "Reminder sent", icon: IconBell },
          { label: "Confirmed", icon: IconMessage },
        ],
      },
      {
        tag: "Quote follow-up",
        title: "Quote follow-up automation",
        description:
          "Quote sent, then a follow-up sequence runs on its own until the customer books or declines — no lead left to go cold while you're on another job.",
        details:
          "Stops automatically the moment they respond either way — no awkward reminder after they've already said yes.",
        steps: [
          { label: "Quote sent", icon: IconMail },
          { label: "SMS reminder", icon: IconBell },
          { label: "Follow-up sent", icon: IconSend },
          { label: "Booked", icon: IconCheck },
        ],
      },
      {
        tag: "Reviews & referrals",
        title: "Review & referral request",
        description:
          "Job marked complete, and the customer's asked for a review and whether they've got other rooms in mind — while they're still happy with the result.",
        details:
          "Timed right after installation, when the new curtains or blinds are freshest in their mind.",
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
        "Curtains and blinds is a considered purchase — customers compare a few quotes before deciding, and speed of response is often the deciding factor, not just price.",
        "Measurement bookings and quote follow-ups are the exact admin that eats a day without earning anything extra. Handling it automatically means more of your time goes to actually measuring and installing.",
      ],
    },
  },
];

export function getIndustry(slug) {
  return industries.find((i) => i.slug === slug);
}
