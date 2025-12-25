import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ShieldCheck, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/hero.jpg'
import rightHero2 from '../assets/right-hero2.png'
import Reveal from '../components/motion/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { useCart } from '../context/CartContext.jsx'
import { products, services } from '../data/siteData.js'

const heroBgImage = heroBg

export default function Home() {
  const featured = products.slice(0, 4)
  const { addItem } = useCart()

  return (
    <main id="top">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBgImage} alt="Construction" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-zinc-950" />
          <div className="absolute -top-20 -right-24 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute -bottom-28 -left-28 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 pt-10 sm:pt-12">
            <div className="grid min-h-[calc(100vh-120px)] items-center gap-10 pb-12 pt-10 lg:grid-cols-2 lg:items-start lg:pt-12">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85"
                >
                  <ShieldCheck className="h-4 w-4 text-amber-400" />
                  Trusted Civil Engineering & Material Supply
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
                >
                  Build Strong.
                  <span className="text-amber-400"> Build Smart.</span>
                </motion.h1>

                <div className="mt-5 h-1 w-16 rounded-full bg-amber-400/90" />

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.12 }}
                  className="mt-5 max-w-xl text-base text-white/75"
                >
                  From planning and supervision to premium construction materials, we help you deliver
                  quality projects on time — with engineering guidance you can trust.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18 }}
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <Button as="link" to="/products" variant="primary" className="group">
                    View Products
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button as="link" to="/contact" variant="outline">
                    Get Consultation
                  </Button>
                </motion.div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[{ icon: Truck, label: 'Fast Delivery' }, { icon: CheckCircle2, label: 'Quality Checked' }, { icon: ShieldCheck, label: 'Trusted Work' }].map(
                    (it) => (
                      <div
                        key={it.label}
                        className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <it.icon className="h-4 w-4 text-amber-400" />
                        <p className="text-xs font-semibold text-white/80">{it.label}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.12 }}
                  className="relative mx-auto flex w-full max-w-md items-center justify-center lg:mx-0 lg:max-w-none lg:justify-end lg:h-[600px] overflow-hidden"
                >
                  <img
                    src={rightHero2}
                    alt="Worker"
                    className="hero-right-image pointer-events-none select-none w-auto max-w-full h-auto max-h-[440px] sm:max-h-[500px] lg:absolute lg:bottom-0 lg:right-0 lg:max-h-[600px] lg:object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.45)]"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-black/20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Quick Quote"
                title="Tell us what you need"
                subtitle="Materials, supervision, renovation, or complete construction — share requirements and we’ll call you back."
              />
            </Reveal>

            <Reveal delay={0.08}>
              <Card className="p-6 sm:p-8">
                <div className="grid gap-3">
                  <input
                    className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-amber-400/60"
                    placeholder="Your Name"
                  />
                  <input
                    className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-amber-400/60"
                    placeholder="Phone Number"
                  />
                  <textarea
                    rows={4}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-amber-400/60"
                    placeholder="Project requirements"
                  />
                  <Button className="w-full">Request Callback</Button>
                  <p className="text-xs text-white/45">Frontend UI only — no form submission.</p>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="About"
                title="Engineering-led construction support"
                subtitle="We combine site experience with material expertise to help you build safely, efficiently, and with consistent quality."
              />

              <div className="mt-6 space-y-3 text-sm text-white/75">
                {[
                  '10+ years of civil engineering and on-site coordination',
                  'Material procurement support with quality checks',
                  'Clear communication, transparent costing, and timeline focus',
                ].map((t) => (
                  <p key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400" />
                    <span>{t}</span>
                  </p>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-3">
                <Button as="link" to="/about" variant="primary">
                  Learn More
                </Button>
                <Link
                  to="/contact"
                  className="text-sm font-semibold text-white/75 hover:text-white transition"
                >
                  Talk to an Engineer
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
                <img
                  alt="Blueprint"
                  src="https://source.unsplash.com/Z8ywO53uzAY/1600x1100"
                  className="h-[360px] w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
                  {[{ k: 'Quality', v: 'Checked' }, { k: 'Delivery', v: 'On Time' }, { k: 'Support', v: 'On Site' }].map(
                    (it) => (
                      <div
                        key={it.k}
                        className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur"
                      >
                        <p className="text-xs text-white/60">{it.k}</p>
                        <p className="text-sm font-bold">{it.v}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-black/20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Services"
            title="Complete civil solutions"
            subtitle="From design to site supervision and renovation, our services are built for reliability and project clarity."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, idx) => (
              <Reveal key={s.key} delay={0.04 * idx}>
                <Card className="group h-full p-6 transition-all hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.05]">
                  <div className="flex items-start justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400/10 text-amber-400">
                      <span className="text-sm font-black">0{idx + 1}</span>
                    </div>
                    <span className="text-xs font-semibold text-white/40 group-hover:text-amber-400 transition">
                      View
                    </span>
                  </div>
                  <p className="mt-5 text-base font-bold">{s.title}</p>
                  <p className="mt-2 text-sm text-white/70">{s.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Button as="link" to="/services" variant="outline">
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      <section id="products" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Products"
            title="Featured construction materials"
            subtitle="High-quality building materials with dependable supply. Contact us for best rates and availability."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, idx) => (
              <Reveal key={p.id} delay={0.03 * idx}>
                <Card className="group overflow-hidden">
                  <Link to={`/products/${p.id}`} className="block">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.07]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-semibold text-white/80">
                        {p.category}
                      </div>
                    </div>

                    <div className="p-5 border-t border-white/10 bg-black/35 backdrop-blur">
                      <p className="text-base font-extrabold text-white leading-snug">{p.name}</p>
                      <p className="mt-1 text-sm font-medium text-white/80">{p.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm font-extrabold text-amber-400">{p.priceLabel}</p>
                        <span className="text-sm font-semibold text-white/70 group-hover:text-white/90 transition">
                          View
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="px-5 pb-5">
                    <Button
                      type="button"
                      className="w-full px-4 py-2"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addItem(p.id, p.variants?.[0] || '', 1)
                      }}
                    >
                      Add to cart
                    </Button>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/70">
              Need bulk supply or a custom BOQ? We can assist with procurement planning.
            </p>
            <div className="flex items-center gap-3">
              <Button as="link" to="/products" variant="outline">
                View All Products
              </Button>
              <Button as="link" to="/contact" variant="primary">
                Contact Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/30">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.04] via-white/[0.03] to-amber-400/10 px-6 py-10 sm:px-10">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-amber-400">
                    Ready to start?
                  </p>
                  <p className="mt-2 text-2xl font-extrabold">Get a quote or book a site visit</p>
                  <p className="mt-2 text-sm text-white/70">
                    We respond quickly with the next best step for your project.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button as="link" to="/contact" variant="primary">
                    Contact
                  </Button>
                  <Button as="link" to="/services" variant="outline">
                    View Services
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
