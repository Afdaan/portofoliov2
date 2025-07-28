"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const AnimeCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    let trailId = 0

    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)
      
      // Add to trail
      setTrail(prev => {
        const newTrail = [...prev, { ...newPosition, id: trailId++ }]
        return newTrail.slice(-8) // Keep only last 8 positions
      })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 mix-blend-difference">
      {/* Cursor trail */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 bg-pink-400 rounded-full"
          style={{ 
            left: point.x - 4, 
            top: point.y - 4,
            opacity: (index + 1) / trail.length * 0.6
          }}
          animate={{ 
            scale: [1, 0],
            opacity: [0.6, 0]
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="absolute"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: isClicking ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <motion.div
          className="w-6 h-6 flex items-center justify-center"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <span className="text-lg">🌸</span>
        </motion.div>
      </motion.div>

      {/* Click sparkles */}
      {isClicking && (
        <div className="absolute" style={{ left: mousePosition.x, top: mousePosition.y }}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xs"
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 0
              }}
              animate={{
                x: Math.cos(i * 60 * Math.PI / 180) * 30,
                y: Math.sin(i * 60 * Math.PI / 180) * 30,
                opacity: 0,
                scale: 1
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AnimeCursor
