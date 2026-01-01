export function CliSection() {
  return (
    <section className="py-4 px-6 md:px-12 lg:px-16 flex justify-center items-center
      max-sm:py-3 max-sm:px-4
      max-[480px]:py-2.5 max-[480px]:px-3
      max-[360px]:py-2 max-[360px]:px-2">
      <a
        href="https://drive.google.com/file/d/1kOLwW3EA9fCyCFz6QjQ1t3LyvmXSCDFY/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-transparent border border-[var(--border-color)] rounded text-sm font-medium text-[var(--text-color)] no-underline transition-all duration-300
          hover:border-[var(--accent-cyan)] hover:-translate-y-0.5
          md:px-6 md:py-3 md:gap-3 md:text-base
          max-sm:px-4 max-sm:py-2 max-sm:gap-2 max-sm:text-sm
          max-[480px]:px-3.5 max-[480px]:py-1.5 max-[480px]:gap-2 max-[480px]:text-xs
          max-[360px]:px-3 max-[360px]:py-1.5 max-[360px]:gap-1.5"
      >
        <i className="fa-solid fa-file-pdf text-base md:text-lg max-sm:text-sm max-[480px]:text-xs" />
        <span>Resume</span>
      </a>
    </section>
  );
}
