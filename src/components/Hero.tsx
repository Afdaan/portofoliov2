"use client"

import { motion } from 'framer-motion'
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
      
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-gradient bg-gradient"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-soft delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground font-medium"
            >
              {portfolioConfig.personal.subtitle}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="block">{portfolioConfig.personal.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground"
            >
              <span>I am a </span>
              <TypeAnimation
                sequence={portfolioConfig.hero.typeAnimations}
                wrapper="span"
                speed={50}
                className="text-primary"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              {portfolioConfig.personal.description}
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-spin transition-transform" />
                <span className="font-medium">GitHub</span>
              </a>
              
              <a
                href={portfolioConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce transition-transform" />
                <span className="font-medium">LinkedIn</span>
              </a>
              
              <button
                onClick={() => handleNavigation('/contact')}
                className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse transition-transform" />
                <span className="font-medium">Contact</span>
              </button>

              <a
                href={portfolioConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Facebook</span>
              </a>

              <a
                href={portfolioConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white rounded-lg hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                <span className="font-medium">Instagram</span>
              </a>
              
              <a
                href={portfolioConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-all hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-rotate-12 transition-transform" />
                <span className="font-medium">Twitter</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse-soft"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                <Image
                  src={portfolioConfig.personal.profileImage}
                  alt={`${portfolioConfig.personal.name} Profile`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => handleNavigation('/about')}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors group"
            aria-label="Go to about page"
          >
            <span className="text-sm font-medium">{portfolioConfig.hero.scrollText}</span>
            <ArrowDown className="w-5 h-5 animate-bounce-gentle group-hover:text-primary" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
