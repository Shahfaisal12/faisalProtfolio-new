export const profile = {
  firstName: "Shah",
  lastName: "Faisal",
  title: "Full-Stack Software Engineer",
  specialty: ".NET • C# • ASP.NET • React • Next.js • TypeScript",
  summary:
    "Full-Stack Software Engineer with 6 years of experience building secure enterprise web applications. Currently with Tata Consultancy Services, deployed at the Public Investment Fund in Riyadh. Experienced in .NET, C#, ASP.NET, React, Next.js, TypeScript, REST APIs, Arabic/English RTL, and CI/CD.",
  location: "Al Olaya, Riyadh, Saudi Arabia",
  email: "faisalmkd02@gmail.com",
  phone: "+966 50 263 9688",
  phoneHref: "+966502639688",
  linkedin: "https://www.linkedin.com/in/shahfaisal8012",
  github: "https://github.com/Shahfaisal12",
  website: "https://faisal-portfolio-app.vercel.app/",
  cv: "/assets/Shah_Faisal_CV.pdf",
  availability: "Immediate availability · Transferable Iqama",
  years: "6",
  projects: "5+"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-section" },
  { label: "Technical Skills", href: "/#skills-section" },
  { label: "Projects", href: "/#works-section" },
  { label: "Experience & Education", href: "/#resume-section" },
  { label: "Professional Highlights", href: "/#highlights-section" },
  { label: "Tools & Platforms", href: "/#pricing-section" },
  { label: "Expertise", href: "/#blog-section" },
  { label: "Contact", href: "/#contact-section" }
];

export const services = [
  {
    subtitle: "User Interfaces",
    title: "Frontend Developer",
    text: "Build responsive, accessible enterprise interfaces with React 18, Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Material UI.",
    href: "/#works-section",
    link: "See Projects",
    icon: "/assets/images/service-web.png"
  },
  {
    subtitle: "APIs & Data",
    title: "Backend Developer",
    text: "Develop and integrate RESTful APIs, business workflows, authentication, and role-based access using .NET, C#, ASP.NET, Node.js, and Express.js.",
    href: "/#resume-section",
    link: "See Experience",
    icon: "/assets/images/service-backend.png"
  }
];

export const skills = [
  {
    name: "Backend",
    text: "C#, .NET, ASP.NET, Node.js, Express.js, RESTful APIs, third-party integrations, headless content integration"
  },
  {
    name: "Frontend",
    text: "React 18, Next.js 15, TypeScript, JavaScript (ES6+), Redux Toolkit, RTK Query, DevExtreme, shadcn/ui"
  },
  {
    name: "UI & Styling",
    text: "Tailwind CSS, Material UI, Bootstrap, HTML5, CSS3, responsive UI, component libraries, design systems"
  },
  {
    name: "Architecture & Quality",
    text: "Arabic/English i18n, RTL support, SSR/SSG, SEO, accessibility, role-based access, performance optimization"
  },
  {
    name: "Data & Visualization",
    text: "Chart.js, Highcharts, DevExtreme Charts, D3.js (working knowledge), PDF, Excel, and CSV export"
  },
  {
    name: "Cloud & Delivery",
    text: "Azure, Azure DevOps, Docker, CI/CD pipelines, Git, GitHub, Bitbucket, Vercel, Netlify, Firebase"
  },
  {
    name: "Database & AI Tools",
    text: "MySQL; Claude and Cursor for AI-assisted coding, code review, debugging, and documentation"
  },
  {
    name: "Core Strengths",
    text: "Full-stack development, enterprise web applications, REST API development and integration, secure authentication"
  },
  {
    name: "Ways of Working",
    text: "Agile/Scrum, code reviews, cross-functional collaboration, team mentoring"
  }
];

