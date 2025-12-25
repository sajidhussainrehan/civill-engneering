import { motion } from 'framer-motion'
import { Building2, ClipboardCheck, Hammer, PencilRuler } from 'lucide-react'
import Reveal from '../components/motion/Reveal.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Button from '../components/ui/Button.jsx'
import workImg from '../assets/work.jpg'
import { services } from '../data/siteData.js'

const icons = {
  Construction: Building2,
  'Architectural Design': PencilRuler,
  Supervision: ClipboardCheck,
  'Renovation & Consultancy': Hammer,
}

export default function Services() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10 bg-black/25">
        <div className="absolute inset-0">
          <img
            alt="Construction work"
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
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-3 max-w-3xl text-sm text-white/70"
          >
            Design, execution, and supervision services built for smooth delivery and clear project control.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="What we do"
            title="Engineering services tailored to your project"
            subtitle="Choose a service and we’ll guide the best next steps for your budget, timeline, and site constraints."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, idx) => {
              const Icon = icons[s.title] ?? Building2
              return (
                <Reveal key={s.key} delay={0.04 * idx}>
                  <Card className="group h-full p-6 transition-all hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.05]">
                    <div className="flex items-center justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-400/10 text-amber-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
                        Service
                      </div>
                    </div>
                    <p className="mt-5 text-base font-bold">{s.title}</p>
                    <p className="mt-2 text-sm text-white/70">{s.description}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <p className="text-xs text-white/55">Site visit available</p>
                      <p className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition">
                        Details
                      </p>
                    </div>
                  </Card>
                </Reveal>
              )
            })}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="p-8 sm:p-10">
                <p className="text-xs font-semibold tracking-widest uppercase text-amber-400">Process</p>
                <p className="mt-2 text-2xl font-extrabold">How we work</p>
                <div className="mt-6 grid gap-3">
                  {[
                    { step: '01', title: 'Requirement', desc: 'Understand scope, budget, and timeline.' },
                    { step: '02', title: 'Plan', desc: 'Material list, BOQ, and stage schedule.' },
                    { step: '03', title: 'Execute', desc: 'Coordination, quality checks, supervision.' },
                    { step: '04', title: 'Handover', desc: 'Completion review and final recommendations.' },
                  ].map((x) => (
                    <div
                      key={x.step}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-xs font-black text-amber-400">
                        {x.step}
                      </div>
                      <div>
                        <p className="text-sm font-bold">{x.title}</p>
                        <p className="text-sm text-white/70">{x.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card className="p-8 sm:p-10">
                <p className="text-xs font-semibold tracking-widest uppercase text-amber-400">Need help?</p>
                <p className="mt-2 text-2xl font-extrabold">Book a consultation</p>
                <p className="mt-2 text-sm text-white/70">
                  Share your plan, site photos, or material list. We’ll suggest improvements and cost-saving
                  options.
                </p>

                <div className="mt-6 grid gap-3">
                  <input
                    className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-amber-400/60"
                    placeholder="Your Name"
                  />
                  <input
                    className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-amber-400/60"
                    placeholder="Phone Number"
                  />
                  <Button as="link" to="/payment?product=Consultation&amount=500" className="w-full">
                    Proceed to Payment (Demo)
                  </Button>
                  <p className="text-xs text-white/45">Frontend UI only — payment is a placeholder.</p>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
