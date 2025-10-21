// Client testimonials
export const testimonials = [
  {
    id: 1,
    name: "Dušan Živković",
    role: "Marketing Director",
    company: "Field Focus Agency",
    image: null, // Will be added later
    quote:
      "Luka perfectly captured our creative energy with a sleek, high-performing site that brings our storytelling to life.”",
    rating: 5,
    project: "Field Focus Website",
    date: "2025-09-15",
    timestamp: "2025-09-15 14:23:11",
  },
  {
    id: 2,
    name: "Lazar Jonev",
    role: "CEO",
    company: "Platinum Media",
    image: null,
    quote:
      "The website reflects our identity perfectly — bold, professional, and full of passion. Luka nailed every detail.",
    rating: 5,
    project: "Platinum Media Website",
    date: "2023-10-09",
    timestamp: "2023-10-09 09:45:33",
  },
  {
    id: 3,
    name: "Lazar Stojanović",
    role: "Operations Manager",
    company: "Playmaker Group",
    image: null,
    quote:
      "Dynamic, powerful, and beautifully executed. Luka turned our vision into a site that truly represents our brand.",
    rating: 5,
    project: "Playmaker Group Website",
    date: "2023-09-10",
    timestamp: "2023-09-10 16:12:45",
  },
  {
    id: 4,
    name: "Espoir Nublasso",
    role: "Creative Director",
    company: "L'ÉQUIPE",
    image: null,
    quote:
      "Elegant, precise, and true to our values. Luka delivered a refined website that embodies who we are.",
    rating: 5,
    project: "L'ÉQUIPE Website",
    date: "2023-11-03",
    timestamp: "2023-11-03 11:30:22",
  },
];

// Testimonial stats
export const testimonialStats = {
  totalTestimonials: testimonials.length,
  averageRating:
    testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length,
  satisfiedClients: testimonials.filter((t) => t.rating >= 4).length,
};
