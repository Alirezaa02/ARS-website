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

export const faqs = [
  {
    q: "How long does it take to get an AI system live?",
    a: "Typically 2–4 weeks from your first demo to going live, built around your existing tools — no migration required.",
  },
  {
    q: "What happens if the AI can't answer a customer's question?",
    a: "It's built to know its limits — if something needs a real person, it flags it and hands off to you instead of guessing.",
  },
  {
    q: "Do I need to change my phone number or the tools I already use?",
    a: "No. It's set up around what you already use — your existing phone number, calendar, and software — so there's nothing to migrate or relearn.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on what you need — see the Pricing page for current tiers, or book a free demo and we'll go through what fits your business.",
  },
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
    demoConversation: {
      label: "AI Enquiry Assistant",
      customerMessage:
        "Hi, we need a quote for a 60sqm granny flat in New Farm, keen to start in about 2 months.",
      aiMessage:
        "Got it — I've logged that as a qualified enquiry and sent it through to the team, they'll be in touch shortly.",
      confirmTitle: "Lead qualified",
      confirmSubject: "Granny flat — 60sqm",
      confirmDetails: "New Farm · Start in ~2 months",
    },
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
    demoConversation: {
      label: "AI Receptionist",
      customerMessage:
        "Hi, my switchboard's tripped and won't reset — can someone come out today? I'm in Ascot.",
      aiMessage:
        "That's urgent — I've booked you in for an emergency callout this afternoon in Ascot, someone will call ahead.",
      confirmTitle: "Callout booked",
      confirmSubject: "Emergency — switchboard fault",
      confirmDetails: "Ascot · This afternoon",
    },
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
    demoConversation: {
      label: "AI Receptionist",
      customerMessage: "Burst pipe under the kitchen sink, water everywhere — can someone come now?",
      aiMessage:
        "That's an emergency — I've flagged it urgent and got you booked for the next available slot, someone will call to confirm.",
      confirmTitle: "Emergency triaged",
      confirmSubject: "Burst pipe — kitchen",
      confirmDetails: "Urgent · Next available slot",
    },
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
    demoConversation: {
      label: "AI Receptionist",
      customerMessage: "Hi, need a quote for ducted AC — 4-bed house, budget around $12k.",
      aiMessage: "Got it — I've booked a site assessment for Thursday 2pm to spec it properly.",
      confirmTitle: "Assessment booked",
      confirmSubject: "Ducted AC — 4-bed home",
      confirmDetails: "Thursday · 2:00pm · Site assessment",
    },
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
    demoConversation: {
      label: "AI Receptionist",
      customerMessage: "Found a rat in the kitchen, can someone come tonight?",
      aiMessage: "I can get that booked as urgent — you're locked in for tonight, technician will call ahead.",
      confirmTitle: "Job booked",
      confirmSubject: "Urgent — rodent treatment",
      confirmDetails: "Tonight · Kitchen · Escalated",
    },
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
    demoConversation: {
      label: "AI Receptionist",
      customerMessage: "Hi, need blinds quoted for 3 living room windows.",
      aiMessage: "I've booked a measure for Thursday 10am — quote goes out right after.",
      confirmTitle: "Measurement booked",
      confirmSubject: "Blinds — 3 windows",
      confirmDetails: "Thursday · 10:00am · Living room",
    },
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
  {
    slug: "mechanics",
    category: "Trades",
    name: "Mechanics",
    headline: "AI for Auto Mechanics & Workshops in Australia",
    headlineAccent: "Auto Mechanics & Workshops",
    subheadline: "Book more services without leaving the workshop floor.",
    intro:
      "You can't answer the phone with your hands under a bonnet. ARS builds AI systems that answer every call, book the service, and chase what needs chasing — without pulling you off the tools.",
    typicalTimeline: "Typically 2–4 weeks to go live",
    challenges: [
      {
        title: "A missed call is a missed booking",
        body: "Customers ring around for the next available slot. If you don't pick up between jobs, they've already booked somewhere else.",
      },
      {
        title: "No-shows cost you a bay",
        body: "An empty bay because someone forgot their booking is time on the roster you don't get back.",
      },
      {
        title: "Chasing approval on extra work",
        body: "Found something extra during a service? Getting sign-off by phone tag delays the job and the invoice.",
      },
    ],
    workflows: [
      {
        tag: "Call answering",
        title: "24/7 AI call answering & booking",
        description:
          "Every call gets answered, even mid-job. AI captures the vehicle, rego, and what's needed, then books it straight into your diary.",
        details:
          "Works the same whether you're under a car or between jobs — nothing depends on you picking up.",
        steps: [
          { label: "Call comes in", icon: IconPhone },
          { label: "AI answers", icon: IconMessage },
          { label: "Job captured", icon: IconDocument },
          { label: "Booked in", icon: IconCalendar },
        ],
      },
      {
        tag: "Reminders",
        title: "Service & rego reminders",
        description:
          "Sends a reminder when a logbook service or rego inspection falls due, so bays stay full without you tracking a spreadsheet.",
        details:
          "Runs on its own in the background — repeat business that would otherwise just quietly stop coming back.",
        steps: [
          { label: "Service due", icon: IconClock },
          { label: "Reminder sent", icon: IconBell },
          { label: "Customer books", icon: IconCalendar },
          { label: "Job created", icon: IconCheck },
        ],
      },
      {
        tag: "Confirmations",
        title: "No-show reduction reminders",
        description:
          "Automatic confirmation before every appointment, with a one-tap way to confirm or reschedule — so an empty bay doesn't cost you the morning.",
        details:
          "Catches the reschedules early enough that you can actually fill the slot with someone else.",
        steps: [
          { label: "Booking made", icon: IconCalendar },
          { label: "Reminder sent", icon: IconBell },
          { label: "Customer confirms", icon: IconCheck },
          { label: "Bay held", icon: IconDocument },
        ],
      },
      {
        tag: "Approvals",
        title: "Quote & approval follow-up",
        description:
          "Extra work found during a service gets sent to the customer for approval by SMS, and followed up automatically until they respond.",
        details:
          "No more leaving a car on the hoist waiting on a callback that might not come until this afternoon.",
        steps: [
          { label: "Extra work found", icon: IconAlert, tone: "warn" },
          { label: "Sent for approval", icon: IconSend },
          { label: "Follow-up sent", icon: IconBell },
          { label: "Approved", icon: IconCheck },
        ],
      },
      {
        tag: "Enquiries",
        title: "After-hours enquiry chatbot",
        description:
          "Handles pricing and availability questions on your website, captures the vehicle and job details, and books the service — even after you've closed up.",
        details:
          "You open up to a full diary instead of a list of missed enquiries from the night before.",
        steps: [
          { label: "Chat opens", icon: IconMessage },
          { label: "AI qualifies", icon: IconDocument },
          { label: "Job captured", icon: IconCheck },
          { label: "Booked", icon: IconCalendar },
        ],
      },
      {
        tag: "Reviews",
        title: "Review request on collection",
        description:
          "Job marked complete, and the customer gets a text asking for a review the moment they collect the car.",
        details:
          "Timed at the exact moment they're happiest with the work — not days later once they've forgotten.",
        steps: [
          { label: "Job complete", icon: IconCheck },
          { label: "SMS sent", icon: IconMessage },
          { label: "Link tapped", icon: IconSend },
          { label: "Review posted", icon: IconStar },
        ],
      },
    ],
    toolsExamples: ["Xero", "MYOB", "Outlook Calendar", "Google Calendar", "Gmail"],
    whyNow: {
      paragraphs: [
        "Mechanics work is booking-driven — customers ring around for the next available slot, and whoever answers first usually fills their bay first.",
        "No-shows and slow approvals are pure lost time on a hoist. None of it needs a mechanic's skill, just something consistent handling the admin around the actual work.",
      ],
    },
  },
  {
    slug: "real-estate",
    category: "Property",
    name: "Real Estate",
    headline: "AI Receptionist & Lead Qualification for Real Estate Agents in Australia",
    headlineAccent: "Real Estate Agents",
    subheadline: "Never let a seller lead go unanswered again.",
    intro:
      "Every enquiry that sits unanswered is a listing that might go to someone else. ARS builds AI systems that answer every call, qualify buyers and sellers, and book appraisals — straight into your calendar.",
    typicalTimeline: "Typically 2–4 weeks to go live",
    challenges: [
      {
        title: "Seller leads go unanswered",
        body: "A slow reply on a genuine seller enquiry can be the difference between winning the listing and losing it to whoever called back first.",
      },
      {
        title: "Agents drown in unqualified calls",
        body: "Portal enquiries and open-home sign-ins bury you in calls from people who are months away or outside budget.",
      },
      {
        title: "Property management enquiries never stop",
        body: "Maintenance requests, rent questions, and applications flood in constantly — most of it routine, none of it optional to answer.",
      },
    ],
    workflows: [
      {
        tag: "Call answering",
        title: "24/7 AI receptionist",
        description:
          "Every call and portal enquiry answered instantly. AI captures the property, enquiry type, and contact details, then routes it to the right agent with a full summary.",
        details:
          "Works the same for a phone call, a portal enquiry, or a website form — nothing waits until someone's free to check messages.",
        steps: [
          { label: "Enquiry in", icon: IconPhone },
          { label: "AI answers", icon: IconMessage },
          { label: "Details captured", icon: IconDocument },
          { label: "Routed to agent", icon: IconPerson },
        ],
      },
      {
        tag: "Lead qualification",
        title: "Buyer & seller lead qualification",
        description:
          "Qualifies each lead on budget, timeline, and preferred suburbs, then routes the genuinely hot ones straight to you — fully briefed.",
        details:
          "You stop spending time on enquiries that were never going to convert, and start every real conversation already briefed.",
        steps: [
          { label: "Lead in", icon: IconMessage },
          { label: "AI qualifies", icon: IconDocument },
          { label: "Scored", icon: IconCheck },
          { label: "Routed", icon: IconPerson },
        ],
      },
      {
        tag: "Appraisals",
        title: "Appraisal booking automation",
        description:
          "Seller enquiry comes in, and a market appraisal gets booked directly into your calendar — the summary's waiting before you even arrive.",
        details:
          "The appointment is half-won before it starts, because you already know what they're after.",
        steps: [
          { label: "Seller enquiry", icon: IconMessage },
          { label: "AI qualifies", icon: IconDocument },
          { label: "Appraisal booked", icon: IconCalendar },
          { label: "Agent briefed", icon: IconPerson },
        ],
      },
      {
        tag: "Open homes",
        title: "Open-home registration & follow-up",
        description:
          "Attendees get registered automatically, and a follow-up goes out by SMS and email afterwards to find out who's genuinely interested.",
        details:
          "Separates the serious buyers from the sticky-beaks without you having to call every single attendee yourself.",
        steps: [
          { label: "Attendee signs in", icon: IconDocument },
          { label: "Registered", icon: IconCheck },
          { label: "Follow-up sent", icon: IconSend },
          { label: "Interest captured", icon: IconStar },
        ],
      },
      {
        tag: "Property management",
        title: "Property management triage chatbot",
        description:
          "Routine maintenance requests, rent questions, and application enquiries get captured and logged automatically, so your PM only handles what actually needs them.",
        details:
          "The routine stuff gets handled on its own; anything that genuinely needs a person still reaches one.",
        steps: [
          { label: "Enquiry in", icon: IconMessage },
          { label: "AI captures details", icon: IconDocument },
          { label: "Logged", icon: IconCheck },
          { label: "Routed if needed", icon: IconAlert, tone: "warn" },
        ],
      },
      {
        tag: "Updates",
        title: "Vendor & landlord update automation",
        description:
          "Campaign updates, inspection feedback, and milestone messages go out automatically, so vendors and landlords stay in the loop without you writing the same update every week.",
        details:
          "One less recurring task on your list, and vendors hear from you before they think to chase an update.",
        steps: [
          { label: "Milestone reached", icon: IconFlag },
          { label: "Update drafted", icon: IconDocument },
          { label: "Sent", icon: IconSend },
          { label: "Logged", icon: IconCheck },
        ],
      },
    ],
    toolsExamples: ["Xero", "MYOB", "Outlook Calendar", "Google Calendar", "Gmail"],
    whyNow: {
      paragraphs: [
        "In real estate, speed to lead is everything — a slow response to a genuine seller enquiry is one of the most common reasons agents lose a listing they should have won.",
        "Qualifying leads and handling routine property management enquiries doesn't need an agent's judgement, just consistency. Automating it means more of your time goes to the conversations that actually convert.",
      ],
    },
  },
  {
    slug: "accounting-and-finance",
    category: "Professional Services",
    name: "Accounting & Finance",
    headline: "AI Automation & Answering Service for Accounting Firms in Australia",
    headlineAccent: "Accounting Firms",
    subheadline: "Onboard clients in minutes, not hours.",
    intro:
      "Onboarding, document chasing, and tax-season enquiries all pile up on top of the actual advisory work. ARS builds AI systems that handle the admin automatically, so your team's time goes to the work that needs their expertise.",
    typicalTimeline: "Typically 2–4 weeks to go live",
    challenges: [
      {
        title: "Onboarding a new client eats hours",
        body: "Engagement letters, ID collection, platform setup — it's the same steps every time, and none of it needs an accountant's judgement.",
      },
      {
        title: "Chasing documents never stops",
        body: "Receipts, statements, signatures — someone always has to follow up, and it's rarely the client who remembers first.",
      },
      {
        title: "Tax season buries the phones",
        body: "Enquiries spike exactly when your team has the least time to answer them, and a missed call at BAS time is a missed client.",
      },
    ],
    workflows: [
      {
        tag: "Onboarding",
        title: "Client onboarding automation",
        description:
          "Engagement letters, document requests, and platform access all get triggered automatically the moment a new client signs on.",
        details:
          "The same steps happen the same way every time, without anyone on your team having to remember to chase the next one.",
        steps: [
          { label: "Client signs on", icon: IconCheck },
          { label: "Letter sent", icon: IconMail },
          { label: "Docs requested", icon: IconDocument },
          { label: "Access set up", icon: IconSend },
        ],
      },
      {
        tag: "Call answering",
        title: "24/7 AI answering & booking",
        description:
          "Every client call gets answered, routine questions get handled, and appointments get booked straight into your calendar — even during your busiest weeks.",
        details:
          "Works the same in the middle of tax season as it does any other week — nothing depends on someone being free to pick up.",
        steps: [
          { label: "Call comes in", icon: IconPhone },
          { label: "AI answers", icon: IconMessage },
          { label: "Question handled", icon: IconCheck },
          { label: "Booked in", icon: IconCalendar },
        ],
      },
      {
        tag: "Document chasing",
        title: "Document collection & chasing",
        description:
          "Automated requests and reminders collect receipts, statements, and signatures, and keep following up on anything outstanding until it lands.",
        details:
          "Nobody on your team has to remember to nag a client for the third time — it just keeps going until it's done.",
        steps: [
          { label: "Docs requested", icon: IconSend },
          { label: "Reminder sent", icon: IconBell },
          { label: "Received", icon: IconDocument },
          { label: "Logged", icon: IconCheck },
        ],
      },
      {
        tag: "Lead capture",
        title: "Tax-season lead capture",
        description:
          "New enquiries through tax and BAS season get captured, qualified, and booked automatically, so a spike in demand becomes new clients instead of missed calls.",
        details:
          "Scales the same whether it's a quiet week or the busiest fortnight of the year.",
        steps: [
          { label: "Enquiry in", icon: IconMessage },
          { label: "AI qualifies", icon: IconDocument },
          { label: "Booked", icon: IconCalendar },
          { label: "New client", icon: IconCheck },
        ],
      },
      {
        tag: "Deadlines",
        title: "Deadline & compliance reminders",
        description:
          "Automated reminders for BAS lodgement, tax deadlines, and outstanding documents keep clients on track and cut down the last-minute scramble.",
        details:
          "Clients hear from you with time to actually act, instead of a last-minute chase that stresses everyone out.",
        steps: [
          { label: "Deadline approaching", icon: IconClock },
          { label: "Reminder sent", icon: IconBell },
          { label: "Client responds", icon: IconMessage },
          { label: "Logged", icon: IconCheck },
        ],
      },
      {
        tag: "Client FAQ",
        title: "Client FAQ & status chatbot",
        description:
          "Handles routine questions about fees, timelines, and where a job's up to, so your accountants and bookkeepers aren't repeating the same answers all day.",
        details:
          "Frees up real time for the advisory conversations that actually need a qualified person.",
        steps: [
          { label: "Question asked", icon: IconMessage },
          { label: "AI answers", icon: IconCheck },
          { label: "Escalated if needed", icon: IconAlert, tone: "warn" },
          { label: "Logged", icon: IconDocument },
        ],
      },
    ],
    toolsExamples: ["Xero", "MYOB", "Outlook Calendar", "Google Calendar", "Gmail"],
    whyNow: {
      paragraphs: [
        "Accounting and bookkeeping firms carry a lot of invisible admin — onboarding, document chasing, routine questions — and most of it doesn't need an accountant's judgement, just consistency.",
        "Tax and BAS season is when this admin load and new-client demand both spike at once. Handling the routine parts automatically means your qualified people spend their time on advisory work, while client data is still handled carefully, in line with the Australian Privacy Principles.",
      ],
    },
  },
  {
    slug: "restaurants",
    category: "Hospitality",
    name: "Restaurants",
    headline: "AI for Restaurants & Cafes in Australia",
    headlineAccent: "Restaurants & Cafes",
    subheadline: "Take the booking, even when the floor's slammed.",
    intro:
      "You're running service, not sitting by a phone. ARS builds AI systems that answer every call, take the booking, and keep tables full — without pulling anyone off the floor.",
    typicalTimeline: "Typically 2–4 weeks to go live",
    demoConversation: {
      label: "AI Receptionist",
      customerMessage: "Hi, do you have a table for 4 Friday at 7:30?",
      aiMessage: "Yes — you're booked, Friday 7:30, party of 4. Can I grab a name?",
      confirmTitle: "Booking confirmed",
      confirmSubject: "Table for 4",
      confirmDetails: "Friday · 7:30pm · Party of 4",
    },
    challenges: [
      {
        title: "A missed call is a missed table",
        body: "Ring during a busy service and nobody picks up, and the booking just goes to the place next door that did.",
      },
      {
        title: "No-shows cost you a full sitting",
        body: "A table held for someone who never turns up is revenue you don't get back that night.",
      },
      {
        title: "Function enquiries take real time to chase",
        body: "Date, headcount, budget, dietary needs — getting the details usually means a few messages back and forth, on top of service.",
      },
    ],
    workflows: [
      {
        tag: "Reservations",
        title: "24/7 AI reservation answering",
        description:
          "Every call gets answered, day or night. AI checks the time's actually free, takes the booking, and confirms it straight away.",
        details:
          "Works the same during a full dinner service as it does at 3pm on a Tuesday — nothing depends on someone being free to pick up.",
        steps: [
          { label: "Call comes in", icon: IconPhone },
          { label: "AI answers", icon: IconMessage },
          { label: "Availability checked", icon: IconCalendar },
          { label: "Booked & confirmed", icon: IconCheck },
        ],
      },
      {
        tag: "Confirmations",
        title: "No-show reduction reminders",
        description:
          "An automatic reminder goes out before every booking, with a one-tap way to confirm or cancel — so a held table doesn't just sit empty.",
        details:
          "Catches cancellations early enough that the table can actually be re-booked instead of written off for the night.",
        steps: [
          { label: "Booking made", icon: IconCalendar },
          { label: "Reminder sent", icon: IconBell },
          { label: "Customer confirms", icon: IconCheck },
          { label: "Table held or released", icon: IconDocument },
        ],
      },
      {
        tag: "Functions & events",
        title: "Function & event lead qualification",
        description:
          "Group and function enquiries get asked the right questions upfront — date, headcount, budget — then sent to you as a briefed, ready-to-quote lead.",
        details:
          "You stop chasing details over three separate messages and start every function conversation already knowing what they need.",
        steps: [
          { label: "Enquiry in", icon: IconMessage },
          { label: "AI qualifies", icon: IconDocument },
          { label: "Details captured", icon: IconCheck },
          { label: "Sent to you", icon: IconSend },
        ],
      },
      {
        tag: "FAQ",
        title: "Menu & enquiry chatbot",
        description:
          "Opening hours, dietary options, parking, and menu questions get answered automatically, so floor staff aren't pulled off tables to answer the phone.",
        details:
          "Handles the repeat questions on its own, and only sends through the ones that actually need a person.",
        steps: [
          { label: "Question asked", icon: IconMessage },
          { label: "AI answers", icon: IconCheck },
          { label: "Escalated if needed", icon: IconAlert, tone: "warn" },
          { label: "Logged", icon: IconDocument },
        ],
      },
      {
        tag: "Phone orders",
        title: "Phone order taking",
        description:
          "For venues that take phone orders, AI captures the order accurately and confirms it back — without tying up a staff member mid-service.",
        details:
          "Keeps orders consistent even during the rush, so nothing gets mis-heard over a noisy kitchen pass.",
        steps: [
          { label: "Call comes in", icon: IconPhone },
          { label: "AI takes order", icon: IconMessage },
          { label: "Order confirmed", icon: IconCheck },
          { label: "Details sent to you", icon: IconSend },
        ],
      },
      {
        tag: "Reviews",
        title: "Review request after the visit",
        description:
          "After a booking, the customer gets an automatic prompt to leave a Google review while the visit's still fresh in their mind.",
        details:
          "Timed right after the visit, not days later once they've forgotten how good the night was.",
        steps: [
          { label: "Visit complete", icon: IconCheck },
          { label: "SMS sent", icon: IconMessage },
          { label: "Link tapped", icon: IconSend },
          { label: "Review posted", icon: IconStar },
        ],
      },
    ],
    toolsExamples: ["Xero", "MYOB", "Outlook Calendar", "Google Calendar", "Gmail"],
    whyNow: {
      paragraphs: [
        "Restaurants live and die on speed to answer — a ringing phone during service is either a booking or a missed one, and there's rarely a spare set of hands to catch it either way.",
        "No-shows, function enquiries, review requests — none of it needs a chef's or a manager's judgement, just consistency. Handling it automatically means more of the floor's attention stays on the table in front of them.",
      ],
    },
  },
  {
    slug: "parts-suppliers",
    category: "Trade Suppliers",
    name: "Parts Suppliers",
    headline: "AI for Parts Suppliers & Trade Wholesalers in Australia",
    headlineAccent: "Parts Suppliers & Trade Wholesalers",
    subheadline: "Answer the phone during the counter rush, not after it.",
    intro:
      "Tradies want a stock answer now, not a callback. ARS builds AI systems that answer enquiries, keep trade accounts moving, and chase what needs chasing — without pulling anyone off the counter.",
    typicalTimeline: "Typically 2–4 weeks to go live",
    challenges: [
      {
        title: "A stock question means a phone call",
        body: "If nobody picks up to confirm you've got it in stock, the customer just rings the next supplier on the list.",
      },
      {
        title: "Trade accounts chase their own invoices",
        body: "Someone has to remember which accounts are overdue and follow them up — real time that isn't spent serving the counter.",
      },
      {
        title: "Reorders get forgotten",
        body: "Regular customers who'd reorder the same parts on their own timeline just quietly go elsewhere if nobody reminds them.",
      },
    ],
    workflows: [
      {
        tag: "Call answering",
        title: "24/7 AI call answering",
        description:
          "Every call gets answered, even during the counter rush. AI captures what's needed and gets it to the right person to quote or fulfil.",
        details:
          "Works the same during a flat-out Monday morning as it does after you've closed for the day.",
        steps: [
          { label: "Call comes in", icon: IconPhone },
          { label: "AI answers", icon: IconMessage },
          { label: "Enquiry captured", icon: IconDocument },
          { label: "Sent to you", icon: IconSend },
        ],
      },
      {
        tag: "Stock enquiries",
        title: "Stock & price enquiry chatbot",
        description:
          "Handles the \"have you got this in stock\" and \"how much for...\" questions on your website, and only sends through the ones that actually need a person.",
        details:
          "Filters the quick questions from the ones that need a real answer, so counter staff aren't stuck on the phone mid-serve.",
        steps: [
          { label: "Question asked", icon: IconMessage },
          { label: "AI checks details", icon: IconDocument },
          { label: "Answered or escalated", icon: IconAlert, tone: "warn" },
          { label: "Logged", icon: IconCheck },
        ],
      },
      {
        tag: "Trade accounts",
        title: "Trade account order updates",
        description:
          "Order confirmations and dispatch updates go out automatically, so trade customers always know where their order's up to without ringing to ask.",
        details:
          "One less thing for counter staff to relay by phone in between serving walk-ins.",
        steps: [
          { label: "Order placed", icon: IconCheck },
          { label: "Confirmation sent", icon: IconMail },
          { label: "Status updated", icon: IconDocument },
          { label: "Customer notified", icon: IconSend },
        ],
      },
      {
        tag: "Backorders",
        title: "Backorder & restock notifications",
        description:
          "When something's out of stock, the customer gets notified the moment it's back in, instead of ringing every few days to check.",
        details:
          "Keeps the sale instead of losing it to whoever picks up the phone once they restock somewhere else first.",
        steps: [
          { label: "Item out of stock", icon: IconAlert, tone: "warn" },
          { label: "Customer notified", icon: IconMessage },
          { label: "Restock logged", icon: IconDocument },
          { label: "Order confirmed", icon: IconCheck },
        ],
      },
      {
        tag: "Payment follow-up",
        title: "Trade account invoice reminders",
        description:
          "Overdue account invoices get a polite, automatic reminder sequence before it ever needs an awkward phone call from you.",
        details:
          "Keeps the relationship intact while still getting accounts paid on time.",
        steps: [
          { label: "Invoice overdue", icon: IconAlert, tone: "warn" },
          { label: "Day 1 reminder", icon: IconMessage },
          { label: "Day 7 follow-up", icon: IconMail },
          { label: "Escalated if needed", icon: IconBell, tone: "warn" },
        ],
      },
      {
        tag: "Reorders",
        title: "Repeat order reminders",
        description:
          "Regular customers get a reminder when they're due to reorder consumables or common parts, so repeat business doesn't just quietly stop.",
        details:
          "Runs in the background with zero effort from your team — the kind of repeat revenue that's easy to let slip.",
        steps: [
          { label: "Order history tracked", icon: IconDocument },
          { label: "Reorder due", icon: IconClock },
          { label: "Reminder sent", icon: IconBell },
          { label: "Order placed", icon: IconCheck },
        ],
      },
    ],
    toolsExamples: ["Xero", "MYOB", "Outlook Calendar", "Google Calendar", "Gmail"],
    whyNow: {
      paragraphs: [
        "Parts suppliers live on speed of answer — a tradie who can't get through on a stock question is usually already calling the next supplier on the list, price aside.",
        "Backorder notifications, account reminders, and reorder prompts don't need a counter person's product knowledge, just consistency. Automating the admin means more of your team's time goes to actually serving the counter.",
      ],
    },
  },
  {
    slug: "barbershops",
    category: "Personal Care",
    name: "Barbershops",
    headline: "AI for Barbershops & Hair Salons in Australia",
    headlineAccent: "Barbershops & Hair Salons",
    subheadline: "Fill every chair, even when you're mid-cut.",
    intro:
      "You can't answer the phone with scissors in hand. ARS builds AI systems that answer every call, book the appointment, and keep chairs full — without pulling you away from a client.",
    typicalTimeline: "Typically 2–4 weeks to go live",
    challenges: [
      {
        title: "A missed call is a missed booking",
        body: "Customers ring around for the next available slot. If you don't pick up between clients, they've already booked somewhere else.",
      },
      {
        title: "No-shows leave a chair empty",
        body: "A chair booked and not filled is time on the roster you don't get back.",
      },
      {
        title: "The same questions, every day",
        body: "Walk-in availability, pricing, opening hours — answering it live between cuts eats into the day.",
      },
    ],
    workflows: [
      {
        tag: "Call answering",
        title: "24/7 AI call answering & booking",
        description:
          "Every call gets answered, even mid-cut. AI checks who's free, books the appointment, and confirms it straight away.",
        details:
          "Works the same whether you're between clients or fully booked out for the day — nothing depends on someone being free to pick up.",
        steps: [
          { label: "Call comes in", icon: IconPhone },
          { label: "AI answers", icon: IconMessage },
          { label: "Availability checked", icon: IconCalendar },
          { label: "Booked & confirmed", icon: IconCheck },
        ],
      },
      {
        tag: "Online bookings",
        title: "Website booking chatbot",
        description:
          "Handles service, barber, and time preference on your website, then books straight into your calendar — no back-and-forth needed.",
        details:
          "Works the same at 11pm on a Sunday as it does during business hours, so you open up to a booked-out week.",
        steps: [
          { label: "Chat opens", icon: IconMessage },
          { label: "AI asks preferences", icon: IconDocument },
          { label: "Time confirmed", icon: IconCalendar },
          { label: "Booked", icon: IconCheck },
        ],
      },
      {
        tag: "Confirmations",
        title: "No-show reduction reminders",
        description:
          "Automatic confirmation goes out before every appointment, with a one-tap way to confirm or reschedule — so an empty chair doesn't cost you the afternoon.",
        details:
          "Catches cancellations early enough that the slot can actually be re-filled, not just written off.",
        steps: [
          { label: "Booking made", icon: IconCalendar },
          { label: "Reminder sent", icon: IconBell },
          { label: "Customer confirms", icon: IconCheck },
          { label: "Chair held or released", icon: IconDocument },
        ],
      },
      {
        tag: "FAQ",
        title: "Pricing & availability chatbot",
        description:
          "Opening hours, pricing, and walk-in availability get answered automatically, so you're not stopping mid-cut to check your phone.",
        details:
          "Handles the repeat questions on its own, and only sends through the ones that actually need you.",
        steps: [
          { label: "Question asked", icon: IconMessage },
          { label: "AI answers", icon: IconCheck },
          { label: "Escalated if needed", icon: IconAlert, tone: "warn" },
          { label: "Logged", icon: IconDocument },
        ],
      },
      {
        tag: "Rebooking",
        title: "Rebooking reminders",
        description:
          "Sends a reminder when a regular's due for their next cut, so your chair stays full without you tracking who's overdue.",
        details:
          "Runs in the background with zero effort from you — repeat business that would otherwise just quietly stop.",
        steps: [
          { label: "Last visit logged", icon: IconDocument },
          { label: "Due date approaches", icon: IconClock },
          { label: "Reminder sent", icon: IconBell },
          { label: "Rebooked", icon: IconCalendar },
        ],
      },
      {
        tag: "Reviews",
        title: "Review request after the appointment",
        description:
          "Appointment marked complete, and the customer gets a text asking for a Google review while the cut's still fresh.",
        details:
          "Timed right after the appointment, not days later once they've forgotten how sharp it looked.",
        steps: [
          { label: "Appointment complete", icon: IconCheck },
          { label: "SMS sent", icon: IconMessage },
          { label: "Link tapped", icon: IconSend },
          { label: "Review posted", icon: IconStar },
        ],
      },
    ],
    toolsExamples: ["Xero", "MYOB", "Outlook Calendar", "Google Calendar", "Gmail"],
    whyNow: {
      paragraphs: [
        "Barbershops and salons are booking-driven — customers ring around for the next available slot, and whoever answers first usually fills their chair first.",
        "No-shows and rebooking reminders are the exact admin that eats time without earning anything extra. Automating it means more of your day goes to the client actually in the chair.",
      ],
    },
  },
];

export function getIndustry(slug) {
  return industries.find((i) => i.slug === slug);
}
