"use client"

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio'

const Contact = () => {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Faster for mobile
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const getIconForContactInfo = (icon: string) => {
    switch (icon) {
      case 'mail':
        return Mail
      case 'phone':
        return Phone
      case 'location':
        return MapPin
      default:
        return Mail
    }
  }

  if (!mounted) {
    return (
      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div>Loading Contact...</div>
        </div>
      </div>
    )
  }

  if (!portfolioConfig || !portfolioConfig.contact) {
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
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 fade-in ${isVisible ? 'visible' : ''}`}>
            {portfolioConfig.contact.title}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in ${isVisible ? 'visible' : ''}`}>
            {portfolioConfig.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 fade-in ${isVisible ? 'visible' : ''}`}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {portfolioConfig.contact.contactInfo.map((item, index) => {
                  const IconComponent = getIconForContactInfo(item.icon)
                  return (
                    <div key={index} className="flex items-start gap-4 hover-lift">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.label}</h4>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
              
              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </div>
              )}
              
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
