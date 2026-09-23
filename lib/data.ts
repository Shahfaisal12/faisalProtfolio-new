export const profile = {
  firstName: "Shah",
  lastName: "Faisal",
  title: "Full Stack Developer",
  specialty: "React • Next.js • TypeScript • .NET",
  summary:
    "I’m a Full Stack Developer with 5+ years of experience building scalable, high-performance web applications and enterprise solutions. I specialize in React, Next.js, TypeScript, .NET, REST APIs, and modern web development. I enjoy solving complex problems, building clean and maintainable solutions, and delivering secure, reliable, and user-focused digital products.",
  location: "Al Olaya, Riyadh, Saudi Arabia",
  email: "faisalmkd02@gmail.com",
  phone: "+966 502639688",
  phoneHref: "+966502639688",
  linkedin: "https://www.linkedin.com/in/shahfaisal8012",
  github: "https://github.com/Shahfaisal12",
  website: "https://faisal-portfolio-app.vercel.app/",
  cv: "/assets/Shah_Faisal_CV.pdf",
  years: "5",
  projects: "6+"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-section" },
  { label: "Skills", href: "/#skills-section" },
  { label: "Works", href: "/#works-section" },
  { label: "Resume", href: "/#resume-section" },
  { label: "Testimonials", href: "/#testimonials-section" },
  { label: "Stack", href: "/#pricing-section" },
  { label: "Expertise", href: "/#blog-section" },
  { label: "Contact", href: "/#contact-section" }
];

export const services = [
  {
    subtitle: "User Interfaces",
    title: "Frontend Developer",
    text: "Crafting seamless, high-performance user interfaces with React.js, Next.js, and TypeScript. Passionate about delivering engaging and scalable web experiences.",
    href: "/#works-section",
    link: "See Projects",
    icon: "/assets/images/service-web.png"
  },
  {
    subtitle: "APIs & Data",
    title: "Backend Developer",
    text: "Building secure, efficient, and scalable backend solutions with modern technologies. Focused on optimizing performance and ensuring seamless data flow.",
    href: "/#resume-section",
    link: "See Experience",
    icon: "/assets/images/service-backend.png"
  }
];

export const skills = [
  { name: "JavaScript", text: "Core language for interactive, high-performance web applications.", value: 95 },
  { name: "React JS", text: "Building reusable component libraries, SPAs, and scalable product UIs.", value: 95 },
  { name: "Next JS", text: "SSR/SSG pipelines, SEO, routing, and production Next.js platforms.", value: 92 },
  { name: "TypeScript", text: "Typed, maintainable codebases for production frontend systems.", value: 90 },
  { name: "Redux Toolkit", text: "Predictable state management for data-driven React applications.", value: 90 },
  { name: "Tailwind CSS", text: "Responsive, accessible interfaces with utility-first styling.", value: 88 },
  { name: "Node JS", text: "Backend services, APIs, and tooling around the JavaScript stack.", value: 82 },
  { name: ".NET", text: "Backend services, APIs, business logic, and enterprise application development.", value: 85 },
  { name: "Git", text: "Version control, branching, reviews, and production deployments.", value: 92 }
];

