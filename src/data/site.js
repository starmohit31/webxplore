import {
  Globe, ShoppingCart, Atom, Layers, Smartphone, Rocket, Palette, Plug, Search,
  LifeBuoy, Users, TrendingUp, Cpu, MessageSquare, Clock, ShieldCheck, Compass,
  PenTool, Code2, TestTube2, Wrench, LayoutDashboard, Repeat, Boxes, Workflow, Cloud,
  Database, Server, BarChart3, Zap, Target,
} from 'lucide-react'

/* ---------------------------------------------------------------
   BRAND / CONTACT
   "Webxplore Technologies" is a placeholder name. All contact details
   below are placeholders - replace before launch.
---------------------------------------------------------------- */
export const company = {
  name: 'Webxplore',
  fullName: 'Webxplore Technologies',
  tagline: 'Software & digital product studio',
  email: 'info@webxploretechnologies.com',
  phone: '+91-9871734368',
  address: 'F-6, Flat No. 9, Street No. 5, Patpar Ganj, NEW DELHI - 110092',
  hours: 'Mon - Fri, 9:00 - 18:00',
  url: 'https://www.webxploretechnologies.com/',
}

export const socials = [
  { label: 'Facebook', short: 'fb', href: 'https://www.facebook.com/webxploretechnologies' },
  { label: 'LinkedIn', short: 'in', href: 'https://www.linkedin.com/company/webxploretechnologies' },
  { label: 'X (Twitter)', short: 'X', href: 'https://twitter.com/Webxplore_Tech' },
  { label: 'Google+', short: 'G+', href: 'https://plus.google.com/112070799417610779521' },
  { label: 'Instagram', short: 'Ig', href: 'https://www.instagram.com/webxploretechnologies/' },
  { label: 'YouTube', short: 'YT', href: 'https://www.youtube.com/channel/UCVFo6BBZX00CDn6DQheu00A/about' },
]

/* ---------------------------------------------------------------
   NAVIGATION
---------------------------------------------------------------- */
export const serviceLinks = [
  { to: '/services/web-development', label: 'Web Development' },
  { to: '/services/mobile-app-development', label: 'Mobile App Development' },
  { to: '/services/saas-application-development', label: 'SaaS Application Development' },
  { to: '/services/ui-ux-design', label: 'UI/UX Design' },
  { to: '/services/api-integrations', label: 'API & Third-Party Integrations' },
  { to: '/services/seo-digital-marketing', label: 'SEO & Digital Marketing' },
]

export const mainNav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', children: serviceLinks },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/process', label: 'Process' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

/* ---------------------------------------------------------------
   HOMEPAGE SERVICE CARDS (10)
---------------------------------------------------------------- */
export const services = [
  {
    icon: Globe, title: 'Custom Website Development',
    desc: 'Fast, secure, conversion-focused websites engineered around your brand and your growth goals.',
    to: '/services/web-development',
  },
  {
    icon: ShoppingCart, title: 'E-commerce Development',
    desc: 'Scalable online stores with smooth checkout, inventory sync and payment gateway integrations.',
    to: '/services/web-development',
  },
  {
    icon: Atom, title: 'React.js Development',
    desc: 'Component-driven single-page applications and interfaces built with modern React architecture.',
    to: '/services/web-development',
  },
  {
    icon: Layers, title: 'WordPress Development',
    desc: 'Custom themes, plugins and headless setups that your team can manage without friction.',
    to: '/services/web-development',
  },
  {
    icon: Smartphone, title: 'Mobile App Development',
    desc: 'Native-feel iOS and Android apps with React Native and Flutter from a single codebase.',
    to: '/services/mobile-app-development',
  },
  {
    icon: Rocket, title: 'SaaS Product Development',
    desc: 'From MVP to multi-tenant platform: subscriptions, dashboards, roles and billing done right.',
    to: '/services/saas-application-development',
  },
  {
    icon: Palette, title: 'UI/UX Design',
    desc: 'Research-led interface design, prototypes and design systems that users understand instantly.',
    to: '/services/ui-ux-design',
  },
  {
    icon: Plug, title: 'API Development & Integration',
    desc: 'Robust REST APIs and reliable connections to payment, CRM, ERP and messaging platforms.',
    to: '/services/api-integrations',
  },
  {
    icon: Search, title: 'SEO Optimization',
    desc: 'Technical SEO, content strategy and performance work that earns durable organic traffic.',
    to: '/services/seo-digital-marketing',
  },
  {
    icon: LifeBuoy, title: 'Website Maintenance & Support',
    desc: 'Monitoring, updates, backups and priority support so your product stays fast and secure.',
    to: '/contact',
  },
]

