import useTerminalStore from "../store/terminalStore";

// Programming quotes
const quotes = [
  '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
  '"First, solve the problem. Then, write the code." - John Johnson',
  '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
  '"Knowledge is power." - Francis Bacon',
  '"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday\'s code." - Dan Salomon',
  '"Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away." - Antoine de Saint-Exupery',
  '"Code never lies, comments sometimes do." - Ron Jeffries',
  '"Simplicity is the soul of efficiency." - Austin Freeman',
  '"Before software can be reusable it first has to be usable." - Ralph Johnson',
  '"Make it work, make it right, make it fast." - Kent Beck',
  '"Clean code always looks like it was written by someone who cares." - Robert C. Martin',
  '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
  '"Truth can only be found in one place: the code." - Robert C. Martin',
  "\"Programming isn't about what you know; it's about what you can figure out.\" - Chris Pine",
  '"The best error message is the one that never shows up." - Thomas Fuchs',
  '"The most disastrous thing that you can ever learn is your first programming language." - Alan Kay',
  '"Walking on water and developing software from a specification are easy if both are frozen." - Edward V. Berard',
  "\"It's not a bug – it's an undocumented feature.\" - Anonymous",
  '"Fix the cause, not the symptom." - Steve Maguire',
  '"Measuring programming progress by lines of code is like measuring aircraft building progress by weight." - Bill Gates',
];

// Simple ASCII art generator (block letters)
const generateASCII = (text) => {
  if (!text || text.length > 20) {
    return "Text too long! Max 20 characters.";
  }

  const letters = {
    a: ["  ▄▀▄  ", " █▀█▀ ", " █   █"],
    b: ["█▀▀▄ ", "█▀▀▄ ", "█▄▄▀ "],
    c: [" ▄▀▀ ", "█    ", " ▀▄▄ "],
    d: ["█▀▀▄ ", "█  █ ", "█▄▄▀ "],
    e: ["█▀▀▀ ", "█▀▀  ", "█▄▄▄ "],
    f: ["█▀▀▀ ", "█▀▀  ", "█    "],
    g: [" ▄▀▀▄", "█ ▀▀█", " ▀▄▄▀"],
    h: ["█   █", "█▀▀▀█", "█   █"],
    i: ["▀█▀", " █ ", "▄█▄"],
    j: ["   █", "   █", "▄▄█ "],
    k: ["█  █", "█▀▀ ", "█  █"],
    l: ["█   ", "█   ", "█▄▄▄"],
    m: ["█▄ ▄█", "█▀█▀█", "█   █"],
    n: ["█▄  █", "█ █ █", "█  ▀█"],
    o: [" ▄▀▀▄", "█    █", " ▀▄▄▀"],
    p: ["█▀▀▄ ", "█▀▀  ", "█    "],
    q: [" ▄▀▀▄ ", "█    █", " ▀█▄█ "],
    r: ["█▀▀▄ ", "█▀▀▄ ", "█   █"],
    s: [" ▄▀▀▀", "▀▀▀▄ ", "▀▄▄▄ "],
    t: ["▀█▀", " █ ", " █ "],
    u: ["█   █", "█   █", " ▀▄▀ "],
    v: ["█   █", " █ █ ", "  ▀  "],
    w: ["█   █", "█▄█▄█", "▀   ▀"],
    x: ["█   █", " ▀▄▀ ", "▄▀ ▀▄"],
    y: ["█   █", " ▀▄▀ ", "  █  "],
    z: ["▀▀▀█", " ▄▀ ", "█▄▄▄"],
    " ": ["  ", "  ", "  "],
    "!": ["█", "█", "▀"],
    "?": ["▀▀▄", " ▄▀", " ▀ "],
    0: [" ▄▀▄ ", "█   █", " ▀▄▀ "],
    1: [" ▄█", "  █", "▄▄█"],
    2: ["▀▀▄", " ▄▀", "█▄▄"],
    3: ["▀▀▄", " ▀▄", "▄▄▀"],
    4: ["▄ ▄", "█▀█", "  █"],
    5: ["█▀▀", "▀▀▄", "▄▄▀"],
    6: [" ▄▀", "█▀▄", " ▀ "],
    7: ["▀▀█", "  █", "  █"],
    8: [" ▄▀▄", "▄▀▄ ", " ▀ "],
    9: [" ▄▀▄", " ▀▄█", "  ▀ "],
  };

  const chars = text.toLowerCase().split("");
  const lines = ["", "", ""];

  chars.forEach((char) => {
    const pattern = letters[char] || letters[" "];
    pattern.forEach((line, i) => {
      lines[i] += line + " ";
    });
  });

  return lines.join("\n");
};

