# CodingDoneRaitt Portfolio - SvelteKit Edition

A modern, beautiful portfolio website built with SvelteKit, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)  
- **Fast Performance**: Built with SvelteKit for optimal loading speeds
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component-based**: Modular, reusable Svelte components
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: Built with accessibility best practices

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── lib/
│   └── components/          # Reusable Svelte components
│       ├── Navigation.svelte
│       ├── Hero.svelte
│       ├── Experience.svelte
│       ├── Projects.svelte
│       ├── Blog.svelte
│       ├── Contact.svelte
│       └── Footer.svelte
├── routes/
│   ├── +layout.svelte      # Root layout
│   └── +page.svelte        # Home page
├── app.css                 # Global styles
└── app.html               # HTML template
```

## 🎨 Design Features

- **Gradient Text Effects**: Beautiful gradient text for headings
- **Smooth Animations**: Fade-in, slide-in, and hover animations
- **Interactive Elements**: Hover effects on cards and buttons
- **Modern Cards**: Clean card designs with subtle shadows
- **Responsive Grid**: CSS Grid for optimal layouts on all devices
- **Color Scheme**: Professional blue/primary color palette

## 🛠 Technologies Used

- [SvelteKit](https://kit.svelte.dev/) - Full-stack framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## 📝 Customization

To customize the portfolio:

1. **Content**: Update the data arrays in each component file
2. **Styling**: Modify `tailwind.config.js` and `src/app.css`
3. **Components**: Edit individual components in `src/lib/components/`
4. **Colors**: Update the primary color scheme in `tailwind.config.js`

## 🚀 Deployment

The site can be deployed to any static hosting service:

- **Vercel**: `npm run build` → deploy `build/` folder
- **Netlify**: Connect your repo and set build command to `npm run build`
- **GitHub Pages**: Use `@sveltejs/adapter-static`

## 📱 Mobile Responsive

The design is fully responsive with:
- Mobile-first approach
- Collapsible navigation menu
- Optimized touch targets
- Readable typography on all screen sizes
- Flexible grid layouts

## ⚡ Performance

- Optimized images and assets
- Minimal JavaScript bundle
- Efficient CSS with Tailwind purging
- Fast page loads with SvelteKit
- SEO-friendly structure

---

Built with ❤️ using SvelteKit and modern web technologies.
