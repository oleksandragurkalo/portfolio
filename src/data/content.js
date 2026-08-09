export const nav = {
  logo: 'sandradev.ca',
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

export const projects = [
  {
    id: 'before-i-buy',
    featured: true,
    image: 'before-i-buy.jpg',
    icon: '🛒',
    iconBg: '#f0fdf4',
    tag: 'Web App',
    title: 'Before I Buy',
    desc: 'Anti-impulse-purchase tracker — add things you want, see the real cost in hours of take-home pay, and decide later with a cooling-off period and resistance-rate insights instead of your cart.',
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
  },
  {
    id: 'search-replace',
    image: 'search-replace.jpg',
    icon: '🔍',
    iconBg: '#eff6ff',
    tag: 'Developer Tool',
    title: 'Search & Replace by Selector',
    desc: 'Node.js CLI that reads a spreadsheet of selector → find → replace rules and applies them across HTML/CSS/JS files, scoped by CSS selector via Cheerio — so near-identical templates can be updated safely without a blunt global find/replace.',
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
    title: 'Photography Portfolio',
    desc: 'Portfolio site for a portrait, love story and family photographer based in Łódź, Poland — full Ukrainian/Polish language switching and a Formspree-powered contact form. Built for a real client.',
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
  {
    id: 'resume-builder',
    image: 'resume-builder.jpg',
    icon: '📄',
    iconBg: '#faf5ff',
    tag: 'Web App',
    title: 'Interactive Resume Builder',
    desc: 'Step-by-step resume builder with a live, print-proportioned A4 preview that updates as you type — repeatable sections, smart dropdowns, and versioned autosave to localStorage. No backend, no account.',
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
  },
]

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
    'Build and maintain reusable components and a multi-channel design system',
    'Develop component libraries serving 6–10 concurrent brand clients',
    'Collaborate with designers, QA, backend developers and stakeholders',
    'Improve performance, accessibility and responsive delivery',
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
