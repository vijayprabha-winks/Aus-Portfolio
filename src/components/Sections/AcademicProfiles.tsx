import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ExternalLink, Globe, GraduationCap, FileSearch, IdCard, Network } from 'lucide-react';

export const AcademicProfiles: React.FC = () => {
  const { profiles } = portfolioData;

  const getProfileIcon = (icon: string) => {
    switch (icon) {
      case 'GraduationCap': return <GraduationCap size={22} color="var(--accent-cyan)" />;
      case 'FileSearch': return <FileSearch size={22} color="var(--accent-emerald)" />;
      case 'IdCard': return <IdCard size={22} color="var(--accent-gold)" />;
      case 'Network': return <Network size={22} color="var(--accent-indigo)" />;
      case 'Linkedin': return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
      default: return <Globe size={22} color="var(--accent-cyan)" />;
    }
  };

  return (
    <section id="profiles" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-eyebrow">
            <Globe size={16} />
            <span>Academic Indexes & Identifiers</span>
          </div>
          <h2 className="section-title">
            Scholarly Citations & <span>Networks</span>
          </h2>
          <p className="section-desc">
            Verified academic profiles tracking doctoral preprints, research discussions, and international researcher identifiers.
          </p>
        </div>

        {/* 5-Column / Responsive Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {profiles.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getProfileIcon(profile.icon)}
                  </div>
                  <ExternalLink size={16} color="var(--text-muted)" />
                </div>

                <div className="badge-tag" style={{ marginBottom: '0.6rem', fontSize: '0.7rem' }}>
                  {profile.badge}
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.3rem' }}>
                  {profile.platform}
                </h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent-cyan)', marginBottom: '0.8rem' }}>
                  {profile.handle}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  {profile.description}
                </p>
              </div>

              <div 
                style={{
                  marginTop: '1.25rem',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-tech)',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>Visit Profile</span>
                <ExternalLink size={12} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
