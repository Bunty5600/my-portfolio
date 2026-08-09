'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticNodeProps {
  children?: React.ReactNode
  distance?: number // Pull sensitivity threshold
}

export function MagneticNode({ children, distance = 0.5 }: MagneticNodeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()

    // Calculate center point of the node
    const centerX = left + width / 2
    const centerY = top + height / 2

    // Distance vector from center to mouse cursor
    const deltaX = (clientX - centerX) * distance
    const deltaY = (clientY - centerY) * distance

    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    // Snap back to original position
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 350, damping: 18, mass: 0.6 }}
      className="relative flex items-center justify-center cursor-pointer"
    >
      {/* Magnetic Outer Ring */}
      <motion.div 
        whileHover={{ scale: 1.25 }}
        className="flex size-8 items-center justify-center rounded-full border border-purple/50 bg-background/80 shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-md transition-colors hover:border-purple hover:bg-purple/20 md:size-10"
      >
        {/* Glowing Center Core */}
        <div className="size-2 rounded-full bg-purple shadow-[0_0_8px_var(--purple)] md:size-2.5" />
        {children}
      </motion.div>
    </motion.div>
  )
}
