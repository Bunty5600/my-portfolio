'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Terminal } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden bg-grid px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm text-purple">Error 404</p>
        <h1 className="mt-2 text-7xl font-bold tracking-tighter text-glow md:text-9xl">
          4<span className="text-purple">0</span>4
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-muted-foreground">
          <span className="font-mono text-purple">$</span> cd /this/page —{' '}
          <span className="text-foreground">No such file or directory.</span>
          <br />
          Looks like this route never got deployed.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_var(--glow)] transition-all hover:-translate-y-0.5"
          >
            <Home className="size-4" /> Back Home
          </Link>
          <Link
            href="/terminal"
            className="inline-flex items-center gap-2 rounded-xl border border-purple/40 px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-primary/10"
          >
            <Terminal className="size-4" /> Open Terminal
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
