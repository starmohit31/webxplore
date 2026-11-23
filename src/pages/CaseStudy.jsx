import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Check } from 'lucide-react'
import Seo from '../components/Seo'
import { Reveal, ProjectVisual, ButtonLink } from '../components/ui'
import { PageHero, ProjectCard, CtaBanner } from '../components/sections'
import { projects } from '../data/site'
import NotFound from './NotFound'

export default function CaseStudy() {
  const { slug } = useParams()
  const idx = projects.findIndex((p) => p.slug === slug)
  if (idx < 0) return <NotFound />
  const p = projects[idx]
  const related = projects.filter((x) => x.slug !== slug).slice(0, 3)

  return (
    <>
      <Seo title={p.title} description={p.desc} path={`/portfolio/${p.slug}`} />
      <PageHero eyebrow={p.industry} title={p.title} subtitle={p.desc}>
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white">
          <ArrowLeft size={16} aria-hidden="true" /> All case studies
        </Link>
      </PageHero>

      <section className="section">
        <div className="container-x">
          <Reveal className="overflow-hidden rounded-3xl border border-slate-200 shadow-card">
            <div className="aspect-[16/8]"><ProjectVisual hue={p.hue} seed={idx} /></div>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            <Reveal className="prose-x">
              <h2>The challenge</h2>
              <p>{p.challenge}</p>
              <h2>Our solution</h2>
              <p>{p.solution}</p>
              <h2>Outcomes</h2>
              <ul className="!list-none !pl-0">
                {p.results.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-2 grid h-6 w-6 shrink-0 place-items-center rounded-full gradient-bg text-white"><Check size={14} aria-hidden="true" /></span>
                    {r}
                  </li>
                ))}
              </ul>
              <p className="rounded-2xl bg-slate-50 p-4 text-sm !leading-6">Sample project for illustration. Replace with verified client details and metrics before launch.</p>
            </Reveal>
            <Reveal delay={100} as="aside">
              <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-7 shadow-card">
                <h3 className="text-lg font-bold">Project snapshot</h3>
                <dl className="mt-5 space-y-4 text-[15px]">
                  <div><dt className="font-semibold text-navy-900">Industry</dt><dd className="text-slate-600">{p.industry}</dd></div>
                  <div>
                    <dt className="font-semibold text-navy-900">Technologies</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {p.tags.map((t) => <span key={t} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">{t}</span>)}
                    </dd>
                  </div>
                </dl>
                <ButtonLink to="/contact" className="mt-7 w-full">Discuss a Similar Project</ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50/70 !pt-16">
        <div className="container-x">
          <h2 className="mb-8 text-2xl font-extrabold">More case studies</h2>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => <ProjectCard key={r.slug} p={r} i={i} />)}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
