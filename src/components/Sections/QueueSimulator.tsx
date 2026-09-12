import React, { useState, useMemo } from 'react';
import { Activity, AlertTriangle, CheckCircle2, Cpu, Gauge } from 'lucide-react';

export const QueueSimulator: React.FC = () => {
  // Input parameters
  const [lambda, setLambda] = useState<number>(6.0); // Arrival rate
  const [mu, setMu] = useState<number>(4.0);         // Service rate per server
  const [c, setC] = useState<number>(2);              // Number of servers (M/M/c)

  // Factorial helper
  const factorial = (n: number): number => {
    if (n <= 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
  };

  // M/M/c Queueing calculations
  const metrics = useMemo(() => {
    const rho = lambda / (c * mu); // Utilization factor
    const isStable = rho < 1.0;

    if (!isStable) {
      return {
        rho,
        isStable: false,
        P0: 0,
        Lq: Infinity,
        Wq: Infinity,
        L: Infinity,
        W: Infinity
      };
    }

    // P0 calculation:
    // P0 = [ sum_{n=0}^{c-1} ( (lambda/mu)^n / n! ) + ( (lambda/mu)^c / ( c! * (1 - rho) ) ) ]^(-1)
    const r = lambda / mu;
    let sumTerms = 0;
    for (let n = 0; n < c; n++) {
      sumTerms += Math.pow(r, n) / factorial(n);
    }
    const lastTerm = (Math.pow(r, c) / factorial(c)) * (1 / (1 - rho));
    const P0 = 1 / (sumTerms + lastTerm);

    // Lq calculation:
    // Lq = [ P0 * (lambda/mu)^c * rho ] / [ c! * (1 - rho)^2 ]
    const Lq = (P0 * Math.pow(r, c) * rho) / (factorial(c) * Math.pow(1 - rho, 2));

    // Little's Law:
    // Wq = Lq / lambda
    const Wq = Lq / lambda;
    // W = Wq + 1/mu
    const W = Wq + (1 / mu);
    // L = lambda * W
    const L = lambda * W;

    return {
      rho,
      isStable: true,
      P0,
      Lq,
      Wq,
      W,
      L
    };
  }, [lambda, mu, c]);

  // Presets
  const setPreset = (l: number, m: number, servers: number) => {
    setLambda(l);
    setMu(m);
    setC(servers);
  };

  return (
    <section id="simulator" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-eyebrow">
            <Gauge size={16} />
            <span>Interactive Mathematics Lab</span>
          </div>
          <h2 className="section-title">
            Live <span>M/M/c Queueing</span> Simulator
          </h2>
          <p className="section-desc">
            Interact with multi-server stochastic queueing dynamics in real time. Adjust arrival rates, service capacities, and server counts to observe Little's Law and steady-state equilibria.
          </p>
        </div>

        {/* Simulator Dashboard Container */}
        <div 
          className="glass-panel"
          style={{
            padding: '2.5rem',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9), 0 0 30px rgba(56, 189, 248, 0.1)'
          }}
        >
          {/* Preset Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Operational Presets:
            </span>
            <button
              onClick={() => setPreset(6.0, 4.0, 2)}
              className="badge-tag"
              style={{ background: lambda === 6 && mu === 4 && c === 2 ? 'rgba(56, 189, 248, 0.3)' : 'rgba(255,255,255,0.06)' }}
            >
              Balanced 2-Server Hub
            </button>
            <button
              onClick={() => setPreset(12.0, 3.5, 4)}
              className="badge-tag"
              style={{ background: lambda === 12 && mu === 3.5 && c === 4 ? 'rgba(56, 189, 248, 0.3)' : 'rgba(255,255,255,0.06)' }}
            >
              Cloud Data Center (c=4)
            </button>
            <button
              onClick={() => setPreset(4.5, 5.0, 1)}
              className="badge-tag"
              style={{ background: lambda === 4.5 && mu === 5.0 && c === 1 ? 'rgba(56, 189, 248, 0.3)' : 'rgba(255,255,255,0.06)' }}
            >
              Classic M/M/1 Single Server
            </button>
            <button
              onClick={() => setPreset(14.0, 3.0, 3)}
              className="badge-tag"
              style={{ background: lambda === 14 && mu === 3 && c === 3 ? 'rgba(239, 68, 68, 0.3)' : 'rgba(255,255,255,0.06)', color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.3)' }}
            >
              Congested / Overload (ρ ≥ 1)
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {/* Left Controls: Sliders */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={18} color="var(--accent-cyan)" />
                <span>System Parameters</span>
              </h3>

              {/* Slider 1: Arrival Rate (lambda) */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-tech)', fontSize: '0.88rem', color: '#e2e8f0', marginBottom: '6px' }}>
                  <span>Arrival Rate (λ):</span>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{lambda.toFixed(1)} req/sec</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="20.0"
                  step="0.5"
                  value={lambda}
                  onChange={(e) => setLambda(parseFloat(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--accent-cyan)', cursor: 'pointer' }}
                />
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Poisson arrival stream intensity</div>
              </div>

              {/* Slider 2: Service Rate (mu) */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-tech)', fontSize: '0.88rem', color: '#e2e8f0', marginBottom: '6px' }}>
                  <span>Service Rate per Server (μ):</span>
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>{mu.toFixed(1)} req/sec</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="12.0"
                  step="0.5"
                  value={mu}
                  onChange={(e) => setMu(parseFloat(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--accent-emerald)', cursor: 'pointer' }}
                />
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Exponential service completion rate</div>
              </div>

              {/* Slider 3: Servers count (c) */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-tech)', fontSize: '0.88rem', color: '#e2e8f0', marginBottom: '6px' }}>
                  <span>Parallel Servers (c):</span>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>{c} Servers</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  value={c}
                  onChange={(e) => setC(parseInt(e.target.value, 10))}
                  style={{ width: '100%', accentColor: 'var(--accent-gold)', cursor: 'pointer' }}
                />
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Multi-server processing capacity (c · μ = {(c * mu).toFixed(1)} req/s)</div>
              </div>

              {/* Stability Indicator */}
              <div 
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: metrics.isStable ? 'rgba(52, 211, 153, 0.1)' : 'rgba(239, 68, 68, 0.15)',
                  border: metrics.isStable ? '1px solid rgba(52, 211, 153, 0.3)' : '1px solid rgba(239, 68, 68, 0.4)'
                }}
              >
                {metrics.isStable ? (
                  <>
                    <CheckCircle2 size={20} color="var(--accent-emerald)" />
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-emerald)' }}>System in Ergodic Equilibrium</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Traffic intensity ρ &lt; 1 (ρ = {metrics.rho.toFixed(3)})</div>
                    </div>
                  </>
                ) : (
                  <>
                    <AlertTriangle size={20} color="#f87171" />
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f87171' }}>System Unstable (Queue Diverging)</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Arrival rate exceeds total capacity (ρ = {metrics.rho.toFixed(3)} ≥ 1)</div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right Output: Real-time Mathematical Metrics & Visual Topology */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={18} color="var(--accent-cyan)" />
                <span>Steady-State Performance Indices</span>
              </h3>

              {/* Metrics Grid */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}
              >
                {/* Metric 1: Utilization */}
                <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-tech)' }}>Traffic Intensity (ρ)</div>
                  <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: metrics.rho < 0.8 ? 'var(--accent-emerald)' : metrics.rho < 1.0 ? 'var(--accent-gold)' : '#f87171' }}>
                    {(metrics.rho * 100).toFixed(1)}%
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>ρ = λ / (c · μ)</div>
                </div>

                {/* Metric 2: P0 (Idle probability) */}
                <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-tech)' }}>Idle Probability (P₀)</div>
                  <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                    {metrics.isStable ? `${(metrics.P0 * 100).toFixed(1)}%` : '0.0%'}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Probability system is empty</div>
                </div>

                {/* Metric 3: Mean Queue Length Lq */}
                <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-tech)' }}>Mean Queue Length (L_q)</div>
                  <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#ffffff' }}>
                    {metrics.isStable ? metrics.Lq.toFixed(2) : '∞ (Infinite)'}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Customers waiting in line</div>
                </div>

                {/* Metric 4: Mean Waiting Time Wq */}
                <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-tech)' }}>Mean Wait Time (W_q)</div>
                  <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent-cyan-light)' }}>
                    {metrics.isStable ? `${(metrics.Wq * 1000).toFixed(0)} ms` : '∞ (Divergent)'}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Average queue delay</div>
                </div>
              </div>

              {/* Little's Law Banner */}
              <div 
                style={{
                  background: 'rgba(56, 189, 248, 0.08)',
                  border: '1px dashed rgba(56, 189, 248, 0.35)',
                  borderRadius: '10px',
                  padding: '12px 18px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem'
                }}
              >
                <span style={{ color: 'var(--accent-cyan)' }}>Little's Law Validation:</span>
                <span style={{ color: '#ffffff' }}>
                  L = λ · W &rarr; {metrics.isStable ? `${metrics.L.toFixed(2)} = ${lambda.toFixed(1)} · ${metrics.W.toFixed(2)}s` : 'Divergent'}
                </span>
              </div>

              {/* Server Bays Graphical Visualization */}
              <div style={{ background: 'rgba(5, 8, 16, 0.7)', borderRadius: '12px', padding: '1.2rem', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase' }}>
                  Active Server Topology ({c} Processing Nodes)
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {Array.from({ length: c }).map((_, idx) => (
                    <div 
                      key={idx}
                      style={{
                        flex: '1 1 80px',
                        padding: '10px',
                        background: metrics.isStable ? 'rgba(56, 189, 248, 0.12)' : 'rgba(239, 68, 68, 0.2)',
                        border: metrics.isStable ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(239, 68, 68, 0.5)',
                        borderRadius: '8px',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Node {idx + 1}</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: metrics.isStable ? 'var(--accent-cyan)' : '#f87171' }}>
                        {metrics.isStable ? 'ACTIVE' : 'OVERLOAD'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
