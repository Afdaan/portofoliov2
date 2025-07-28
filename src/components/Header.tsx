"use client"

import { useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useLoading } from '@/components/LoadingProvider'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
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
    if (href !== pathname) {
      startLoading()
      // Immediate navigation for better UX
      router.push(href)
    }
    setIsMobileMenuOpen(false)
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  if (!mounted) return null

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: isMobile ? 0.3 : 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: isMobile ? 0 : 0.2 }}
            className="flex-shrink-0"
          >
            <motion.button
              onClick={() => handleNavigation('/')} 
              className="relative text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group overflow-hidden"
              whileHover={isMobile ? undefined : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={isMobile ? undefined : { scale: [1, 1.2, 1] }}
                transition={isMobile ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Text with shimmer effect */}
              <span className="relative z-10">Afdaan</span>
              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"
                initial={{ x: '-100%' }}
                animate={isMobile ? undefined : {}}
              />
            </motion.button>
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: isMobile ? 0 : 0.3 + index * 0.1 }}
                  className="relative"
                >
                  <motion.button
                    onClick={() => handleNavigation(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg overflow-hidden group ${
                      pathname === item.href
                        ? 'text-primary-foreground'
                        : 'text-foreground hover:text-primary-foreground'
                    }`}
                    whileHover={isMobile ? undefined : { scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background animation */}
                    <motion.div
                      className={`absolute inset-0 rounded-lg ${
                        pathname === item.href
                          ? 'bg-gradient-to-r from-primary to-accent'
                          : 'bg-gradient-to-r from-primary/0 to-accent/0 group-hover:from-primary group-hover:to-accent'
                      }`}
                      initial={false}
                      animate={{
                        opacity: pathname === item.href ? 1 : 0,
                      }}
                      whileHover={isMobile ? undefined : { opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"
                      initial={{ x: '-100%' }}
                      animate={isMobile ? undefined : {}}
                    />
                    {/* Text content */}
                    <span className="relative z-10 flex items-center space-x-1">
                      <span>{item.name}</span>
                      {pathname === item.href && (
                        <motion.div
                          className="w-1 h-1 bg-primary-foreground rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                      )}
                    </span>
                    {/* Bottom border animation */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent ${
                        pathname === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: pathname === item.href ? 1 : 0 }}
                      whileHover={isMobile ? undefined : { scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={isMobile ? undefined : { scale: [1, 1.1, 1] }}
                      transition={isMobile ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative p-3 rounded-xl bg-card hover:bg-accent transition-all duration-300 group overflow-hidden"
              aria-label="Toggle theme"
              whileHover={isMobile ? undefined : { scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={isMobile ? undefined : { scale: [1, 1.2, 1] }}
                transition={isMobile ? undefined : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Icon with rotation animation */}
              <motion.div
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-600" />
                )}
              </motion.div>
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-3 rounded-xl bg-card hover:bg-accent transition-all duration-300 group overflow-hidden"
                aria-label="Toggle mobile menu"
                whileHover={isMobile ? undefined : { scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Icon with smooth transition */}
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </motion.div>
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 1.5, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden border-t border-border mt-2"
          >
            <motion.div 
              className="px-2 pt-4 pb-3 space-y-2 bg-card/80 backdrop-blur-md rounded-lg mt-2 border border-border/50"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="relative"
                >
                  <motion.button
                    onClick={() => handleNavigation(item.href)}
                    className={`relative w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 overflow-hidden group ${
                      pathname === item.href
                        ? 'text-primary-foreground'
                        : 'text-foreground hover:text-primary-foreground'
                    }`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background animation */}
                    <motion.div
                      className={`absolute inset-0 rounded-lg ${
                        pathname === item.href
                          ? 'bg-gradient-to-r from-primary to-accent'
                          : 'bg-gradient-to-r from-primary/0 to-accent/0 group-hover:from-primary/90 group-hover:to-accent/90'
                      }`}
                      initial={false}
                      animate={{
                        opacity: pathname === item.href ? 1 : 0,
                      }}
                      whileHover={{
                        opacity: 1,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"
                      initial={{ x: '-100%' }}
                    />
                    {/* Content */}
                    <span className="relative z-10 flex items-center justify-between">
                      <span>{item.name}</span>
                      {pathname === item.href && (
                        <motion.div
                          className="w-2 h-2 bg-primary-foreground rounded-full"
                          initial={{ scale: 0, rotate: 0 }}
                          animate={{ scale: 1, rotate: 360 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        />
                      )}
                    </span>
                    {/* Left border indicator */}
                    <motion.div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-r ${
                        pathname === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: pathname === item.href ? 1 : 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default memo(Header)
