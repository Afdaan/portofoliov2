"use client"

import { useEffect } from 'react'
import Header from '@/components/Header'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import { useLoading } from '@/components/LoadingProvider'
import { portfolioConfig } from '@/config/portfolio'

export default function SkillsPage() {
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    startLoading()
    
    // Much faster loading for mobile
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
    const loadingTime = isMobile ? 200 : (portfolioConfig.pageLoading?.skillsPage || 500)
    
    const timer = setTimeout(() => {
      stopLoading()
    }, loadingTime)
    return () => clearTimeout(timer)
  }, [startLoading, stopLoading])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <PageTransition>
          <Skills />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
