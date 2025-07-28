# 🚀 Modern Portfolio Website

A stunning, fully responsive portfolio website built with modern web technologies, featuring beautiful animations, dark/light theme toggle with Catppuccin color schemes, and AI-powered editing capabilities through Stagewise integration.

## ✨ Features

- **🎨 Modern Design**: Clean, professional design with smooth animations
- **🌓 Theme Toggle**: Beautiful dark/light theme with Catppuccin color schemes
- **📱 Fully Responsive**: Perfect layout on mobile, tablet, and desktop
- **⚡ Performance Optimized**: Built with Next.js 15 and optimized for speed
- **🎭 Smooth Animations**: Powered by Framer Motion for delightful interactions
- **🤖 AI Integration**: Stagewise toolbar for AI-powered editing capabilities
- **🎯 SEO Optimized**: Meta tags, structured data, and semantic HTML
- **♿ Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Catppuccin themes
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme Management**: next-themes
- **AI Integration**: Stagewise Toolbar
- **Deployment**: Ready for Vercel

## 🎨 Theme Colors

### Light Theme (Catppuccin Latte)
- Base: `#eff1f5`
- Text: `#4c4f69`
- Primary: `#1e66f5`
- Accent: `#7287fd`

### Dark Theme (Catppuccin Frappé)
- Base: `#303446`
- Text: `#c6d0f5`
- Primary: `#8caaee`
- Accent: `#babbf1`

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone or use this repository**
   ```bash
   git clone <repository-url>
   cd portofoliov2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portofoliov2/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── globals.css      # Global styles with Catppuccin themes
│   │   ├── layout.tsx       # Root layout with theme provider
│   │   └── page.tsx         # Main homepage
│   └── components/          # React components
│       ├── Header.tsx       # Navigation header
│       ├── Hero.tsx         # Hero section with typing animation
│       ├── About.tsx        # About section with stats
│       ├── Skills.tsx       # Skills with progress bars
│       ├── Projects.tsx     # Projects showcase
│       ├── Contact.tsx      # Contact form and info
│       ├── Footer.tsx       # Footer with links
│       └── ThemeProvider.tsx # Theme context provider
├── public/
│   └── images/
│       └── portfolioLogo.jpg # Your profile image
├── .vscode/
│   └── extensions.json      # Recommended VS Code extensions
└── tailwind.config.ts       # Tailwind configuration
```

## 🎯 Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Name and title
   - Social media links
   - Profile description

2. **About Section** (`src/components/About.tsx`):
   - Personal story
   - Interests and passions
   - Stats and achievements

3. **Skills Section** (`src/components/Skills.tsx`):
   - Technical skills and proficiency levels
   - Tools and software

4. **Projects Section** (`src/components/Projects.tsx`):
   - Project details, descriptions, and links
   - Technologies used
   - Project categories

5. **Contact Section** (`src/components/Contact.tsx`):
   - Contact information
   - Social media links

### Profile Image
Replace `/public/images/portfolioLogo.jpg` with your own profile photo.

### Resume
Add your resume PDF to `/public/resume.pdf`.

## 🤖 Stagewise Integration

This portfolio includes Stagewise toolbar integration for AI-powered editing capabilities:

- **Development Mode**: Stagewise toolbar appears automatically in development
- **Production Mode**: Toolbar is automatically disabled in production builds
- **Features**: Select UI elements and get AI assistance for improvements

### Using Stagewise

1. **Start development server**: `npm run dev`
2. **Look for the toolbar**: Should appear in the bottom-right corner
3. **Select elements**: Click on any UI element to select it
4. **AI Assistance**: Use the toolbar to get suggestions and improvements

If the toolbar doesn't appear, make sure you have the Stagewise VS Code extension installed.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project is compatible with:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Support

If you have any questions or need help customizing the portfolio:

- 📧 Email: afdaan@example.com
- 💼 LinkedIn: [Muhammad Alif Ardiansyah](https://www.linkedin.com/in/muhammad-alif-ardiansyah/)
- 🐙 GitHub: [@Afdaan](https://github.com/Afdaan)

## 🎉 Acknowledgments

- **Catppuccin** for the beautiful color schemes
- **Framer Motion** for smooth animations
- **Lucide** for the icon library
- **Stagewise** for AI-powered editing capabilities
- **Next.js & Tailwind CSS** for the amazing developer experience

---

**Made with ❤️ by Afdaan using Next.js, TypeScript, and Tailwind CSS**
