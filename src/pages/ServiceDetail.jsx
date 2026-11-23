import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Check, ChevronDown } from 'lucide-react'
import Seo from '../components/Seo'
import { Reveal, SectionHeading, ButtonLink } from '../components/ui'
import { PageHero, ProcessSection, CtaBanner } from '../components/sections'
import { serviceDetails, serviceLinks } from '../data/site'
import NotFound from './NotFound'

function Faq({ q, a, id }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <h3>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[17px] font-semibold text-navy-900"
          aria-expanded={open}
          aria-controls={`faq-${id}`}
          onClick={() => setOpen((o) => !o)}
        >
          {q}
          <ChevronDown size={20} className={`shrink-0 text-brand-600 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </h3>
      <div id={`faq-${id}`} role="region" hidden={!open} className="px-6 pb-5 text-[15px] leading-7 text-slate-600">{a}</div>
    </div>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const d = serviceDetails[slug]
  if (!d) return <NotFound />
  const Icon = d.icon

  return (
    <>
      <Seo title={d.title} description={d.metaDesc} path={`/services/${slug}`} />
      <PageHero eyebrow="Service" title={d.headline} subtitle={d.intro}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/contact">Start Your Project</ButtonLink>
          <ButtonLink to="/portfolio" variant="secondary" icon={false}>See Related Work</ButtonLink>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow={d.title}
            title="What we deliver"
            subtitle="Each engagement is scoped to your goals. These are the building blocks we most often combine."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {d.offerings.map((o, i) => {
              const OIcon = o.icon
              return (
                <Reveal key={o.title} delay={(i % 3) * 90}>
                  <div className="group h-full rounded-3xl border border-slate-200/80 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:gradient-bg group-hover:text-white">
                      <OIcon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{o.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-slate-600">{o.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50/70">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Why teams choose us for {d.title.toLowerCase()}</h2>
            <ul className="mt-8 space-y-4">
              {d.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[17px] text-slate-700">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full gradient-bg text-white"><Check size={14} aria-hidden="true" /></span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl bg-navy-950 p-8 text-white">
              <span className="grid h-12 w-12 place-items-center rounded-2xl gradient-bg"><Icon size={22} aria-hidden="true" /></span>
              <h3 className="mt-5 text-xl font-bold !text-white">Technologies we use</h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {d.tech.map((t) => (
                  <li key={t} className="glass rounded-lg px-3.5 py-1.5 text-sm font-medium text-slate-200">{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <ProcessSection compact />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Frequently asked questions</h2>
            <p className="mt-4 text-lg text-slate-600">Cannot find your answer? <Link to="/contact" className="font-semibold text-brand-600 underline underline-offset-4">Ask our team</Link>.</p>
            <h3 className="mt-10 text-sm font-semibold text-navy-900">Other services</h3>
            <ul className="mt-3 space-y-2">
              {serviceLinks.filter((s) => s.to !== `/services/${slug}`).map((s) => (
                <li key={s.to}><Link to={s.to} className="text-[15px] text-slate-600 transition hover:text-brand-600">{s.label}</Link></li>
              ))}
            </ul>
          </Reveal>
          <div className="space-y-3">
            {d.faqs.map((f, i) => <Faq key={f.q} id={i} {...f} />)}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
