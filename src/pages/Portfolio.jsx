import { useMemo, useState } from 'react'
import Seo from '../components/Seo'
import { PageHero, ProjectCard, CtaBanner } from '../components/sections'
import { projects } from '../data/site'

export default function Portfolio() {
  const industries = useMemo(() => ['All', ...new Set(projects.map((p) => p.industry))], [])
  const [active, setActive] = useState('All')
  const list = active === 'All' ? projects : projects.filter((p) => p.industry === active)

  return (
    <>
      <Seo
        title="Portfolio & Case Studies"
        description="Sample case studies showing how Webxplore Technologies approaches web, mobile and SaaS projects."
        path="/portfolio"
      />
      <PageHero
        eyebrow="Portfolio"
        title="Case studies that show how we work."
        subtitle="Illustrative sample projects that demonstrate our process and the kinds of products we build. Replace with your real client work as it becomes available."
      />
      <section className="section">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap gap-2.5" role="group" aria-label="Filter projects by industry">
            {industries.map((i) => (
              <button
                key={i}
                type="button"
                aria-pressed={active === i}
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active === i ? 'gradient-bg border-transparent text-white shadow-lg shadow-brand-600/25' : 'border-slate-200 bg-white text-slate-600 hover:border-brand-500 hover:text-brand-600'
                }`}
              >
                {i}
              </button>
            ))}
          </div>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
