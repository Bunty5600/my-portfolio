'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Github } from '@/components/brand-icons'
import { PageTransition, PageHeader, Tag } from '@/components/ui-bits'
import { projects, type Category } from '@/lib/projects'

const filters: ('All' | Category)[] = [
  'All',
  'AI/ML',
  'Full-Stack',
  'Systems',
  'Ongoing',
]

const statusStyles: Record<string, string> = {
  Shipped: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
  Ongoing: 'border-blue/40 bg-blue/10 text-blue',
  Active: 'border-purple/40 bg-primary/15 text-purple',
}

export default function ProjectsPage() {
  const [active, setActive] = useState<'All' | Category>('All')

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(active))

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <PageHeader
          eyebrow="// projects"
          title="Things I've built. Problems I've solved. Systems I've designed."
          subtitle="From AI pipelines to graph databases — every project starts with a real problem."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                active === f
                  ? 'border-purple bg-primary text-primary-foreground shadow-[0_0_18px_var(--glow)]'
                  : 'border-purple/30 text-muted-foreground hover:text-foreground'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="glass group flex flex-col rounded-2xl p-6 transition-shadow hover:shadow-[0_0_34px_var(--glow)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-tight text-foreground">
                    {p.title}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[p.status]}`}
                  >
                    {p.statusLabel}
                  </span>
                </div>

                <p className="mt-3 text-pretty italic text-purple/90">
                  &ldquo;{p.oneLiner}&rdquo;
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-purple/30 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-primary/10"
                    >
                      <Github className="size-4" />
                      GitHub
                    </a>
                  )}
                  {p.deploy && (
                    <a
                      href={p.deploy}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <ExternalLink className="size-4" />
                      Live
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  )
}
