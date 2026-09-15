import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { portfolioData, type CourseItem as CourseType } from '../../data/portfolioData';
import { CinematicScene } from '../Cinematic/CinematicScene';
import { BookOpen, ChevronDown, ChevronUp, Bookmark } from 'lucide-react';

gsap.registerPlugin(useGSAP);

interface CourseCardProps {
  course: CourseType;
  isExpanded: boolean;
  onToggle: () => void;
  idx: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, isExpanded, onToggle, idx }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (drawerRef.current && isExpanded) {
      gsap.fromTo(drawerRef.current,
        { height: 0, opacity: 0, y: -10 },
        { height: 'auto', opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, { dependencies: [isExpanded] });

  return (
    <div 
      data-animate={idx % 2 === 0 ? "right" : "left"}
      className="card-light"
      style={{
        padding: '1.8rem 2.2rem',
        background: '#FFFFFF',
        border: isExpanded ? '2px solid rgba(217, 119, 6, 0.4)' : '1px solid #E2E8F0',
        boxShadow: isExpanded ? '0 12px 32px rgba(217, 119, 6, 0.12)' : '0 6px 20px rgba(0,0,0,0.04)',
        transition: 'border 0.3s ease, box-shadow 0.3s ease'
      }}
    >
      <div 
        onClick={onToggle}
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
              color: '#B45309',
              background: '#FFFBEB',
              border: '1px solid #FDE68A',
              padding: '4px 12px',
              borderRadius: '6px'
            }}
          >
            {course.code}
          </span>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#000000', fontWeight: 700 }}>
            {course.title}
          </h3>
          <span style={{ fontSize: '0.82rem', color: '#475569', fontFamily: 'var(--font-tech)' }}>
            • {course.level}
          </span>
        </div>

        <button 
          style={{
            color: '#B45309',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-tech)',
            fontSize: '0.82rem',
            fontWeight: 700,
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <span>{isExpanded ? 'Hide Syllabus' : 'View Syllabus'}</span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      <p style={{ color: '#1E293B', fontSize: '0.95rem', lineHeight: '1.7', margin: '1rem 0 0' }}>
        {course.description}
      </p>

      {/* Syllabus Details Drawer with GSAP Reveal */}
      {isExpanded && (
        <div 
          ref={drawerRef}
          style={{
            marginTop: '1.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #E2E8F0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            overflow: 'hidden'
          }}
        >
          <div>
            <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '0.85rem', textTransform: 'uppercase', color: '#B45309', letterSpacing: '0.08em', marginBottom: '0.8rem', fontWeight: 700 }}>
              Core Syllabus Modules
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#1E293B' }}>
              <div><strong style={{ color: '#000000' }}>Unit I:</strong> {course.syllabus.unit1}</div>
              <div><strong style={{ color: '#000000' }}>Unit II:</strong> {course.syllabus.unit2}</div>
              <div><strong style={{ color: '#000000' }}>Unit III:</strong> {course.syllabus.unit3}</div>
              <div><strong style={{ color: '#000000' }}>Unit IV:</strong> {course.syllabus.unit4}</div>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-tech)', fontSize: '0.85rem', textTransform: 'uppercase', color: '#B45309', letterSpacing: '0.08em', marginBottom: '0.8rem', fontWeight: 700 }}>
              Curated Reference Treatises
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#1E293B' }}>
              {course.syllabus.references.map((ref, rIdx) => (
                <div key={rIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Bookmark size={15} color="#D97706" />
                  <span>{ref}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const TeachingSection: React.FC = () => {
  const { teaching } = portfolioData;
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(teaching.courses[0].id);

  const toggleCourse = (id: string) => {
    setExpandedCourseId(expandedCourseId === id ? null : id);
  };

  return (
    <CinematicScene
      id="teaching"
      eyebrow="06 // PEDAGOGY & LEADERSHIP"
      title="INSTRUCTION &"
      titleHighlight="DEPARTMENT LEADERSHIP"
      subtitle="Committed to intellectual rigor in the lecture hall, instructing core mathematical theories and coordinating academic activities."
      theme="light"
      poster="/images/posters/scene-06-teaching.jpg"
      video="/videos/scene-06-teaching.mp4"
      icon={<BookOpen size={16} />}
    >
      {/* Department Coordinator Leadership Banner (Pure White Theme) */}
      <div 
        data-animate="left"
        className="card-light"
        style={{
          padding: '2.2rem 2.6rem',
          marginBottom: '3rem',
          background: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)',
          border: '1px solid #FDE68A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}
      >
        <div style={{ maxWidth: '750px' }}>
          <div className="badge-pill-light" style={{ marginBottom: '0.6rem', background: 'linear-gradient(135deg, #D97706, #B45309)', color: '#ffffff', borderColor: '#D97706' }}>
            Academic Leadership
          </div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.25rem, 4vw, 1.65rem)', color: '#000000', marginBottom: '0.4rem', fontWeight: 700 }}>
            {teaching.coordinatorTitle}
          </h3>
          <p style={{ color: '#1E293B', fontSize: '0.98rem', lineHeight: '1.7' }}>
            {teaching.coordinatorDescription}
          </p>
        </div>

        <div 
          style={{
            padding: '12px 24px',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
          }}
        >
          <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', color: '#B45309', fontWeight: 700 }}>
            Tenure
          </div>
          <div style={{ fontFamily: 'var(--font-tech)', fontSize: '1.2rem', fontWeight: 700, color: '#000000' }}>
            {teaching.coordinatorPeriod}
          </div>
        </div>
      </div>

      {/* Courses Accordion List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {teaching.courses.map((course, idx) => (
          <CourseCard
            key={course.id}
            course={course}
            isExpanded={expandedCourseId === course.id}
            onToggle={() => toggleCourse(course.id)}
            idx={idx}
          />
        ))}
      </div>
    </CinematicScene>
  );
};
