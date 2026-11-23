import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'

/* Scroll-reveal wrapper (IntersectionObserver, no dependency) */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', dark = false }) {
  const alignCls = align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <Reveal className={`mb-14 max-w-3xl ${alignCls}`}>
      {eyebrow && <span className={dark ? 'eyebrow-dark' : 'eyebrow'}>{eyebrow}</span>}
      <h2 className={`mt-5 text-3xl font-extrabold sm:text-4xl lg:text-[44px] lg:leading-[1.1] ${dark ? '!text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg leading-8 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>
      )}
    </Reveal>
  )
}

export function ButtonLink({ to, variant = 'primary', children, icon = true, className = '' }) {
  return (
    <Link to={to} className={`btn-${variant} group ${className}`}>
      {children}
      {icon && <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
    </Link>
  )
}

export function Stars({ n = 5 }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < n ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} aria-hidden="true" />
      ))}
    </div>
  )
}

/* Brand mark */
export function Logo({ light = false }) {
  return (
<span className="flex items-center gap-2.5">
  <span className="h-14 w-[180px] flex items-center justify-center">
    <img
      src="/logo.png"
      alt="Webxplore Logo"
      className="h-full w-full object-contain"
    />
  </span>
</span>
  )
}

/* Abstract generated project artwork (no external images, zero weight) */
export function ProjectVisual({ hue = [230, 270], seed = 0, className = '' }) {
  const [h1, h2] = hue
  const id = `pv-${seed}-${h1}`
  return (
    <svg viewBox="0 0 400 260" className={`h-full w-full ${className}`} preserveAspectRatio="xMidYMid slice" role="img" aria-label="Abstract project illustration">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={`hsl(${h1} 70% 14%)`} />
          <stop offset="1" stopColor={`hsl(${h2} 65% 28%)`} />
        </linearGradient>
        <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={`hsl(${h1} 95% 68%)`} />
          <stop offset="1" stopColor={`hsl(${h2} 90% 66%)`} />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#${id}-bg)`} />
      <circle cx={320 - seed * 12} cy="40" r="90" fill={`hsl(${h2} 90% 60%)`} opacity="0.18" />
      <circle cx={60 + seed * 10} cy="240" r="110" fill={`hsl(${h1} 90% 60%)`} opacity="0.16" />
      {/* browser window */}
      <g transform="translate(60 48)">
        <rect width="280" height="170" rx="14" fill="white" opacity="0.1" stroke="white" strokeOpacity="0.25" />
        <rect width="280" height="26" rx="14" fill="white" opacity="0.1" />
        <circle cx="16" cy="13" r="3.5" fill="white" opacity="0.5" />
        <circle cx="29" cy="13" r="3.5" fill="white" opacity="0.4" />
        <circle cx="42" cy="13" r="3.5" fill="white" opacity="0.3" />
        <rect x="18" y="42" width="90" height="10" rx="5" fill={`url(#${id}-a)`} />
        <rect x="18" y="62" width="140" height="6" rx="3" fill="white" opacity="0.35" />
        <rect x="18" y="76" width="110" height="6" rx="3" fill="white" opacity="0.22" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={170 + i * 16} y={150 - (28 + ((i * 37 + seed * 13) % 60))} width="10" height={28 + ((i * 37 + seed * 13) % 60)} rx="3" fill={`url(#${id}-a)`} opacity={0.55 + i * 0.07} />
        ))}
        <rect x="18" y="110" width="52" height="40" rx="8" fill="white" opacity="0.12" />
        <rect x="78" y="110" width="52" height="40" rx="8" fill="white" opacity="0.12" />
      </g>
    </svg>
  )
}
