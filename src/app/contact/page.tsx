'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ─────────────────────────────────────────
    DATA
───────────────────────────────────────── */
const contactInfo = [
  {
    num: '01',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 2.18L6.4 2a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.32 9.91a16 16 0 0 0 6.07 6.07l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 21.4 17z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+1(608)7535466',
    sub: 'Mon–Fri, 9am – 6pm EST',
    href: 'tel:+1(608)7535466',
  },
  {
    num: '02',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-10 7L2 7"/>
      </svg>
    ),
    label: 'Email',
    value: 'info@bluemondsolutions.com',
    sub: 'We reply within 2 business hours',
    href: 'mailto:info@bluemondsolutions.com',
  },
  {
    num: '03',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Headquarters',
    value: '530 Seventh Avenue, Suite 1205',
    sub: 'New York, NY 10018, USA',
    href: '#',
  },
  {
    num: '04',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: 'Business Hours',
    value: 'Mon – Fri: 9am – 6pm EST',
    sub: 'Emergency line: 24/7',
    href: '#',
  },
];

const departments = [
  { label: 'General Enquiry',      value: 'general' },
  { label: 'Sales & Partnerships', value: 'sales' },
  { label: 'Technical Support',    value: 'support' },
  { label: 'Media & Press',        value: 'media' },
  { label: 'Careers',              value: 'careers' },
];

/* ─────────────────────────────────────────
    REVEAL HOOK
───────────────────────────────────────── */
function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, vis };
}

