"use client"

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import { useLoading } from '@/components/LoadingProvider'
import { portfolioConfig } from '@/config/portfolio'

// Error fallback component
const AboutError = ({ error }: { error: Error }) => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
      <p className="text-muted-foreground mb-4">Error: {error.message}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="px-4 py-2 bg-primary text-primary-foreground rounded"
      >
        Reload Page
      </button>
    </div>
  </div>
)

export default function AboutPage() {
  const { startLoading, stopLoading } = useLoading()
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    try {
      // Check if portfolio config is available
      if (!portfolioConfig) {
        throw new Error('Portfolio configuration not found')
      }
      
      startLoading()
      
      // Much faster loading for mobile
      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
      const loadingTime = isMobile ? 200 : (portfolioConfig.pageLoading?.aboutPage || 500)
      
      const timer = setTimeout(() => {
        stopLoading()
      }, loadingTime)
      
      return () => {
        clearTimeout(timer)
      }
    } catch (err) {
      console.error('Error in About page:', err)
      setError(err instanceof Error ? err : new Error('Unknown error'))
      stopLoading()
    }
  }, [startLoading, stopLoading])

  // Show error state if there's an error
  if (error) {
    return <AboutError error={error} />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <PageTransition>
          <About />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
