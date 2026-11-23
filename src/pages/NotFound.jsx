import Seo from '../components/Seo'
import { ButtonLink } from '../components/ui'

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-navy-950 px-5 pt-24 text-center">
      <Seo title="Page not found" description="The page you are looking for does not exist." path="/404" />
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="relative">
        <p className="gradient-text font-display text-8xl font-extrabold">404</p>
        <h1 className="mt-4 text-3xl font-extrabold !text-white">This page does not exist</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-300">The link may be outdated or mistyped. Head back home or tell us what you were looking for.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink to="/">Back to Home</ButtonLink>
          <ButtonLink to="/contact" variant="secondary" icon={false}>Contact Us</ButtonLink>
        </div>
      </div>
    </section>
  )
}
