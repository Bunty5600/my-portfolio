'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-background"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.98, 1, 0.98] }}
            transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY }}
            className="font-mono text-2xl font-bold text-glow md:text-3xl"
          >
            <span className="text-purple">&lt;</span>
            <span className="text-foreground"> Bunty </span>
            <span className="text-purple">/&gt;</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
