"use client"

import { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Github, Linkedin, Mail, Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useLoading } from '@/components/LoadingProvider'
import Background from '@/components/Background'
import { portfolioConfig } from '@/config/portfolio'

const Hero = () => {
  const router = useRouter()
  const { startLoading } = useLoading()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const handleNavigation = (href: string) => {
    startLoading()
    setTimeout(() => {
      router.push(href)
    }, 100)
  }
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <Background variant="hero" />
      
      {/* Lightweight CSS animations - no framer-motion */}
      <style jsx>{`
        .hero-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        .hero-slide-up {
          animation: slideUp 0.8s ease-out;
        }
        
        .hero-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        /* Simple background gradients - no heavy blur */
        .bg-gradient-simple {
          background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.05), rgba(var(--accent-rgb), 0.05));
        }
        
        /* Disable heavy animations on mobile */
        @media (max-width: 768px) {
          .hero-float {
            animation: none;
          }
        }
      `}</style>
      
      {/* Simple background - no particles */}
      <div className="absolute inset-0 -z-10 bg-gradient-simple"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${mounted ? 'hero-fade-in' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground font-medium">
              {portfolioConfig.personal.subtitle}
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">{portfolioConfig.personal.name}</span>
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground">
              <span>I am a </span>
              <TypeAnimation
                sequence={portfolioConfig.hero.typeAnimations}
                wrapper="span"
                speed={50}
                className="text-primary"
                repeat={Infinity}
              />
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {portfolioConfig.personal.description}
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                <span className="font-medium">GitHub</span>
              </a>
              
              <a
                href={portfolioConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                <span className="font-medium">LinkedIn</span>
              </a>
              
              <button
                onClick={() => handleNavigation('/contact')}
                className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                <span className="font-medium">Contact</span>
              </button>

              <a
                href={portfolioConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                <span className="font-medium">Facebook</span>
              </a>

              <a
                href={portfolioConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white rounded-lg hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                <span className="font-medium">Instagram</span>
              </a>
              
              <a
                href={portfolioConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                <span className="font-medium">Twitter</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end ${mounted ? 'hero-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
            <div className="relative group hero-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                <Image
                  src={portfolioConfig.personal.profileImage}
                  alt={`${portfolioConfig.personal.name} Profile`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${mounted ? 'hero-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
          <button
            onClick={() => handleNavigation('/about')}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors group"
            aria-label="Go to about page"
          >
            <span className="text-sm font-medium">{portfolioConfig.hero.scrollText}</span>
            <ArrowDown className="w-5 h-5 animate-bounce-gentle group-hover:text-primary" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