/* ─────────────────────────────────────────
    PAGE
───────────────────────────────────────── */
export default function ContactPage() {
  const { ref: formRef, vis: formVis } = useReveal();
  const { ref: infoRef, vis: infoVis } = useReveal();

  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', department: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message before submitting.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (!response.ok) {
        setError(result?.error || 'There was a problem sending your message. Please try again.');
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Unable to send your message right now. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .ct-page { font-family: var(--bm-font-body); color: var(--bm-gray-5); }

        /* ── HERO ── */
        .ct-hero {
          background: var(--bm-royal-dark);
          position: relative; overflow: hidden;
          padding: 7rem 2.5rem 10rem;
        }
        .ct-hero::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 48px 48px; pointer-events: none;
        }
        .ct-hero-inner { max-width: 1440px; margin: 0 auto; position: relative; z-index: 1; }
        .ct-hero-label {
          font-family: var(--bm-font-head);
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          display: flex; align-items: center; gap: 0.6rem;
          margin-bottom: 1.5rem;
          animation: slideRight 0.7s 0.1s var(--bm-ease) both;
        }
        .ct-hero-label::before {
          content: ''; width: 2rem; height: 2px;
          background: var(--bm-royal); flex-shrink: 0;
        }
        .ct-hero-h1 {
          font-family: var(--bm-font-head);
          font-weight: 900; font-size: clamp(3rem, 6vw, 5rem);
          text-transform: uppercase; line-height: 1.0;
          color: var(--bm-white);
          animation: fadeUp 0.8s 0.25s var(--bm-ease) both;
        }
        .ct-hero-h1 span { color: var(--bm-royal); }
        .ct-hero-para {
          font-size: 1.05rem; line-height: 1.75;
          color: rgba(255,255,255,0.5); max-width: 500px;
          margin-top: 1.5rem;
          animation: fadeUp 0.8s 0.4s var(--bm-ease) both;
        }

        /* ── MAIN GRID ── */
        .ct-main {
          max-width: 1440px; margin: 0 auto;
          padding: 6rem 2.5rem;
          display: grid; grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem; align-items: start;
        }

        /* ── FORM CARD ── */
        .ct-form-card {
          background: var(--bm-white);
          border: 1px solid var(--bm-gray-2);
          border-top: 3px solid var(--bm-royal);
          padding: 3rem 2.5rem;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.6s var(--bm-ease), transform 0.6s var(--bm-ease);
        }
        .ct-form-card.ct-visible { opacity: 1; transform: translateY(0); }

        .ct-form-heading {
          font-family: var(--bm-font-head);
          font-size: 1.6rem; font-weight: 900;
          text-transform: uppercase; color: var(--bm-royal-dark);
          margin-bottom: 0.5rem;
        }
        .ct-form-sub {
          font-size: 0.875rem; color: var(--bm-gray-3);
          margin-bottom: 2rem; line-height: 1.6;
        }

        /* Form rows */
        .ct-form-row {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1rem; margin-bottom: 1rem;
        }
        .ct-form-row--full { grid-template-columns: 1fr; }
        .ct-field { display: flex; flex-direction: column; gap: 0.4rem; }
        .ct-label {
          font-family: var(--bm-font-head);
          font-size: 0.68rem; font-weight: 800;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--bm-gray-4);
        }
        .ct-input,
        .ct-select,
        .ct-textarea {
          width: 100%;
          background: var(--bm-gray-1);
          border: 1.5px solid var(--bm-gray-2);
          padding: 0.75rem 1rem;
          font-family: var(--bm-font-body);
          font-size: 0.9rem; font-weight: 500;
          color: var(--bm-gray-5);
          outline: none;
          transition: border-color 0.22s var(--bm-ease), background 0.22s, box-shadow 0.22s;
          border-radius: 0;
          appearance: none;
        }
        .ct-input:focus,
        .ct-select:focus,
        .ct-textarea:focus {
          border-color: var(--bm-royal);
          background: var(--bm-white);
          box-shadow: 0 0 0 3px rgba(0,47,167,0.08);
        }
        .ct-input::placeholder,
        .ct-textarea::placeholder { color: var(--bm-gray-3); }
        .ct-textarea { resize: vertical; min-height: 130px; }
        .ct-select-wrap { position: relative; }
        .ct-select-wrap::after {
          content: '';
          position: absolute; right: 1rem; top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-top-color: var(--bm-gray-3);
          pointer-events: none;
        }

        /* Submit */
        .ct-submit {
          width: 100%; margin-top: 1.5rem;
          display: flex; align-items: center; justify-content: center;
          gap: 0.6rem;
          background: var(--bm-royal); color: white;
          font-family: var(--bm-font-body);
          font-weight: 700; font-size: 0.875rem;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 1rem;
          border: none; cursor: pointer;
          clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
          transition: background 0.22s var(--bm-ease), transform 0.22s var(--bm-ease), box-shadow 0.22s;
        }
        .ct-submit:hover {
          background: var(--bm-royal-dark);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px var(--bm-royal-glow);
        }
        .ct-submit-arrow {
          display: flex; align-items: center;
          transition: transform 0.22s var(--bm-ease);
        }
        .ct-submit:hover .ct-submit-arrow { transform: translateX(4px); }

        /* Success state */
        .ct-success {
          text-align: center; padding: 3rem 2rem;
        }
        .ct-success-icon {
          width: 64px; height: 64px;
          background: var(--bm-royal);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1.5rem;
          clip-path: polygon(14% 0%, 100% 0%, 86% 100%, 0% 100%);
        }
        .ct-success-title {
          font-family: var(--bm-font-head);
          font-size: 1.5rem; font-weight: 900;
          text-transform: uppercase; color: var(--bm-royal-dark);
          margin-bottom: 0.75rem;
        }
        .ct-success-text { font-size: 0.9rem; color: var(--bm-gray-4); line-height: 1.7; }

        /* ── INFO COLUMN ── */
        .ct-info-col {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.6s 0.15s var(--bm-ease), transform 0.6s 0.15s var(--bm-ease);
        }
        .ct-info-col.ct-visible { opacity: 1; transform: translateY(0); }

        .ct-section-label {
          font-family: var(--bm-font-head);
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--bm-royal);
          display: flex; align-items: center; gap: 0.6rem;
          margin-bottom: 1rem;
        }
        .ct-section-label::before {
          content: ''; width: 2rem; height: 2px;
          background: var(--bm-royal); flex-shrink: 0;
        }
        .ct-section-title {
          font-family: var(--bm-font-head);
          font-weight: 900; font-size: clamp(1.8rem, 3vw, 2.4rem);
          text-transform: uppercase; line-height: 1.05;
          color: var(--bm-royal-dark); margin-bottom: 1rem;
        }
        .ct-section-title span { color: var(--bm-royal); }
        .ct-section-body {
          font-size: 0.9rem; line-height: 1.8;
          color: var(--bm-gray-4); margin-bottom: 2.5rem;
        }

        /* Info cards */
        .ct-info-cards { display: flex; flex-direction: column; gap: 2px; margin-bottom: 2.5rem; }
        .ct-info-card {
          display: flex; align-items: flex-start; gap: 1rem;
          padding: 1.25rem 1.25rem;
          background: var(--bm-gray-1);
          border: 1px solid var(--bm-gray-2);
          border-left: 3px solid transparent;
          text-decoration: none; color: inherit;
          transition: border-color 0.22s, background 0.22s, transform 0.22s var(--bm-ease);
        }
        .ct-info-card:hover {
          border-left-color: var(--bm-royal);
          background: var(--bm-white);
          transform: translateX(4px);
        }
        .ct-info-icon {
          width: 44px; height: 44px;
          background: var(--bm-white);
          border: 1px solid var(--bm-gray-2);
          display: flex; align-items: center; justify-content: center;
          color: var(--bm-royal); flex-shrink: 0;
          transition: background 0.22s, border-color 0.22s;
        }
        .ct-info-card:hover .ct-info-icon {
          background: var(--bm-royal); color: white;
          border-color: var(--bm-royal);
          transform: scale(1.1);
        }
        .ct-info-num {
          font-family: var(--bm-font-head);
          font-size: 0.6rem; font-weight: 800;
          color: var(--bm-gray-3); margin-bottom: 2px;
        }
        .ct-info-label {
          font-family: var(--bm-font-head);
          font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--bm-royal); margin-bottom: 3px;
        }
        .ct-info-value {
          font-weight: 700; font-size: 0.9rem;
          color: var(--bm-gray-5);
        }
        .ct-info-sub {
          font-size: 0.78rem; color: var(--bm-gray-3);
          margin-top: 1px;
        }

        /* Consultation CTA box */
        .ct-consult-box {
          background: var(--bm-royal);
          padding: 2.5rem 2rem;
          position: relative; overflow: hidden;
        }
        .ct-consult-box::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: rgba(255,255,255,0.2);
        }
        .ct-consult-eyebrow {
          font-family: var(--bm-font-head);
          font-size: 0.68rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          display: flex; align-items: center; gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .ct-consult-eyebrow::before {
          content: ''; width: 1.5rem; height: 2px;
          background: rgba(255,255,255,0.3); flex-shrink: 0;
        }
        .ct-consult-title {
          font-family: var(--bm-font-head);
          font-size: 1.5rem; font-weight: 900;
          text-transform: uppercase; color: white;
          margin-bottom: 0.75rem; line-height: 1.1;
        }
        .ct-consult-text {
          font-size: 0.875rem; line-height: 1.7;
          color: rgba(255,255,255,0.65); margin-bottom: 1.5rem;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .ct-main { grid-template-columns: 1fr; gap: 3rem; padding: 4rem 2rem; }
        }
        @media (max-width: 640px) {
          .ct-hero { padding: 5rem 1.5rem 4rem; }
          .ct-main { padding: 3rem 1.5rem; }
          .ct-form-card { padding: 2rem 1.5rem; }
          .ct-form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ct-page">

        {/* ══ HERO ══ */}
        <section className="ct-hero">
          <div className="ct-hero-inner">
            <div className="ct-hero-label">Contact Us</div>
            <h1 className="ct-hero-h1">
              Let's <span>Connect.</span>
            </h1>
            <p className="ct-hero-para">
              Whether you need a security consultation, want to explore our services, or have a question about an active deployment — our team is ready.
            </p>
          </div>
        </section>

        {/* ══ MAIN CONTENT ══ */}
        <div style={{ background: 'var(--bm-white)' }}>
          <div className="ct-main">

            {/* FORM COLUMN */}
            <div ref={formRef} className={`ct-form-card${formVis ? ' ct-visible' : ''}`}>
              {!submitted ? (
                <>
                  <div className="ct-form-heading">Send a Message</div>
                  <div className="ct-form-sub">
                    Fill in the form below and a member of our team will respond within 2 business hours.
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    {error ? (
                      <div style={{ marginBottom: '1rem', color: 'var(--blue-royal)', fontWeight: 700 }} role="alert">
                        {error}
                      </div>
                    ) : null}
                    <div className="ct-form-row">
                      <div className="ct-field">
                        <label className="ct-label" htmlFor="ct-name">Full Name *</label>
                        <input
                          id="ct-name" name="name" type="text"
                          className="ct-input" placeholder="John Smith"
                          value={form.name} onChange={handleChange} required
                        />
                      </div>
                      <div className="ct-field">
                        <label className="ct-label" htmlFor="ct-company">Company</label>
                        <input
                          id="ct-company" name="company" type="text"
                          className="ct-input" placeholder="Acme Corp"
                          value={form.company} onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="ct-form-row">
                      <div className="ct-field">
                        <label className="ct-label" htmlFor="ct-email">Email Address *</label>
                        <input
                          id="ct-email" name="email" type="email"
                          className="ct-input" placeholder="john@example.com"
                          value={form.email} onChange={handleChange} required
                        />
                      </div>
                      <div className="ct-field">
                        <label className="ct-label" htmlFor="ct-phone">Phone Number</label>
                        <input
                          id="ct-phone" name="phone" type="tel"
                          className="ct-input" placeholder="+1 (555) 000-0000"
                          value={form.phone} onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="ct-form-row ct-form-row--full" style={{ marginBottom: '1rem' }}>
                      <div className="ct-field">
                        <label className="ct-label" htmlFor="ct-dept">Department</label>
                        <div className="ct-select-wrap">
                          <select
                            id="ct-dept" name="department"
                            className="ct-select"
                            value={form.department} onChange={handleChange}
                          >
                            <option value="">Select a department…</option>
                            {departments.map(d => (
                              <option key={d.value} value={d.value}>{d.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="ct-form-row ct-form-row--full">
                      <div className="ct-field">
                        <label className="ct-label" htmlFor="ct-message">Message *</label>
                        <textarea
                          id="ct-message" name="message"
                          className="ct-textarea"
                          placeholder="Tell us about your security requirements or question…"
                          value={form.message} onChange={handleChange} required
                        />
                      </div>
                    </div>
                    <button type="submit" className="ct-submit" disabled={loading}>
                      <span>{loading ? 'Sending…' : 'Send Message'}</span>
                      <span className="ct-submit-arrow"><ArrowIcon /></span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="ct-success">
                  <div className="ct-success-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="ct-success-title">Message Received</div>
                  <p className="ct-success-text">
                    Thank you for reaching out. A member of our team will be in touch within 2 business hours.
                  </p>
                </div>
              )}
            </div>

            {/* INFO COLUMN */}
            <div ref={infoRef} className={`ct-info-col${infoVis ? ' ct-visible' : ''}`}>
              <div className="ct-section-label">Company Info</div>
              <h2 className="ct-section-title">Get in <span>Touch</span></h2>
              <p className="ct-section-body">
                Our operations team is available Monday through Friday. For active security incidents or urgent escalations, our 24/7 emergency line is always open.
              </p>

              <div className="ct-info-cards">
                {contactInfo.map((c, i) => (
                  <a key={i} href={c.href} className="ct-info-card">
                    <div className="ct-info-icon">{c.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div className="ct-info-num">{c.num}</div>
                      <div className="ct-info-label">{c.label}</div>
                      <div className="ct-info-value">{c.value}</div>
                      <div className="ct-info-sub">{c.sub}</div>
                    </div>
                    <div style={{ color: 'var(--bm-gray-3)', display: 'flex', alignItems: 'center' }}>
                      <ArrowIcon />
                    </div>
                  </a>
                ))}
              </div>

              {/* Consultation CTA */}
              <div className="ct-consult-box">
                <div className="ct-consult-eyebrow">Free Consultation</div>
                <div className="ct-consult-title">
                  Need a full security assessment?
                </div>
                <p className="ct-consult-text">
                  Request a no-obligation quote and our specialists will map out a complete monitoring solution for your site.
                </p>
                <Link href="/request-quote" className="bm-cta bm-cta--full">
                  <span>Request a Quote</span>
                  <span className="bm-cta-arrow"><ArrowIcon /></span>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

/* ─── MISSING COMPONENT LINK INJECTED HERE ─── */
function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}