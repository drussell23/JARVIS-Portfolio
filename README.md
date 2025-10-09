# JARVIS AI Portfolio Site

Professional portfolio and blog website showcasing the JARVIS AI Assistant project. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Purpose

This is a **public-facing showcase** for the JARVIS AI project - similar to how companies have marketing sites while keeping their product code private. The actual JARVIS codebase remains private.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000`

## 📁 Project Structure

```
jarvis-portfolio/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/              # About page
│   ├── architecture/       # Architecture page
│   ├── features/           # Features page
│   ├── blog/               # Blog system
│   │   ├── page.tsx        # Blog index
│   │   └── [slug]/         # Dynamic blog posts
│   └── contact/            # Contact page
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── home/               # Home page components
│   │   ├── Hero.tsx
│   │   ├── MetricsDashboard.tsx
│   │   ├── FeaturesGrid.tsx
│   │   ├── TechStack.tsx
│   │   └── CallToAction.tsx
│   ├── blog/               # Blog components
│   └── ui/                 # Reusable UI components
│
├── content/
│   └── blog/               # MDX blog posts
│       └── *.mdx           # Your blog articles
│
├── lib/
│   └── blog.ts             # Blog utility functions
│
├── public/
│   ├── demos/              # Demo videos
│   ├── images/             # Images and screenshots
│   └── assets/             # Other assets
│
└── package.json
```

## ✨ Features

### Built-In

- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Dark Theme** - JARVIS-inspired blue/cyan color scheme
- ✅ **Smooth Animations** - Framer Motion powered
- ✅ **MDX Blog System** - Write posts in Markdown with React components
- ✅ **Dynamic Content** - No hardcoded content, all data-driven
- ✅ **SEO Optimized** - Meta tags, OpenGraph, Twitter cards
- ✅ **Performance** - Optimized for speed and Core Web Vitals
- ✅ **Type-Safe** - Full TypeScript support

### Components Created

**Layout:**
- Header with responsive navigation
- Footer with social links
- Mobile-friendly menu

**Home Page:**
- Hero section with animations
- Metrics dashboard (v13.10.0, performance stats)
- Features grid (6 core features)
- Tech stack showcase
- Call-to-action section

**Blog System:**
- Dynamic routing (`/blog/[slug]`)
- MDX support for rich content
- Reading time estimation
- Tag-based filtering
- Related posts
- Search functionality (ready to add)

## 📝 Creating Blog Posts

Create MDX files in `content/blog/`:

```mdx
---
title: "Your Blog Post Title"
date: "2025-01-10"
excerpt: "Brief description for listings"
author: "Derek Russell"
tags: ["AI", "Performance", "Architecture"]
coverImage: "/images/blog/your-image.jpg"
---

# Your Content Here

Write your blog post using **Markdown** and React components!

```jsx
<YourCustomComponent />
```

## 🎨 Customization

### Colors (tailwind.config.ts)

```typescript
colors: {
  'jarvis-blue': '#00A8FF',
  'jarvis-cyan': '#00D9FF',
  'jarvis-gold': '#FFB800',
  // ... add your colors
}
```

### Fonts

Currently using **Inter** from Google Fonts. Change in `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'
```

## 📊 Content to Add

### Recommended Blog Posts (Convert from your docs):

1. **"Building JARVIS: A Full-Stack AI Assistant Journey"**
   - System overview
   - Architecture decisions
   - Key challenges and solutions

2. **"40x Faster: ARM64 NEON Assembly Optimization"**
   - Performance problem
   - Assembly optimization approach
   - Benchmarks and results

3. **"From 100% to 2% CPU: Performance Optimization Story"**
   - Resource issues
   - Profiling and fixes
   - Final metrics

4. **"Context-Aware Intelligence: Teaching AI Intent"**
   - ML routing engine
   - Zero hardcoding approach
   - 90% accuracy achievement

5. **"Building a Self-Healing System"**
   - Resilience architecture
   - Error recovery
   - Production readiness

### Demo Videos to Add:

Place in `public/demos/`:
- Voice activation demo
- Vision system demo
- Document automation
- Multi-command workflow
- Performance showcase

### Screenshots to Add:

Place in `public/images/`:
- System architecture diagram
- Feature screenshots
- UI/UX examples
- Performance graphs

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional
```

## 🔗 Links to Update

Update in `components/layout/Footer.tsx`:

```typescript
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/YOUR_USERNAME' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/YOUR_PROFILE' },
  { name: 'Twitter', href: 'https://twitter.com/YOUR_HANDLE' },
  { name: 'Email', href: 'mailto:YOUR_EMAIL' },
]
```

## 📋 TODO

### Immediate:
- [ ] Install dependencies (`npm install`)
- [ ] Add your personal links (GitHub, LinkedIn, etc.)
- [ ] Create 3-5 initial blog posts from existing docs
- [ ] Add demo videos to `public/demos/`
- [ ] Add screenshots to `public/images/`

### Short-term:
- [ ] Complete About page
- [ ] Complete Architecture page
- [ ] Complete Features page
- [ ] Complete Contact page
- [ ] Add more blog posts

### Nice-to-have:
- [ ] Blog post search functionality
- [ ] Comments system (Giscus recommended)
- [ ] Newsletter signup
- [ ] RSS feed
- [ ] Analytics dashboard

## 🛠️ Development Tips

### Adding New Pages

```typescript
// Create app/your-page/page.tsx
export default function YourPage() {
  return <div>Your content</div>
}
```

### Adding New Components

```typescript
// Create components/your-component/YourComponent.tsx
'use client' // If using React hooks or interactions

export default function YourComponent() {
  return <div>Component content</div>
}
```

### Styling Guidelines

- Use Tailwind utility classes
- Glass morphism: `glass` class
- Gradient text: `gradient-text` class
- Buttons: `btn-primary`, `btn-secondary`, `btn-ghost`
- Smooth transitions: `transition-smooth`

## 📦 Dependencies

- **next**: ^14.2.0 - React framework
- **react**: ^18.2.0 - UI library
- **typescript**: ^5.3.0 - Type safety
- **tailwindcss**: ^3.4.0 - Styling
- **framer-motion**: ^11.0.0 - Animations
- **gray-matter**: ^4.0.3 - Frontmatter parsing
- **next-mdx-remote**: ^4.4.1 - MDX support
- **react-icons**: ^5.0.0 - Icon library
- **reading-time**: ^1.5.0 - Reading time estimation

## 🎓 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [MDX](https://mdxjs.com/)

## 📄 License

This portfolio site is open source. The JARVIS codebase it showcases remains private.

---

**Built with ❤️ to showcase JARVIS AI**
