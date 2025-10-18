import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    // Find the terminal-content container which is the actual scrolling element
    const terminalContent = document.querySelector('.terminal-content');
    if (terminalContent) {
      terminalContent.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Fallback to window scroll
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61552420501147',
      ascii: 'FB',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/jevtasite',
      ascii: 'GH',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jevta.site/',
      ascii: 'IG',
    },
  ];

  return (
    <footer className="footer-section py-12 px-4 relative z-10 border-t border-comment-green bg-elevated-black">
      <div className="max-w-terminal mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lime-terminal font-fira text-2xl font-bold mb-4">
              JEVTA
            </h3>
            <p className="text-comment-green font-fira text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lime-terminal font-fira text-lg mb-4">
              &gt; {t('footer.quickLinks')}
            </h4>
            <div className="space-y-2 font-fira text-sm">
              {[
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' },
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-comment-green hover:text-lime-terminal transition-colors"
                >
                  $ cd {link.name.toLowerCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lime-terminal font-fira text-lg mb-4">
              &gt; {t('footer.connect')}
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-comment-green text-comment-green px-4 py-2 font-fira text-xs hover:border-lime-terminal hover:text-lime-terminal transition-all"
                  aria-label={social.name}
                >
                  [{social.ascii}]
                </a>
              ))}
            </div>

            <div className="mt-4">
              <a
                href="mailto:jevta.site@gmail.com"
                className="text-comment-green font-fira text-sm hover:text-lime-terminal transition-colors inline-flex items-center gap-2"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                jevta.site@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-comment-green/30 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Copyright */}
          <div className="text-comment-green font-fira text-sm text-center">
            <span className="text-lime-terminal shine-logo">Jevta</span> {t('footer.copyright')}
            <span className="text-matrix-green ml-2">// {t('footer.allRights')}</span>
          </div>
        </div>

        {/* Terminal Prompt */}
        <div className="mt-8 border border-comment-green/30 bg-terminal-black p-4">
          <div className="flex items-center space-x-2 font-fira text-xs">
            <span className="text-matrix-green">$</span>
            <span className="text-comment-green">
              echo "{t('footer.thanks')}"
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
