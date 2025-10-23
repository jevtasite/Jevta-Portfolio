import { useState, useRef, useEffect } from "react";
import useTerminalStore from "../../store/terminalStore";
import { parseCommand } from "../../utils/commands";

const CommandLine = () => {
  const [input, setInput] = useState("");
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const [showCommandLine, setShowCommandLine] = useState(false);
  const inputRef = useRef(null);

  const {
    addCommand,
    navigateHistory,
    setCurrentCommand,
    currentCommand,
    addOutput,
    clearOutput,
    setCurrentSection,
    setGameActive,
    setCurrentGame,
    setShowConsole,
    output,
  } = useTerminalStore();

  // Focus input on mount (desktop only - prevent mobile keyboard popup)
  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;

    if (inputRef.current && !isMobile) {
      inputRef.current.focus();
    }
  }, []);

  // Global Enter key listener to focus command line (desktop only)
  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;

    const handleGlobalKeyPress = (e) => {
      // Focus input when Enter is pressed (unless already focused or in a game)
      // Only on desktop to prevent mobile keyboard popup
      if (
        e.key === "Enter" &&
        document.activeElement !== inputRef.current &&
        !isMobile
      ) {
        const { gameActive } = useTerminalStore.getState();
        if (!gameActive && inputRef.current) {
          e.preventDefault();
          inputRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyPress);
    return () => window.removeEventListener("keydown", handleGlobalKeyPress);
  }, []);

  // Show command line with CRT flash after hero content finishes
  useEffect(() => {
    // Hero CRT reveal: 500ms delay + 800ms animation = 1300ms
    // Add flash AFTER hero animation completes
    const timer = setTimeout(() => {
      setShowCommandLine(true);
    }, 2400); // 500ms delay + 800ms hero animation + 500ms buffer

    return () => clearTimeout(timer);
  }, []);

  // Sync input with store
  useEffect(() => {
    setInput(currentCommand);
  }, [currentCommand]);

  // Handle keyboard visibility on mobile
  useEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) return;

    const handleViewportResize = () => {
      const viewport = window.visualViewport;
      const viewportHeight = viewport.height;
      const windowHeight = window.innerHeight;
      const offset = windowHeight - viewportHeight;

      setKeyboardOffset(offset);
    };

    window.visualViewport.addEventListener("resize", handleViewportResize);
    window.visualViewport.addEventListener("scroll", handleViewportResize);

    return () => {
      window.visualViewport.removeEventListener("resize", handleViewportResize);
      window.visualViewport.removeEventListener("scroll", handleViewportResize);
    };
  }, []);

  const handleKeyDown = (e) => {
    // Arrow Up - Previous command
    if (e.key === "ArrowUp") {
      e.preventDefault();
      navigateHistory("up");
    }
    // Arrow Down - Next command
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      navigateHistory("down");
    }
    // Tab - Autocomplete (placeholder for now)
    else if (e.key === "Tab") {
      e.preventDefault();
      // TODO: Implement autocomplete
    }
    // Enter - Execute command
    else if (e.key === "Enter") {
      e.preventDefault();
      const command = input.trim();

      // Execute command
      handleCommand(command);

      // Blur to close mobile keyboard - multiple methods for compatibility
      if (inputRef.current) {
        inputRef.current.blur();
      }

      // Remove focus from any active element
      if (document.activeElement) {
        document.activeElement.blur();
      }

      // Set readonly temporarily to force keyboard close (iOS fix)
      if (inputRef.current) {
        inputRef.current.setAttribute("readonly", "readonly");
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.removeAttribute("readonly");
          }
        }, 100);
      }
    }
  };

  const handleCommand = (command) => {
    if (!command) return;

    // Show console immediately when command is executed (before output is added)
    setShowConsole(true);

    // Add to history
    addCommand(command);

    // Parse and execute command
    const result = parseCommand(command, {
      addOutput,
      clearOutput,
      setCurrentSection,
      setGameActive,
      setCurrentGame,
    });

    // Add command and result to output (only if result is not null)
    if (result !== null) {
      addOutput({
        type: "command",
        text: command,
        result: result,
      });
    }

    // Clear input
    setInput("");
    setCurrentCommand("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setCurrentCommand(value);

    // Show console when user starts typing (if there's any output to show)
    if (value.length > 0 && output.length > 0) {
      setShowConsole(true);
    }
  };

  // Show console when input is focused and user starts interacting
  const handleInputFocus = () => {
    // Only auto-show if there's output and user is actively typing
    if (input.length > 0 && output.length > 0) {
      setShowConsole(true);
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-elevated-black border-t-2 border-lime-terminal p-2 sm:p-4 transition-transform duration-200 ${
        showCommandLine ? "crt-flash" : "opacity-0"
      }`}
      style={{
        zIndex: 9999,
        boxShadow: "0 -4px 20px rgba(57, 255, 20, 0.1)",
        isolation: "isolate",
        transform: `translateY(-${keyboardOffset}px)`,
      }}
    >
      <div className="max-w-terminal mx-auto flex items-center space-x-2">
        {/* Prompt */}
        <span className="text-matrix-green font-fira text-base sm:text-lg whitespace-nowrap">
          <span className="hidden sm:inline">user@jevta.site:~$</span>
          <span className="sm:hidden">$</span>
        </span>

        {/* Input */}
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
            className="w-full bg-transparent border-none outline-none text-matrix-green font-fira text-base sm:text-lg placeholder:text-comment-green/50"
            placeholder="Type 'help'..."
            spellCheck="false"
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            inputMode="text"
            aria-label="Terminal command input"
          />
        </div>
      </div>
    </div>
  );
};

export default CommandLine;
