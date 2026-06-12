'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Code2, Trophy, Laptop } from 'lucide-react'
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
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
        <PageHeader
          eyebrow="// experience"
          title="Real work. Real systems. Real impact."
        />

        <div className="relative pl-8 md:pl-10">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-purple via-purple/50 to-transparent md:left-[11px]" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.05} className="relative">
                {/* node */}
                <span className="absolute -left-8 top-5 flex size-4 items-center justify-center md:-left-10">
                  <span className="size-3.5 rounded-full border-2 border-purple bg-background shadow-[0_0_12px_var(--purple)]" />
                </span>

                <motion.div
                  whileHover={{ scale: 1.015 }}
                  className="glass rounded-2xl p-5 transition-shadow hover:shadow-[0_0_34px_var(--glow)] md:p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-purple">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="font-semibold leading-tight text-foreground">
                          {item.role}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.org}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-purple/30 bg-primary/10 px-3 py-1 font-mono text-xs text-purple">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-4 text-pretty italic text-foreground/80">
                    &ldquo;{item.highlight}&rdquo;
                  </p>

                  {item.points && (
                    <ul className="mt-3 space-y-1.5">
                      {item.points.map((p, pi) => (
                        <li
                          key={pi}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-purple/70" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.extra && (
                    <p className="mt-3 font-mono text-sm text-foreground">
                      {item.extra}
                    </p>
                  )}

                  {item.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
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
