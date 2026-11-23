import { Eye, Handshake, Gem, Users2, Globe2, Wrench } from 'lucide-react'
import Seo from '../components/Seo'
import { Reveal, SectionHeading, ButtonLink } from '../components/ui'
import { PageHero, WhyChooseUs, TechSection, CtaBanner } from '../components/sections'

const values = [
  { icon: Eye, title: 'Transparency first', desc: 'You see progress every week: working demos, honest estimates and clear trade-offs.' },
  { icon: Gem, title: 'Craft over shortcuts', desc: 'We care about the details users feel and the code your team will later maintain.' },
  { icon: Handshake, title: 'Partnership', desc: 'We act as an extension of your team, challenging ideas when it helps your product.' },
  { icon: Wrench, title: 'Built to last', desc: 'Documented, tested and scalable systems that keep working after launch.' },
]

const how = [
  { icon: Users2, title: 'Small, senior teams', desc: 'Designers and engineers work together from day one, so nothing is lost in handoff.' },
  { icon: Globe2, title: 'Remote-first', desc: 'We collaborate across time zones with overlapping hours and shared tooling.' },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn how Webxplore Technologies partners with startups, small businesses and enterprises to design and build digital products."
        path="/about"
      />
      <PageHero
        eyebrow="About Us"
        title="A product studio that treats your goals as ours."
        subtitle="We are a team of designers, engineers and strategists who build websites, apps and software platforms for ambitious businesses around the world."
      >
        <ButtonLink to="/contact">Talk to Our Team</ButtonLink>
      </PageHero>

      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Our story</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Webxplore exists to make high-quality software accessible to businesses of every size. Whether you are a
              founder validating an MVP or an enterprise modernising a legacy system, you get the same disciplined
              process and senior attention.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {/* Placeholder copy: replace with the real company history, founding year and team details. */}
              This page uses placeholder copy. Replace it with your founding story, team and milestones when you are ready.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {how.map((h, i) => {
              const Icon = h.icon
              return (
                <Reveal key={h.title} delay={i * 100}>
                  <div className="h-full rounded-3xl border border-slate-200/80 bg-white p-7 shadow-card">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl gradient-bg text-white"><Icon size={22} aria-hidden="true" /></span>
                    <h3 className="mt-5 text-lg font-bold">{h.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-slate-600">{h.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section bg-navy-950">
        <div className="container-x">
          <SectionHeading dark eyebrow="Values" title="What we stand for" subtitle="Four principles shape every project and every conversation." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="glass h-full rounded-3xl p-7 transition duration-500 hover:-translate-y-1.5 hover:bg-white/10">
                    <Icon size={26} className="text-brand-400" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-bold !text-white">{v.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-slate-300">{v.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <TechSection />
      <CtaBanner />
    </>
  )
}
