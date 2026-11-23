# Webxplore Technologies website (placeholder brand)

React 19 + Vite + Tailwind CSS 3 + React Router + Lucide.

    npm install
    npm run dev        # local development
    npm run build      # production build in dist/

Before launch, replace placeholder content:
- Company name, email, phone, address, socials: `src/data/site.js` (`company`, `socials`)
- Sample projects, testimonials and blog posts: `src/data/site.js`
- Domain for canonical URLs: `company.url`
- Contact form: set `VITE_FORM_ENDPOINT` (e.g. Formspree) in `.env`; without it the form opens the visitor's email app.
- Host with an SPA fallback (all routes serve `index.html`).
