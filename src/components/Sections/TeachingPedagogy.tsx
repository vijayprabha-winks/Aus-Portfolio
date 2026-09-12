import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { BookOpen, ChevronDown, ChevronUp, Bookmark } from 'lucide-react';

export const TeachingPedagogy: React.FC = () => {
  const { teaching } = portfolioData;
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(teaching.courses[0].id);

  const toggleCourse = (id: string) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  return (
    <section id="teaching" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-eyebrow">
            <BookOpen size={16} />
            <span>Pedagogy & Department Leadership</span>
          </div>
          <h2 className="section-title">
            Instruction & <span>Academic Mentorship</span>
          </h2>
          <p className="section-desc">
            Committed to intellectual rigor in university classrooms, equipping future mathematicians and engineers with robust analytical foundations.
          </p>
        </div>

        {/* Leadership Highlight Banner */}
        <div 
          className="glass-panel"
          style={{
            padding: '2rem 2.5rem',
            marginBottom: '3.5rem',
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(129, 140, 248, 0.08))',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div style={{ maxWidth: '750px' }}>
            <div className="badge-tag" style={{ marginBottom: '0.6rem' }}>
              Leadership Appointment
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.4rem' }}>
              {teaching.coordinatorTitle}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {teaching.coordinatorDescription}
            </p>
          </div>

          <div 
            style={{
              padding: '12px 20px',
              background: 'rgba(6, 10, 20, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '12px',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', color: 'var(--accent-cyan)' }}>
              Tenure
            </div>
            <div style={{ fontFamily: 'var(--font-tech)', fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
              {teaching.coordinatorPeriod}
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {teaching.courses.map((course) => {
            const isExpanded = expandedCourseId === course.id;

            return (
              <div 
                key={course.id}
                className="glass-panel"
                style={{
                  padding: '1.75rem 2rem',
                  border: isExpanded ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid var(--border-subtle)',
                  background: isExpanded ? 'rgba(12, 18, 36, 0.85)' : 'var(--bg-card)'
                }}
              >
                {/* Course Header */}
                <div 
                  onClick={() => toggleCourse(course.id)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--accent-cyan)',
                        background: 'rgba(56, 189, 248, 0.12)',
                        padding: '4px 10px',
                        borderRadius: '6px'
                      }}
                    >
                      {course.code}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#ffffff' }}>
                      {course.title}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-tech)' }}>
                      • {course.level}
                    </span>
                  </div>

                  <div style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-tech)' }}>
                      {isExpanded ? 'Hide Syllabus' : 'View Syllabus'}
                    </span>
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: '1.7', margin: '1rem 0 0' }}>
                  {course.description}
                </p>

                {/* Expanded Syllabus Drawer */}
                {isExpanded && (
                  <div 
                    style={{
                      marginTop: '1.5rem',
                      paddingTop: '1.5rem',
                      borderTop: '1px solid var(--border-subtle)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '1.5rem'
                    }}
                  >
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.08em', marginBottom: '0.8rem' }}>
                        Core Syllabus Modules
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <div><strong style={{ color: '#ffffff' }}>Unit I:</strong> {course.syllabus.unit1}</div>
                        <div><strong style={{ color: '#ffffff' }}>Unit II:</strong> {course.syllabus.unit2}</div>
                        <div><strong style={{ color: '#ffffff' }}>Unit III:</strong> {course.syllabus.unit3}</div>
                        <div><strong style={{ color: '#ffffff' }}>Unit IV:</strong> {course.syllabus.unit4}</div>
                      </div>
                    </div>

                    <div>
                      <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.08em', marginBottom: '0.8rem' }}>
                        Curated Reference Treatises
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        {course.syllabus.references.map((ref, rIdx) => (
                          <div key={rIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Bookmark size={14} color="var(--accent-cyan)" />
                            <span>{ref}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
