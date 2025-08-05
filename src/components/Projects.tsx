"use client"

import { useState, useEffect } from 'react'
import { ExternalLink, Github, CheckCircle2, Clock, Pause } from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio'
import Image from 'next/image'

const Projects = () => {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Immediate trigger for mobile, slight delay for desktop
    const isMobile = window.innerWidth <= 768
    const delay = isMobile ? 0 : 100
    
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    
    return () => clearTimeout(timer)
  }, [])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-0.5 text-xs font-medium rounded-full border bg-green-500/10 text-green-500 border-green-500/20 whitespace-nowrap leading-none">
            <CheckCircle2 className="w-4 h-4" /> Completed
          </span>
        )
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-0.5 text-xs font-medium rounded-full border bg-blue-500/10 text-blue-500 border-blue-500/20 whitespace-nowrap leading-none">
            <Clock className="w-4 h-4" /> In Progress
          </span>
        )
      case 'On Hold':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-0.5 text-xs font-medium rounded-full border bg-yellow-500/10 text-yellow-500 border-yellow-500/20 whitespace-nowrap leading-none">
            <Pause className="w-4 h-4" /> On Hold
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center gap-1 px-3 py-0.5 text-xs font-medium rounded-full border bg-gray-500/10 text-gray-500 border-gray-500/20 whitespace-nowrap leading-none">
            <Pause className="w-4 h-4" /> {status}
          </span>
        )
    }
  }

  if (!mounted) {
    return (
      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div>Loading Projects...</div>
        </div>
      </div>
    )
  }

  if (!portfolioConfig || !portfolioConfig.projects) {
    return (
      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div>Configuration error</div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Ultra-lightweight CSS optimized for mobile */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .fade-in.visible {
          opacity: 1;
        }
        
        .hover-lift {
          transition: transform 0.2s ease;
        }
        
        /* Desktop-only animations and transforms */
        @media (min-width: 769px) {
          .fade-in {
            transform: translateY(10px);
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
          
          .fade-in.visible {
            transform: translateY(0);
          }
          
          .hover-lift:hover {
            transform: translateY(-2px);
          }
        }
        
        /* Mobile: disable all transforms and heavy effects */
        @media (max-width: 768px) {
          .fade-in {
            transform: none !important;
            transition: opacity 0.2s ease !important;
          }
          
          .hover-lift {
            transition: none !important;
          }
          
          .hover-lift:hover {
            transform: none !important;
          }
          
          /* Reduce blur effects on mobile */
          .backdrop-blur-sm {
            backdrop-filter: none !important;
          }
          
          .blur-3xl {
            filter: none !important;
          }
        }
      `}</style>

      {/* Background Elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 fade-in ${isVisible ? 'visible' : ''}`}>
            {portfolioConfig.projects.title}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in ${isVisible ? 'visible' : ''}`}>
            {portfolioConfig.projects.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {portfolioConfig.projects.items.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center fade-in ${isVisible ? 'visible' : ''} ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group hover-lift">
                  <div className="relative overflow-hidden rounded-xl bg-card border border-border">
                    <Image
                      src={project.image || '/images/project-placeholder.jpg'}
                      alt={project.title}
                      width={640}
                      height={360}
                      className="aspect-video object-cover w-full h-auto"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {getStatusBadge(project.status)}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4">
                  {project.showLive && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.showCode && project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors duration-200 font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
