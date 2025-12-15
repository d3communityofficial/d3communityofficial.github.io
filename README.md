# Digital Dreamers Den (D3) - Community Website

A vibrant tech community that brings together AI Full-Stack Developers to build the future. We host events, workshops, and networking opportunities that connect talented engineers with cutting-edge technology and industry leaders.

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Setup & Installation](#-setup--installation)
- [Development](#-development)
- [Project Structure](#-project-structure)
- [Theme Switching](#-theme-switching)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

## 🛠 Tech Stack

### Core Framework

- **[Next.js 16](https://nextjs.org/)** - Latest React framework with App Router
- **[React 19](https://react.dev/)** - UI library with modern features
- **[TypeScript 5.9](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI

- **[Tailwind CSS v4](https://tailwindcss.com/)** - Latest CSS-based configuration
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icon library
- **Custom Theme System** - CSS variables with dual theme support
- **Custom Gradients** - 5 gradient variations based on brand color (#004aad)
- **Custom Font**: Plus Jakarta Sans (weights: 400-800)

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting and quality checks
- **[PostCSS](https://postcss.org/)** - CSS transformations

### Dependencies

```json
{
  "lucide-react": "^0.561.0",
  "next": "16.0.10",
  "react": "19.2.1",
  "react-dom": "19.2.1"
}
```

## ✨ Features

- 🌓 **Advanced Theme System** - Dual theme with CSS variables, persistent storage, and smooth transitions
- 🎨 **Custom Gradients** - 5 gradient variations based on brand color (#004aad)
- 📱 **Fully Responsive** - Mobile-first design optimized for all devices (mobile, tablet, and desktop)
- 🎨 **Bento Grid Layout** - Modern card-based design system
- ⚡ **Lightning Fast** - Built with Next.js 16 and optimized for performance
- 🎯 **SEO Optimized** - Meta tags and structured data
- 🔗 **Floating Navigation** - Bottom-anchored pill navigation for easy thumb access on mobile
- 👥 **Team Showcase** - Display core team members with avatars
- 📅 **Event Management** - Upcoming and past events sections
- 📊 **Community Stats** - Real-time metrics display
- 🌍 **Location Info** - Chennai hub information and details
- 🤝 **Community Partners** - Showcase partner organizations
- 🏆 **Sponsors Section** - Display sponsor tiers (Platinum, Gold, Silver)
- 📜 **Mission Logs** - Past event history with 6+ events
- 🔄 **GitHub Actions CI/CD** - Automated deployment to GitHub Pages

> **Note:** This application is designed to be fully responsive across all devices. All features adapt seamlessly to different screen sizes.

## 🚀 Setup & Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js 18+**
- **Git**

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/d3communityofficial/community-website.git
cd community-website
```

2. **Install dependencies**

Using npm:

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

The page will auto-reload when you make changes to the code.

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site

### Making Changes

1. Components are located in `/app/components/`
2. Main page logic is in `/app/page.tsx`
3. Global styles are in `/app/globals.css`
4. Theme context is in `/app/context/ThemeContext.tsx`

## 📂 Project Structure

```
community-website/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── CommunityPartners.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LocationCard.tsx
│   │   ├── MissionLogs.tsx
│   │   ├── Navigation.tsx
│   │   ├── NextEventCard.tsx
│   │   ├── SocialCard.tsx
│   │   ├── Sponsors.tsx
│   │   ├── StatsCard.tsx
│   │   ├── TeamSection.tsx
│   │   └── TechStackCard.tsx
│   ├── context/             # React context providers
│   │   └── ThemeContext.tsx
│   ├── favicon.ico
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with fonts and providers
│   └── page.tsx             # Main landing page
├── public/                  # Static assets
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md
```

## 🎨 Theme Switching

The website features a sophisticated dual-theme system with smooth transitions and persistent theme preferences.

### Theme Features

- **Automatic Theme Detection**: Respects your system preferences on first visit
- **Manual Toggle**: Switch themes using the Sun/Moon icon in the header
- **Persistent Storage**: Your theme preference is saved in localStorage
- **Smooth Transitions**: 0.3s ease transitions between themes
- **No Flash**: Prevents flash of unstyled content (FOUC)

### Color System

The entire application uses a custom CSS variable-based color system centered around our brand color `#004aad` (Deep Blue).

#### Brand Colors

**Primary Colors:**
- Primary: `#004aad` (Deep Blue)
- Primary Light: `#0066ff` (Bright Blue)
- Primary Dark: `#003580` (Navy Blue)

**Secondary Colors:**
- Secondary: `#ffa726` / `#ff9800` (Orange)
- Secondary Light: `#ffb74d` (Light Orange)

#### Dark Theme Palette

```css
Background: #020817 (Dark Blue-Gray)
Card: #0a1628 (Deep Navy)
Card Hover: #132338 (Navy Blue)
Border: #1a2d47 (Blue-Gray)
Text: #f8fafc (Off White)
Muted Text: #94a3b8 (Gray)
Divider: #f8fafc (Light)
```

#### Light Theme Palette

```css
Background: #f8fafc (Light Gray)
Card: #ffffff (White)
Card Hover: #f1f5f9 (Light Blue-Gray)
Border: #e2e8f0 (Light Gray)
Text: #0f172a (Dark Blue)
Muted Text: #64748b (Gray)
Divider: #003580 (Navy Blue)
```

### Gradient System

The theme includes 5 custom gradient variations:

1. **Primary Gradient** (`--gradient-primary`)
   - `linear-gradient(135deg, #004aad 0%, #0066ff 100%)`
   - Used in: Buttons, logos, hero CTA

2. **Primary Soft** (`--gradient-primary-soft`)
   - Semi-transparent overlay for subtle backgrounds
   - Used in: Cards, stats section

3. **Hero Gradient** (`--gradient-hero`)
   - `linear-gradient(135deg, #003580 0%, #004aad 50%, #0066ff 100%)`
   - Used in: Text gradients, hero section

4. **Card Gradient** (`--gradient-card`)
   - Subtle gradient for card backgrounds
   - Used in: Event cards

5. **Accent Gradient** (`--gradient-accent`)
   - Orange gradient for CTAs
   - Used in: RSVP buttons, action elements

### Using the Theme System

The theme system uses CSS custom properties (variables) that automatically update when switching themes:

```css
/* Use theme colors in your components */
color: var(--color-primary);
background: var(--gradient-primary);
border-color: var(--color-border);

/* Utility classes available */
.bg-dark-primary
.text-dark-primary
.border-dark-border
.bg-gradient-primary
```

### Theme Context API

Components can access theme state using the React Context:

```tsx
import { useTheme } from '@/app/context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  // theme: 'light' | 'dark'
  // toggleTheme: () => void
}
```

## 📱 Responsive Design

The website is **fully responsive** and follows a **mobile-first approach** with optimized layouts for all devices:

- **Mobile**: < 768px
  - Touch-optimized interface
  - Simplified navigation
  - Stacked card layouts
  - Optimized font sizes and spacing

- **Tablet**: 768px - 1024px
  - Balanced grid layouts
  - Enhanced spacing
  - Optimized for both portrait and landscape

- **Desktop**: > 1024px
  - Full bento grid layout
  - Enhanced hover effects
  - Multi-column layouts
  - Maximum visual impact

### Testing Responsiveness

When developing or contributing, please test your changes across all breakpoints:

```bash
# Common device viewports to test:
- iPhone SE: 375x667
- iPhone 12/13: 390x844
- iPad: 768x1024
- iPad Pro: 1024x1366
- Desktop: 1440x900 and above
```

Use browser DevTools to test different screen sizes and ensure all features work correctly on mobile, tablet, and desktop devices.

## 🚢 Deployment

### GitHub Pages

The project is configured for GitHub Pages deployment:

1. **Build the static export**

```bash
npm run build
```

2. **The output will be in the `/out` directory**

3. **Deploy to GitHub Pages**

The site is configured to deploy to: `https://d3communityofficial.github.io/community-website`

### Other Platforms

You can also deploy to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Cloudflare Pages**
- Any static hosting service

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Guidelines

- Follow the existing code style (Prettier/ESLint)
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed
- Update the PR with the requested details in the PR description
- **✅ Always test for responsive design** - Verify your changes work on mobile, tablet, and desktop
- **📱 Mobile-first approach** - Ensure features are functional and look good on smaller screens first
- **🎨 Test both themes** - Verify your changes look good in light AND dark mode
- **🎨 Use theme variables** - Always use CSS variables (--color-primary, etc.) instead of hardcoded colors
- **🎨 Gradient usage** - Use the predefined gradients (--gradient-primary, etc.) for consistency
- Test touch interactions on mobile devices
- Ensure proper contrast ratios for accessibility

## 🔗 Links

- **Website**: [d3communityofficial.github.io/community-website](https://d3communityofficial.github.io/community-website)
- **Bento.me**: [bento.me/d3community](https://bento.me/d3community)
- **GitHub**: [github.com/d3communityofficial](https://github.com/d3communityofficial)

## 🙏 Acknowledgments

- Built with ❤️ by the Digital Dreamers Den community
- Icons by [Lucide](https://lucide.dev/)
- Illustrations from [unDraw](https://undraw.co/)
- Avatars from [DiceBear](https://dicebear.com/)

---

**Digital Dreamers Den** - Building the future, one event at a time 🚀
