import { useTranslation } from 'react-i18next';

const TerminalChrome = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="terminal-chrome bg-elevated-black border-b border-comment-green">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Window Controls */}
        <div className="flex items-center space-x-2">
          <button
            className="w-3 h-3 rounded-full bg-error-red hover:opacity-80 transition-opacity"
            title="Close"
            aria-label="Close terminal"
          />
          <button
            className="w-3 h-3 rounded-full bg-yellow-500 hover:opacity-80 transition-opacity"
            title="Minimize"
            aria-label="Minimize terminal"
          />
          <button
            className="w-3 h-3 rounded-full bg-matrix-green hover:opacity-80 transition-opacity"
            title="Maximize"
            aria-label="Maximize terminal"
          />
        </div>

        {/* Terminal Title */}
        <div className="flex-1 text-center">
          <span className="text-comment-green font-fira text-sm">
            user@jevta.site:~
          </span>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => changeLanguage('en')}
            className={`text-xs font-fira transition-colors ${
              i18n.language === 'en'
                ? 'text-lime-terminal'
                : 'text-comment-green hover:text-matrix-green'
            }`}
            title="Switch to English"
            aria-label="Switch to English"
          >
            EN
          </button>
          <span className="text-comment-green text-xs">|</span>
          <button
            onClick={() => changeLanguage('sr')}
            className={`text-xs font-fira transition-colors ${
              i18n.language === 'sr'
                ? 'text-lime-terminal'
                : 'text-comment-green hover:text-matrix-green'
            }`}
            title="Prebaci na srpski"
            aria-label="Prebaci na srpski"
          >
            SR
          </button>
        </div>
      </div>
    </div>
  );
};

export default TerminalChrome;
