'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type BadgeItem = {
  label: string
  icon: string
  color: string
  position: string
  size?: string
  delay?: number
  duration?: number
}
const BADGES: BadgeItem[] = [
  {
    label: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#3c873a',
    position: 'top-[6%] right-[8%]',
    size: 'size-14',
    delay: 0.5,
    duration: 3.5,
  },
  {
    label: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61dafb',
    position: 'top-[28%] right-[22%]',
    size: 'size-12',
    delay: 0,
    duration: 4,
  },
  {
    label: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    color: '#a259ff',
    position: 'top-[42%] right-[6%]',
    size: 'size-14',
    delay: 1,
    duration: 4.2,
  },
  {
    label: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: '#13aa52',
    position: 'top-[60%] right-[16%]',
    size: 'size-12',
    delay: 1.5,
    duration: 3.8,
  },
  {
    label: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: '#3776ab',
    position: 'top-[58%] left-[16%]',
    size: 'size-12',
    delay: 0.8,
    duration: 4.5,
  },
  {
    label: 'FastAPI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    color: '#009688',
    position: 'top-[74%] left-[28%]',
    size: 'size-12',
    delay: 0.3,
    duration: 3.6,
  },
  {
    label: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    color: '#5382a1',
    position: 'top-[30%] left-[14%]',
    size: 'size-12',
    delay: 1.2,
    duration: 4,
  },
  {
    label: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#f7df1e',
    position: 'top-[10%] left-[28%]',
    size: 'size-11',
    delay: 0.6,
    duration: 3.9,
  },
  {
    label: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    color: '#ffffff',
    position: 'top-[12%] left-[8%]',
    size: 'size-11',
    delay: 1.8,
    duration: 4.3,
  },
]
export function FloatingIcons({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      {BADGES.map((badge) => (
        <motion.div
          key={badge.label}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: badge.duration ?? 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: badge.delay ?? 0,
          }}
          className={`absolute ${badge.position} ${badge.size ?? 'size-12'} flex items-center justify-center rounded-2xl border backdrop-blur-sm`}
          style={{
            backgroundColor: `${badge.color}1A`, // ~10% opacity tint
            borderColor: `${badge.color}40`,
            boxShadow: `0 8px 24px ${badge.color}33`,
          }}
        >
          <img
            src={badge.icon}
            alt={badge.label}
            width={28}
            height={28}
            className="size-6 object-contain sm:size-7"
          />
        </motion.div>
      ))}
    </div>
  )
}