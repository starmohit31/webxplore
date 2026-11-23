import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { company, serviceLinks, socials, mainNav } from '../data/site'
import { Logo } from './ui'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | error | success

  const onSubmit = (e) => {
    e.preventDefault()
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
    if (!ok) return setStatus('error')
    // TODO: connect to your email provider (Mailchimp, Brevo, ConvertKit...)
    setStatus('success')
    setEmail('')
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-4">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status !== 'idle') setStatus('idle') }}
          placeholder="you@company.com"
          autoComplete="email"
          aria-invalid={status === 'error'}
          aria-describedby="newsletter-msg"
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-500/20"
        />
        <button type="submit" className="btn-primary !px-4 !py-3" aria-label="Subscribe to newsletter">
          <Send size={18} />
        </button>
      </div>
      <p id="newsletter-msg" role="status" aria-live="polite" className="mt-2 min-h-[20px] text-sm">
        {status === 'error' && (
          <span className="flex items-center gap-1.5 text-red-400"><AlertCircle size={15} /> Please enter a valid email address.</span>
        )}
        {status === 'success' && (
          <span className="flex items-center gap-1.5 text-emerald-400"><CheckCircle2 size={15} /> Thanks! You're subscribed.</span>
        )}
      </p>
    </form>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-20 text-slate-400">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/10 blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" aria-label="Webxplore home"><Logo light /></Link>
            <p className="mt-5 max-w-sm text-[15px] leading-7">
              {company.fullName} is a software and digital product studio helping startups, small businesses and
              enterprises design, build and grow reliable digital products.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-slate-300 transition hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-500/20 hover:text-white"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          <nav className="lg:col-span-2" aria-label="Quick links">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider !text-white">Quick Links</h3>
            <ul className="space-y-3 text-[15px]">
              {mainNav.map((n) => (
                <li key={n.to}><Link to={n.to} className="transition hover:text-white">{n.label}</Link></li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Services">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider !text-white">Services</h3>
            <ul className="space-y-3 text-[15px]">
              {serviceLinks.map((s) => (
                <li key={s.to}><Link to={s.to} className="transition hover:text-white">{s.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider !text-white">Get in Touch</h3>
            <ul className="space-y-3.5 text-[15px]">
              <li className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-brand-400" /><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
              <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-brand-400" /><a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-white">{company.phone}</a></li>
              <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-brand-400" /><span>{company.address}</span></li>
            </ul>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider !text-white">Newsletter</h3>
            <Newsletter />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-7 text-sm sm:flex-row">
          <p>&copy; {year} {company.fullName}. All rights reserved.</p>
          <p className="text-slate-500">Designed &amp; engineered with care.</p>
        </div>
      </div>
    </footer>
  )
}
