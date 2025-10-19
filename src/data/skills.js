// Skills data
export const skillCategories = [
  {
    category: "core",
    title: "Core Technologies",
    skills: [
      {
        name: "HTML5",
        description: "Semantic markup, accessibility, SEO-friendly structure",
        proficiency: 95
      },
      {
        name: "CSS3",
        description: "Flexbox, Grid, animations, custom properties",
        proficiency: 95
      },
      {
        name: "Bootstrap 5",
        description: "Responsive grid system, components, utilities, customization",
        proficiency: 90
      },
      {
        name: "JavaScript ES6+",
        description: "Async/await, promises, destructuring, functional programming",
        proficiency: 90
      }
    ]
  },
  {
    category: "frameworks",
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "React",
        description: "Hooks, state management, component composition, optimization",
        proficiency: 85
      },
      {
        name: "TailwindCSS",
        description: "Utility-first CSS, custom configurations, responsive patterns",
        proficiency: 90
      }
    ]
  },
  {
    category: "tools",
    title: "Tools & Workflow",
    skills: [
      {
        name: "Git",
        description: "Workflows, branching strategies, GitHub/GitLab",
        proficiency: 85
      },
      {
        name: "Vite",
        description: "Fast build tool, HMR, optimized bundling",
        proficiency: 80
      },
      {
        name: "VSCode",
        description: "Extensions, debugging, integrated terminal",
        proficiency: 90
      }
    ]
  },
  {
    category: "responsive-design",
    title: "Design & UX",
    skills: [
      {
        name: "Mobile-First Design",
        description: "Cross-browser, accessibility, progressive enhancement",
        proficiency: 90
      }
    ]
  }
];

// Tools list
export const tools = [
  "Vite",
  "Webpack",
  "npm/yarn",
  "VS Code",
  "Chrome DevTools",
  "Postman"
];

// Work approach principles
export const workApproach = [
  {
    title: "Mobile-First Development",
    description: "Building from mobile up ensures optimal experience across all devices"
  },
  {
    title: "Clean Code Practices",
    description: "Writing maintainable, readable code that follows industry standards"
  },
  {
    title: "Cross-Browser Compatibility",
    description: "Ensuring consistent functionality across all major browsers"
  },
  {
    title: "Performance Optimization",
    description: "Implementing best practices for fast load times and smooth interactions"
  }
];

// Quick skills list (for about section)
export const quickSkills = [
  "HTML/CSS",
  "JavaScript",
  "Bootstrap",
  "React",
  "Responsive Design"
];
