'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function PageTransition({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 font-mono text-sm text-purple">{eyebrow}</p>
      )}
      <h1 className="text-balance text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-purple/30 bg-primary/10 px-3 py-1 text-xs font-medium text-foreground/90">
      {children}
    </span>
  )
}
