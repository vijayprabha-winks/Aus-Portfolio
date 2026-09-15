import React, { useEffect, useState } from 'react';
import styles from './MobileNavDock.module.css';
import { portfolioData } from '../../data/portfolioData';
import { User, Layers, Compass, Trophy, Mail, FileDown, ArrowUp } from 'lucide-react';

const SECTIONS = [
  { id: 'about', label: 'About', icon: User },
  { id: 'research', label: 'Research', icon: Layers },
  { id: 'journey', label: 'Timeline', icon: Compass },
  { id: 'achievements', label: 'Honors', icon: Trophy },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const MobileNavDock: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          setShowScrollTop(scrollY > 350);

          // Find current visible section
          let current = 'hero';
          for (let i = SECTIONS.length - 1; i >= 0; i--) {
            const el = document.getElementById(SECTIONS[i].id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= window.innerHeight * 0.4) {
                current = SECTIONS[i].id;
                break;
              }
            }
          }
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.dockContainer} aria-label="Mobile Navigation Dock">
      {/* Monogram / Home */}
      <button
        onClick={() => scrollTo('hero')}
        className={styles.monogramBtn}
        aria-label="Scroll to top"
        title="Austin Durai T"
      >
        AD
      </button>

      {/* Core Section Jump Icons */}
      {SECTIONS.map((sec) => {
        const Icon = sec.icon;
        const isActive = activeSection === sec.id;

        return (
          <button
            key={sec.id}
            onClick={() => scrollTo(sec.id)}
            className={`${styles.dockBtn} ${isActive ? styles.activeBtn : ''}`}
            aria-label={`Jump to ${sec.label}`}
            title={sec.label}
          >
            <Icon size={18} />
            {isActive && <span className={styles.activeDot} />}
          </button>
        );
      })}

      <div className={styles.actionDivider} />

      {/* Quick CV Download */}
      <a
        href={portfolioData.personal.cvUrl}
        download="Austin-Durai-CV.pdf"
        className={styles.cvPill}
        title="Download CV"
      >
        <FileDown size={13} />
        <span>CV</span>
      </a>

      {/* Scroll to Top Trigger */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={styles.scrollTopBtn}
          aria-label="Scroll back to top"
          title="Back to Top"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </nav>
  );
};
