import { useState, useCallback, useEffect } from 'react';
import { SparklesSection } from '../components/SparklesSection';
import { TerminalCard } from '../components/TerminalCard';
import { DinoGame } from '../components/DinoGame';

export function HeroSection() {
  const [showGame, setShowGame] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleProfileClick = useCallback(() => {
    // Don't show game on mobile
    if (!isMobile) {
      setShowGame(true);
    }
  }, [isMobile]);

  const handleCloseGame = useCallback(() => {
    setShowGame(false);
  }, []);

  return (
    <SparklesSection
      id="hero"
      className="scroll-section flex justify-center items-center py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 min-h-[30vh] md:min-h-[35vh] lg:min-h-[40vh] relative
        max-sm:py-6 max-sm:min-h-[35vh]
        max-[480px]:py-4 max-[480px]:min-h-[30vh]"
    >
      {/* Shooting stars background */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <span className="shooting-star star-1" />
        <span className="shooting-star star-2" />
        <span className="shooting-star star-3" />
        <span className="shooting-star star-4" />
      </div>

      {/* Terminal Card */}
      {!showGame && (
        <div className="relative z-[1] w-full flex justify-center">
          <TerminalCard onProfileClick={handleProfileClick} />
        </div>
      )}

      {/* Dino Game - only on desktop */}
      {showGame && !isMobile && (
        <div className="relative z-[1] w-full">
          <DinoGame onClose={handleCloseGame} />
        </div>
      )}
    </SparklesSection>
  );
}

