"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export const PreloadPages = () => {
  const router = useRouter()

  useEffect(() => {
    // Preload all pages for faster navigation
    const preloadTimer = setTimeout(() => {
      navItems.forEach(item => {
        if (item.href !== '/') {
          router.prefetch(item.href)
        }
      })
    }, 2000) // Preload after initial page load

    return () => clearTimeout(preloadTimer)
  }, [router])

  return null
}

export default PreloadPages
