import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { FloatingEquations } from './components/Background/FloatingEquations';
import { Header } from './components/Header/Header';
import { ReadingProgressBar } from './components/Navigation/ReadingProgressBar';
import { MobileNavDock } from './components/Navigation/MobileNavDock';
import { IntroVideo } from './components/IntroVideo/IntroVideo';
import { AboutSection } from './components/Scenes/AboutSection';
import { ResearchSection } from './components/Scenes/ResearchSection';
import { TimelineSection } from './components/Scenes/TimelineSection';
import { AchievementsSection } from './components/Scenes/AchievementsSection';
import { TeachingSection } from './components/Scenes/TeachingSection';
import { ConferencesToolsProfilesSection } from './components/Scenes/ConferencesToolsProfilesSection';
import { ContactSection } from './components/Scenes/ContactSection';
import { Footer } from './components/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(false);

  // Initialize Lenis smooth scroll with GSAP ticker sync - Buttery smooth momentum
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Liquid-smooth momentum glide
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    });

    let lastHeaderState = false;
    lenis.on('scroll', (e: { scroll: number }) => {
      ScrollTrigger.update();
      const shouldShow = (e.scroll || window.scrollY || 0) > 180;
      if (shouldShow !== lastHeaderState) {
        lastHeaderState = shouldShow;
        setIsHeaderVisible(shouldShow);
      }
    });

    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerUpdate);
    // Smooth over any micro-stutters to keep scroll 100% fluid
    gsap.ticker.lagSmoothing(1000, 16);

    // Refresh ScrollTrigger after layout settlement
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', backgroundColor: '#000000' }}>
      {/* 1. Global Top Reading Progress Laser Line */}
      <ReadingProgressBar />

      {/* 2. Global Floating Mathematical Equations Layer (60fps LaTeX particles) */}
      <FloatingEquations />

      {/* 3. Scroll-Triggered Left-Slide Black Glassmorphism Header (Hidden on Mobile) */}
      <Header isVisible={isHeaderVisible} />

      {/* 4. Mobile Ergonomic Bottom Navigation Dock (Visible on Mobile <= 768px) */}
      <MobileNavDock />

      {/* 5. Alternating Dark & Light Academic Cinematic Sections */}
      {/* Section 01 [DARK #000000]: Butter-Smooth Scroll-Controlled Cinematic Video Hero */}
      <IntroVideo />

      {/* Section 02 [LIGHT #FFFFFF]: About & Scholar Dossier */}
      <AboutSection />

      {/* Section 03 [DARK #000000]: Research Pillars & Live Queueing Simulator */}
      <ResearchSection />

      {/* Section 04 [LIGHT #FFFFFF]: Academic Trajectory & Educational Timeline */}
      <TimelineSection />

      {/* Section 05 [DARK #000000]: National Honors & Competitive Accolades */}
      <AchievementsSection />

      {/* Section 06 [LIGHT #FFFFFF]: Pedagogy, Courses & Syllabi */}
      <TeachingSection />

      {/* Section 07 [DARK #000000]: Conferences, Computational Tools & Profiles */}
      <ConferencesToolsProfilesSection />

      {/* Section 08 [LIGHT #FFFFFF]: Academic Collaboration & Inquiries */}
      <ContactSection />

      {/* 6. Academic Footer [DARK #000000] */}
      <Footer />
    </div>
  );
};

export default App;
