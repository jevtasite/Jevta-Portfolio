import { useState, useRef, useEffect } from 'react';
import useTerminalStore from '../../store/terminalStore';
import { parseCommand } from '../../utils/commands';

const CommandLine = () => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const {
    addCommand,
    navigateHistory,
    setCurrentCommand,
    currentCommand,
    addOutput,
    clearOutput,
    setCurrentSection,
  } = useTerminalStore();

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Sync input with store
  useEffect(() => {
    setInput(currentCommand);
  }, [currentCommand]);

  const handleKeyDown = (e) => {
    // Arrow Up - Previous command
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      navigateHistory('up');
    }
    // Arrow Down - Next command
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      navigateHistory('down');
    }
    // Tab - Autocomplete (placeholder for now)
    else if (e.key === 'Tab') {
      e.preventDefault();
      // TODO: Implement autocomplete
    }
    // Enter - Execute command
    else if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(input.trim());
    }
  };

  const handleCommand = (command) => {
    if (!command) return;

    // Add to history
    addCommand(command);

    // Parse and execute command
    const result = parseCommand(command, {
      addOutput,
      clearOutput,
      setCurrentSection,
    });

    // Add command and result to output (only if result is not null)
    if (result !== null) {
      addOutput({
        type: 'command',
        text: command,
        result: result,
      });
    }

    // Clear input
    setInput('');
    setCurrentCommand('');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setCurrentCommand(value);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-elevated-black border-t-2 border-lime-terminal p-2 sm:p-4"
      style={{
        zIndex: 9999,
        boxShadow: '0 -4px 20px rgba(57, 255, 20, 0.1)',
        isolation: 'isolate'
      }}
    >
      <div className="max-w-terminal mx-auto flex items-center space-x-1 sm:space-x-2">
        {/* Prompt */}
        <span className="text-matrix-green font-fira text-xs sm:text-sm whitespace-nowrap">
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
            className="w-full bg-transparent border-none outline-none text-matrix-green font-fira text-xs sm:text-sm"
            placeholder="Type 'help'..."
            spellCheck="false"
            autoComplete="off"
            aria-label="Terminal command input"
          />
        </div>
      </div>
    </div>
  );
};

export default CommandLine;
