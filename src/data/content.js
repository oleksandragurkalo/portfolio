export const nav = {
  logo: 'Oleksandra Gurkalo',
  links: [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
}

export const hero = {
  eyebrow: 'Frontend Developer',
  nameLine1: 'Oleksandra',
  nameLine2: 'Gurkalo',
  sub: 'I build responsive, accessible and maintainable component libraries and design systems with modern frontend technologies.',
  ctas: [
    { label: 'View my work →', href: '#work', variant: 'primary' },
    { label: 'Get in touch →', href: 'mailto:oleksandra.gurkalo@gmail.com', variant: 'outline' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/oleksandragurkalo', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oleksandragurkalo/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:oleksandra.gurkalo@gmail.com', icon: 'email' },
  ],
  stats: [
    { icon: '📅', bg: null, num: '4+', label: 'Years of frontend experience' },
    { icon: '</>', bg: '#f0fdf4', num: '30+', label: 'Projects completed' },
    { icon: '🧩', bg: '#faf5ff', num: 'Reusable', label: 'Components & design systems' },
    { icon: '📈', bg: '#fffbeb', num: '~75%', label: 'Less manual work with automation' },
  ],
  badge: 'Montréal, Canada · Open to remote opportunities',
}

export const featuredProject = {
  id: 'before-i-buy',
  image: 'before-i-buy.jpg',
  icon: '🛒',
  iconBg: '#f0fdf4',
  tag: 'Web App',
  title: 'Before I Buy',
  year: '2026',
  role: 'Solo',
  caseStudy: {
    problem:
      'Impulse purchases are easy to rationalize in the moment. Price tags are abstract — $180 feels different from "7 hours of your actual take-home pay." Most budgeting apps track what you already spent; nothing made you pause before you spent it.',
    approach: [
      'A minimal waiting-list app: add an item, set a cooling-off period (3, 7, 14, or 30 days), and come back when the countdown clears. The core mechanic converts every price into hours of net work based on your real pay — hourly, monthly, or annual, net or gross, across five currencies. Currency switching converts existing prices using live exchange rates, with a static fallback table if offline. When a cooling-off period ends, the item flips to "ready to decide" — resist it, buy it, or send it back to deciding. History tracks your resistance rate, streaks, and spending patterns by category.',
      "The backend is Supabase — Auth, Postgres, and Realtime — so items sync across devices. Account deletion required a Vercel serverless function rather than client-side logic: the service-role key that can do a hard delete can't be exposed in the browser, so that operation lives in /api/delete-account.js behind the server boundary.",
    ],
    result:
      'Lighthouse desktop: 99 Performance / 100 Accessibility / 100 Best Practices / 100 SEO. FCP 0.8s, LCP 0.8s, TBT 0ms, CLS 0. Mobile: 81–89 across runs.',
  },
  pills: [
    { label: 'React', variant: 'blue' },
    { label: 'Vite' },
    { label: 'Supabase' },
    { label: 'CSS Modules' },
  ],
  actions: [
    { label: '↗ Live Demo', href: 'https://before-i-buy.vercel.app/' },
    { label: 'GitHub', href: 'https://github.com/oleksandragurkalo/before-i-buy', icon: 'github', ghost: true },
  ],
}

export const projects = [
  {
    id: 'search-replace',
    image: 'search-replace.jpg',
    icon: '🔍',
    iconBg: '#eff6ff',
    tag: 'Developer Tool',
    title: 'Search & Replace by Selector',
    year: '2025',
    role: 'Solo',
    desc: "Global find-replace is too blunt for templated HTML: changing a colour in h2.brand-title shouldn't touch h2.disclaimer. This Node.js CLI reads a replacement map from a spreadsheet and applies it with selector precision — CSS-selector-scoped replacement in HTML files via Cheerio, plain regex across everything else. The two-mode split reflects how the file types actually work: CSS and JS have no DOM to query, so treating them as plain text is correct, not a limitation. A dry-run report mode flags zero-match rows before anything is written — so a typo'd selector fails loudly rather than silently. No framework dependencies; runnable in the browser via StackBlitz.",
    result: 'Designed for design-system-scale file sets of 100–200 files per run.',
    pills: [
      { label: 'Node.js', variant: 'blue' },
      { label: 'Cheerio' },
      { label: 'CLI' },
      { label: 'xlsx' },
    ],
    actions: [
      {
        label: '↗ Try Demo',
        href: 'https://stackblitz.com/github/oleksandragurkalo/search-replace-by-selector',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/oleksandragurkalo/search-replace-by-selector',
        icon: 'github',
        ghost: true,
      },
    ],
  },
  {
    id: 'photographer-portfolio',
    image: 'photography-portfolio.jpg',
    icon: '📷',
    iconBg: '#fff7ed',
    tag: 'Client Site',
    title: 'Bohdana Kosmyna Photography',
    year: '2026',
    role: 'Client work · Solo',
    desc: 'Portfolio site for a portrait and family photographer based in Łódź, Poland. The client needed both Ukrainian and Polish — rather than adding react-i18next, a lightweight custom language context handles the UA/PL string switching with no library overhead. The Lightbox is also built from scratch, not a drop-in. Plain CSS with design tokens keeps the visual layer simple and fully under control. Vercel SPA routing is handled via vercel.json rewrites so client-side navigation survives hard refreshes and direct links.',
    result:
      'Lighthouse desktop: 98 Performance / 95 Accessibility / 100 Best Practices / 100 SEO. In active development; launching once client materials are finalised.',
    pills: [
      { label: 'React', variant: 'blue' },
      { label: 'React Router' },
      { label: 'Vite' },
      { label: 'i18n' },
    ],
    actions: [
      { label: '↗ Live Website', href: 'https://photography-portfolio-chi-one.vercel.app/' },
      {
        label: 'GitHub',
        href: 'https://github.com/oleksandragurkalo/photography-portfolio',
        icon: 'github',
        ghost: true,
      },
    ],
  },
]

export const sideProject = {
  id: 'resume-builder',
  image: 'resume-builder.jpg',
  icon: '📄',
  iconBg: '#faf5ff',
  tag: 'Web App',
  title: 'Interactive Resume Builder',
  year: '2025',
  role: 'Solo',
  desc: 'Exploration project built to get hands-on with TypeScript and testing in a React context — forms, state, and component structure in a controlled setting where the goal was learning, not shipping. The NDA-covered production work uses the same stack; this shows it in readable, public code.',
  pills: [
    { label: 'React', variant: 'blue' },
    { label: 'TypeScript' },
    { label: 'Tailwind CSS' },
    { label: 'Vitest' },
  ],
  actions: [
    { label: '↗ Live Demo', href: 'https://interactive-resume-builder-green.vercel.app/' },
    {
      label: 'GitHub',
      href: 'https://github.com/oleksandragurkalo/interactive-resume-builder',
      icon: 'github',
      ghost: true,
    },
  ],
}

export const statsBar = [
  { icon: '</>', num: '4+', label: 'Years of experience' },
  { icon: '🚀', num: '30+', label: 'Projects completed' },
  { icon: '🤝', num: 'Collaborative', label: 'Team player' },
  { icon: '✅', num: 'Detail oriented', label: 'Clean & maintainable code' },
]

export const experience = {
  role: 'Frontend Developer',
  company: 'Tieto',
  date: 'Feb 2022 – Present',
  bullets: [
    'Build and maintain a component library and multi-channel design system (email, slide, briefs, banners) reused across ~20 clients, each spanning 5–10 brands',
    'Ship interactive web presentations built to run on Veeva CRM’s iPad app, across 4–8 concurrent programs on an 8–10 person team',
    'Deliver 30+ releases with the lowest defect/reopen rate on the team, including one cycle that cut post-release bugs by 35%',
    'Estimate work accurately enough to avoid overruns, consistently hitting deadlines across concurrent client programs',
    'Collaborate with designers, QA, backend developers and stakeholders across programs',
    'Create automation tooling that improves team efficiency and reduces errors',
  ],
  achievement: {
    title: 'Key Achievement',
    text: 'Automated repetitive workflows that reduced manual workload by ~75% across 30+ project cycles',
    big: '~75%',
  },
}

export const bring = [
  { icon: '🖥️', bg: '#eff6ff', title: 'UI Engineering', desc: 'Responsive, accessible and user-focused interfaces' },
  { icon: '🧩', bg: '#faf5ff', title: 'Component Architecture', desc: 'Reusable components and design-system mindset' },
  { icon: '🔍', bg: '#fff7ed', title: 'Cross-browser QA', desc: 'Manual testing across browsers and devices' },
  { icon: '💡', bg: '#fef2f2', title: 'Problem Solving', desc: 'Debugging complex issues and shipping solutions' },
  { icon: '🤝', bg: '#f0fdf4', title: 'Collaboration', desc: 'Work closely with designers, QA and devs' },
  { icon: '🛡️', bg: '#f0fdfa', title: 'Production Mindset', desc: 'Building for real users with quality and care' },
]

export const stack = [
  { label: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'SCSS / Sass'] },
  { label: 'Frameworks', items: ['LitElement', 'Astro', 'Vue.js', 'React'] },
  { label: 'Engineering', items: ['Design Systems', 'Responsive Design', 'Accessibility', 'Performance'] },
  { label: 'Tools', items: ['Git', 'Figma', 'Node.js', 'Vite', 'Jira'] },
]

export const cta = {
  eyebrow: "✉️ Let's work together",
  title: "Let's build something amazing",
  sub: "I'm currently open to new opportunities. Let's build something amazing.",
  action: { label: 'Get in touch →', href: 'mailto:oleksandra.gurkalo@gmail.com' },
}

export const contact = {
  location: 'Montréal, Canada',
  email: 'oleksandra.gurkalo@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/oleksandragurkalo', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oleksandragurkalo/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:oleksandra.gurkalo@gmail.com', icon: 'email' },
  ],
}

export const footer = {
  copy: '© 2026 Oleksandra Gurkalo. All rights reserved.',
  links: [
    { label: 'GitHub', href: 'https://github.com/oleksandragurkalo' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oleksandragurkalo/' },
    { label: 'Email', href: 'mailto:oleksandra.gurkalo@gmail.com' },
  ],
}
