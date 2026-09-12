import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Award, BookOpen, GraduationCap, MapPin, Mail, FileDown, CheckCircle2 } from 'lucide-react';

export const ScholarBio: React.FC = () => {
  const { personal, about } = portfolioData;

  return (
    <section id="about" style={{ padding: '6rem 0 4rem', position: 'relative' }}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-eyebrow">
            <GraduationCap size={16} />
            <span>Academic Identity & Bio</span>
          </div>
          <h2 className="section-title">
            The Scholar Behind the <span>Equations</span>
          </h2>
          <p className="section-desc">
            Bridging foundational stochastic analysis and complex real-world queueing architectures at NIT Trichy.
          </p>
        </div>

        {/* Grid Layout: Left Photo & Dossier, Right Narrative & Stats */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Portrait & Scholar Credentials Card */}
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Ambient cyan backlight */}
            <div 
              style={{
                position: 'absolute',
                top: '-20%',
                left: '20%',
                width: '60%',
                height: '50%',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            {/* Profile Photo */}
            <div 
              style={{
                width: '180px',
                height: '180px',
                margin: '0 auto 1.5rem',
                borderRadius: '50%',
                padding: '4px',
                background: 'linear-gradient(135deg, var(--accent-cyan), rgba(129, 140, 248, 0.4), transparent)',
                boxShadow: '0 0 30px rgba(56, 189, 248, 0.25)'
              }}
            >
              <img
                src={personal.avatar}
                alt={personal.name}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.25rem' }}>
              {personal.name}
            </h3>
            <div style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-tech)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              {personal.title}
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
              {personal.institution}
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.75rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--text-highlight)' }}>
                <Award size={16} color="var(--accent-gold)" />
                <span>CSIR-UGC NET JRF • <strong>AIR 140</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--text-highlight)' }}>
                <Award size={16} color="var(--accent-cyan)" />
                <span>GATE Mathematics • <strong>AIR 754</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--text-highlight)' }}>
                <BookOpen size={16} color="var(--accent-emerald)" />
                <span>{personal.coordinatorTenure}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} color="var(--text-muted)" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <a 
                href={personal.cvUrl} 
                download="Austin-Durai-CV.pdf"
                className="badge-tag"
                style={{ padding: '8px 18px', background: 'rgba(56, 189, 248, 0.15)', cursor: 'pointer' }}
              >
                <FileDown size={14} />
                <span>Download CV</span>
              </a>
              <a 
                href={`mailto:${personal.email}`}
                className="badge-tag"
                style={{ padding: '8px 18px', background: 'rgba(255, 255, 255, 0.08)', color: '#fff', borderColor: 'rgba(255, 255, 255, 0.2)', cursor: 'pointer' }}
              >
                <Mail size={14} />
                <span>Direct Mail</span>
              </a>
            </div>
          </div>

          {/* Right Column: Academic Biography & Key Stats */}
          <div>
            <div className="glass-panel" style={{ padding: '2.2rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#ffffff', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={20} color="var(--accent-cyan)" />
                <span>Scholarly Trajectory</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.8' }}>
                {about.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem'
              }}
            >
              {about.quickStats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="glass-panel" 
                  style={{ 
                    padding: '1.25rem 1.4rem',
                    borderLeft: idx % 2 === 0 ? '3px solid var(--accent-cyan)' : '3px solid var(--accent-gold)'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '1.45rem', fontFamily: 'var(--font-tech)', fontWeight: 700, color: '#ffffff', margin: '4px 0' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
