export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Muhammad Alif Ardiansyah",
    title: "DevOps & Full Stack Developer",
    subtitle: "My Name is",
    description: "",
    location: "Indonesia, Jakarta Barat",
    email: "alif@horn-yastudio.com",
    phone: "+62 123 456 7890",
    profileImage: "/images/portfolioLogo.jpg"
  },

  // Social Media Links
  social: {
    github: "https://github.com/Afdaan",
    linkedin: "https://www.linkedin.com/in/muhammad-alif-ardiansyah/",
    twitter: "https://twitter.com/afdaan4",
    instagram: "https://instagram.com/alif.cli",
    facebook: "https://facebook.com/DanzdotTardotGz",
  },

  // Hero Section
  hero: {
    typeAnimations: [
      'DevOps Engineer',
      2000,
      'Full Stack Developer',
      2000,
      'Freelancer',
      2000,
      'Tech Blogger',
      2000,
      'Open Source Contributor',
      2000,
    ],
    scrollText: "Learn More"
  },

  // About Section
  about: {
    title: "About Me",
    description: "I'm a passionate DevOps Engineer and Full Stack Developer with expertise in building scalable web applications and automating deployment processes. I love working with modern technologies and solving complex problems.",
    skills: [
      "Problem Solving",
      "Team Leadership",
      "Continuous Learning",
      "Project Management",
      "Communication",
      "Innovation"
    ],
    stats: [
      { label: "Years Experience", value: "2+" },
      { label: "Projects Completed", value: "20+" },
      { label: "Technologies Used", value: "30+" },
      { label: "Companies Worked", value: "5+" }
    ]
  },

  // Education