// Command parser and executor
export const parseCommand = (
  input,
  { addOutput, clearOutput, setCurrentSection, setGameActive, setCurrentGame }
) => {
  const [command, ...args] = input.toLowerCase().split(" ");

  const commands = {
    help: () => ({
      type: "success",
      content: `Available commands:

NAVIGATION:
  ls                - List all sections
  cd [section]      - Navigate to section (about, skills, projects, etc.)
  cat [file]        - Display section content
  clear             - Clear terminal output

INFORMATION:
  help              - Show this help message
  whoami            - Show info about me
  date              - Show current date
  time              - Show current time
  stats             - Show session statistics

FUN STUFF:
  quote             - Display random programming quote
  ascii [text]      - Generate ASCII art
  matrix            - Enter the Matrix (10s effect)
  flappy / bird     - Play Flappy Bird game

EASTER EGGS:
  secret            - Discover hidden content
  easteregg         - Find the easter egg
  konami            - The legendary code
  coffee            - Fuel for programmers
  hack              - Animated hacking sequence

Quick tip: You can also type section names directly!
   Examples: "about.txt", "skills", "contact"
      `,
    }),

    ls: () => ({
      type: "success",
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
          type: "error",
          content:
            'cd: missing section name. Try "ls" to see available sections.',
        };
      }

      const validSections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "services",
        "stats",
        "contact",
      ];
      const normalizedSection = section
        .replace(/\/$/, "")
        .replace(/\.(txt|json|log|md)$/, "");

      if (validSections.includes(normalizedSection)) {
        setCurrentSection(normalizedSection);

        // Scroll to section - need to scroll the terminal-content container
        const element = document.getElementById(normalizedSection);
        const terminalContent = document.querySelector(".terminal-content");

        if (element && terminalContent) {
          const elementTop = element.offsetTop;
          terminalContent.scrollTo({
            top: elementTop - 100, // offset for terminal chrome
            behavior: "smooth",
          });
        }

        return {
          type: "success",
          content: `Changed directory to ${normalizedSection}`,
        };
      }

      return {
        type: "error",
        content: `cd: ${section}: No such section`,
      };
    },

    cat: () => {
      const file = args[0];
      if (!file) {
        return {
          type: "error",
          content: "cat: missing file name",
        };
      }

      const normalizedFile = file.replace(/\.(txt|json|log|md)$/, "");
      const validFiles = ["about", "skills", "experience", "services"];

      if (validFiles.includes(normalizedFile)) {
        setCurrentSection(normalizedFile);

        // Scroll to section - need to scroll the terminal-content container
        const element = document.getElementById(normalizedFile);
        const terminalContent = document.querySelector(".terminal-content");

        if (element && terminalContent) {
          const elementTop = element.offsetTop;
          terminalContent.scrollTo({
            top: elementTop - 100, // offset for terminal chrome
            behavior: "smooth",
          });
        }

        return {
          type: "success",
          content: `Displaying ${file}...`,
        };
      }

      return {
        type: "error",
        content: `cat: ${file}: No such file`,
      };
    },

    clear: () => {
      clearOutput();
      return null; // Don't add any output after clearing
    },

    whoami: () => ({
      type: "success",
      content: `Luka Stoiljković (Jevta)
Front-end Developer
Email: jevta.site@gmail.com
Website: jevta.site

"Hello, World. I build things for the web."
      `,
    }),

    // Easter eggs
    sudo: () => ({
      type: "error",
      content: "Nice try! But you're already the admin here. 😎",
    }),

    rm: () => ({
      type: "error",
      content: "rm: Permission denied. I won't let you delete my portfolio! 🛡️",
    }),

    flappy: () => {
      setGameActive(true);
      setCurrentGame("flappy");
      return {
        type: "game",
        content: "Launching Flappy Bird...",
      };
    },

    bird: () => {
      setGameActive(true);
      setCurrentGame("flappy");
      return {
        type: "game",
        content: "Launching Flappy Bird...",
      };
    },

    // NEW ENHANCED COMMANDS

    quote: () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      return {
        type: "success",
        content: `\n${randomQuote}\n`,
      };
    },

    ascii: () => {
      const text = args.join(" ");
      if (!text) {
        return {
          type: "error",
          content: "ascii: missing text. Usage: ascii [text]",
        };
      }
      const art = generateASCII(text);
      return {
        type: "success",
        content: `\n${art}\n`,
      };
    },

    date: () => {
      const now = new Date();
      return {
        type: "success",
        content: now.toString(),
      };
    },

    time: () => {
      const now = new Date();
      return {
        type: "success",
        content: now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
    },

    stats: () => {
      const { sessionStats } = useTerminalStore.getState();
      const sessionStart = new Date(sessionStats.sessionStart);
      const now = new Date();
      const sessionTime = Math.floor((now - sessionStart) / 1000); // seconds
      const minutes = Math.floor(sessionTime / 60);
      const seconds = sessionTime % 60;

      return {
        type: "success",
        content: `Session Statistics:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Commands typed:  ${sessionStats.commandsTyped}
  Session time:    ${minutes}m ${seconds}s
  Session started: ${sessionStart.toLocaleTimeString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      };
    },

    matrix: () => {
      const { setMatrixOverlay, addOutput } = useTerminalStore.getState();

      // Activate matrix overlay
      setMatrixOverlay(true);

      // Matrix quotes and messages
      const matrixQuotes = [
        '"Do you believe in fate, Neo?"',
        '"There is no spoon."',
        '"I know kung fu."',
        '"Welcome to the real world."',
        '"Free your mind."',
        '"The Matrix has you..."',
        '"Follow the white rabbit."',
        '"Wake up, Neo..."',
      ];

      const randomQuote =
        matrixQuotes[Math.floor(Math.random() * matrixQuotes.length)];

      // Progressive matrix messages with decoding animation
      const matrixSequence = [
        { delay: 0, content: "> ENTERING THE MATRIX..." },
        { delay: 1000, content: "> LOADING CONSTRUCT..." },
        { delay: 2000, content: "> DECODING REALITY... ▓▓▓░░░░░░░░░  25%" },
        { delay: 3000, content: "> DECODING REALITY... ▓▓▓▓▓▓░░░░░░  50%" },
        { delay: 4000, content: "> DECODING REALITY... ▓▓▓▓▓▓▓▓▓░░░  75%" },
        { delay: 5000, content: "> DECODING REALITY... ▓▓▓▓▓▓▓▓▓▓▓▓ 100%" },
        { delay: 6000, content: "\n> MATRIX CODE STREAMING..." },
        {
          delay: 6500,
          content: "> 01001101 01100001 01110100 01110010 01101001 01111000",
        },
        {
          delay: 7000,
          content:
            "> 01010010 01100101 01100001 01101100 01101001 01110100 01111001",
        },
        { delay: 7500, content: `\n${randomQuote}` },
        { delay: 8500, content: "\n> REALITY BREACH DETECTED..." },
        { delay: 9000, content: "> RESTORING NORMAL OPERATIONS..." },
        { delay: 9500, content: "> DISCONNECTING FROM MATRIX..." },
        { delay: 10000, content: "\n✓ BACK TO REALITY" },
      ];

      // Schedule progressive outputs
      matrixSequence.forEach(({ delay, content }) => {
        setTimeout(() => {
          addOutput({
            type: "command",
            text: "",
            result: {
              type: "success",
              content: content,
            },
          });
        }, delay);
      });

      // Auto-disable matrix overlay after 10 seconds
      setTimeout(() => {
        setMatrixOverlay(false);
      }, 10000);

      return {
        type: "success",
        content: "🟢 INITIALIZING MATRIX CONNECTION...",
      };
    },

    secret: () => {
      return {
        type: "success",
        content: `
╔════════════════════════════════════════════╗
║         🎮 SECRET DISCOVERED! 🎮          ║
╠════════════════════════════════════════════╣
║                                            ║
║  You found a hidden command!               ║
║                                            ║
║  "The best way to predict the future      ║
║   is to invent it." - Alan Kay            ║
║                                            ║
║  Keep exploring! There might be more...   ║
║                                            ║
║  Try: konami, coffee, hack                ║
║                                            ║
╚════════════════════════════════════════════╝`,
      };
    },

    easteregg: () => {
      return {
        type: "success",
        content: `
  🥚 EASTER EGG FOUND! 🥚

  Congrats! You discovered the easter egg command!

  Here's a virtual cookie: 🍪

  Type 'secret' for more hidden gems!`,
      };
    },

    konami: () => {
      return {
        type: "success",
        content: `
  ↑ ↑ ↓ ↓ ← → ← → B A

  The legendary Konami Code!

  +30 Lives unlocked! 

You get extra respect points! ⭐`,
      };
    },

    coffee: () => {
      return {
        type: "success",
        content: `
      (  )   (   )  )
       ) (   )  (  (
       ( )  (    ) )
       _____________
      <_____________> ___
      |             |/ _ \\
      |               | | |
      |               |_| |
   ___|             |\\___/
  /    \\___________/    \\
  \\_____________________/

      Coffee break time! 

  "Programmer: A machine that turns coffee into code."`,
      };
    },

    hack: () => {
      // This will trigger a progressive output animation
      const { addOutput } = useTerminalStore.getState();

      const hackingSequence = [
        { delay: 0, content: "[INITIALIZING HACKING SEQUENCE...]" },
        { delay: 800, content: "[SCANNING NETWORK... ▓▓▓░░░░░░░░░  25%]" },
        { delay: 1200, content: "[SCANNING NETWORK... ▓▓▓▓▓▓░░░░░░  50%]" },
        { delay: 1600, content: "[SCANNING NETWORK... ▓▓▓▓▓▓▓▓▓░░░  75%]" },
        { delay: 2000, content: "[SCANNING NETWORK... ▓▓▓▓▓▓▓▓▓▓▓▓ 100%] ✓" },
        { delay: 2400, content: "[BYPASSING FIREWALL... ▓▓▓░░░░░░░░░  25%]" },
        { delay: 2800, content: "[BYPASSING FIREWALL... ▓▓▓▓▓▓░░░░░░  50%]" },
        { delay: 3200, content: "[BYPASSING FIREWALL... ▓▓▓▓▓▓▓▓▓░░░  75%]" },
        { delay: 3600, content: "[BYPASSING FIREWALL... ▓▓▓▓▓▓▓▓▓▓▓▓ 100%] ✓" },
        { delay: 4000, content: "[DECRYPTING PASSWORD... ▓▓▓░░░░░░░░░  25%]" },
        { delay: 4400, content: "[DECRYPTING PASSWORD... ▓▓▓▓▓▓░░░░░░  50%]" },
        { delay: 4800, content: "[DECRYPTING PASSWORD... ▓▓▓▓▓▓▓▓▓░░░  75%]" },
        {
          delay: 5200,
          content: "[DECRYPTING PASSWORD... ▓▓▓▓▓▓▓▓▓▓▓▓ 100%] ✓",
        },
        { delay: 5600, content: "[CRACKING MAINFRAME... ▓▓▓░░░░░░░░░  25%]" },
        { delay: 6000, content: "[CRACKING MAINFRAME... ▓▓▓▓▓▓░░░░░░  50%]" },
        { delay: 6400, content: "[CRACKING MAINFRAME... ▓▓▓▓▓▓▓▓▓░░░  75%]" },
        { delay: 6800, content: "[CRACKING MAINFRAME... ▓▓▓▓▓▓▓▓▓▓▓▓ 100%] ✓" },
        { delay: 7200, content: "\n[ACCESSING DATABASE...]" },
        { delay: 7600, content: "[DOWNLOADING FILES...]" },
        { delay: 8000, content: "[EXTRACTING DATA...]" },
        {
          delay: 8400,
          content: "\n╔════════════════════════════════════════╗",
        },
        { delay: 8500, content: "║      ⚠️  ACCESS GRANTED! ⚠️           ║" },
        { delay: 8600, content: "╚════════════════════════════════════════╝" },
        { delay: 9000, content: "\n[SYSTEM COMPROMISED]" },
        { delay: 9400, content: "[INITIATING SELF-DESTRUCT...]" },
        { delay: 9800, content: "[5...]" },
        { delay: 10200, content: "[4...]" },
        { delay: 10600, content: "[3...]" },
        { delay: 11000, content: "[2...]" },
        { delay: 11400, content: "[1...]" },
        { delay: 11800, content: "\n💥 BOOM! 💥" },
        { delay: 12200, content: "\nJust kidding!" },
      ];

      // Schedule progressive outputs
      hackingSequence.forEach(({ delay, content }) => {
        setTimeout(() => {
          addOutput({
            type: "command",
            text: "",
            result: {
              type: "success",
              content: content,
            },
          });
        }, delay);
      });

      return {
        type: "success",
        content: "🔒 INITIATING HACK SEQUENCE...",
      };
    },
  };

  // Execute command if it exists
  if (commands[command]) {
    return commands[command]();
  }

  // Check if user typed a section name or file name directly (noob-friendly)
  const directInput = input.toLowerCase().trim();
  const normalizedInput = directInput
    .replace(/\/$/, "")
    .replace(/\.(txt|json|log|md)$/, "");

  const validSections = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "portfolio",
    "services",
    "stats",
    "contact",
  ];

  if (validSections.includes(normalizedInput)) {
    // Treat it as if they typed "cd [section]"
    const element = document.getElementById(normalizedInput);
    const terminalContent = document.querySelector(".terminal-content");

    if (element && terminalContent) {
      const elementTop = element.offsetTop;
      terminalContent.scrollTo({
        top: elementTop - 100,
        behavior: "smooth",
      });
    }

    setCurrentSection(normalizedInput);
    return {
      type: "success",
      content: `Navigating to ${normalizedInput}...`,
    };
  }

  // Unknown command
  return {
    type: "error",
    content: `Command not found: ${command}. Type "help" for available commands.`,
  };
};

// Autocomplete suggestions
export const getAutocompleteSuggestions = (input) => {
  const commands = [
    "help",
    "ls",
    "cd",
    "cat",
    "clear",
    "whoami",
    "date",
    "time",
    "stats",
    "quote",
    "ascii",
    "matrix",
    "flappy",
    "bird",
    "secret",
    "easteregg",
    "konami",
    "coffee",
    "hack",
  ];
  const sections = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "services",
    "stats",
    "contact",
  ];

  if (input.startsWith("cd ")) {
    const partial = input.slice(3);
    return sections.filter((s) => s.startsWith(partial)).map((s) => `cd ${s}`);
  }

  if (input.startsWith("cat ")) {
    const partial = input.slice(4);
    const files = ["about.txt", "skills.json", "experience.log", "services.md"];
    return files.filter((f) => f.startsWith(partial)).map((f) => `cat ${f}`);
  }

  return commands.filter((cmd) => cmd.startsWith(input));
};
