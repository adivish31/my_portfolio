export function ActionButtons() {
  return (
    <div className="py-4 px-6 flex justify-center items-center">
      <div className="flex gap-3 items-center flex-wrap justify-center">
        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1kOLwW3EA9fCyCFz6QjQ1t3LyvmXSCDFY/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] border border-[var(--border-color)] rounded transition-all duration-300 no-underline hover:border-[var(--accent-cyan)] hover:-translate-y-0.5"
        >
          <i className="fa-solid fa-file-pdf text-lg text-[var(--text-color)] opacity-90" />
          <div className="flex flex-col gap-0.5">
            <p className="text-xs font-semibold text-[var(--text-color)] opacity-95 m-0 tracking-[0.02em]">
              Resume
            </p>
            <p className="text-[11px] text-[var(--text-color)] opacity-60 m-0 font-medium">
              Download PDF
            </p>
          </div>
        </a>

        {/* Currently Building */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] border border-[var(--border-color)] rounded transition-all duration-300 hover:border-[var(--accent-cyan)] hover:-translate-y-0.5">
          <i className="fa-brands fa-github text-lg text-[var(--text-color)] opacity-90" />
          <div className="flex flex-col gap-0.5">
            <p className="text-xs font-semibold text-[var(--text-color)] opacity-95 m-0 tracking-[0.02em]">
              Currently Building
            </p>
            <p className="text-[11px] text-[var(--text-color)] opacity-60 m-0 font-medium">
              GitRewind
            </p>
          </div>
        </div>

        {/* Spotify */}
        <a
          href="https://open.spotify.com/album/28yHV3Gdpj0gQiLQkBeXFD"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] border border-[var(--border-color)] rounded transition-all duration-300 no-underline hover:border-[var(--accent-cyan)] hover:-translate-y-0.5"
        >
          <i className="fa-brands fa-spotify text-lg text-[#1DB954] opacity-90" />
          <div className="flex flex-col gap-0.5 min-w-0 flex-1">
            <p className="text-xs font-semibold text-[var(--text-color)] opacity-95 m-0 tracking-[0.02em]">
              Appetite of Destruction
            </p>
            <p className="text-[11px] text-[var(--text-color)] opacity-60 m-0 font-medium">
              My fav band
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
