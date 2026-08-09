# Sandra Gurkalo — Portfolio Site

Personal brand site built with **React + Vite**. Works for both UI development and coordination/PM job tracks.

## Quick start

```bash
npm install
npm run dev       # localhost:5173
npm run build     # production build → dist/
```

## Customise — start here

All content lives in **one file**: `src/data/content.js`

- Update your email, LinkedIn, GitHub URLs
- Edit the `about.body` paragraph (this is your pitch)
- Add/edit entries in the `work` array for your case studies
- Drop your CV PDFs into `/public/` and name them `cv-tech.pdf` and `cv-coord.pdf`

## Structure

```
src/
  data/content.js        ← ALL your text content here
  components/
    Nav.jsx / Nav.css    ← fixed top nav with scroll spy
  sections/
    Hero.jsx / Hero.css  ← full-height landing with animated headline
    About.jsx / About.css ← bio + 4 key stats
    Work.jsx / Work.css  ← filterable project cards (tech / coord / both)
    Skills.jsx / Skills.css ← two-column skill tracks
    Contact.jsx / Contact.css ← contact links + dual CV download
  hooks/
    useScrollSpy.js      ← tracks which section is in view for nav
```

## Deploy (free)

**Vercel** (easiest):
1. Push to GitHub
2. Import repo at vercel.com → auto-detects Vite → done

**Netlify**:
1. Push to GitHub
2. New site → build command: `npm run build`, publish dir: `dist`

## Next steps

- [ ] Add your real email and LinkedIn URL in `content.js`
- [ ] Write 1–2 more case studies (no NDA content needed — focus on process + metrics)
- [ ] Add CV PDFs to `/public/`
- [ ] Add a `/public/favicon.svg` (your initials or a simple mark)
- [ ] Consider a short Loom video embed in the Contact section
- [ ] Push to GitHub — the repo itself is part of your portfolio
