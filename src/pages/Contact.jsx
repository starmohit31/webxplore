import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import Seo from '../components/Seo'
import { Reveal } from '../components/ui'
import { PageHero } from '../components/sections'
import { company } from '../data/site'

const serviceOptions = [
  'Website Development', 'E-commerce Development', 'React.js Development', 'WordPress Development',
  'Mobile App Development', 'SaaS Product Development', 'UI/UX Design', 'API Development & Integration',
  'SEO & Digital Marketing', 'Website Maintenance & Support', 'Not sure yet',
]
const budgetOptions = ['Under $5,000', '$5,000 - $15,000', '$15,000 - $50,000', '$50,000+', 'Not sure yet']

const empty = { name: '', email: '', phone: '', company: '', service: '', budget: '', details: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Enter a valid email address, like name@company.com.'
  if (v.phone.trim() && !/^[+\d][\d\s().-]{6,19}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number, using digits and an optional + prefix.'
  if (!v.service) e.service = 'Choose the service you need.'
  if (!v.budget) e.budget = 'Choose an approximate budget.'
  if (v.details.trim().length < 20) e.details = 'Describe your project in at least 20 characters.'
  return e
}

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy-900">
        {label}{required ? <span className="text-red-500" aria-hidden="true"> *</span> : <span className="font-normal text-slate-500"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600" role="alert">
          <AlertCircle size={14} aria-hidden="true" />{error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }))
  }
  const props = (k) => ({
    id: k,
    value: values[k],
    onChange: set(k),
    'aria-invalid': errors[k] ? 'true' : undefined,
    'aria-describedby': errors[k] ? `${k}-error` : undefined,
    className: `input ${errors[k] ? 'input-error' : ''}`,
  })

  async function onSubmit(e) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      // move focus to the first invalid field
      const first = Object.keys(found)[0]
      document.getElementById(first)?.focus()
      return
    }
    setStatus('sending')
    try {
      /* Set VITE_FORM_ENDPOINT (e.g. a Formspree, Getform or your own API URL) to receive submissions.
         Without it, the form opens the visitor's email app with the details filled in. */
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!res.ok) throw new Error('Request failed')
      } else {
        const body = Object.entries({
          Name: values.name, Email: values.email, Phone: values.phone, Company: values.company,
          Service: values.service, Budget: values.budget, Details: values.details,
        }).map(([k, v]) => `${k}: ${v}`).join('\n')
        window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('Project inquiry from ' + values.name)}&body=${encodeURIComponent(body)}`
      }
      setStatus('success')
      setValues(empty)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Tell us about your project. Webxplore Technologies replies to every inquiry within one business day."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact Us"
        title="Tell us about your project."
        subtitle="Share a few details and we will reply within one business day with questions, ideas and next steps."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card sm:p-10">
              {status === 'success' ? (
                <div className="py-10 text-center" role="status">
                  <CheckCircle2 size={56} className="mx-auto text-emerald-500" aria-hidden="true" />
                  <h2 className="mt-5 text-2xl font-extrabold">Inquiry ready to send</h2>
                  <p className="mx-auto mt-3 max-w-md text-slate-600">
                    Thanks for the details. We reply to every inquiry within one business day. If your email app opened, press Send to finish.
                  </p>
                  <button type="button" className="btn-outline mt-7" onClick={() => setStatus('idle')}>Send another inquiry</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate aria-label="Project inquiry form">
                  <h2 className="text-2xl font-extrabold">Project inquiry</h2>
                  <p className="mt-2 text-sm text-slate-500">Fields marked * are required.</p>

                  {status === 'error' && (
                    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
                      <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                      We could not send your inquiry. Check your connection and try again, or email us at {company.email}.
                    </div>
                  )}

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="Full name" required error={errors.name}>
                      <input type="text" autoComplete="name" placeholder="Jane Smith" {...props('name')} />
                    </Field>
                    <Field id="email" label="Email address" required error={errors.email}>
                      <input type="email" autoComplete="email" placeholder="jane@company.com" {...props('email')} />
                    </Field>
                    <Field id="phone" label="Phone number" error={errors.phone}>
                      <input type="tel" autoComplete="tel" placeholder="+1 555 000 0000" {...props('phone')} />
                    </Field>
                    <Field id="company" label="Company name" error={errors.company}>
                      <input type="text" autoComplete="organization" placeholder="Company Inc." {...props('company')} />
                    </Field>
                    <Field id="service" label="Service required" required error={errors.service}>
                      <select {...props('service')}>
                        <option value="">Select a service</option>
                        {serviceOptions.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </Field>
                    <Field id="budget" label="Project budget" required error={errors.budget}>
                      <select {...props('budget')}>
                        <option value="">Select a budget</option>
                        {budgetOptions.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </Field>
                  </div>
                  <div className="mt-5">
                    <Field id="details" label="Project details" required error={errors.details}>
                      <textarea rows={6} placeholder="What are you building, who is it for, and when do you need it?" {...props('details')} />
                    </Field>
                  </div>
                  <button type="submit" disabled={status === 'sending'} className="btn-primary mt-7 w-full disabled:opacity-70 sm:w-auto">
                    {status === 'sending' ? (<><Loader2 size={18} className="animate-spin" aria-hidden="true" />Sending</>) : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={100} as="aside">
            <div className="rounded-3xl bg-navy-950 p-8 text-slate-300">
              <h2 className="text-xl font-bold !text-white">Contact details</h2>
              <p className="mt-2 text-sm text-slate-400">Placeholder details: replace in <code className="text-brand-400">src/data/site.js</code>.</p>
              <ul className="mt-7 space-y-5 text-[15px]">
                <li className="flex gap-3"><Mail size={20} className="mt-0.5 shrink-0 text-brand-400" aria-hidden="true" /><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
                <li className="flex gap-3"><Phone size={20} className="mt-0.5 shrink-0 text-brand-400" aria-hidden="true" /><a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-white">{company.phone}</a></li>
                <li className="flex gap-3"><MapPin size={20} className="mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />{company.address}</li>
                <li className="flex gap-3"><Clock size={20} className="mt-0.5 shrink-0 text-brand-400" aria-hidden="true" />{company.hours}</li>
              </ul>
              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="font-semibold text-white">What happens next</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
                  <li>We review your inquiry and reply within one business day.</li>
                  <li>We schedule a short discovery call.</li>
                  <li>You receive a scoped proposal and timeline.</li>
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
