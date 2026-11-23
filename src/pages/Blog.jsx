import { useMemo, useState } from 'react'
import Seo from '../components/Seo'
import { PageHero, PostCard, CtaBanner } from '../components/sections'
import { posts } from '../data/site'

export default function Blog() {
  const cats = useMemo(() => ['All', ...new Set(posts.map((p) => p.category))], [])
  const [active, setActive] = useState('All')
  const list = active === 'All' ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      <Seo
        title="Blog"
        description="Articles on web development, software engineering, SEO and digital transformation."
        path="/blog"
      />
      <PageHero
        eyebrow="Blog"
        title="Ideas for building better digital products."
        subtitle="Practical articles on technology, web development, software engineering, SEO and digital transformation."
      />
      <section className="section">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap gap-2.5" role="group" aria-label="Filter articles by category">
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={active === c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active === c ? 'gradient-bg border-transparent text-white shadow-lg shadow-brand-600/25' : 'border-slate-200 bg-white text-slate-600 hover:border-brand-500 hover:text-brand-600'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => <PostCard key={p.slug} post={p} i={i} />)}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
