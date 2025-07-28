"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { portfolioConfig } from '@/config/portfolio'

interface AnimeBackgroundProps {
  showCharacter?: boolean
  variant?: 'hero' | 'floating' | 'corner' | 'fullscreen'
  className?: string
}

interface Particle {
  id: number
  x: number[]
  y: number[]
  left: number
  top: number
  duration: number
  delay: number
}

const AnimeBackground = ({ 
  showCharacter = true, 
  variant = 'corner',
  className = '' 
}: AnimeBackgroundProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsVisible(true)
    
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles: Particle[] = [...Array(20)].map((_, i) => {
      const randomX = Math.random() * 100
      const randomY = Math.random() * 100
      return {
        id: i,
        x: [0, randomX, 0],
        y: [0, randomY, 0],
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5
      }
    })
    setParticles(newParticles)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    if (variant === 'floating') {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [variant])

  // Prevent SSR mismatch by not rendering until mounted
  if (!mounted || !showCharacter) return null

  // Hero variant - large character for main sections
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-pink-300/30 rounded-full"
              animate={{
                x: particle.x,
                y: particle.y,
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5]
              }}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay
              }}
            />
          ))}
        </div>

        {/* Main character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ 
            opacity: isVisible ? 0.15 : 0, 
            scale: 1, 
            y: 0,
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 2, 
            ease: "easeOut",
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-0 right-0 w-96 h-96 lg:w-[500px] lg:h-[500px]"
        >
          <Image
            src="/images/alya_bgremove.png"
            alt={portfolioConfig.ui.altText.characterMain}
            width={500}
            height={500}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-2 border-pink-400 rounded-full"></div>
            <div className="absolute inset-4 border border-purple-400 rounded-full"></div>
            <div className="absolute inset-8 border border-blue-400 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    )
  }

  // Floating variant - follows mouse
  if (variant === 'floating') {
    return (
      <motion.div
        className={`fixed pointer-events-none z-10 ${className}`}
        animate={{
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        style={{
          left: '70%',
          top: '30%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-48 h-48 opacity-30"
        >
          <Image
            src="/images/alya_bgremove.png"
            alt={portfolioConfig.ui.altText.characterFloating}
            width={192}
            height={192}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    )
  }

  // Corner variant - small character in corner
  if (variant === 'corner') {
    return (
      <motion.div
        initial={{ opacity: 0, x: 100, y: 100 }}
        animate={{ opacity: 0.6, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`fixed bottom-4 right-4 w-24 h-24 z-20 pointer-events-none ${className}`}
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Image
            src="/images/alya_bgremove.png"
            alt={portfolioConfig.ui.altText.characterCorner}
            width={96}
            height={96}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>
      </motion.div>
    )
  }

  // Fullscreen variant - large background character
  if (variant === 'fullscreen') {
    return (
      <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
        {/* Background particles */}
        <div className="absolute inset-0">
          {particles.slice(0, 15).map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40"
              animate={{
                x: particle.x,
                y: particle.y,
                scale: [0.5, 1.5, 0.5],
                opacity: [0.2, 0.6, 0.2]
              }}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay
              }}
            />
          ))}
        </div>

        {/* Main fullscreen character */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ 
            opacity: 0.08, 
            scale: 1,
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 3,
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-full h-full max-w-4xl max-h-4xl relative">
            <Image
              src="/images/alya_bgremove.png"
              alt={portfolioConfig.ui.altText.characterFullscreen}
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(120, 255, 198, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>
    )
  }

  return null
}

export default AnimeBackground
