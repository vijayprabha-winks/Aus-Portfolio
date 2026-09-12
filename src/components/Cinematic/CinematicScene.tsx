import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './CinematicScene.module.css';

export interface CinematicSceneProps {
  id: string;
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  video?: string;
  poster?: string;
  fallbackImage?: string;
  theme?: 'dark' | 'light' | 'dark-alt';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const CinematicScene: React.FC<CinematicSceneProps> = ({
  id,
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  poster,
  fallbackImage,
  theme = 'dark',
  icon,
  children
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wipeRef = useRef<HTMLDivElement | null>(null);
  const watermarkRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const isLight = theme === 'light';
  const themeClass = isLight ? styles.sceneLight : styles.sceneDark;

  // Extract section numeral (e.g. "02") and title (e.g. "THE RESEARCHER")
  const [sectionNum] = eyebrow.includes('//')
    ? eyebrow.split('//').map(s => s.trim())
    : ['', eyebrow];

  // Ultra-stylish entrance & section transition animations via ScrollTrigger
  useEffect(() => {
    const section = sectionRef.current;
    const wipe = wipeRef.current;
    const watermark = watermarkRef.current;
    const content = contentRef.current;
    const header = headerRef.current;
    if (!section || !content || !header) return;

    const ctx = gsap.context(() => {
      // 1. Razor-sharp section boundary laser beam
      if (wipe) {
        gsap.fromTo(wipe,
          { scaleX: 0, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
            scaleX: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            force3D: true,
          }
        );
      }

      // 2. Grand Academic Ambient Watermark with Parallax Drift
      if (watermark) {
        gsap.fromTo(watermark,
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'bottom 15%',
              scrub: 1.0,
            },
            y: -50,
            opacity: isLight ? 0.03 : 0.045,
            ease: 'none',
          }
        );
      }

      // 3. Section Content Elevation & Reveal
      gsap.fromTo(content,
        { y: 30, opacity: 0.9 },
        {
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          force3D: true,
        }
      );

      // 4. Staggered Cinema Keynote Header Reveal
      const eyebrowEl = header.querySelector(`.${styles.eyebrow}`);
      const titlePrimaryEl = header.querySelector(`.${styles.titlePrimary}`);
      const titleHighlightEl = header.querySelector(`.${styles.titleHighlight}`);
      const subtitleEl = header.querySelector(`.${styles.subtitle}`);

      const tlHeader = gsap.timeline({
        scrollTrigger: {
          trigger: header,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        }
      });

      if (eyebrowEl) {
        tlHeader.fromTo(eyebrowEl,
          { opacity: 0, y: 25, scale: 0.88 },
          { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'back.out(1.6)', force3D: true }
        );
      }

      if (titlePrimaryEl) {
        tlHeader.fromTo(titlePrimaryEl,
          { opacity: 0, y: 35, letterSpacing: '0.06em' },
          { opacity: 1, y: 0, letterSpacing: '0.02em', duration: 0.75, ease: 'power3.out', force3D: true },
          '-=0.4'
        );
      }

      if (titleHighlightEl) {
        tlHeader.fromTo(titleHighlightEl,
          { opacity: 0, y: 25, scale: 0.94 },
          { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'power3.out', force3D: true },
          '-=0.45'
        );
      }

      if (subtitleEl) {
        tlHeader.fromTo(subtitleEl,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', force3D: true },
          '-=0.35'
        );
      }

      // 5. Individual Card Entrances: stylish, smooth gliding from Left and Right with 3D Depth
      const rawCards = Array.from(
        content.querySelectorAll('[data-animate="left"], [data-animate="right"], .card-dark, .card-light')
      ) as HTMLElement[];

      const animatableCards = rawCards.filter((card) => {
        let parent = card.parentElement;
        while (parent && parent !== content) {
          if (rawCards.includes(parent as HTMLElement)) {
            return false;
          }
          parent = parent.parentElement;
        }
        return true;
      });

      animatableCards.forEach((card, idx) => {
        const explicitDir = card.getAttribute('data-animate');
        const isLeft = explicitDir === 'left' || (explicitDir !== 'right' && idx % 2 === 0);

        gsap.fromTo(card,
          {
            opacity: 0,
            x: isLeft ? -45 : 45,
            y: 35,
            scale: 0.95,
            rotateX: 6,
          },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.85,
            ease: 'power3.out',
            force3D: true,
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, [isLight]);

  return (
    <section id={id} ref={sectionRef} className={`${styles.sceneWrapper} ${themeClass}`}>
      {/* Razor-Sharp Section Boundary Beam */}
      <div ref={wipeRef} className={styles.entranceWipe} />

      {/* Atmospheric Top Horizon Glow Lip */}
      <div className={isLight ? styles.horizonGlowLight : styles.horizonGlowDark} />

      {/* Grand Academic Ambient Watermark Numeral */}
      {sectionNum && (
        <div 
          ref={watermarkRef} 
          className={`${styles.ambientWatermark} ${isLight ? styles.watermarkLight : styles.watermarkDark}`}
          aria-hidden="true"
        >
          {sectionNum}
        </div>
      )}

      {/* Atmospheric Media Backdrop (Direct Optimized Poster) */}
      {(poster || fallbackImage) && (
        <div className={styles.backdropContainer}>
          <img
            src={poster || fallbackImage}
            alt=""
            className={styles.backdropMedia}
            style={{ opacity: isLight ? 0.03 : 0.14 }}
            loading="lazy"
          />
          <div className={isLight ? styles.backdropLightOverlay : styles.backdropDarkOverlay} />
        </div>
      )}

      <div className="site-container">
        {/* Section Header Block */}
        <div ref={headerRef} className={styles.headerBlock}>
          <div className={`${styles.eyebrow} ${isLight ? styles.eyebrowLight : styles.eyebrowDark}`}>
            {icon}
            <span>{eyebrow}</span>
          </div>
          <h2 className={`${styles.title} ${isLight ? styles.titleLight : styles.titleDark}`}>
            <span className={styles.titlePrimary}>{title}</span>
            {titleHighlight && (
              <span className={styles.titleHighlight}>{titleHighlight}</span>
            )}
          </h2>
          <p className={`${styles.subtitle} ${isLight ? styles.subtitleLight : styles.subtitleDark}`}>
            {subtitle}
          </p>
        </div>

        {/* Dynamic Section Contents with 3D Perspective */}
        <div ref={contentRef} className={styles.contentWrapper}>
          {children}
        </div>
      </div>
    </section>
  );
};
