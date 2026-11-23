import Seo from '../components/Seo'
import { PageHero, ServicesSection, ProcessSection, SaasSection, CtaBanner } from '../components/sections'
import { ButtonLink } from '../components/ui'

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Website, e-commerce, React.js, WordPress, mobile app, SaaS, UI/UX, API and SEO services from Webxplore Technologies."
        path="/services"
      />
      <PageHero
        eyebrow="Services"
        title="Everything you need to launch and grow online."
        subtitle="Strategy, design, engineering and marketing under one roof, so your product moves from idea to launch without handoff friction."
      >
        <ButtonLink to="/contact">Get a Free Consultation</ButtonLink>
      </PageHero>
      <ServicesSection />
      <SaasSection />
      <ProcessSection />
      <CtaBanner />
    </>
  )
}
