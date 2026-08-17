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
  sub: 'I build reusable, responsive frontend systems and digital experiences — from component libraries and design systems to interactive web applications and developer tooling.',
  ctas: [
    { label: 'View my work →', href: '#work', variant: 'primary' },
    { label: 'Get in touch →', href: 'mailto:oleksandra.gurkalo@gmail.com', variant: 'white' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/oleksandragurkalo', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oleksandragurkalo/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:oleksandra.gurkalo@gmail.com', icon: 'email' },
  ],
  stats: [
    { icon: '⚡', bg: '#f0fdf4', title: '75%', label: 'Less effort through workflow automation' },
    { icon: '🧩', bg: '#eff6ff', title: '50–100', label: 'Brands supported across professional projects' },
    { icon: '🚀', bg: '#faf5ff', title: '100+', label: 'Digital projects delivered' },
    { icon: '⚙️', bg: '#fff7ed', title: '4+', label: 'Years of professional frontend experience' },
  ],
  badge: 'Montréal, Canada · Open to remote opportunities',
}

export const about = {
  title: 'Frontend engineering with a systems mindset',
  text: [
    'I’m a Frontend Developer with 4+ years of professional experience building digital experiences for international pharmaceutical brands.',
    'My work spans reusable component libraries, multi-channel design systems, interactive presentations, responsive web interfaces and internal developer tooling. I work closely with designers, QA engineers, Product Owners and backend developers to turn designs and requirements into reliable production-ready solutions.',
    'I care about more than making an interface look right. I focus on creating frontend systems that are reusable, maintainable and consistent, while looking for opportunities to automate repetitive work and improve development workflows.',
    'My experience working across web, email and iPad environments has taught me to solve problems within different technical constraints while maintaining a consistent user experience.',
  ],
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
      'Impulse purchases are easy to rationalize when the price is viewed as a single number. Before I Buy reframes the cost as working time, giving users a more meaningful way to pause and reconsider a purchase, and lets them share wish lists with friends for accountability and easier gift-giving.',
    approach: [
      'Built a responsive waiting-list application where users add items, choose a cooling-off period and return when the item is ready to decide.',
      'Implemented income-based price conversion using hourly, monthly or annual income, with support for net or gross pay and five currencies.',
      'Added live currency conversion with a static fallback table so the application remains useful when exchange-rate data is unavailable.',
      'Built a friend request system with read-only shared wish lists, so friends can see items of interest without exposing pay or other personal data.',
      'Support multiple named lists per user with per-list savings-progress tracking, for organizing purchases by goal or occasion.',
      'Built purchase history, resistance tracking, streaks and category-based spending insights.',
      'Implemented authentication, PostgreSQL data storage and realtime synchronization using Supabase.',
      'Added dark/light mode with system preference detection.',
      'Moved account deletion to a Vercel serverless function because the Supabase service-role key required for a hard delete cannot safely be exposed in client-side code.',
    ],
    result:
      'Lighthouse desktop: 99 Performance / 100 Accessibility / 100 Best Practices / 100 SEO. FCP 0.8s, LCP 0.8s, TBT 0ms, CLS 0.',
  },
  pills: [
    { label: 'React', variant: 'blue' },
    { label: 'Vite' },
    { label: 'Supabase' },
    { label: 'PostgreSQL' },
    { label: 'CSS Modules' },
    { label: 'Vercel' },
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
    desc: 'A Node.js tool for making precise, repeatable changes across large sets of templated HTML/CSS files. Instead of relying on broad global find-and-replace, it uses CSS selectors to target specific HTML elements and applies changes only where intended.',
    details: [
      'Reads replacement rules from an Excel spreadsheet.',
      'Copies source files into an output directory before processing.',
      'Applies global replacements where selector-based matching is not appropriate.',
      'Uses Cheerio to match HTML elements by CSS selector and replace only targeted content.',
      'Provides dry-run reporting to identify selectors that produce zero matches before files are modified.',
      'Supports large template sets of approximately 100–200 files per run.',
    ],
    result: 'Designed to make large-scale template updates more controlled, repeatable and less error-prone.',
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
    desc: 'A responsive portfolio website for a portrait and family photographer based in Łódź, Poland, designed around visual storytelling, bilingual content and a lightweight frontend implementation.',
    details: [
      'Implemented Ukrainian and Polish language switching with a lightweight custom context rather than introducing a full internationalization library.',
      'Built the image lightbox from scratch to keep behaviour and styling under direct control.',
      'Used plain CSS and design tokens to create a maintainable visual layer without unnecessary dependencies.',
      'Configured Vercel SPA rewrites so client-side navigation works correctly with direct URLs and hard refreshes.',
    ],
    result:
      'Lighthouse desktop: 98 Performance / 95 Accessibility / 100 Best Practices / 100 SEO. Currently in development pending final client materials.',
    pills: [
      { label: 'React', variant: 'blue' },
      { label: 'React Router' },
      { label: 'Vite' },
      { label: 'Custom i18n' },
      { label: 'CSS' },
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
  desc: 'A React and TypeScript project created to deepen practical experience with typed application architecture, forms, state management, reusable components and frontend testing.',
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

export const experience = {
  role: 'Frontend Developer',
  company: 'Tieto',
  date: 'Feb 2022 – Present',
  intro:
    'Frontend development within a complex pharmaceutical digital-content environment, working across design systems, reusable UI, responsive interfaces, Veeva CRM and multi-channel content.',
  bullets: [
    'Build and maintain a multi-channel design system supporting email, presentations, briefs and banners across complex pharmaceutical brand requirements.',
    'Develop reusable components and frontend patterns that improve consistency and reduce duplicated implementation across projects.',
    'Translate Figma designs into responsive, production-ready interfaces with close attention to visual accuracy and maintainability.',
    'Develop interactive web presentations designed to run within Veeva CRM on iPad, working within platform-specific technical constraints.',
    'Support frontend development across 2–4 concurrent projects and approximately 50–100 pharmaceutical brands.',
    'Work across web, email and iPad environments, resolving rendering, responsive and cross-platform implementation issues.',
    'Develop frontend solutions using JavaScript, TypeScript, React, LitElement, Web Components, SCSS and modern frontend tooling.',
    'Work closely with designers, QA engineers, Product Owners and backend developers to turn designs and requirements into production-ready solutions.',
    'Investigate complex UI issues, identify root causes and implement maintainable fixes rather than short-term workarounds.',
    'Perform structured self-verification and cross-browser testing before delivery to maintain implementation quality.',
    'Estimate frontend work and contribute to project planning while delivering across multiple concurrent priorities.',
    'Identify repetitive development workflows and build automation tools that reduce manual effort and improve consistency.',
  ],
  achievements: [
    {
      icon: '⚙️',
      title: '75%',
      label: 'Less project effort',
      text: 'Automated a recurring workflow and reduced effort from approximately 27 hours to 6–7 hours across 30+ projects.',
    },
    {
      icon: '🚀',
      title: '100+',
      label: 'Projects delivered',
      text: 'Contributed frontend development across more than 100 digital projects during professional experience.',
    },
    {
      icon: '🧩',
      title: '50–100',
      label: 'Brands supported',
      text: 'Built and maintained frontend experiences supporting approximately 50–100 pharmaceutical brands.',
    },
    {
      icon: '📈',
      title: '2025',
      label: 'Promoted to Mid-level',
      text: 'Promoted from Junior to Mid-level Frontend Developer following increased responsibility, project ownership and demonstrated delivery performance.',
    },
  ],
}

export const professionalProject = {
  tag: 'Professional · NDA',
  title: 'Multi-channel Design System',
  responsibilities: [
    'Translate design-system decisions into reusable frontend components.',
    'Maintain consistent patterns across multiple brands and content formats.',
    'Support responsive behaviour across different screen sizes and environments.',
    'Work with Web Components and LitElement alongside modern frontend technologies.',
    'Support email-specific implementation using MJML and HTML/CSS constraints.',
    'Collaborate with design, QA and Product Owner teams to improve component behaviour and consistency.',
  ],
  technologies: [
    'LitElement',
    'Web Components',
    'JavaScript',
    'TypeScript',
    'SCSS',
    'MJML',
    'HTML',
    'CSS',
    'Veeva CRM',
  ],
}

export const automationCaseStudy = {
  title: 'From 27 Hours to 6–7 Hours',
  problem:
    'A recurring project workflow required many repetitive manual steps for every delivery. The process was time-consuming and created unnecessary opportunities for human error.',
  approach: [
    'Documented the existing workflow and broke it down into individual steps.',
    'Identified deterministic operations that could be safely automated.',
    'Researched appropriate technologies and designed a reusable solution.',
    'Built Node.js automation to handle repetitive project operations.',
    'Validated the result and applied the workflow across subsequent projects.',
  ],
  demonstrates: [
    'Process analysis',
    'Automation',
    'Node.js',
    'Problem solving',
    'Developer productivity',
    'Workflow optimization',
  ],
}

export const bring = [
  {
    icon: '🖥️',
    bg: '#eff6ff',
    title: 'UI Engineering',
    desc: 'Turn designs into responsive, production-ready interfaces with careful attention to implementation quality.',
  },
  {
    icon: '🧩',
    bg: '#faf5ff',
    title: 'Design Systems',
    desc: 'Build reusable components and patterns that keep interfaces consistent across projects, brands and channels.',
  },
  {
    icon: '🏗️',
    bg: '#fff7ed',
    title: 'Component Architecture',
    desc: 'Structure components and frontend code for reuse, consistency and long-term maintainability.',
  },
  {
    icon: '📱',
    bg: '#fef2f2',
    title: 'Responsive Development',
    desc: 'Build and debug interfaces across browsers, devices and environments with different technical constraints.',
  },
  {
    icon: '⚙️',
    bg: '#f0fdf4',
    title: 'Automation',
    desc: 'Identify repetitive workflows and build practical tools that reduce manual work and improve consistency.',
  },
  {
    icon: '🤝',
    bg: '#f0fdfa',
    title: 'Cross-functional Work',
    desc: 'Collaborate effectively with design, QA, product and backend teams to solve frontend problems.',
  },
]

export const stack = [
  {
    label: 'Core Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'SCSS / Sass'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['React', 'LitElement', 'Astro', 'Vue.js'],
  },
  {
    label: 'Engineering',
    items: [
      'Design Systems',
      'Component Architecture',
      'Web Components',
      'Responsive Design',
      'Accessibility',
      'Performance',
      'Cross-browser Development',
      'UI Engineering',
    ],
  },
  {
    label: 'AI & Automation',
    items: [
      'Cursor',
      'Claude Code',
      'GitHub Copilot',
      'MCP Integration',
      'AI-assisted Development',
      'Workflow Automation',
    ],
  },
  {
    label: 'Tools',
    items: ['Git', 'Figma', 'Node.js', 'Vite', 'Jira'],
  },
  {
    label: 'Domain',
    items: [
      'Veeva CRM',
      'Pharmaceutical Digital Content',
      'Multi-channel Design Systems',
      'Email Development',
      'MJML',
    ],
  },
  {
    label: 'Languages',
    items: ['Ukrainian — Native', 'Russian — Native', 'English — B2+', 'Polish — B2', 'French — B1'],
  },
]

export const workflow = [
  {
    number: '01',
    title: 'Understand',
    desc: 'Understand the design, requirements, technical constraints and expected user experience.',
  },
  {
    number: '02',
    title: 'Structure',
    desc: 'Break the problem into reusable components, patterns and implementation steps.',
  },
  {
    number: '03',
    title: 'Build',
    desc: 'Develop clean, responsive and maintainable frontend solutions.',
  },
  {
    number: '04',
    title: 'Validate',
    desc: 'Test across relevant browsers, devices and environments and investigate edge cases.',
  },
  {
    number: '05',
    title: 'Improve',
    desc: 'Look for repetitive work, technical debt and opportunities for better tooling or automation.',
  },
  {
    number: '06',
    title: 'Deliver',
    desc: 'Collaborate with design, QA and product teams to deliver reliable production-ready work.',
  },
]

export const cta = {
  eyebrow: '✉️ Let’s work together',
  title: 'Let’s build something great',
  sub: 'I’m currently open to frontend opportunities where I can contribute to thoughtful UI engineering, design systems, reusable architecture and modern development workflows.',
  action: { label: 'Get in touch →', href: 'mailto:oleksandra.gurkalo@gmail.com' },
}

export const contact = {
  location: 'Montréal, Canada',
  email: 'oleksandra.gurkalo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/oleksandragurkalo/',
  github: 'https://github.com/oleksandragurkalo',
}

export const footer = {
  copy: '© 2026 Oleksandra Gurkalo. All rights reserved.',
  links: [
    { label: 'GitHub', href: 'https://github.com/oleksandragurkalo' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/oleksandragurkalo/' },
    { label: 'Email', href: 'mailto:oleksandra.gurkalo@gmail.com' },
  ],
}
