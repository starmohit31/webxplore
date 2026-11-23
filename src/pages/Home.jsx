import { Globe2, Zap, CalendarCheck, Layers3 } from 'lucide-react'
import Seo from '../components/Seo'
import { ButtonLink } from '../components/ui'
import {
  HeroVisual, ServicesSection, WhyChooseUs, TechSection, PortfolioSection,
  ProcessSection, SaasSection, Testimonials, BlogSection, CtaBanner,
} from '../components/sections'

/* Trust indicators describe how we work (facts about the offering),
   not invented client counts or achievements. */
const stats = [
  { icon: Layers3, value: '10', label: 'Core service lines' },
  { icon: CalendarCheck, value: '6', label: 'Stage delivery process' },
  { icon: Zap, value: '1 day', label: 'Typical first response' },
  { icon: Globe2, value: 'Global', label: 'Remote-first delivery' },
]

export default function Home() {
  return (
    <>
      <Seo
        description="Webxplore Technologies designs and builds websites, mobile apps and SaaS platforms for startups, small businesses and enterprises worldwide."
        path="/"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-950 pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div className="grid-bg absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-brand-600/30 blur-[130px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-violet2-600/30 blur-[130px]" aria-hidden="true" />

        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow-dark">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
              Software &amp; Digital Product Studio
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] !text-white sm:text-5xl lg:text-[64px]">
              We Build Digital Experiences That{' '}
              <span className="gradient-text">Drive Business Growth.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We partner with startups, small businesses and enterprises worldwide to design and engineer websites,
              mobile apps and SaaS platforms: fast, scalable and built to convert.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">Start Your Project</ButtonLink>
              <ButtonLink to="/portfolio" variant="secondary" icon={false}>Explore Our Work</ButtonLink>
            </div>

            <dl className="mt-14 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-2">
              {stats.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.label} className="sm:border-l sm:border-white/10 sm:pl-4 first:sm:border-0 first:sm:pl-0">
                    <Icon size={18} className="mb-2 text-brand-400" aria-hidden="true" />
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-2xl font-extrabold text-white">{s.value}</dd>
                    <p className="mt-0.5 text-xs leading-4 text-slate-400" aria-hidden="true">{s.label}</p>
                  </div>
                )
              })}
            </dl>
          </div>

          <HeroVisual />
        </div>
      </section>

      <ServicesSection />
      <WhyChooseUs />
      <TechSection />
      <PortfolioSection limit={3} />
      <ProcessSection />
      <SaasSection />
      <Testimonials />
      <CtaBanner />
      <BlogSection limit={3} />
    </>
  )
}
