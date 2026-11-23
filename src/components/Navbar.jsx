import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { mainNav } from '../data/site'
import { Logo } from './ui'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMobileServices(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const linkCls = ({ isActive }) =>
    `relative rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors ${
      isActive ? 'text-white' : 'text-slate-300 hover:text-white'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-navy-950/80 py-3 backdrop-blur-xl' : 'bg-transparent py-5'
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900">
        Skip to content
      </a>
      <nav className="container-x flex items-center justify-between" aria-label="Main navigation">
        <Link to="/" aria-label="Webxplore home"><Logo light /></Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <li key={item.to} className="group relative">
                <NavLink to={item.to} className={linkCls}>
                  <span className="inline-flex items-center gap-1">
                    {item.label}
                    <ChevronDown size={15} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
                  </span>
                </NavLink>
                <div className="invisible absolute left-0 top-full w-72 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="glass rounded-2xl bg-navy-900/95 p-2 shadow-2xl">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <Link to={c.to} className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
                          {c.label}
                          <ArrowRight size={14} className="opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className={linkCls}>{item.label}</NavLink>
              </li>
            ),
          )}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact" className="btn-primary !px-5 !py-2.5 !text-sm">Start Your Project</Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="container-x mt-4 max-h-[calc(100vh-90px)] overflow-y-auto pb-8 lg:hidden">
          <ul className="space-y-1">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.to}>
                  <div className="flex items-center">
                    <NavLink to={item.to} className="flex-1 rounded-xl px-4 py-3 text-lg font-medium text-slate-200">{item.label}</NavLink>
                    <button
                      type="button"
                      className="grid h-11 w-11 place-items-center text-slate-300"
                      aria-expanded={mobileServices}
                      aria-label="Toggle services submenu"
                      onClick={() => setMobileServices((v) => !v)}
                    >
                      <ChevronDown size={20} className={`transition-transform ${mobileServices ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {mobileServices && (
                    <ul className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link to={c.to} className="block rounded-lg px-3 py-2.5 text-[15px] text-slate-400 hover:text-white">{c.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'} className="block rounded-xl px-4 py-3 text-lg font-medium text-slate-200">
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
            <li className="pt-3">
              <Link to="/contact" className="btn-primary w-full">Start Your Project</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
