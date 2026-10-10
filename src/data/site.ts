// ============================================================
// SITE DATA — Edit this file to update all your portfolio content.
// Every section on the page pulls from this single file.
// ============================================================

export const site = {
  // ── PERSONAL INFO ──
  name: "Regie Suminguit",
  role: "Web Developer",
  email: "suminguitr3gie@gmail.com",
  location: "Philippines", // Update with your city if you want

  // ── SOCIAL LINKS — Set to "" to hide a link ──
  github: "https://github.com/RegieS1",
  linkedin: "https://www.linkedin.com/in/regie-suminguit-29b685437/",

  // ── ABOUT TEXT ──
  about: [
    "I am a Web Developer with 2.5+ years of real-world experience working with Frappe Framework, ERPNext, Python, HTML, CSS, Jinja, SQL, and Git. My professional work has focused on developing and improving existing systems, reports, and school-related applications.",
    "I am now expanding that experience into modern full-stack development through personal projects and continuous learning — building with Next.js, TypeScript, Vue.js, Supabase, and Tailwind CSS.",
    "I believe in learning the right tool for the job. I use AI-assisted development as part of my workflow while always reviewing, testing, and adapting solutions to meet real requirements.",
  ],

  // ── STATS ──
  stats: [
    { label: "Years Experience", value: "2.5+" },
    { label: "Technologies Used", value: "15+" },
    { label: "Systems Improved", value: "Multiple" },
  ],

  // ── SKILLS — Organized by experience level (honest, per your guidelines) ──
  skillGroups: [
    {
      label: "Professional Experience",
      skills: ["HTML", "CSS", "Python", "Jinja", "SQL", "Frappe Framework", "ERPNext", "Git", "GitHub"],
    },
    {
      label: "Working Knowledge",
      skills: ["JavaScript", "Vue.js"],
    },
    {
      label: "Currently Learning",
      skills: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    },
  ],

  // ── OTHER DEVELOPMENT SKILLS ──
  otherSkills: [
    "Debugging",
    "Problem Solving",
    "Working with Existing Codebases",
    "System Customization",
    "Report Generation",
    "Print Format Development",
    "Responsive Layouts",
    "Database-Driven Applications",
    "AI-Assisted Development",
    "Version Control",
  ],

  // ── PROFESSIONAL EXPERIENCE ──
  experience: [
    {
      role: "Web Developer",
      focus: "Frappe Framework & ERPNext",
      duration: "2.5+ Years",
      highlights: [
        "Developed and customized features within Frappe Framework and ERPNext for school-related systems.",
        "Created and formatted student report cards, academic reports, and structured print documents.",
        "Built landing pages and web interfaces using HTML, CSS, Jinja, and Python.",
        "Wrote and modified Python scripts and SQL-driven reports for system functionality.",
        "Debugged and maintained existing codebases, implementing changes based on specific requirements.",
        "Used Git and GitHub for version control and development workflow.",
      ],
    },
  ],

  // ── DEVELOPMENT JOURNEY (shown as a timeline) ──
  journey: [
    {
      phase: "Professional Web Development",
      summary: "Started building experience with HTML and CSS while working with web-based systems.",
    },
    {
      phase: "Frappe & ERPNext",
      summary: "Gained professional experience with Python, Jinja, SQL, reports, print formats, and system customization.",
    },
    {
      phase: "Reporting & School Systems",
      summary: "Developed practical experience creating school reports, report cards, landing pages, and system features.",
    },
    {
      phase: "Application Development",
      summary: "Expanded into app development by building a grading application using Vue.js and Python.",
    },
    {
      phase: "Modern Full-Stack Development",
      summary: "Started learning Next.js, TypeScript, Supabase, PostgreSQL, Tailwind CSS, and Vercel through a Sports Tracker project.",
    },
    {
      phase: "Current Direction",
      summary: "Combining professional experience with modern web development skills to build complete, modern applications.",
    },
  ],

  // ── PROJECTS ──
  // HOW TO ADD IMAGES:
  //   1. Save screenshots in the public/images/ folder
  //   2. Add paths to the images array: ["/images/screen1.png", "/images/screen2.png"]
  //   3. Add matching captions for each image
  projects: [
    {
      title: "School Report Systems",
      description:
        "Professional work developing and formatting student report cards, academic reports, print formats, and landing pages within Frappe Framework and ERPNext. Involved customizing existing systems based on specific school requirements.",
      tags: ["Frappe", "ERPNext", "Python", "Jinja", "HTML", "CSS", "SQL"],
      url: "#",
      images: [],
      captions: [],
    },
    {
      title: "Sports Tracker",
      description:
        "A personal web application built to practice modern full-stack development. Features team session tracking, player stats, and equipment inventory with a responsive dashboard.",
      tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
      url: "#",
      images: [
        "https://placehold.co/800x450/e8ddd1/4a4a4a?text=Sports+Tracker+-+Dashboard",
        "https://placehold.co/800x450/e8ddd1/4a4a4a?text=Sports+Tracker+-+Players",
        "https://placehold.co/800x450/e8ddd1/4a4a4a?text=Sports+Tracker+-+Stats",
      ],
      captions: [
        "Dashboard with session overview",
        "Player management view",
        "Performance statistics",
      ],
    },
    {
      title: "Grading Application",
      description:
        "A grading application built to gain hands-on experience with Vue.js and Python. Handles grade calculations, data flow between frontend and backend, and interactive UI.",
      tags: ["Vue.js", "Python", "HTML", "CSS"],
      url: "#",
      images: [],
      captions: [],
    },
    // To add a new project:
    // {
    //   title: "Project Name",
    //   description: "What it does.",
    //   tags: ["Tech1", "Tech2"],
    //   url: "https://...",
    //   images: ["/images/screen1.png"],
    //   captions: ["What the screenshot shows"],
    // },
  ],

  // ── CAREER GOAL (shown in the contact section) ──
  goal: "My goal is to continue growing as a Web Developer by combining my real-world experience with modern web development technologies. I am open to opportunities where I can contribute my existing experience while continuing to learn and grow.",
} as const;
