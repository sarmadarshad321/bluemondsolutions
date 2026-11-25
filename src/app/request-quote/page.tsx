'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const industries = [
  'Residential', 'Commercial', 'Construction',
  'Healthcare', 'Education', 'Retail',
  'Hospitality', 'Industrial', 'Fuel Station', 'Other',
];

const cameraRanges = [
  '1 – 5 cameras', '6 – 15 cameras',
  '16 – 30 cameras', '31 – 60 cameras', '60+ cameras',
];

const monitoringTypes = [
  { value: 'cctv',         label: 'CCTV Monitoring' },
  { value: 'incident',     label: 'Incident Reporting' },
  { value: 'construction', label: 'Construction Monitoring' },
  { value: 'retail',       label: 'Retail Security' },
  { value: 'corporate',    label: 'Corporate Surveillance' },
  { value: 'residential',  label: 'Residential Monitoring' },
  { value: 'fuel',         label: 'Fuel Station Monitoring' },
  { value: 'hospital',     label: 'Hospital & School' },
  { value: 'custom',       label: 'Customized Solution' },
];

const timeframes = [
  'As soon as possible', 'Within 1 month',
  '1 – 3 months', '3 – 6 months', 'Just exploring',
];

const steps = [
  { num: '01', label: 'Your Details' },
  { num: '02', label: 'Requirements' },
  { num: '03', label: 'Confirmation' },
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
export default function RequestQuotePage() {
  const { ref, vis } = useReveal();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    // Step 1
    name: '', company: '', email: '', phone: '', jobTitle: '',
    // Step 2
    industry: '', cameras: '', services: [] as string[],
    location: '', sites: '1', timeframe: '', budget: '', notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceToggle = (val: string) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(val)
        ? prev.services.filter(s => s !== val)
        : [...prev.services, val],
    }));
  };

  const validateStepOne = () => {
    if (!form.name.trim() || !form.company.trim() || !form.email.trim() || !form.phone.trim()) {
      setError('Please complete all required contact fields before continuing.');
      return false;
    }
    return true;
  };

  const validateStepTwo = () => {
    if (!form.industry.trim() || !form.cameras.trim() || !form.location.trim()) {
      setError('Please complete the required site details before submitting.');
      return false;
    }
    return true;
  };

  const handleQuoteSubmit = async () => {
    setError(null);
    if (!validateStepTwo()) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await response.json();
      if (!response.ok) {
        setError(json?.error || 'There was a problem submitting your request.');
        return;
      }
      setStep(3);
    } catch (err) {
      console.error(err);
      setError('Unable to submit your quote request at this time. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const next = () => {
    setError(null);
    if (step === 1) {
      if (validateStepOne()) {
        setStep(2);
      }
      return;
    }
    if (step === 2) {
      void handleQuoteSubmit();
    }
  };

  const back = () => {
    if (loading) return;
    setError(null);
    setStep(s => Math.max(s - 1, 1));
  };

  return (
    <>
      <style>{`
        .rq-page { font-family: var(--bm-font-body); color: var(--bm-gray-5); }

        /* ── HERO ── */
        .rq-hero {
          background: var(--bm-royal-dark);
          position: relative; overflow: hidden;
          padding: 6rem 2.5rem 5rem;
        }
        .rq-hero::before {
          content: ''; position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px; pointer-events: none;
        }
        .rq-hero-inner {
          max-width: 1440px; margin: 0 auto;
          position: relative; z-index: 1;
          display: flex; align-items: flex-end;
          justify-content: space-between; gap: 3rem; flex-wrap: wrap;
        }
        .rq-hero-label {
          font-family: var(--bm-font-head);
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          display: flex; align-items: center; gap: 0.6rem;
          margin-bottom: 1.25rem;
          animation: slideRight 0.7s 0.1s var(--bm-ease) both;
        }
        .rq-hero-label::before {
          content: ''; width: 2rem; height: 2px;
          background: var(--bm-royal); flex-shrink: 0;
        }
        .rq-hero-h1 {
          font-family: var(--bm-font-head);
          font-weight: 900; font-size: clamp(2.8rem, 5.5vw, 4.5rem);
          text-transform: uppercase; line-height: 1.0; color: var(--bm-white);
          animation: fadeUp 0.8s 0.25s var(--bm-ease) both;
        }
        .rq-hero-h1 span { color: var(--bm-royal); }
        .rq-hero-para {
          font-size: 0.95rem; line-height: 1.75;
          color: rgba(255,255,255,0.5); max-width: 420px;
          margin-top: 1.25rem;
          animation: fadeUp 0.8s 0.4s var(--bm-ease) both;
        }

        /* Step indicators in hero */
        .rq-steps {
          display: flex; gap: 0;
          animation: fadeUp 0.8s 0.5s var(--bm-ease) both;
        }
        .rq-step {
          display: flex; align-items: center; gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-right: none; position: relative;
          transition: background 0.25s;
        }
        .rq-step:last-child { border-right: 1px solid rgba(255,255,255,0.08); }
        .rq-step--active {
          background: var(--bm-royal);
          border-color: var(--bm-royal);
        }
        .rq-step--done {
          background: rgba(0,47,167,0.2);
          border-color: rgba(0,47,167,0.3);
        }
        .rq-step-num {
          font-family: var(--bm-font-head);
          font-size: 0.65rem; font-weight: 800;
          color: rgba(255,255,255,0.35);
        }
        .rq-step--active .rq-step-num,
        .rq-step--done .rq-step-num { color: rgba(255,255,255,0.7); }
        .rq-step-label {
          font-family: var(--bm-font-head);
          font-size: 0.75rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.08em;
          color: rgba(255,255,255,0.35);
          white-space: nowrap;
        }
        .rq-step--active .rq-step-label { color: white; }
        .rq-step--done .rq-step-label { color: rgba(255,255,255,0.65); }

        /* ── BODY ── */
        .rq-body {
          max-width: 1440px; margin: 0 auto;
          padding: 5rem 2.5rem;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 4rem; align-items: start;
        }

        /* ── FORM CARD ── */
        .rq-form-card {
          background: var(--bm-white);
          border: 1px solid var(--bm-gray-2);
          border-top: 3px solid var(--bm-royal);
          padding: 3rem 2.5rem;
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.6s var(--bm-ease), transform 0.6s var(--bm-ease);
        }
        .rq-form-card.rq-visible { opacity: 1; transform: translateY(0); }

        .rq-step-heading {
          font-family: var(--bm-font-head);
          font-size: 1.5rem; font-weight: 900;
          text-transform: uppercase; color: var(--bm-royal-dark);
          margin-bottom: 0.4rem;
        }
        .rq-step-sub {
          font-size: 0.875rem; color: var(--bm-gray-3);
          margin-bottom: 2.25rem; line-height: 1.6;
        }

        /* Field system */
        .rq-row {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1rem; margin-bottom: 1rem;
        }
        .rq-row--full { grid-template-columns: 1fr; }
        .rq-row--3 { grid-template-columns: 1fr 1fr 1fr; }
        .rq-field { display: flex; flex-direction: column; gap: 0.4rem; }
        .rq-label {
          font-family: var(--bm-font-head);
          font-size: 0.68rem; font-weight: 800;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--bm-gray-4);
        }
        .rq-input, .rq-select, .rq-textarea {
          width: 100%;
          background: var(--bm-gray-1);
          border: 1.5px solid var(--bm-gray-2);
          padding: 0.75rem 1rem;
          font-family: var(--bm-font-body);
          font-size: 0.9rem; font-weight: 500;
          color: var(--bm-gray-5); outline: none;
          transition: border-color 0.22s var(--bm-ease), background 0.22s, box-shadow 0.22s;
          border-radius: 0; appearance: none;
        }
        .rq-input:focus, .rq-select:focus, .rq-textarea:focus {
          border-color: var(--bm-royal);
          background: var(--bm-white);
          box-shadow: 0 0 0 3px rgba(0,47,167,0.08);
        }
        .rq-input::placeholder, .rq-textarea::placeholder { color: var(--bm-gray-3); }
        .rq-textarea { resize: vertical; min-height: 110px; }
        .rq-select-wrap { position: relative; }
        .rq-select-wrap::after {
          content: '';
          position: absolute; right: 1rem; top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-top-color: var(--bm-gray-3);
          pointer-events: none;
        }

        /* Service checkboxes */
        .rq-services-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem; margin-bottom: 1rem;
        }
        .rq-service-option {
          display: flex; align-items: center; gap: 0.5rem;
          padding: 0.65rem 0.75rem;
          background: var(--bm-gray-1);
          border: 1.5px solid var(--bm-gray-2);
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          user-select: none;
        }
        .rq-service-option--checked {
          border-color: var(--bm-royal);
          background: var(--bm-royal-faint);
        }
        .rq-service-option input { display: none; }
        .rq-service-check {
          width: 16px; height: 16px;
          border: 2px solid var(--bm-gray-2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: border-color 0.2s, background 0.2s;
        }
        .rq-service-option--checked .rq-service-check {
          border-color: var(--bm-royal); background: var(--bm-royal);
        }
        .rq-service-text {
          font-size: 0.78rem; font-weight: 600;
          color: var(--bm-gray-4); line-height: 1.3;
        }
        .rq-service-option--checked .rq-service-text { color: var(--bm-royal); }

        /* Nav buttons */
        .rq-nav {
          display: flex; align-items: center;
          justify-content: space-between;
          margin-top: 2rem; gap: 1rem;
        }
        .rq-btn-back {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--bm-gray-1); border: 1.5px solid var(--bm-gray-2);
          color: var(--bm-gray-4); padding: 0.8rem 1.5rem;
          font-family: var(--bm-font-body); font-weight: 700;
          font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.06em;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .rq-btn-back:hover { border-color: var(--bm-royal); color: var(--bm-royal); }
        .rq-btn-next {
          display: inline-flex; align-items: center; gap: 0.6rem;
          background: var(--bm-royal); color: white;
          padding: 0.85rem 2rem;
          font-family: var(--bm-font-body); font-weight: 700;
          font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.06em;
          border: none; cursor: pointer;
          clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
          transition: background 0.22s var(--bm-ease), transform 0.22s, box-shadow 0.22s;
        }
        .rq-btn-next:hover {
          background: var(--bm-royal-dark);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px var(--bm-royal-glow);
        }
        .rq-btn-arrow {
          display: flex; align-items: center;
          transition: transform 0.2s var(--bm-ease);
        }
        .rq-btn-next:hover .rq-btn-arrow { transform: translateX(4px); }

        /* Success */
        .rq-success {
          text-align: center; padding: 3rem 2rem;
        }
        .rq-success-mark {
          width: 72px; height: 72px;
          background: var(--bm-royal);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1.75rem;
          clip-path: polygon(14% 0%, 100% 0%, 86% 100%, 0% 100%);
        }
        .rq-success-title {
          font-family: var(--bm-font-head);
          font-size: 1.75rem; font-weight: 900;
          text-transform: uppercase; color: var(--bm-royal-dark);
          margin-bottom: 0.75rem;
        }
        .rq-success-sub {
          font-size: 0.9rem; color: var(--bm-gray-4);
          line-height: 1.75; max-width: 400px; margin: 0 auto 2rem;
        }

        /* ── SIDEBAR ── */
        .rq-sidebar {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.6s 0.15s var(--bm-ease), transform 0.6s 0.15s var(--bm-ease);
        }
        .rq-sidebar.rq-visible { opacity: 1; transform: translateY(0); }

        .rq-sidebar-card {
          background: var(--bm-royal);
          padding: 2.25rem 2rem;
          position: relative; overflow: hidden;
          margin-bottom: 2px;
        }
        .rq-sidebar-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: rgba(255,255,255,0.2);
        }
        .rq-sidebar-eyebrow {
          font-family: var(--bm-font-head);
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          display: flex; align-items: center; gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .rq-sidebar-eyebrow::before {
          content: ''; width: 1.25rem; height: 2px;
          background: rgba(255,255,255,0.3); flex-shrink: 0;
        }
        .rq-sidebar-title {
          font-family: var(--bm-font-head);
          font-size: 1.25rem; font-weight: 900;
          text-transform: uppercase; color: white;
          margin-bottom: 0.5rem; line-height: 1.1;
        }
        .rq-sidebar-text {
          font-size: 0.85rem; line-height: 1.7;
          color: rgba(255,255,255,0.6); margin-bottom: 1.5rem;
        }
        .rq-sidebar-stat {
          display: flex; align-items: center; gap: 0.75rem;
          padding: 0.75rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .rq-sidebar-stat-num {
          font-family: var(--bm-font-head);
          font-size: 1.6rem; font-weight: 900; color: white; line-height: 1;
        }
        .rq-sidebar-stat-label {
          font-size: 0.75rem; font-weight: 600;
          color: rgba(255,255,255,0.5); text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .rq-sidebar-info {
          background: var(--bm-gray-1);
          border: 1px solid var(--bm-gray-2);
          padding: 1.75rem 1.5rem;
        }
        .rq-sidebar-info-heading {
          font-family: var(--bm-font-head);
          font-size: 0.72rem; font-weight: 800;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--bm-royal); margin-bottom: 1.25rem;
          display: flex; align-items: center; gap: 0.5rem;
        }
        .rq-sidebar-info-heading::before {
          content: ''; width: 1.25rem; height: 2px;
          background: var(--bm-royal); flex-shrink: 0;
        }
        .rq-sidebar-info-item {
          display: flex; align-items: flex-start; gap: 0.65rem;
          margin-bottom: 0.85rem;
        }
        .rq-sidebar-info-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--bm-royal); flex-shrink: 0;
          margin-top: 6px;
        }
        .rq-sidebar-info-text {
          font-size: 0.83rem; line-height: 1.65;
          color: var(--bm-gray-4); font-weight: 500;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .rq-body { grid-template-columns: 1fr; gap: 3rem; padding: 4rem 2rem; }
          .rq-steps { flex-wrap: wrap; }
        }
        @media (max-width: 640px) {
          .rq-hero { padding: 5rem 1.5rem 3.5rem; }
          .rq-body { padding: 3rem 1.5rem; }
          .rq-form-card { padding: 2rem 1.5rem; }
          .rq-row, .rq-row--3 { grid-template-columns: 1fr; }
          .rq-services-grid { grid-template-columns: 1fr 1fr; }
          .rq-steps { gap: 2px; }
          .rq-step { padding: 0.75rem 1rem; }
          .rq-step-label { display: none; }
        }
      `}</style>

      <div className="rq-page">

        {/* ══ HERO ══ */}
        <section className="rq-hero">
          <div className="rq-hero-inner">
            <div>
              <div className="rq-hero-label">Request a Quote</div>
              <h1 className="rq-hero-h1">
                Build Your<br /><span>Security Plan.</span>
              </h1>
              <p className="rq-hero-para">
                Tell us about your site, requirements, and timeline. We'll configure a tailored monitoring solution and respond within one business day.
              </p>
            </div>
            <div className="rq-steps">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`rq-step${step === i + 1 ? ' rq-step--active' : step > i + 1 ? ' rq-step--done' : ''}`}
                >
                  <div className="rq-step-num">{s.num}</div>
                  <div className="rq-step-label">{s.label}</div>
                  {step > i + 1 && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ BODY ══ */}
        <div style={{ background: 'var(--bm-white)' }}>
          <div className="rq-body">

            {/* FORM */}
            <div ref={ref} className={`rq-form-card${vis ? ' rq-visible' : ''}`}>
              {error ? (
                <div style={{ marginBottom: '1rem', color: 'var(--blue-royal)', fontWeight: 700 }} role="alert">
                  {error}
                </div>
              ) : null}

              {/* ── STEP 1: Your Details ── */}
              {step === 1 && (
                <>
                  <div className="rq-step-heading">Your Details</div>
                  <div className="rq-step-sub">Tell us who you are and how we can reach you.</div>
                  <div className="rq-row">
                    <div className="rq-field">
                      <label className="rq-label" htmlFor="rq-name">Full Name *</label>
                      <input id="rq-name" name="name" type="text" className="rq-input"
                        placeholder="John Smith" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="rq-field">
                      <label className="rq-label" htmlFor="rq-company">Company Name *</label>
                      <input id="rq-company" name="company" type="text" className="rq-input"
                        placeholder="Acme Corp" value={form.company} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="rq-row">
                    <div className="rq-field">
                      <label className="rq-label" htmlFor="rq-email">Email Address *</label>
                      <input id="rq-email" name="email" type="email" className="rq-input"
                        placeholder="john@example.com" value={form.email} onChange={handleChange} />
                    </div>
                    <div className="rq-field">
                      <label className="rq-label" htmlFor="rq-phone">Phone Number *</label>
                      <input id="rq-phone" name="phone" type="tel" className="rq-input"
                        placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="rq-row rq-row--full">
                    <div className="rq-field">
                      <label className="rq-label" htmlFor="rq-jobtitle">Job Title</label>
                      <input id="rq-jobtitle" name="jobTitle" type="text" className="rq-input"
                        placeholder="Security Manager" value={form.jobTitle} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="rq-nav">
                    <span />
                    <button type="button" className="rq-btn-next" onClick={next}>
                      <span>Next: Requirements</span>
                      <span className="rq-btn-arrow"><ArrowIcon /></span>
                    </button>
                  </div>
                </>
              )}

              {/* ── STEP 2: Requirements ── */}
              {step === 2 && (
                <>
                  <div className="rq-step-heading">Your Requirements</div>
                  <div className="rq-step-sub">Tell us about your site, cameras, and monitoring needs.</div>

                  <div className="rq-row">
                    <div className="rq-field">
                      <label className="rq-label" htmlFor="rq-industry">Industry *</label>
                      <div className="rq-select-wrap">
                        <select id="rq-industry" name="industry" className="rq-select"
                          value={form.industry} onChange={handleChange}>
                          <option value="">Select industry…</option>
                          {industries.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="rq-field">
                      <label className="rq-label" htmlFor="rq-cameras">Number of Cameras *</label>
                      <div className="rq-select-wrap">
                        <select id="rq-cameras" name="cameras" className="rq-select"
                          value={form.cameras} onChange={handleChange}>
                          <option value="">Select range…</option>
                          {cameraRanges.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="rq-row rq-row--full" style={{ marginBottom: '0.5rem' }}>
                    <div className="rq-label" style={{ marginBottom: '0.6rem' }}>Services Required</div>
                    <div className="rq-services-grid">
                      {monitoringTypes.map((s) => (
                        <label
                          key={s.value}
                          className={`rq-service-option${form.services.includes(s.value) ? ' rq-service-option--checked' : ''}`}
                          onClick={() => handleServiceToggle(s.value)}
                        >
                          <input type="checkbox" readOnly checked={form.services.includes(s.value)} />
                          <div className="rq-service-check">
                            {form.services.includes(s.value) && (
                              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
                            )}
                          </div>
                          <span className="rq-service-text">{s.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="rq-row">
                    <div className="rq-field">
                      <label className="rq-label" htmlFor="rq-location">Site Location *</label>
                      <input id="rq-location" name="location" type="text" className="rq-input"
                        placeholder="City, Country" value={form.location} onChange={handleChange} />
                    </div>
                    <div className="rq-field">
                      <label className="rq-label" htmlFor="rq-sites">Number of Sites</label>
                      <input id="rq-sites" name="sites" type="number" min="1" className="rq-input"
                        placeholder="1" value={form.sites} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="rq-row">
                    <div className="rq-field">
                      <label className="rq-label" htmlFor="rq-timeframe">Desired Timeframe</label>
                      <div className="rq-select-wrap">
                        <select id="rq-timeframe" name="timeframe" className="rq-select"
                          value={form.timeframe} onChange={handleChange}>
                          <option value="">Select timeframe…</option>
                          {timeframes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="rq-field">
                      <label className="rq-label" htmlFor="rq-budget">Monthly Budget (optional)</label>
                      <input id="rq-budget" name="budget" type="text" className="rq-input"
                        placeholder="e.g. $500 – $1,000 / month" value={form.budget} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="rq-row rq-row--full">
                    <div className="rq-field">
                      <label className="rq-label" htmlFor="rq-notes">Additional Notes</label>
                      <textarea id="rq-notes" name="notes" className="rq-textarea"
                        placeholder="Any special requirements, existing systems, or context we should know about…"
                        value={form.notes} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="rq-nav">
                    <button type="button" className="rq-btn-back" onClick={back}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                      </svg>
                      Back
                    </button>
                    <button type="button" className="rq-btn-next" onClick={next} disabled={loading}>
                      <span>{loading ? 'Submitting…' : 'Submit Quote Request'}</span>
                      <span className="rq-btn-arrow"><ArrowIcon /></span>
                    </button>
                  </div>
                </>
              )}

              {/* ── STEP 3: Confirmation ── */}
              {step === 3 && (
                <div className="rq-success">
                  <div className="rq-success-mark">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div className="rq-success-title">Quote Request Submitted</div>
                  <p className="rq-success-sub">
                    Thank you, <strong>{form.name || 'valued client'}</strong>. Our security specialists will review your requirements and respond with a tailored proposal within one business day.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/" className="bm-cta">
                      <span>Return Home</span>
                      <span className="bm-cta-arrow"><ArrowIcon /></span>
                    </Link>
                    <Link href="/services" className="btn-outline">
                      <span>Explore Services</span> <ArrowIcon />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <div className={`rq-sidebar${vis ? ' rq-visible' : ''}`}>
              <div className="rq-sidebar-card">
                <div className="rq-sidebar-eyebrow">Why BlueMond</div>
                <div className="rq-sidebar-title">Response within 24 hours</div>
                <p className="rq-sidebar-text">
                  Every quote request is reviewed by a specialist — not an automated system. You'll receive a personalised proposal matched to your exact requirements.
                </p>
                {[
                  { num: '500+', label: 'Sites Secured' },
                  { num: '15+',  label: 'Years of Experience' },
                  { num: '99.8%', label: 'Uptime SLA' },
                ].map((s, i) => (
                  <div key={i} className="rq-sidebar-stat">
                    <div className="rq-sidebar-stat-num">{s.num}</div>
                    <div className="rq-sidebar-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="rq-sidebar-info">
                <div className="rq-sidebar-info-heading">What Happens Next</div>
                {[
                  'We review your submission within 4 business hours.',
                  'A security specialist contacts you for a brief discovery call.',
                  'We prepare a tailored monitoring proposal and pricing.',
                  'Deployment planning begins once you approve.',
                ].map((item, i) => (
                  <div key={i} className="rq-sidebar-info-item">
                    <div className="rq-sidebar-info-dot" />
                    <div className="rq-sidebar-info-text">{item}</div>
                  </div>
                ))}
                <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--bm-gray-2)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--bm-gray-3)', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Prefer to call us directly?
                  </div>
                  <a href="tel:18002586663" style={{ fontFamily: 'var(--bm-font-head)', fontWeight: 900, fontSize: '1.1rem', color: 'var(--bm-royal)', textDecoration: 'none' }}>
                    +1(608)7535466
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}