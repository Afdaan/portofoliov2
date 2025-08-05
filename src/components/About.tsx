"use client"

import { useState, useEffect, useRef } from 'react'
import { 
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2
} from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio'

const About = () => {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  // Removed console.log for better performance

  if (!mounted) {
    return (
      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div>Loading About...</div>
        </div>
      </div>
    )
  }

  if (!portfolioConfig || !portfolioConfig.about) {
    return (
      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div>Configuration error</div>
        </div>
      </div>
    )
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
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
            {portfolioConfig.about.title}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in ${isVisible ? 'visible' : ''}`}>
            {portfolioConfig.about.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {portfolioConfig.about.stats?.map((stat) => (
            stat && stat.label && stat.value ? (
              <div
                key={stat.label}
                className={`text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover-lift fade-in ${isVisible ? 'visible' : ''}`}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ) : null
          )) || <div>No stats available</div>}
        </div>

        {/* Skills & Personal Qualities */}
        <div className="mb-20">
          <h3 className={`text-2xl font-bold mb-8 text-center fade-in ${isVisible ? 'visible' : ''}`}>
            What I Bring to the Table
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioConfig.about.skills?.map((skill) => (
              skill ? (
                <div
                  key={skill}
                  className={`flex items-center gap-3 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30 hover-lift fade-in ${isVisible ? 'visible' : ''}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ) : null
            )) || <div>No skills available</div>}
          </div>
        </div>

        {/* Education */}
        {portfolioConfig.education && Array.isArray(portfolioConfig.education) && (
          <div className="mb-20">
            <div className={`flex items-center gap-3 mb-8 fade-in ${isVisible ? 'visible' : ''}`}>
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {portfolioConfig.education.map((edu) => (
                edu && edu.id ? (
                  <div
                    key={edu.id}
                    className={`bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 hover:shadow-lg transition-all duration-300 hover-lift fade-in ${isVisible ? 'visible' : ''}`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-primary mb-1">
                          {edu.degree || 'No degree specified'}
                        </h4>
                        <h5 className="text-lg font-medium mb-2">{edu.institution || 'No institution specified'}</h5>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          {edu.period && (
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {edu.period}
                            </div>
                          )}
                          {edu.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {edu.location}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description || 'No description available'}
                    </p>
                  </div>
                ) : null
              ))}
            </div>
          </div>
        )}

        {/* Work Experience */}
        {portfolioConfig.experience && Array.isArray(portfolioConfig.experience) && (
          <div>
            <div className={`flex items-center gap-3 mb-8 fade-in ${isVisible ? 'visible' : ''}`}>
              <Briefcase className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {portfolioConfig.experience.map((exp) => (
                exp && exp.id ? (
                  <div
                    key={exp.id}
                    className={`bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 hover:shadow-lg transition-all duration-300 hover-lift fade-in ${isVisible ? 'visible' : ''}`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-primary mb-1">
                          {exp.position || 'No position specified'}
                        </h4>
                        <h5 className="text-lg font-medium mb-2">{exp.company || 'No company specified'}</h5>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          {exp.period && (
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                          )}
                          {exp.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          )}
                          {exp.type && (
                            <div className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                              {exp.type}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description || 'No description available'}
                    </p>

                    {/* Responsibilities */}
                    {exp.responsibilities && Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0 && (
                      <div className="mb-4">
                        <h6 className="font-medium mb-2">Key Responsibilities:</h6>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((responsibility, idx) => (
                            responsibility ? (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                {responsibility}
                              </li>
                            ) : null
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {exp.technologies && Array.isArray(exp.technologies) && exp.technologies.length > 0 && (
                      <div>
                        <h6 className="font-medium mb-2">Technologies Used:</h6>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            tech ? (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-medium hover:bg-accent/30 transition-colors duration-200"
                              >
                                {tech}
                              </span>
                            ) : null
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : null
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default About