/* ---------------------------------------------------------------
   WHY CHOOSE US
---------------------------------------------------------------- */
export const whyUs = [
  { icon: Users, title: 'Experienced Development Team', desc: 'Senior engineers and designers who have shipped production software across many industries.' },
  { icon: TrendingUp, title: 'Scalable Solutions', desc: 'Architecture planned for growth, so your product handles more users without a rewrite.' },
  { icon: Cpu, title: 'Modern Technologies', desc: 'We choose proven, current tools and avoid fashionable stacks that add risk.' },
  { icon: MessageSquare, title: 'Transparent Communication', desc: 'Weekly demos, shared boards and a single point of contact keep you informed.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Clear milestones and realistic estimates, with early flags if scope or timelines shift.' },
  { icon: ShieldCheck, title: 'Long-Term Technical Support', desc: 'We stay after launch with maintenance, monitoring and ongoing improvement.' },
]

/* ---------------------------------------------------------------
   TECHNOLOGIES
---------------------------------------------------------------- */
export const techCategories = [
  { name: 'Frontend', icon: Code2, items: [
    { n: 'React.js', c: '#61dafb' }, { n: 'Next.js', c: '#e2e8f0' }, { n: 'Vue.js', c: '#42b883' } ] },
  { name: 'Backend', icon: Server, items: [
    { n: 'Node.js', c: '#68a063' }, { n: 'PHP', c: '#8892bf' }, { n: 'Laravel', c: '#ff5a50' }, { n: 'Python', c: '#ffd343' } ] },
  { name: 'Mobile', icon: Smartphone, items: [
    { n: 'React Native', c: '#61dafb' }, { n: 'Flutter', c: '#47c5fb' } ] },
  { name: 'CMS', icon: Layers, items: [
    { n: 'WordPress', c: '#5b9bd5' }, { n: 'Shopify', c: '#95bf47' } ] },
  { name: 'Database', icon: Database, items: [
    { n: 'MySQL', c: '#f29111' }, { n: 'MongoDB', c: '#47a248' }, { n: 'PostgreSQL', c: '#699eca' } ] },
  { name: 'Cloud & DevOps', icon: Cloud, items: [
    { n: 'AWS', c: '#ff9900' }, { n: 'Docker', c: '#2496ed' }, { n: 'GitHub', c: '#e2e8f0' } ] },
]

