"use client"

import { useEffect } from 'react'
import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import { useLoading } from '@/components/LoadingProvider'

export default function ContactPage() {
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
          <Contact />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
