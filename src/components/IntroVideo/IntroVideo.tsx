import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './IntroVideo.module.css';
import { ChevronDown, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const VIDEO_SRC = '/videos/Make_the_font_red_orange_neon.mp4';

export const IntroVideo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const topBadgeRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  // Direct DOM refs for 60fps HUD updates without triggering React re-renders
  const timecodeRef = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  const formatTime = (secs: number) => {
    const s = Math.max(0, secs);
    const m = Math.floor(s / 60);
    const remainder = s % 60;
    return `${m.toString().padStart(2, '0')}:${remainder.toFixed(1).padStart(4, '0')}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Autoplay configuration (muted for browser policy compliance)
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    video.play().catch(() => {});

    const onLoadedMetadata = () => {
      if (timecodeRef.current && video.duration) {
        timecodeRef.current.textContent = `00:00.0 / ${formatTime(video.duration)}`;
      }
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);

    // Dynamic Parallax Transition as User Scrolls from Hero into Section 02
    const ctx = gsap.context(() => {
      // Smooth 3D depth parallax scale & fade out as next section enters
      gsap.to(video, {
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.3,
        },
        scale: 1.12,
        yPercent: 16,
        opacity: 0.5,
        ease: 'none',
        force3D: true,
      });

      // Subtle float-out of HUD elements as next section starts
      if (hudRef.current && topBadgeRef.current && cueRef.current) {
        gsap.to([hudRef.current, topBadgeRef.current, cueRef.current], {
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '40% top',
            scrub: 0.3,
          },
          opacity: 0,
          y: -25,
          ease: 'power2.out',
        });
      }
    }, container);

    return () => {
      ctx.revert();
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, []);

  // Update progress bar and timecode on every video frame update
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) return;

    const current = video.currentTime;
    const duration = video.duration;
    const progress = Math.min(Math.max(current / duration, 0), 1);
    const pct = Math.round(progress * 100);

    if (fillRef.current) fillRef.current.style.width = `${pct}%`;
    if (percentRef.current) percentRef.current.textContent = `${pct}%`;
    if (timecodeRef.current) {
      timecodeRef.current.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
    }
  };

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration || isNaN(video.duration)) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    video.currentTime = ratio * video.duration;
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} id="hero" className={styles.heroContainer}>
      {/* Full-Screen Pure Cinematic Video Autoplaying Continuously */}
      <video
        ref={videoRef}
        className={styles.videoElement}
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
      />

      {/* Atmospheric vignette overlays */}
      <div className={styles.vignetteOverlay} />
      <div className={styles.gridOverlay} />

      {/* Dynamic Golden Horizon Threshold Beam at the bottom of the video */}
      <div className={styles.bottomTransitionBeam} />

      {/* Minimal Top Brand Badge */}
      <div ref={topBadgeRef} className={styles.topBadge}>
        <Sparkles size={14} color="#F59E0B" />
        <span>AUSTIN DURAI T • PH.D. SCHOLAR • NIT TRICHY</span>
      </div>

      {/* Interactive Scroll Cue */}
      <div 
        ref={cueRef}
        className={styles.scrollCue} 
        onClick={() => scrollToSection('about')}
        title="Click or scroll down to explore"
      >
        <ChevronDown size={18} className={styles.bounceIcon} />
        <span>Scroll down to explore dossier</span>
      </div>

      {/* Sleek Minimal Timeline Scrub Bar at Bottom */}
      <div ref={hudRef} className={styles.hudBar}>
        <div className={styles.hudLeft}>
          <span className={styles.hudBadge}>CINEMATIC TRAILER</span>
          <span ref={timecodeRef} className={styles.hudTimecode}>
            00:00.0 / 00:10.0
          </span>
        </div>

        <div className={styles.hudCenter}>
          <div 
            className={styles.hudTrack} 
            onClick={handleTrackClick}
            title="Click timeline to seek"
          >
            <div 
              ref={fillRef}
              className={styles.hudFill} 
              style={{ width: '0%' }} 
            />
          </div>
          <span ref={percentRef} className={styles.hudPercent}>0%</span>
        </div>

        <div className={styles.hudRight}>
          <button 
            onClick={() => scrollToSection('about')} 
            className={styles.hudSkipBtn}
            title="Jump directly to Scholar Dossier"
          >
            <span>Explore Dossier</span>
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
