import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, memo } from 'react'
import { ExternalLink, Github, CheckCircle2, Clock, Pause } from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio'
import Image from 'next/image'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

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

  return (
    <section ref={ref} id="projects" className="py-20 lg:py-32 relative overflow-hidden">
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
            {portfolioConfig.projects.title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {portfolioConfig.projects.description}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerContainer}
          className="space-y-12"
        >
          {portfolioConfig.projects.items.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

                {/* Technologies */}
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

                {/* Links */}
                <div className="flex gap-4">
                  {project.showLive && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.showCode && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-accent transition-all hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I&apos;m always excited to work on new projects and bring innovative ideas to life. 
              Let&apos;s discuss how we can collaborate to create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${portfolioConfig.personal.email}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Let&apos;s Talk
              </a>
              <a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-accent transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                View All Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(Projects)