export const works = [
  {
    title: "Content Catalyst",
    category: "React · Next.js · TypeScript",
    filters: ["ai", "product"],
    image: "/assets/images/contentcatalyst.png",
    href: "https://contentcatalyst.com",
    external: true,
    linkLabel: "Visit site",
    text: "Worked as a Frontend Developer on the UK-based project Content Catalyst, building the UI and integrating .NET Core APIs. Developed full functionality for summarizing articles and extracting content from PDFs, PPT, Word files, and images.",
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
    text: "As a remote ReactJS developer for a Dubai-based company, I developed and maintained their website using ReactJS and related technologies. I collaborated closely with design and backend teams and utilized Git for version control and code deployment.",
    tags: ["ReactJS", "Context API", "AG Grid Table", "Git"]
  },
  {
    title: "Collaboration Yard",
    category: "Angular · Uselooper",
    filters: ["product"],
    image: "/assets/images/collaborationyard.png",
    href: "https://collaborationyard.com",
    external: true,
    linkLabel: "Visit site",
    text: "Worked remotely as a UI/UX Developer on Collaboration Yard, a virtual classroom product for online teaching sessions with modern educational features. Built the interface with HTML, CSS, JavaScript, and related tools.",
    tags: ["Angular", "Uselooper", "Bitbucket"]
  },
  {
    title: "EPR (Job Portal)",
    category: "React · Node.js",
    filters: ["product"],
    image: "/assets/images/epr.png",
    href: "https://epr.org.pk/",
    external: true,
    linkLabel: "Visit site",
    text: "Developed a job portal for employers to post openings and applicants to search and apply. Includes user authentication, job recommendations, and notifications, built with ReactJS, Node.js, PHP, and MySQL.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL", "cPanel"]
  },
  {
    title: "OneHubPlace",
    category: "React · Next.js · TypeScript",
    filters: ["enterprise", "product"],
    image: "/assets/images/onehubplace.png",
    href: "https://onehubplace-app.azurewebsites.net",
    external: true,
    linkLabel: "Visit site",
    text: "HR management system based on three web portals for personal details, holidays, and task management.",
    tags: ["React", "Next.js", "TypeScript", "Redux Toolkit", "MUI", "Git", "Azure", "DevOps", "Docker"]
  },
  {
    title: "PIF Cycle, Together, PartnerHub",
    category: "Enterprise, PIF",
    filters: ["enterprise"],
    image: "/assets/images/work4.jpeg",
    href: "/#resume-section",
    external: false,
    linkLabel: "See experience",
    text: "Contributed to responsive UI, API integration, and performance across multiple Public Investment Fund platforms while working with cross-functional teams.",
    tags: ["React", "Next.js", "TypeScript"]
  }
];

export const education = [
  {
    title: "Bachelor of Computer Science (Software)",
    place: "Abdul Wali Khan University, Mardan, Pakistan",
    date: "2017 – 2021",
    text: "Final Year Project: E-commerce Store built with Laravel, MySQL, and Bootstrap."
  }
];

export const experience = [
  {
    title: "Full Stack Developer",
    place: "TCS | PIF · Riyadh, Saudi Arabia",
    date: "Feb 2026 – Present",
    present: true,
    text: "Develop and maintain scalable enterprise applications using React, Next.js, TypeScript, and .NET.",
    points: [
      "Develop and maintain scalable enterprise applications using React, Next.js, TypeScript, and .NET.",
      "Build frontend features and backend services across the full application development lifecycle.",
      "Develop and integrate RESTful APIs to support complex business workflows and enterprise processes.",
      "Implement backend business logic, API endpoints, authentication, authorization, and role-based access control.",
      "Build responsive, accessible, and high-performance user interfaces using modern frontend technologies.",
      "Develop dashboards, reporting features, workflow management, and data-driven enterprise solutions.",
      "Implement Arabic/English internationalization and RTL support for enterprise applications.",
      "Collaborate with backend developers, designers, QA engineers, and business stakeholders in an Agile/Scrum environment.",
      "Analyze business requirements and BRDs, translate them into technical solutions, and deliver production-ready features.",
      "Troubleshoot issues, optimize application performance, and maintain clean, reusable, and scalable code."
    ]
  },
  {
    title: "Senior Frontend Developer",
    place: "BITS · Riyadh, Saudi Arabia",
    date: "Aug 2023 – Feb 2026",
    text: "Architected and maintained enterprise web applications using React 18, Next.js, and TypeScript.",
    points: [
      "Architected and maintained enterprise web applications using React 18, Next.js, and TypeScript.",
      "Developed scalable, reusable, and responsive UI components using Tailwind CSS, shadcn/ui, and modern frontend architecture.",
      "Built data-driven dashboards, KPIs, charts, reports, search workflows, and business applications using DevExtreme and custom components.",
      "Implemented Arabic/English internationalization, RTL support, locale-aware date/time formatting, and dynamic content loading.",
      "Integrated RESTful APIs and implemented complex business workflows and data-driven features.",
      "Improved application performance, accessibility, responsiveness, and cross-browser compatibility.",
      "Contributed to frontend architecture, coding standards, reusable component libraries, and design-system development.",
      "Collaborated with cross-functional teams in an Agile/Scrum environment to deliver reliable and maintainable enterprise solutions."
    ]
  },
  {
    title: "Software Engineer",
    place: "Codehub Systems",
    date: "Aug 2023 – Present",
    present: true,
    text: "Developed scalable front-end solutions using React.js, Next.js, and TypeScript.",
    points: [
      "Developed scalable front-end solutions using React.js, Next.js, and TypeScript.",
      "Translated Figma designs into responsive, pixel-perfect React applications.",
      "Collaborated with backend teams to integrate RESTful APIs efficiently.",
      "Participated in daily standups, sprint planning, and code reviews to ensure smooth development."
    ]
  },
  {
    title: "Frontend Developer (ReactJS)",
    place: "Relymer Group",
    date: "August 2022 – Present",
    present: true,
    text: "Developed and maintained web applications using ReactJS, Next.js, animations, and Material UI.",
    points: [
      "Developed and maintained web applications using ReactJS, Next.js, animations, and Material UI.",
      "Implemented enhancements that improved web functionality, responsiveness, and Firebase connectivity.",
      "Collaborated with the design team to ensure seamless integration of features and user interfaces."
    ]
  },
  {
    title: "Frontend Developer (ReactJS)",
    place: "Flying Colour",
    date: "Feb 2022 – Aug 2022",
    text: "Developed and maintained the company website using ReactJS and related technologies.",
    points: [
      "Developed and maintained the company's website using ReactJS and other related technologies.",
      "Collaborated with the design and backend teams to ensure seamless integration of features.",
      "Utilized Git for version control and deployed code to the production environment.",
      "Worked with ReactJS, AG Grid Table, Git, and Bitbucket."
    ]
  },
  {
    title: "Frontend Developer",
    place: "Collaboration Yard",
    date: "August 2021 – Feb 2022",
    text: "UI/UX developer on virtual classroom software for online teaching sessions.",
    points: [
      "Worked on a collaborative project as a UI/UX developer for virtual classroom software that lets you manage and run online teaching sessions.",
      "Designed, developed, and maintained web applications using HTML, CSS, JavaScript, Bootstrap, and Uselooper.",
      "Implemented responsive design and ensured cross-browser compatibility."
    ]
  }
];

