import React, { useState } from 'react';
import { portfolioData, type StatRecapItem } from '../../data/portfolioData';
import { CinematicScene } from '../Cinematic/CinematicScene';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { personal, statsRecap } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Academic Collaboration Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Dear Austin Durai T,\n\nName: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}\n\nBest regards,\n${senderName}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <CinematicScene
      id="contact"
      eyebrow="08 // COLLABORATION & INQUIRY"
      title="AUSTIN DURAI T —"
      titleHighlight="OPEN FOR COLLABORATION"
      subtitle="Seeking postdoctoral fellowships, institutional guest lectures, research problem collaborations, and doctoral inquiries."
      theme="light"
      poster="/images/posters/scene-08-closing.jpg"
      video="/videos/scene-08-closing.mp4"
      icon={<Mail size={16} />}
    >
      {/* 6 Stats / Highlights Recap from Requirement Document */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
          gap: '0.85rem',
          marginBottom: '3rem'
        }}
      >
        {statsRecap.map((stat: StatRecapItem, idx: number) => (
          <div 
            key={idx}
            className="card-light"
            style={{
              padding: '1.1rem 1.2rem',
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderLeft: idx % 2 === 0 ? '4px solid #D97706' : '4px solid #059669'
            }}
          >
            <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', color: '#475569', letterSpacing: '0.06em', fontWeight: 600 }}>
              {stat.label}
            </div>
            <div style={{ fontSize: '1.35rem', fontFamily: 'var(--font-tech)', fontWeight: 700, color: '#000000', margin: '4px 0' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#1E293B' }}>
              {stat.subtext}
            </div>
          </div>
        ))}
      </div>

      {/* 2-Column Contact Info & Message Composer */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '2rem',
          alignItems: 'start'
        }}
      >
        {/* Left Column: Direct Contact Credentials */}
        <div data-animate="left">
          <div className="card-light" style={{ padding: '2.4rem', background: '#FFFFFF', border: '1px solid #E2E8F0', marginBottom: '1.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: '#000000', marginBottom: '1.5rem', fontWeight: 700 }}>
              Academic Contact Dossier
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: '#FFFBEB',
                    border: '1px solid #FDE68A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Mail size={20} color="#D97706" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', color: '#475569', fontWeight: 600 }}>
                    Direct Email
                  </div>
                  <div style={{ fontSize: '1rem', color: '#000000', fontFamily: 'var(--font-mono)', margin: '2px 0 6px', fontWeight: 700 }}>
                    {personal.email}
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="badge-pill-light"
                    style={{ cursor: 'pointer', fontSize: '0.72rem', padding: '3px 10px' }}
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={12} color="#059669" />
                        <span style={{ color: '#059669' }}>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: '#F0FDF4',
                    border: '1px solid #BBF7D0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Phone size={20} color="#059669" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', color: '#475569', fontWeight: 600 }}>
                    Phone / WhatsApp
                  </div>
                  <a 
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    style={{ fontSize: '1rem', color: '#000000', fontFamily: 'var(--font-mono)', fontWeight: 700 }}
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: '#FFFBEB',
                    border: '1px solid #FDE68A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={20} color="#D97706" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', color: '#475569', fontWeight: 600 }}>
                    Department & Residence
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#1E293B', lineHeight: 1.5 }}>
                    Department of Mathematics, NIT Trichy — 620015<br />
                    Native: Tenkasi, Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Academic Inquiry Form */}
        <div data-animate="right" className="card-light" style={{ padding: '2.4rem', background: '#FFFFFF', border: '1px solid #E2E8F0' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: '#000000', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
            <MessageSquare size={18} color="#D97706" />
            <span>Send Message</span>
          </h3>

          <form onSubmit={handleSendMessage} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-tech)', color: '#475569', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 700 }}>
                Your Name & Institution *
              </label>
              <input
                type="text"
                required
                placeholder="e.g., Prof. Alex Miller, Stanford University"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  background: '#F8FAFC',
                  border: '1px solid #CBD5E1',
                  borderRadius: '8px',
                  color: '#000000',
                  fontFamily: 'inherit',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-tech)', color: '#475569', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 700 }}>
                Your Institutional Email *
              </label>
              <input
                type="email"
                required
                placeholder="colleague@institution.edu"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  background: '#F8FAFC',
                  border: '1px solid #CBD5E1',
                  borderRadius: '8px',
                  color: '#000000',
                  fontFamily: 'inherit',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-tech)', color: '#475569', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 700 }}>
                Collaboration Subject *
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  background: '#F8FAFC',
                  border: '1px solid #CBD5E1',
                  borderRadius: '8px',
                  color: '#000000',
                  fontFamily: 'inherit',
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}
              >
                <option value="Academic Collaboration Inquiry">Joint Queueing & Stochastic Modeling Research</option>
                <option value="Postdoctoral Opportunity Discussion">Postdoctoral / Visiting Fellowship Invitation</option>
                <option value="Invited Seminar / Keynote Lecture">Invited Academic Keynote / Seminar Talk</option>
                <option value="Department Leadership / Mentorship Query">Student Research Guidance & Mentorship</option>
                <option value="General Academic Inquiry">General Academic Correspondence</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-tech)', color: '#475569', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 700 }}>
                Message Scope *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Outline your research question, fellowship opportunity, or collaboration details..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  background: '#F8FAFC',
                  border: '1px solid #CBD5E1',
                  borderRadius: '8px',
                  color: '#000000',
                  fontFamily: 'inherit',
                  fontSize: '0.95rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px',
                fontSize: '0.95rem',
                fontWeight: 700,
                marginTop: '0.5rem',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #D97706, #B45309)',
                color: '#ffffff',
                boxShadow: '0 8px 20px rgba(217, 119, 6, 0.3)',
                cursor: 'pointer',
                fontFamily: 'var(--font-tech)'
              }}
            >
              <Send size={16} />
              <span>Send Message</span>
            </button>

            {submitted && (
              <div style={{ textAlign: 'center', color: '#059669', fontSize: '0.88rem', marginTop: '6px', fontWeight: 600 }}>
                ✓ Message prepared in your mail client!
              </div>
            )}
          </form>
        </div>
      </div>
    </CinematicScene>
  );
};