education: [
    {
        id: 1,
        institution: "SMK Muhammadiyah 1 Bantul",
        degree: "Vocational High School Graduate",
        field: "Software Engineering",
        period: "2020 - 2024",
        location: "Bantul, Indonesia",
        description: "Graduated from a vocational high school majoring in Software Engineering. Focused on software development, database systems, and web technologies. Actively participated in programming competitions and tech communities."
    },
],

  // Work Experience
  experience: [
    {
      id: 1,
      company: "RCTI+",
      position: "DevOps Engineer",
      period: "Jul 2025 - Present",
      location: "Jakarta Barat, Indonesia",
      type: "Full-time",
      description: "RCTI+ is a leading media and entertainment company in Indonesia, providing a wide range of content and services across various platforms.",
      responsibilities: [
        "Developed and maintained CI/CD pipelines for automated deployment",
        "Managed cloud infrastructure on Alibaba Cloud",
        "Implemented containerization using Kubernetes and Docker",
        "Monitored system performance and optimized resource utilization",
        "Automated infrastructure provisioning using Terraform and Ansible"
      ],
      technologies: ["Docker", "Jenkins", "Kubernetes", "Alibaba Cloud", "Vault", "Redpanda", "Shell Scripting", "Linux"]
    },
    {
      id: 2,
      company: "Bitwyre",
      position: "System Administrator",
      period: "Oct 2024 - Mar 2025",
      location: "Jakarta, Indonesia",
      type: "Full-time",
      description: "Bitwyre is a crypto-based financial services platform focused on crypto-to-fiat exchange and investment, officially registered and licensed by BAPPEBTI.",
      responsibilities: [
        "Monitored market making activities for balanced order book operations",
        "Managed deployment processes using Docker and Jenkins automation",
        "Monitored backend services using Lens Kubernetes",
        "Tracked VM resource usage on GCP using Cloud Monitoring",
        "Configured environment variables using Vault for secure operations"
      ],
      technologies: ["Docker", "Jenkins", "Kubernetes", "GCP", "Vault", "Redpanda", "Shell Scripting", "Linux"]
    },
    {
      id: 3,
      company: "PT. Intersoft Integrasi Infotama (i3)",
      position: "Cloud Engineer",
      period: "Jun 2024 - Mar 2025",
      location: "Tangerang, Indonesia",
      type: "Full-time",
      description: "PT. Intersoft Integrasi Infotama is an Information Technology consulting firm providing solutions to enhance client performance and deliver real business value.",
      responsibilities: [
        "Managed WHMCS for hosting and VPS services",
        "Administered Virtualizor for server deployment and monitoring",
        "Troubleshot VPS, WHM/cPanel, SMTP, and DNS issues",
        "Configured Linux & Windows VPS via Virtualizor",
        "Automated server management tasks using Bash scripting"
      ],
      technologies: ["WHMCS", "Virtualizor", "WHM/cPanel", "Zimbra", "Linux", "Windows Server", "Bash", "WordPress", "DNS", "SMTP"]
    },
    {
      id: 4,
      company: "PT Global Intermedia Nusantara",
      position: "Cloud Engineer",
      period: "Oct 2023 - Dec 2023",
      location: "Yogyakarta, Indonesia",
      type: "Full-time",
      description: "PT Global Intermedia Nusantara is a company specializing in digital solutions and services.",
      responsibilities: [
        "Managed Proxmox virtualization platform",
        "Deployed and managed virtual machine instances",
        "Configured and maintained Linux-based server environments",
        "Managed domain registrations and DNS configurations"
      ],
      technologies: ["Proxmox", "Linux", "Virtual Machines", "DNS", "Domain Hosting", "Server Administration"]
    },
    {
      id: 5,
      company: "GMEDIA",
      position: "Cloud Engineer", 
      period: "Apr 2023 - Jun 2023",
      location: "Yogyakarta, Indonesia",
      type: "Full-time",
      description: "GMEDIA is a digital company focusing on technological solutions, including internet services, cloud computing systems, Artificial Intelligence and Internet of Things research laboratories, software and app development, and IT consulting services.",
      responsibilities: [
        "Deployed and configured Linux server environments",
        "Utilized KVM for creating and managing virtual machines",
        "Configured web hosting environments for client websites",
        "Managed email servers and delivery configuration"
      ],
      technologies: ["Linux", "KVM", "cPanel", "Email Hosting", "Web Hosting", "Virtual Machines", "Server Management"]
    }
  ],

  // Skills Section
  skills: {
    title: "Skills & Technologies",
    description: "Here are the technologies and tools I work with to bring ideas to life.",
    categories: [
      {
        name: "Programming Languages",
        skills: [
          { name: "JavaScript", level: 90, icon: "javascript" },
          { name: "TypeScript", level: 85, icon: "typescript" },
          { name: "Python", level: 88, icon: "python" },
          { name: "Java", level: 75, icon: "java" },
          { name: "Go", level: 70, icon: "go" },
          { name: "PHP", level: 80, icon: "php" }
        ]
      },
      {
        name: "Frontend Development",
        skills: [
          { name: "React", level: 92, icon: "react" },
          { name: "Next.js", level: 88, icon: "nextjs" },
          { name: "Vue.js", level: 75, icon: "vue" },
          { name: "Tailwind CSS", level: 90, icon: "tailwind" },
          { name: "HTML/CSS", level: 95, icon: "html" },
          { name: "Sass", level: 80, icon: "sass" }
        ]
      },
      {
        name: "Backend Development",
        skills: [
          { name: "Node.js", level: 90, icon: "nodejs" },
          { name: "Express.js", level: 85, icon: "express" },
          { name: "Django", level: 80, icon: "django" },
          { name: "FastAPI", level: 75, icon: "fastapi" },
          { name: "GraphQL", level: 70, icon: "graphql" },
          { name: "REST APIs", level: 92, icon: "api" }
        ]
      },
      {
        name: "DevOps & Cloud",
        skills: [
          { name: "Docker", level: 92, icon: "docker" },
          { name: "Kubernetes", level: 88, icon: "kubernetes" },
          { name: "Jenkins", level: 85, icon: "jenkins" },
          { name: "GCP", level: 82, icon: "gcp" },
          { name: "Proxmox", level: 90, icon: "proxmox" },
          { name: "Linux Server", level: 95, icon: "linux" }
        ]
      },
      {
        name: "System Administration",
        skills: [
          { name: "WHMCS", level: 90, icon: "whmcs" },
          { name: "Virtualizor", level: 88, icon: "virtualizor" },
          { name: "cPanel/WHM", level: 92, icon: "cpanel" },
          { name: "Zimbra Mail", level: 85, icon: "zimbra" },
          { name: "KVM", level: 88, icon: "kvm" },
          { name: "Bash Scripting", level: 90, icon: "bash" }
        ]
      },
      {
        name: "Databases",
        skills: [
          { name: "MongoDB", level: 85, icon: "mongodb" },
          { name: "PostgreSQL", level: 88, icon: "postgresql" },
          { name: "MySQL", level: 90, icon: "mysql" },
          { name: "Redis", level: 80, icon: "redis" },
          { name: "Elasticsearch", level: 75, icon: "elasticsearch" }
        ]
      },
      {
        name: "Tools & Others",
        skills: [
          { name: "Git/GitHub", level: 95, icon: "git" },
          { name: "VS Code", level: 92, icon: "vscode" },
          { name: "Figma", level: 75, icon: "figma" },
          { name: "Postman", level: 88, icon: "postman" },
          { name: "Jira", level: 80, icon: "jira" },
          { name: "Slack", level: 85, icon: "slack" }
        ]
      }
    ]
  },

  // Projects Section
  projects: {
    title: "Featured Projects",
    description: "Here are some of the projects I've worked on recently.",
    items: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "A comprehensive dashboard for managing an e-commerce platform, featuring real-time analytics, inventory management, and order processing capabilities.",
        image: "/images/project/insancollezione.png",
        technologies: ["React", "Node.js", "MongoDB", "Prisma", "PostgreSQL"],
        features: [
          "User authentication and authorization",
          "Shopping cart and checkout process",
          "Payment integration with Stripe",
          "Admin dashboard for inventory management",
          "Responsive design for mobile and desktop",
          "Real-time notifications"
        ],
        liveUrl: "https://insancollezione.vercel.app/",
        githubUrl: "",
        showCode: false, // Add this property
        showLive: true, // Enable/disable Live Demo button
        status: "Completed"
      },
      {
        id: 2,
        title: "Bash Scripting Migrate WHM all data to another server",
        description: "A script to migrate data from one WHM server to another, ensuring a smooth transition of hosting accounts and settings.",
        image: "/images/project/migrate-whm.png",
        technologies: ["Bash", "WHM", "cPanel"],
        features: [
          "Automated CI/CD pipeline setup",
          "Infrastructure as Code with Terraform",
          "Container orchestration with Kubernetes",
          "Real-time monitoring and alerting",
          "Multi-cloud deployment support",
          "Security scanning and compliance checks"
        ],
        liveUrl: "https://devops-suite.example.com",
        githubUrl: "https://github.com/Afdaan/migrate-whm",
        showCode: true, // Add this property
        showLive: false, // Enable/disable Live Demo button
        status: "Completed"
      },
        {
        id: 3,
        title: "Elektroda Virtual Lab",
        description: "An interactive virtual laboratory simulator for electrical experiments. Built to help students learn about electrical circuits and components in a safe, web-based environment.",
        image: "/images/project/elektroda.png",
        technologies: ["HTML5", "Javascript"],
        features: [
          "Interactive circuit simulation",
          "Real-time component testing",
          "User-friendly interface",
          "Extensive library of components",
          "Collaboration tools for remote learning",
          "Security scanning and compliance checks"
        ],
        liveUrl: "https://virtuallab.horn-yastudio.com/",
        githubUrl: "https://github.com/Afdaan/elektroda",
        showCode: true, // Add this property
        showLive: true, // Enable/disable Live Demo button
        status: "Completed"
      },
      {
        id: 4,
        title: "Python Telegram ChatBot Waifu",
        description: "A Telegram waifu roleplay bot built with Python that serves as a virtual companion, providing users with a fun and interactive chat experience.",
        image: "/images/project/alya-telegram-python.png",
        technologies: ["Python", "Telegram API"],
        features: [
          "Natural language processing",
          "Customizable chat responses",
          "Integration with external APIs",
          "User-friendly interface",
          "Extensive library of components",
          "Collaboration tools for remote learning",
          "Security scanning and compliance checks"
        ],
        liveUrl: "https://t.me/afdaan_bot?start=_tgr_26fFxUBmM2Q9",
        githubUrl: "https://github.com/Afdaan/Alya-Bot-Telegram",
        showCode: true, // Add this property
        showLive: true, // Enable/disable Live Demo button
        status: "Completed"
      },
    ]
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    description: "I'm always interested in hearing about new opportunities and interesting projects. Let's connect!",
    subtitle: "Let's work together",
    cta: "Ready to start your next project? Let's discuss how I can help bring your ideas to life.",
    form: {
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Your Message",
      submitText: "Send Message",
      successMessage: "Thank you for your message! I'll get back to you soon.",
      errorMessage: "Sorry, there was an error sending your message. Please try again."
    },
    contactInfo: [
      {
        icon: "mail",
        label: "Email",
        value: "alif@horn-yastudio.com",
        href: "mailto:alif@horn-yastudio.com"
      },
      {
        icon: "location",
        label: "Location",
        value: "Jakarta, Indonesia",
        href: null
      }
    ],
    availability: {
      status: "Available for freelance work",
      responseTime: "Usually responds within 24 hours"
    }
  },

  // SEO & Meta
  seo: {
    title: "Afdaan Portfolio | DevOps & Full Stack Developer",
    description: "Muhammad Alif Ardiansyah - DevOps Engineer and Full Stack Developer specializing in modern web technologies, cloud infrastructure, and automation solutions.",
    keywords: [
      "DevOps Engineer",
      "Full Stack Developer",
      "React Developer",
      "Node.js Developer",
      "AWS Specialist",
      "Docker Expert",
      "Kubernetes",
      "CI/CD Pipeline",
      "Web Development",
      "Muhammad Alif Ardiansyah",
      "Afdaan"
    ],
    ogImage: "/images/og-image.jpg",
    url: "https://afdaan.dev",
    locale: "en_US",
    type: "website" as const,
    twitterCard: "summary_large_image" as const,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    htmlLang: "en",
    viewport: {
      width: "device-width",
      initialScale: 1
    }
  },

  // Footer
  footer: {
    copyright: "© 2025 Muhammad Alif Ardiansyah. All rights reserved.",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Sitemap", href: "/sitemap.xml" }
    ]
  },

  // UI Text & Accessibility
  ui: {
    // Image alt text for better accessibility and SEO
    altText: {
      profileImage: "Profile photo of Muhammad Alif Ardiansyah",
      characterMain: "Alya character illustration",
      characterLoading: "Alya character in loading state",
      characterAnimation: "Animated Alya character",
      characterMascot: "Alya mascot illustration",
      characterBackground: "Background character decoration",
      characterFloating: "Floating character decoration",
      characterCorner: "Corner character decoration",
      characterFullscreen: "Fullscreen character illustration",
      interactiveCharacter: "Interactive Alya character",
      cyberpunkCharacter: "Cyberpunk Alya character",
      modernCharacter: "Modern style loading character",
      minimalistCharacter: "Minimalist style character"
    },
    // Button and action text
    buttons: {
      viewProject: "View Project",
      viewCode: "View Code",
      downloadResume: "Download Resume",
      sendMessage: "Send Message",
      learnMore: "Learn More",
      getInTouch: "Get in Touch",
      backToTop: "Back to Top"
    },
    // Accessibility labels
    accessibility: {
      mainNavigation: "Main navigation",
      socialLinks: "Social media links",
      themeToggle: "Toggle theme",
      menuToggle: "Toggle menu",
      skipToContent: "Skip to main content",
      scrollToTop: "Scroll to top",
      loading: "Loading content",
      closeDialog: "Close dialog"
    }
  },

  // Theme configuration
  theme: {
    defaultTheme: "dark" as "light" | "dark" | "system",
    enableSystem: false,
    disableTransitionOnChange: false,
    attribute: "class" as "class" | "data-theme"
  },

  // Component settings
  components: {
    decorations: {
      density: "medium" as "low" | "medium" | "high"
    },
    background: {
      variants: ["corner", "fullscreen"] as Array<"hero" | "floating" | "corner" | "fullscreen">
    }
  },

  // Page loading configuration
  pageLoading: {
    homePage: 1500, // milliseconds
    aboutPage: 1000,
    projectsPage: 1000,
    skillsPage: 1000,
    contactPage: 1000
  },

  // Loader Configuration
  // Configure all aspects of the loading screen animation and behavior
  loader: {
    title: "Loading",
    loadingText: "Loading assets...",
    preparedText: "Preparing your experience ✨",
    progressLabel: "Progress",
    characterImages: {
      basePath: "/images/alya", // Base path for character images
      fileExtension: ".jpg", // File extension for character images
      totalExpressions: 5 // Total number of expression images (1 to N)
    },
    timing: {
      expressionChange: 600, // milliseconds between expression changes (faster = more dynamic)
      progressStep: 3.33, // progress increment per step (higher = faster loading)
      progressInterval: 100, // milliseconds between progress updates
      completionDelay: 300 // delay before calling onComplete (shorter = faster transition)
    },
    animations: {
      borderGradient: 1.5, // seconds per border gradient cycle (faster = more vibrant)
      avatarRing: 3, // seconds per avatar ring rotation (faster = more dynamic)
      avatarScale: 1.2, // seconds per avatar scale animation cycle
      textGradient: 1.2, // seconds per text gradient animation cycle
      progressShine: 0.8, // seconds per progress bar shine sweep (faster = more frequent)
      loadingSpinner: 0.6 // seconds per loading spinner rotation (faster = more responsive)
    }
  }
};

export type PortfolioConfig = typeof portfolioConfig;
