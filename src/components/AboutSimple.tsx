"use client"

import { useState, useEffect } from 'react'
import { 
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2
} from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio'

const AboutSimple = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    console.log('AboutSimple mounting...')
    setMounted(true)
    console.log('AboutSimple mounted')
  }, [])

  console.log('AboutSimple rendering:', { mounted, hasConfig: !!portfolioConfig })

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
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {portfolioConfig.about.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {portfolioConfig.about.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {portfolioConfig.about.stats?.map((stat) => (
            stat && stat.label && stat.value ? (
              <div
                key={stat.label}
                className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ) : null
          )) || <div>No stats available</div>}
        </div>

        {/* Skills & Personal Qualities */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            What I Bring to the Table
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioConfig.about.skills?.map((skill) => (
              skill ? (
                <div
                  key={skill}
                  className="flex items-center gap-3 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30"
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
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {portfolioConfig.education.map((edu) => (
                edu && edu.id ? (
                  <div
                    key={edu.id}
                    className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 hover:shadow-lg transition-all duration-300"
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
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {portfolioConfig.experience.map((exp) => (
                exp && exp.id ? (
                  <div
                    key={exp.id}
                    className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 hover:shadow-lg transition-all duration-300"
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
                                className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-medium"
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

export default AboutSimple
