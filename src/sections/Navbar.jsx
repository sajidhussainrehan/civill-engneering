import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion'
import { Menu, Phone, ShoppingCart, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { brand, navLinks } from '../data/siteData.js'
import Button from '../components/ui/Button.jsx'
import { cn } from '../lib/utils.js'

function useNavbarShadow() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 100], [0.2, 0.9])
  const blurPx = useTransform(scrollY, [0, 100], [6, 14])
  const backgroundColor = useMotionTemplate`rgba(9, 9, 11, ${bgOpacity})`
  const backdropFilter = useMotionTemplate`blur(${blurPx}px)`
  return { backgroundColor, backdropFilter }
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { backgroundColor, backdropFilter } = useNavbarShadow()
  const { itemCount } = useCart()

  const mobileLinks = useMemo(() => {
    const homeSectionLinks = [
      { label: 'Hero', to: '/#top' },
      { label: 'About', to: '/#about' },
      { label: 'Services', to: '/#services' },
      { label: 'Products', to: '/#products' },
    ]

    return location.pathname === '/' ? homeSectionLinks.concat(navLinks) : navLinks
  }, [location.pathname])

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400 text-zinc-950 font-black">
            CM
          </div>
          <div className="leading-tight">
            <p className="text-sm font-extrabold tracking-wide">{brand.name}</p>
            <p className="text-[11px] text-white/60 hidden sm:block">{brand.tagline}</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'px-4 py-2 rounded-xl text-sm font-semibold transition-colors',
                  isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5',
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${brand.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
          >
            <Phone className="h-4 w-4" />
            {brand.phone}
          </a>
          <Link
            to="/cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 ? (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-[20px] place-items-center rounded-full bg-amber-400 px-1 text-[11px] font-black text-zinc-950">
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            ) : null}
          </Link>
          <Button as="link" to="/products" variant="primary">
            Buy Materials
          </Button>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 24, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              className="absolute right-3 top-3 w-[min(92vw,360px)] rounded-2xl border border-white/10 bg-zinc-950 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold">Menu</p>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-3 flex flex-col gap-1">
                {mobileLinks.map((l) => (
                  <Link
                    key={`${l.label}-${l.to}`}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2">
                <Button as="link" to="/cart" onClick={() => setOpen(false)}>
                  Cart{itemCount > 0 ? ` (${itemCount})` : ''}
                </Button>
                <Button as="link" to="/products" onClick={() => setOpen(false)}>
                  Buy Materials
                </Button>
                <Button
                  as="link"
                  to="/contact"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
