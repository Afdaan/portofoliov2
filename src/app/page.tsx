"use client"

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import { useLoading } from '@/components/LoadingProvider'
import { portfolioConfig } from '@/config/portfolio'

export default function Home() {
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    // Initial page load animation - much faster for mobile
    startLoading()
    
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
    const loadingTime = isMobile ? 100 : (portfolioConfig.pageLoading?.homePage || 300)
    
    const timer = setTimeout(() => {
      stopLoading()
    }, loadingTime)
    return () => clearTimeout(timer)
  }, [startLoading, stopLoading])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageTransition>
          <Hero />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
