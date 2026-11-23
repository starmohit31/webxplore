import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, Quote, Calendar } from 'lucide-react'
import {
  Reveal, SectionHeading, ButtonLink, Stars, ProjectVisual,
} from './ui'
import {
  services, whyUs, techCategories, projects, processSteps, saasItems, testimonials, posts,
} from '../data/site'

/* ---------------------------------------------------------------
   Inner-page hero (dark band used by every non-home page)
---------------------------------------------------------------- */
export function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-36 lg:pb-24 lg:pt-44">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-600/30 blur-[110px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet2-600/30 blur-[110px]" aria-hidden="true" />
      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          {eyebrow && <span className="eyebrow-dark">{eyebrow}</span>}
          <h1 className="mt-5 text-4xl font-extrabold !text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">{title}</h1>
          {subtitle && <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------
   Hero illustration: layered glass cards + orbiting abstract shapes
---------------------------------------------------------------- */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-500/40 via-violet2-500/30 to-transparent blur-3xl" />

      {/* rotating ring */}
      <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full animate-[spin_40s_linear_infinite]">
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5b6cff" />
            <stop offset="1" stopColor="#c084fc" />
          </linearGradient>
        </defs>
        <circle cx="250" cy="250" r="220" fill="none" stroke="url(#ring)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 10" />
        <circle cx="250" cy="250" r="165" fill="none" stroke="white" strokeOpacity="0.1" />
        <circle cx="470" cy="250" r="7" fill="#5b6cff" />
        <circle cx="85" cy="135" r="5" fill="#c084fc" />
      </svg>

      {/* main code window */}
      <div className="glass absolute left-[8%] top-[14%] w-[68%] animate-float rounded-2xl p-4 shadow-2xl">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="space-y-2 font-mono text-[11px] leading-5 sm:text-xs">
          <p><span className="text-violet2-400">const</span> <span className="text-sky-300">product</span> <span className="text-slate-400">=</span> <span className="text-emerald-300">await</span> build({'{'}</p>
          <p className="pl-4"><span className="text-slate-400">design:</span> <span className="text-amber-300">'premium'</span>,</p>
          <p className="pl-4"><span className="text-slate-400">scale:</span> <span className="text-amber-300">'global'</span>,</p>
          <p className="pl-4"><span className="text-slate-400">growth:</span> <span className="text-emerald-300">true</span></p>
          <p>{'}'})<span className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-brand-400" /></p>
        </div>
      </div>

      {/* analytics card */}
      <div className="glass absolute bottom-[10%] right-[2%] w-[52%] animate-floatSlow rounded-2xl p-4 shadow-2xl [animation-delay:1.2s]">
        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">Conversion rate</p>
        <p className="mt-1 text-2xl font-extrabold text-white">+38%</p>
        <svg viewBox="0 0 160 50" className="mt-2 h-12 w-full">
          <defs>
            <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#5b6cff" stopOpacity="0.5" />
              <stop offset="1" stopColor="#5b6cff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 40 L20 34 L40 38 L60 24 L80 28 L100 14 L120 18 L140 6 L160 10 L160 50 L0 50Z" fill="url(#spark)" />
          <path d="M0 40 L20 34 L40 38 L60 24 L80 28 L100 14 L120 18 L140 6 L160 10" fill="none" stroke="#7c8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="text-[10px] text-slate-500">Illustrative example</p>
      </div>

      {/* mobile chip */}
      <div className="glass absolute bottom-[26%] left-[0%] flex animate-floatSlow items-center gap-2.5 rounded-2xl px-3.5 py-3 shadow-2xl">
        <span className="grid h-9 w-9 place-items-center rounded-xl gradient-bg">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>
        </span>
        <div>
          <p className="text-xs font-semibold text-white">iOS &amp; Android</p>
          <p className="text-[10px] text-slate-400">One codebase</p>
        </div>
      </div>

      {/* floating cube */}
      <div className="absolute right-[4%] top-[6%] h-14 w-14 animate-float rounded-2xl border border-white/20 bg-gradient-to-br from-violet2-500/60 to-brand-500/40 shadow-glow backdrop-blur [transform:rotate(14deg)] [animation-delay:0.6s]" />
    </div>
  )
}

