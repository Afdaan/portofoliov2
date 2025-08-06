"use client"

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import { useLoading } from '@/components/LoadingProvider'

export default function Home() {
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    // Initial page load animation - much faster for all devices
    startLoading()
    
    const loadingTime = 200 // Fast loading for all
    
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
