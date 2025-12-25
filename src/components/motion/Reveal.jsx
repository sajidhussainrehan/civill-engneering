import { motion } from 'framer-motion'

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  duration = 0.55,
  once = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
