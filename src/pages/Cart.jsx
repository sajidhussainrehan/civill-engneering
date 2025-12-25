import { motion } from 'framer-motion'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { useCart } from '../context/CartContext.jsx'

function formatINR(n) {
  const num = Number(n) || 0
  return `₹${num.toLocaleString('en-IN')}`
}

export default function Cart() {
  const { detailedItems, subtotal, setQty, removeItem, itemCount } = useCart()

  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10 bg-black/25">
        <div className="absolute inset-0">
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
            Your Cart
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-3 max-w-3xl text-sm text-white/70"
          >
            Review items, update quantities, and proceed to checkout.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          {itemCount === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-lg font-extrabold">Your cart is empty</p>
              <p className="mt-2 text-sm text-white/70">Browse products and add items to your cart.</p>
              <div className="mt-6">
                <Button as="link" to="/products">
                  Go to Products
                </Button>
              </div>
            </Card>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card className="p-4 sm:p-6">
                  <div className="divide-y divide-white/10">
                    {detailedItems.map((it) => (
                      <div key={it.key} className="flex gap-4 py-5">
                        <Link to={`/products/${it.productId}`} className="shrink-0">
                          <img
                            src={it.product.image}
                            alt={it.product.name}
                            className="h-20 w-20 rounded-xl object-cover border border-white/10"
                          />
                        </Link>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <Link
                                to={`/products/${it.productId}`}
                                className="block truncate text-sm font-extrabold hover:text-amber-200 transition"
                              >
                                {it.product.name}
                              </Link>
                              <p className="mt-1 text-xs text-white/60">
                                {it.variant ? `Variant: ${it.variant}` : `Unit: ${it.product.unit}`}
                              </p>
                              <p className="mt-2 text-xs text-white/70">
                                {formatINR(it.unitPrice)}{' '}
                                <span className="text-white/40">/ {it.product.unit}</span>
                              </p>
                            </div>

                            <button
                              onClick={() => removeItem(it.key)}
                              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                              aria-label="Remove"
                              type="button"
                            >
                              <Trash2 className="h-4 w-4 text-white/70" />
                            </button>
                          </div>

                          <div className="mt-4 flex items-center justify-between gap-4">
                            <div className="inline-flex items-center rounded-xl border border-white/10 bg-white/5">
                              <button
                                type="button"
                                onClick={() => setQty(it.key, it.qty - 1)}
                                className="inline-flex h-10 w-10 items-center justify-center hover:bg-white/10 transition rounded-l-xl"
                                aria-label="Decrease"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <div className="w-12 text-center text-sm font-bold">{it.qty}</div>
                              <button
                                type="button"
                                onClick={() => setQty(it.key, it.qty + 1)}
                                className="inline-flex h-10 w-10 items-center justify-center hover:bg-white/10 transition rounded-r-xl"
                                aria-label="Increase"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>

                            <p className="text-sm font-extrabold">{formatINR(it.lineTotal)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <div className="mt-4 text-sm text-white/70">
                  Continue shopping on{' '}
                  <Link to="/products" className="font-semibold text-amber-300 hover:text-amber-200">
                    Products
                  </Link>
                  .
                </div>
              </div>

              <div>
                <Card className="p-6 sm:p-7 sticky top-24">
                  <SectionHeading
                    eyebrow="Summary"
                    title="Order total"
                    subtitle="Taxes and delivery depend on location and order size."
                  />

                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center justify-between text-white/75">
                      <span>Items</span>
                      <span className="font-semibold">{itemCount}</span>
                    </div>
                    <div className="flex items-center justify-between text-white/75">
                      <span>Subtotal</span>
                      <span className="font-extrabold">{formatINR(subtotal)}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button as="link" to="/checkout" className="w-full">
                      Proceed to Checkout
                    </Button>
                    <p className="mt-3 text-xs text-white/45">Frontend UI only — no actual payment processing.</p>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
