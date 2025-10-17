# Terminal Portfolio Website - Complete Specification

## Project Overview

Build a personal portfolio website for Luka Stoiljković (Jevta) with a **Terminal Core** design system. The entire site should feel like a living terminal interface with command-line navigation and authentic CLI aesthetics.

---

## Technology Stack

### Core Framework

- **React 18** with Hooks
- **Vite** (build tool and dev server)
- **React Router DOM** (for navigation)

### Styling & Animation

- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (animations and transitions)

### State Management

- **Zustand** (lightweight state management for terminal command history)

### Fonts

- **Fira Code** (Display/Headers/ASCII art)
- **Berkeley Mono** (Body text)
- **SF Mono** (Interface/Navigation)

### Additional Libraries

- **lucide-react** (icons)
- **react-type-animation** (typing effects)

### Deployment

- **Vercel** or **Netlify**

---

## Design System - Terminal Core

### Color Palette

```css
--matrix-green: #00FF41      /* Primary - Active state, success */
--lime-terminal: #39FF14     /* Secondary - Secondary actions */
--cyber-magenta: #FF00FF     /* Accent - Critical highlights */
--terminal-black: #0D0208    /* Background - Deep focus */
--elevated-black: #1A1A1A    /* Surface - Card backgrounds */
--comment-green: #6A9955     /* Comment - Secondary text */
--error-red: #FF6B6B         /* Error states */
```

### Typography

- **Fira Code**: Hero ASCII art, Section Headers (42px, weight 600)
- **Berkeley Mono**: Body text (16px/1.6, weight 400), Code blocks (14px/1.4)
- **SF Mono**: Navigation (13px, weight 500), Timestamps (11px)

### Spacing System

- Grid: 80-character width constraint (terminal-like)
- Scale: 8, 16, 24, 32, 48, 64px (byte-aligned)
- Container: Fixed 1024px (768px mobile)
- Line Height: Strict 24px baseline
- Padding: 16px universal

### Motion Principles

- **Easing**: Step functions (5-10 steps) - NO smooth curves
- **Text Reveal**: Character-by-character typing (60ms per character)
- **Hover**: ASCII art transformations
- **Scroll**: Line-by-line scrolling effect
- **Transitions**: Glitch effects between sections
- **Background**: Matrix rain effect at 10% opacity

---

## Signature Visual Element

### Living Terminal Window

The entire website should be contained within a terminal emulator UI:

- Terminal window chrome with minimize/maximize/close buttons
- Working command line at the bottom of the page
- Typing commands navigates to sections (e.g., `cd about`, `ls projects`, `cat resume`)
- Blinking cursor animation
- Optional: Scan lines and subtle CRT screen effects
- Terminal prompt: `user@jevta.site:~$`

---

## Site Structure & Content

### 1. Hero / Intro Section

**Content:**

- ASCII art logo/name "JEVTA" or "LUKA STOILJKOVIĆ"
- Typing animation: "Hello, World." then reveals role
- Role: "Front-end Developer"
- CTA: Terminal command prompt inviting user to type `help` or `ls`

**Design:**

- Full viewport height
- Matrix rain background effect (10% opacity)
- Centered ASCII art
- Blinking cursor

---

### 2. About Section

**Content:**

- **Heading**: "whoami" or "cat about.txt"
- **Profile Picture**: Display in ASCII art style or pixelated
- **Bio**: Brief introduction about Luka
- **Details**:
  - Full Name: Luka Stoiljković
  - Birth Date: [Use from original site]
  - Job: Front-end Developer
  - Website: jevta.site
  - Email: jevta.site@gmail.com

**Design:**

- Format as terminal output
- Use `>` or `$` prefixes for each line
- Green text on black background
- Character-by-character reveal on scroll

---

### 3. Skills Section

**Content:**

- **Heading**: "ls skills/" or "cat skills.json"
- **Skills**:
  - HTML/CSS: [description from original]
  - Bootstrap: [description]
  - JavaScript: [description]
  - jQuery: [description]
  - AJAX/JSON: [description]

**Design:**

