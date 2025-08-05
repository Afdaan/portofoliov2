"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
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
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Debug logging for Vercel
  console.log('About component rendering', {
    experienceCount: portfolioConfig.experience?.length,
    educationCount: portfolioConfig.education?.length,
    isInView
  })

  // Safely check if data exists
  if (!portfolioConfig.about || !portfolioConfig.experience || !portfolioConfig.education) {
    console.error('Portfolio config missing required data')
    return <div>Loading...</div>
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

  // Use simpler rendering if there are too many items
  const shouldUseSimpleRender = portfolioConfig.experience.length > 4

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
          {portfolioConfig.about.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
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
            {portfolioConfig.about.skills.map((skill) => (
              <motion.div
                key={skill}
                variants={fadeInUp}
                className="flex items-center gap-3 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
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
            {portfolioConfig.education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={fadeInUp}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-primary mb-1">
                      {edu.degree}
                    </h4>
                    <h5 className="text-lg font-medium mb-2">{edu.institution}</h5>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
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
            {portfolioConfig.experience.map((exp) => (
              <motion.div
                key={exp.id}
                variants={fadeInUp}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-primary mb-1">
                      {exp.position}
                    </h4>
                    <h5 className="text-lg font-medium mb-2">{exp.company}</h5>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                        {exp.type}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h6 className="font-medium mb-2">Key Responsibilities:</h6>
                  <ul className="space-y-1">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h6 className="font-medium mb-2">Technologies Used:</h6>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
