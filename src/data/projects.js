// Projects portfolio data
export const projects = [
  {
    id: 1,
    name: "Field Focus",
    description:
      "Creative agency landing page capturing the energy of sports storytelling, built for performance, visuals, and smooth user experience.",
    url: "https://fieldfocus.agency/",
    image: null, // Can be added later
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    type: "Web Design & Development",
    category: "Agency Website",
    year: "2024",
    features: [
      "Modern creative layout",
      "Smooth animations",
      "Mobile-first design",
      "Optimized performance",
    ],
    challenges: [
      "Fast load times with rich visuals",
      "Cross-device animation stability",
      "Balancing creativity and speed",
    ],
    status: "Live",
  },
  {
    id: 2,
    name: "Platinum Media",
    description:
      "Modern agency website blending sports culture and creativity. Built to highlight Platinum Media’s visual storytelling and connection with athletes and fans.",
    url: "https://platinumedia.site/",
    image: null,
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    type: "Web Design & Development",
    category: "Media Agency",
    year: "2024",
    features: [
      "Sports-focused design",
      "Dynamic visuals",
      "Fully responsive",
      "SEO optimized structure",
    ],
    challenges: [
      "Handling heavy media efficiently",
      "Consistent look across devices",
      "Capturing the energy of sport",
    ],
    status: "Live",
  },
  {
    id: 3,
    name: "Playmaker Group",
    description:
      "Sleek and engaging agency page reflecting Playmaker’s mission to turn football moments into powerful digital stories.",
    url: "https://playmakergroup.net",
    image: null,
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    type: "Web Design & Development",
    category: "Sports Management",
    year: "2024",
    features: [
      "Bold, modern layout",
      "Subtle motion effects",
      "Clean, brand-focused UI",
      "Multi-page navigation",
    ],
    challenges: [
      "Smooth athletic-style motion",
      "Strong visual identity",
      "Balancing design and clarity",
    ],
    status: "Live",
  },
  {
    id: 4,
    name: "L'ÉQUIPE",
    description:
      "Refined agency website capturing L'ÉQUIPE’s mission to guide players with precision, integrity, and long-term vision on and off the pitch.",
    url: "https://l-equipe-management.com/",
    image: null,
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    type: "Web Design & Development",
    category: "Talent Management",
    year: "2024",
    features: [
      "Talent management website",
      "Smooth transitions",
      "Elegant design system",
      "Responsive across all devices",
    ],
    challenges: [
      "Reflecting brand values",
      "Maintaining performance",
      "Merging modern and classic style",
    ],
    status: "Live",
  },
];

// Project categories for filtering
export const projectCategories = [
  "All",
  "Agency Website",
  "Media Agency",
  "Sports Management",
  "Talent Management",
];

// Project stats
export const projectStats = {
  totalProjects: projects.length,
  liveProjects: projects.filter((p) => p.status === "Live").length,
  technologies: [...new Set(projects.flatMap((p) => p.tech))],
  yearsActive: "2023 - Present",
};
