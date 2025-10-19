import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const TerminalChrome = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="terminal-chrome bg-elevated-black border-b border-comment-green">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Window Controls */}
        <div className="flex items-center space-x-3">
          <button
            className="w-4 h-4 rounded-full bg-error-red hover:opacity-80 transition-opacity p-2"
            title="Close"
            aria-label="Close terminal"
          />
          <button
            className="w-4 h-4 rounded-full bg-yellow-500 hover:opacity-80 transition-opacity p-2"
            title="Minimize"
            aria-label="Minimize terminal"
          />
          <button
            className="w-4 h-4 rounded-full bg-matrix-green hover:opacity-80 transition-opacity p-2"
            title="Maximize"
            aria-label="Maximize terminal"
          />
        </div>

        {/* Terminal Title */}
        <div className="flex-1 text-center">
          <span className="text-comment-green font-fira text-base">
            user@jevta.site:~
          </span>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-2">
          {/* Professional Mode Toggle */}
          <button
            onClick={() => navigate('/')}
            className="text-xs font-fira transition-colors px-3 py-1.5 border border-comment-green text-comment-green hover:bg-comment-green hover:text-terminal-black flex items-center gap-1"
            title="Switch to Professional Portfolio"
            aria-label="Switch to Professional Portfolio"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Professional</span>
          </button>

          <span className="text-comment-green text-sm">|</span>

          {/* Language Switcher */}
          <button
            onClick={() => changeLanguage('en')}
            className={`text-sm font-fira transition-colors px-3 py-1.5 ${
              i18n.language === 'en'
                ? 'text-lime-terminal'
                : 'text-comment-green hover:text-matrix-green'
            }`}
            title="Switch to English"
            aria-label="Switch to English"
          >
            EN
          </button>
          <span className="text-comment-green text-sm">|</span>
          <button
            onClick={() => changeLanguage('sr')}
            className={`text-sm font-fira transition-colors px-3 py-1.5 ${
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
