import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { portfolioData } from '../../data/portfolioData';
import { CinematicScene } from '../Cinematic/CinematicScene';
import { Network, Presentation, Terminal, Code2, FileText, Cpu, Table, BookOpen, ExternalLink, GraduationCap, FileSearch, IdCard } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export const ConferencesToolsProfilesSection: React.FC = () => {
  const { tools, profiles } = portfolioData;
  const toolsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!toolsContainerRef.current) return;
    const toolCards = toolsContainerRef.current.querySelectorAll('.tool-card') as NodeListOf<HTMLElement>;

    toolCards.forEach((card) => {
      const icon = card.querySelector('.tool-icon');
      const onEnter = () => {
        if (icon) {
          gsap.to(icon, { scale: 1.15, rotate: 6, duration: 0.25, ease: 'back.out(2)' });
        }
      };
      const onLeave = () => {
        if (icon) {
          gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3, ease: 'power2.out' });
        }
      };
      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);
    });
  }, { scope: toolsContainerRef });

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal size={20} color="#F59E0B" />;
      case 'Code2': return <Code2 size={20} color="#10B981" />;
      case 'FileText': return <FileText size={20} color="#D97706" />;
      case 'Cpu': return <Cpu size={20} color="#E5C07B" />;
      case 'Table': return <Table size={20} color="#FBBF24" />;
      default: return <BookOpen size={20} color="#D97706" />;
    }
  };

  const getProfileIcon = (icon: string) => {
    switch (icon) {
      case 'GraduationCap': return <GraduationCap size={20} color="#D97706" />;
      case 'FileSearch': return <FileSearch size={20} color="#F59E0B" />;
      case 'IdCard': return <IdCard size={20} color="#E5C07B" />;
      case 'Network': return <Network size={20} color="#10B981" />;
      default: return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      );
    }
  };

  return (
    <CinematicScene
      id="matrix"
      eyebrow="07 // RESEARCH MATRIX & TOOLS"
      title="CONFERENCES, TOOLS &"
      titleHighlight="ACADEMIC INDEXES"
      subtitle="Peer-reviewed conference dissemination, scientific software environments, and verified international academic profiles."
      theme="dark"
      poster="/images/posters/scene-07-network.jpg"
      video="/videos/scene-07-network.mp4"
      icon={<Network size={16} />}
    >
      {/* 1. Conference Presentation Banner (Pure Black Theme) */}
      <div 
        data-animate="left"
        className="card-dark"
        style={{
          padding: '2.2rem 2.6rem',
          marginBottom: '3rem',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          background: 'linear-gradient(135deg, #0A0F1D, #050914)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <div className="badge-pill-dark" style={{ marginBottom: '0.6rem' }}>
              Conference Presentation
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: '#FFFFFF', fontWeight: 700 }}>
              International Conference on Applied Mathematics & Stochastic Systems
            </h3>
            <div style={{ color: '#FBBF24', fontFamily: 'var(--font-tech)', fontSize: '0.95rem', marginTop: '4px', fontWeight: 600 }}>
              Venue: National Institute of Technology Calicut (NIT Calicut) • January 2025
            </div>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.35)', padding: '6px 14px', borderRadius: '8px', color: '#FFFFFF', fontFamily: 'var(--font-tech)', fontSize: '0.85rem' }}>
            <Presentation size={15} color="#F59E0B" />
            <span>Paper Presenter</span>
          </div>
        </div>
        <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: '1.7' }}>
          Presented peer-reviewed research findings on: <strong style={{ color: '#FFFFFF' }}>'Stochastic Modeling & Performance Analysis in Multi-Server Queueing Environments'</strong>, investigating equilibrium dynamics and waiting time reduction under non-stationary arrival streams.
        </p>
      </div>

      {/* 2. Computational & Research Tools Grid */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 700 }}>
          Mathematical & Computational Arsenal
        </h3>

        <div ref={toolsContainerRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {tools.map((tool, idx) => (
            <div 
              key={idx}
              data-animate={idx % 2 === 0 ? "left" : "right"}
              className="card-dark tool-card"
              style={{
                padding: '1.6rem',
                background: '#0A0F1D',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div 
                    className="tool-icon"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getToolIcon(tool.iconName)}
                  </div>
                  <span 
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-tech)',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      background: tool.level === 'Expert' ? 'rgba(5, 150, 105, 0.2)' : 'rgba(245, 158, 11, 0.15)',
                      color: tool.level === 'Expert' ? '#34D399' : '#FBBF24',
                      border: tool.level === 'Expert' ? '1px solid rgba(5, 150, 105, 0.4)' : '1px solid rgba(245, 158, 11, 0.3)',
                      fontWeight: 700
                    }}
                  >
                    {tool.level}
                  </span>
                </div>

                <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.3rem', fontWeight: 700 }}>
                  {tool.name}
                </h4>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', marginBottom: '0.6rem', fontWeight: 600 }}>
                  {tool.category} Capability
                </div>
                <p style={{ color: '#CBD5E1', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Verified Academic Profiles */}
      <div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 700 }}>
          Verified Researcher Networks & Citations
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem' }}>
          {profiles.map((profile, idx) => (
            <a
              key={idx}
              data-animate={idx % 2 === 0 ? "right" : "left"}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-dark"
              style={{
                padding: '1.6rem',
                background: '#0A0F1D',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div 
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getProfileIcon(profile.icon)}
                  </div>
                  <ExternalLink size={15} color="#94A3B8" />
                </div>

                <div style={{ fontSize: '0.72rem', color: '#FBBF24', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', marginBottom: '0.3rem', fontWeight: 700 }}>
                  {profile.badge}
                </div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.3rem', fontWeight: 700 }}>
                  {profile.platform}
                </h4>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#94A3B8', marginBottom: '0.6rem' }}>
                  {profile.handle}
                </div>
                <p style={{ color: '#CBD5E1', fontSize: '0.84rem', lineHeight: '1.5' }}>
                  {profile.description}
                </p>
              </div>

              <div style={{ marginTop: '1.2rem', fontSize: '0.78rem', color: '#F59E0B', fontFamily: 'var(--font-tech)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                <span>View Profile</span>
                <ExternalLink size={12} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </CinematicScene>
  );
};
