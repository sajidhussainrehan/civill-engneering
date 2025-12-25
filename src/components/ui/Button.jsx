import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils.js'

export default function Button({
  as = 'button',
  to,
  href,
  variant = 'primary',
  className,
  children,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950'

  const variants = {
    primary:
      'bg-amber-400 text-zinc-950 hover:bg-amber-300 focus:ring-amber-400 shadow-[0_10px_30px_-12px_rgba(251,191,36,0.55)]',
    dark:
      'bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-amber-400 border border-white/10',
    outline:
      'bg-transparent text-white hover:bg-white/10 focus:ring-amber-400 border border-white/20',
  }

  const cls = cn(base, variants[variant], className)

  if (as === 'link' && to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    )
  }

  if (as === 'a' && href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
