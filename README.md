# ⚡ Nandini Kanchi — Personal Portfolio

> Premium, futuristic personal portfolio website for Nandini Kanchi — AI Engineer, ML Engineer, Data Engineer, Software Engineer & Future CEO.

![Portfolio](https://img.shields.io/badge/Portfolio-Live-00D4FF?style=flat-square)
![Built With](https://img.shields.io/badge/Built%20with-HTML%20%2F%20CSS%20%2F%20JS-7C3AED?style=flat-square)
![Design](https://img.shields.io/badge/Design-Futuristic%20Dark-050505?style=flat-square&labelColor=2563EB)
![License](https://img.shields.io/badge/License-MIT-06B6D4?style=flat-square)

---

## 🌐 Live Site

**https://nandinikanchi006.github.io/portfolio**

---

## 🖼️ Preview

| Section | Description |
|---|---|
| 🚀 Hero | Animated headline, typed role switcher, rotating avatar ring with photo |
| 👩‍💻 About | Bio, core strengths, skill cards |
| 🧠 Skills | 4 animated skill categories with progress bars |
| 💼 Projects | 6 featured project cards (AI, Quantum, Health Tech, Full Stack) |
| 📅 Timeline | Journey from 2022 → 2026 |
| 🐙 GitHub | Stats, language chart, contribution graph |
| 🏆 Achievements | Animated counter cards |
| 📬 Contact | Social links + contact form |

---

## ✨ Features

### Design
- **Dark theme** — deep black `#050505` base
- **Gradient accents** — electric blue `#2563EB`, cyan `#06B6D4`, violet `#7C3AED`
- **Glassmorphism** cards with backdrop blur
- **Syne** display font (futuristic, bold)
- **JetBrains Mono** for code and data elements
- Fully **responsive** — mobile, tablet, desktop

### Animations & Effects
- ⚡ Custom loading screen with progress bar
- 🖱️ Custom cursor — cyan dot + lagging ring
- ✨ Particle background — tri-colour connected node mesh
- 🔄 Rotating gradient ring around profile photo
- 💫 Scroll-triggered reveal animations on every section
- 📊 Animated skill progress bars (fill on scroll)
- 🔢 Animated counter numbers
- ⌨️ Typing effect cycling through all 5 roles
- 🌟 Glowing hover effects on cards
- 📈 Auto-generated GitHub contribution graph

### Sections
- **Loader** — branded progress bar before page reveal
- **Navbar** — sticky with blur on scroll, mobile hamburger menu
- **Hero** — full viewport with animated profile photo, stats, typed roles
- **About** — bio + 6 animated skill cards
- **Skills** — 4 categories: Programming, AI & Data Science, Web Dev, Tools
- **Projects** — 6 cards (AI Resume Analyzer, QuantumSecure Bank, CV Disease Prediction, Stress Detector, Eye Blink Decoder, Resume Builder)
- **Timeline** — journey from 2022 to present
- **GitHub** — live stats, top languages bar chart, contribution heatmap
- **Achievements** — 4 glowing counter metrics
- **Contact** — GitHub + LinkedIn + Email links, working contact form
- **Footer** — quick nav + social links

---

## 🗂️ Project Structure

```
portfolio/
├── index.html        # Complete portfolio — single self-contained file
└── README.md         # This file
```

All CSS, JavaScript, and the profile photo are embedded directly in `index.html`. No dependencies, no build tools, no server required.

**External CDN (loaded at runtime):**
- [Syne + Inter + JetBrains Mono](https://fonts.google.com/) — Google Fonts

---

## 🚀 Getting Started

### View locally
```bash
# Clone the repo
git clone https://github.com/Nandinikanchi006/portfolio.git
cd portfolio

# Open in browser
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Serve locally (optional)
```bash
# Python
python3 -m http.server 8080

# Node.js
npx serve .
```

Then open `http://localhost:8080`

---

## 🛠️ Customisation

All content lives in `index.html`. To update:

| What to change | Where to find it |
|---|---|
| Name / tagline | `#hero` section |
| About text | `#about` section |
| Skills & percentages | `#skills` — `data-w` attributes on `.skill-pill-fill` |
| Projects | `#projects` — `.project-card` blocks |
| Timeline events | `#timeline` — `.tl-item` blocks |
| Contact email | `#contact` — `href="mailto:..."` |
| LinkedIn URL | `#contact` — social links |
| GitHub username | `#github` section + social links |
| Profile photo | Replace the `<img src="data:image/jpeg;base64,..."` tag |

---

## 💼 Featured Projects

| Project | Stack | Link |
|---|---|---|
| AI Resume Analyzer Pro | Python, Streamlit, Gemini AI, Plotly | [GitHub ↗](https://github.com/Nandinikanchi006/AI-Resume-Analyzer) |
| QryptAI — Quantum Safe Vault | HTML, JS, Node.js, Post-Quantum Crypto | [GitHub ↗](https://github.com/Nandinikanchi006/QryptAI) |
| QuantumSecure Bank | Python, Flask, SQLite, JS | [GitHub ↗](https://github.com/Nandinikanchi006) |
| Cardiovascular Disease Prediction | Python, ML, Plotly | [GitHub ↗](https://github.com/Nandinikanchi006) |
| Stress Detection via Iris Sensing | Python, OpenCV, ML | [GitHub ↗](https://github.com/Nandinikanchi006) |
| Eye Blink Message Decoder | Python, Computer Vision | [GitHub ↗](https://github.com/Nandinikanchi006) |

---

## 🔗 Connect

| Platform | Link |
|---|---|
| 🐙 GitHub | [github.com/Nandinikanchi006](https://github.com/Nandinikanchi006) |
| 💼 LinkedIn | [linkedin.com/in/nandini-kanchi-4416a7407](https://www.linkedin.com/in/nandini-kanchi-4416a7407) |
| 🌐 Portfolio | [nandinikanchi006.github.io/portfolio](https://nandinikanchi006.github.io/portfolio) |

---

## 📜 License

MIT © 2026 Nandini Kanchi — free to use and adapt with attribution.

---

> *"Building intelligent systems, solving real-world problems, and creating technology that impacts millions."*
> — Nandini Kanchi
