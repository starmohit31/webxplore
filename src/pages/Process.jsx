import { Check } from 'lucide-react'
import Seo from '../components/Seo'
import { Reveal, SectionHeading } from '../components/ui'
import { PageHero, CtaBanner } from '../components/sections'
import { processSteps } from '../data/site'

export default function Process() {
  return (
    <>
      <Seo
        title="Our Process"
        description="Our six-stage development process: discovery, design, development, QA, deployment and ongoing support."
        path="/process"
      />
      <PageHero
        eyebrow="Our Process"
        title="A clear path from first call to long-term support."
        subtitle="Six stages with defined deliverables, regular demos and no surprises."
      />
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="How we work" title="Six stages, one team" subtitle="Each stage ends with something you can review and approve before we move on." />
          <ol className="relative mx-auto max-w-4xl space-y-8 before:absolute before:left-7 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-brand-500 before:to-violet2-400/30 sm:before:left-8">
            {processSteps.map((s, i) => {
              const Icon = s.icon
              return (
                <li key={s.title} className="relative pl-20 sm:pl-24">
                  <Reveal>
                    <span className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-2xl gradient-bg text-white shadow-lg shadow-brand-600/30 sm:h-16 sm:w-16">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <div className="rounded-3xl border border-slate-200/80 bg-white p-7 transition-all duration-500 hover:shadow-card">
                      <p className="text-sm font-semibold text-brand-600">Step {i + 1}</p>
                      <h3 className="mt-1 text-2xl font-bold">{s.title}</h3>
                      <p className="mt-3 text-[16px] leading-7 text-slate-600">{s.desc}</p>
                      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                        {s.details.map((d) => (
                          <li key={d} className="flex items-center gap-2.5 text-[15px] text-slate-700">
                            <Check size={16} className="shrink-0 text-brand-600" aria-hidden="true" />{d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
