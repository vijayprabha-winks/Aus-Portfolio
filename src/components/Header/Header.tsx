import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Header.module.css';
import { portfolioData } from '../../data/portfolioData';
import { FileDown, Send, Menu, X } from 'lucide-react';

gsap.registerPlugin(useGSAP);

interface HeaderProps {
  isVisible: boolean;
}

const SECTIONS = [
  { id: 'about', label: '02 ABOUT' },
  { id: 'research', label: '03 RESEARCH' },
  { id: 'journey', label: '04 TIMELINE' },
  { id: 'achievements', label: '05 HONORS' },
  { id: 'teaching', label: '06 TEACHING' },
  { id: 'matrix', label: '07 TOOLS' },
  { id: 'contact', label: '08 CONTACT' },
];

export const Header: React.FC<HeaderProps> = ({ isVisible }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [activeSectionLabel, setActiveSectionLabel] = useState<string>('02 ABOUT');
  const lastPercentRef = React.useRef(0);
  const lastSectionRef = React.useRef('about');
  const headerRef = useRef<HTMLElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);

  // GSAP slide-in for header on threshold
  useGSAP(() => {
    if (headerRef.current && isVisible) {
      gsap.fromTo(headerRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' }
      );
    }
  }, { dependencies: [isVisible] });

  // GSAP animated mobile drawer
  useGSAP(() => {
    if (mobileDrawerRef.current && isMobileNavOpen) {
      gsap.fromTo(mobileDrawerRef.current,
        { opacity: 0, y: -10, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
      const items = mobileDrawerRef.current.querySelectorAll('button');
      gsap.fromTo(items,
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.25, stagger: 0.03, ease: 'power2.out', delay: 0.05 }
      );
    }
  }, { dependencies: [isMobileNavOpen] });

  // Self-contained scroll & active section indicator: updates ONLY Header and ONLY when values change
  React.useEffect(() => {
    if (!isVisible) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const total = document.documentElement.scrollHeight - window.innerHeight;
          if (total > 0) {
            const pct = Math.min(Math.max(Math.round((window.scrollY / total) * 100), 0), 100);
            if (pct !== lastPercentRef.current) {
              lastPercentRef.current = pct;
              setScrollPercent(pct);
            }
          }

          // Detect active section on scroll
          let curSec = 'about';
          let curLabel = '02 ABOUT';
          for (let i = SECTIONS.length - 1; i >= 0; i--) {
            const el = document.getElementById(SECTIONS[i].id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= window.innerHeight * 0.45) {
                curSec = SECTIONS[i].id;
                curLabel = SECTIONS[i].label;
                break;
              }
            }
          }

          if (curSec !== lastSectionRef.current) {
            lastSectionRef.current = curSec;
            setActiveSection(curSec);
            setActiveSectionLabel(curLabel);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isVisible]);

  const scrollToSection = (id: string) => {
    setIsMobileNavOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header ref={headerRef} className={`${styles.headerContainer} ${isVisible ? styles.headerVisible : ''}`}>
      <div className={styles.headerGlass}>
        {/* Scholar Brand / Monogram */}
        <a 
          href="#hero" 
          className={styles.brand}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className={styles.monogram}>AD</div>
          <div className={styles.brandText}>
            <span className={styles.name}>{portfolioData.personal.name}</span>
            <span className={styles.title}>Ph.D. Scholar • NIT Trichy</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.navLinks}>
          <button 
            onClick={() => scrollToSection('about')} 
            className={`${styles.navItem} ${activeSection === 'about' ? styles.activeNavItem : ''}`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('research')} 
            className={`${styles.navItem} ${activeSection === 'research' ? styles.activeNavItem : ''}`}
          >
            Research
          </button>
          <button 
            onClick={() => scrollToSection('journey')} 
            className={`${styles.navItem} ${activeSection === 'journey' ? styles.activeNavItem : ''}`}
          >
            Timeline
          </button>
          <button 
            onClick={() => scrollToSection('achievements')} 
            className={`${styles.navItem} ${activeSection === 'achievements' ? styles.activeNavItem : ''}`}
          >
            Achievements
          </button>
          <button 
            onClick={() => scrollToSection('teaching')} 
            className={`${styles.navItem} ${activeSection === 'teaching' ? styles.activeNavItem : ''}`}
          >
            Teaching
          </button>
          <button 
            onClick={() => scrollToSection('matrix')} 
            className={`${styles.navItem} ${activeSection === 'matrix' ? styles.activeNavItem : ''}`}
          >
            Tools & Profiles
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`${styles.navItem} ${activeSection === 'contact' ? styles.activeNavItem : ''}`}
          >
            Contact
          </button>
        </nav>

        {/* Right Actions */}
        <div className={styles.actions}>
          {/* Active Section Tracker Badge */}
          {activeSectionLabel && (
            <div className={styles.sectionBadge} title="Current Section">
              <span className={styles.sectionBadgeDot}></span>
              <span>{activeSectionLabel}</span>
            </div>
          )}

          {/* Real-time scroll indicator */}
          <div className={styles.scrollBadge} title="Scroll Progress">
            <span className={styles.pulseDot}></span>
            <span>{scrollPercent}%</span>
          </div>

          <a 
            href={portfolioData.personal.cvUrl} 
            download="Austin-Durai-CV.pdf"
            className={styles.cvBtn}
            title="Download Academic Curriculum Vitae"
          >
            <FileDown size={14} />
            <span>CV</span>
          </a>

          <button 
            onClick={() => scrollToSection('contact')} 
            className={styles.connectBtn}
          >
            <Send size={13} />
            <span>Let's Connect</span>
          </button>

          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileNavOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileNavOpen && (
        <div 
          ref={mobileDrawerRef}
          style={{
            marginTop: '8px',
            background: 'rgba(12, 12, 14, 0.96)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '12px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: '0 15px 30px rgba(0,0,0,0.85)'
          }}
        >
          <button onClick={() => scrollToSection('about')} style={{ color: '#fff', textAlign: 'left', padding: '6px' }}>
            About
          </button>
          <button onClick={() => scrollToSection('research')} style={{ color: '#fff', textAlign: 'left', padding: '6px' }}>
            Research Focus
          </button>
          <button onClick={() => scrollToSection('journey')} style={{ color: '#fff', textAlign: 'left', padding: '6px' }}>
            Academic Journey
          </button>
          <button onClick={() => scrollToSection('achievements')} style={{ color: '#fff', textAlign: 'left', padding: '6px' }}>
            Achievements
          </button>
          <button onClick={() => scrollToSection('teaching')} style={{ color: '#fff', textAlign: 'left', padding: '6px' }}>
            Teaching & Courses
          </button>
          <button onClick={() => scrollToSection('matrix')} style={{ color: '#fff', textAlign: 'left', padding: '6px' }}>
            Tools & Profiles
          </button>
          <button onClick={() => scrollToSection('contact')} style={{ color: '#fff', textAlign: 'left', padding: '6px' }}>
            Contact & Inquiry
          </button>
        </div>
      )}
    </header>
  );
};
