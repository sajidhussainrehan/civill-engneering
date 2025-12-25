import { motion } from 'framer-motion'
import { Award, CheckCircle2, Target, Users } from 'lucide-react'
import Reveal from '../components/motion/Reveal.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Button from '../components/ui/Button.jsx'
import teamImg from '../assets/team.jpg'
import workImg from '../assets/work.jpg'

export default function About() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10 bg-black/25">
        <div className="absolute inset-0">
          <img
            alt="Construction team"
            src={teamImg}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-zinc-950" />
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-3xl font-extrabold sm:text-4xl"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-3 max-w-3xl text-sm text-white/70"
          >
            We are a civil engineering and construction materials firm focused on practical solutions,
            workmanship quality, and transparent communication.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Who we are"
                title="Professional engineering support for every stage"
                subtitle="Our team helps you plan, execute, supervise, and source materials with clarity and confidence."
              />

              <div className="mt-6 space-y-3 text-sm text-white/75">
                {[
                  'Construction planning and on-site coordination',
                  'Material selection guidance to match design and budget',
                  'Quality assurance checks at key milestones',
                  'Renovation and consultancy for existing structures',
                ].map((t) => (
                  <p key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400" />
                    <span>{t}</span>
                  </p>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <Button as="link" to="/contact" variant="primary">
                  Contact
                </Button>
                <Button as="link" to="/services" variant="outline">
                  Our Services
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-3xl border border-white/10">
                <img
                  alt="Engineer"
                  src={workImg}
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'Mission',
                desc: 'Deliver strong, safe, and cost-effective solutions through engineering discipline and quality materials.',
              },
              {
                icon: Users,
                title: 'Vision',
                desc: 'Become a trusted local partner for construction execution and materials supply with consistent service.',
              },
              {
                icon: Award,
                title: 'Values',
                desc: 'Quality-first work, clear commitments, and respectful collaboration with clients and contractors.',
              },
            ].map((c, idx) => (
              <Reveal key={c.title} delay={0.04 * idx}>
                <Card className="h-full p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-amber-400/10 text-amber-400">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <p className="text-base font-bold">{c.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-white/70">{c.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/20">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <Card className="p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-amber-400">
                Construction Expertise
              </p>
              <p className="mt-2 text-2xl font-extrabold">What we’re best at</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  'Site supervision and stage-wise checks',
                  'BOQ estimation and material planning',
                  'Vendor coordination and procurement guidance',
                  'Renovation feasibility and structural consultation',
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400" />
                    <p className="text-sm text-white/75">{t}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