- Display as JSON structure or terminal list output
- Animated typing effect on reveal
- Use comment green (#6A9955) for skill names
- Progress indicators as loading bars (ASCII style: `[████████--]`)

---

### 4. Experience / Resume Section

**Content:**

- **Heading**: "cat experience.log"
- **Work Experience**:
  1. **Internship** at Esenca Software
     - Date: [from original site]
     - Description: [from original]
     - Certificate link
  2. **Freelance** work
     - Date: [from original]

**Design:**

- Timeline as terminal log entries with timestamps
- Each entry prefixed with `[timestamp]`
- Links styled as file paths: `./certificates/esenca.pdf`

---

### 5. Portfolio / Projects Section

**Content:**

- **Heading**: "ls projects/" or "tree projects/"
- **Projects**:

  1. **Field Focus**

     - Description: [from original]
     - Link: https://fieldfocus.agency/
     - Tech: Web Design, Front-end Development

  2. **Platinum Media**

     - Description: [from original]
     - Link: https://platinumedia.site/
     - Tech: Web Design, Front-end Development

  3. **Playmaker Group**

     - Description: [from original]
     - Link: https://playmakergroup.net
     - Tech: Web Design, Front-end Development

  4. **L'ÉQUIPE**
     - Description: [from original]
     - Link: https://l-equipe-management.com/
     - Tech: Web Design, Front-end Development

**Design:**

- Display as directory listing with file structure
- Project cards as terminal windows
- Hover reveals project details with glitch effect
- Links styled as executable files with `.sh` or `.exe` extensions

---

### 6. Services Section

**Content:**

- **Heading**: "cat services.md"
- **Services**:
  1. Web Development: [description from original]
  2. Branding: [description from original]
  3. Consultancy: [description from original]

**Design:**

- Markdown-style formatting in terminal
- Each service as a code block with syntax highlighting
- Icons represented as ASCII art

---

### 7. Stats Section

**Content:**

- **Heading**: "system stats" or "top"
- **Stats**:
  - 2+ Years of Experience
  - 5+ Happy Clients
  - 10+ Projects Completed
  - 2800+ Hours of Coding

**Design:**

- Display as system monitor output (like `top` or `htop` command)
- Animated counters with terminal-style increments
- ASCII progress bars
- Blinking cursor effect

---

### 8. Contact Section

**Content:**

- **Heading**: "ping contact" or "mail -s"
- **Email**: jevta.site@gmail.com (clickable - opens Gmail)
- **Social Links**:
  - Facebook: https://www.facebook.com/profile.php?id=61552420501147
  - GitHub: https://github.com/jevtasite
  - Instagram: https://www.instagram.com/jevta.site/

**Design:**

- Contact form styled as mail composer in terminal
- Email input with terminal prompt style
- Submit button: "send_message.sh" or `ctrl+d`
- Success message: "Message sent successfully [✓]"
- Error message in red (#FF6B6B)

---

### 9. Footer

**Content:**

- Social media icons (ASCII art style)
- Copyright: "Jevta © Copyright 2025"
- Back to top button (styled as `cd ~` command)

**Design:**

- Minimal footer bar
- Matrix green text
- Links as terminal commands

---

## Interactive Terminal Features

### Command Line Interface

Implement a working command line at the bottom of the page:

**Available Commands:**

- `help` - Show available commands
- `ls` - List all sections
- `cd [section]` - Navigate to section (about, skills, projects, contact, etc.)
- `cat [file]` - Display section content
- `clear` - Clear terminal output
- `whoami` - Show info about Luka
- `history` - Show command history
- `exit` - Fun easter egg (maybe a joke or animation)

**Design:**

- Fixed position at bottom
- Full width
- Prompt: `user@jevta.site:~$ `
- Blinking cursor
- Command history (up/down arrows)
- Auto-complete on Tab

---

## Animations & Effects

### Text Animations

- **Typing Effect**: 60ms per character
- **Glitch Transitions**: Between sections (brief digital distortion)
- **Character Reveal**: Line-by-line on scroll

### Background Effects

- **Matrix Rain**: Falling characters (10% opacity)
- **Scan Lines**: Subtle horizontal lines moving down (optional)
- **CRT Glow**: Slight green glow around text (optional)

### Hover Effects

- ASCII art transformation on hover
- Color shift: gray → matrix green
- Brief glitch effect

### Scroll Behavior

- Smooth line-by-line scrolling
- Section reveals with typing animation
- Progress indicator as scrollbar styled like loading bar

---

## Responsive Design

### Desktop (1024px+)

- Full terminal window with command line
- 80-character width constraint
- All effects enabled

### Tablet (768px - 1023px)

- Simplified terminal chrome
- Adjusted container to 768px
- Reduced animation complexity

### Mobile (< 768px)

- Minimalist terminal UI
- Command line hidden or simplified
- Stack sections vertically
- Tap navigation instead of commands
- Essential animations only

---

## Accessibility

- Keyboard navigation support
- Screen reader friendly (ARIA labels)
- High contrast mode support
- Reduced motion option (respects `prefers-reduced-motion`)
- Focus indicators visible

---

## Performance Optimization

- Lazy load sections
- Optimize ASCII art rendering
- Throttle animation frame rates
- Code splitting with React.lazy
- Image optimization (use WebP for screenshots)
- Minimize bundle size

---

## Multi-language Support (Optional)

From the original site, there was Serbian/English toggle:

- Store translations in JSON files
- Language switcher in header (styled as command flag: `--lang=en` / `--lang=sr`)
- Use React Context for language state

---

## SEO & Meta Tags

```html
<title>Luka Stoiljković | Front-end Developer | Jevta</title>
<meta
  name="description"
  content="Portfolio of Luka Stoiljković - Front-end Developer specializing in modern web development, branding, and consultancy."
/>
<meta property="og:title" content="Jevta - Luka Stoiljković Portfolio" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://jevta.site" />
```

---

## Master Prompt for Claude Agent

```
You are building a terminal-themed portfolio website for Luka Stoiljković (Jevta), a front-end developer.

TECHNOLOGY STACK:
- React 18 + Vite
- Tailwind CSS + Framer Motion
- React Router DOM
- Zustand (state management)
- Fonts: Fira Code, Berkeley Mono, SF Mono

DESIGN SYSTEM - TERMINAL CORE:
- Colors: Matrix Green (#00FF41), Cyber Magenta (#FF00FF), Terminal Black (#0D0208)
- Typography: Monospace fonts only (Fira Code for headers, Berkeley Mono for body)
- Spacing: 8px scale, 80-character width constraint
- Motion: Step functions, typing animations (60ms/char), glitch transitions

KEY FEATURE - LIVING TERMINAL:
The entire site is inside a terminal emulator with:
- Terminal window chrome (minimize/maximize/close buttons)
- Working command line at bottom (user@jevta.site:~$)
- Commands navigate sections: `cd about`, `ls projects`, `cat resume`
- Blinking cursor, Matrix rain background (10% opacity)
- CRT scan lines (optional)

SECTIONS TO BUILD:
1. Hero - ASCII art logo, typing "Hello, World", role reveal
2. About - `whoami` output with profile info
3. Skills - `cat skills.json` with progress bars
4. Experience - `cat experience.log` with timestamps
5. Portfolio - `ls projects/` with 4 projects (Field Focus, Platinum Media, Playmaker Group, L'ÉQUIPE)
6. Services - `cat services.md` (Web Dev, Branding, Consultancy)
7. Stats - `top` style system monitor (2+ years, 5+ clients, 10+ projects, 2800+ hours)
8. Contact - Email: jevta.site@gmail.com, Social links
9. Footer - Copyright, back to top as `cd ~`

INTERACTIVE TERMINAL COMMANDS:
- help, ls, cd [section], cat [file], clear, whoami, history, exit
- Store command history in Zustand
- Auto-complete on Tab, up/down arrow for history

ANIMATIONS:
- Character-by-character typing (60ms)
- Glitch transitions between sections
- ASCII art hover transformations
- Line-by-line scroll reveals
- Matrix rain background effect

CRITICAL REQUIREMENTS:
- NO localStorage/sessionStorage (use React state only)
- Mobile responsive with simplified terminal UI
- Keyboard navigation + screen reader support
- All links styled as file paths or executables
- Monospace fonts throughout
- Step-function easing (NO smooth curves)
- Green/black color scheme with magenta accents

Build this component by component, starting with the terminal window shell, then add sections one at a time. Prioritize functionality over visual complexity.
```

---

## File Structure

```
src/
├── components/
│   ├── Terminal/
│   │   ├── TerminalWindow.jsx
│   │   ├── CommandLine.jsx
│   │   ├── MatrixRain.jsx
│   │   └── TerminalChrome.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Services.jsx
│   │   ├── Stats.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── ui/
│       ├── TypingText.jsx
│       ├── GlitchText.jsx
│       └── ASCIIArt.jsx
├── store/
│   └── terminalStore.js (Zustand)
├── utils/
│   ├── commands.js
│   └── animations.js
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```

---

## Development Phases

### Phase 1: Foundation

1. Set up Vite + React project
2. Install dependencies
3. Configure Tailwind with custom colors
4. Set up fonts
5. Create basic terminal window shell

### Phase 2: Terminal Features

1. Build command line component
2. Implement command parser
3. Add command history (Zustand)
4. Create navigation logic
5. Add Matrix rain background

### Phase 3: Content Sections

1. Build each section component
2. Implement typing animations
3. Add scroll-triggered reveals
4. Style with terminal aesthetics

### Phase 4: Interactivity

1. Connect command line to navigation
2. Add hover effects
3. Implement glitch transitions
4. Add keyboard shortcuts

### Phase 5: Polish & Deploy

1. Mobile responsive design
2. Accessibility audit
3. Performance optimization
4. SEO meta tags
5. Deploy to Vercel

---

## Testing Checklist

- [ ] All commands work correctly
- [ ] Navigation via commands functional
- [ ] Mobile responsive on all devices
- [ ] Animations perform smoothly (60fps)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] All external links open correctly
- [ ] Email link opens Gmail
- [ ] No console errors
- [ ] Fast initial load time
- [ ] Works on Chrome, Firefox, Safari

---

## Launch Requirements

- Domain: jevta.site (already owned)
- SSL Certificate (automatic with Vercel)
- Analytics (optional: Google Analytics or Plausible)
- Contact form backend (optional: Formspree or EmailJS)

---

## Future Enhancements (V2)

- Dark/Light mode toggle (terminal green vs amber)
- More terminal commands (pwd, ps, kill, etc.)
- Easter eggs in command line
- Blog section as `tail blog.log`
- Downloadable resume as `./download_cv.sh`
- Terminal themes switcher
- Sound effects (keyboard clicks, beeps)

---

**Ready to build? Start with `npm create vite@latest jevta-portfolio -- --template react`**

OLD WEBSITE HTML STRUCTURE

<!DOCTYPE html>
<!--[if IE 8]><html class="no-js oldie ie8" lang="en"> <![endif]-->
<!--[if IE 9]><html class="no-js oldie ie9" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html class="no-js" lang="en">
  <!--<![endif]-->
  <head>
    <!--- basic page needs
   ================================================== -->
    <meta charset="utf-8" />
    <title>Jevta</title>
    <meta name="description" content="" />
    <meta name="author" content="" />

    <!-- mobile specific metas

================================================== -->
<meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1"
    />

    <!-- CSS

================================================== -->
<link rel="stylesheet" href="css/base.css" />
<link rel="stylesheet" href="css/main.css" />
<link rel="stylesheet" href="css/vendor.css" />

    <!-- script

================================================== -->
<script src="js/modernizr.js"></script>
<script src="js/pace.min.js"></script>

    <!-- favicons
    ================================================== -->
    <link rel="icon" type="image/icon" href="favicon.ico" />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    />

    <!-- fonts
    ================================================== -->
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Poppins:wght@400;600&display=swap&subset=latin"
      rel="stylesheet"
    />

  </head>

  <body id="top">
    <!-- header 
   ================================================== -->
    <header>
      <div class="row">
        <div class="top-bar">
          <a class="menu-toggle" href="#"><span>Menu</span></a>

          <div class="logo">
            <a href="https://jevta.site/">JEVTA</a>
          </div>

          <nav id="main-nav-wrap">
            <ul class="main-navigation">
              <li class="current">
                <a
                  class="smoothscroll"
                  href="#intro"
                  data-translate="menuHome"
                ></a>
              </li>
              <li>
                <a
                  class="smoothscroll"
                  href="#about"
                  data-translate="menuAbout"
                ></a>
              </li>
              <li>
                <a
                  class="smoothscroll"
                  href="#resume"
                  data-translate="menuResume"
                ></a>
              </li>
              <li>
                <a
                  class="smoothscroll"
                  href="#portfolio"
                  data-translate="menuPortfolio"
                ></a>
              </li>
              <li>
                <a
                  class="smoothscroll"
                  href="#services"
                  data-translate="menuServices"
                ></a>
              </li>
              <li>
                <a
                  class="smoothscroll"
                  href="#contact"
                  data-translate="menuContact"
                ></a>
              </li>
              <!--<li><a href="styles.html" title="">Style Demo</a></li>-->
            </ul>
          </nav>
        </div>
        <!-- /top-bar -->

        <div class="language">
          <a href="#" onclick="setLanguage('sr'); return false;" title="Srpski">
            <img
              src="images/srbija.svg"
              alt="Srpski"
              class="lang-flag"
              data-lang="sr"
            />
          </a>
          <a
            href="#"
            onclick="setLanguage('en'); return false;"
            title="English"
          >
            <img
              src="images/united-kingdom.svg"
              alt="English"
              class="lang-flag"
              data-lang="en"
            />
          </a>
        </div>
      </div>
      <!-- /row -->
    </header>
    <!-- /header -->

    <!-- intro section

================================================== -->
<section id="intro">
<video autoplay muted loop playsinline class="bg-video">
<source src="video/waves.mp4" type="video/mp4" />
</video>

      <div class="intro-overlay"></div>

      <div class="intro-content">
        <div class="row">
          <div class="col-twelve">
            <h5 id="typing-text">Hello, World.</h5>
            <h1 data-translate="introName">I'm Luka Stoiljković</h1>

            <p class="intro-position">
              <span data-translate="introRole">Front-end Developer</span>
            </p>

            <a
              class="button stroke smoothscroll"
              href="#about"
              title=""
              data-translate="introButton"
            ></a>
          </div>
        </div>
      </div>
      <!-- /intro-content -->

      <ul class="intro-social">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61552420501147"
            target="_blank"
            ><i class="fa-brands fa-facebook fa-lg"></i
          ></a>
        </li>
        <li>
          <a href="https://github.com/jevtasite" target="_blank"
            ><i class="fa-brands fa-github fa-lg"></i
          ></a>
        </li>
        <li>
          <a href="https://www.instagram.com/jevta.site/" target="_blank"
            ><i class="fa-brands fa-instagram fa-lg"></i
          ></a>
        </li>
      </ul>
      <!-- /intro-social -->
    </section>
    <!-- /intro -->

    <!-- about section

================================================== -->
<section id="about" class="white-section">
<div class="fade-in-content">
<div class="row section-intro">
<div class="col-twelve">
<h5 data-translate="menuAbout"></h5>
<h1 data-translate="aboutHeading"></h1>

            <div class="intro-info">
              <img src="images/profilepic.png" alt="Profile Picture" />

              <p class="lead" data-translate="aboutText1"></p>
            </div>
          </div>
        </div>
        <!-- /section-intro -->

        <div class="row about-content">
          <div class="col-six tab-full">
            <h3 data-translate="profileHeading"></h3>
            <p data-translate="profileText"></p>

            <ul class="info-list info-list-animate">
              <li>
                <strong data-translate="fullname"></strong>
                <span>Luka Stoiljković</span>
              </li>
              <li>
                <strong data-translate="birthDate"></strong>
                <span data-translate="birthDay"></span>
              </li>
              <li>
                <strong data-translate="job"></strong>
                <span data-translate="jobDesc"></span>
              </li>
              <li>
                <strong data-translate="website"></strong>
                <span>jevta.site</span>
              </li>
              <li>
                <strong data-translate="email"></strong>
                <span>jevta.site@gmail.com</span>
              </li>
            </ul>
            <!-- /info-list -->
          </div>

          <div class="col-six tab-full">
            <h3 data-translate="skills">Skills</h3>
            <p>
              <strong class="skillsanimation">HTML/CSS: </strong
              ><span data-translate="skillsText1"></span><br />
              <br />
              <strong class="skillsanimation">Bootstrap: </strong
              ><span data-translate="skillsText2"></span><br />
              <br />
              <strong class="skillsanimation">JavaScript: </strong
              ><span data-translate="skillsText3"></span><br />
              <br />
              <strong class="skillsanimation">jQuery: </strong
              ><span data-translate="skillsText4"></span><br />
              <br />
              <strong class="skillsanimation">AJAX/JSON: </strong
              ><span data-translate="skillsText5"></span>
            </p>

            <!-- <ul class="skill-bars"> -->
            <!-- <li>
    			   	<div class="progress percent90"><span>90%</span></div>
    			   	<strong>HTML5</strong>
    			   </li>
    			   <li>
    			   	<div class="progress percent85"><span>85%</span></div>
    			   	<strong>CSS3</strong>
    			   </li>
    			   <li>
    			   	<div class="progress percent45"><span>45%</span></div>
    			   	<strong>Javascript</strong>
    			   </li> -->
            <!--<li>
    			   	<div class="progress percent95"><span>95%</span></div>
    			   	<strong>PHP</strong>
    			   </li>
    			   <li>

    			   	<div class="progress percent75"><span>75%</span></div>
    			   	<strong>Wordpress</strong>
    			   </li>-->

            <!-- </ul> -->
          </div>
        </div>

        <div class="row button-section">
          <div class="col-twelve">
            <a
              href="#contact"
              title="Hire Me"
              class="button stroke smoothscroll fade-left"
              data-translate="skillsButton1"
            ></a>
            <!--  <a
              href="https://jevta.site/"
              target="_blank"
              title="Download CV"
              class="button button-primary fade-left"
              data-translate="skillsButton2"
            ></a>-->
          </div>
        </div>
      </div>
    </section>
    <!-- /process-->

    <!-- resume Section

================================================== -->
<section id="resume" class="grey-section">
<div class="fade-in-content">
<div class="row section-intro">
<div class="col-twelve">
<!--<h5 data-translate="resumeHeading"></h5>
   			<h1 data-translate="resumeCredentials"></h1>-->

            <!-- <p class="lead">Here’s a quick look at my experience, skills, and projects so far.</p> -->
          </div>
        </div>
        <!-- /section-intro-->

        <div class="row resume-timeline">
          <div class="col-twelve resume-header">
            <h2 data-translate="resumeWork"></h2>
            <br />
            <!-- <h3>Currently looking for a job!</h3> -->
          </div>

          <div class="col-twelve">
            <div class="timeline-wrap">
              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-graduation-cap"></i>
                </div>

                <div class="timeline-header">
                  <h3 data-translate="internship"></h3>
                  <p data-translate="internshipDate"></p>
                </div>

                <div class="timeline-content">
                  <h4>
                    <a href="https://esenca.rs/" target="_blank"
                      >Esenca Software</a
                    >
                  </h4>
                  <p id="presume" data-translate="internshipText1"></p>
                  <h3 style="font-size: 1.75rem">
                    <a
                      href="https://drive.google.com/file/d/1RocFTef7IS-BZRohnQbvb3gdcyd_cYWx/view?usp=sharing"
                      title="Certificate"
                      target="_blank"
                      data-translate="certificate"
                    ></a>
                  </h3>
                </div>
              </div>

              <div class="timeline-block">
                <div class="timeline-ico">
                  <i class="fa fa-graduation-cap"></i>
                </div>

                <div class="timeline-header">
                  <h3 data-translate="freelance"></h3>
                  <p data-translate="freelanceDate"></p>
                </div>

                <!-- <div class="timeline-content">
                  <h4>Super Cool Agency</h4>
                  <p>
                    Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                    magna consectetur nisi cupidatat laboris esse eiusmod
                    deserunt aute do quis velit esse sed Ut proident cupidatat
                    nulla esse cillum laborum occaecat nostrud sit dolor
                    incididunt amet est occaecat nisi incididunt.
                  </p>
                </div>-->
              </div>

              <!--	<div class="timeline-block">

       				<div class="timeline-ico">
       					<i class="fa fa-graduation-cap"></i>
       				</div>

       				<div class="timeline-header">
       					<h3>Web Designer</h3>
       					<p>May 2013 - June 2014</p>
       				</div>

       				<div class="timeline-content">
       					<h4>Great Designs Studio</h4>
       					<p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
       				</div>

       			</div>-->
            </div>
          </div>
        </div>

        <div class="row resume-timeline">
          <div class="col-twelve resume-header">
            <!--<h2>Education</h2>-->
          </div>

          <div class="col-twelve">
            <!--<div class="timeline-wrap">

   				<div class="timeline-block">

       				<div class="timeline-ico">
       					<i class="fa fa-briefcase"></i>
       				</div>

       				<div class="timeline-header">
       					<h3>Master Degree</h3>
       					<p>July 2015 - Present</p>
       				</div>

       				<div class="timeline-content">
       					<h4>University of Life</h4>
       					<p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
       				</div>

       			</div>

       			<div class="timeline-block">

       				<div class="timeline-ico">
       					<i class="fa fa-briefcase"></i>
       				</div>

       				<div class="timeline-header">
       					<h3>Bachelor Degree</h3>
       					<p>July 2014 - June 2015</p>
       				</div>

       				<div class="timeline-content">
       					<h4>State Design University</h4>
       					<p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
       				</div>

       			</div>

       			<div class="timeline-block">

       				<div class="timeline-ico">
       					<i class="fa fa-briefcase"></i>
       				</div>

       				<div class="timeline-header">
       					<h3>Bachelor Degree</h3>
       					<p>May 2013 - June 2014</p>
       				</div>

       				<div class="timeline-content">
       					<h4>Design College</h4>
       					<p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
       				</div>

       			</div>

   			</div>-->
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section

================================================== -->
<section id="portfolio" class="white-section">
<div class="fade-in-content">
<div class="row section-intro">
<div class="col-twelve">
<h5 data-translate="portfolioHeading"></h5>
<h1 data-translate="portfolioText"></h1>

            <!-- <p class="lead">Explore a selection of my projects to get a glimpse of the creative and technical expertise I bring to the table.</p> -->
          </div>
        </div>
        <!-- /section-intro-->

        <div class="row portfolio-content">
          <div class="col-twelve">
            <!-- portfolio-wrapper -->
            <div id="folio-wrapper" class="block-1-2 block-mob-full stack">
              <div class="bgrid folio-item">
                <div class="item-wrap">
                  <img
                    src="images/portfolio/field-focus.png"
                    alt="Vegetables"
                  />
                  <a href="#modal-01" class="overlay">
                    <div class="folio-item-table">
                      <div class="folio-item-cell">
                        <h3 class="folio-title">Field Focus</h3>
                        <span class="folio-types" data-translate="projectText1">
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <!-- /folio-item -->

              <div class="bgrid folio-item">
                <div class="item-wrap">
                  <img
                    src="images/portfolio/platinumedia.png"
                    alt="Esenca Software"
                  />
                  <a href="#modal-02" class="overlay">
                    <div class="folio-item-table">
                      <div class="folio-item-cell">
                        <h3 class="folio-title">Platinum Media</h3>
                        <span class="folio-types" data-translate="projectText2">
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <!-- /folio-item -->

              <div class="bgrid folio-item">
                <div class="item-wrap">
                  <img src="images/portfolio/playmaker.png" alt="" />
                  <a href="#modal-06" class="overlay">
                    <div class="folio-item-table">
                      <div class="folio-item-cell">
                        <h3 class="folio-title">Playmaker Group</h3>
                        <span class="folio-types" data-translate="projectText3">
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <!-- /folio-item -->

              <!-- <div class="bgrid folio-item">
                   <div class="item-wrap">
                   	<img src="images/portfolio/beetle.jpg" alt="Beetle">
                      <a href="#modal-04" class="overlay">
                         <div class="folio-item-table">
                         	<div class="folio-item-cell">
                         		<h3 class="folio-title">Beetle</h3>
    	     					    	<span class="folio-types">
    	     					       	  Branding
    	     					      </span>
    	     					   </div>
                         </div>
                      </a>
                   </div>
            		</div> /folio-item      -->

              <!-- <div class="bgrid folio-item">
                   <div class="item-wrap">
                   	<img src="images/portfolio/lighthouse.jpg" alt="Lighthouse">
                      <a href="#modal-05" class="overlay">
                         <div class="folio-item-table">
                         	<div class="folio-item-cell">
                         		<h3 class="folio-title">Lighthouse</h3>
    	     					    	<span class="folio-types">
    	     					       	  Web Development
    	     					      </span>
    	     					   </div>
                         </div>
                      </a>
                   </div>
            		</div> /folio-item -->

              <div class="bgrid folio-item">
                <div class="item-wrap">
                  <img src="images/portfolio/lequipe.png" alt="Shop" />
                  <a href="#modal-03" class="overlay">
                    <div class="folio-item-table">
                      <div class="folio-item-cell">
                        <h3 class="folio-title">L'ÉQUIPE</h3>
                        <span class="folio-types" data-translate="projectText4">
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <!-- /folio-item -->

              <!-- modal popups - begin
                ============================================================= -->
              <div id="modal-01" class="popup-modal slider mfp-hide">
                <div class="media">
                  <img
                    src="images/portfolio/modals/m-fieldfocus.png"
                    alt="Field Focus"
                  />
                </div>

                <div class="description-box">
                  <h4>Field Focus</h4>
                  <p data-translate="projectText1"></p>

                  <div class="categories" data-translate="projectPopup1"></div>
                </div>

                <div class="link-box">
                  <a
                    href="https://fieldfocus.agency/"
                    target="_blank"
                    data-translate="projectButton1"
                  ></a>
                  <a
                    href="#"
                    class="popup-modal-dismiss"
                    data-translate="projectButton2"
                  ></a>
                </div>
              </div>
              <!-- /modal-01 -->

              <div id="modal-02" class="popup-modal slider mfp-hide">
                <div class="media">
                  <img
                    src="images/portfolio/modals/m-platinumedia.png"
                    alt="Esenca"
                  />
                </div>

                <div class="description-box">
                  <h4>Platinum Media</h4>
                  <p data-translate="projectText2"></p>

                  <div class="categories" data-translate="projectPopup2"></div>
                </div>

                <div class="link-box">
                  <a
                    href="https://platinumedia.site/"
                    target="_blank"
                    data-translate="projectButton1"
                  ></a>
                  <a
                    href="#"
                    class="popup-modal-dismiss"
                    data-translate="projectButton2"
                  ></a>
                </div>
              </div>
              <!-- /modal-02 -->

              <div id="modal-03" class="popup-modal slider mfp-hide">
                <div class="media">
                  <img
                    src="images/portfolio/modals/m-lequipe.png"
                    alt="PearShop"
                  />
                </div>

                <div class="description-box">
                  <h4>L'ÉQUIPE</h4>
                  <p data-translate="projectText3"></p>

                  <div class="categories" data-translate="projectPopup2"></div>
                </div>

                <div class="link-box">
                  <a
                    href="https://l-equipe-management.com/"
                    target="_blank"
                    data-translate="projectButton1"
                  ></a>
                  <a
                    href="#"
                    class="popup-modal-dismiss"
                    data-translate="projectButton2"
                  ></a>
                </div>
              </div>
              <!-- /modal-03 -->

              <!-- <div id="modal-04" class="popup-modal slider mfp-hide">

    			     	<div class="media">
    			     		<img src="images/portfolio/modals/m-beetle.jpg" alt="" />
    			     	</div>

    				   <div class="description-box">
    				      <h4>Beetle</h4>
    				      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

    				      <div class="categories">Branding</div>
    				   </div>

    		         <div class="link-box">
    		            <a href="http://www.behance.net">Details</a>
    				      <a href="#" class="popup-modal-dismiss">Close</a>
    		         </div>

    			   </div> /modal-04 -->

              <!-- <div id="modal-05" class="popup-modal slider mfp-hide">

    			     	<div class="media">
    			     		<img src="images/portfolio/modals/m-lighthouse.jpg" alt="" />
    			     	</div>

    				   <div class="description-box">
    				      <h4>Lighthouse</h4>
    				      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

    				      <div class="categories">Web Development</div>
    				   </div>

    		         <div class="link-box">
    		            <a href="http://www.behance.net">Details</a>
    				      <a href="#" class="popup-modal-dismiss">Close</a>
    		         </div>

    			   </div> /modal-05 -->

              <div id="modal-06" class="popup-modal slider mfp-hide">
                <div class="media">
                  <img
                    src="images/portfolio/modals/m-playmaker.png"
                    alt="Currency"
                  />
                </div>

                <div class="description-box">
                  <h4>Playmaker Group</h4>
                  <p data-translate="projectText4"></p>

                  <div class="categories" data-translate="projectPopup4"></div>
                </div>

                <div class="link-box">
                  <a
                    href="https://playmakergroup.net"
                    target="_blank"
                    data-translate="projectButton1"
                  ></a>
                  <a
                    href="#"
                    class="popup-modal-dismiss"
                    data-translate="projectButton2"
                  ></a>
                </div>
              </div>
              <!-- /modal-06 -->

              <!-- modal popups - end
                ============================================================= -->
            </div>
            <!-- /portfolio-wrapper -->
          </div>
          <!-- /twelve -->
        </div>
        <!-- /portfolio-content -->
      </div>
    </section>
    <!-- /portfolio -->

    <!-- CTA Section

================================================== -->
<!--<section id="cta" class="grey-section">

   	<div class="row cta-content">

   		<div class="col-twelve section-ads">

         		<h2 class="h01"><a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Styleshout Recommends Dreamhost.</a></h2>

    	      <p class="lead">
    	      Looking for an awesome and reliable webhosting? Try <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT"><span>DreamHost</span></a>.
    			Get <span>$50 off</span> when you sign up with the promocode <span>styleshout</span>.

    			</p>

    			<div class="action">
    		      <a class="button button-primary large" href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Sign Up Now</a>
    	      </div>

   		</div>

   	</div>

   </section>-->
    <!-- /cta -->

    <!-- services Section

================================================== -->
<section id="services" class="fade-in">
<div class="overlay"></div>

      <div class="row section-intro">
        <div class="col-twelve">
          <h5 data-translate="services"></h5>
          <h1 data-translate="servicesHeading"></h1>

          <!--<p class="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>-->
        </div>
      </div>
      <!-- /section-intro -->

      <div class="row services-content">
        <div id="owl-slider" class="owl-carousel services-list">
          <!--<div class="service">

          		<span class="icon"><i class="icon-earth"></i></span>

                <div class="service-content">

                	 <h3>Webdesign</h3>

    	            <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
             		</p>

             	</div>

    			</div>-->

          <div class="service">
            <span class="icon"><i class="icon-window"></i></span>

            <div class="service-content">
              <h3 data-translate="webDevelopment"></h3>

              <p class="desc" data-translate="webDevelopmentDesc"></p>
            </div>
          </div>
          <!-- /service -->

          <div class="service">
            <span class="icon"><i class="icon-paint-brush"></i></span>

            <div class="service-content">
              <h3 data-translate="branding"></h3>

              <p class="desc" data-translate="brandingDesc"></p>
            </div>
          </div>
          <!-- /service -->

          <!--<div class="service">

    				<span class="icon"><i class="icon-toggles"></i></span>

                <div class="service-content">

                	<h3>UI/UX Design</h3>

    	            <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
             		</p>

                </div>

    			</div>-->
          <!-- /service -->

          <!--<div class="service">

    		   	<span class="icon"><i class="icon-image"></i></span>

                <div class="service-content">

                	<h3>Graphics Design</h3>

    	            <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            			</p>

                </div>

    		   </div>-->
          <!-- /service -->

          <div class="service">
            <span class="icon"><i class="icon-chat"></i></span>

            <div class="service-content">
              <h3 data-translate="consultancy"></h3>

              <p class="desc" data-translate="consultancyDesc"></p>
            </div>
          </div>
          <!-- /service -->
        </div>
        <!-- /services-list -->
      </div>
      <!-- /services-content -->
    </section>
    <!-- /services -->

    <!-- stats Section

================================================== -->
<section id="stats" class="count-up">
<div class="row">
<div class="col-twelve">
<div
            class="block-1-4 block-s-1-4 block-tab-1-2 block-mob-full stats-list"
          >
<div class="bgrid stat">
<div class="icon-part">
<i class="fa-solid fa-calendar-days"></i>
</div>

              <h3 class="stat-count">2</h3>

              <h5 class="stat-title" data-translate="counter1"></h5>
            </div>
            <!-- /stat -->

            <div class="bgrid stat">
              <div class="icon-part">
                <i class="fa-solid fa-users"></i>
              </div>

              <h3 class="stat-count">5</h3>

              <h5 class="stat-title" data-translate="counter2"></h5>
            </div>
            <!-- /stat -->

            <div class="bgrid stat">
              <div class="icon-part">
                <i class="fa-solid fa-list-check"></i>
              </div>

              <h3 class="stat-count">10</h3>

              <h5 class="stat-title" data-translate="counter3"></h5>
            </div>
            <!-- /stat -->

            <div class="bgrid stat">
              <div class="icon-part">
                <i class="fa-regular fa-clock"></i>
              </div>

              <h3 class="stat-count">2800</h3>

              <h5 class="stat-title" data-translate="counter4"></h5>
            </div>
            <!-- /stat -->

            <!-- <div class="bgrid stat">

    					<div class="icon-part">
    						<i class="icon-cup"></i>
    					</div>

    					<h3 class="stat-count">
    						15
    					</h3>

    					<h5 class="stat-title">
    						Coffee Cups
    					</h5>

    				</div> /stat -->

            <!-- <div class="bgrid stat">

    					<div class="icon-part">
    						<i class="icon-clock"></i>
    					</div>

    					<h3 class="stat-count">
    						20
    					</h3>

    					<h5 class="stat-title">
    						Hours
    					</h5>

    				</div> /stat -->
          </div>
          <!-- /stats-list -->
        </div>
        <!-- /twelve -->
      </div>
      <!-- /row -->
    </section>
    <!-- /stats -->

    <!-- Contact Section -->
    <section id="contact" class="fade-in">
      <div class="row section-intro">
        <div class="col-twelve">
          <h5 data-translate="contact"></h5>
          <h1 data-translate="contactHeading"></h1>
          <p class="lead" data-translate="contactText"></p>
        </div>
      </div>

      <div class="row contact-form">
        <div class="col-twelve">
          <div id="message-warning"></div>
          <div id="message-success">
            <i class="fa fa-check"></i>Your message was sent, thank you!<br />
          </div>
        </div>
      </div>

      <div class="row contact-info">
        <div id="razmak" class="col-twelve tab-full collapse">
          <div class="icon">
            <i class="icon-mail"></i>
          </div>
          <h5 data-translate="contactEmail"></h5>
          <a id="siva" href="#" onclick="openGmail()" target="_blank">
            jevta.site@gmail.com
          </a>
        </div>
      </div>
    </section>

    <!-- /contact -->

    <!-- footer

================================================== -->

    <footer>
      <div class="row">
        <div class="col-four tab-full pull-right social">
          <ul class="footer-social">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61552420501147"
                target="_blank"
                ><i class="fa-brands fa-facebook fa-lg"></i
              ></a>
            </li>
            <li>
              <a href="https://github.com/jevtasite" target="_blank"
                ><i class="fa-brands fa-github fa-lg"></i
              ></a>
            </li>
            <li>
              <a href="https://www.instagram.com/jevta.site/" target="_blank"
                ><i class="fa-brands fa-instagram fa-lg"></i
              ></a>
            </li>
          </ul>
        </div>

        <div class="col-eight tab-full">
          <div class="copyright">
            <span> <span class="shine-logo">Jevta</span>© Copyright 2025 </span>
          </div>
        </div>

        <div id="go-top">
          <a class="smoothscroll" title="Back to Top" href="#top"
            ><i class="fa fa-long-arrow-up"></i
          ></a>
        </div>
      </div>
      <!-- /row -->
    </footer>

    <div id="preloader">
      <div id="loader"></div>
    </div>

    <!-- Java Script

================================================== -->
<script src="js/jquery-2.1.3.min.js"></script>
<script src="js/plugins.js"></script>
<script src="js/main.js"></script>
<script src="js/index.js"></script>
<script src="js/lang.js"></script>

  </body>
</html>
