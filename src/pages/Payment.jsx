import { motion } from 'framer-motion'
import { CreditCard, ShieldCheck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import Reveal from '../components/motion/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { useCart } from '../context/CartContext.jsx'

function formatINR(n) {
  const num = Number(n) || 0
  return `₹${num.toLocaleString('en-IN')}`
}

export default function Payment() {
  const [params] = useSearchParams()
  const location = useLocation()
  const isCheckout = location.pathname === '/checkout'
  const [loading, setLoading] = useState(false)
  const { detailedItems, subtotal, itemCount, clear } = useCart()

  const product = params.get('product') || 'Selected Product'
  const amountParam = params.get('amount') || ''

  const initialAmount = useMemo(() => {
    if (isCheckout) return String(Number(subtotal) || 0)
    const n = Number(amountParam)
    return Number.isFinite(n) && n > 0 ? String(n) : ''
  }, [amountParam, isCheckout, subtotal])

  const [amount, setAmount] = useState(initialAmount)
  const [method, setMethod] = useState('upi')

  function onPay(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (isCheckout) clear()
    }, 1200)
  }

  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10 bg-black/25">
        <div className="absolute inset-0">
          <img
            alt="Construction planning"
            src="https://source.unsplash.com/qvBYnMuNJ9A/2000x900"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-zinc-950" />
          <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-3xl font-extrabold sm:text-4xl"
          >
            Payment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-3 max-w-3xl text-sm text-white/70"
          >
            Secure checkout UI for advance payment / product order / consultation fees.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <SectionHeading
                eyebrow="Checkout"
                title={isCheckout ? 'Proceed to checkout' : 'Proceed to pay'}
                subtitle="This is a frontend-only payment placeholder. No gateway integration is included."
              />

              <div className="mt-8 grid gap-5">
                <Card className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-white/60">{isCheckout ? 'Order' : 'Selected'}</p>
                      <p className="mt-1 text-lg font-extrabold">
                        {isCheckout ? `${itemCount || 0} item(s)` : product}
                      </p>
                      <p className="mt-2 text-sm text-white/70">
                        {isCheckout
                          ? 'Review total and select a payment method.'
                          : 'Enter amount for advance, order value, or consultation fee.'}
                      </p>
                    </div>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-amber-300">
                      <CreditCard className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="text-xs font-semibold text-white/60">Amount (INR)</label>
                    <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3">
                      <span className="text-sm font-bold text-white/70">₹</span>
                      <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="e.g. 5000"
                        className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
                        readOnly={isCheckout}
                      />
                    </div>
                    {isCheckout ? (
                      <p className="mt-2 text-xs text-white/50">Subtotal: {formatINR(subtotal)}</p>
                    ) : null}
                  </div>

                  {isCheckout ? (
                    <div className="mt-6">
                      <p className="text-sm font-bold">Payment Method</p>
                      <div className="mt-3 grid gap-2">
                        {[
                          { k: 'upi', t: 'UPI' },
                          { k: 'card', t: 'Card' },
                          { k: 'netbanking', t: 'Net Banking' },
                          { k: 'cod', t: 'Cash on Delivery (Demo)' },
                        ].map((m) => (
                          <label
                            key={m.k}
                            className="flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 hover:bg-white/[0.04] transition"
                          >
                            <div className="flex items-center gap-3">
                              <input
                                type="radio"
                                name="payment-method"
                                value={m.k}
                                checked={method === m.k}
                                onChange={() => setMethod(m.k)}
                              />
                              <span className="text-sm font-semibold text-white/80">{m.t}</span>
                            </div>
                            <span className="text-xs text-white/45">UI</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="mt-5 flex items-start gap-2 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-amber-300" />
                    <p className="text-sm text-white/75">
                      Payment gateway (Razorpay/Stripe) UI placeholder. Connect your gateway later.
                    </p>
                  </div>

                  {isCheckout && itemCount === 0 ? (
                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                      <p className="text-sm font-bold">Your cart is empty</p>
                      <p className="mt-1 text-sm text-white/70">Add products to checkout.</p>
                      <div className="mt-4">
                        <Button as="link" to="/products" className="w-full">
                          Browse Products
                        </Button>
                      </div>
                    </div>
                  ) : null}
                </Card>

                <Card className="p-6 sm:p-7">
                  <p className="text-sm font-bold">Customer Details</p>
                  <form onSubmit={onPay} className="mt-5 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        required
                        className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-amber-400/60"
                        placeholder="Full Name"
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

                    {isCheckout ? (
                      <input
                        required
                        className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-amber-400/60"
                        placeholder="Delivery Address"
                      />
                    ) : null}

                    <motion.div whileTap={{ scale: 0.98 }}>
                      <Button className="w-full" disabled={loading || (isCheckout && itemCount === 0)}>
                        {loading
                          ? 'Processing...'
                          : isCheckout
                            ? `Pay ${formatINR(subtotal)} (${method.toUpperCase()})`
                            : 'Proceed to Pay'}
                      </Button>
                    </motion.div>

                    <p className="text-xs text-white/45">
                      Frontend UI only — no money is collected.
                    </p>
                  </form>
                </Card>

                <div className="text-sm text-white/70">
                  Prefer direct order? Go back to{' '}
                  <Link to="/products" className="font-semibold text-amber-300 hover:text-amber-200">
                    Products
                  </Link>
                  .
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <Card className="p-6 sm:p-8">
                <p className="text-sm font-bold">Order summary</p>
                <p className="mt-2 text-sm text-white/70">
                  {isCheckout
                    ? 'Review your items before payment.'
                    : 'Many suppliers collect a small advance to confirm material booking or delivery slots.'}
                </p>

                {isCheckout ? (
                  <div className="mt-6 grid gap-3">
                    {detailedItems.map((it) => (
                      <div
                        key={it.key}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold">{it.product.name}</p>
                          <p className="mt-1 text-xs text-white/55">
                            {it.variant ? it.variant : it.product.unit} • Qty {it.qty}
                          </p>
                        </div>
                        <p className="text-sm font-extrabold">{formatINR(it.lineTotal)}</p>
                      </div>
                    ))}

                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between text-sm text-white/75">
                        <span>Subtotal</span>
                        <span className="font-extrabold">{formatINR(subtotal)}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 grid gap-3">
                    {[
                      { t: 'Faster booking', d: 'Reserve stock and schedule delivery.' },
                      { t: 'Priority support', d: 'Confirm site visit or consultation slots.' },
                      { t: 'Clear confirmation', d: 'Receipt reference for your order.' },
                    ].map((x) => (
                      <div key={x.t} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                        <p className="text-sm font-semibold">{x.t}</p>
                        <p className="mt-1 text-sm text-white/65">{x.d}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-sm font-bold">Demo notes</p>
                  <p className="mt-2 text-sm text-white/70">
                    You can integrate Razorpay/Stripe in this page later. For now, it demonstrates the
                    checkout UI, form, validations, and loading state.
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
