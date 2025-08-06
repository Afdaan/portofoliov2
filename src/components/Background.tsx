"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { portfolioConfig } from '@/config/portfolio'

interface BackgroundProps {
  showCharacter?: boolean
  variant?: 'hero' | 'corner' | 'simple'
  className?: string
}

const Background = ({ 
  showCharacter = true, 
  variant = 'corner',
  className = '' 
}: BackgroundProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent SSR mismatch
  if (!mounted || !showCharacter) return null

  // Hero variant - simple character for main sections
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <style jsx>{`
          .character-float {
            animation: gentleFloat 8s ease-in-out infinite;
          }
          
          @keyframes gentleFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(1deg); }
          }
          
          /* Disable animations on mobile */
          @media (max-width: 768px) {
            .character-float {
              animation: none;
            }
          }
        `}</style>

        <div className="character-float absolute bottom-0 right-0 w-80 h-80 lg:w-96 lg:h-96 opacity-10">
          <Image
            src="/images/alya_bgremove.png"
            alt={portfolioConfig.ui.altText.characterMain}
            width={400}
            height={400}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>
      </div>
    )
  }

  // Corner variant - small character in corner
  if (variant === 'corner') {
    return (
      <div className={`fixed bottom-4 right-4 w-20 h-20 z-20 pointer-events-none opacity-60 ${className}`}>
        <style jsx>{`
          .corner-float {
            animation: cornerFloat 4s ease-in-out infinite;
          }
          
          @keyframes cornerFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          
          /* Disable on mobile for performance */
          @media (max-width: 768px) {
            .corner-float {
              animation: none;
            }
          }
        `}</style>
        
        <div className="corner-float">
          <Image
            src="/images/alya_bgremove.png"
            alt={portfolioConfig.ui.altText.characterCorner}
            width={80}
            height={80}
            className="object-contain drop-shadow-md"
          />
        </div>
      </div>
    )
  }

  // Simple variant - just a subtle decoration
  if (variant === 'simple') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none opacity-5 ${className}`}>
        <div className="absolute bottom-0 right-0 w-64 h-64">
          <Image
            src="/images/alya_bgremove.png"
            alt={portfolioConfig.ui.altText.characterMain}
            width={256}
            height={256}
            className="object-contain"
          />
        </div>
      </div>
    )
  }

  return null
}

export default Background
