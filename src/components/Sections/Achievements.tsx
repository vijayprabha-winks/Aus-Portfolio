import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Trophy } from 'lucide-react';

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-eyebrow">
            <Trophy size={16} />
            <span>National Honors</span>
          </div>
          <h2 className="section-title">
            Rankings, Fellowships & <span>Distinctions</span>
          </h2>
          <p className="section-desc">
            Proven mastery in mathematical sciences evaluated across competitive national platforms and academic institutions.
          </p>
        </div>

        {/* 2x2 Grid of Achievement Cards */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {achievements.map((item) => {
            const isJrf = item.id === 'csir-net-jrf';
            const isGate = item.id === 'gate-maths';

            return (
              <div 
                key={item.id}
                className="glass-panel"
                style={{
                  padding: '2.2rem',
                  border: isJrf ? '1px solid rgba(251, 191, 36, 0.4)' : isGate ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid var(--border-subtle)',
                  background: isJrf ? 'rgba(20, 16, 8, 0.8)' : 'var(--bg-card)',
                  boxShadow: isJrf ? '0 15px 40px rgba(251, 191, 36, 0.08)' : 'var(--shadow-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span 
                      className="badge-tag"
                      style={{
                        background: isJrf ? 'rgba(251, 191, 36, 0.15)' : 'rgba(56, 189, 248, 0.12)',
                        color: isJrf ? '#fde047' : 'var(--accent-cyan)',
                        borderColor: isJrf ? 'rgba(251, 191, 36, 0.35)' : 'rgba(56, 189, 248, 0.25)'
                      }}
                    >
                      {item.badge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-tech)' }}>
                      {item.date}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>

                  <div style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-tech)', fontSize: '0.88rem', fontWeight: 500, marginBottom: '1rem' }}>
                    {item.organization}
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    {item.description}
                  </p>
                </div>

                {item.rank && (
                  <div 
                    style={{
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-tech)' }}>
                      Competency Standing:
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 700, color: isJrf ? '#fde047' : 'var(--accent-cyan)' }}>
                      {item.rank}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
