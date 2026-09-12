import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';

export const AcademicJourney: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="journey" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-eyebrow">
            <GraduationCap size={16} />
            <span>Academic Pedigree</span>
          </div>
          <h2 className="section-title">
            Education & Doctoral <span>Milestones</span>
          </h2>
          <p className="section-desc">
            A trajectory of academic distinction, from foundational undergraduate honors to advanced doctoral research at NIT Trichy.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div style={{ maxWidth: '880px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical central timeline line */}
          <div 
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '24px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-cyan), rgba(129, 140, 248, 0.4), rgba(255, 255, 255, 0.05))'
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
                  {/* Timeline node icon */}
                  <div 
                    style={{
                      position: 'absolute',
                      left: '12px',
                      top: '0',
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: isCurrent ? 'var(--accent-cyan)' : 'rgba(10, 15, 28, 0.9)',
                      border: isCurrent ? '3px solid #05070d' : '2px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: isCurrent ? '0 0 15px var(--accent-cyan)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2
                    }}
                  >
                    {isCurrent && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#05070d' }} />}
                  </div>

                  {/* Card Content */}
                  <div 
                    className="glass-panel" 
                    style={{
                      padding: '2rem',
                      border: isCurrent ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid var(--border-subtle)',
                      background: isCurrent ? 'rgba(12, 20, 42, 0.85)' : 'var(--bg-card)'
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '0.8rem' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <span className="badge-tag" style={{ background: isCurrent ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.06)' }}>
                            {item.period}
                          </span>
                          {item.status && (
                            <span className="badge-tag" style={{ background: 'rgba(52, 211, 153, 0.15)', color: 'var(--accent-emerald)', borderColor: 'rgba(52, 211, 153, 0.3)' }}>
                              {item.status}
                            </span>
                          )}
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: '#ffffff' }}>
                          {item.degree}
                        </h3>
                        <div style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-tech)', fontSize: '0.95rem', fontWeight: 600 }}>
                          {item.field}
                        </div>
                      </div>

                      {/* Score Badge */}
                      <div 
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '10px',
                          padding: '8px 16px',
                          textAlign: 'right'
                        }}
                      >
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase' }}>
                          {item.scoreType}
                        </div>
                        <div style={{ fontSize: '1.3rem', fontFamily: 'var(--font-tech)', fontWeight: 700, color: isCurrent ? 'var(--accent-cyan)' : 'var(--accent-gold)' }}>
                          {item.score}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                      <span style={{ fontWeight: 500, color: '#e2e8f0' }}>{item.institution}</span>
                      <span>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={14} color="var(--text-muted)" />
                        {item.location}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {item.highlights.map((hl, hIdx) => (
                        <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          <CheckCircle2 size={15} color="var(--accent-cyan)" style={{ marginTop: '3px', flexShrink: 0 }} />
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
      </div>
    </section>
  );
};
