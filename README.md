# Cargomate Limited — Website

**Version:** 1.0  
**Built by:** TechNexus Malawi  
**Client:** Cargomate Limited, Lilongwe  
**Date:** April 2026

---

## 📁 File Tree

```
cargomate_website/
│
├── index.html                  ← Main single-page website
├── about.md                    ← GitHub Pages about/meta page (Markdown)
├── _config.yml                 ← GitHub Pages Jekyll configuration
├── README.md                   ← This file
├── IMAGE_SEARCH_TERMS.md       ← Image search guide and filename map
│
└── assets/
    ├── css/
    │   └── style.css           ← All styles (Windows Fluent / Light-Blue theme)
    ├── js/
    │   └── main.js             ← Navbar, scroll effects, counter, form handling
    └── images/
        ├── hero-bg.jpg         ← Hero section background
        ├── hiw-process.jpg     ← How It Works section image
        ├── about-team.jpg      ← About Us team photo
        ├── coverage-map.jpg    ← Coverage section map
        ├── office.jpg          ← Contact section office photo
        ├── cta-bg.jpg          ← CTA banner background
        ├── client-1.jpg        ← Testimonial 1 avatar
        ├── client-2.jpg        ← Testimonial 2 avatar
        └── client-3.jpg        ← Testimonial 3 avatar
```

---

## 🚀 Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `cargomate-website`)
2. Upload all files maintaining the folder structure above
3. Go to **Settings → Pages → Source → main branch → / (root)**
4. Update `_config.yml`:
   - Set `url` to your GitHub Pages URL (e.g. `https://yourname.github.io`)
   - Set `baseurl` to `/cargomate-website` (your repo name)
5. Your site will be live at: `https://yourname.github.io/cargomate-website`

> For a custom domain (e.g. `www.cargomatemw.com`):
> - Add a `CNAME` file with your domain name
> - Point your DNS A records to GitHub Pages IPs

---

## 🖼 Images Setup

See `IMAGE_SEARCH_TERMS.md` for full image search guidance.  
Place all images in `assets/images/` using the exact filenames listed.

---

## 🎨 Theme Reference

| Token | Value | Use |
|---|---|---|
| Primary Blue | `#0078D4` | Buttons, icons, accents |
| Blue Dark | `#003F7F` | Headers, footer |
| Blue Light | `#EFF6FF` | Section backgrounds |
| Sky | `#00B4D8` | Secondary accent |
| Text Dark | `#0F172A` | Headings |
| Text Body | `#334155` | Body text |
| Font | Inter + Segoe UI | All typography |

---

## 📋 Sections

| Section | ID | Description |
|---|---|---|
| Navigation | — | Sticky, scrolled-blur navbar |
| Hero | `#home` | Full-screen with tracking bar |
| Stats | — | Animated counters |
| Services | `#services` | 6 service cards |
| How It Works | `#how-it-works` | 3-step process |
| Client Portal | `#portal` | Portal mockup + features |
| About Us | `#about` | Company overview |
| Why Cargomate | — | 4 differentiator cards |
| Coverage | `#coverage` | Map + border locations |
| Testimonials | — | 3 client reviews |
| CTA Banner | — | Quote / call to action |
| Contact | `#contact` | Enquiry form + info |
| Footer | — | Links, social, legal |

---

## 🔗 Dependencies (CDN — no install needed)

- [Inter Font](https://fonts.google.com/specimen/Inter) via Google Fonts
- [Font Awesome 6.5](https://fontawesome.com) via cdnjs

---

## 📧 Contact

**TechNexus Malawi**  
P.O. Box 2169, Blantyre, Malawi  
technexus_mw@proton.me | www.technexusmw.com
