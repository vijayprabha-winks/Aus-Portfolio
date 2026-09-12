import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, Code2, FileText, Cpu, Table, BookOpen, Wrench } from 'lucide-react';

export const ComputationalTools: React.FC = () => {
  const { tools } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal size={22} color="var(--accent-cyan)" />;
      case 'Code2': return <Code2 size={22} color="var(--accent-emerald)" />;
      case 'FileText': return <FileText size={22} color="var(--accent-gold)" />;
      case 'Cpu': return <Cpu size={22} color="var(--accent-indigo)" />;
      case 'Table': return <Table size={22} color="var(--accent-cyan-light)" />;
      default: return <BookOpen size={22} color="var(--accent-cyan)" />;
    }
  };

  return (
    <section id="tools" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-eyebrow">
            <Wrench size={16} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Computational Arsenal & <span>Research Tools</span>
          </h2>
          <p className="section-desc">
            Combining scientific software packages, numerical computing environments, and LaTeX typesetting for mathematical inquiry.
          </p>
        </div>

        {/* 3-Column Tools Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {tools.map((tool, idx) => (
            <div 
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getIcon(tool.iconName)}
                  </div>
                  <span 
                    className="badge-tag"
                    style={{
                      background: tool.level === 'Expert' ? 'rgba(52, 211, 153, 0.15)' : 'rgba(56, 189, 248, 0.12)',
                      color: tool.level === 'Expert' ? 'var(--accent-emerald)' : 'var(--accent-cyan)',
                      borderColor: tool.level === 'Expert' ? 'rgba(52, 211, 153, 0.3)' : 'rgba(56, 189, 248, 0.25)'
                    }}
                  >
                    {tool.level}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-tech)', fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.4rem' }}>
                  {tool.name}
                </h3>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                  {tool.category} Infrastructure
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
