"use client"

import { motion } from 'framer-motion'
import { ReactNode, memo } from 'react'

interface PageTransitionProps {
  children: ReactNode
  className?: string
}

const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        y: 20,
        scale: 0.95
      }}
      animate={{ 
        opacity: 1,
        y: 0,
        scale: 1
      }}
      exit={{ 
        opacity: 0,
        y: -20,
        scale: 0.95
      }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth animation
        staggerChildren: 0.1
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Component for staggered children animations
export const StaggerContainer = ({ children, className = "" }: PageTransitionProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Component for individual staggered items
export const StaggerItem = ({ children, className = "" }: PageTransitionProps) => {
  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          y: 30,
          scale: 0.9
        },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Slide-in animation variants
export const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9
  })
}

export default memo(PageTransition)
