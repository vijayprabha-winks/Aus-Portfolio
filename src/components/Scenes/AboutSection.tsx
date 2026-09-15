import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { CinematicScene } from '../Cinematic/CinematicScene';
import { 
  User, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  MapPin, 
  Mail, 
  FileDown, 
  ArrowDown, 
  Sparkles, 
  GraduationCap, 
  Send
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { personal, about } = portfolioData;

  const infoCards = [
    { label: 'Current Position', value: 'Ph.D. Research Scholar', highlight: true },
    { label: 'Institution', value: 'NIT Trichy', highlight: false },
    { label: 'Primary Focus', value: 'Queueing & Stochastic Systems', highlight: true },
    { label: 'Teaching Experience', value: '4 University Courses', highlight: false },
    { label: 'Availability', value: 'Academic Collaborations & Postdoc', highlight: true },
    { label: 'Academic Goal', value: 'University Professor & PI', highlight: false },
    { label: 'Current Role', value: 'Department Coordinator (2025–Present)', highlight: true },
    { label: 'Interests', value: 'Stochastic Modeling, Optimization, Pure Analysis', highlight: false },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CinematicScene
      id="about"
      eyebrow="02 // THE RESEARCHER"
      title="AUSTIN DURAI T"
      titleHighlight="MATHEMATICAL SCHOLAR"
      subtitle="Ph.D. Scholar in Mathematics at the National Institute of Technology, Tiruchirappalli, specializing in Queueing Theory, Stochastic Dynamics & Markovian Operational Optimization."
      theme="light"
      poster="/images/posters/scene-02-about.jpg"
      video="/videos/scene-02-about.mp4"
      icon={<User size={16} />}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

        {/* ========================================================= */}
        {/* 1. MASTER FORMULATION & RESEARCH ACTIONS HERO BANNER */}
        {/* ========================================================= */}
        <div 
          data-animate="left"
          className="card-light"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '2.2rem 2rem',
            textAlign: 'center',
            boxShadow: '0 10px 30px -8px rgba(0, 0, 0, 0.08)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle gold gradient accent beam */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #D97706, #F59E0B, #FBBF24)' }} />

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '9999px', background: '#FFFBEB', border: '1px solid #FDE68A', color: '#B45309', fontFamily: 'var(--font-tech)', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <Sparkles size={14} color="#B45309" />
            <span>QUEUEING THEORY & OPERATIONAL MATHEMATICS</span>
          </div>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#000000', fontWeight: 800, marginBottom: '0.6rem' }}>
            Stochastic Modeling & Waiting-Line Optimization
          </h3>

          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.02rem', color: '#334155', maxWidth: '780px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
            Investigating multi-server Markovian queues ($M/M/c$), transient and steady-state probabilities, and performance metrics for mission-critical infrastructure.
          </p>

          {/* Mathematical Master Formula Feature Box */}
          <div className="formula-scroll-box" style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
            <div style={{ display: 'inline-block', background: '#0A0F1D', color: '#FDE68A', padding: '10px 24px', borderRadius: '12px', fontFamily: 'var(--font-mono)', fontSize: 'clamp(0.82rem, 1.4vw, 1.05rem)', letterSpacing: '0.04em', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', border: '1px solid rgba(245, 158, 11, 0.35)', whiteSpace: 'nowrap' }}>
              L_q = [ P₀(λ/μ)ᶜ ρ ] / [ c!(1 - ρ)² ] &nbsp;•&nbsp; π P = π &nbsp;•&nbsp; W = L / λ &nbsp;•&nbsp; ρ &lt; 1
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <button
              onClick={() => scrollToSection('research')}
              style={{ padding: '11px 24px', borderRadius: '10px', background: 'linear-gradient(135deg, #D97706, #B45309)', color: '#FFFFFF', fontFamily: 'var(--font-tech)', fontSize: '0.92rem', fontWeight: 700, letterSpacing: '0.04em', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', border: 'none', boxShadow: '0 4px 20px rgba(217, 119, 6, 0.3)' }}
            >
              <span>Explore Research Pillars</span>
              <ArrowDown size={16} />
            </button>

            <a
              href={personal.cvUrl}
              download="Austin-Durai-CV.pdf"
              style={{ padding: '11px 22px', borderRadius: '10px', background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#0F172A', fontFamily: 'var(--font-tech)', fontSize: '0.92rem', fontWeight: 700, letterSpacing: '0.04em', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
            >
              <FileDown size={16} color="#B45309" />
              <span>Download CV (PDF)</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              style={{ padding: '11px 20px', borderRadius: '10px', background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#334155', fontFamily: 'var(--font-tech)', fontSize: '0.92rem', fontWeight: 700, letterSpacing: '0.04em', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
            >
              <Send size={15} color="#475569" />
              <span>Contact Scholar</span>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. BALANCED 4-COLUMN NATIONAL MERIT & ACCOLADE CARDS */}
        {/* ========================================================= */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', 
            gap: '1.25rem' 
          }}
        >
          {/* Card 1: CSIR NET JRF */}
          <div 
            data-animate="left"
            className="card-light"
            style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #FDE68A', borderTop: '4px solid #F59E0B', borderRadius: '14px', boxShadow: '0 6px 20px rgba(245, 158, 11, 0.08)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.78rem', fontWeight: 700, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.08em' }}>National Standing</span>
              <Award size={18} color="#F59E0B" />
            </div>
            <div style={{ fontFamily: 'var(--font-tech)', fontSize: '2rem', fontWeight: 900, color: '#B45309', lineHeight: 1.1 }}>
              AIR 140
            </div>
            <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.95rem', fontWeight: 700, color: '#000000', margin: '4px 0 2px' }}>
              CSIR-UGC NET JRF
            </div>
            <div style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.4 }}>
              Junior Research Fellowship in Mathematical Sciences • Top 0.5% National Percentile
            </div>
          </div>

          {/* Card 2: GATE Mathematics */}
          <div 
            data-animate="left"
            className="card-light"
            style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #FDE68A', borderTop: '4px solid #D97706', borderRadius: '14px', boxShadow: '0 6px 20px rgba(217, 119, 6, 0.08)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.78rem', fontWeight: 700, color: '#B45309', textTransform: 'uppercase', letterSpacing: '0.08em' }}>National Qualifier</span>
              <Award size={18} color="#D97706" />
            </div>
            <div style={{ fontFamily: 'var(--font-tech)', fontSize: '2rem', fontWeight: 900, color: '#B45309', lineHeight: 1.1 }}>
              AIR 754
            </div>
            <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.95rem', fontWeight: 700, color: '#000000', margin: '4px 0 2px' }}>
              GATE MATHEMATICS
            </div>
            <div style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.4 }}>
              Graduate Aptitude Test in Engineering • National Mathematical Sciences Benchmark
            </div>
          </div>

          {/* Card 3: Department Coordinator */}
          <div 
            data-animate="right"
            className="card-light"
            style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #A7F3D0', borderTop: '4px solid #10B981', borderRadius: '14px', boxShadow: '0 6px 20px rgba(16, 185, 129, 0.08)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.78rem', fontWeight: 700, color: '#047857', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Governance Role</span>
              <BookOpen size={18} color="#10B981" />
            </div>
            <div style={{ fontFamily: 'var(--font-tech)', fontSize: '1.6rem', fontWeight: 900, color: '#047857', lineHeight: 1.1 }}>
              COORDINATOR
            </div>
            <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.95rem', fontWeight: 700, color: '#000000', margin: '4px 0 2px' }}>
              NIT TRICHY (2025–PRESENT)
            </div>
            <div style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.4 }}>
              Department Coordinator • Department of Mathematics, National Institute of Technology
            </div>
          </div>

          {/* Card 4: Coursework GPA */}
          <div 
            data-animate="right"
            className="card-light"
            style={{ padding: '1.5rem', background: '#FFFFFF', border: '1px solid #DDD6FE', borderTop: '4px solid #8B5CF6', borderRadius: '14px', boxShadow: '0 6px 20px rgba(139, 92, 246, 0.08)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.78rem', fontWeight: 700, color: '#6D28D9', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Academic Rigor</span>
              <GraduationCap size={18} color="#8B5CF6" />
            </div>
            <div style={{ fontFamily: 'var(--font-tech)', fontSize: '2rem', fontWeight: 900, color: '#6D28D9', lineHeight: 1.1 }}>
              GPA 9.25
            </div>
            <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.95rem', fontWeight: 700, color: '#000000', margin: '4px 0 2px' }}>
              PH.D. COURSEWORK
            </div>
            <div style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.4 }}>
              Grade Point Average of 9.25 / 10 • Advanced Probability, Analysis & Stochastic Calculus
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. MAIN DOSSIER: SCHOLAR PROFILE + BIOGRAPHY & MATRIX */}
        {/* ========================================================= */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Portrait & Credentials Dossier */}
          <div 
            data-animate="left"
            className="card-light" 
            style={{ 
              padding: '2.5rem 2rem', 
              textAlign: 'center', 
              position: 'relative',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
              boxShadow: '0 10px 30px -8px rgba(0, 0, 0, 0.08)'
            }}
          >
            {/* Portrait Photo */}
            <div 
              style={{
                width: '170px',
                height: '170px',
                margin: '0 auto 1.5rem',
                borderRadius: '50%',
                padding: '4px',
                background: 'linear-gradient(135deg, #D97706, #F59E0B)',
                boxShadow: '0 12px 30px rgba(217, 119, 6, 0.25)'
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

            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.55rem', color: '#000000', marginBottom: '0.3rem', fontWeight: 800 }}>
              {personal.name}
            </h4>
            <div style={{ color: '#B45309', fontFamily: 'var(--font-tech)', fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.3rem' }}>
              {personal.title}
            </div>
            <div style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '1.5rem', fontWeight: 500 }}>
              {personal.institution}
            </div>

            {/* Credential Pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#1E293B' }}>
                <Award size={16} color="#D97706" />
                <span>CSIR-UGC NET JRF • <strong style={{ color: '#D97706' }}>AIR 140</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#1E293B' }}>
                <Award size={16} color="#D97706" />
                <span>GATE Mathematics • <strong style={{ color: '#D97706' }}>AIR 754</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#1E293B' }}>
                <BookOpen size={16} color="#059669" />
                <span>{personal.coordinatorTenure}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#475569' }}>
                <MapPin size={16} color="#475569" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* Quick Action Links */}
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <a 
                href={personal.cvUrl} 
                download="Austin-Durai-CV.pdf"
                className="badge-pill-light"
                style={{ padding: '9px 18px', cursor: 'pointer', background: 'linear-gradient(135deg, #D97706, #B45309)', color: '#ffffff', borderColor: '#D97706', textDecoration: 'none' }}
              >
                <FileDown size={14} />
                <span>Curriculum Vitae</span>
              </a>
              <a 
                href={`mailto:${personal.email}`}
                className="badge-pill-light"
                style={{ padding: '9px 18px', cursor: 'pointer', background: '#FFFBEB', color: '#B45309', borderColor: '#FDE68A', textDecoration: 'none' }}
              >
                <Mail size={14} />
                <span>Direct Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Academic Biography & 8 Metric Cards */}
          <div>
            <div 
              data-animate="right"
              className="card-light" 
              style={{ padding: '2.2rem', marginBottom: '1.5rem', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', boxShadow: '0 10px 30px -8px rgba(0, 0, 0, 0.08)' }}
            >
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#000000', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700 }}>
                <CheckCircle2 size={20} color="#D97706" />
                <span>Scholarly Trajectory & Philosophy</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', color: '#1E293B', fontSize: '0.98rem', lineHeight: '1.8' }}>
                {about.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* 8 Metric Cards Grid - Balanced 2-Column Symmetrical Layout */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem'
              }}
            >
              {infoCards.map((card, idx) => (
                <div 
                  key={idx} 
                  data-animate={idx % 2 === 0 ? "left" : "right"}
                  className="card-light" 
                  style={{ 
                    padding: '1.1rem 1.3rem',
                    background: card.highlight ? '#FFFBEB' : '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    borderLeft: card.highlight ? '4px solid #D97706' : '4px solid #CBD5E1'
                  }}
                >
                  <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#475569', fontWeight: 600 }}>
                    {card.label}
                  </div>
                  <div style={{ fontSize: '0.98rem', fontFamily: 'var(--font-tech)', fontWeight: 700, color: '#000000', margin: '4px 0' }}>
                    {card.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </CinematicScene>
  );
};