/* ---------------------------------------------------------------
   Homepage sections
---------------------------------------------------------------- */
export function ServiceCard({ s, i = 0 }) {
  const Icon = s.icon
  return (
    <Reveal delay={(i % 3) * 90}>
      <Link
        to={s.to}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/40 hover:shadow-card"
      >
        <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:gradient-bg group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-600/30">
          <Icon size={26} aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-600">{s.desc}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
          Learn More
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
        </span>
      </Link>
    </Reveal>
  )
}

export function ServicesSection({ limit }) {
  const list = limit ? services.slice(0, limit) : services
  return (
    <section className="section bg-slate-50/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built around your growth"
          subtitle="End-to-end design, engineering and marketing under one roof, so your product moves from idea to impact without handoff friction."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A partner you can build with for the long term"
          subtitle="We combine engineering depth with clear communication, so you always know where your project stands."
        />
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => {
            const Icon = w.icon
            return (
              <Reveal key={w.title} delay={(i % 3) * 90} className="group">
                <div className="flex items-start gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-bg text-white shadow-lg shadow-brand-600/25 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{w.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-slate-600">{w.desc}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function TechSection() {
  return (
    <section className="section relative overflow-hidden bg-navy-950">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          dark
          eyebrow="Technologies We Use"
          title="Modern, proven tools for every layer"
          subtitle="We pick the right technology for your product, not the other way around."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <Reveal key={cat.name} delay={(i % 3) * 90}>
                <div className="glass h-full rounded-3xl p-6 transition duration-500 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.09]">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/20 text-brand-400"><Icon size={20} aria-hidden="true" /></span>
                    <h3 className="text-lg font-bold !text-white">{cat.name}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2.5">
                    {cat.items.map((t) => (
                      <li key={t.n} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-slate-200">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: t.c, boxShadow: `0 0 10px ${t.c}` }} aria-hidden="true" />
                        {t.n}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ProjectCard({ p, i = 0 }) {
  return (
    <Reveal delay={(i % 3) * 90}>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-card">
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
            <ProjectVisual hue={p.hue} seed={i} />
          </div>
          <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white">{p.industry}</span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold">{p.title}</h3>
          <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-600">{p.desc}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <li key={t} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">{t}</li>
            ))}
          </ul>
          <Link to={`/portfolio/${p.slug}`} className="btn-outline group/btn mt-6 !py-3">
            View Case Study
            <ArrowUpRight size={18} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </Reveal>
  )
}

export function PortfolioSection({ limit = 3, showAll = true }) {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Portfolio"
          title="Case studies that show how we work"
          subtitle="Illustrative sample projects demonstrating our approach, replace with your real client work as it becomes available."
        />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, limit).map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}
        </div>
        {showAll && (
          <Reveal className="mt-12 text-center">
            <ButtonLink to="/portfolio" variant="outline">View All Projects</ButtonLink>
          </Reveal>
        )}
      </div>
    </section>
  )
}

export function ProcessSection({ compact = false }) {
  return (
    <section className="section bg-slate-50/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Process"
          title="A clear path from idea to launch"
          subtitle="Six transparent stages, each with defined deliverables, so there are no surprises along the way."
        />
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={(i % 3) * 90}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                  <span className="absolute right-5 top-3 font-display text-7xl font-extrabold text-slate-100 transition-colors duration-500 group-hover:text-brand-100" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-white transition-all duration-500 group-hover:gradient-bg">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-6 text-xl font-bold">{s.title}</h3>
                  <p className="relative mt-3 text-[15px] leading-7 text-slate-600">{s.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
        {!compact && (
          <Reveal className="mt-12 text-center">
            <ButtonLink to="/process" variant="outline">See the Full Process</ButtonLink>
          </Reveal>
        )}
      </div>
    </section>
  )
}

export function SaasSection() {
  return (
    <section className="section relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-violet2-600/25 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-brand-600/25 blur-[120px]" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow-dark">SaaS Development</span>
          <h2 className="mt-5 text-3xl font-extrabold !text-white sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
            Launch and scale your <span className="gradient-text">SaaS product</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            From first prototype to multi-tenant platform, we build subscription software with secure architecture,
            thoughtful UX and the infrastructure to grow.
          </p>
          <ul className="mt-8 space-y-3">
            {['MVP-first scoping to validate fast', 'Secure, role-based multi-tenant architecture', 'Billing, analytics and admin tooling built in'].map((t) => (
              <li key={t} className="flex items-center gap-3 text-slate-200">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-500/20 text-brand-400"><Check size={14} aria-hidden="true" /></span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink to="/services/saas-application-development">Explore SaaS Development</ButtonLink>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {saasItems.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={(i % 2) * 100}>
                <div className="glass h-full rounded-2xl p-5 transition duration-500 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.1]">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/20 text-brand-400"><Icon size={22} aria-hidden="true" /></span>
                  <h3 className="mt-4 text-base font-bold !text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-400">{s.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say about working with us"
          subtitle="Sample testimonials shown as placeholders until real client feedback is added."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="relative flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-card">
                <span className="absolute right-6 top-5 rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-amber-700">Sample</span>
                <Quote size={30} className="text-brand-500/40" aria-hidden="true" />
                <Stars n={t.rating} />
                <blockquote className="mt-4 flex-1 text-[16px] leading-7 text-slate-700">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full gradient-bg text-sm font-bold text-white" aria-hidden="true">
                    {t.name.split(' ').map((w) => w[0]).slice(-2).join('')}
                  </span>
                  <span>
                    <span className="block font-semibold text-navy-900">{t.name}</span>
                    <span className="block text-sm text-slate-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaBanner({ title = "Have an Idea? Let's Build Something Amazing Together.", sub = 'Tell us about your project and we will reply within one business day with next steps.' }) {
  return (
    <section className="px-5 pb-20 sm:px-8 lg:pb-28">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-navy-950 px-6 py-16 text-center sm:px-14 lg:py-20">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-600/40 blur-[100px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-violet2-600/40 blur-[100px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold !text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">{sub}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink to="/contact">Start Your Project</ButtonLink>
            <ButtonLink to="/portfolio" variant="secondary" icon={false}>Explore Our Work</ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export function PostCard({ post, i = 0, featured = false }) {
  return (
    <Reveal delay={(i % 3) * 90}>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-card">
        <div className="relative aspect-[16/9] overflow-hidden">
          <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
            <ProjectVisual hue={[215 + ((i * 23) % 80), 255 + ((i * 17) % 60)]} seed={i + 2} />
          </div>
          <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white">{post.category}</span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Calendar size={14} aria-hidden="true" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">&middot;</span>
            {post.read}
          </p>
          <h3 className={`mt-3 font-bold ${featured ? 'text-2xl' : 'text-xl'}`}>
            <Link to={`/blog/${post.slug}`} className="transition-colors hover:text-brand-600">{post.title}</Link>
          </h3>
          <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-600">{post.excerpt}</p>
          <Link to={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
            Read Article
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </Reveal>
  )
}

export function BlogSection({ limit = 3 }) {
  return (
    <section className="section bg-slate-50/70">
      <div className="container-x">
        <SectionHeading
          eyebrow="Insights"
          title="Latest from our blog"
          subtitle="Practical thinking on web development, software engineering, SEO and digital transformation."
        />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, limit).map((p, i) => <PostCard key={p.slug} post={p} i={i} />)}
        </div>
        <Reveal className="mt-12 text-center">
          <ButtonLink to="/blog" variant="outline">Read More Articles</ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
