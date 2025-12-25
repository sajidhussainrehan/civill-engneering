import { motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../sections/Footer.jsx'
import Navbar from '../sections/Navbar.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const el = document.getElementById(hash.replace('#', ''))
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    const t = setTimeout(() => {
      const el2 = document.getElementById(hash.replace('#', ''))
      if (el2) el2.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 150)

    return () => clearTimeout(t)
  }, [pathname, hash])

  return null
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <ScrollManager />
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.35 }}
        className="pt-16"
      >
        <Outlet />
        <Footer />
      </motion.div>
    </div>
  )
}
