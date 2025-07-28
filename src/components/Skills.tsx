"use client"

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

// SVG Icon untuk Zimbra Mail
const ZimbraMailIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <rect width="32" height="32" rx="6" fill="#E94E1B"/>
      <path d="M8 10h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zm0 2v.51l8 5.49 8-5.49V12H8zm16 8v-5.09l-7.47 5.13a1 1 0 0 1-1.06 0L8 14.91V20h16z" fill="#fff"/>
    </svg>
  )
}

// SVG Icon untuk WHMCS
const WhmcsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#1B255A"/>
    <circle cx="16" cy="16" r="10" fill="#43B54B"/>
    <path d="M16 10v12M10 16h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// SVG Icon untuk KVM
const KvmIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#6C3483"/>
    <path d="M10 22V10h12v12H10zm2-2h8V12h-8v8z" fill="#fff"/>
  </svg>
)

// SVG Icon for REST APIs
const RestApiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    {...props}
  >
    <rect x="2" y="8" width="28" height="16" rx="4" fill="#0EA5E9"/>
    <rect x="2" y="8" width="28" height="16" rx="4" stroke="#0369A1" strokeWidth="2"/>
    <text x="16" y="21" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="10" fill="#fff">API</text>
  </svg>
)

// Icon mapping untuk skills
function getSkillIcon(iconName: string) {
  const iconMap: Record<string, React.ComponentType<any>> = {
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
  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {portfolioConfig.skills.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {portfolioConfig.skills.description}
          </p>
        </div>
        {/* Skills Categories */}
        <div className="space-y-12">
          {portfolioConfig.skills.categories.map((category) => (
            <div
              key={category.name}
              className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border/30 p-6 sm:p-8"
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
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/30"
                    >
                      <IconComponent className="w-8 h-8 text-primary mb-2" />
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
