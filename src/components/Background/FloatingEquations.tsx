import React, { useEffect, useRef } from 'react';

interface EquationParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  size: number;
  baseAlpha: number;
  alpha: number;
  rotation: number;
  vRot: number;
  oscSpeed: number;
  oscOffset: number;
  pulseSpeed: number;
  isSymbol: boolean;
  depth: number;
}

// Curated academic formulations from Queueing Theory, Stochastic Systems & Optimization
const FORMULAS: string[] = [
  'L_q = [ P₀(λ/μ)ᶜ ρ ] / [ c!(1 - ρ)² ]',
  'W = L / λ  (Little\'s Law)',
  'W_q = L_q / λ',
  'π P = π  (Stationary Markov Vector)',
  'ρ = λ / (c · μ) < 1',
  'dX_t = μ dt + σ dB_t  (Itô SDE)',
  'P_n = (1 - ρ) ρⁿ  (M/M/1 State)',
  'Q 1 = 0  (Infinitesimal Generator)',
  'lim P_ij(t) = π_j  as t → ∞',
  'E[T] = ∫₀^∞ (1 - F(t)) dt',
  '∇f(x*) + Σ μᵢ ∇gᵢ(x*) = 0',
  'E[W] = 1 / (μ - λ)',
  'φ_X(t) = E[e^{itX}]',
  'Σ πᵢ = 1',
  'λ_n = λ,  μ_n = nμ',
  'Var(X) = E[X²] - (E[X])²',
  'M/M/c/K Queue Network',
  'P₀ = [ Σ (λ/μ)ⁿ/n! + (λ/μ)ᶜ/(c!(1-ρ)) ]⁻¹',
  'd/dt P_n(t) = -(λ+μ)P_n(t) + λP_{n-1}(t) + μP_{n+1}(t)',
  'Q(t) = A(t) - D(t)',
  'B(c, a) = (aᶜ / c!) / Σ (aᵏ / k!)  (Erlang-B)',
  'C(c, a) = P(Wait > 0)  (Erlang-C)',
];

const SYMBOLS: string[] = [
  'λ', 'μ', 'ρ', 'π', 'Σ', '∫', '∞', '∂/∂t', 'E[X]', 'Ω', 'P(A|B)', '∇', 'σ²', 'Φ(z)', 'Markov', 'M/M/c'
];

export const FloatingEquations: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Dynamic density scaling: 22-30 particles on desktop, 12-16 on mobile
    const formulaCount = Math.min(18, Math.max(9, Math.floor(width / 95)));
    const symbolCount = Math.min(14, Math.max(6, Math.floor(width / 115)));
    const totalCount = formulaCount + symbolCount;

    const particles: EquationParticle[] = [];

    for (let i = 0; i < totalCount; i++) {
      const isSymbol = i >= formulaCount;
      const depth = 0.55 + Math.random() * 0.45; // Depth factor (0.55 = deep bg, 1.0 = foreground)
      const text = isSymbol
        ? SYMBOLS[i % SYMBOLS.length]
        : FORMULAS[i % FORMULAS.length];

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: -0.18 - depth * 0.22, // Smooth, gentle upward drift
        text,
        size: isSymbol ? Math.round(14 + depth * 7) : Math.round(11 + depth * 3.5),
        baseAlpha: 0.12 + depth * 0.11, // Ambient and non-intrusive (never obscures UI)
        alpha: 0.15,
        rotation: (Math.random() - 0.5) * 0.08,
        vRot: (Math.random() - 0.5) * 0.0008,
        oscSpeed: 0.0012 + Math.random() * 0.0018,
        oscOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.02,
        isSymbol,
        depth
      });
    }

    let animId: number;
    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle constellation connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          // 85px connection threshold
          if (distSq < 7225) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / 85) * 0.06 * Math.min(p1.alpha, p2.alpha);
            if (lineAlpha > 0.004) {
              ctx.strokeStyle = `rgba(245, 158, 11, ${lineAlpha})`;
              ctx.lineWidth = 0.75;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // 2. Update and draw each particle
      particles.forEach((p) => {
        // Natural gentle wave drift
        p.x += p.vx + Math.sin(time * p.oscSpeed + p.oscOffset) * 0.22;
        p.y += p.vy;
        p.rotation += p.vRot;

        // Subtle breathing shimmer
        p.alpha = Math.max(0.06, p.baseAlpha + Math.sin(time * p.pulseSpeed + p.oscOffset) * 0.05);

        // Gentle cursor breeze repulsion (never interferes with clicks, pure atmospheric deflection)
        if (mouseX > 0 && mouseY > 0) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = 120 * 120;
          if (distSq < maxDistSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / 120) * 1.4;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Seamless wrap around edges
        if (p.y < -60) {
          p.y = height + 40;
          p.x = Math.random() * width;
        }
        if (p.x < -160) p.x = width + 60;
        if (p.x > width + 160) p.x = -60;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.isSymbol) {
          ctx.font = `600 ${p.size}px 'Fira Code', 'Times New Roman', serif`;
          // Warm glowing amber gold for symbols
          ctx.fillStyle = `rgba(251, 191, 36, ${p.alpha * 0.9})`;
        } else {
          ctx.font = `500 ${p.size}px 'Fira Code', monospace`;
          // Rich imperial champagne gold for equations
          ctx.fillStyle = `rgba(217, 119, 6, ${p.alpha * 0.85})`;
        }

        ctx.fillText(p.text, 0, 0);
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 1,
        opacity: 0.88,
        transform: 'translateZ(0)',
        willChange: 'transform'
      }}
    />
  );
};
