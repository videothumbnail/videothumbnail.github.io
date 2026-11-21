# VideoThumbnail — Client-Side Video Thumbnail Maker

**Live Production URL:** [https://videothumbnail.github.io/](https://videothumbnail.github.io/)

**VideoThumbnail** is an ultra-fast, 100% client-side **Video Thumbnail Maker** and **Video Frame Extractor** built with **Astro 5**, **React 19**, and **Tailwind CSS**. Extract high-resolution snapshots from any `MP4`, `MOV`, or `WebM` video, apply vivid color tuning and bold draggable text overlays, and export `1280×720` YouTube thumbnails or `1080×1920` Shorts/TikTok vertical covers directly inside your browser — with **zero server uploads**, **zero signup**, and **zero watermarks**.

---

## Key Features

- **100% Client-Side Browser Execution:** Powered by HTML5 `<video>` frame seeking and hardware-accelerated HTML5 `<canvas>` 2D compositing. Multi-gigabyte 4K recordings open immediately without uploading files to any server.
- **Precision `-1f / +1f` Frame Scrubbing & Quick Filmstrip:** Step frame-by-frame (`1/30s`) or pick from 6 auto-generated filmstrip previews to capture the sharpest expression or action shot without motion blur.
- **One-Click Aspect Ratio & Resolution Presets:**
  - `16:9 YouTube (1280×720)`
  - `9:16 Vertical Cover (1080×1920)` for YouTube Shorts, TikTok, and Instagram Reels
  - `1:1 Square (1080×1080)`
- **Visual Pop & Bold Thumbnail Text Studio:** One-click *Auto Vivid Pop* plus manual Brightness, Contrast, and Saturation sliders, paired with draggable bold headline text (`Bold Outline`, `Pill Banner`, `Neon Pop`, `Clean Shadow`).
- **Instant Lossless PNG & YouTube-Ready JPG (`< 2 MB`) Export:** Direct local Blob download plus one-click *Copy Image to Clipboard*.
- **Offline-Ready Progressive Web App (PWA):** Installable via **Add to Home Screen** (`manifest.webmanifest` + cache-first `sw.js` Service Worker) so frame extraction and thumbnail creation work 100% offline.
- **8-Language Internationalization (i18n):** Complete localized routes and hreflang alternates for English (`/`), Español (`/es/`), Português (`/pt/`), Deutsch (`/de/`), Français (`/fr/`), 日本語 (`/ja/`), 简体中文 (`/zh/`), and Русский (`/ru/`).
- **Clean Light & Dark Themes:** Crafted with the Warm Cream (`#F6F0D7`), Soft Sage (`#C5D89D`), Muted Olive (`#9CAB84`), and Deep Moss (`#89986D`) palette meeting `>= 4.5:1` WCAG AA contrast.

---

## Architecture & Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Astro 5 (Islands Architecture, static output) |
| **Interactive Studio Island** | React 19 + TypeScript (`client:load`) |
| **Styling & Theming** | Tailwind CSS + CSS Custom Properties (`Clean Light` & `Dark` modes) |
| **Media Processing** | HTML5 Video Seek API + Canvas 2D Hardware-Accelerated Compositing |
| **SEO & Structured Data** | Flat `/sitemap.xml` endpoint, self-referencing canonicals, 8-locale `hreflang`, `WebApplication`, `FAQPage`, `BreadcrumbList`, `HowTo`, and `Person` JSON-LD schemas |
| **Deployment** | GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) |

---

## Local Development

### Prerequisites

- **Node.js** `>= 20.x`
- **npm** `>= 10.x`

### Commands

```bash
# 1. Install dependencies
npm install

# 2. Start local development server at http://localhost:4321
npm run dev

# 3. Build static production output into ./dist
npm run build

# 4. Preview production build locally
npm run preview
```

---

## GitHub Pages Deployment

This repository includes an automated GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) using `actions/configure-pages`, `withastro/action`, and `actions/deploy-pages`. Every push to the `main` branch automatically builds the static site and deploys it to `https://videothumbnail.github.io/`.

---

## Author & Support

Developed by **Kishara Dilshan** ([Hire Me](https://videothumbnail.github.io/hire-me/) • `kisharadilshan007@gmail.com`).

- **Support the Developer:** [Buy Kishara a Coffee on Gumroad](https://kisharadilshan.gumroad.com/coffee)
- **License:** Released under the [MIT License](LICENSE).
