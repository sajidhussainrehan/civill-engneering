import { cn } from '../../lib/utils.js'

export default function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-[0_14px_40px_-18px_rgba(0,0,0,0.7)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
