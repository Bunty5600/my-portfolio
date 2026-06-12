'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown, Computer } from 'lucide-react'
import { FloatingIcons } from '@/components/floating-icons'

const techBadges = [
  { label: 'React', color: '#61dafb' },
  { label: 'Node', color: '#3c873a' },
  { label: 'Python', color: '#3776ab' },
  { label: 'TS', color: '#3178c6' },
  { label: 'Docker', color: '#2496ed' },
]

function TiltAvatar() {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 150,
    damping: 15,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 150,
    damping: 15,
  })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 800 }}
      className="relative"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-full bg-purple/30 blur-2xl" />
        <Image
          src="/bunty-ava.png"
          alt="Bunty Bhainsa avatar"
          width={400}
          height={400}
          priority
          className="relative size-28 rounded-full border-2 border-purple/50 object-cover shadow-[0_0_50px_var(--glow)] sm:size-36 md:size-44 lg:size-52"
          style={{ transform: 'translateZ(40px)' }}
        />
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col px-4 pt-20 pb-14 sm:px-6 sm:pt-24 md:pt-32 lg:px-8 lg:pt-40">

      {/* Top row: big heading left, supporting text + CTA right */}
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-purple/80 sm:text-sm">
            Bunty Bhainsa · Full-Stack Developer & AI Systems Engineer
          </p>
          <h1 className="text-balance text-3xl font-bold leading-[0.96] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-glow">Designing modern products</span>
            <span className="block text-purple text-glow">with precision, speed,</span>
            <span className="block text-foreground text-glow">and a clean user experience.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex max-w-sm flex-col gap-4 lg:items-end lg:text-right"
        >
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Hi, I&apos;m Bunty — I design and build high-performance web apps,
            product interfaces, and intelligent tools that feel polished from
            the first click.
          </p>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_var(--glow)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_36px_var(--glow)] sm:px-5"
          >
            Explore Projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Full-width visual section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="relative mt-10 lg:mt-14"
      >
        <div className="relative overflow-hidden rounded-2xl border border-purple/30 bg-linear-to-br from-primary/25 via-card to-card p-1 sm:rounded-4xl">
          <div className="relative flex h-80 items-center justify-center overflow-hidden rounded-[1.1rem] bg-grid sm:h-96 md:h-112 lg:h-[28rem]">
            <FloatingIcons className="absolute inset-0 z-0" />

            <div className="relative z-10 flex flex-col items-center">
              <TiltAvatar />
            </div>

            <div className="absolute bottom-3 left-3 z-10 flex size-9 items-center justify-center rounded-xl border border-purple/30 bg-background/60 backdrop-blur sm:bottom-4 sm:left-4 sm:size-10">
              <Computer className="size-5 text-yellow" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom row: tagline + tech badges */}
      <div className="mt-12 flex flex-col items-start justify-between gap-8 lg:mt-16 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl space-y-2"
        >
          <p className="text-xl font-semibold text-foreground sm:text-2xl">
            Still learning. Still shipping.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            My focus is on clear architecture, thoughtful interaction design,
            and reliable delivery across the full stack — from API design to
            deployment.
          </p>
          <p className="text-sm text-muted-foreground/80">
           Love building software and solving real-world problems.
Working with React, Node.js, Python, and cloud-ready tools.
          </p>
        </motion.div>


      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
        className="mt-16 flex justify-center text-muted-foreground sm:mt-20"
      >
        <ChevronDown className="size-6" />
      </motion.div>
    </section>
  )
}