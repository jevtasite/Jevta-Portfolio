// Command parser and executor
export const parseCommand = (input, { addOutput, clearOutput, setCurrentSection, setGameActive, setCurrentGame }) => {
  const [command, ...args] = input.toLowerCase().split(' ');

  const commands = {
    help: () => ({
      type: 'success',
      content: `Available commands:
  help              - Show this help message
  ls                - List all sections
  cd [section]      - Navigate to section (about, skills, projects, etc.)
  cat [file]        - Display section content
  clear             - Clear terminal output
  whoami            - Show info about me
  flappy / bird     - Play Flappy Bird game

💡 Quick tip: You can also type section names directly!
   Examples: "about.txt", "skills", "contact"
      `,
    }),

    ls: () => ({
      type: 'success',
      content: `Available sections:
  home/             - Home section
  about.txt         - About me
  skills.json       - My skills
  experience.log    - Work experience
  projects/         - Portfolio projects
  services.md       - Services offered
  stats/            - Statistics
  contact/          - Contact information
      `,
    }),

    cd: () => {
      const section = args[0];
      if (!section) {
        return {
          type: 'error',
          content: 'cd: missing section name. Try "ls" to see available sections.',
        };
      }

      const validSections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'stats', 'contact'];
      const normalizedSection = section.replace(/\/$/, '').replace(/\.(txt|json|log|md)$/, '');

      if (validSections.includes(normalizedSection)) {
        setCurrentSection(normalizedSection);

        // Scroll to section - need to scroll the terminal-content container
        const element = document.getElementById(normalizedSection);
        const terminalContent = document.querySelector('.terminal-content');

        if (element && terminalContent) {
          const elementTop = element.offsetTop;
          terminalContent.scrollTo({
            top: elementTop - 100, // offset for terminal chrome
            behavior: 'smooth'
          });
        }

        return {
          type: 'success',
          content: `Changed directory to ${normalizedSection}`,
        };
      }

      return {
        type: 'error',
        content: `cd: ${section}: No such section`,
      };
    },

    cat: () => {
      const file = args[0];
      if (!file) {
        return {
          type: 'error',
          content: 'cat: missing file name',
        };
      }

      const normalizedFile = file.replace(/\.(txt|json|log|md)$/, '');
      const validFiles = ['about', 'skills', 'experience', 'services'];

      if (validFiles.includes(normalizedFile)) {
        setCurrentSection(normalizedFile);

        // Scroll to section - need to scroll the terminal-content container
        const element = document.getElementById(normalizedFile);
        const terminalContent = document.querySelector('.terminal-content');

        if (element && terminalContent) {
          const elementTop = element.offsetTop;
          terminalContent.scrollTo({
            top: elementTop - 100, // offset for terminal chrome
            behavior: 'smooth'
          });
        }

        return {
          type: 'success',
          content: `Displaying ${file}...`,
        };
      }

      return {
        type: 'error',
        content: `cat: ${file}: No such file`,
      };
    },

    clear: () => {
      clearOutput();
      return null; // Don't add any output after clearing
    },

    whoami: () => ({
      type: 'success',
      content: `Luka Stoiljković (Jevta)
Front-end Developer
Email: jevta.site@gmail.com
Website: jevta.site

"Hello, World. I build things for the web."
      `,
    }),

    // Easter eggs
    sudo: () => ({
      type: 'error',
      content: 'Nice try! But you\'re already the admin here. 😎',
    }),

    rm: () => ({
      type: 'error',
      content: 'rm: Permission denied. I won\'t let you delete my portfolio! 🛡️',
    }),

    flappy: () => {
      setGameActive(true);
      setCurrentGame('flappy');
      return {
        type: 'game',
        content: 'Launching Flappy Bird...',
      };
    },

    bird: () => {
      setGameActive(true);
      setCurrentGame('flappy');
      return {
        type: 'game',
        content: 'Launching Flappy Bird...',
      };
    },
  };

  // Execute command if it exists
  if (commands[command]) {
    return commands[command]();
  }

  // Check if user typed a section name or file name directly (noob-friendly)
  const directInput = input.toLowerCase().trim();
  const normalizedInput = directInput.replace(/\/$/, '').replace(/\.(txt|json|log|md)$/, '');

  const validSections = ['home', 'about', 'skills', 'experience', 'projects', 'portfolio', 'services', 'stats', 'contact'];

  if (validSections.includes(normalizedInput)) {
    // Treat it as if they typed "cd [section]"
    const element = document.getElementById(normalizedInput);
    const terminalContent = document.querySelector('.terminal-content');

    if (element && terminalContent) {
      const elementTop = element.offsetTop;
      terminalContent.scrollTo({
        top: elementTop - 100,
        behavior: 'smooth'
      });
    }

    setCurrentSection(normalizedInput);
    return {
      type: 'success',
      content: `Navigating to ${normalizedInput}...`,
    };
  }

  // Unknown command
  return {
    type: 'error',
    content: `Command not found: ${command}. Type "help" for available commands.`,
  };
};

// Autocomplete suggestions
export const getAutocompleteSuggestions = (input) => {
  const commands = ['help', 'ls', 'cd', 'cat', 'clear', 'whoami', 'flappy', 'bird'];
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'services', 'stats', 'contact'];

  if (input.startsWith('cd ')) {
    const partial = input.slice(3);
    return sections.filter(s => s.startsWith(partial)).map(s => `cd ${s}`);
  }

  if (input.startsWith('cat ')) {
    const partial = input.slice(4);
    const files = ['about.txt', 'skills.json', 'experience.log', 'services.md'];
    return files.filter(f => f.startsWith(partial)).map(f => `cat ${f}`);
  }

  return commands.filter(cmd => cmd.startsWith(input));
};
