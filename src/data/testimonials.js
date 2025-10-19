// Client testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Field Focus Agency",
    image: null, // Will be added later
    quote: "Working with Luka was an absolute pleasure. He delivered a stunning, modern website that perfectly captured our brand vision. His attention to detail and technical expertise are outstanding.",
    rating: 5,
    project: "Field Focus Website"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Platinum Media",
    image: null,
    quote: "Luka transformed our online presence with a beautifully designed, responsive website. His professionalism and ability to understand our needs made the entire process smooth and efficient.",
    rating: 5,
    project: "Platinum Media Website"
  },
  {
    id: 3,
    name: "David Martinez",
    role: "Operations Manager",
    company: "Playmaker Group",
    image: null,
    quote: "The website Luka built for us exceeded our expectations. Fast, clean, and exactly what we needed to showcase our services. Highly recommended for anyone looking for quality web development.",
    rating: 5,
    project: "Playmaker Group Website"
  },
  {
    id: 4,
    name: "Emma Laurent",
    role: "Creative Director",
    company: "L'ÉQUIPE Management",
    image: null,
    quote: "Luka's creative approach and technical skills resulted in an elegant, user-friendly website that perfectly represents our talent agency. His dedication to excellence is evident in every detail.",
    rating: 5,
    project: "L'ÉQUIPE Website"
  }
];

// Testimonial stats
export const testimonialStats = {
  totalTestimonials: testimonials.length,
  averageRating: testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length,
  satisfiedClients: testimonials.filter(t => t.rating >= 4).length
};