export const works = [
  {
    title: "TCS at PIF | Enterprise Applications",
    category: "TCS · Public Investment Fund · Riyadh",
    filters: ["enterprise"],
    image: "/assets/images/tcs-pif-case.svg",
    href: "/#resume-section",
    external: false,
    linkLabel: "See experience",
    text: "Currently deployed by Tata Consultancy Services at the Public Investment Fund, building and supporting secure enterprise applications, dashboards, and API-powered workflows for internal teams.",
    tags: [".NET", "C#", "React", "Next.js", "TypeScript", "REST APIs", "Role-based access"]
  },
  {
    title: "Content Catalyst",
    category: "React · Next.js · TypeScript",
    filters: ["ai", "product"],
    image: "/assets/images/contentcatalyst.png",
    href: "https://contentcatalyst.com",
    external: true,
    linkLabel: "Visit site",
    text: "Built the frontend for an AI research platform that ingests PDF, PowerPoint, and Word documents and provides chat-based AI summaries. Deployed with Docker and Azure DevOps.",
    tags: ["React", "Next.js", "TypeScript", "Redux Toolkit", "MUI", "Git", "Azure", "DevOps", "Docker"]
  },
  {
    title: "Flyingcolour",
    category: "ReactJS · AG Grid",
    filters: ["enterprise", "product"],
    image: "/assets/images/flyingcolor.png",
    href: "https://www.flyingcolour.net/",
    external: true,
    linkLabel: "Visit site",
    text: "Built frontend features and admin modules for enterprise software, collaborating with global teams on React interfaces and API-based workflows.",
    tags: ["React", "API integration", "Enterprise software"]
  },
  {
    title: "Collaboration Yard",
    category: "Virtual Classroom",
    filters: ["product"],
    image: "/assets/images/collaborationyard.png",
    href: "https://collaborationyard.com",
    external: true,
    linkLabel: "Visit site",
    text: "Built responsive React frontends and interactive workflows for a virtual classroom platform, translating Figma designs into production interfaces.",
    tags: ["React", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "EPR (Job Portal)",
    category: "React · Node.js",
    filters: ["product"],
    image: "/assets/images/epr.png",
    href: "https://epr.org.pk/",
    external: true,
    linkLabel: "Visit site",
    text: "Developed UI components for government job portals and employment processing workflows.",
    tags: ["React", "Employment workflows", "Government portals"]
  },
  {
    title: "OneHubPlace",
    category: "React · Next.js · TypeScript",
    filters: ["enterprise", "product"],
    image: "/assets/images/onehubplace.png",
    href: "https://onehubplace-app.azurewebsites.net",
    external: true,
    linkLabel: "Visit site",
    text: "HR management system with personnel, holiday, and task management portals.",
    tags: ["React", "Next.js", "TypeScript", "Redux Toolkit", "MUI", "Git", "Azure", "DevOps", "Docker"]
  },
];

export const education = [
  {
    title: "Bachelor of Computer Science (Software)",
    place: "Abdul Wali Khan University, Mardan, Pakistan",
    date: "2017 – 2021",
    text: "Final Year Project: E-commerce Store built with Laravel, MySQL, and Bootstrap."
  }
];

export const certifications = [
  {
    title: "Agile Foundations",
    place: "Project Management Institute",
    date: "Aug 2026",
    text: ""
  },
  {
    title: "Micro Front-End Architecture with React",
    place: "LinkedIn Learning",
    date: "Oct 2025",
    text: ""
  },
  {
    title: "Express Essentials: Build Powerful Web Apps with Node.js",
    place: "LinkedIn Learning",
    date: "Oct 2025",
    text: ""
  },
  {
    title: "Node.js Essential Training",
    place: "LinkedIn Learning",
    date: "Oct 2025",
    text: ""
  }
];

export const experience = [
  {
    title: "Software Engineer",
    place: "TCS | PIF · Riyadh, Saudi Arabia",
    date: "Feb 2026 – Present",
    present: true,
    text: "Develop and maintain enterprise full-stack applications at the Public Investment Fund as part of Tata Consultancy Services’ enterprise application development team.",
    points: [
      "Build and maintain enterprise applications with .NET, React, Next.js, and TypeScript.",
      "Develop and integrate RESTful APIs and manage real-time data flows for business workflows.",
      "Create secure dashboards, authentication mechanisms, and role-based access control.",
      "Use Next.js server-side rendering and static generation to improve performance and SEO.",
      "Provide production support, UI enhancements, and internal process improvements.",
      "Contribute to code reviews, architecture practices, and Agile cross-functional delivery."
    ]
  },
  {
    title: "Senior Frontend Developer",
    place: "BITS | Binary Integrated Technology Solutions · Riyadh, Saudi Arabia",
    date: "May 2025 – Jan 2026",
    text: "Architected and maintained a React 18 and Next.js enterprise platform used across multiple business modules.",
    points: [
      "Implemented Arabic/English internationalization, full RTL support, locale-aware date/time formatting, and dynamic content loading.",
      "Built dashboards, charts, KPIs, reports, PDF/Excel exports, and global search using DevExtreme and custom components.",
      "Contributed to architecture, coding standards, a design system, and reusable shadcn/ui and Tailwind CSS components.",
      "Maintained performance budgets, accessibility, and cross-browser stability."
    ]
  },
  {
    title: "Software Engineer",
    place: "Code Hub Systems · UK-based company",
    date: "Aug 2023 – Apr 2025",
    text: "Built high-performance frontends and integrated complex APIs for a UK-based software company.",
    points: [
      "Built applications with React, Next.js SSR/SSG, and TypeScript; optimized server rendering for SEO and load times.",
      "Integrated RESTful APIs and worked with backend teams on API design.",
      "Implemented secure token flows, CSRF protection, and session handling.",
      "Deployed with Docker and Azure DevOps CI/CD; contributed to Agile ceremonies."
    ]
  },
  {
    title: "Frontend Developer (ReactJS)",
    place: "Relymer Group · Islamabad, Pakistan",
    date: "Aug 2022 – Aug 2023",
    text: "Modernized legacy applications into reusable React components and responsive user interfaces.",
    points: [
      "Built responsive UIs with Tailwind CSS and Material UI and integrated third-party APIs and Firebase.",
      "Developed and deployed smart contracts and integrated blockchain features."
    ]
  },
  {
    title: "Frontend Developer (ReactJS)",
    place: "Flyingcolour Business Setup Services · Dubai, UAE (Remote)",
    date: "Feb 2022 – Aug 2022",
    text: "Debugged and optimized frontend performance for enterprise software.",
    points: [
      "Built React features and admin modules using API-based workflows in collaboration with global teams."
    ]
  },
  {
    title: "UX/UI Developer",
    place: "Collaboration Yard · Karachi, Pakistan (Remote)",
    date: "Mar 2021 – Feb 2022",
    text: "Built responsive React interfaces and interactive workflows for a virtual classroom platform.",
    points: [
      "Translated Figma designs into production UIs and maintained quality through code reviews."
    ]
  }
];

export const strengths = [
  {
    name: "Enterprise Full-Stack Development",
    role: ".NET · C# · ASP.NET · React · Next.js",
    text: "Six years building and supporting secure, scalable enterprise web applications, including platforms for the Public Investment Fund."
  },
  {
    name: "Internationalization & RTL",
    role: "Arabic/English · Accessibility · Responsive UI",
    text: "Implemented Arabic and English localization with full right-to-left support, locale-aware date and time formatting, and dynamic content."
  },
  {
    name: "Secure API & Delivery Practices",
    role: "REST APIs · RBAC · Docker · Azure DevOps",
    text: "Experienced with API integration, authentication, role-based access control, secure token flows, CSRF protection, and CI/CD."
  }
];

export const stack = [
  {
    subtitle: "Languages",
    price: "JS",
    suffix: "/",
    em: "TS",
    text: "Core languages used to build and ship production web systems.",
    items: ["C#", ".NET", "ASP.NET", "JavaScript", "TypeScript", "Node.js"],
    featured: false
  },
  {
    subtitle: "Frontend",
    price: "React",
    suffix: "JS",
    em: "Next.js",
    text: "Libraries and UI systems used across products and dashboards.",
    items: ["React 18", "Next.js 15", "Redux Toolkit", "RTK Query", "Tailwind CSS", "shadcn/ui"],
    featured: true
  },
  {
    subtitle: "Delivery",
    price: "Git",
    suffix: "/",
    em: "Cloud",
    text: "Version control and platforms used to ship and operate products.",
    items: ["Azure", "Azure DevOps", "Docker", "CI/CD", "Git"],
    featured: false
  }
];

export const expertise = [
  {
    category: "Architecture",
    title: "REST APIs & Headless Content",
    href: "/#resume-section",
    image: "/assets/images/single7.jpg",
    text: "REST API design and integration, third-party services, headless content integration, and modular frontend architecture for enterprise applications.",
    link: "See experience"
  },
  {
    category: "Performance",
    title: "SSR, SSG, SEO & Performance",
    href: "/#skills-section",
    image: "/assets/images/blog-4-scaled-1.jpg",
    text: "Next.js server-side rendering and static generation, SEO, accessibility, and performance optimization for enterprise platforms.",
    link: "See skills"
  },
  {
    category: "Delivery",
    title: "CI/CD, Docker & Agile Delivery",
    href: "/#contact-section",
    image: "/assets/images/blog-2.jpg",
    text: "Docker, Azure DevOps CI/CD pipelines, code reviews, team mentoring, and Agile/Scrum delivery across cross-functional teams.",
    link: "Contact me"
  },
  {
    category: "Collaboration",
    title: "Design Systems & Team Enablement",
    href: "/#works-section",
    image: "/assets/images/blog6.jpg",
    text: "Building reusable component libraries, documenting UI patterns, and helping teams ship consistent dashboards with shadcn/ui, TailwindCSS, and MUI.",
    link: "See projects"
  }
];
