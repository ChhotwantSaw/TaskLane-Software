// Edit all site copy here. Replace the [placeholders].
// Keep only the services you can actually deliver: delete any item or whole group.
export const brand = "Stellar Solutions";
export const email = "contact@stellarsolutions.io";
export const phone = "phone";

export const serviceGroups = [
  {
    id: "software", title: "Custom software",
    text: "The web apps, integrations and dashboards your team runs on, built on a solid backend.",
    items: [
      { title: "Business websites", text: "Fast, search-friendly websites that explain what you do and turn visitors into enquiries." },
      { title: "Web apps and portals", text: "Customer portals, admin panels and workflow apps your staff and clients use every day." },
      { title: "Internal tools and dashboards", text: "Replace spreadsheets and manual tracking with tools that show what is happening in your business." },
      { title: "Integrations and APIs", text: "Connect your accounting, CRM, ERP, payment and messaging tools so data moves without retyping." },
      { title: "SaaS and e-commerce", text: "Subscription products and online stores with payments, accounts and reporting." },
      { title: "Cloud, testing and maintenance", text: "Hosting, deployment, backups and security basics, plus upkeep and modernizing older systems." },
    ],
  },
  {
    id: "automation", title: "Automation and AI",
    text: "Assistants, agents and workflows that take repetitive work off your team, added where they save the most time.",
    items: [
      { title: "AI automation audit", text: "We map your workflows and hand you a costed roadmap with the best automations to build first." },
      { title: "Knowledge assistants", text: "Chatbots that answer from your own documents, with sources shown and a handoff to a human." },
      { title: "Workflow and document automation", text: "Invoices, forms, emails and approvals handled automatically, with human review where it matters." },
      { title: "WhatsApp, web and voice agents", text: "Assistants that answer enquiries, qualify leads and book appointments, day or night." },
      { title: "Lead and sales agents", text: "Capture leads, follow up, and save every conversation to your CRM or sheet." },
      { title: "Custom AI models", text: "Compact models fine-tuned on your data and hosted privately, when simpler methods are not enough." },
    ],
  },
  {
    id: "optimization", title: "Optimization and data",
    text: "Better plans and clearer numbers, using mathematical optimization and reporting.",
    items: [
      { title: "Scheduling and shift planning", text: "Rosters and timetables that respect your rules and cut overtime and gaps." },
      { title: "Routing and logistics", text: "Delivery and pickup plans that reduce distance, time and cost." },
      { title: "Production and inventory planning", text: "Decide what to make, buy and stock within your capacity and budget." },
      { title: "Reporting dashboards", text: "Daily and weekly numbers delivered to your inbox or a live dashboard." },
      { title: "Data cleanup and automation", text: "Turn messy spreadsheets into clean, reliable data that updates itself." },
    ],
  },
];

export const growth = [
  { title: "Start with the problem", text: "Often a web app, a portal or an integration that removes manual work. No AI needed if it is not the right tool." },
  { title: "Connect and automate", text: "Link your systems and automate the routine steps, so your data is clean and in one place." },
  { title: "Add AI and optimization where it pays", text: "Assistants, agents and planning tools work best on top of solid software. We add them where they save real time or money." },
];

export const engineering = [
  { title: "Automated tests", text: "Core features are tested, so updates do not break what already works." },
  { title: "Documentation and handover", text: "API docs, setup notes and a walkthrough session, so you are never locked in." },
  { title: "Deployment pipeline", text: "Repeatable releases to your hosting, with a rollback plan." },
  { title: "Security basics", text: "Role-based access, secrets kept out of code, encrypted connections and regular backups." },
  { title: "Monitoring and logs", text: "We see errors before you do, and every action can be traced." },
  { title: "Maintenance plans", text: "Monthly upkeep, fixes and small improvements after launch." },
];

export const stack = ["React", "Node.js", "Spring Boot", "Python", "FastAPI", "PostgreSQL", "LangChain", "LangGraph", "ChromaDB", "QLoRA", "Optimization solvers"];

export const demos = [
  { tag: "Software", title: "Operations dashboard", text: "Live orders, status and reports in one admin panel.", video: "" },
  { tag: "Software", title: "Systems integration", text: "Orders flow from a website into accounting and inventory automatically.", video: "" },
  { tag: "Software", title: "Client portal", text: "Customers log in to track requests, files and invoices.", video: "" },
  { tag: "AI", title: "Document Q&A assistant", text: "Upload PDFs, ask questions, get cited answers.", video: "" },
  { tag: "AI", title: "Invoice and resume processing", text: "Extracts fields, validates them and saves to a database.", video: "" },
  { tag: "Optimization", title: "Shift and delivery optimizer", text: "Enter constraints, get an optimized schedule.", video: "" },
];

export const commitments = [
  { title: "Free mini-test", text: "Send a small sample of your data, documents or a workflow. In 3 working days you see a working proof on your own material." },
  { title: "Pilot with a success measure", text: "A short paid pilot with a target agreed in writing. If it misses the target, you do not pay for the next phase." },
  { title: "Quality you can verify", text: "Tested code, and for AI: source citations, an assistant that says \"I don't know\" instead of guessing, and an evaluation report on your data." },
  { title: "You own everything", text: "Code, workflows, prompts, accounts and data are yours, with documentation and a handover session. No lock-in." },
  { title: "Privacy first", text: "NDA before any data is shared, a clear data handling note, and private deployment for sensitive information." },
  { title: "Honest by default", text: "We tell you if software, AI or neither is the right fit, and we do not claim results we cannot show." },
];

export const steps = [
  { title: "Discovery call", text: "30 minutes on your goals, tools and where time or leads are lost. Free." },
  { title: "Audit and roadmap", text: "We map your workflows and give you a costed plan with the best things to build first." },
  { title: "Fixed-price build", text: "Clear scope and milestones, with a demo every 1 to 2 weeks." },
  { title: "Launch and handover", text: "Deployment, documentation and team training. Accounts in your name." },
  { title: "Care and growth", text: "Optional monthly plan to maintain, tune and add to what we built." },
];

export const faqs = [
  { q: "Do you only build AI?", a: "No. Much of what we build is ordinary software: web apps, portals, integrations and dashboards. We recommend AI or optimization only where they clearly help, and we will say so if you do not need them." },
  { q: "How much does a project cost?", a: "Every project has a fixed price agreed before we build, after a short audit. It depends on the features, systems and data involved. On a free call we can give you a realistic range." },
  { q: "How long until it is live?", a: "Most projects take [2 to 8] weeks, delivered in stages with a working demo along the way." },
  { q: "Who owns the code and the accounts?", a: "You do. Code, hosting and AI provider accounts are set up in your company's name." },
  { q: "What if the AI does not know an answer?", a: "It says so and hands the conversation to your team with a summary. Those questions are logged so the missing answers can be added." },
  { q: "Is my data safe?", a: "We sign an NDA first, tell you which providers process your data, and can deploy privately when information is sensitive." },
];

export const team = [
  { name: "Chhotwant Saw", role: "Founder", text: "Full-stack and backend engineering, optimization and integrations.", link: "" },
  { name: "Nishchay Singh", role: "Founder", text: "AI automation, chatbots and language-model workflows.", link: "" },
];