/* ---------------------------------------------------------------
   PORTFOLIO (illustrative sample projects - not real clients)
---------------------------------------------------------------- */
export const projects = [
  {
    slug: 'rental-booking-platform',
    title: 'Equipment Rental Booking Platform',
    industry: 'Rentals & Logistics',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    desc: 'A booking marketplace with real-time availability, quotes and an admin console for managing inventory.',
    hue: [220, 262],
    challenge: 'Manual spreadsheets and phone calls made availability tracking slow and error-prone.',
    solution: 'A responsive booking frontend with live availability calendars, instant quotes, and an admin dashboard for inventory and orders.',
    results: ['Booking flow reduced to a few guided steps', 'Single source of truth for inventory', 'Mobile-first experience for field staff'],
  },
  {
    slug: 'subscription-analytics-saas',
    title: 'Subscription Analytics SaaS',
    industry: 'SaaS / FinTech',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    desc: 'Multi-tenant analytics dashboard for subscription businesses with cohort, churn and revenue views.',
    hue: [250, 290],
    challenge: 'Founders needed metrics scattered across billing tools in one trusted place.',
    solution: 'Multi-tenant architecture with role-based access, scheduled data syncs and configurable dashboards.',
    results: ['Unified revenue and churn views', 'Role-based workspaces for teams', 'Built to add new billing providers easily'],
  },
  {
    slug: 'fitness-coaching-app',
    title: 'Fitness Coaching Mobile App',
    industry: 'Health & Wellness',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    desc: 'Cross-platform app for workout plans, progress tracking and coach-client messaging.',
    hue: [200, 240],
    challenge: 'Coaches managed clients across chat apps and documents with no unified progress view.',
    solution: 'A single React Native codebase with workout plans, habit tracking, push reminders and in-app messaging.',
    results: ['iOS and Android from one codebase', 'Push-driven habit reminders', 'Coach dashboard for client progress'],
  },
  {
    slug: 'b2b-ecommerce-storefront',
    title: 'B2B E-commerce Storefront',
    industry: 'Retail & Wholesale',
    tags: ['Shopify', 'React.js', 'REST APIs'],
    desc: 'Wholesale storefront with tiered pricing, bulk ordering and ERP inventory synchronization.',
    hue: [265, 310],
    challenge: 'Wholesale buyers needed bulk ordering and account pricing the default store could not offer.',
    solution: 'A customized storefront with tiered pricing, quick-order forms and an ERP integration layer.',
    results: ['Bulk ordering in minutes', 'Account-specific price tiers', 'Inventory synced with back-office ERP'],
  },
  {
    slug: 'clinic-crm-erp',
    title: 'Clinic Management CRM',
    industry: 'Healthcare Operations',
    tags: ['Laravel', 'MySQL', 'Vue.js'],
    desc: 'Appointments, patient records and billing workflows consolidated in one secure back-office tool.',
    hue: [190, 230],
    challenge: 'Front-desk teams juggled several disconnected tools for scheduling, records and invoices.',
    solution: 'A role-based CRM with appointment scheduling, document storage, invoicing and reporting.',
    results: ['One workspace for the front desk', 'Role-based data access', 'Automated reminders and reports'],
  },
  {
    slug: 'marketing-automation-suite',
    title: 'Marketing Automation Suite',
    industry: 'Digital Marketing',
    tags: ['Python', 'React.js', 'AWS', 'Docker'],
    desc: 'Workflow automation connecting ad platforms, CRM and reporting into scheduled client dashboards.',
    hue: [235, 275],
    challenge: 'Agency staff spent hours each week compiling campaign reports by hand.',
    solution: 'Automated data pipelines and white-label dashboards pulling from ad and CRM platforms on a schedule.',
    results: ['Reports generated automatically', 'Consistent client-ready dashboards', 'Containerized, cloud-deployed pipelines'],
  },
]

/* ---------------------------------------------------------------
   PROCESS
---------------------------------------------------------------- */
export const processSteps = [
  {
    icon: Compass, title: 'Discovery & Planning',
    desc: 'We learn your goals, users and constraints, then define scope, priorities and a delivery roadmap.',
    details: ['Stakeholder workshops', 'Requirements & scope document', 'Technical feasibility review', 'Timeline and milestone plan'],
  },
  {
    icon: PenTool, title: 'UI/UX Design',
    desc: 'Wireframes, interactive prototypes and a design system validated with real users before code begins.',
    details: ['User flows & wireframes', 'High-fidelity prototypes', 'Design system & components', 'Accessibility review'],
  },
  {
    icon: Code2, title: 'Development',
    desc: 'Agile sprints with clean, reviewed code, continuous integration and a demo at the end of every cycle.',
    details: ['Sprint-based delivery', 'Code reviews & version control', 'CI pipelines', 'Weekly progress demos'],
  },
  {
    icon: TestTube2, title: 'Testing & Quality Assurance',
    desc: 'Functional, cross-device and performance testing so releases are stable, fast and secure.',
    details: ['Automated & manual testing', 'Cross-browser / device checks', 'Performance & Core Web Vitals', 'Security review'],
  },
  {
    icon: Rocket, title: 'Deployment',
    desc: 'Controlled releases to production with monitoring, rollback plans and documentation for your team.',
    details: ['Staging & production setup', 'Release checklist', 'Monitoring & alerts', 'Handover documentation'],
  },
  {
    icon: Wrench, title: 'Maintenance & Support',
    desc: 'Ongoing updates, security patches and improvements so your product keeps performing as you grow.',
    details: ['Updates & backups', 'Uptime monitoring', 'Priority support', 'Roadmap-based enhancements'],
  },
]

/* ---------------------------------------------------------------
   SAAS SECTION
---------------------------------------------------------------- */
export const saasItems = [
  { icon: Boxes, title: 'Custom SaaS Platforms', desc: 'Multi-tenant products with secure onboarding, roles and admin tooling.' },
  { icon: Repeat, title: 'Subscription-Based Applications', desc: 'Plans, trials, invoicing and payment-provider billing flows.' },
  { icon: Users, title: 'CRM & ERP Solutions', desc: 'Tailored back-office systems for sales, operations and finance.' },
  { icon: LayoutDashboard, title: 'Dashboard Development', desc: 'Interactive analytics and reporting your teams actually use.' },
  { icon: Workflow, title: 'Automation Systems', desc: 'Workflows that remove manual work and connect your tools.' },
  { icon: Cloud, title: 'Cloud-Based Applications', desc: 'Resilient cloud-native apps with automated deployment and scaling.' },
]

