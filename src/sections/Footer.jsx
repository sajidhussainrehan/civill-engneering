import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { brand, navLinks } from '../data/siteData.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400 text-zinc-950 font-black">
                CM
              </div>
              <div>
                <p className="text-sm font-extrabold tracking-wide">{brand.name}</p>
                <p className="text-xs text-white/60">{brand.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Reliable civil engineering services and construction materials supply with a focus on quality,
              safety, and long-term value.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold">Quick Links</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm text-white/70 hover:text-white transition"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/payment" className="text-sm text-white/70 hover:text-white transition">
                Payment
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold">Contact</p>
            <div className="space-y-2 text-sm text-white/75">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-amber-400" />
                <span>{brand.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-400" />
                <a
                  className="hover:text-white transition"
                  href={`tel:${brand.phone.replace(/\s+/g, '')}`}
                >
                  {brand.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-400" />
                <a className="hover:text-white transition" href={`mailto:${brand.email}`}>
                  {brand.email}
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                href="#"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                href="#"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                href="#"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>Frontend UI only • No payment processing</p>
        </div>
      </div>
    </footer>
  )
}
