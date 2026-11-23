import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Seo from '../components/Seo'
import { PageHero, PostCard, CtaBanner, formatDate } from '../components/sections'
import { posts } from '../data/site'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <NotFound />
  const more = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />
      <PageHero eyebrow={post.category} title={post.title}>
        <p className="text-sm text-slate-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time> &middot; {post.read}
        </p>
      </PageHero>

      <article className="section !pb-16">
        <div className="container-x">
          <div className="prose-x mx-auto max-w-3xl">
            {post.body.map((block, i) =>
              block.startsWith('## ') ? <h2 key={i}>{block.slice(3)}</h2> : <p key={i}>{block}</p>,
            )}
            <p className="rounded-2xl bg-slate-50 p-4 text-sm !leading-6">Sample article for illustration. Replace with your own content.</p>
            <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
              <ArrowLeft size={16} aria-hidden="true" /> Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <section className="section bg-slate-50/70 !pt-16">
        <div className="container-x">
          <h2 className="mb-8 text-2xl font-extrabold">Keep reading</h2>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {more.map((p, i) => <PostCard key={p.slug} post={p} i={i} />)}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
