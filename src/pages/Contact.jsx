import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import Reveal from '../components/motion/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import workImg from '../assets/work.jpg'
import { brand } from '../data/siteData.js'

export default function Contact() {
  const [loading, setLoading] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 900)
  }

  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10 bg-black/25">
        <div className="absolute inset-0">
          <img
            alt="Engineers on site"
            src={workImg}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-zinc-950" />
          <div className="absolute -top-28 -right-28 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-3xl font-extrabold sm:text-4xl"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-3 max-w-3xl text-sm text-white/70"
          >
            Share your requirement for materials, supervision, or consultation. We’ll get back quickly.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Get in touch"
            title="Let’s discuss your project"
            subtitle="This is a frontend-only demo form. Add backend integration later if needed."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="p-6 sm:p-8">
                <p className="text-sm font-bold">Send a message</p>
                <form onSubmit={onSubmit} className="mt-5 grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-amber-400/60"
                      placeholder="Name"
                    />
                    <input
                      required
                      type="tel"
                      className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-amber-400/60"
                      placeholder="Phone"
                    />
                  </div>
                  <input
                    required
                    type="email"
                    className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-amber-400/60"
                    placeholder="Email"
                  />
                  <textarea
                    required
                    rows={5}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-amber-400/60"
                    placeholder="Message"
                  />

                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button className="w-full" disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-white/45">Frontend UI only — no message is sent.</p>
                </form>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-6">
                <Card className="p-6 sm:p-8">
                  <p className="text-sm font-bold">Business Details</p>
                  <div className="mt-4 space-y-3 text-sm text-white/75">
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
                </Card>

                <Card className="overflow-hidden">
                  <div className="h-[340px]">
                    <iframe
                      title="Map"
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=New%20Delhi%2C%20India&output=embed"
                    />
                  </div>
                </Card>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
