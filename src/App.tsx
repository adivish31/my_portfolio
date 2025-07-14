import { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './contexts/ThemeContext';
import { TooltipProvider } from './components/Tooltip';
import { CommandPalette } from './components/CommandPalette';
import { Dock } from './components/Dock';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';

// Lazy load sections that aren't immediately visible
const CliSection = lazy(() => import('./sections/CliSection').then(m => ({ default: m.CliSection })));
const ActivitySection = lazy(() => import('./sections/ActivitySection').then(m => ({ default: m.ActivitySection })));
const AboutMeSection = lazy(() => import('./sections/AboutMeSection').then(m => ({ default: m.AboutMeSection })));
const ExperienceSection = lazy(() => import('./sections/ExperienceSection').then(m => ({ default: m.ExperienceSection })));
const GitHubContributionsSection = lazy(() => import('./sections/GitHubContributionsSection').then(m => ({ default: m.GitHubContributionsSection })));
const ProjectsSection = lazy(() => import('./sections/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const StackSection = lazy(() => import('./sections/StackSection').then(m => ({ default: m.StackSection })));
const ContactSection = lazy(() => import('./sections/ContactSection').then(m => ({ default: m.ContactSection })));

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div id="name" className="w-full max-w-[100vw] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1320px] 2xl:max-w-[1440px] mx-auto relative scroll-pt-[90px]">
          <CommandPalette />
          <Dock />
          <TooltipProvider />
          <Navbar />
          <main>
            <Suspense fallback={null}>
              <CliSection />
            </Suspense>
            <HeroSection />
            <Suspense fallback={null}>
              <ActivitySection />
            </Suspense>
            <Suspense fallback={null}>
              <AboutMeSection />
            </Suspense>
            <Suspense fallback={null}>
              <ExperienceSection />
            </Suspense>
            <Suspense fallback={null}>
              <GitHubContributionsSection />
            </Suspense>
            <Suspense fallback={null}>
              <ProjectsSection />
            </Suspense>
            <Suspense fallback={null}>
              <StackSection />
            </Suspense>
            <Suspense fallback={null}>
              <ContactSection />
            </Suspense>
          </main>
          <Footer />
        </div>
        <Analytics />
      </ThemeProvider>
    </Router>
  );
}

export default App;
