"use client"

import { useEffect, Suspense } from 'react'
import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import { useLoading } from '@/components/LoadingProvider'
import { portfolioConfig } from '@/config/portfolio'

// Loading fallback component
const AboutLoading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-lg">Loading About...</div>
  </div>
)

export default function AboutPage() {
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    console.log('About page mounting')
    startLoading()
    const timer = setTimeout(() => {
      console.log('About page loading complete')
      stopLoading()
    }, portfolioConfig.pageLoading.aboutPage)
    return () => {
      console.log('About page unmounting')
      clearTimeout(timer)
    }
  }, [startLoading, stopLoading])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <PageTransition>
          <Suspense fallback={<AboutLoading />}>
            <About />
          </Suspense>
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
