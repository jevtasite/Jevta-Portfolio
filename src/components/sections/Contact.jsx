import { useEffect, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=jevta.site@gmail.com', '_blank');
  };

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61552420501147',
      icon: 'FB',
      ascii: `
 ╔═══╗
 ║ f ║
 ╚═══╝`,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/jevtasite',
      icon: 'GH',
      ascii: `
 ╔═══╗
 ║ ⚉ ║
 ╚═══╝`,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jevta.site/',
      icon: 'IG',
      ascii: `
 ╔═══╗
 ║ ◉ ║
 ╚═══╝`,
    },
  ];

  return (
    <section
      id="contact"
      className="contact-section min-h-screen py-20 px-4 relative z-10 bg-elevated-black/20"
    >
      <div className="max-w-terminal mx-auto">
        {/* Terminal Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-matrix-green font-fira text-sm mb-2">
            <span>$</span>
            <span>ping contact</span>
          </div>
          <div className="border-l-2 border-comment-green pl-4">
            <h2 className="text-lime-terminal font-fira text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
          </div>
        </div>

        {/* Ping Response Animation */}
        <div className={`mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="border border-comment-green bg-elevated-black/50 p-4 font-fira text-xs">
            <div className="text-lime-terminal mb-2">
              PING jevta.site (192.168.1.100) 56(84) bytes of data.
            </div>
            <div className="space-y-1 text-comment-green">
              <div>64 bytes from jevta.site: icmp_seq=1 ttl=64 time=0.042 ms</div>
              <div>64 bytes from jevta.site: icmp_seq=2 ttl=64 time=0.038 ms</div>
              <div>64 bytes from jevta.site: icmp_seq=3 ttl=64 time=0.041 ms</div>
            </div>
            <div className="text-lime-terminal mt-2">
              --- jevta.site ping statistics ---
            </div>
            <div className="text-matrix-green">
              3 packets transmitted, 3 received, 0% packet loss
            </div>
          </div>
        </div>

        {/* Contact Content */}
        <div className={`grid md:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Email Section */}
          <div className="space-y-6">
            <div className="border border-comment-green bg-elevated-black/50 p-6 hover:border-lime-terminal transition-all duration-300">
              <h3 className="text-lime-terminal font-fira text-xl mb-4 flex items-center gap-2">
                <span>✉</span>
                Email
              </h3>

              <div className="space-y-4">
                <p className="text-comment-green font-fira text-sm">
                  <span className="text-matrix-green">// </span>
                  Send me an email and I'll get back to you as soon as possible!
                </p>

                <div className="border border-comment-green/30 bg-terminal-black p-4">
                  <div className="flex items-center space-x-2 text-matrix-green font-fira text-sm mb-2">
                    <span>$</span>
                    <span>mail -s "Hello" jevta.site@gmail.com</span>
                  </div>
                  <button
                    onClick={handleEmailClick}
                    className="w-full mt-4 border-2 border-lime-terminal text-lime-terminal px-6 py-3 font-fira hover:bg-lime-terminal hover:text-terminal-black transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span className="text-lg">✉</span>
                    <span>Open Gmail Composer</span>
                  </button>
                </div>

                <div className="text-comment-green font-fira text-xs">
                  <span className="text-matrix-green">→</span> jevta.site@gmail.com
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="border border-comment-green bg-elevated-black/50 p-6">
              <h3 className="text-lime-terminal font-fira text-lg mb-4">
                &gt; Response Time
              </h3>
              <div className="space-y-2 font-fira text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-terminal rounded-full animate-pulse" />
                  <span className="text-comment-green">Usually within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-matrix-green rounded-full" />
                  <span className="text-comment-green">Available for freelance work</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-matrix-green rounded-full" />
                  <span className="text-comment-green">Open to collaborations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <div className="border border-comment-green bg-elevated-black/50 p-6">
              <h3 className="text-lime-terminal font-fira text-xl mb-4">
                &gt; Social Links
              </h3>

              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-comment-green/50 bg-terminal-black px-3 py-2 hover:border-lime-terminal hover:bg-elevated-black/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-matrix-green font-fira text-xs group-hover:text-lime-terminal transition-colors">
                          [{social.icon}]
                        </div>
                        <div>
                          <div className="text-lime-terminal font-fira text-sm font-bold">
                            {social.name}
                          </div>
                          <div className="text-comment-green font-fira text-xs">
                            @jevta.site
                          </div>
                        </div>
                      </div>
                      <span className="text-comment-green group-hover:text-lime-terminal transition-colors">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Info */}
            <div className="border border-comment-green bg-elevated-black/50 p-6">
              <h3 className="text-lime-terminal font-fira text-lg mb-4">
                &gt; Location & Info
              </h3>
              <div className="space-y-2 font-fira text-sm">
                <div className="flex justify-between text-comment-green">
                  <span>Location:</span>
                  <span className="text-matrix-green">Serbia 🇷🇸</span>
                </div>
                <div className="flex justify-between text-comment-green">
                  <span>Timezone:</span>
                  <span className="text-matrix-green">UTC+1 (CET)</span>
                </div>
                <div className="flex justify-between text-comment-green">
                  <span>Languages:</span>
                  <span className="text-matrix-green">EN / SR</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-12 border border-lime-terminal bg-elevated-black/50 p-6 text-center">
          <p className="text-comment-green font-fira text-sm">
            <span className="text-lime-terminal">$</span> echo "Looking forward to hearing from you!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
