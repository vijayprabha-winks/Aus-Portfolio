import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ArrowUpRight, Layers } from 'lucide-react';

export const ResearchPillars: React.FC = () => {
  const { researchPillars } = portfolioData;
  const [activePillarId, setActivePillarId] = useState<string>(researchPillars[0].id);

  const selectedPillar = researchPillars.find(p => p.id === activePillarId) || researchPillars[0];

  return (
    <section id="research" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-eyebrow">
            <Layers size={16} />
            <span>Doctoral Focus</span>
          </div>
          <h2 className="section-title">
            Research Pillars & <span>Theoretical Foundations</span>
          </h2>
          <p className="section-desc">
            Rigorous mathematical investigations in Stochastic Systems, Markovian Chains, and Multi-Server Queue Optimization.
          </p>
        </div>

        {/* Tab Selector for Quick Navigation */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '3rem'
          }}
        >
          {researchPillars.map((pillar) => {
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                  background: isActive ? 'rgba(56, 189, 248, 0.15)' : 'rgba(10, 15, 28, 0.7)',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  border: isActive ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: isActive ? '0 0 20px rgba(56, 189, 248, 0.2)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                {pillar.title.split('&')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Highlighted Pillar Spotlight Box */}
        <div 
          className="glass-panel"
          style={{
            padding: '2.5rem',
            marginBottom: '3rem',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 35px rgba(56, 189, 248, 0.1)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <div className="badge-tag" style={{ marginBottom: '0.6rem' }}>
                Active Research Focus
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#ffffff' }}>
                {selectedPillar.title}
              </h3>
              <div style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-tech)', fontSize: '1rem', marginTop: '4px' }}>
                {selectedPillar.tagline}
              </div>
            </div>

            {/* Impact Metric Badge */}
            <div 
              style={{
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: '12px',
                padding: '12px 18px',
                maxWidth: '380px'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                Quantitative Impact
              </div>
              <div style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                {selectedPillar.impactMetrics}
              </div>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            {selectedPillar.description}
          </p>

          {/* Mathematical Equation Feature Box */}
          <div 
            style={{
              background: 'rgba(3, 7, 18, 0.85)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '14px',
              padding: '1.5rem 2rem',
              marginBottom: '2rem',
              position: 'relative'
            }}
          >
            <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '8px' }}>
              Mathematical Formulation: {selectedPillar.equationLabel}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.3rem', color: '#F59E0B', letterSpacing: '0.04em', overflowX: 'auto', padding: '6px 0' }}>
              {selectedPillar.equation}
            </div>
          </div>

          {/* Topics & Real-world Applications */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '0.95rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
                Key Theoretical Topics
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedPillar.keyTopics.map((topic, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '0.95rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
                Applied Ecosystems
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                {selectedPillar.application}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid for comprehensive viewing */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {researchPillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="glass-panel"
              style={{
                padding: '1.75rem',
                cursor: 'pointer',
                borderColor: pillar.id === activePillarId ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                background: pillar.id === activePillarId ? 'rgba(16, 24, 48, 0.85)' : 'var(--bg-card)'
              }}
              onClick={() => setActivePillarId(pillar.id)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>
                  Pillar {pillar.id === 'queueing-theory' ? '01' : pillar.id === 'stochastic-processes' ? '02' : pillar.id === 'performance-analysis' ? '03' : '04'}
                </span>
                <ArrowUpRight size={18} color="var(--accent-cyan)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                {pillar.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                {pillar.tagline}
              </p>
              <div 
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--accent-cyan-light)',
                  background: 'rgba(0, 0, 0, 0.5)',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {pillar.equation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
