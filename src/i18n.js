import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      services: "Services",
      stats: "Stats",
      contact: "Contact",

      // Hero Section
      "hero.greeting": "Initializing system...",
      "hero.systemReady": "System ready.",
      "hero.buildGreat": "Let's build something great!",
      "hero.exploreWork": "Explore my work below.",
      "hero.name": "I'm Luka Stoiljković",
      "hero.role": "Front-end Developer",
      "hero.explore": "Type",
      "hero.help": "help",
      "hero.toExplore": "in terminal to explore",
      "hero.or": "or",
      "hero.ls": "ls",
      "hero.toSeeAll": "to see all sections",

      // About Section
      "about.whoami": "whoami",
      "about.profileInfo": "Profile Information",
      "about.fullName": "Full Name",
      "about.birthDate": "Birth Date",
      "about.birthDay": "July 3rd, 2005",
      "about.job": "Job",
      "about.jobTitle": "Front-end Developer",
      "about.website": "Website",
      "about.email": "Email",
      "about.aboutMe": "About Me",
      "about.bio1":
        "Hello! I'm Luka Stoiljković, a passionate front-end developer who loves creating beautiful and functional web experiences.",
      "about.bio2":
        "I specialize in modern web technologies and have a keen eye for design. My goal is to build websites that not only look great but also provide excellent user experiences.",
      "about.bio3":
        "When I'm not in VSCode, I’m probably experimenting with new tools, sketching ideas for my next project, or diving into tech communities online.",
      "about.quickSkills": "Quick Skills Overview",
      "about.detailedSkills": "for detailed skills",
      "about.hireMe": "Hire Me",

      // Skills Section
      "skills.title": "Technical Skills",
      "skills.htmlCss": "HTML/CSS",
      "skills.htmlCssDesc":
        "Expert in semantic HTML5 and modern CSS3, including Flexbox, Grid, animations, and responsive design principles.",
      "skills.javascript": "JavaScript/ES6+",
      "skills.javascriptDesc":
        "Proficient in modern JavaScript, async/await, promises, destructuring, and functional programming concepts.",
      "skills.react": "React",
      "skills.reactDesc":
        "Building dynamic user interfaces with React hooks, state management, component composition, and performance optimization.",
      "skills.tailwind": "Tailwind CSS",
      "skills.tailwindDesc":
        "Rapid UI development with utility-first CSS framework, custom configurations, and responsive design patterns.",
      "skills.git": "Git & Version Control",
      "skills.gitDesc":
        "Experienced with Git workflows, branching strategies, collaborative development, and GitHub/GitLab platforms.",
      "skills.responsive": "Responsive Design",
      "skills.responsiveDesc":
        "Mobile-first approach, cross-browser compatibility, accessibility standards, and progressive enhancement.",
      "skills.tools": "Tools & Technologies",
      "skills.learning": "Currently Learning",
      "skills.workApproach": "Work Approach",
      "skills.mobileFirst": "Mobile-First & Responsive Design",
      "skills.mobileFirstDesc": "Every project starts with mobile optimization",
      "skills.cleanCode": "Clean, Maintainable Code",
      "skills.cleanCodeDesc": "Writing code that's easy to read and modify",
      "skills.crossBrowser": "Cross-Browser Compatibility",
      "skills.crossBrowserDesc":
        "Ensuring consistent experience across all browsers",
      "skills.performance": "Performance Optimization",
      "skills.performanceDesc": "Fast load times and smooth interactions",

      // Experience Section
      "experience.title": "Work Experience",
      "experience.internship": "Internship",
      "experience.freelance": "Freelance",
      "experience.esencaDesc":
        "Completed a comprehensive front-end development internship where I worked on real-world projects, learned industry best practices, and collaborated with experienced developers. Gained hands-on experience with modern web technologies and agile development methodologies.",
      "experience.freelanceDesc":
        "Working independently on various web development projects for clients. Specializing in creating modern, responsive websites with clean code and excellent user experiences. Managing all aspects of projects from client communication to deployment.",
      "experience.technologies": "Technologies used",
      "experience.certificate": "View Certificate",
      "experience.status":
        "Currently open to new opportunities and exciting projects!",

      // Portfolio Section
      "portfolio.title": "Portfolio Projects",
      "portfolio.fieldFocus":
        "A modern, responsive website for Field Focus Agency, designed to showcase services with clean visuals and optimized performance.",
      "portfolio.platinumMedia":
        "Creative agency portfolio website with dynamic content, smooth animations, and an engaging user interface designed to highlight their creative work and services.",
      "portfolio.playmaker":
        "Sports management and consulting platform featuring a clean, professional design with emphasis on user experience and mobile responsiveness.",
      "portfolio.lequipe":
        "Elegant website for a talent management company with sophisticated design, smooth transitions, and intuitive navigation to showcase their roster and services.",
      "portfolio.webDesign": "Web Design & Development",
      "portfolio.stack": "Stack",
      "portfolio.launch": "Launch Project",
      "portfolio.moreComing": "More projects coming soon...",

      // Services Section
      "services.title": "Services Offered",
      "services.webDev": "Web Development",
      "services.webDevDesc":
        "Building modern, responsive websites with clean code and best practices. From landing pages to complex web applications, I create solutions that are fast, accessible, and maintainable.",
      "services.uiux": "UI/UX Design",
      "services.uiuxDesc":
        "Creating intuitive and visually appealing user interfaces that enhance user experience. Focus on usability, accessibility, and modern design principles to deliver engaging digital experiences.",
      "services.consultancy": "Consultancy",
      "services.consultancyDesc":
        "Providing expert advice on web development projects, technical decisions, and digital strategy. Help you choose the right technologies and approaches for your specific needs.",
      "services.features": "Features",
      "services.workTogether": "Let's Work Together",
      "services.workTogetherDesc":
        "Have a project in mind? I'm available for freelance work and collaborations. Let's create something amazing together!",
      "services.getInTouch": "Get In Touch",

      // Stats Section
      "stats.title": "System Statistics",
      "stats.yearsExp": "Years of Experience",
      "stats.clients": "Happy Clients",
      "stats.projects": "Projects Completed",
      "stats.hours": "Hours of Coding",
      "stats.activeProjects": "Active Projects",
      "stats.uptime": "Uptime & Availability",
      "stats.responseTime": "Response Time",
      "stats.lessThan24": "< 24 hours",
      "stats.availability": "Availability",
      "stats.high": "High",
      "stats.status": "Status",
      "stats.online": "Online",

      // Contact Section
      "contact.title": "Get In Touch",
      "contact.email": "Email",
      "contact.emailDesc":
        "Send me an email and I'll get back to you as soon as possible!",
      "contact.openGmail": "Open Gmail Composer",
      "contact.responseTime": "Response Time",
      "contact.within24": "Usually within 24 hours",
      "contact.availableFreelance": "Available for freelance work",
      "contact.openCollabs": "Open to collaborations",
      "contact.socialLinks": "Social Links",
      "contact.location": "Location & Info",
      "contact.locationValue": "Serbia",
      "contact.timezone": "Timezone",
      "contact.timezoneValue": "UTC+1 (CET)",
      "contact.languages": "Languages",
      "contact.languagesValue": "EN / SR",
      "contact.lookingForward": "Looking forward to hearing from you!",

      // Footer
      "footer.tagline":
        "Front-end Developer crafting modern web experiences with clean code and creative design.",
      "footer.quickLinks": "Quick Links",
      "footer.connect": "Connect",
      "footer.copyright": "© Copyright 2025",
      "footer.allRights": "All Rights Reserved",
      "footer.backToTop": "Back to Top",
      "footer.thanks": "Thanks for visiting! Type 'help' to explore more.",

      // Commands
      "cmd.help": "Show this help message",
      "cmd.ls": "List all sections",
      "cmd.cd": "Navigate to section",
      "cmd.cat": "Display section content",
      "cmd.clear": "Clear terminal output",
      "cmd.whoami": "Show info about me",
      "cmd.flappy": "Play Flappy Bird game",
      "cmd.bird": "Play Flappy Bird game",
      "cmd.history": "Show command history",
    },
  },
  sr: {
    translation: {
      // Navigation
      home: "Početna",
      about: "O meni",
      skills: "Veštine",
      experience: "Iskustvo",
      projects: "Projekti",
      services: "Usluge",
      stats: "Statistika",
      contact: "Kontakt",

      // Hero Section
      "hero.greeting": "Pokretanje sistema...",
      "hero.systemReady": "Sistem spreman.",
      "hero.buildGreat": "Hajde da napravimo nešto sjajno!",
      "hero.exploreWork": "Pogledaj moj rad ispod.",
      "hero.name": "Ja sam Luka Stoiljković",
      "hero.role": "Front-end Developer",
      "hero.explore": "Otkucaj",
      "hero.help": "help",
      "hero.toExplore": "u konzoli da istražiš",
      "hero.or": "ili",
      "hero.ls": "ls",
      "hero.toSeeAll": "da vidiš sve sekcije",

      // About Section
      "about.whoami": "ko sam ja",
      "about.profileInfo": "Informacije o profilu",
      "about.fullName": "Ime i prezime",
      "about.birthDate": "Datum rođenja",
      "about.birthDay": "3. jul 2005.",
      "about.job": "Posao",
      "about.jobTitle": "Front-end Developer",
      "about.website": "Veb sajt",
      "about.email": "Email",
      "about.aboutMe": "O meni",
      "about.bio1":
        "Zdravo! Ja sam Luka Stoiljković, strastveni sam front-end developer koji voli da kreira lepe i funkcionalne veb stranice.",
      "about.bio2":
        "Specijalizovan sam za moderne veb tehnologije i imam dobro oko za dizajn. Moj cilj je da gradim veb sajtove koji ne samo da izgledaju odlično, već i pružaju najbolje korisničko iskustvo.",
      "about.bio3":
        "Kad nisam u VSCode-u, verovatno spavam, igram igrice, isprobavam nove alate ili skiciram ideje za sledeći projekat.",
      "about.quickSkills": "Pregled veština",
      "about.detailedSkills": "za detaljne veštine",
      "about.hireMe": "Zaposli me",

      // Skills Section
      "skills.title": "Tehničke veštine",
      "skills.htmlCss": "HTML/CSS",
      "skills.htmlCssDesc":
        "Stručnjak u semantičkom HTML5 i modernom CSS3, uključujući Flexbox, Grid, animacije i principe responzivnog dizajna.",
      "skills.javascript": "JavaScript/ES6+",
      "skills.javascriptDesc":
        "Veštine u modernom JavaScript-u, async/await, promises, destructuring i funkcionalnom programiranju.",
      "skills.react": "React",
      "skills.reactDesc":
        "Izgradnja dinamičkih korisničkih interfejsa sa React hooks, state management, kompozicijom komponenti i optimizacijom performansi.",
      "skills.tailwind": "Tailwind CSS",
      "skills.tailwindDesc":
        "Brzi razvoj UI-a sa utility-first CSS framework-om, prilagođenim konfiguracijama i responzivnim dizajn šablonima.",
      "skills.git": "Git & Version Control",
      "skills.gitDesc":
        "Iskustvo sa Git workflow-ima, strategijama grananja, kolaborativnim razvojem i GitHub/GitLab platformama.",
      "skills.responsive": "Responzivni dizajn",
      "skills.responsiveDesc":
        "Mobile-first pristup, kompatibilnost između browser-a, standardi pristupačnosti i progresivno unapređenje.",
      "skills.tools": "Alati & Tehnologije",
      "skills.learning": "Trenutno učim",
      "skills.workApproach": "Radni pristup",
      "skills.mobileFirst": "Mobile-First & Responzivni dizajn",
      "skills.mobileFirstDesc":
        "Svaki projekat počinje sa mobilnom optimizacijom",
      "skills.cleanCode": "Čist, održiv kod",
      "skills.cleanCodeDesc": "Pisanje koda koji je lako čitati i menjati",
      "skills.crossBrowser": "Kompatibilnost između browser-a",
      "skills.crossBrowserDesc":
        "Obezbeđivanje da sajt izgleda i radi isto na svim browser-ima.",
      "skills.performance": "Optimizacija performansi",
      "skills.performanceDesc": "Brzo učitavanje i lako korišćenje",

      // Experience Section
      "experience.title": "Radno iskustvo",
      "experience.internship": "Praksa",
      "experience.freelance": "Freelance",
      "experience.esencaDesc":
        "Završio sam sveobuhvatnu praksu front-end development-a gde sam radio na realnim projektima, učio najbolje prakse u industriji i sarađivao sa iskusnim programerima. Stekao sam praktično iskustvo sa modernim veb tehnologijama i agile metodologijama razvoja.",
      "experience.freelanceDesc":
        "Radim samostalno na različitim projektima za klijente. Specijalizujem se za kreiranje modernih, responzivnih veb sajtova sa čistim kodom i odličnim korisničkim iskustvom. Upravljam svim aspektima projekata od komunikacije sa klijentima do implementacije.",
      "experience.technologies": "Korišćene tehnologije",
      "experience.certificate": "Pogledaj sertifikat",
      "experience.status":
        "Trenutno otvoren za nove prilike i uzbudljive projekte!",

      // Portfolio Section
      "portfolio.title": "Portfolio projekti",
      "portfolio.fieldFocus":
        "Moderan, responzivan sajt za Field Focus Agency, dizajniran da prikaže njihove usluge kroz čist dizajn i optimizovane performanse.",
      "portfolio.platinumMedia":
        "Portfolio veb sajt kreativne agencije sa dinamičkim sadržajem, animacijama i privlačnim korisničkim interfejsom dizajniranim da istakne njihov kreativan rad i usluge.",
      "portfolio.playmaker":
        "Sportska menadžment i konsultantska platforma sa čistim, profesionalnim dizajnom sa naglaskom na korisničko iskustvo i mobilnu responzivnost.",
      "portfolio.lequipe":
        "Elegantan veb sajt za kompaniju za menadžment talenata sa sofisticiranim dizajnom, prelazima i intuitivnom navigacijom za prikazivanje njihovog roster-a i usluga.",
      "portfolio.webDesign": "Veb dizajn i razvoj",
      "portfolio.stack": "Tehnologije",
      "portfolio.launch": "Pokreni projekat",
      "portfolio.moreComing": "Više projekata uskoro...",

      // Services Section
      "services.title": "Ponuđene usluge",
      "services.webDev": "Veb programiranje",
      "services.webDevDesc":
        "Gradnja modernih, responzivnih veb sajtova sa čistim kodom i najboljim praksama. Od landing stranica do kompleksnih veb aplikacija, kreiram rešenja koja su brza, pristupačna i održiva.",
      "services.uiux": "UI/UX dizajn",
      "services.uiuxDesc":
        "Kreiranje intuitivnih i vizuelno privlačnih korisničkih interfejsa koji poboljšavaju korisničko iskustvo. Fokus na upotrebljivost, pristupačnost i moderne principe dizajna za isporuku angažujućih digitalnih iskustava.",
      "services.consultancy": "Konsalting",
      "services.consultancyDesc":
        "Pružanje stručnih saveta o projektima, tehničkim odlukama i digitalnoj strategiji. Pomažem vam da odaberete prave tehnologije i pristupe za vaše specifične potrebe.",
      "services.features": "Karakteristike",
      "services.workTogether": "Hajde da sarađujemo",
      "services.workTogetherDesc":
        "Imaš projekat na umu? Dostupan sam za freelance rad i saradnje. Hajde da napravimo nešto neverovatno zajedno!",
      "services.getInTouch": "Stupi u kontakt",

      // Stats Section
      "stats.title": "Sistemska statistika",
      "stats.yearsExp": "Godine iskustva",
      "stats.clients": "Zadovoljnih klijenata",
      "stats.projects": "Završenih projekata",
      "stats.hours": "Sati programiranja",
      "stats.activeProjects": "Aktivni projekti",
      "stats.uptime": "Dostupnost",
      "stats.responseTime": "Vreme odgovora",
      "stats.lessThan24": "< 24 sata",
      "stats.availability": "Raspoloživost",
      "stats.high": "Visoka",
      "stats.status": "Status",
      "stats.online": "Online",

      // Contact Section
      "contact.title": "Stupi u kontakt",
      "contact.email": "Email",
      "contact.emailDesc": "Pošalji mi email i javiću ti se što pre!",
      "contact.openGmail": "Otvori Gmail",
      "contact.responseTime": "Vreme odgovora",
      "contact.within24": "Obično u roku od 24 sata",
      "contact.availableFreelance": "Dostupan za freelance rad",
      "contact.openCollabs": "Otvoren za saradnje",
      "contact.socialLinks": "Društvene mreže",
      "contact.location": "Lokacija i info",
      "contact.locationValue": "Srbija",
      "contact.timezone": "Vremenska zona",
      "contact.timezoneValue": "UTC+1 (CET)",
      "contact.languages": "Jezici",
      "contact.languagesValue": "EN / SR",
      "contact.lookingForward": "Radujem se tvom odgovoru!",

      // Footer
      "footer.tagline":
        "Front-end Developer koji pravi moderne veb sajtove sa čistim kodom i kreativnim dizajnom.",
      "footer.quickLinks": "Brzi linkovi",
      "footer.connect": "Poveži se",
      "footer.copyright": "© Copyright 2025",
      "footer.allRights": "Sva prava zadržana",
      "footer.backToTop": "Nazad na vrh",
      "footer.thanks": "Hvala što si posetio! Otkucaj 'help' da istražiš više.",

      // Commands
      "cmd.help": "Prikaži ovu pomoć",
      "cmd.ls": "Izlistaj sve sekcije",
      "cmd.cd": "Navigiraj do sekcije",
      "cmd.cat": "Prikaži sadržaj sekcije",
      "cmd.clear": "Očisti terminal",
      "cmd.whoami": "Prikaži informacije o meni",
      "cmd.flappy": "Igraj Flappy Bird igru",
      "cmd.bird": "Igraj Flappy Bird igru",
      "cmd.history": "Prikaži istoriju komandi",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
