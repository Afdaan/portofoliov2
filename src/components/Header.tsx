"use client"

import { useState, useEffect, memo } from 'react'
import { useTheme } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useLoading } from '@/components/LoadingProvider'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()
  const { startLoading } = useLoading()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    if (pathname === href) return
    
    startLoading()
    router.push(href)
    setIsMobileMenuOpen(false)
  }

  if (!mounted) return null

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <style jsx>{`
        .header-backdrop {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .nav-item {
          transition: all 0.2s ease;
        }
        
        .nav-item:hover {
          color: rgb(var(--primary));
        }
        
        .nav-item.active {
          color: rgb(var(--primary));
          background: rgba(var(--primary-rgb), 0.1);
        }
        
        .mobile-menu {
          transition: all 0.3s ease;
          transform: translateY(-10px);
          opacity: 0;
        }
        
        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
        }
        
        .theme-toggle {
          transition: all 0.3s ease;
        }
        
        .theme-toggle:hover {
          transform: scale(1.05);
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .header-backdrop {
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
          }
        }
      `}</style>
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 header-backdrop border-b border-border/50 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavigation('/')} 
                className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform"
              >
                Afdaan
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={`nav-item px-4 py-2 text-sm font-medium rounded-lg ${
                      pathname === item.href ? 'active' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="theme-toggle p-2 rounded-xl bg-muted hover:bg-muted/80"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-600" />
                )}
              </button>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t border-border mt-2 mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="px-2 pt-4 pb-3 space-y-2 bg-card/80 header-backdrop rounded-lg mt-2 border border-border/50 mx-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`nav-item w-full text-left px-4 py-3 text-base font-medium rounded-lg ${
                    pathname === item.href ? 'active' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default memo(Header)
