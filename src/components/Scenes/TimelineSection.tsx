import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { portfolioData } from '../../data/portfolioData';
import { CinematicScene } from '../Cinematic/CinematicScene';
import { Compass, MapPin, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const TimelineSection: React.FC = () => {
  const { education } = portfolioData;
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    if (!container || !line) return;

    // 1. Dynamic Golden Timeline Line Drawing with Scroll Scrub
    gsap.fromTo(line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom 85%',
          scrub: 0.5,
        }
      }
    );

    // 2. Popping Milestone Node Markers as the line travels down
    const nodes = container.querySelectorAll('.timeline-node');
    nodes.forEach((node) => {
      gsap.fromTo(node,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(2.2)',
          scrollTrigger: {
            trigger: node,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <CinematicScene
      id="journey"
      eyebrow="04 // ACADEMIC TRAJECTORY"
      title="EDUCATIONAL JOURNEY &"
      titleHighlight="DOCTORAL PATH"
      subtitle="A continuous trajectory of academic excellence, from foundational undergraduate honors to advanced doctoral research at NIT Trichy."
      theme="light"
      poster="/images/posters/scene-04-timeline.jpg"
      video="/videos/scene-04-timeline.mp4"
      icon={<Compass size={16} />}
    >
      <div ref={containerRef} style={{ maxWidth: '880px', margin: '0 auto', position: 'relative' }}>
        {/* Central Vertical Timeline Track with GSAP dynamic draw */}
        <div 
          ref={lineRef}
          style={{
            position: 'absolute',
            top: '20px',
            bottom: '20px',
            left: '24px',
            width: '3px',
            background: 'linear-gradient(to bottom, #D97706, #F59E0B 60%, rgba(245, 158, 11, 0.2))',
            transformOrigin: 'top center',
            zIndex: 1,
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {education.map((item, idx) => {
            const isCurrent = idx === 0;

            return (
              <div 
                key={idx} 
                style={{
                  position: 'relative',
                  paddingLeft: '60px'
                }}
              >
                {/* Node marker */}
                <div 
                  className="timeline-node"
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '0',
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: isCurrent ? '#D97706' : '#FFFFFF',
                    border: isCurrent ? '3px solid #000000' : '3px solid #D97706',
                    boxShadow: isCurrent ? '0 0 15px rgba(217, 119, 6, 0.5)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2
                  }}
                >
                  {isCurrent && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFFFFF' }} />}
                </div>

                {/* Card - Pure White, Solid Black/Navy Text */}
                <div 
                  data-animate={idx % 2 === 0 ? "left" : "right"}
                  className="card-light" 
                  style={{
                    padding: '2.2rem',
                    background: '#FFFFFF',
                    border: isCurrent ? '2px solid rgba(217, 119, 6, 0.4)' : '1px solid #E2E8F0',
                    boxShadow: isCurrent ? '0 15px 35px rgba(217, 119, 6, 0.12)' : '0 10px 30px -8px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '0.8rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span className="badge-pill-light" style={{ background: isCurrent ? '#FFFBEB' : '#F1F5F9', color: isCurrent ? '#B45309' : '#475569', borderColor: isCurrent ? '#FDE68A' : '#E2E8F0' }}>
                          {item.period}
                        </span>
                        {item.status && (
                          <span className="badge-pill-light" style={{ background: '#ECFDF5', color: '#059669', borderColor: '#A7F3D0' }}>
                            {item.status}
                          </span>
                        )}
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: '#000000', fontWeight: 700 }}>
                        {item.degree}
                      </h3>
                      <div style={{ color: '#B45309', fontFamily: 'var(--font-tech)', fontSize: '0.95rem', fontWeight: 700 }}>
                        {item.field}
                      </div>
                    </div>

                    {/* Score Badge */}
                    <div 
                      style={{
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '10px',
                        padding: '8px 16px',
                        textAlign: 'right'
                      }}
                    >
                      <div style={{ fontSize: '0.7rem', color: '#475569', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', fontWeight: 600 }}>
                        {item.scoreType}
                      </div>
                      <div style={{ fontSize: '1.35rem', fontFamily: 'var(--font-tech)', fontWeight: 700, color: '#B45309' }}>
                        {item.score}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#1E293B', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontWeight: 600, color: '#000000' }}>{item.institution}</span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#475569' }}>
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#1E293B' }}>
                        <CheckCircle2 size={16} color="#D97706" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CinematicScene>
  );
};
