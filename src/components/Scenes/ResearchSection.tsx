import React, { useState, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { portfolioData } from '../../data/portfolioData';
import { CinematicScene } from '../Cinematic/CinematicScene';
import { Layers, CheckCircle2, AlertTriangle, Play, Sparkles } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export const ResearchSection: React.FC = () => {
  const { researchPillars } = portfolioData;
  const [activePillarId, setActivePillarId] = useState<string>(researchPillars[0].id);
  const pillarCardRef = useRef<HTMLDivElement>(null);
  const serverBaysRef = useRef<HTMLDivElement>(null);

  // M/M/c Simulator State
  const [lambda, setLambda] = useState<number>(6.0);
  const [mu, setMu] = useState<number>(4.0);
  const [c, setC] = useState<number>(2);

  // Smooth GSAP transition whenever pillar tab switches
  useGSAP(() => {
    if (pillarCardRef.current) {
      gsap.fromTo(pillarCardRef.current,
        { opacity: 0.5, y: 18, scale: 0.99 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power2.out', force3D: true }
      );
    }
  }, { dependencies: [activePillarId] });

  // Server bays animation on count change
  useGSAP(() => {
    if (serverBaysRef.current) {
      const bays = serverBaysRef.current.children;
      gsap.fromTo(bays,
        { scale: 0.85, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 0.35, stagger: 0.05, ease: 'back.out(2)' }
      );
    }
  }, { dependencies: [c, lambda, mu] });

  const selectedPillar = researchPillars.find(p => p.id === activePillarId) || researchPillars[0];

  const factorial = (n: number): number => {
    if (n <= 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
  };

  const metrics = useMemo(() => {
    const rho = lambda / (c * mu);
    const isStable = rho < 1.0;

    if (!isStable) {
      return { rho, isStable: false, P0: 0, Lq: Infinity, Wq: Infinity, L: Infinity, W: Infinity };
    }

    const r = lambda / mu;
    let sumTerms = 0;
    for (let n = 0; n < c; n++) {
      sumTerms += Math.pow(r, n) / factorial(n);
    }
    const lastTerm = (Math.pow(r, c) / factorial(c)) * (1 / (1 - rho));
    const P0 = 1 / (sumTerms + lastTerm);
    const Lq = (P0 * Math.pow(r, c) * rho) / (factorial(c) * Math.pow(1 - rho, 2));
    const Wq = Lq / lambda;
    const W = Wq + (1 / mu);
    const L = lambda * W;

    return { rho, isStable: true, P0, Lq, Wq, W, L };
  }, [lambda, mu, c]);

  const setPreset = (l: number, m: number, servers: number) => {
    setLambda(l);
    setMu(m);
    setC(servers);
  };

  return (
    <CinematicScene
      id="research"
      eyebrow="03 // THEORETICAL FOUNDATIONS"
      title="STOCHASTIC SYSTEMS &"
      titleHighlight="QUEUE ARCHITECTURES"
      subtitle="Rigorous mathematical analysis of waiting line networks, Markovian state transitions, and closed-form throughput bounds."
      theme="dark"
      poster="/images/posters/scene-03-research.jpg"
      video="/videos/scene-03-research.mp4"
      icon={<Layers size={16} />}
    >
      {/* 4 Research Pillars Selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '2.5rem' }}>
        {researchPillars.map((pillar) => {
          const isActive = pillar.id === activePillarId;
          return (
            <button
              key={pillar.id}
              onClick={() => setActivePillarId(pillar.id)}
              style={{
                padding: '10px 22px',
                borderRadius: '10px',
                fontFamily: 'var(--font-tech)',
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                background: isActive ? 'rgba(245, 158, 11, 0.22)' : 'rgba(10, 15, 29, 0.85)',
                color: isActive ? '#FBBF24' : '#CBD5E1',
                border: isActive ? '1px solid #D97706' : '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: isActive ? '0 0 20px rgba(245, 158, 11, 0.3)' : 'none',
                transition: 'all 0.25s ease'
              }}
            >
              {pillar.title.split('&')[0].trim()}
            </button>
          );
        })}
      </div>

      {/* Highlighted Pillar Spotlight Box (Pure Black Theme) */}
      <div 
        ref={pillarCardRef}
        data-animate="left"
        className="card-dark"
        style={{
          padding: '2.5rem',
          marginBottom: '3.5rem',
          background: '#0A0F1D',
          border: '1px solid rgba(245, 158, 11, 0.35)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div className="badge-pill-dark" style={{ marginBottom: '0.6rem' }}>
              <Sparkles size={13} />
              <span>Core Theoretical Pillar</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#FFFFFF', fontWeight: 700 }}>
              {selectedPillar.title}
            </h3>
            <div style={{ color: '#F59E0B', fontFamily: 'var(--font-tech)', fontSize: '1rem', marginTop: '4px', fontWeight: 600 }}>
              {selectedPillar.tagline}
            </div>
          </div>

          <div 
            style={{
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '12px',
              padding: '12px 18px',
              maxWidth: '380px'
            }}
          >
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', color: '#FBBF24', marginBottom: '4px', fontWeight: 700 }}>
              Quantitative Impact
            </div>
            <div style={{ fontSize: '0.88rem', color: '#E2E8F0', lineHeight: 1.5 }}>
              {selectedPillar.impactMetrics}
            </div>
          </div>
        </div>

        <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          {selectedPillar.description}
        </p>

        {/* Mathematical Equation Feature Box */}
        <div 
          style={{
            background: '#050B14',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            borderRadius: '14px',
            padding: '1.5rem 2rem',
            marginBottom: '2rem',
            boxShadow: 'inset 0 0 25px rgba(245, 158, 11, 0.08)'
          }}
        >
          <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8', marginBottom: '8px', fontWeight: 600 }}>
            Mathematical Formulation: {selectedPillar.equationLabel}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.3rem', color: '#FDE68A', letterSpacing: '0.04em', overflowX: 'auto', padding: '6px 0', fontWeight: 600 }}>
            {selectedPillar.equation}
          </div>
        </div>

        {/* Topics & Real-world Applications */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '0.95rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem', fontWeight: 700 }}>
              Key Theoretical Topics
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedPillar.keyTopics.map((topic, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#CBD5E1', fontSize: '0.92rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D97706' }} />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '0.95rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem', fontWeight: 700 }}>
              Applied Ecosystems
            </h4>
            <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {selectedPillar.application}
            </p>
          </div>
        </div>
      </div>

      {/* Live Interactive Queue Simulator Laboratory */}
      <div 
        data-animate="right"
        className="card-dark"
        style={{
          padding: '2.5rem',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          background: '#07101F'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '1.5rem' }}>
          <div>
            <div className="badge-pill-dark" style={{ marginBottom: '6px' }}>
              <Play size={12} />
              <span>Live Experiment Laboratory</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 700 }}>
              Interactive M/M/c Multi-Server Queue Simulator
            </h3>
          </div>

          {/* Preset Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <button
              onClick={() => setPreset(6.0, 4.0, 2)}
              className="badge-pill-dark"
              style={{ background: lambda === 6 && mu === 4 && c === 2 ? '#D97706' : 'rgba(255,255,255,0.06)', color: '#FFFFFF' }}
            >
              Balanced 2-Server Hub
            </button>
            <button
              onClick={() => setPreset(12.0, 3.5, 4)}
              className="badge-pill-dark"
              style={{ background: lambda === 12 && mu === 3.5 && c === 4 ? '#D97706' : 'rgba(255,255,255,0.06)', color: '#FFFFFF' }}
            >
              Cloud Cluster (c=4)
            </button>
            <button
              onClick={() => setPreset(14.0, 3.0, 3)}
              className="badge-pill-dark"
              style={{ background: lambda === 14 && mu === 3 && c === 3 ? 'rgba(239, 68, 68, 0.3)' : 'rgba(255,255,255,0.06)', color: '#F87171', borderColor: 'rgba(239, 68, 68, 0.3)' }}
            >
              Overload Surge (ρ ≥ 1)
            </button>
          </div>
        </div>

        {/* Controls & Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Controls */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#E2E8F0', marginBottom: '6px', fontFamily: 'var(--font-tech)' }}>
                <span>Arrival Rate (λ):</span>
                <span style={{ color: '#FBBF24', fontWeight: 700 }}>{lambda.toFixed(1)} req/s</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="20.0"
                step="0.5"
                value={lambda}
                onChange={(e) => setLambda(parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: '#D97706' }}
              />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#E2E8F0', marginBottom: '6px', fontFamily: 'var(--font-tech)' }}>
                <span>Service Rate per Node (μ):</span>
                <span style={{ color: '#F59E0B', fontWeight: 700 }}>{mu.toFixed(1)} req/s</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="12.0"
                step="0.5"
                value={mu}
                onChange={(e) => setMu(parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: '#F59E0B' }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#E2E8F0', marginBottom: '6px', fontFamily: 'var(--font-tech)' }}>
                <span>Parallel Processing Servers (c):</span>
                <span style={{ color: '#FBBF24', fontWeight: 700 }}>{c} Servers</span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="1"
                value={c}
                onChange={(e) => setC(parseInt(e.target.value, 10))}
                style={{ width: '100%', accentColor: '#FBBF24' }}
              />
            </div>

            {/* Stability Indicator */}
            <div 
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: metrics.isStable ? 'rgba(5, 150, 105, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                border: metrics.isStable ? '1px solid rgba(5, 150, 105, 0.4)' : '1px solid rgba(239, 68, 68, 0.4)'
              }}
            >
              {metrics.isStable ? (
                <>
                  <CheckCircle2 size={18} color="#34D399" />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34D399' }}>Ergodic Equilibrium (ρ &lt; 1)</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Traffic Intensity ρ = {metrics.rho.toFixed(3)}</div>
                  </div>
                </>
              ) : (
                <>
                  <AlertTriangle size={18} color="#F87171" />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F87171' }}>System Unstable (Diverging)</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Arrival exceeds total capacity (ρ = {metrics.rho.toFixed(3)} ≥ 1)</div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Real-time Outputs */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.2rem' }}>
              <div style={{ background: '#050B14', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', fontFamily: 'var(--font-tech)' }}>Traffic Intensity (ρ)</div>
                <div style={{ fontSize: '1.35rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: metrics.rho < 0.8 ? '#34D399' : metrics.rho < 1 ? '#FBBF24' : '#F87171' }}>
                  {(metrics.rho * 100).toFixed(1)}%
                </div>
              </div>

              <div style={{ background: '#050B14', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', fontFamily: 'var(--font-tech)' }}>Mean Wait Time (W_q)</div>
                <div style={{ fontSize: '1.35rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#FDE68A' }}>
                  {metrics.isStable ? `${(metrics.Wq * 1000).toFixed(0)} ms` : '∞ (Divergent)'}
                </div>
              </div>
            </div>

            {/* Little's Law Banner */}
            <div 
              style={{
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px dashed rgba(245, 158, 11, 0.4)',
                borderRadius: '10px',
                padding: '10px 16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: '#E2E8F0',
                marginBottom: '1.2rem'
              }}
            >
              Little's Law: L = λ · W &rarr; {metrics.isStable ? `${metrics.L.toFixed(2)} = ${lambda.toFixed(1)} · ${metrics.W.toFixed(2)}s` : 'Divergent'}
            </div>

            {/* Traffic Intensity Progress Bar */}
            <div style={{ marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94A3B8', fontFamily: 'var(--font-tech)', marginBottom: '4px' }}>
                <span>QUEUE UTILIZATION GAUGE</span>
                <span style={{ color: metrics.rho < 0.8 ? '#34D399' : metrics.rho < 1.0 ? '#FBBF24' : '#F87171', fontWeight: 700 }}>
                  {metrics.isStable ? `${(metrics.rho * 100).toFixed(1)}% CAPACITY` : 'OVERLOAD 100%+'}
                </span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                <div 
                  style={{ 
                    width: `${Math.min(metrics.rho * 100, 100)}%`, 
                    height: '100%', 
                    background: metrics.rho < 0.8 ? 'linear-gradient(90deg, #059669, #34D399)' : metrics.rho < 1.0 ? 'linear-gradient(90deg, #D97706, #FBBF24)' : 'linear-gradient(90deg, #DC2626, #F87171)', 
                    transition: 'width 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.35s ease' 
                  }} 
                />
              </div>
            </div>

            {/* Server Bays with GSAP elastic pop on change */}
            <div ref={serverBaysRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {Array.from({ length: c }).map((_, idx) => (
                <div 
                  key={idx}
                  style={{
                    flex: '1 1 80px',
                    padding: '8px',
                    background: metrics.isStable ? 'rgba(245, 158, 11, 0.15)' : 'rgba(239, 68, 68, 0.2)',
                    border: metrics.isStable ? '1px solid rgba(245, 158, 11, 0.35)' : '1px solid rgba(239, 68, 68, 0.5)',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: metrics.isStable ? '#FBBF24' : '#F87171'
                  }}
                >
                  Node {idx + 1}: {metrics.isStable ? 'ONLINE' : 'SURGE'}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CinematicScene>
  );
};
