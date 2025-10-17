# JEVTA - Terminal Portfolio

A unique, terminal-themed portfolio website for Luka Stoiljković (Jevta), featuring an interactive command-line interface, Matrix rain effects, and a modern tech stack.

![Terminal Portfolio](https://img.shields.io/badge/React-18-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC) ![Vite](https://img.shields.io/badge/Vite-4-646CFF) ![i18n](https://img.shields.io/badge/i18n-Ready-green)

## 🚀 Features

### 🖥️ Terminal Interface
- **Fully Functional Command Line** - Interactive terminal with real commands
- **Matrix Rain Background** - Authentic hacker aesthetic with falling green characters
- **CRT Effects** - Scan lines and retro terminal feel
- **Window Chrome** - Realistic terminal window with minimize/maximize/close buttons

### ⚡ Working Terminal Commands
```bash
help              # Show available commands
ls                # List all sections
cd [section]      # Navigate to sections (about, skills, projects, contact)
cat [file]        # Display section content
clear             # Clear terminal output
whoami            # Show info about Luka
history           # Show command history
exit              # Easter egg!
```

### 🌐 Multi-Language Support
- **English** & **Serbian** translations
- Easy language switching via terminal chrome buttons
- Full i18n implementation with react-i18next

### 📱 Sections

1. **Hero** - ASCII art logo, typing animation, social links
2. **About** - Profile information, bio, quick skills preview
3. **Skills** - Modern tech stack with ASCII progress bars
   - HTML/CSS, JavaScript/ES6+, React, Tailwind CSS, Git, Responsive Design
4. **Experience** - Work timeline (Esenca Software internship + Freelance)
5. **Portfolio** - 4 featured projects with hover effects
6. **Services** - Web Development, UI/UX Design, Consultancy
7. **Stats** - Animated counters (2+ years, 5+ clients, 10+ projects, 2800+ hours)
8. **Contact** - Email, social links, location info
9. **Footer** - Quick navigation, social media, back to top

## 🛠️ Tech Stack

- **React 18** - Modern React with Hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first styling with custom terminal theme
- **Framer Motion** - Smooth animations (ready to use)
- **Zustand** - Lightweight state management for terminal
- **react-i18next** - Internationalization (EN/SR)
- **Lucide React** - Icon library (ready to use)

### Fonts
- **Fira Code** - Headers and ASCII art
- **Space Mono** - Body text and code blocks

## 🎨 Design System

### Color Palette
```css
--matrix-green: #00FF41      /* Primary - Active state, success */
--lime-terminal: #39FF14     /* Secondary - Highlights */
--cyber-magenta: #FF00FF     /* Accent - Critical elements */
--terminal-black: #0D0208    /* Background - Deep focus */
--elevated-black: #1A1A1A    /* Surface - Card backgrounds */
--comment-green: #6A9955     /* Comments - Secondary text */
--error-red: #FF6B6B         /* Error states */
```

### Motion Principles
- Step-function easing (no smooth curves)
- Character-by-character typing (60ms/char)
- ASCII art hover transformations
- Glitch effects for transitions
- Scroll-triggered animations

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/jevtasite/portfolio.git

# Navigate to project directory
cd jevta-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Development

### File Structure
```
src/
├── components/
│   ├── Terminal/
│   │   ├── TerminalWindow.jsx    # Main terminal container
│   │   ├── CommandLine.jsx        # Interactive command line
│   │   ├── MatrixRain.jsx         # Matrix rain background
│   │   └── TerminalChrome.jsx     # Window decorations
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
│   └── ui/                         # Reusable UI components
├── store/
│   └── terminalStore.js            # Zustand state management
├── utils/
│   └── commands.js                 # Command parser logic
├── i18n.js                         # i18n configuration
├── App.jsx
└── main.jsx
```

### Adding New Terminal Commands

Edit `src/utils/commands.js`:

```javascript
const commands = {
  yourCommand: () => ({
    type: 'success',
    content: 'Your command output here',
  }),
};
```

### Changing Language

The language switcher is in the top-right corner of the terminal chrome. Click **EN** or **SR** to switch languages.

To add more languages, edit `src/i18n.js` and add new translation objects.

## 🌍 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy dist/ folder to Netlify
```

### Build Output
- Build command: `npm run build`
- Output directory: `dist/`
- Node version: 18.x or higher

## 🎮 Usage Tips

1. **Try the Terminal Commands** - Type `help` to see all available commands
2. **Navigate with Commands** - Use `cd about` or `cd projects` to jump to sections
3. **Keyboard Navigation** - Use arrow keys to navigate command history
4. **Language Switch** - Toggle between English and Serbian in the top-right
5. **Smooth Scrolling** - All navigation includes smooth scrolling effects

## 🔐 Environment Variables

No environment variables required for basic functionality.

For production deployment, consider adding:
- Analytics tracking ID
- Contact form API endpoint (if using a backend service)

## 📝 Customization

### Changing Colors
Edit `tailwind.config.js` to customize the color palette.

### Modifying Animations
Animation timings and effects are in `src/index.css` and individual components.

### Updating Content
- **Personal Info**: Edit individual section components in `src/components/sections/`
- **Projects**: Update the `projects` array in `Portfolio.jsx`
- **Skills**: Modify the `skills` array in `Skills.jsx`
- **Translations**: Edit `src/i18n.js` for English/Serbian text

## 🐛 Known Issues

- CSS warnings about `@import` are from cached builds and can be ignored
- Matrix rain may impact performance on low-end devices (consider disabling on mobile)

## 🚧 Future Enhancements

- [ ] Add actual translations to all sections (currently infrastructure only)
- [ ] Implement Framer Motion for advanced animations
- [ ] Add project screenshot galleries
- [ ] Dark/Light mode toggle (terminal green vs amber)
- [ ] More easter eggs and fun commands
- [ ] Blog section as `tail blog.log`
- [ ] Downloadable resume as `./download_cv.sh`
- [ ] Sound effects (keyboard clicks, beeps)

## 📄 License

Copyright © 2025 Luka Stoiljković (Jevta). All rights reserved.

## 👨‍💻 Author

**Luka Stoiljković (Jevta)**
- Website: [jevta.site](https://jevta.site)
- Email: jevta.site@gmail.com
- GitHub: [@jevtasite](https://github.com/jevtasite)
- Instagram: [@jevta.site](https://www.instagram.com/jevta.site/)

---

**Built with** ❤️ **and lots of** ☕ **by Jevta**

*Type `help` to get started!*
