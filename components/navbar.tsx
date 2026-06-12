"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Menu, Sparkles, X } from 'lucide-react'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/terminal', label: 'Terminal' },
  { href: '/chat', label: 'Chat' },
  { href: '/contact', label: 'Contact' },
]


const menuVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.18,
      ease: 'easeOut',
      staggerChildren: 0.05,
      delayChildren: 0.03,
    } as const,
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: { duration: 0.14 } as const,
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
}
export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'dark' || stored === 'light') {
        const dark = stored === 'dark'
        setIsDark(dark)
        document.documentElement.classList.toggle('dark', dark)
        return
      }
      const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefers)
      document.documentElement.classList.toggle('dark', prefers)
    } catch (e) {
      // ignore (SSR & privacy-safe)
    }
  }, [])

  function toggleTheme() {
    setIsDark((v) => {
      const next = !v
      try {
        document.documentElement.classList.toggle('dark', next)
        localStorage.setItem('theme', next ? 'dark' : 'light')
      } catch (e) {
        // ignore
      }
      return next
    })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-2 flex h-12 w-[min(1100px,calc(100%-1rem))] items-center justify-between px-3 sm:mt-3 sm:h-14 sm:w-[min(1100px,calc(100%-1.5rem))] sm:px-4 md:px-6">
        <Link
          href="/"
          className="font-mono text-base font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="text-purple">&lt;</span>
          <span className="text-foreground"> Bunty </span>
          <span className="text-purple">/&gt;</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative rounded-lg px-3 py-2 text-sm transition-colors',
                    active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-purple shadow-[0_0_12px_var(--purple)]"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={toggleTheme}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mx-auto mt-2 w-[min(1100px,calc(100%-1rem))] overflow-hidden rounded-2xl border border-border/70 bg-card/95 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl sm:mt-3 sm:w-[min(1100px,calc(100%-1.5rem))] sm:p-3 md:hidden"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-purple/60 to-transparent" />
            <div className="mb-2 flex items-center justify-between px-3 pt-1 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span>Quick Nav</span>
              <span className="inline-flex items-center gap-1 text-purple">
                <Sparkles className="size-3.5" />
                Menu
              </span>
            </div>

            <ul className="flex flex-col gap-1">
              {links.map((link) => {
                const active = pathname === link.href
                return (
                  <motion.li key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'group flex min-h-11 items-center justify-between rounded-lg px-3 text-sm font-medium leading-none transition-all duration-200',
                        active
                          ? 'bg-primary/15 text-foreground shadow-[0_0_0_1px_rgba(124,58,237,0.14)]'
                          : 'text-muted-foreground hover:bg-primary/10 hover:text-foreground hover:translate-x-0.5',
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className={cn(
                            'size-1.5 rounded-full transition-colors',
                            active ? 'bg-purple shadow-[0_0_10px_var(--purple)]' : 'bg-muted-foreground/40 group-hover:bg-purple/70',
                          )}
                        />
                        {link.label}
                      </span>
                      <ChevronRight
                        className={cn(
                          'size-4 transition-all duration-200',
                          active ? 'translate-x-0 text-purple opacity-100' : 'text-muted-foreground/50 opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100',
                        )}
                      />
                    </Link>
                  </motion.li>
                )
              })}
              <li className="pt-1">
                <button
                  type="button"
                  aria-label="Toggle color theme"
                  onClick={toggleTheme}
                  className="flex min-h-11 w-full items-center rounded-lg border border-border/60 bg-background/40 px-3 text-left text-sm font-medium leading-none text-muted-foreground transition-all duration-200 hover:border-purple/30 hover:bg-primary/10 hover:text-foreground"
                >
                  {isDark ? 'Switch to Light' : 'Switch to Dark'}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
