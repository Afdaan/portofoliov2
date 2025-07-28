"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { portfolioConfig } from '@/config/portfolio'

interface AnimeDecorationsProps {
  enabled?: boolean
  density?: 'low' | 'medium' | 'high'
}

const AnimeDecorations = ({ enabled = true, density = 'medium' }: AnimeDecorationsProps) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateWindowSize()
    window.addEventListener('resize', updateWindowSize)
    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])

  if (!enabled || windowSize.width === 0) return null

  const densityMap = {
    low: 8,
    medium: 12,
    high: 20
  }

  const elementCount = densityMap[density]

  // Anime-themed emojis and symbols
  const animeElements = [
    '✨', '🌸', '🎌', '💫', '⭐', '🌟', '💖', '🎀', 
    '🍡', '🎋', '🌺', '🎭', '🏮', '🎊', '💮', '🌙'
  ]

  const japaneseText = [
    'キラキラ', 'かわいい', 'すごい', 'やったー', 
    'がんばって', 'ありがとう', 'おつかれ', 'たのしい'
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {/* Floating Anime Elements */}
      {[...Array(elementCount)].map((_, i) => (
        <motion.div
          key={`anime-${i}`}
          className="absolute text-2xl"
          initial={{
            x: Math.random() * windowSize.width,
            y: windowSize.height + 50,
            opacity: 0,
            scale: 0
          }}
          animate={{
            y: -50,
            opacity: [0, 0.7, 0.7, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            delay: Math.random() * 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {animeElements[Math.floor(Math.random() * animeElements.length)]}
        </motion.div>
      ))}

      {/* Occasional Japanese Text */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`text-${i}`}
          className="absolute text-sm font-medium text-pink-400 dark:text-pink-300 bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded-lg backdrop-blur-sm"
          initial={{
            x: Math.random() * (windowSize.width - 100),
            y: Math.random() * (windowSize.height - 100),
            opacity: 0,
            scale: 0
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 30 + 10,
            repeat: Infinity,
            repeatDelay: Math.random() * 60 + 30
          }}
        >
          {japaneseText[Math.floor(Math.random() * japaneseText.length)]}
        </motion.div>
      ))}

      {/* Magical Circles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute border-2 border-pink-300/30 dark:border-pink-400/30 rounded-full"
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            left: Math.random() * windowSize.width,
            top: Math.random() * windowSize.height
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      ))}

      {/* Animated Alya GIF in corners occasionally */}
      <motion.div
        className="absolute top-4 left-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0.6, 0.6, 0],
          scale: [0, 1, 1, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 5,
          delay: 15,
          repeat: Infinity,
          repeatDelay: 45
        }}
      >
        <Image
          src="/images/alya-roshidere.gif"
          alt={portfolioConfig.ui.altText.characterCorner}
          width={60}
          height={60}
          className="object-contain rounded-lg drop-shadow-md"
          unoptimized
        />
      </motion.div>

      {/* Sparkle Trail Effect */}
      <motion.div
        className="absolute"
        animate={{
          x: [0, windowSize.width],
          y: [windowSize.height / 2, windowSize.height / 3, windowSize.height / 2]
        }}
        transition={{
          duration: 8,
          delay: 25,
          repeat: Infinity,
          repeatDelay: 60,
          ease: "easeInOut"
        }}
      >
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 7
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default AnimeDecorations
