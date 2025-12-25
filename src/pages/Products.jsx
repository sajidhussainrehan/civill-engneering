import { motion } from 'framer-motion'
import { Filter, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'
import Reveal from '../components/motion/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { useCart } from '../context/CartContext.jsx'
import { productCategories, products } from '../data/siteData.js'
import { cn } from '../lib/utils.js'

function formatINR(n) {
  const num = Number(n) || 0
  return `₹${num.toLocaleString('en-IN')}`
}

export default function Products() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const { addItem } = useCart()

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      const categoryOk = category === 'All' || p.category === category
      const queryOk =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      return categoryOk && queryOk
    })
  }, [category, query])

  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10 bg-black/25">
        <div className="absolute inset-0">
          <img
            alt="Construction site"
            src={heroImg}
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
            Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-3 max-w-3xl text-sm text-white/70"
          >
            Browse construction materials. Prices may vary by brand, quantity, and delivery distance.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Materials"
              title="Quality materials for every build"
              subtitle="Filter by category or search by material name."
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3">
                <Search className="h-4 w-4 text-white/50" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products"
                  className="h-full w-60 bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
                />
              </div>

              <div className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white/70">
                <Filter className="h-4 w-4" />
                <span className="text-xs font-semibold">{category}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {productCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  'rounded-full px-4 py-2 text-xs font-semibold transition border',
                  c === category
                    ? 'border-amber-400/40 bg-amber-400/15 text-amber-300'
                    : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white',
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, idx) => (
              <Reveal key={p.id} delay={0.02 * idx}>
                <Card className="group overflow-hidden bg-white text-zinc-950 border border-black/5 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.35)]">
                  <Link to={`/products/${p.id}`} className="block">
                    <div className="relative h-64 overflow-hidden bg-zinc-100">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.06]"
                      />
                      <div className="absolute left-3 top-3 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[11px] font-semibold text-zinc-800">
                        {p.category}
                      </div>
                    </div>
                  </Link>

                  <div className="p-5 border-t border-black/5 bg-white">
                    <Link to={`/products/${p.id}`} className="block">
                      <p className="text-base font-extrabold leading-snug text-zinc-950 hover:text-amber-700 transition">
                        {p.name}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-zinc-700 line-clamp-2">{p.description}</p>
                    </Link>

                    <div className="mt-3 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-lg font-extrabold text-amber-700">{formatINR(p.price)}</p>
                        {p.originalPrice ? (
                          <p className="text-xs text-zinc-400 line-through">{formatINR(p.originalPrice)}</p>
                        ) : null}
                      </div>

                      <div className="text-xs font-semibold text-zinc-600">/ {p.unit}</div>
                    </div>

                    <div className="mt-4">
                      <Button
                        type="button"
                        className="px-4 py-2"
                        onClick={() => addItem(p.id, p.variants?.[0] || '', 1)}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
              <p className="text-sm font-semibold">No products found</p>
              <p className="mt-2 text-sm text-white/60">Try another category or clear the search.</p>
              <div className="mt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setCategory('All')
                    setQuery('')
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  )
}
