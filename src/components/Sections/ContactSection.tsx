import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { personal } = portfolioData;
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
    <section id="contact" style={{ padding: '6rem 0 7rem', position: 'relative' }}>
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-eyebrow">
            <Mail size={16} />
            <span>Academic Inquiries</span>
          </div>
          <h2 className="section-title">
            Connect for <span>Research & Collaboration</span>
          </h2>
          <p className="section-desc">
            Open to doctoral collaborations, postdoctoral opportunities, institutional seminar talks, and stochastic queueing inquiries.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left: Contact Info & Institutional Details */}
          <div>
            <div className="glass-panel" style={{ padding: '2.2rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#ffffff', marginBottom: '1.5rem' }}>
                Academic Headquarters
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Email Item */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={20} color="var(--accent-cyan)" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Direct Institutional Email
                    </div>
                    <div style={{ fontSize: '1rem', color: '#ffffff', fontFamily: 'var(--font-mono)', margin: '2px 0 6px' }}>
                      {personal.email}
                    </div>
                    <button
                      onClick={copyEmailToClipboard}
                      className="badge-tag"
                      style={{ cursor: 'pointer', fontSize: '0.72rem', padding: '3px 10px' }}
                    >
                      {copiedEmail ? (
                        <>
                          <Check size={12} color="var(--accent-emerald)" />
                          <span style={{ color: 'var(--accent-emerald)' }}>Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone Item */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(52, 211, 153, 0.1)',
                      border: '1px solid rgba(52, 211, 153, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={20} color="var(--accent-emerald)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Telephone / WhatsApp
                    </div>
                    <a 
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      style={{ fontSize: '1rem', color: '#ffffff', fontFamily: 'var(--font-mono)' }}
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(251, 191, 36, 0.1)',
                      border: '1px solid rgba(251, 191, 36, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={20} color="var(--accent-gold)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      Research Facility
                    </div>
                    <div style={{ fontSize: '0.92rem', color: '#ffffff', lineHeight: 1.5 }}>
                      Department of Mathematics<br />
                      National Institute of Technology, Tiruchirappalli (NIT Trichy)<br />
                      Tamil Nadu, India — 620015
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Academic Inquiry Form */}
          <div className="glass-panel" style={{ padding: '2.2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquare size={18} color="var(--accent-cyan)" />
              <span>Compose Academic Inquiry</span>
            </h3>

            <form onSubmit={handleSendMessage} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Your Full Name & Affiliation *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Dr. Jane Smith, Cambridge University"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Your Academic Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@institution.edu"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Collaboration Theme *
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: '#0a0f1d',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    cursor: 'pointer'
                  }}
                >
                  <option value="Academic Collaboration Inquiry">Joint Research / Queueing Theory Collaboration</option>
                  <option value="Postdoctoral Opportunity Discussion">Postdoctoral / Visiting Scholar Opportunity</option>
                  <option value="Invited Keynote / Seminar Speaker">Invited Seminar / Keynote Lecture</option>
                  <option value="Graduate Mentorship / Student Query">Student Academic Guidance / Mentorship</option>
                  <option value="General Academic Inquiry">General Academic Correspondence</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Inquiry Details / Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline your research question, seminar details, or collaboration scope..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                className="contactBtn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  marginTop: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                <Send size={16} />
                <span>Launch Email Client</span>
              </button>

              {submitted && (
                <div style={{ textAlign: 'center', color: 'var(--accent-emerald)', fontSize: '0.88rem', marginTop: '6px' }}>
                  ✓ Email client launched with pre-filled message!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
