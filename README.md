# 🪟 windows-Ahmed  
_A React-powered personal portfolio that looks and feels like Microsoft Windows 10_


> ⚡ **Live Demo:** <https://windows-ahmed.vercel.app>  

---

## 📑 Table of Contents
1. [About](#about)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
4. [Customization Guide](#customization-guide)
5. [Contributing](#contributing)
6. [License & Author](#license--author)

---

## About
`windows-Ahmed` is a **customisable portfolio website** that recreates the Windows 10 desktop experience entirely in the browser.  
Under the hood it’s a standard React + JavaScript SPA, but on the surface it behaves like a miniature OS: draggable windows, a start menu, themed apps, wallpapers and more. Use it as a portfolio, résumé, or playful landing page. 🖱️🖥️

---

## Project Structure
```text
SIMULAING-WINDOW...
├─ .github/                GitHub Actions & issue templates
│  ├─ ISSUE_TEMPLATE/
│  └─ workflows/
├─ node_modules/           Runtime dependencies
├─ public/                 Static assets served at /
│  ├─ android-chrome-*.png
│  ├─ apple-touch-icon.png
│  ├─ favicon*.png|ico
│  ├─ index.html           Main HTML shell
│  ├─ manifest.json        PWA manifest
│  └─ worker.js            Service-worker
├─ src/                    Application source
│  ├─ assets/              Images & fonts
│  ├─ components/          Re-usable React components
│  ├─ containers/          Page-level components
│  ├─ theme/               Global styles & variables
│  ├─ utils/               Helper functions & configs
│  ├─ App.*                Root component & styles
│  ├─ index.*              App entry point
│  └─ serviceWorker.js     PWA service worker registration
├─ .gitignore
├─ LICENSE                 MIT
├─ package*.json           NPM metadata & scripts
└─ README.md               You are here!
````

---


## Getting Started

### Prerequisites

* **Git** – [https://git-scm.com](https://git-scm.com)
* **Node.js 16 +** (includes **npm**) – [https://nodejs.org](https://nodejs.org)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/ahmedaziz703/Windows-Ahmed
cd Windows-Ahmed/

# 2. Install dependencies
npm install     # or pnpm / yarn

# 3. Start the dev server
npm start
```

### Production build

```bash
npm run build   # outputs an optimised bundle in /build
```

> **Tip (WSL users)**
> If you’re on Windows Subsystem for Linux, you might need an X-server or the Windows Node runtime.
> See Microsoft’s guide: [https://aka.ms/wslg](https://aka.ms/wslg).

---

## Customization Guide

1. **User profile**
   Edit `src/utils/data/user.config.js` with your name, avatar, social links, etc.

2. **App list & sidebar**
   Toggle built-in apps or the left sidebar in `src/utils/data/apps.config.js`.

3. **Wallpapers**
   Add images to `public/wallpapers/` (create the folder if missing) and reference them in `apps.config.js`.

4. **Analytics (optional)**
   *Disable* or *enable* Google Analytics / Firebase in `src/utils/data/project.config.js`.

5. **Firebase keys (only if analytics is on)**
   Create a `.env` file at the project root:

   ```dotenv
   REACT_APP_APIKEY=...
   REACT_APP_AUTH_DOMAIN=...
   REACT_APP_DATABASE_URL=...
   REACT_APP_PROJECT_ID=...
   REACT_APP_STORAGE_BUCKET=...
   REACT_APP_MESSAGING_SENDER_ID=...
   REACT_APP_APP_ID=...
   REACT_APP_MEASUREMENT_ID=...
   ```

6. **EmailJS (optional contact form)**

   ```dotenv
   REACT_APP_EMAILJS_KEY=your_emailjs_key
   ```

---

## Contributing

Contributions are what make open source amazing!
If you spot a bug 🐞, want a new feature ✨, or simply improve the docs:

1. **Fork** the project
2. Create your branch `git checkout -b feat/awesome-feature`
3. **Commit** your changes `git commit -m "Add awesome feature"`
4. **Push** the branch `git push origin feat/awesome-feature`
5. Open a **Pull Request**

---

## License & Author

* **License:** MIT – do with it what you will 🆓
* **Author:** Ahmed Al-regas

  * Portfolio [https://portfolio-orcin-seven-1mk53kxuyx.vercel.app/](https://portfolio-orcin-seven-1mk53kxuyx.vercel.app/)
  * GitHub: [https://github.com/ahmedaziz703](https://github.com/ahmedaziz703)
  * LinkedIn [https://www.linkedin.com/in/ahmed-alrages-810778344/](https://www.linkedin.com/in/ahmed-alrages-810778344/)

> Made with ❤️, ☕ and a nostalgic love for the Windows 10 aesthetic.
