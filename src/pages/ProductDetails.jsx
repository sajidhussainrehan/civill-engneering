import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ShoppingCart } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { useCart } from '../context/CartContext.jsx'
import { products } from '../data/siteData.js'
import { cn } from '../lib/utils.js'

function formatINR(n) {
  const num = Number(n) || 0
  return `₹${num.toLocaleString('en-IN')}`
}

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()

  const product = useMemo(() => products.find((p) => p.id === id), [id])

  const [variant, setVariant] = useState('')
  const variants = product?.variants || []

  const effectiveVariant = variant || (variants[0] || '')

  if (!product) {
    return (
      <main>
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Card className="p-8 text-center">
              <p className="text-lg font-extrabold">Product not found</p>
              <p className="mt-2 text-sm text-white/70">Please go back to Products.</p>
              <div className="mt-6">
                <Button as="link" to="/products">
                  Back to Products
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10 bg-black/25">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-zinc-950" />
          <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition"
            type="button"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="grid gap-4 sm:grid-cols-[72px_1fr]">
              <div className="hidden sm:flex flex-col gap-3">
                {[0, 1, 2, 3].map((k) => (
                  <button
                    key={k}
                    className="overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                    type="button"
                    aria-label="Thumbnail"
                  >
                    <img src={product.image} alt={product.name} className="h-16 w-16 object-cover" />
                  </button>
                ))}
              </div>

              <Card className="overflow-hidden bg-white text-zinc-950 border-white/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[420px] w-full object-cover"
                />
              </Card>
            </div>

            <div>
              <SectionHeading
                eyebrow={product.category}
                title={product.name}
                subtitle={product.description}
              />

              <div className="mt-5 flex items-end gap-3">
                <p className="text-2xl font-extrabold text-amber-300">{formatINR(product.price)}</p>
                {product.originalPrice ? (
                  <p className="text-sm text-white/50 line-through">{formatINR(product.originalPrice)}</p>
                ) : null}
                <p className="text-sm text-white/60">/ {product.unit}</p>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-sm font-bold">Select Variant</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(variants.length ? variants : ['Standard']).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setVariant(v)}
                      className={cn(
                        'h-10 rounded-xl px-4 text-sm font-semibold transition border',
                        (variant || variants[0]) === v
                          ? 'border-amber-400/40 bg-amber-400/15 text-amber-300'
                          : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10',
                      )}
                    >
                      {v}
                    </button>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button
                    onClick={() => addItem(product.id, effectiveVariant, 1)}
                    className="w-full sm:w-auto"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button as="link" to="/cart" variant="outline" className="w-full sm:w-auto">
                    View Cart
                  </Button>
                </div>

                <div className="mt-5 flex items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-300" />
                  <p className="text-sm text-white/70">
                    Bulk pricing, delivery scheduling, and availability can be confirmed on call.
                  </p>
                </div>
              </div>

              <div className="mt-6 text-sm text-white/70">
                Prefer enquiry?{' '}
                <Link to="/contact" className="font-semibold text-amber-300 hover:text-amber-200">
                  Contact us
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
