import { create } from 'zustand';

const useTerminalStore = create((set) => ({
  // Command history
  commandHistory: [],
  historyIndex: -1,

  // Current command input
  currentCommand: '',

  // Terminal output
  output: [],

  // Current section
  currentSection: 'home',

  // Game state
  gameActive: false,
  currentGame: null,

  // Console visibility
  showConsole: false,

  // Session statistics
  sessionStats: {
    commandsTyped: 0,
    sessionStart: new Date().toISOString(),
  },

  // Matrix overlay
  matrixOverlayActive: false,

  // Actions
  addCommand: (command) =>
    set((state) => ({
      commandHistory: [...state.commandHistory, command],
      historyIndex: -1,
      sessionStats: {
        ...state.sessionStats,
        commandsTyped: state.sessionStats.commandsTyped + 1,
      },
    })),

  setCurrentCommand: (command) =>
    set({ currentCommand: command }),

  navigateHistory: (direction) =>
    set((state) => {
      const newIndex = direction === 'up'
        ? Math.min(state.historyIndex + 1, state.commandHistory.length - 1)
        : Math.max(state.historyIndex - 1, -1);

      const command = newIndex === -1
        ? ''
        : state.commandHistory[state.commandHistory.length - 1 - newIndex];

      return {
        historyIndex: newIndex,
        currentCommand: command,
      };
    }),

  addOutput: (output) =>
    set((state) => ({
      output: [...state.output, output],
    })),

  clearOutput: () =>
    set({ output: [] }),

  setCurrentSection: (section) =>
    set({ currentSection: section }),

  setGameActive: (active) =>
    set({ gameActive: active }),

  setCurrentGame: (game) =>
    set({ currentGame: game }),

  setShowConsole: (show) =>
    set({ showConsole: show }),

  setMatrixOverlay: (active) =>
    set({ matrixOverlayActive: active }),
}));

export default useTerminalStore;
