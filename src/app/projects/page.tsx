"use client"

import { useEffect } from 'react'
import { useLoading } from '@/components/LoadingProvider'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function ProjectsPage() {
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    startLoading()
    
    // Fast loading for all devices
    const loadingTime = 200
    
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
          <Projects />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
