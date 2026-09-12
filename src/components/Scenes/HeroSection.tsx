import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { CinematicScene } from '../Cinematic/CinematicScene';
import { FileDown, ArrowDown, Award, Sparkles, GraduationCap, Globe, ExternalLink } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { personal, profiles } = portfolioData;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <CinematicScene
      id="hero"
      eyebrow="01 // RESEARCH GATEWAY"
      title="AUSTIN"
      titleHighlight="DURAI T"
      subtitle="Ph.D. Scholar in Mathematics — Researcher, Aspiring Mathematics Professor • National Institute of Technology, Tiruchirappalli (NIT Trichy)"
      theme="dark"
      poster="/images/posters/scene-01-hero.jpg"
      fallbackImage="/images/austin-hero-bg.jpg"
      video="/videos/scene-01-hero.mp4"
      icon={<GraduationCap size={16} />}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        {/* National Accolades Row */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '2rem'
          }}
        >
          <span 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: '#FBBF24',
              fontFamily: 'var(--font-tech)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              boxShadow: '0 0 15px rgba(245, 158, 11, 0.2)'
            }}
          >
            <Award size={15} />
            <span>CSIR-UGC NET with JRF • AIR 140</span>
          </span>

          <span 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: '#FBBF24',
              fontFamily: 'var(--font-tech)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              boxShadow: '0 0 15px rgba(245, 158, 11, 0.2)'
            }}
          >
            <Award size={15} />
            <span>GATE Mathematics • AIR 754</span>
          </span>

          <span 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#E2E8F0',
              fontFamily: 'var(--font-tech)',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.04em'
            }}
          >
            <Sparkles size={15} color="#F59E0B" />
            <span>Department Coordinator (2025–Present)</span>
          </span>
        </div>

        {/* Hero Narrative Statement */}
        <p 
          style={{
            fontSize: '1.2rem',
            color: '#E2E8F0',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
            fontFamily: 'var(--font-sans)',
            textShadow: '0 2px 20px rgba(0,0,0,0.8)'
          }}
        >
          {personal.tagline} Dedicated to mathematical rigor in stochastic processes, equilibrium analysis of multi-server queue networks, and inspiring future mathematical scholars.
        </p>

        {/* Action Buttons: Explore My Research + Download CV */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginBottom: '3rem' }}>
          <button
            onClick={() => scrollToSection('research')}
            style={{
              padding: '14px 28px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #D97706, #B45309)',
              color: '#ffffff',
              fontFamily: 'var(--font-tech)',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              boxShadow: '0 0 25px rgba(245, 158, 11, 0.45)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.25s ease'
            }}
          >
            <span>Explore My Research</span>
            <ArrowDown size={16} />
          </button>

          <a
            href={personal.cvUrl}
            download="Austin-Durai-CV.pdf"
            style={{
              padding: '14px 28px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              fontFamily: 'var(--font-tech)',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.25s ease'
            }}
          >
            <FileDown size={16} />
            <span>Download CV</span>
          </a>
        </div>

        {/* Academic Profiles Quick Row */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.75rem' }}>
          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
            Academic Profile Directives
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
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
                  padding: '6px 14px',
                  borderRadius: '8px',
                  background: 'rgba(12, 12, 14, 0.8)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  fontSize: '0.82rem',
                  color: '#CBD5E1',
                  transition: 'all 0.2s ease'
                }}
              >
                <Globe size={13} color="#F59E0B" />
                <span>{p.platform}</span>
                <ExternalLink size={11} color="var(--text-muted)" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </CinematicScene>
  );
};
