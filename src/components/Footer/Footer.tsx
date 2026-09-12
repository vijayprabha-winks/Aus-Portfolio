import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ArrowUp, Globe, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profiles } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.12)',
        background: '#000000',
        padding: '4.5rem 0 2.5rem',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div className="site-container">
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2.5rem',
            marginBottom: '3rem'
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.8rem' }}>
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #D97706, #B45309)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  color: '#ffffff',
                  boxShadow: '0 0 15px rgba(245, 158, 11, 0.4)'
                }}
              >
                AD
              </div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>
                {portfolioData.personal.name}
              </span>
            </div>
            <p style={{ color: '#CBD5E1', fontSize: '0.9rem', maxWidth: '440px', lineHeight: 1.6 }}>
              Department of Mathematics • National Institute of Technology, Tiruchirappalli (NIT Trichy).<br />
              Specializing in Queueing Theory, Stochastic Processes, and Mathematical Optimization.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.78rem', color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontWeight: 700 }}>
              Academic Navigation
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px 24px', fontSize: '0.88rem', color: '#94A3B8' }}>
              <button onClick={() => scrollToSection('intro')} style={{ textAlign: 'left', color: 'inherit' }}>Home</button>
              <button onClick={() => scrollToSection('about')} style={{ textAlign: 'left', color: 'inherit' }}>About</button>
              <button onClick={() => scrollToSection('research')} style={{ textAlign: 'left', color: 'inherit' }}>Research</button>
              <button onClick={() => scrollToSection('journey')} style={{ textAlign: 'left', color: 'inherit' }}>Education</button>
              <button onClick={() => scrollToSection('achievements')} style={{ textAlign: 'left', color: 'inherit' }}>Achievements</button>
              <button onClick={() => scrollToSection('teaching')} style={{ textAlign: 'left', color: 'inherit' }}>Teaching</button>
              <button onClick={() => scrollToSection('matrix')} style={{ textAlign: 'left', color: 'inherit' }}>Tools & Profiles</button>
              <button onClick={() => scrollToSection('contact')} style={{ textAlign: 'left', color: 'inherit' }}>Contact</button>
            </div>
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-tech)',
                fontSize: '0.85rem'
              }}
            >
              <span>Return to Top</span>
              <ArrowUp size={15} color="#F59E0B" />
            </button>
          </div>
        </div>

        {/* Social Icons Row */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)', paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {profiles.map((p, idx) => (
              <a
                key={idx}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  color: '#CBD5E1',
                  transition: 'color 0.2s'
                }}
              >
                <Globe size={13} color="#F59E0B" />
                <span>{p.platform}</span>
                <ExternalLink size={10} />
              </a>
            ))}
          </div>

          <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>
            © 2025 Austin Durai T. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