export const strengths = [
  {
    name: "Sara Lee",
    role: "CFO, Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "I thought it was impossible to make a website as beautiful as our product, but Shah Faisal proved me wrong."
  },
  {
    name: "Chris Brown",
    role: "COO, DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    text: "I've never met a web developer who truly cares about their clients' success like Shah Faisal does."
  },
  {
    name: "Lisa Wang",
    role: "CTO, 456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    text: "After Shah Faisal optimized our website, our traffic increased by 50%. We can't thank him enough!"
  }
];

export const stack = [
  {
    subtitle: "Languages",
    price: "JS",
    suffix: "/",
    em: "TS",
    text: "Core languages used to build and ship production web systems.",
    items: ["JavaScript", "TypeScript", ".NET", "Node JS"],
    featured: false
  },
  {
    subtitle: "Frontend",
    price: "React",
    suffix: "JS",
    em: "Next.js",
    text: "Libraries and UI systems used across products and dashboards.",
    items: ["React JS", "Next JS", "Redux Toolkit", "Tailwind CSS"],
    featured: true
  },
  {
    subtitle: "Delivery",
    price: "Git",
    suffix: "/",
    em: "Cloud",
    text: "Version control and platforms used to ship and operate products.",
    items: ["Git", "Azure", "Docker", "cPanel"],
    featured: false
  }
];

export const expertise = [
  {
    category: "Architecture",
    title: "AEM-style Headless Content",
    href: "/#resume-section",
    image: "/assets/images/single7.jpg",
    text: "Strong expertise in AEM-style headless content integration, REST APIs, maps, and modular frontend architecture for enterprise platforms.",
    link: "See experience"
  },
  {
    category: "Performance",
    title: "SEO, SSR & Optimization",
    href: "/#skills-section",
    image: "/assets/images/blog-4-scaled-1.jpg",
    text: "Performance optimization, SEO, Next.js SSR/SSG pipelines, accessibility compliance, and cross-browser stability for data-rich SPAs.",
    link: "See skills"
  },
  {
    category: "Delivery",
    title: "CI/CD, Docker & Mentoring",
    href: "/#contact-section",
    image: "/assets/images/blog-2.jpg",
    text: "CI/CD pipelines, Docker, Azure DevOps, project deployment, team mentoring, and Agile/Scrum delivery across multiple products.",
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
