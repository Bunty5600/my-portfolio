'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Code2, Trophy, Laptop, Sparkles } from 'lucide-react'
import { PageTransition, PageHeader, Tag } from '@/components/ui-bits'
import { Reveal } from '@/components/reveal'

type Item = {
  icon: React.ReactNode
  role: string
  org: string
  period: string
  highlight: string
  points?: string[]
  extra?: string
  tags?: string[]
}

const timeline: Item[] = [
  {
    icon: <Briefcase className="size-5" />,
    role: 'Software Development Intern',
    org: 'Mahanadi Coalfields Limited (MCL), Govt. of India PSU',
    period: 'Summer 2025',
    highlight:
      "Built enterprise-grade internal systems for one of India's largest coal producers",
    points: [
      "Developed MCL's internal website improving resource accessibility across departments",
      'Worked on scalable deployment workflows and AI-assisted automation in a PSU environment',
    ],
    tags: ['Python', 'Web Dev', 'Enterprise Systems', 'AI Automation'],
  },
  {
    icon: <Code2 className="size-5" />,
    role: 'Java Developer Trainee',
    org: 'Odisha Computer Application Centre (OCAC)',
    period: 'Jul 2025 – Present',
    highlight: "Training in the heart of Odisha's government tech infrastructure",
    points: [
      'Core Java, Advanced Java (J2EE), OOP, SDLC practices',
      'Building and debugging modular Java applications with Git workflows',
    ],
    tags: ['Java', 'J2EE', 'OOP', 'Git'],
  },
  {
    icon: <GraduationCap className="size-5" />,
    role: 'B.Tech Computer Science',
    org: 'GITA Autonomous College, Bhubaneswar',
    period: '2023 – 2027',
    highlight: 'Where the foundation was laid',
    tags: ['CS Fundamentals', 'DSA', 'DBMS', 'Networks'],
  },
  {
    icon: <Trophy className="size-5" />,
    role: 'Smart India Hackathon',
    org: 'Participant',
    period: '2024',
    highlight:
      'Rapid prototyping under pressure, collaborative problem solving at scale',
  },
  {
    icon: <Laptop className="size-5" />,
    role: 'Project Developer',
    org: 'Independent Projects',
    period: '2026 - Present',
    highlight:
      'Designed and developed full-stack applications, AI-powered systems, and scalable software solutions from concept to deployment.',
  },
]

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="relative mx-auto max-w-5xl overflow-hidden px-6 pt-32 pb-24">
        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-purple/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-3/4 right-10 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

        <PageHeader
          eyebrow="// experience"
          title="Real work. Real systems. Real impact."
        />

        <div className="relative mt-12 pl-6 md:pl-12">
          {/* Timeline Line with Gradient */}
          <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-purple via-purple/40 to-transparent md:left-[19px]" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.08} className="relative">
                {/* Timeline Node Icon */}
                <div className="absolute -left-[31px] top-6 flex size-8 items-center justify-center rounded-full border border-purple/40 bg-background/90 shadow-[0_0_15px_rgba(168,85,247,0.35)] backdrop-blur-md md:-left-[43px] md:size-10">
                  <div className="size-2 rounded-full bg-purple md:size-2.5" />
                </div>

                {/* Card Container */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-background/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple/40 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.2)] md:p-7"
                >
                  {/* Card Subtle Gradient Highlight */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Header */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-purple/20 bg-purple/10 text-purple shadow-inner transition-colors duration-300 group-hover:bg-purple group-hover:text-white">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                          {item.role}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground">
                          {item.org}
                        </p>
                      </div>
                    </div>

                    <span className="self-start rounded-full border border-purple/30 bg-purple/10 px-3.5 py-1 font-mono text-xs font-medium text-purple backdrop-blur-md sm:self-center">
                      {item.period}
                    </span>
                  </div>

                  {/* Highlight Quote */}
                  <div className="mt-5 flex gap-2 rounded-xl border border-purple/10 bg-muted/30 p-3.5 text-sm text-foreground/90">
                    <Sparkles className="mt-0.5 size-4 shrink-0 text-purple" />
                    <p className="italic">{item.highlight}</p>
                  </div>

                  {/* Key Points */}
                  {item.points && (
                    <ul className="mt-4 space-y-2">
                      {item.points.map((p, pi) => (
                        <li
                          key={pi}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-purple/80 shadow-[0_0_8px_var(--purple)]" />
                          <span className="leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Extra text */}
                  {item.extra && (
                    <p className="mt-3 font-mono text-xs text-muted-foreground">
                      {item.extra}
                    </p>
                  )}

                  {/* Tags */}
                  {item.tags && (
                    <div className="mt-5 flex flex-wrap gap-2 pt-2">
                      {item.tags.map((t) => (
                        <Tag
                          key={t}
                          className="bg-secondary/50 text-xs font-medium transition-colors group-hover:border-purple/20"
                        >
                          {t}
                        </Tag>
                      ))}
                    </div>
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
