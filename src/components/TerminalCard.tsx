import { useRoleAnimation } from '../hooks/useRoleAnimation';
import { IconButton } from './IconButton';

interface TerminalCardProps {
  onProfileClick: () => void;
}

export function TerminalCard({ onProfileClick }: TerminalCardProps) {
  const { currentRole, animationClass } = useRoleAnimation();

  return (
    <div
      id="terminalCard"
      className="group relative w-full max-w-[700px] bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[5px] p-6 sm:p-7 md:p-8 overflow-hidden z-[1] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        hover:border-[var(--accent-cyan)] hover:-translate-y-1
        lg:max-w-[720px] xl:max-w-[750px]
        max-md:max-w-[650px]
        max-sm:p-5 max-sm:max-w-full
        max-[480px]:p-4 max-[480px]:rounded"
    >
      {/* Corner Highlights */}
      <div className="absolute w-3 h-3 border border-[var(--border-color)] top-[-1px] left-[-1px] border-r-0 border-b-0 transition-colors duration-300 max-[480px]:w-2.5 max-[480px]:h-2.5" />
      <div className="absolute w-3 h-3 border border-[var(--border-color)] top-[-1px] right-[-1px] border-l-0 border-b-0 transition-colors duration-300 max-[480px]:w-2.5 max-[480px]:h-2.5" />
      <div className="absolute w-3 h-3 border border-[var(--border-color)] bottom-[-1px] left-[-1px] border-r-0 border-t-0 transition-colors duration-300 max-[480px]:w-2.5 max-[480px]:h-2.5" />
      <div className="absolute w-3 h-3 border border-[var(--border-color)] bottom-[-1px] right-[-1px] border-l-0 border-t-0 transition-colors duration-300 max-[480px]:w-2.5 max-[480px]:h-2.5" />

      {/* Shooting stars */}
      <span className="shooting-star terminal-star-1" />
      <span className="shooting-star terminal-star-2" />

      {/* Terminal Header */}
      <div className="flex justify-end items-center mb-8 max-sm:flex-col max-sm:gap-3 max-[480px]:flex-col-reverse max-[480px]:gap-3 max-[480px]:mb-6">
        <div className="flex gap-2 ml-auto max-sm:w-full max-sm:justify-center max-sm:flex-wrap max-sm:ml-0">
          <IconButton href="https://twitter.com/Adi_vish28" icon="fa-brands fa-x-twitter" ariaLabel="Twitter" />
          <IconButton href="https://www.instagram.com/adi._.vish?igsh=MW9iaGdhZXFhYTdpYg==" icon="fa-brands fa-instagram" ariaLabel="Instagram" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-6 items-start mb-8 max-[480px]:gap-4 max-[480px]:items-center">
        {/* Profile Image */}
        <div
          className="flex-shrink-0 cursor-pointer relative inline-block"
          onClick={onProfileClick}
        >
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[var(--text-color)] font-sans text-[11px] tracking-[0.2px] lowercase py-[3px] px-[9px] rounded-full opacity-65 flex items-center gap-1 whitespace-nowrap game-hint-label max-sm:hidden">
            <svg
              className="hint-arrow w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
            click me
          </div>
          <img
            src="/images/pfp.jpg"
            alt="Aditya Vishwakarma"
            className="w-[120px] h-[120px] border border-[var(--border-color)] rounded object-cover bg-[var(--bg-color)] transition-colors duration-300
              max-sm:w-[100px] max-sm:h-[100px]
              max-[480px]:w-[90px] max-[480px]:h-[90px]"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 flex flex-col gap-2 pt-1">
          <div className="flex items-center gap-4 max-[480px]:gap-2">
            <h1 className="text-[2.75rem] font-bold text-[var(--text-color)] m-0 leading-none tracking-[-0.02em] inline-flex items-center gap-2 whitespace-nowrap
              max-md:text-[2.5rem]
              max-sm:text-[2rem]
              max-[480px]:text-[1.5rem]
              max-[360px]:text-[1.25rem]"
            >
              Aditya Vishwakarma
            </h1>
          </div>
          <p className="text-sm font-normal text-[var(--text-color)] mt-1 opacity-70 min-h-[20px] max-sm:text-[15px] max-[480px]:text-sm" aria-live="polite">
            <span className={`${animationClass} inline-flex items-center gap-1.5 opacity-90 transition-colors duration-300`}>
              {currentRole}
            </span>
          </p>
          <div className="flex items-center gap-2 text-sm text-[var(--text-color)] mt-1 opacity-90 max-sm:text-[13px] max-[480px]:text-xs">
            <i className="fa-solid fa-envelope text-[13px]" />
            <span>adi.vish2831@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="text-center text-sm leading-relaxed text-[var(--text-color)] opacity-70 max-w-[90%] mx-auto font-normal max-sm:text-[13px] max-sm:max-w-full max-[480px]:text-xs">
        I make things that work. Sometimes they matter. Exploring AI & ML
      </div>
    </div>
  );
}
