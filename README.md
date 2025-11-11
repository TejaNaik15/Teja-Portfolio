# 🚀 Keloth Teja Naik - Portfolio

<div align="center">

![Portfolio Banner](https://via.placeholder.com/1200x400/0a0a0a/ffffff?text=Keloth+Teja+Naik+Portfolio)

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.24-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

**A modern, responsive portfolio showcasing full-stack development expertise with cutting-edge animations and 3D interactions**

[🌐 Live Demo](https://your-portfolio-url.vercel.app) • [📧 Contact](mailto:tinkuteja740@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/teja-naik-0b3021282/)

</div>

## ✨ Features

### 🎨 **Modern Design & Animations**
- **Dark Theme UI** with glassmorphism effects
- **Smooth Scroll Navigation** with section highlighting
- **Advanced Framer Motion** animations and transitions
- **Interactive 3D Globe** for global connectivity visualization
- **Responsive Design** optimized for all devices

### 🛠️ **Technical Excellence**
- **Next.js 16** with App Router and React Server Components
- **TypeScript** for type-safe development
- **Tailwind CSS 4** for modern styling
- **Three.js Integration** for 3D graphics
- **Performance Optimized** with lazy loading and code splitting

### 📱 **Interactive Components**
- **Animated Hero Section** with gradient text effects
- **Project Showcase** with hover animations and live previews
- **Certification Grid** with technology-specific icons
- **Contact Form** with validation and Web3Forms integration
- **Dynamic Footer** with smooth scroll navigation

## 🏗️ Tech Stack

<div align="center">

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Animation & 3D
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/React_Three_Fiber-black?style=for-the-badge&logo=three.js&logoColor=white)

### Development Tools
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/TejaNaik15/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Configure your data**
Edit `src/app/data/data.ts` with your personal information:
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};
```

5. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/          # React components
│   │   │   ├── AboutMe.tsx      # About section with certifications
│   │   │   ├── Contact.tsx      # Contact form with 3D globe
│   │   │   ├── Footer.tsx       # Footer with navigation links
│   │   │   ├── Header.tsx       # Navigation header
│   │   │   ├── Hero.tsx         # Landing hero section
│   │   │   ├── Projects.tsx     # Project showcase
│   │   │   └── GlobeDemo.tsx    # 3D interactive globe
│   │   ├── data/
│   │   │   ├── data.ts          # Portfolio configuration
│   │   │   └── variants.ts      # Animation variants
│   │   ├── ui/
│   │   │   └── globe.tsx        # 3D globe implementation
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Main page
│   └── data/
│       └── globe.json           # Globe country data
├── public/
│   └── img/                     # Static images
├── tailwind.config.ts           # Tailwind configuration
├── next.config.ts               # Next.js configuration
└── package.json                 # Dependencies
```

## 🎯 Key Features Breakdown

### 🌟 **Hero Section**
- Animated gradient text with typewriter effect
- Floating availability badge with shine animation
- Interactive call-to-action buttons
- Responsive design with mobile optimization

### 👨‍💻 **About Section**
- Personal information with profile image
- Education details with institution info
- **Certification Grid** displaying 6 professional certificates
- Skills showcase with technology icons and colors

### 💼 **Projects Section**
- **Sticky scroll animation** for project cards
- Live project links and GitHub repositories
- Technology stack visualization with icons
- Hover effects and image previews

### 🌍 **Contact Section**
- **Interactive 3D Globe** showing global connections
- Contact form with real-time validation
- WhatsApp and email integration
- Web3Forms backend for form submissions

### 🔗 **Footer**
- Quick navigation links with smooth scrolling
- Social media icons with hover effects
- Complete contact information
- Copyright and branding

## 🎨 Customization

### **Personal Information**
Update your details in `src/app/data/data.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  tagline: "Your Catchy Tagline",
  description: "Your professional description",
  profileImage: "/img/your-photo.jpg",
  location: "Your City, Country",
};
```

### **Projects**
Add your projects to the `projects` array:

```typescript
export const projects = [
  {
    name: "Project Name",
    description: "Project description",
    techStack: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      // ... more technologies
    ],
    liveLink: "https://your-project.com",
    githubLink: "https://github.com/username/repo",
    image: "/img/project-screenshot.png",
  },
];
```

### **Certifications**
Update your certifications:

```typescript
export const certifications = [
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "2024",
    icon: TechIcon,
    color: "#color-code"
  },
];
```

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### **Manual Deployment**
```bash
npm run build
npm start
```

## 📊 Performance Features

- **Next.js App Router** for optimal performance
- **Image optimization** with Next.js Image component
- **Code splitting** and lazy loading
- **SEO optimization** with metadata API
- **Responsive images** and WebP format support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Keloth Teja Naik**
- 📧 Email: [tinkuteja740@gmail.com](mailto:tinkuteja740@gmail.com)
- 💼 LinkedIn: [Teja Naik](https://www.linkedin.com/in/teja-naik-0b3021282/)
- 🐱 GitHub: [TejaNaik15](https://github.com/TejaNaik15)
- 📱 WhatsApp: [+91 7569474682](https://wa.me/917569474682)
- 📍 Location: Hyderabad, India

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Keloth Teja Naik](https://github.com/TejaNaik15)

</div>