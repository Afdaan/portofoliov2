"use client"

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Mail, Facebook, Instagram, Twitter, MapPin } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useLoading } from '@/components/LoadingProvider'
import { portfolioConfig } from '@/config/portfolio'
import { memo } from 'react'

const Footer = () => {
  const router = useRouter()
  const { startLoading } = useLoading()

  const handleNavigation = (href: string) => {
    startLoading()
    setTimeout(() => {
      router.push(href)
    }, 100)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { icon: Github, href: portfolioConfig.social.github, label: 'GitHub', color: 'hover:text-gray-600' },
    { icon: Linkedin, href: portfolioConfig.social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Facebook, href: portfolioConfig.social.facebook, label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Instagram, href: portfolioConfig.social.instagram, label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Twitter, href: portfolioConfig.social.twitter, label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Mail, href: `mailto:${portfolioConfig.personal.email}`, label: 'Email', color: 'hover:text-emerald-600' },
  ]

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {portfolioConfig.personal.name}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {portfolioConfig.personal.description}
            </p>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{portfolioConfig.personal.location}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className="text-muted-foreground hover:text-primary transition-all text-left w-fit px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 hover:scale-105 hover:shadow-md active:scale-95"
                  style={{ willChange: 'transform' }}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <div className="flex flex-col space-y-2">
              <span className="text-muted-foreground">DevOps & Cloud</span>
              <span className="text-muted-foreground">Full Stack Development</span>
              <span className="text-muted-foreground">System Architecture</span>
              <span className="text-muted-foreground">Technical Consulting</span>
              <span className="text-muted-foreground">Code Review</span>
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:afdaan@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                afdaan@example.com
              </a>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2 bg-background hover:bg-primary/10 rounded-lg border border-border hover:border-primary/30 transition-all hover:scale-110 hover:shadow-md"
                    aria-label={social.label}
                  >
                    <social.icon className={`w-5 h-5 text-muted-foreground transition-all group-hover:scale-110 ${social.color}`} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-4 pt-8 mt-8 border-t border-border text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-muted-foreground text-sm">
            <span>{portfolioConfig.footer.copyright} <span className="hidden sm:inline">|</span> Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse-soft mx-1" />
            <span>Next.js & Tailwind CSS</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default memo(Footer)