/* ---------------------------------------------------------------
   TESTIMONIALS - SAMPLE CONTENT ONLY
---------------------------------------------------------------- */
export const testimonials = [
  {
    quote: 'The team turned a rough concept into a polished product, and the weekly demos kept us confident throughout.',
    name: 'Sample Client A', role: 'Founder, Sample Startup', rating: 5,
  },
  {
    quote: 'Clear communication, thoughtful design decisions and a codebase our own developers could pick up easily.',
    name: 'Sample Client B', role: 'Operations Lead, Sample Company', rating: 5,
  },
  {
    quote: 'Our new site loads faster, looks sharper and finally gives our marketing team the flexibility they needed.',
    name: 'Sample Client C', role: 'Marketing Manager, Sample Brand', rating: 5,
  },
]

/* ---------------------------------------------------------------
   BLOG (sample articles)
---------------------------------------------------------------- */
export const posts = [
  {
    slug: 'choosing-the-right-tech-stack',
    title: 'How to Choose the Right Tech Stack for Your Product',
    category: 'Software Engineering', date: '2026-10-28', read: '7 min read',
    excerpt: 'A practical framework for weighing team skills, scalability, hiring and long-term maintenance.',
    body: [
      'Picking a tech stack is one of the earliest and most consequential product decisions. The goal is not to find the "best" technology, but the one that fits your team, your timeline and your growth plans.',
      '## Start with constraints',
      'List what is fixed: your budget, delivery deadline, team skills and any integrations you must support. These limits usually eliminate more options than any benchmark.',
      '## Favor proven tools',
      'Mature ecosystems mean better documentation, easier hiring and fewer surprises. Choose newer tools only where they offer a clear, measurable advantage.',
      '## Plan for change',
      'Keep boundaries clean between your frontend, API and data layer so individual pieces can be replaced as the product evolves.',
    ],
  },
  {
    slug: 'core-web-vitals-checklist',
    title: 'A Practical Core Web Vitals Checklist for React Apps',
    category: 'Web Development', date: '2026-10-14', read: '6 min read',
    excerpt: 'Concrete steps to improve LCP, INP and CLS without rewriting your application.',
    body: [
      'Core Web Vitals measure real user experience: how fast the main content appears, how quickly the page responds, and how stable the layout is.',
      '## Improve loading (LCP)',
      'Serve optimized images in modern formats, preload critical fonts, and split large JavaScript bundles by route.',
      '## Improve responsiveness (INP)',
      'Avoid long main-thread tasks, defer non-critical scripts and keep event handlers lightweight.',
      '## Improve stability (CLS)',
      'Reserve space for images and embeds with explicit dimensions, and avoid inserting content above existing content.',
    ],
  },
  {
    slug: 'saas-mvp-without-overbuilding',
    title: 'Building a SaaS MVP Without Overbuilding',
    category: 'SaaS', date: '2026-09-30', read: '8 min read',
    excerpt: 'How to scope a first release that proves your idea while leaving room to scale.',
    body: [
      'An MVP exists to test a hypothesis, not to impress with features. The fastest teams ruthlessly separate "must have to learn" from "nice to have."',
      '## Define the core loop',
      'Identify the one workflow that delivers your product\'s value, and build that end to end first.',
      '## Buy before you build',
      'Use proven services for authentication, payments and email so engineering time goes into what differentiates you.',
      '## Instrument from day one',
      'Add basic analytics early. Real usage data should decide what you build next.',
    ],
  },
  {
    slug: 'technical-seo-for-modern-sites',
    title: 'Technical SEO Fundamentals for Modern JavaScript Sites',
    category: 'SEO', date: '2026-09-12', read: '6 min read',
    excerpt: 'Make sure search engines can crawl, render and understand your single-page application.',
    body: [
      'JavaScript frameworks can rank well, but only when search engines can reliably access your content and understand its structure.',
      '## Metadata and structure',
      'Give every page a unique title, description and canonical URL, and use semantic headings in a logical order.',
      '## Rendering strategy',
      'Consider pre-rendering or server rendering for content-heavy pages so crawlers see complete HTML immediately.',
      '## Speed and crawlability',
      'Maintain a clean sitemap, fix broken links and keep page performance strong on mobile devices.',
    ],
  },
  {
    slug: 'digital-transformation-small-business',
    title: 'Digital Transformation for Small Businesses: Where to Start',
    category: 'Digital Transformation', date: '2026-08-26', read: '5 min read',
    excerpt: 'Start with one painful process, automate it well, and build momentum from there.',
    body: [
      'Digital transformation does not require a massive budget. It starts with finding the manual process that costs your team the most time.',
      '## Map the current workflow',
      'Write down each step, who does it and where errors occur. The bottlenecks usually become obvious quickly.',
      '## Automate one thing well',
      'Pick a single high-impact workflow, such as quoting, onboarding or reporting, and replace it with a reliable tool.',
      '## Measure and expand',
      'Track time saved and error reduction, then use those results to prioritize the next improvement.',
    ],
  },
  {
    slug: 'designing-for-conversion',
    title: 'Designing Landing Pages That Convert',
    category: 'UI/UX Design', date: '2026-08-08', read: '6 min read',
    excerpt: 'Hierarchy, clarity and trust: the design principles behind high-performing pages.',
    body: [
      'A high-converting page makes the next step obvious. Every element should either build understanding, build trust or reduce friction.',
      '## Lead with clarity',
      'State what you offer, who it is for and why it matters in the first screen, followed by one primary call to action.',
      '## Build trust visually',
      'Use honest proof such as real results, clear processes and transparent pricing details.',
      '## Reduce friction',
      'Keep forms short, label fields clearly and make error messages helpful.',
    ],
  },
]

