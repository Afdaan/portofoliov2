"use client"

import { useEffect } from 'react'
import { useLoading } from '@/components/LoadingProvider'
import { portfolioConfig } from '@/config/portfolio'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function ProjectsPage() {
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    startLoading()
    const timer = setTimeout(() => {
      stopLoading()
    }, portfolioConfig.pageLoading.projectsPage)
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
