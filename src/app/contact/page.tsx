"use client"

import { useEffect } from 'react'
import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import { useLoading } from '@/components/LoadingProvider'
import { portfolioConfig } from '@/config/portfolio'

export default function ContactPage() {
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    startLoading()
    const timer = setTimeout(() => {
      stopLoading()
    }, portfolioConfig.pageLoading.contactPage)
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
