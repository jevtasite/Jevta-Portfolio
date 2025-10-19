// Projects portfolio data
export const projects = [
  {
    id: 1,
    name: "Field Focus",
    description: "Modern agency landing page with sleek design and smooth animations. Built to showcase agency services with a focus on performance and user experience.",
    url: "https://fieldfocus.agency/",
    image: null, // Can be added later
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    type: "Web Design & Development",
    category: "Agency Website",
    year: "2024",
    features: [
      "Modern agency landing page",
      "Smooth scroll animations",
      "Mobile-first responsive design",
      "Performance optimized"
    ],
    challenges: [
      "Cross-browser compatibility",
      "Optimizing loading times",
      "Creating engaging animations"
    ],
    status: "Live"
  },
  {
    id: 2,
    name: "Platinum Media",
    description: "Professional media agency website featuring an interactive portfolio gallery and dynamic content sections. Designed to highlight creative work and services.",
    url: "https://platinumedia.site/",
    image: null,
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    type: "Web Design & Development",
    category: "Media Agency",
    year: "2024",
    features: [
      "Professional media agency site",
      "Interactive portfolio gallery",
      "Dynamic content sections",
      "SEO optimized structure"
    ],
    challenges: [
      "Image optimization for fast loading",
      "Creating intuitive navigation",
      "Maintaining brand consistency"
    ],
    status: "Live"
  },
  {
    id: 3,
    name: "Playmaker Group",
    description: "Sports management platform showcasing clients and services. Built with a focus on professionalism and easy navigation for potential clients.",
    url: "https://playmakergroup.net",
    image: null,
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    type: "Web Design & Development",
    category: "Sports Management",
    year: "2024",
    features: [
      "Sports management platform",
      "Client showcase sections",
      "Contact integration",
      "Multi-page navigation"
    ],
    challenges: [
      "Organizing complex information",
      "Creating professional layout",
      "Ensuring mobile usability"
    ],
    status: "Live"
  },
  {
    id: 4,
    name: "L'ÉQUIPE",
    description: "Elegant talent management website showcasing diverse artists and performers. Designed with a focus on visual hierarchy and smooth user experience.",
    url: "https://l-equipe-management.com/",
    image: null,
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    type: "Web Design & Development",
    category: "Talent Management",
    year: "2024",
    features: [
      "Talent management website",
      "Artist portfolio displays",
      "Elegant design system",
      "Smooth page transitions"
    ],
    challenges: [
      "Showcasing diverse talent",
      "Creating visual hierarchy",
      "Balancing aesthetics with performance"
    ],
    status: "Live"
  }
];

// Project categories for filtering
export const projectCategories = [
  "All",
  "Agency Website",
  "Media Agency",
  "Sports Management",
  "Talent Management"
];

// Project stats
export const projectStats = {
  totalProjects: projects.length,
  liveProjects: projects.filter(p => p.status === "Live").length,
  technologies: [...new Set(projects.flatMap(p => p.tech))],
  yearsActive: "2023 - Present"
};
