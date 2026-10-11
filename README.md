# Axelle Consulting | HEOR.AI Webpage

A modern, responsive, high-performance static website for **Axelle Consulting (HEOR.AI)**, built with clean HTML5, modern CSS3, and vanilla JavaScript. Ready for instant deployment to **GitHub Pages** and custom domain integration via **GoDaddy**.

---

## 📁 Project Structure

```text
axelle-consulting/
│
├── index.html            # Main home page entry point (required by GitHub Pages)
├── style.css             # Complete design system, layouts, and responsive CSS
├── script.js             # Interactive JavaScript (modal, mobile nav, form handlers)
├── README.md             # Documentation, learning guide, and deployment manual
└── images/               # Media assets
    ├── hero-bg.png       # Cybernetic grid background for hero section
    ├── about-team.png    # Circular photo for About section
    ├── collaboration.png # Photo for Collaboration section
    └── contact-team.png  # Photo for Contact Us section
```

---

## 💡 Learning Context: Web Development Fundamentals

This project was built to teach you core web development principles:

1. **Semantic HTML5 (`index.html`)**:
   - Tags like `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` describe their meaning to search engines and screen readers, dramatically boosting SEO compared to generic `<div>` tags.
   - Meta tags (`viewport`, `description`, `charset`) ensure crisp rendering across mobile devices and accurate search engine snippets.

2. **Modern CSS Layouts (`style.css`)**:
   - **CSS Custom Properties (Variables)**: Defined inside `:root` so colors and spacing can be adjusted in one central place.
   - **CSS Grid & Flexbox**: Used for 2-column sections (About, Collaboration, Contact) that cleanly wrap into single columns on phones without messy hacks.
   - **Media Queries (`@media`)**: Automatically resize typography and reconfigure layouts when the screen width drops below `900px` and `768px`.

3. **Vanilla JavaScript Interactivity (`script.js`)**:
   - **No heavy external frameworks**: Zero dependencies mean ultra-fast loading times (sub-100ms load).
   - **Event Listeners**: Intercept user actions (hamburger menu toggle, modal popup open/close, form validation) without reloading the page.
   - **Accessibility**: Includes keyboard listeners (`Escape` key closes modals) and `aria-*` state updates.

---

## 🚀 How to Publish to GitHub Pages & GoDaddy

### Step 1: Test Locally
You can view the website on your computer right away:
- Simply double-click `index.html` to open it in your web browser.
- Or run a lightweight local server from this directory:
  ```bash
  python -m http.server 8000
  ```
  Then visit `http://localhost:8000` in your browser.

### Step 2: Push to GitHub
1. Create a new public repository on [GitHub](https://github.com) (e.g. `axelle-consulting`).
2. In your terminal inside this folder, initialize git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Axelle Consulting website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
   *(Or drag and drop these files directly into the GitHub repository web interface).*

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** > **Pages** (left sidebar).
3. Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
4. Your site will be published at `https://<your-username>.github.io/<repo-name>/`.

### Step 4: Connect Your GoDaddy Domain
1. In GitHub repository **Settings** > **Pages**, under **Custom domain**, enter your domain (e.g., `yourdomain.com`).
2. Log into **GoDaddy** > **DNS Management** for your domain:
   - Add four `A` records pointing `@` to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add a `CNAME` record for `www` pointing to `<your-username>.github.io`.
3. In GitHub Settings, wait for the DNS check to pass and check **Enforce HTTPS**.
