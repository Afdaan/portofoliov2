"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2
} from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio'

const About = () => {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Ensure client-side only rendering to prevent hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Debug logging for Vercel with more details
  console.log('About component rendering', {
    experienceCount: portfolioConfig.experience?.length,
    educationCount: portfolioConfig.education?.length,
    isInView,
    mounted,
    hasValidConfig: !!(portfolioConfig && portfolioConfig.about && portfolioConfig.experience && portfolioConfig.education),
    portfolioConfigKeys: portfolioConfig ? Object.keys(portfolioConfig) : 'null',
    aboutKeys: portfolioConfig?.about ? Object.keys(portfolioConfig.about) : 'null'
  })

  // Additional error catching for production debugging
  try {
    if (typeof window !== 'undefined') {
      console.log('Window object available, client-side rendering')
    } else {
      console.log('Server-side rendering detected')
    }
  } catch (err) {
    console.error('Error checking window object:', err)
  }

  // More robust safety checks
  try {
    if (!mounted) {
      return <div className="flex items-center justify-center min-h-screen"><div>Loading...</div></div>
    }

    if (!portfolioConfig) {
      console.error('Portfolio config is null or undefined')
      return <div className="flex items-center justify-center min-h-screen"><div>Configuration not found</div></div>
    }

    if (!portfolioConfig.about) {
      console.error('Portfolio about section is missing')
      return <div className="flex items-center justify-center min-h-screen"><div>About configuration missing</div></div>
    }

    if (!portfolioConfig.experience || !Array.isArray(portfolioConfig.experience)) {
      console.error('Portfolio experience is missing or not an array')
      return <div className="flex items-center justify-center min-h-screen"><div>Experience data unavailable</div></div>
    }

    if (!portfolioConfig.education || !Array.isArray(portfolioConfig.education)) {
      console.error('Portfolio education is missing or not an array')
      return <div className="flex items-center justify-center min-h-screen"><div>Education data unavailable</div></div>
    }

    // Validate data structure integrity
    const invalidExperience = portfolioConfig.experience.find(exp => !exp.id || !exp.company || !exp.position)
    if (invalidExperience) {
      console.error('Invalid experience entry found:', invalidExperience)
    }

    const invalidEducation = portfolioConfig.education.find(edu => !edu.id || !edu.institution || !edu.degree)
    if (invalidEducation) {
      console.error('Invalid education entry found:', invalidEducation)
    }

  } catch (error) {
    console.error('Error in About component safety checks:', error)
    return <div className="flex items-center justify-center min-h-screen"><div>An error occurred loading the page</div></div>
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Use simpler rendering if there are too many items (removed unused variable)

  return (
    <section ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            {portfolioConfig.about.title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {portfolioConfig.about.description}
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {portfolioConfig.about.stats?.map((stat) => (
            stat && stat.label && stat.value ? (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ) : null
          )) || <div>No stats available</div>}
        </motion.div>

        {/* Skills & Personal Qualities */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-bold mb-8 text-center"
          >
            What I Bring to the Table
          </motion.h3>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {portfolioConfig.about.skills?.map((skill) => (
              skill ? (
                <motion.div
                  key={skill}
                  variants={fadeInUp}
                  className="flex items-center gap-3 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ) : null
            )) || <div>No skills available</div>}
          </motion.div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-3 mb-8"
          >
            <GraduationCap className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Education</h3>
          </motion.div>
          
          <div className="space-y-6">
            {portfolioConfig.education?.map((edu) => (
              edu && edu.id ? (
                <motion.div
                  key={edu.id}
                  variants={fadeInUp}
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
                </motion.div>
              ) : null
            )) || <div>No education data available</div>}
          </div>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-3 mb-8"
          >
            <Briefcase className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Work Experience</h3>
          </motion.div>
          
          <div className="space-y-8">
            {portfolioConfig.experience?.map((exp) => (
              exp && exp.id ? (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
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
                </motion.div>
              ) : null
            )) || <div>No work experience data available</div>}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
