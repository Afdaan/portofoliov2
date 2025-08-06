"use client"

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
    router.push(href)
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
    { icon: Github, href: portfolioConfig.social.github, label: 'GitHub', color: 'group-hover:text-gray-900' },
    { icon: Linkedin, href: portfolioConfig.social.linkedin, label: 'LinkedIn', color: 'group-hover:text-blue-600' },
    { icon: Mail, href: `mailto:${portfolioConfig.personal.email}`, label: 'Email', color: 'group-hover:text-emerald-600' },
    { icon: Facebook, href: portfolioConfig.social.facebook, label: 'Facebook', color: 'group-hover:text-blue-500' },
    { icon: Instagram, href: portfolioConfig.social.instagram, label: 'Instagram', color: 'group-hover:text-pink-600' },
    { icon: Twitter, href: portfolioConfig.social.twitter, label: 'Twitter', color: 'group-hover:text-sky-500' },
  ]

  return (
    <>
      <style jsx>{`
        .footer-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        .social-hover {
          transition: all 0.2s ease;
        }
        
        .social-hover:hover {
          transform: translateY(-2px);
        }
        
        .link-hover {
          transition: all 0.2s ease;
        }
        
        .link-hover:hover {
          color: rgb(var(--primary));
          transform: translateX(4px);
        }
        
        .heart-pulse {
          animation: heartPulse 2s infinite;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes heartPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .social-hover:hover {
            transform: none;
          }
          
          .link-hover:hover {
            transform: none;
          }
        }
      `}</style>
      
      <footer className="bg-card/50 border-t border-border mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 footer-fade-in">
            {/* Brand Section */}
            <div className="space-y-4">
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
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.href)}
                    className="link-hover text-muted-foreground text-left w-fit px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Services</h4>
              <div className="flex flex-col space-y-2">
                <span className="text-muted-foreground">DevOps & Cloud</span>
                <span className="text-muted-foreground">Full Stack Development</span>
                <span className="text-muted-foreground">System Architecture</span>
                <span className="text-muted-foreground">Technical Consulting</span>
                <span className="text-muted-foreground">Code Review</span>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Connect</h4>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:alif@horn-yastudio.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  alif@horn-yastudio.com
                </a>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-hover group p-2 bg-background hover:bg-primary/10 rounded-lg border border-border hover:border-primary/30 transition-all ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-center gap-4 pt-8 mt-8 border-t border-border text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-muted-foreground text-sm">
              <span>{portfolioConfig.footer.copyright} <span className="hidden sm:inline">|</span> Made with</span>
              <Heart className="w-4 h-4 text-red-500 heart-pulse mx-1" />
              <span>Next.js & Tailwind CSS</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all hover:scale-105"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}

export default memo(Footer)
