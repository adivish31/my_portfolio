import { useRef } from 'react';
import { useSparkles } from '../hooks/useSparkles';

const FOOTER_LINKS = [
  { href: 'mailto:adi.vish2831@gmail.com', icon: 'fa-solid fa-envelope', label: 'Mail', tooltip: 'adi.vish2831@gmail.com' },
  { href: 'https://github.com/adivish31', icon: 'fa-brands fa-github', label: 'Github', tooltip: '@adivish31' },
  { href: 'https://twitter.com/Adi_vish28', icon: 'fa-brands fa-x-twitter', label: 'Twitter', tooltip: '@Adi_vish28' },
  { href: 'https://www.linkedin.com/in/adivish2818/', icon: 'fa-brands fa-linkedin', label: 'LinkedIn', tooltip: '@adivish2818' },
  { href: 'https://www.instagram.com/adi._.vish?igsh=MW9iaGdhZXFhYTdpYg==', icon: 'fa-brands fa-instagram', label: 'Instagram', tooltip: '@adi._.vish' },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useSparkles(footerRef, {
    minSize: 0.4,
    maxSize: 1,
    particleDensity: 1200,
    particleColor: '#E5E7EB',
    opacity: 0.12,
  });

  return (
    <footer
      ref={footerRef}
      id="siteFooter"
      className="footer-container"
    >
      {/* Links Section - Positioned above the giant name effect */}
      <div className="footer-content">
        {/* Links */}
        <div className="footer-links">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip={link.tooltip}
              className="footer-link"
            >
              <i className={`${link.icon} footer-link-icon`} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© 2025 Aditya Vishwakarma. All rights reserved.</p>
        </div>
      </div>


    </footer>
  );
}
