# Oleksandra Gurkalo — Portfolio Site

Personal portfolio site built with **React + Vite**.

## Quick start

```bash
npm install
npm run dev       # localhost:5173
npm run build     # production build → dist/
npm run lint      # oxlint
```

## Customise — start here

All content lives in **one file**: `src/data/content.js`

- `nav` — nav bar links
- `hero` — name, tagline, CTAs, social links, hero stats
- `projects` — the "Selected Work" cards (title, description, tags, live/GitHub links, screenshot filename)
- `statsBar` — the stat strip under Selected Work
- `experience` — current role, bullets, key achievement
- `bring` — "What I Bring to the Table" cards
- `stack` — Tech Stack pills, grouped by category
- `cta` / `contact` — the dark bottom bar
- `footer` — footer links and copyright line

Project screenshots live in `src/assets/projects/` — filenames are referenced by the `image` field on each entry in `projects`.

## Structure

```
src/
  data/content.js          ← ALL text content and project data
  components/
    Nav.jsx / Nav.css      ← sticky top nav with scroll spy
    Footer.jsx / Footer.css
    Icons.jsx              ← shared inline SVG icons
  hooks/
    useScrollSpy.js        ← tracks which section is in view for nav highlighting
  sections/
    Hero.jsx / Hero.css
    Work.jsx / Work.css            ← project cards grid
    Stats.jsx / Stats.css          ← stat strip
    Experience.jsx / Experience.css
    About.jsx / About.css          ← "What I Bring to the Table"
    Skills.jsx / Skills.css        ← "Tech Stack"
    Contact.jsx / Contact.css      ← dark CTA + contact bar
```

## Deploy (free)

**Vercel** (easiest):
1. Push to GitHub
2. Import repo at vercel.com → auto-detects Vite → done

**Netlify**:
1. Push to GitHub
2. New site → build command: `npm run build`, publish dir: `dist`
