import { useState, useCallback } from 'react';
import { SparklesSection } from '../components/SparklesSection';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { playOnce } = useAudioPlayer('');

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    playOnce('/audio/click.mp3', 0.3);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:adi.vish2831@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setSubmitStatus('success');
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
    
    setIsSubmitting(false);
  }, [formData, playOnce]);

  const handleBackToTop = () => {
    playOnce('/audio/click.mp3', 0.3);
    document.getElementById('name')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SparklesSection
      id="contact"
      className="scroll-section py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col items-center gap-8 md:gap-10 lg:gap-12 bg-[var(--bg-color)] relative transition-colors duration-300
        before:content-[''] before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:w-screen before:border-t before:border-dashed before:border-[var(--edge)] before:h-0 before:pointer-events-none before:z-0 before:transition-colors before:duration-300
        max-sm:py-8 max-sm:gap-6
        max-[480px]:py-6 max-[480px]:px-3 max-[480px]:gap-5"
    >
      <h2 className="text-left text-3xl font-semibold m-0 mb-8 tracking-[-0.02em] text-[var(--text-color)] max-md:text-[2rem] max-sm:text-[1.75rem] max-[480px]:text-[1.5rem] max-[360px]:text-xl">
        Let's connect!
      </h2>

      <div className="w-full max-w-[680px] lg:max-w-[720px] xl:max-w-[760px] mx-auto text-center mb-6 md:mb-7 lg:mb-8">
        <p className="text-[var(--text-color)] text-base leading-[1.8] mb-6 opacity-80 max-sm:text-[0.95rem] max-sm:leading-[1.7] max-sm:mb-5 max-[480px]:text-[0.9375rem] max-[480px]:mb-4 max-[360px]:text-[0.875rem]">
          If a project sparked something or you just want to jam on builds, drop me a line.
        </p>
        <p className="text-[var(--text-color)] text-[1.1rem] font-semibold mt-8 opacity-100 max-sm:text-base max-[480px]:text-base max-[480px]:mt-6">
          Always keen to collaborate, learn, and ship new ideas.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-[680px] lg:max-w-[720px] xl:max-w-[760px] mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-[var(--text-color)] opacity-80 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded text-[var(--text-color)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors duration-200
                  max-sm:px-3 max-sm:py-2.5"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-[var(--text-color)] opacity-80 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded text-[var(--text-color)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors duration-200
                  max-sm:px-3 max-sm:py-2.5"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm text-[var(--text-color)] opacity-80 mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded text-[var(--text-color)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors duration-200
                max-sm:px-3 max-sm:py-2.5"
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-[var(--text-color)] opacity-80 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded text-[var(--text-color)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors duration-200 resize-none
                max-sm:px-3 max-sm:py-2.5"
              placeholder="Tell me about your project or just say hi..."
            />
          </div>
          {submitStatus === 'success' && (
            <div className="p-3 bg-[rgba(60,242,255,0.1)] border border-[var(--accent-cyan)] rounded text-[var(--accent-cyan)] text-sm">
              Message sent! Your email client should open shortly.
            </div>
          )}
          <div className="flex gap-5 items-center flex-wrap justify-center pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-transparent text-[var(--text-color)] border border-[var(--border-color)] rounded text-[15px] font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:border-[var(--accent-cyan)] hover:-translate-y-[3px]
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:border-[var(--border-color)]
                max-sm:text-sm max-sm:px-5 max-sm:py-3
                max-[480px]:text-[13px] max-[480px]:px-4 max-[480px]:py-2.5"
            >
              <i className="fa-solid fa-paper-plane text-base max-[480px]:text-sm" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>

            <a
              href="https://drive.google.com/file/d/10mnhe0xe_O6zIWV1EMZNyNX3jRSG-1RO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-transparent text-[var(--text-color)] border border-[var(--border-color)] rounded text-[15px] font-medium no-underline transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:border-[var(--accent-cyan)] hover:-translate-y-[3px]
                max-sm:text-sm max-sm:px-5 max-sm:py-3
                max-[480px]:text-[13px] max-[480px]:px-4 max-[480px]:py-2.5"
            >
              <i className="fa-solid fa-file-pdf text-base max-[480px]:text-sm" />
              <span>Resume</span>
            </a>
          </div>
        </form>
      </div>

      {/* Quote */}
      <div className="w-full max-w-[700px] lg:max-w-[750px] xl:max-w-[800px] mx-auto text-center mt-8 md:mt-10 lg:mt-12 max-sm:mt-7 max-[480px]:mt-6">
        <p className="text-[1.125rem] leading-relaxed text-[var(--text-color)] opacity-50 italic font-normal tracking-[0.01em] max-sm:text-base max-[480px]:text-[0.9375rem] max-[360px]:text-[0.875rem]">
          "Every vision deserves to be built into reality."
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex justify-center items-center flex-wrap gap-4 mt-10 max-md:gap-3.5 max-md:mt-8 max-sm:gap-3 max-sm:mt-7 max-sm:flex-row max-sm:w-full max-[480px]:gap-2.5 max-[480px]:mt-6 max-[480px]:px-4 max-[360px]:gap-2 max-[360px]:mt-6 max-[360px]:px-3">
        {/* Back to Top */}
        <button
          onClick={handleBackToTop}
          className="inline-flex flex-col items-center gap-1.5 px-5 py-3 bg-[rgba(128,128,128,0.05)] border border-[var(--border-color)] opacity-70 rounded-3xl text-[var(--text-color)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] no-underline cursor-pointer w-[140px] min-h-[84px] justify-center
            hover:bg-[rgba(128,128,128,0.1)] hover:opacity-100 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(128,128,128,0.2)]
            max-sm:px-4 max-sm:py-2.5 max-sm:gap-[5px]
            max-[480px]:px-3.5 max-[480px]:py-2.5 max-[480px]:gap-1"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--border-color)] opacity-80 bg-transparent text-[var(--text-color)] text-[15px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            max-sm:w-[26px] max-sm:h-[26px] max-sm:text-[13px]
            max-[480px]:w-7 max-[480px]:h-7 max-[480px]:text-sm
            max-[360px]:w-[26px] max-[360px]:h-[26px] max-[360px]:text-[13px]"
          >
            <i className="fa-solid fa-arrow-up" />
          </span>
          <span className="text-[11px] text-[var(--text-color)] opacity-40 lowercase tracking-[0.05em] font-medium max-sm:text-[9px] max-[480px]:text-[10px] max-[360px]:text-[9px]">
            back to top
          </span>
        </button>

        {/* GitHub Profile Link */}
        <a
          href="https://github.com/adivish31"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center gap-1.5 px-5 py-3 bg-[rgba(128,128,128,0.05)] border border-[var(--border-color)] opacity-70 rounded-3xl text-[var(--text-color)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] no-underline cursor-pointer w-[140px] min-h-[84px] justify-center
            hover:bg-[rgba(128,128,128,0.1)] hover:opacity-100 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(128,128,128,0.2)] hover:border-[var(--accent-cyan)]
            max-sm:px-4 max-sm:py-2.5 max-sm:gap-[5px]
            max-[480px]:px-3.5 max-[480px]:py-2 max-[480px]:gap-1
            max-[360px]:px-3.5 max-[360px]:py-2 max-[360px]:gap-1"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--border-color)] opacity-80 bg-transparent text-[var(--text-color)] text-[15px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            max-sm:w-[26px] max-sm:h-[26px] max-sm:text-[13px]
            max-[480px]:w-7 max-[480px]:h-7 max-[480px]:text-sm
            max-[360px]:w-[26px] max-[360px]:h-[26px] max-[360px]:text-[13px]"
          >
            <i className="fa-brands fa-github" />
          </span>
          <span className="text-[11px] text-[var(--text-color)] opacity-40 lowercase tracking-[0.05em] font-medium max-sm:text-[9px] max-[480px]:text-[10px] max-[360px]:text-[9px]">
            view code
          </span>
        </a>
      </div>
    </SparklesSection>
  );
}
