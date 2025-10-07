# Atlas Capital - Investment Firm Website

This is a modern, responsive one-page website for an investment firm, built with:

- [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/) ⚡
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Recharts](https://recharts.org/) for charts
- [Heroicons](https://heroicons.com/) for icons

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

Now visit **http://localhost:5173**

### 3. Build for production
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

---

## 📂 Project Structure

```
invest-firm-site/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── PerformanceChart.jsx
        ├── Team.jsx
        ├── BlogPreview.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## 🌐 Deployment

This project is static and can be deployed anywhere:

- **[Vercel](https://vercel.com/)**  
  Just run `npm run build` and deploy the `dist/` folder. Or push to GitHub and connect with Vercel.

- **[Netlify](https://www.netlify.com/)**  
  Set the build command to `npm run build` and publish directory to `dist/`.

- **Static hosting (Nginx, Apache, etc.)**  
  Copy everything in `dist/` to your server.

---

## 📊 Features

- Smooth scroll navigation
- Responsive hero section with call-to-action
- About section with mission & values
- Services grid
- Interactive performance chart
- Team member profiles
- Blog/insights preview
- Contact form (Formspree integration ready)
- Footer with legal disclaimer

---

## 📝 Notes

- Replace `hello@atlascapital.example` with your real contact email.
- Update the `form action` in `Contact.jsx` with your own [Formspree](https://formspree.io/) endpoint or hook up a backend API.
- Blog preview links can be replaced with actual blog routes or external links.

---

## 📄 License

MIT License © 2025 Atlas Capital
