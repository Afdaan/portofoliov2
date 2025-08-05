"use client"

import { useState, useEffect } from 'react'
import { portfolioConfig } from '@/config/portfolio'
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiGo,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiHtml5,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFastapi,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGooglecloud,
  SiProxmox,
  SiLinux,
  SiVirtualbox,
  SiCpanel,
  SiGnubash,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiElasticsearch,
  SiGit,
  SiFigma,
  SiPostman,
  SiJira,
  SiSlack
} from 'react-icons/si'
import { Layers } from 'lucide-react'
import type { FunctionComponent, SVGProps, ReactElement } from 'react'

// Lightweight SVG icons
const ZimbraMailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#E94E1B"/>
    <path d="M8 10h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zm0 2v.51l8 5.49 8-5.49V12H8zm16 8v-5.09l-7.47 5.13a1 1 0 0 1-1.06 0L8 14.91V20h16z" fill="#fff"/>
  </svg>
)

const WhmcsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#1B255A"/>
    <circle cx="16" cy="16" r="10" fill="#43B54B"/>
    <path d="M16 10v12M10 16h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const KvmIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#6C3483"/>
    <path d="M10 22V10h12v12H10zm2-2h8V12h-8v8z" fill="#fff"/>
  </svg>
)

const RestApiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect x="2" y="8" width="28" height="16" rx="4" fill="#0EA5E9"/>
    <text x="16" y="21" textAnchor="middle" fontFamily="Arial" fontWeight="bold" fontSize="10" fill="#fff">API</text>
  </svg>
)

function getSkillIcon(iconName: string) {
  type IconType = FunctionComponent<{ className?: string }>;
  type SvgIconType = (props: SVGProps<SVGSVGElement>) => ReactElement;
  const iconMap: Record<string, IconType | SvgIconType> = {
    javascript: SiJavascript,
    typescript: SiTypescript,
    python: SiPython,
    go: SiGo,
    php: SiPhp,
    react: SiReact,
    nextjs: SiNextdotjs,
    vue: SiVuedotjs,
    tailwind: SiTailwindcss,
    html: SiHtml5,
    sass: SiSass,
    nodejs: SiNodedotjs,
    express: SiExpress,
    django: SiDjango,
    fastapi: SiFastapi,
    graphql: SiGraphql,
    docker: SiDocker,
    kubernetes: SiKubernetes,
    jenkins: SiJenkins,
    gcp: SiGooglecloud,
    proxmox: SiProxmox,
    linux: SiLinux,
    virtualizor: SiVirtualbox,
    cpanel: SiCpanel,
    bash: SiGnubash,
    mongodb: SiMongodb,
    postgresql: SiPostgresql,
    mysql: SiMysql,
    redis: SiRedis,
    elasticsearch: SiElasticsearch,
    git: SiGit,
    figma: SiFigma,
    postman: SiPostman,
    jira: SiJira,
    slack: SiSlack,
    whmcs: WhmcsIcon,
    kvm: KvmIcon,
    zimbra: ZimbraMailIcon,
    'zimbra mail': ZimbraMailIcon,
    api: RestApiIcon
  }
  return iconMap[iconName] || SiJavascript
}

const Skills = () => {
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

  if (!mounted) {
    return (
      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div>Loading Skills...</div>
        </div>
      </div>
    )
  }

  if (!portfolioConfig || !portfolioConfig.skills) {
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
            {portfolioConfig.skills.title}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in ${isVisible ? 'visible' : ''}`}>
            {portfolioConfig.skills.description}
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {portfolioConfig.skills.categories.map((category) => (
            <div
              key={category.name}
              className={`bg-card/30 backdrop-blur-sm rounded-2xl border border-border/30 p-6 sm:p-8 fade-in ${isVisible ? 'visible' : ''}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary">
                  {category.name}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill) => {
                  const IconComponent = getSkillIcon(skill.icon)
                  const isSvgIcon = typeof IconComponent === 'function' && IconComponent.name.endsWith('Icon')
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/30 hover-lift"
                    >
                      {IconComponent && (
                        isSvgIcon ? (
                          <IconComponent width={32} height={32} style={{ marginBottom: 8, color: 'var(--primary)' }} />
                        ) : (
                          <IconComponent className="w-8 h-8 text-primary mb-2" />
                        )
                      )}
                      <span className="font-medium text-center text-sm sm:text-base">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