/* ---------------------------------------------------------------
   SERVICE DETAIL PAGE CONTENT
---------------------------------------------------------------- */
export const serviceDetails = {
  'web-development': {
    icon: Globe, title: 'Web Development',
    metaDesc: 'Custom website, e-commerce, React.js and WordPress development built for speed, security and growth.',
    headline: 'Websites engineered to perform and convert',
    intro: 'From marketing sites to complex web applications, we build fast, accessible and maintainable websites that represent your brand and drive measurable results.',
    offerings: [
      { icon: Globe, title: 'Custom Websites', desc: 'Tailored design and development, no cookie-cutter templates.' },
      { icon: ShoppingCart, title: 'E-commerce Stores', desc: 'Shopify and custom storefronts with secure checkout.' },
      { icon: Atom, title: 'React.js Applications', desc: 'Interactive SPAs with clean component architecture.' },
      { icon: Layers, title: 'WordPress Solutions', desc: 'Custom themes, plugins and headless WordPress builds.' },
      { icon: Gauge2, title: 'Performance Optimization', desc: 'Core Web Vitals tuning and efficient asset delivery.' },
      { icon: LifeBuoy, title: 'Maintenance & Support', desc: 'Updates, backups, monitoring and priority fixes.' },
    ],
    tech: ['React.js', 'Next.js', 'Vue.js', 'Node.js', 'PHP', 'Laravel', 'WordPress', 'Shopify', 'MySQL'],
    benefits: ['Mobile-first, accessible interfaces', 'SEO-ready structure and metadata', 'Scalable, well-documented codebase', 'Fast load times and strong Core Web Vitals'],
    faqs: [
      { q: 'How long does a typical website project take?', a: 'A marketing website often takes four to eight weeks. Larger web applications and e-commerce builds depend on scope, and we give a firm timeline after discovery.' },
      { q: 'Can you redesign or improve an existing site?', a: 'Yes. We audit your current site, then recommend whether to refresh, refactor or rebuild based on your goals and budget.' },
      { q: 'Will I be able to update content myself?', a: 'Absolutely. We set up an editing experience suited to your team, such as WordPress, a headless CMS or a custom admin panel.' },
    ],
  },
  'mobile-app-development': {
    icon: Smartphone, title: 'Mobile App Development',
    metaDesc: 'Cross-platform iOS and Android app development with React Native and Flutter.',
    headline: 'Mobile apps people enjoy using',
    intro: 'We design and build reliable iOS and Android apps that feel native, perform smoothly and are ready to grow with your business.',
    offerings: [
      { icon: Smartphone, title: 'Cross-Platform Apps', desc: 'One codebase for iOS and Android with React Native or Flutter.' },
      { icon: Palette, title: 'Mobile UI/UX', desc: 'Touch-first interfaces designed around real usage.' },
      { icon: Plug, title: 'Backend & APIs', desc: 'Secure services, authentication and data sync.' },
      { icon: Zap, title: 'Push & Real-Time', desc: 'Notifications, chat and live updates.' },
      { icon: TestTube2, title: 'Device Testing', desc: 'Testing across screen sizes and OS versions.' },
      { icon: Rocket, title: 'Store Release', desc: 'App Store and Google Play submission support.' },
    ],
    tech: ['React Native', 'Flutter', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'],
    benefits: ['Faster delivery with shared codebases', 'Smooth, native-feel performance', 'Offline-friendly where it matters', 'Release and update support after launch'],
    faqs: [
      { q: 'Should I build native or cross-platform?', a: 'For most products, cross-platform delivers faster and costs less while still feeling native. We recommend fully native only when you need deep platform-specific features.' },
      { q: 'Do you handle App Store submission?', a: 'Yes. We prepare builds, assets and metadata and guide you through the review process for both stores.' },
      { q: 'Can the app connect to my existing systems?', a: 'Yes. We build or extend APIs so the app works with your existing backend, CRM or other tools.' },
    ],
  },
  'saas-application-development': {
    icon: Rocket, title: 'SaaS Application Development',
    metaDesc: 'Custom SaaS platform development: multi-tenant architecture, subscriptions, dashboards and automation.',
    headline: 'From MVP to scalable SaaS platform',
    intro: 'We help founders and businesses turn ideas into subscription products, with architecture built for reliability, security and growth.',
    offerings: [
      { icon: Boxes, title: 'Multi-Tenant Platforms', desc: 'Secure workspaces, roles and permissions.' },
      { icon: Repeat, title: 'Subscriptions & Billing', desc: 'Plans, trials, invoices and payment integrations.' },
      { icon: LayoutDashboard, title: 'Dashboards & Analytics', desc: 'Interactive reporting for users and admins.' },
      { icon: Users, title: 'CRM & ERP Systems', desc: 'Custom business tools tailored to your workflow.' },
      { icon: Workflow, title: 'Automation', desc: 'Background jobs and integrated workflows.' },
      { icon: Cloud, title: 'Cloud Infrastructure', desc: 'Automated deployment, monitoring and scaling.' },
    ],
    tech: ['React.js', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
    benefits: ['MVP-first approach to validate early', 'Secure, role-based architecture', 'Built to add features without rewrites', 'Observability and monitoring included'],
    faqs: [
      { q: 'What does an MVP include?', a: 'We scope the smallest set of features that proves your core value, usually one primary workflow, authentication, and basic billing or admin tools.' },
      { q: 'Can the platform handle growth?', a: 'We design with scale in mind: clean data models, caching and cloud infrastructure that can be expanded as usage increases.' },
      { q: 'Do you integrate payment providers?', a: 'Yes. We integrate established billing providers to handle subscriptions, invoices and taxes safely.' },
    ],
  },
  'ui-ux-design': {
    icon: Palette, title: 'UI/UX Design',
    metaDesc: 'Research-led UI/UX design, prototyping and design systems for web and mobile products.',
    headline: 'Design that makes complex products feel simple',
    intro: 'Our designers combine user research, clear visual hierarchy and rigorous prototyping to create interfaces that are beautiful and easy to use.',
    offerings: [
      { icon: Target, title: 'UX Research & Strategy', desc: 'User interviews, journeys and competitor analysis.' },
      { icon: PenTool, title: 'Wireframes & Prototypes', desc: 'Clickable flows tested before development.' },
      { icon: Palette, title: 'Visual & UI Design', desc: 'Distinctive, accessible, on-brand interfaces.' },
      { icon: Boxes, title: 'Design Systems', desc: 'Reusable components and documented standards.' },
      { icon: ShieldCheck, title: 'Accessibility Reviews', desc: 'WCAG-aligned checks and improvements.' },
      { icon: BarChart3, title: 'UX Audits', desc: 'Find friction in existing products and fix it.' },
    ],
    tech: ['Figma', 'Design Tokens', 'Prototyping', 'User Testing', 'Accessibility', 'Responsive Design'],
    benefits: ['Decisions backed by user insight', 'Faster development from clear specs', 'Consistent brand across every screen', 'Accessible by design'],
    faqs: [
      { q: 'Do you design only, or also build?', a: 'Both. You can engage us for design alone and hand off to your team, or have us carry the design through to development.' },
      { q: 'What do I receive at the end?', a: 'Design files, an interactive prototype, a component library and handoff documentation your developers can use directly.' },
      { q: 'Can you improve my existing interface?', a: 'Yes. A UX audit identifies the highest-impact fixes, which we can implement incrementally.' },
    ],
  },
  'api-integrations': {
    icon: Plug, title: 'API & Third-Party Integrations',
    metaDesc: 'REST API development and integrations with payment, CRM, ERP, messaging and analytics platforms.',
    headline: 'Connect your systems, remove the busywork',
    intro: 'We build dependable APIs and integrations that let your software, partners and tools exchange data securely and automatically.',
    offerings: [
      { icon: Server, title: 'REST API Development', desc: 'Well-documented, versioned and secure APIs.' },
      { icon: Plug, title: 'Third-Party Integrations', desc: 'Payments, CRM, ERP, email, SMS and more.' },
      { icon: Workflow, title: 'Workflow Automation', desc: 'Event-driven flows that replace manual steps.' },
      { icon: Repeat, title: 'Data Synchronization', desc: 'Reliable, idempotent syncing between systems.' },
      { icon: ShieldCheck, title: 'Auth & Security', desc: 'OAuth, token handling and rate limiting.' },
      { icon: Wrench, title: 'Legacy Modernization', desc: 'Wrap older systems with clean modern interfaces.' },
    ],
    tech: ['Node.js', 'Python', 'PHP', 'Laravel', 'PostgreSQL', 'MongoDB', 'Docker'],
    benefits: ['Clear documentation for every endpoint', 'Retry logic and error monitoring', 'Secure credential and token handling', 'Designed to be extended later'],
    faqs: [
      { q: 'Which platforms can you integrate?', a: 'We work with most platforms that offer an API or webhooks, including payment gateways, CRMs, ERPs, email and messaging services.' },
      { q: 'How do you keep integrations reliable?', a: 'We add retries, logging, alerting and idempotency so temporary failures do not cause lost or duplicated data.' },
      { q: 'Can you document an existing API?', a: 'Yes. We can audit, document and test existing APIs, then improve them where needed.' },
    ],
  },
  'seo-digital-marketing': {
    icon: Search, title: 'SEO & Digital Marketing',
    metaDesc: 'Technical SEO, content strategy and digital marketing services to grow organic traffic and leads.',
    headline: 'Be found by the customers who are looking for you',
    intro: 'We combine technical SEO, quality content and data-driven marketing to build sustainable visibility and qualified leads.',
    offerings: [
      { icon: Search, title: 'Technical SEO', desc: 'Crawlability, structure, schema and speed.' },
      { icon: FileSearch2, title: 'Keyword & Content Strategy', desc: 'Topics mapped to real search intent.' },
      { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Clear dashboards tied to business goals.' },
      { icon: Target, title: 'Conversion Optimization', desc: 'Testing and refining pages that drive leads.' },
      { icon: Globe, title: 'Local & International SEO', desc: 'Visibility in the regions you serve.' },
      { icon: TrendingUp, title: 'Growth Campaigns', desc: 'Paid and organic campaigns that work together.' },
    ],
    tech: ['Search Console', 'Analytics', 'Schema Markup', 'Core Web Vitals', 'Content Strategy', 'A/B Testing'],
    benefits: ['Transparent monthly reporting', 'Focus on durable, white-hat results', 'Technical fixes done by our developers', 'Strategy tied to revenue goals'],
    faqs: [
      { q: 'How long until SEO shows results?', a: 'Technical fixes can help within weeks, but meaningful organic growth typically builds over three to six months. We set expectations clearly and report progress along the way.' },
      { q: 'Do you guarantee rankings?', a: 'No reputable agency can. We commit to a clear process, transparent reporting and practices that follow search engine guidelines.' },
      { q: 'Can you handle SEO for a site you did not build?', a: 'Yes. We start with an audit and then work with your team or implement the technical changes ourselves.' },
    ],
  },
}

/* helper icons referenced above (aliases keep the import list short) */
import { Gauge as Gauge2, FileSearch as FileSearch2 } from 'lucide-react'
