import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignClass =
    align === 'center'
      ? 'text-center items-center'
      : align === 'right'
        ? 'text-right items-end'
        : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow ? (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest uppercase text-amber-400"
        >
          {eyebrow}
        </motion.p>
      ) : null}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white"
      >
        {title}
      </motion.h2>

      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="max-w-3xl text-sm sm:text-base text-white/70"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  )
}
