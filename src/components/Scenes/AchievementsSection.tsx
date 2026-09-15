import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { portfolioData } from '../../data/portfolioData';
import { CinematicScene } from '../Cinematic/CinematicScene';
import { Trophy, Award } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export const AchievementsSection: React.FC = () => {
  const { achievements } = portfolioData;
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.achievement-card') as NodeListOf<HTMLElement>;

    cards.forEach((card) => {
      const onMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(card, {
          rotateY: x * 0.04,
          rotateX: -y * 0.04,
          transformPerspective: 900,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const onMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      card.addEventListener('mousemove', onMouseMove);
      card.addEventListener('mouseleave', onMouseLeave);
    });
  }, { scope: gridRef });

  return (
    <CinematicScene
      id="achievements"
      eyebrow="05 // NATIONAL HONORS"
      title="COMPETITIVE RANKINGS &"
      titleHighlight="ACADEMIC HONORS"
      subtitle="Proven mathematical mastery validated across premier national competitive platforms and distinguished academic institutions."
      theme="dark"
      poster="/images/posters/scene-05-achievements.jpg"
      video="/videos/scene-05-achievements.mp4"
      icon={<Trophy size={16} />}
    >
      <div 
        ref={gridRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}
      >
        {achievements.map((item, idx) => {
          const isJrf = item.id === 'csir-net-jrf';

          return (
            <div 
              key={item.id}
              data-animate={idx % 2 === 0 ? "left" : "right"}
              className="card-dark achievement-card"
              style={{
                padding: '2.4rem',
                border: isJrf ? '1px solid rgba(245, 158, 11, 0.45)' : '1px solid rgba(217, 119, 6, 0.35)',
                background: isJrf ? 'rgba(26, 20, 8, 0.9)' : '#0A0F1D',
                boxShadow: isJrf ? '0 15px 40px rgba(245, 158, 11, 0.15)' : '0 16px 40px -10px rgba(0, 0, 0, 0.95)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '5px 14px',
                      borderRadius: '9999px',
                      background: isJrf ? 'rgba(217, 119, 6, 0.15)' : 'rgba(5, 150, 105, 0.15)',
                      color: isJrf ? '#FBBF24' : '#34D399',
                      border: isJrf ? '1px solid rgba(217, 119, 6, 0.4)' : '1px solid rgba(5, 150, 105, 0.35)',
                      fontFamily: 'var(--font-tech)',
                      fontSize: '0.78rem',
                      fontWeight: 700
                    }}
                  >
                    <Award size={14} />
                    <span>{item.badge}</span>
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#94A3B8', fontFamily: 'var(--font-tech)' }}>
                    {item.date}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.5rem', lineHeight: 1.3, fontWeight: 700 }}>
                  {item.title}
                </h3>

                <div style={{ color: '#F59E0B', fontFamily: 'var(--font-tech)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>
                  {item.organization}
                </div>

                <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                  {item.description}
                </p>
              </div>

              {item.rank && (
                <div 
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                    paddingTop: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', fontWeight: 600 }}>
                    National Competency Standing:
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 700, color: isJrf ? '#FBBF24' : '#34D399' }}>
                    {item.rank}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </CinematicScene>
  );
};
