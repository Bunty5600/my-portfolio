'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { PageTransition, PageHeader } from '@/components/ui-bits'
import { Reveal } from '@/components/reveal'

const bullets = [
'Computer Science undergraduate focused on software engineering, AI, and scalable systems',
'Completed an internship at Mahanadi Coalfields Limited, contributing to enterprise application development',
'Currently working as a Java Developer Trainee at OCAC, Odisha',
'Passionate about system design, full-stack development, and AI-powered applications',
'Experienced in building end-to-end projects using React, Node.js, Python, and modern cloud technologies',
]

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks',
    items: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'Three.js'],
  },
  {
    title: 'AI/ML',
    items: [
      'PyTorch',
      'Scikit-learn',
      'RAG Pipelines',
      'NLP',
      'Graph Algorithms',
    ],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'Redis', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'DevOps',
    items: ['Basic Docker', 'GitHub Actions', 'Railway', 'Git'],
  },
  {
    title: 'Core',
    items: [
      'OOP',
      'Microservices',
      'Modular System Design',
      'REST APIs',
    ],
  },
]

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <PageHeader
          eyebrow="// about"
          title="More than a developer. A problem architect."
        />

        <div className="grid items-start gap-10 md:grid-cols-[0.85fr_1.15fr]">
          {/* Left: avatar with glow ring */}
          <Reveal className="relative mx-auto md:sticky md:top-28">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                }}
                className="absolute -inset-3 rounded-full border border-dashed border-purple/40"
              />
              <div className="absolute -inset-6 rounded-full bg-purple/20 blur-3xl" />
              <Image
                src="/bunty-ava.png"
                alt="Bunty Bhainsa"
                width={320}
                height={320}
                className="relative aspect-square w-full max-w-xs rounded-3xl border border-purple/40 object-cover shadow-[0_0_50px_var(--glow)]"
              />
            </div>
          </Reveal>

          {/* Right: bio */}
          <div className="space-y-4">
            {bullets.map((b, i) => (
              <Reveal
                key={i}
                delay={i * 0.06}
                className="glass flex gap-3 rounded-xl p-4"
              >
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-purple shadow-[0_0_8px_var(--purple)]" />
                <p className="leading-relaxed text-foreground/90">{b}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              What I Work With
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, gi) => (
              <Reveal
                key={group.title}
                delay={gi * 0.05}
                className="glass rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_var(--glow)]"
              >
                <h3 className="mb-3 font-mono text-sm text-purple">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ii * 0.04 }}
                      className="rounded-full border border-purple/30 bg-primary/10 px-3 py-1 text-xs font-medium text-foreground/90"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
