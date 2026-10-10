# Portfolio Website

A fast, accessible, dependency-free personal portfolio for **Ian Muema**, built with plain HTML, CSS and JavaScript and deployed to GitHub Pages with GitHub Actions.

**Live site:** https://muema825.github.io/Portfolio-Website/

## Features

- No frameworks, no build step: just static files
- Minimal single-column layout with a floating pill navigation bar, portrait photo and "available for work" badge
- One-click "Copy email" buttons
- Light and dark themes that follow your system setting, with a toggle that remembers your choice
- All content (bio, skills, projects, experience, links) driven from one data file
- Project filtering by category
- Scroll-reveal animations that respect `prefers-reduced-motion`
- Active section highlighting in the nav
- Accessible markup: skip link, ARIA labels and keyboard support
- Automatic deployment to GitHub Pages on every push to `main`

## File structure

```
.
├── index.html                 # Page markup
├── 404.html                   # Not-found page
├── favicon.svg                # Site icon
├── .nojekyll                  # Serve files as-is (skip Jekyll processing)
├── assets/
│   ├── img/
│   │   └── ian-muema.jpg      # Portrait photo
│   ├── css/
│   │   └── style.css          # All styles and theme color tokens
│   └── js/
│       ├── data.js            # Your personal info (edit this)
│       └── main.js            # Rendering and interactivity
└── .github/
    └── workflows/
        └── pages.yml          # GitHub Pages deploy workflow
```

## Customize

1. **Personal info:** edit [`assets/js/data.js`](assets/js/data.js). It holds your name, role, photo, location, availability badge, tagline, email, social links, about paragraphs, skills, projects and experience. Set a social link to `""` to hide it, and leave a project's `repo` or `demo` empty to hide that link. If `projects` is an empty array, the site shows your most recently updated public GitHub repositories instead.
2. **Photo:** replace `assets/img/ian-muema.jpg` with a square portrait, or point `photo` in `data.js` at another image.
3. **Favicon:** replace `favicon.svg` with your own icon.
4. **Colors:** change the CSS custom properties (`--bg`, `--surface`, `--text`, `--accent`, and the rest) at the top of [`assets/css/style.css`](assets/css/style.css). Light values live on `:root`; dark values are defined under the `prefers-color-scheme: dark` media query and `:root[data-theme="dark"]`.

## Local preview

Serve the folder with any static file server, for example:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deployment

1. In the repository on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Merge (or push) your changes to `main`.
3. The **Deploy to GitHub Pages** workflow builds and publishes the site. You can also run it manually from the **Actions** tab.

The site is published at https://muema825.github.io/Portfolio-Website/. All asset paths are relative, so it also works under a custom domain.

## License

Released under the MIT License. You are welcome to use this as a template for your own portfolio.
