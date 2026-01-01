import { useRef, useState } from 'react';
import { useClock } from '../hooks/useClock';
import { useSparkles } from '../hooks/useSparkles';
import { ThemeToggle } from './ThemeToggle';
import { SocialLink } from './SocialLink';

export function Navbar() {
  const time = useClock();
  const navRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useSparkles(navRef, {
    minSize: 0.4,
    maxSize: 1,
    particleDensity: 1500,
    particleColor: '#E5E7EB',
    opacity: 0.12,
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      id="navbar"
      className="sticky top-0 z-[100] flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-16 sm:h-18 md:h-20 bg-[var(--bg-color)] transition-colors duration-300 overflow-visible backdrop-blur-md bg-opacity-95
        after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:w-screen after:border-b after:border-dashed after:border-[var(--edge)] after:h-0 after:pointer-events-none after:z-[1] after:transition-colors after:duration-300
        max-sm:h-[60px]
        max-[480px]:px-3 max-[480px]:h-[56px]"
    >
      {/* Left side - Clock */}
      <div className="relative z-[2] flex items-center">
        <div className="flex flex-col items-start gap-0.5">
          <div className="text-lg font-normal text-[var(--text-color)] font-sans tracking-[0.5px] max-md:text-base max-sm:text-sm">
            {time || '12:00:00 PM'}
          </div>
          <div className="text-[11px] font-normal text-[var(--text-color)] opacity-60 tracking-[0.3px] max-md:text-[10px] max-sm:text-[9px]">
            GMT + 5 : 30 • Ranchi, Jharkhand
          </div>
        </div>
      </div>

      {/* Hamburger Menu Button - Only visible on mobile */}
      <button
        onClick={toggleMobileMenu}
        className="hidden max-sm:flex relative z-[12] flex-col justify-center items-center w-10 h-10 p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-color)] transition-all duration-300 hover:bg-[rgba(128,128,128,0.08)]"
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span
          className={`block w-5 h-0.5 bg-[var(--text-color)] rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''
            }`}
        />
        <span
          className={`block w-5 h-0.5 bg-[var(--text-color)] rounded-full transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''
            }`}
        />
      </button>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="relative z-[2] flex items-center gap-3 max-sm:hidden">
        <nav className="flex items-center gap-2">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3 py-1.5 text-sm text-[var(--text-color)] opacity-80 hover:opacity-100 hover:text-[var(--accent-cyan)] transition-all duration-200 rounded"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3 py-1.5 text-sm text-[var(--text-color)] opacity-80 hover:opacity-100 hover:text-[var(--accent-cyan)] transition-all duration-200 rounded"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3 py-1.5 text-sm text-[var(--text-color)] opacity-80 hover:opacity-100 hover:text-[var(--accent-cyan)] transition-all duration-200 rounded"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3 py-1.5 text-sm text-[var(--text-color)] opacity-80 hover:opacity-100 hover:text-[var(--accent-cyan)] transition-all duration-200 rounded"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3 py-1.5 text-sm text-[var(--text-color)] opacity-80 hover:opacity-100 hover:text-[var(--accent-cyan)] transition-all duration-200 rounded"
          >
            Stack
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3 py-1.5 text-sm text-[var(--text-color)] opacity-80 hover:opacity-100 hover:text-[var(--accent-cyan)] transition-all duration-200 rounded"
          >
            Contact
          </a>
        </nav>
        <a
          href="https://drive.google.com/file/d/1kOLwW3EA9fCyCFz6QjQ1t3LyvmXSCDFY/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-3 py-1.5 text-sm text-[var(--text-color)] border border-[var(--border-color)] rounded transition-all duration-200
            hover:bg-[var(--hover-bg-color)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] opacity-80 hover:opacity-100"
        >
          <i className="fa-solid fa-file-pdf text-xs" />
          <span>Resume</span>
        </a>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[8] transition-opacity duration-300 sm:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[var(--bg-color)] border-l border-[var(--border-color)] z-[10] transition-transform duration-300 ease-out sm:hidden shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[var(--border-color)]">
            <span className="text-xs font-semibold text-[var(--text-color)] opacity-50 uppercase tracking-[0.15em]">Navigation</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[rgba(128,128,128,0.1)] transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-4 h-4 text-[var(--text-color)] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 p-5 space-y-6">
            {/* Theme Section */}
            <div className="space-y-3">
              <span className="text-[10px] font-semibold text-[var(--text-color)] opacity-40 uppercase tracking-[0.2em]">Appearance</span>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(128,128,128,0.05)] border border-[var(--border-color)]">
                <span className="text-sm text-[var(--text-color)] opacity-80 flex-1">Theme</span>
                <ThemeToggle />
              </div>
            </div>

            {/* Navigation Section */}
            <div className="space-y-3">
              <span className="text-[10px] font-semibold text-[var(--text-color)] opacity-40 uppercase tracking-[0.2em]">Navigation</span>
              <div className="flex flex-col gap-2" onClick={handleLinkClick}>
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 bg-transparent text-[var(--text-color)] border border-[var(--border-color)] opacity-80 rounded transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-100 hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:bg-[var(--hover-bg-color)]"
                >
                  <i className="fa-solid fa-house text-base flex-shrink-0" />
                  <span className="text-sm font-medium tracking-[0.01em] whitespace-nowrap">Home</span>
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 bg-transparent text-[var(--text-color)] border border-[var(--border-color)] opacity-80 rounded transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-100 hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:bg-[var(--hover-bg-color)]"
                >
                  <i className="fa-solid fa-user text-base flex-shrink-0" />
                  <span className="text-sm font-medium tracking-[0.01em] whitespace-nowrap">About</span>
                </a>
                <a
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 bg-transparent text-[var(--text-color)] border border-[var(--border-color)] opacity-80 rounded transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-100 hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:bg-[var(--hover-bg-color)]"
                >
                  <i className="fa-solid fa-briefcase text-base flex-shrink-0" />
                  <span className="text-sm font-medium tracking-[0.01em] whitespace-nowrap">Experience</span>
                </a>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 bg-transparent text-[var(--text-color)] border border-[var(--border-color)] opacity-80 rounded transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-100 hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:bg-[var(--hover-bg-color)]"
                >
                  <i className="fa-solid fa-code text-base flex-shrink-0" />
                  <span className="text-sm font-medium tracking-[0.01em] whitespace-nowrap">Projects</span>
                </a>
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 bg-transparent text-[var(--text-color)] border border-[var(--border-color)] opacity-80 rounded transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-100 hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:bg-[var(--hover-bg-color)]"
                >
                  <i className="fa-solid fa-layer-group text-base flex-shrink-0" />
                  <span className="text-sm font-medium tracking-[0.01em] whitespace-nowrap">Stack</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 bg-transparent text-[var(--text-color)] border border-[var(--border-color)] opacity-80 rounded transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-100 hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:bg-[var(--hover-bg-color)]"
                >
                  <i className="fa-solid fa-envelope text-base flex-shrink-0" />
                  <span className="text-sm font-medium tracking-[0.01em] whitespace-nowrap">Contact</span>
                </a>
              </div>
            </div>

            {/* Resume Section */}
            <div className="space-y-3">
              <span className="text-[10px] font-semibold text-[var(--text-color)] opacity-40 uppercase tracking-[0.2em]">Resources</span>
              <div className="flex flex-col gap-2" onClick={handleLinkClick}>
                <a
                  href="https://drive.google.com/file/d/10mnhe0xe_O6zIWV1EMZNyNX3jRSG-1RO/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2 bg-transparent text-[var(--text-color)] border border-[var(--border-color)] opacity-80 rounded transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-100 hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] hover:bg-[var(--hover-bg-color)]"
                >
                  <i className="fa-solid fa-file-pdf text-base flex-shrink-0" />
                  <span className="text-sm font-medium tracking-[0.01em] whitespace-nowrap">Resume</span>
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div className="space-y-3">
              <span className="text-[10px] font-semibold text-[var(--text-color)] opacity-40 uppercase tracking-[0.2em]">Connect</span>
              <div className="flex flex-col gap-2" onClick={handleLinkClick}>
                <SocialLink
                  href="https://github.com/adivish31"
                  icon="fa-brands fa-github"
                  label="Github"
                  tooltip="@adivish31"
                  showLabel={true}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/adivish2818/"
                  icon="fa-brands fa-linkedin"
                  label="Linkedin"
                  tooltip="@adivish2818"
                  showLabel={true}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-[var(--border-color)]">
            <p className="text-[10px] text-[var(--text-color)] opacity-30 text-center tracking-wide">
              © 2024 Aditya Vishwakarma
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
