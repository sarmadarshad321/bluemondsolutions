// 'use client';

// /* eslint-disable react/no-unescaped-entities */

// import { useEffect, useRef, useState } from 'react';
// import Link from 'next/link';

// /* ─────────────────────────────────────────
//    DATA
// ───────────────────────────────────────── */
// const stats = [
//   { num: '500+', label: 'Sites Monitored' },
//   { num: '24/7', label: 'Live Coverage' },
//   { num: '15+',  label: 'Years Experience' },
//   { num: '99.8%', label: 'Uptime Guaranteed' },
// ];

// const values = [
//   {
//     num: '01',
//     title: 'Integrity',
//     desc: 'Every decision we make is grounded in transparency and accountability — to our clients, our partners, and ourselves.',
//     icon: (
//       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
//       </svg>
//     ),
//   },
//   {
//     num: '02',
//     title: 'Precision',
//     desc: 'We operate with exacting standards — from camera placement logic to incident response protocols.',
//     icon: (
//       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
//         <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
//       </svg>
//     ),
//   },
//   {
//     num: '03',
//     title: 'Innovation',
//     desc: 'We continuously integrate the latest AI-assisted surveillance technologies to stay ahead of emerging threats.',
//     icon: (
//       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
//       </svg>
//     ),
//   },
//   {
//     num: '04',
//     title: 'Reliability',
//     desc: 'Our clients trust us to be present when it matters most. We never go offline — and neither does your security.',
//     icon: (
//       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
//       </svg>
//     ),
//   },
//   {
//     num: '05',
//     title: 'Responsiveness',
//     desc: 'Rapid incident escalation and clear communication channels ensure zero lag between detection and action.',
//     icon: (
//       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
//       </svg>
//     ),
//   },
//   {
//     num: '06',
//     title: 'Partnership',
//     desc: 'We don\'t just monitor — we build long-term security relationships tailored to your unique operational needs.',
//     icon: (
//       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
//         <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
//       </svg>
//     ),
//   },
// ];

// const whyPoints = [
//   { title: 'Dedicated Monitoring Teams',   desc: 'Trained operators assigned per site — not shared across hundreds of feeds.' },
//   { title: 'AI-Assisted Detection',        desc: 'Smart motion logic filters false alarms so only real threats trigger escalation.' },
//   { title: 'Rapid Incident Protocols',     desc: 'Verified alert → escalation → authority contact within minutes, not hours.' },
//   { title: 'Custom Integration Ready',     desc: 'We integrate with your existing access control, alarms, and management systems.' },
//   { title: 'Transparent Reporting',        desc: 'Detailed incident logs and monthly review reports delivered to your inbox.' },
//   { title: 'Scalable Infrastructure',      desc: 'From a single retail unit to a 50-site construction portfolio — we scale with you.' },
// ];

// const team = [
//   { initials: 'AR', name: 'Ahmed Raza',    role: 'Chief Executive Officer',      exp: '18 yrs' },
//   { initials: 'SK', name: 'Sara Khan',     role: 'Head of Operations',           exp: '12 yrs' },
//   { initials: 'MF', name: 'Marco Ferrini', role: 'Director of Technology',       exp: '15 yrs' },
//   { initials: 'LP', name: 'Lisa Park',     role: 'Client Success Director',      exp: '10 yrs' },
// ];

// /* ─────────────────────────────────────────
//    PAGE
// ───────────────────────────────────────── */
// export default function AboutPage() {
//   return (
//     <>
//       <style>{`
//         /* ── PAGE SHELL ── */
//         .ab-page { font-family: var(--bm-font-body); color: var(--bm-gray-5); }

//         /* ── HERO ── */
//         .ab-hero {
//           background: var(--bm-royal-dark);
//           position: relative;
//           overflow: hidden;
//           padding: 7rem 2.5rem 6rem;
//         }
//         .ab-hero::before {
//           content: '';
//           position: absolute; inset: 0;
//           background-image:
//             linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
//           background-size: 48px 48px;
//           pointer-events: none;
//         }
//         .ab-hero-inner {
//           max-width: 1440px; margin: 0 auto;
//           position: relative; z-index: 1;
//         }
//         .ab-hero-label {
//           font-family: var(--bm-font-head);
//           font-size: 0.72rem; font-weight: 700;
//           letter-spacing: 0.16em; text-transform: uppercase;
//           color: rgba(255,255,255,0.4);
//           display: flex; align-items: center; gap: 0.6rem;
//           margin-bottom: 1.5rem;
//           animation: slideRight 0.7s 0.1s var(--bm-ease) both;
//         }
//         .ab-hero-label::before {
//           content: ''; display: block;
//           width: 2rem; height: 2px;
//           background: var(--bm-royal); flex-shrink: 0;
//         }
//         .ab-hero-h1 {
//           font-family: var(--bm-font-head);
//           font-weight: 900; font-size: clamp(3rem, 6vw, 5.5rem);
//           text-transform: uppercase; letter-spacing: 0.01em;
//           line-height: 1.0; color: var(--bm-white);
//           animation: fadeUp 0.8s 0.25s var(--bm-ease) both;
//         }
//         .ab-hero-h1 span { color: var(--bm-royal); }
//         .ab-hero-para {
//           font-size: 1.05rem; line-height: 1.75;
//           color: rgba(255,255,255,0.55);
//           max-width: 560px; margin: 1.75rem 0 2.5rem;
//           animation: fadeUp 0.8s 0.4s var(--bm-ease) both;
//         }
//         .ab-hero-actions {
//           display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
//           animation: fadeUp 0.8s 0.55s var(--bm-ease) both;
//         }

//         /* ── STATS BAND ── */
//         .ab-stats {
//           background: var(--bm-royal);
//           padding: 0 2.5rem;
//         }
//         .ab-stats-inner {
//           max-width: 1440px; margin: 0 auto;
//           display: grid; grid-template-columns: repeat(4,1fr);
//         }
//         .ab-stat {
//           padding: 2.25rem 2rem;
//           border-right: 1px solid rgba(255,255,255,0.12);
//           transition: background 0.25s;
//         }
//         .ab-stat:last-child { border-right: none; }
//         .ab-stat:hover { background: rgba(255,255,255,0.07); }
//         .ab-stat-num {
//           font-family: var(--bm-font-head);
//           font-size: 2.6rem; font-weight: 900; line-height: 1;
//           color: var(--bm-white);
//         }
//         .ab-stat-label {
//           font-size: 0.8rem; font-weight: 600;
//           color: rgba(255,255,255,0.55);
//           text-transform: uppercase; letter-spacing: 0.08em;
//           margin-top: 4px;
//         }

//         /* ── SECTION SHELL ── */
//         .ab-section {
//           padding: 6rem 2.5rem;
//         }
//         .ab-section--alt { background: var(--bm-gray-1); }
//         .ab-section--dark {
//           background: var(--bm-royal-dark);
//           position: relative; overflow: hidden;
//         }
//         .ab-section--dark::before {
//           content: '';
//           position: absolute; inset: 0;
//           background-image:
//             linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
//           background-size: 48px 48px;
//           pointer-events: none;
//         }
//         .ab-section-inner { max-width: 1440px; margin: 0 auto; }

//         /* ── SECTION LABEL / TITLE (reuse global pattern) ── */
//         .ab-label {
//           font-family: var(--bm-font-head);
//           font-size: 0.72rem; font-weight: 700;
//           letter-spacing: 0.15em; text-transform: uppercase;
//           color: var(--bm-royal);
//           display: flex; align-items: center; gap: 0.6rem;
//           margin-bottom: 1rem;
//         }
//         .ab-label--light { color: rgba(255,255,255,0.45); }
//         .ab-label::before {
//           content: ''; display: block;
//           width: 2rem; height: 2px;
//           background: var(--bm-royal); flex-shrink: 0;
//         }
//         .ab-label--light::before { background: rgba(255,255,255,0.3); }
//         .ab-title {
//           font-family: var(--bm-font-head);
//           font-weight: 900; font-size: clamp(2rem, 4vw, 3rem);
//           text-transform: uppercase; line-height: 1.05;
//           color: var(--bm-royal-dark);
//         }
//         .ab-title--light { color: var(--bm-white); }
//         .ab-title span { color: var(--bm-royal); }
//         .ab-body {
//           font-size: 0.95rem; line-height: 1.8;
//           color: var(--bm-gray-4); max-width: 640px;
//           margin-top: 1.25rem;
//         }
//         .ab-body--light { color: rgba(255,255,255,0.55); }

//         /* ── OVERVIEW — two-col ── */
//         .ab-overview-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 6rem; align-items: center;
//         }
//         .ab-overview-visual {
//           position: relative;
//         }
//         .ab-overview-box {
//           background: var(--bm-royal);
//           padding: 3rem 2.5rem;
//           position: relative; overflow: hidden;
//         }
//         .ab-overview-box::before {
//           content: '';
//           position: absolute; top: 0; left: 0; right: 0;
//           height: 3px; background: rgba(255,255,255,0.2);
//         }
//         .ab-overview-box-num {
//           font-family: var(--bm-font-head);
//           font-size: 5rem; font-weight: 900;
//           color: rgba(255,255,255,0.08);
//           line-height: 1; position: absolute;
//           bottom: 1rem; right: 1.5rem;
//         }
//         .ab-overview-box-stat {
//           font-family: var(--bm-font-head);
//           font-size: 3rem; font-weight: 900;
//           color: var(--bm-white); line-height: 1;
//           margin-bottom: 0.5rem;
//         }
//         .ab-overview-box-label {
//           font-size: 0.82rem; font-weight: 600;
//           color: rgba(255,255,255,0.6);
//           text-transform: uppercase; letter-spacing: 0.1em;
//         }
//         .ab-overview-boxes {
//           display: grid; grid-template-columns: 1fr 1fr;
//           gap: 2px; margin-bottom: 2px;
//         }

//         /* ── MISSION / VISION ── */
//         .ab-mv-grid {
//           display: grid; grid-template-columns: 1fr 1fr;
//           gap: 2px;
//         }
//         .ab-mv-card {
//           background: var(--bm-white);
//           border: 1px solid var(--bm-gray-2);
//           border-top: 3px solid var(--bm-royal);
//           padding: 3rem 2.5rem;
//           transition: box-shadow 0.3s var(--bm-ease), transform 0.3s var(--bm-ease);
//         }
//         .ab-mv-card:hover {
//           box-shadow: 0 20px 50px rgba(0,47,167,0.08);
//           transform: translateY(-4px);
//         }
//         .ab-mv-icon {
//           width: 52px; height: 52px;
//           background: var(--bm-royal-faint);
//           border: 1px solid rgba(0,47,167,0.12);
//           display: flex; align-items: center; justify-content: center;
//           color: var(--bm-royal);
//           margin-bottom: 1.5rem;
//           transition: background 0.25s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
//         }
//         .ab-mv-card:hover .ab-mv-icon {
//           background: var(--bm-royal);
//           color: white;
//           transform: scale(1.1) rotate(3deg);
//         }
//         .ab-mv-title {
//           font-family: var(--bm-font-head);
//           font-size: 1.5rem; font-weight: 900;
//           text-transform: uppercase; color: var(--bm-royal-dark);
//           margin-bottom: 1rem;
//         }
//         .ab-mv-text {
//           font-size: 0.93rem; line-height: 1.8;
//           color: var(--bm-gray-4);
//         }

//         /* ── VALUES GRID ── */
//         .ab-values-grid {
//           display: grid;
//           grid-template-columns: repeat(3,1fr);
//           gap: 2px; margin-top: 3rem;
//         }
//         .ab-value-card {
//           background: var(--bm-white);
//           border: 1px solid var(--bm-gray-2);
//           padding: 2.5rem 2rem;
//           position: relative; overflow: hidden;
//           transition: box-shadow 0.3s var(--bm-ease), transform 0.3s var(--bm-ease), border-color 0.25s;
//         }
//         .ab-value-card::before {
//           content: '';
//           position: absolute; top: 0; left: 0;
//           width: 0; height: 3px;
//           background: var(--bm-royal);
//           transition: width 0.4s var(--bm-ease);
//         }
//         .ab-value-card:hover {
//           box-shadow: 0 16px 40px rgba(0,47,167,0.1);
//           transform: translateY(-4px);
//           border-color: var(--bm-royal);
//         }
//         .ab-value-card:hover::before { width: 100%; }
//         .ab-value-num {
//           font-family: var(--bm-font-head);
//           font-size: 0.65rem; font-weight: 800;
//           color: var(--bm-gray-3); margin-bottom: 1rem;
//         }
//         .ab-value-icon {
//           width: 46px; height: 46px;
//           background: var(--bm-gray-1);
//           border: 1px solid var(--bm-gray-2);
//           display: flex; align-items: center; justify-content: center;
//           color: var(--bm-royal); margin-bottom: 1.25rem;
//           transition: background 0.25s, border-color 0.25s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
//         }
//         .ab-value-card:hover .ab-value-icon {
//           background: var(--bm-royal); color: white;
//           border-color: var(--bm-royal);
//           transform: scale(1.1);
//         }
//         .ab-value-title {
//           font-family: var(--bm-font-head);
//           font-size: 1.15rem; font-weight: 900;
//           text-transform: uppercase; color: var(--bm-royal-dark);
//           margin-bottom: 0.75rem;
//           transition: color 0.2s;
//         }
//         .ab-value-card:hover .ab-value-title { color: var(--bm-royal); }
//         .ab-value-desc {
//           font-size: 0.875rem; line-height: 1.75;
//           color: var(--bm-gray-4);
//         }

//         /* ── WHY BLUMOND ── */
//         .ab-why-grid {
//           display: grid; grid-template-columns: repeat(2,1fr);
//           gap: 0; margin-top: 3rem;
//         }
//         /* Reuse global .why-point style exactly */
//         .ab-why-point {
//           display: flex; align-items: flex-start;
//           gap: 1.25rem; padding: 1.5rem 1.5rem;
//           border-left: 3px solid transparent;
//           border-bottom: 1px solid var(--bm-gray-2);
//           transition: border-color 0.25s, background 0.25s, transform 0.25s;
//           cursor: default;
//         }
//         .ab-why-point:nth-child(odd) { border-right: 1px solid var(--bm-gray-2); }
//         .ab-why-point:hover {
//           border-left-color: var(--bm-royal);
//           background: rgba(0,47,167,0.03);
//           transform: translateX(4px);
//         }
//         .ab-why-check {
//           width: 26px; height: 26px;
//           background: var(--bm-royal);
//           display: flex; align-items: center; justify-content: center;
//           flex-shrink: 0; margin-top: 2px;
//           transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
//         }
//         .ab-why-point:hover .ab-why-check { transform: scale(1.15); }
//         .ab-why-title {
//           font-family: var(--bm-font-head);
//           font-size: 1rem; font-weight: 800;
//           text-transform: uppercase; color: var(--bm-royal-dark);
//           margin-bottom: 0.35rem;
//         }
//         .ab-why-desc {
//           font-size: 0.875rem; line-height: 1.7;
//           color: var(--bm-gray-4);
//         }

//         /* ── TEAM ── */
//         .ab-team-grid {
//           display: grid; grid-template-columns: repeat(4,1fr);
//           gap: 2px; margin-top: 3rem;
//           justify-items: center;
//         }
//         .ab-team-card {
//           width: min(100%, 360px);
//           background: var(--bm-white);
//           border: 1px solid rgba(0,47,167,0.15);
//           border-radius: 24px;
//           padding: 2.75rem 2rem;
//           position: relative; overflow: hidden;
//           transition: box-shadow 0.3s var(--bm-ease), transform 0.3s var(--bm-ease), border-color 0.25s;
//           text-align: center;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }
//         .ab-team-card::after {
//           content: '';
//           position: absolute; bottom: 0; left: 0; right: 0;
//           height: 3px; background: var(--bm-royal);
//           transform: scaleX(0); transform-origin: left;
//           transition: transform 0.3s var(--bm-ease);
//         }
//         .ab-team-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,47,167,0.1); border-color: rgba(0,47,167,0.25); }
//         .ab-team-card:hover::after { transform: scaleX(1); }
//         .ab-team-avatar {
//           width: 60px; height: 60px;
//           background: var(--bm-royal);
//           display: flex; align-items: center; justify-content: center;
//           font-family: var(--bm-font-head); font-weight: 900;
//           font-size: 1.25rem; color: white;
//           margin: 0 0 1.25rem;
//           clip-path: polygon(14% 0%, 100% 0%, 86% 100%, 0% 100%);
//           transition: transform 0.35s var(--bm-ease);
//         }
//         .ab-team-card:hover .ab-team-avatar { transform: scale(1.08); }
//         .ab-team-name {
//           font-family: var(--bm-font-head);
//           font-size: 1.1rem; font-weight: 900;
//           text-transform: uppercase; color: var(--bm-royal-dark);
//           margin-bottom: 0.25rem;
//         }
//         .ab-team-role {
//           font-size: 0.8rem; font-weight: 600;
//           color: var(--bm-gray-3); margin-bottom: 0.75rem;
//         }
//         .ab-team-exp {
//           display: inline-block;
//           font-family: var(--bm-font-head);
//           font-size: 0.65rem; font-weight: 700;
//           letter-spacing: 0.1em; text-transform: uppercase;
//           color: var(--bm-royal);
//           background: var(--bm-royal-faint);
//           border: 1px solid rgba(0,47,167,0.18);
//           padding: 4px 12px;
//           border-radius: 999px;
//         }

//         /* ── REVEAL ── */
//         .ab-reveal {
//           opacity: 0; transform: translateY(24px);
//           transition: opacity 0.6s var(--bm-ease), transform 0.6s var(--bm-ease);
//         }
//         .ab-reveal.ab-visible { opacity: 1; transform: translateY(0); }

//         /* ── RESPONSIVE ── */
//         @media (max-width: 1024px) {
//           .ab-overview-grid { grid-template-columns: 1fr; gap: 3rem; }
//           .ab-values-grid { grid-template-columns: repeat(2,1fr); }
//           .ab-team-grid { grid-template-columns: repeat(2,1fr); }
//         }
//         @media (max-width: 768px) {
//           .ab-hero { padding: 5rem 1.5rem 4rem; }
//           .ab-section { padding: 4rem 1.5rem; }
//           .ab-stats { padding: 0 1.5rem; }
//           .ab-stats-inner { grid-template-columns: repeat(2,1fr); }
//           .ab-stat { border-bottom: 1px solid rgba(255,255,255,0.12); }
//           .ab-mv-grid { grid-template-columns: 1fr; gap: 2px; }
//           .ab-values-grid { grid-template-columns: 1fr; }
//           .ab-why-grid { grid-template-columns: 1fr; }
//           .ab-why-point:nth-child(odd) { border-right: none; }
//           .ab-team-grid { grid-template-columns: 1fr 1fr; }
//           .ab-overview-boxes { grid-template-columns: 1fr; }
//         }
//         @media (max-width: 480px) {
//           .ab-stats-inner { grid-template-columns: 1fr 1fr; }
//           .ab-team-grid { grid-template-columns: 1fr; }
//         }
//       `}</style>

//       <div className="ab-page">

//         {/* ══ HERO ══ */}
//         <section className="ab-hero">
//           <div className="ab-hero-inner">
//             <div className="ab-hero-label">
//               <span>About BlueMond Solutions</span>
//             </div>
//             <h1 className="ab-hero-h1">
//               Trusted Eyes.<br /><span>Everywhere.</span>
//             </h1>
//             <p className="ab-hero-para">
//               We are a specialist remote surveillance company dedicated to proactive CCTV monitoring, rapid incident response, and intelligent security infrastructure — built for the industries that can't afford to blink.
//             </p>
//             <div className="ab-hero-actions">
//               <Link href="/request-quote" className="bm-cta">
//                 <span>Get a Free Consultation</span>
//                 <span className="bm-cta-arrow"><ArrowIcon /></span>
//               </Link>
//               <Link href="/services" className="btn-white-outline">
//                 <span>Explore Services</span>
//                 <ArrowIcon />
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* ══ STATS BAND ══ */}
//         <div className="ab-stats">
//           <div className="ab-stats-inner">
//             {stats.map((s, i) => (
//               <div key={i} className="ab-stat">
//                 <div className="ab-stat-num">{s.num}</div>
//                 <div className="ab-stat-label">{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ══ COMPANY OVERVIEW ══ */}
//         <RevealSection>
//           <section className="ab-section">
//             <div className="ab-section-inner">
//               <div className="ab-overview-grid">
//                 <div>
//                   <div className="ab-label">Company Overview</div>
//                   <h2 className="ab-title">Who We <span>Are</span></h2>
//                   <p className="ab-body">
//                     BlueMond Solutions was established with a single mandate: to deliver surveillance infrastructure that doesn't just record — it responds. We partner with businesses, developers, healthcare institutions, and public-sector operators across multiple industries to provide intelligent, always-on security coverage.
//                   </p>
//                   <p className="ab-body" style={{ marginTop: '1rem' }}>
//                     Our teams operate across distributed monitoring command centres, backed by proprietary escalation protocols and AI-assisted detection logic — ensuring your assets are protected around the clock without compromise.
//                   </p>
//                   <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
//                     <Link href="/services" className="btn-primary">
//                       <span>Our Services</span> <ArrowIcon />
//                     </Link>
//                     <Link href="/contact" className="btn-outline">
//                       <span>Contact Us</span> <ArrowIcon />
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="ab-overview-visual">
//                   <div className="ab-overview-boxes">
//                     {stats.map((s, i) => (
//                       <div key={i} className="ab-overview-box">
//                         <div className="ab-overview-box-stat">{s.num}</div>
//                         <div className="ab-overview-box-label">{s.label}</div>
//                         <div className="ab-overview-box-num">{String(i + 1).padStart(2, '0')}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </RevealSection>

//         {/* ══ MISSION & VISION ══ */}
//         <RevealSection>
//           <section className="ab-section ab-section--alt">
//             <div className="ab-section-inner">
//               <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
//                 <div className="ab-label" style={{ justifyContent: 'center' }}>Our Direction</div>
//                 <h2 className="ab-title">Mission &amp; <span>Vision</span></h2>
//               </div>
//               <div className="ab-mv-grid">
//                 <div className="ab-mv-card">
//                   <div className="ab-mv-icon">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
//                       <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
//                     </svg>
//                   </div>
//                   <div className="ab-mv-title">Our Mission</div>
//                   <p className="ab-mv-text">
//                     To provide the most reliable, intelligent, and responsive remote surveillance services available — reducing risk, enabling rapid response, and giving our clients total confidence in their security posture. We exist to protect what matters most: people, assets, and continuity of operations.
//                   </p>
//                 </div>
//                 <div className="ab-mv-card">
//                   <div className="ab-mv-icon">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
//                     </svg>
//                   </div>
//                   <div className="ab-mv-title">Our Vision</div>
//                   <p className="ab-mv-text">
//                     To become the defining security intelligence platform of the next decade — a trusted backbone of national and international security infrastructure, where every camera, every operator, and every protocol works in perfect orchestration to create environments that are truly safe.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </RevealSection>

//         {/* ══ CORE VALUES ══ */}
//         <RevealSection>
//           <section className="ab-section">
//             <div className="ab-section-inner">
//               <div className="ab-label">What Drives Us</div>
//               <h2 className="ab-title">Core <span>Values</span></h2>
//               <div className="ab-values-grid">
//                 {values.map((v, i) => (
//                   <div key={i} className="ab-value-card" style={{ animationDelay: `${i * 60}ms` }}>
//                     <div className="ab-value-num">{v.num}</div>
//                     <div className="ab-value-icon">{v.icon}</div>
//                     <div className="ab-value-title">{v.title}</div>
//                     <p className="ab-value-desc">{v.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </RevealSection>

//         {/* ══ WHY BLUMOND ══ */}
//         <RevealSection>
//           <section className="ab-section ab-section--alt">
//             <div className="ab-section-inner">
//               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
//                 <div>
//                   <div className="ab-label">Why Choose Us</div>
//                   <h2 className="ab-title">Why <span>BlueMond</span> Solutions</h2>
//                   <p className="ab-body">
//                     There are hundreds of security companies. Very few are built from the ground up for the demands of modern remote surveillance. Here's what sets us apart.
//                   </p>
//                   <div style={{ marginTop: '2rem' }}>
//                     <Link href="/request-quote" className="btn-primary">
//                       <span>Start Today</span> <ArrowIcon />
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="ab-why-grid">
//                   {whyPoints.map((p, i) => (
//                     <div key={i} className="ab-why-point">
//                       <div className="ab-why-check">
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
//                           <polyline points="20 6 9 17 4 12"/>
//                         </svg>
//                       </div>
//                       <div>
//                         <div className="ab-why-title">{p.title}</div>
//                         <div className="ab-why-desc">{p.desc}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </RevealSection>

//         {/* ══ LEADERSHIP ══ */}
//         <RevealSection>
//           <section className="ab-section">
//             <div className="ab-section-inner">
//               <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
//                 <div className="ab-label" style={{ justifyContent: 'center' }}>The People</div>
//                 <h2 className="ab-title">Leadership <span>Team</span></h2>
//               </div>
//               <div className="ab-team-grid">
//                 {team.map((m, i) => (
//                   <div key={i} className="ab-team-card">
//                     <div className="ab-team-avatar">{m.initials}</div>
//                     <div className="ab-team-name">{m.name}</div>
//                     <div className="ab-team-role">{m.role}</div>
//                     <div className="ab-team-exp">{m.exp} Experience</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </RevealSection>

//         {/* ══ CTA BAND ══ */}
//         <section className="ab-section ab-section--dark">
//           <div className="ab-section-inner" style={{ position: 'relative', zIndex: 1 }}>
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
//               <div>
//                 <div className="ab-label ab-label--light">Ready to Begin</div>
//                 <h2 className="ab-title ab-title--light">
//                   Secure your assets.<br /><span>Talk to us today.</span>
//                 </h2>
//               </div>
//               <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
//                 <Link href="/request-quote" className="bm-cta">
//                   <span>Request a Quote</span>
//                   <span className="bm-cta-arrow"><ArrowIcon /></span>
//                 </Link>
//                 <Link href="/contact" className="btn-white-outline">
//                   <span>Contact Us</span> <ArrowIcon />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//       </div>
//     </>
//   );
// }

// /* ── Reveal wrapper ── */
// function RevealSection({ children }: { children: React.ReactNode }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [vis, setVis] = useState(false);
//   useEffect(() => {
//     const el = ref.current; if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
//       { threshold: 0.07 }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);
//   return (
//     <div ref={ref} className={`ab-reveal${vis ? ' ab-visible' : ''}`}>
//       {children}
//     </div>
//   );
// }

// function ArrowIcon({ className = '' }: { className?: string }) {
//   return (
//     <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//       <path d="M5 12h14M12 5l7 7-7 7"/>
//     </svg>
//   );
// }


'use client';

/* eslint-disable react/no-unescaped-entities */

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/* ─────────────────────────────────────────
    DATA
───────────────────────────────────────── */
const stats = [
  { num: '500+', label: 'Sites Monitored' },
  { num: '24/7', label: 'Live Coverage' },
  { num: '15+',   label: 'Years Experience' },
  { num: '99.8%', label: 'Uptime Guaranteed' },
];

const values = [
  {
    num: '01',
    title: 'Integrity',
    desc: 'Every decision we make is grounded in transparency and accountability — to our clients, our partners, and ourselves.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Precision',
    desc: 'We operate with exacting standards — from camera placement logic to incident response protocols.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Innovation',
    desc: 'We continuously integrate the latest AI-assisted surveillance technologies to stay ahead of emerging threats.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Reliability',
    desc: 'Our clients trust us to be present when it matters most. We never go offline — and neither does your security.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Responsiveness',
    desc: 'Rapid incident escalation and clear communication channels ensure zero lag between detection and action.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Partnership',
    desc: 'We don\'t just monitor — we build long-term security relationships tailored to your unique operational needs.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

const whyPoints = [
  { title: 'Dedicated Monitoring Teams',   desc: 'Trained operators assigned per site — not shared across hundreds of feeds.' },
  { title: 'AI-Assisted Detection',        desc: 'Smart motion logic filters false alarms so only real threats trigger escalation.' },
  { title: 'Rapid Incident Protocols',     desc: 'Verified alert → escalation → authority contact within minutes, not hours.' },
  { title: 'Custom Integration Ready',     desc: 'We integrate with your existing access control, alarms, and management systems.' },
  { title: 'Transparent Reporting',        desc: 'Detailed incident logs and monthly review reports delivered to your inbox.' },
  { title: 'Scalable Infrastructure',      desc: 'From a single retail unit to a 50-site construction portfolio — we scale with you.' },
];

const team = [
  { initials: 'AC', name: 'Musab Kamran', role: 'Chief Executive Officer',       exp: '5+ YRS' },
];

/* ─────────────────────────────────────────
    PAGE
───────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <style>{`
        /* ── PAGE SHELL ── */
        .ab-page { font-family: var(--bm-font-body); color: var(--bm-gray-5); }

        /* ── HERO ── */
        .ab-hero {
          background: var(--bm-royal-dark);
          position: relative;
          overflow: hidden;
          padding: 7rem 2.5rem 6rem;
        }
        .ab-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .ab-hero-inner {
          max-width: 1440px; margin: 0 auto;
          position: relative; z-index: 1;
        }
        .ab-hero-label {
          font-family: var(--bm-font-head);
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          display: flex; align-items: center; gap: 0.6rem;
          margin-bottom: 1.5rem;
          animation: slideRight 0.7s 0.1s var(--bm-ease) both;
        }
        .ab-hero-label::before {
          content: ''; display: block;
          width: 2rem; height: 2px;
          background: var(--bm-royal); flex-shrink: 0;
        }
        .ab-hero-h1 {
          font-family: var(--bm-font-head);
          font-weight: 900; font-size: clamp(3rem, 6vw, 5.5rem);
          text-transform: uppercase; letter-spacing: 0.01em;
          line-height: 1.0; color: var(--bm-white);
          animation: fadeUp 0.8s 0.25s var(--bm-ease) both;
        }
        .ab-hero-h1 span { color: var(--bm-royal); }
        .ab-hero-para {
          font-size: 1.05rem; line-height: 1.75;
          color: rgba(255,255,255,0.55);
          max-width: 560px; margin: 1.75rem 0 2.5rem;
          animation: fadeUp 0.8s 0.4s var(--bm-ease) both;
        }
        .ab-hero-actions {
          display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
          animation: fadeUp 0.8s 0.55s var(--bm-ease) both;
        }

        /* ── STATS BAND ── */
        .ab-stats {
          background: var(--bm-royal);
          padding: 0 2.5rem;
        }
        .ab-stats-inner {
          max-width: 1440px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4,1fr);
        }
        .ab-stats-inner {
          max-width: 1440px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4,1fr);
        }
        .ab-stat {
          padding: 2.25rem 2rem;
          border-right: 1px solid rgba(255,255,255,0.12);
          transition: background 0.25s;
        }
        .ab-stat:last-child { border-right: none; }
        .ab-stat:hover { background: rgba(255,255,255,0.07); }
        .ab-stat-num {
          font-family: var(--bm-font-head);
          font-size: 2.6rem; font-weight: 900; line-height: 1;
          color: var(--bm-white);
        }
        .ab-stat-label {
          font-size: 0.8rem; font-weight: 600;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase; letter-spacing: 0.08em;
          margin-top: 4px;
        }

        /* ── SECTION SHELL ── */
        .ab-section {
          padding: 6rem 2.5rem;
        }
        .ab-section--alt { background: var(--bm-gray-1); }
        .ab-section--dark {
          background: var(--bm-royal-dark);
          position: relative; overflow: hidden;
        }
        .ab-section--dark::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .ab-section-inner { max-width: 1440px; margin: 0 auto; }

        /* ── SECTION LABEL / TITLE (reuse global pattern) ── */
        .ab-label {
          font-family: var(--bm-font-head);
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--bm-royal);
          display: flex; align-items: center; gap: 0.6rem;
          margin-bottom: 1rem;
        }
        .ab-label--light { color: rgba(255,255,255,0.45); }
        .ab-label::before {
          content: ''; display: block;
          width: 2rem; height: 2px;
          background: var(--bm-royal); flex-shrink: 0;
        }
        .ab-label--light::before { background: rgba(255,255,255,0.3); }
        .ab-title {
          font-family: var(--bm-font-head);
          font-weight: 900; font-size: clamp(2rem, 4vw, 3rem);
          text-transform: uppercase; line-height: 1.05;
          color: var(--bm-royal-dark);
        }
        .ab-title--light { color: var(--bm-white); }
        .ab-title span { color: var(--bm-royal); }
        .ab-body {
          font-size: 0.95rem; line-height: 1.8;
          color: var(--bm-gray-4); max-width: 640px;
          margin-top: 1.25rem;
        }
        .ab-body--light { color: rgba(255,255,255,0.55); }

        /* ── OVERVIEW — two-col ── */
        .ab-overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem; align-items: center;
        }
        .ab-overview-visual {
          position: relative;
        }
        .ab-overview-box {
          background: var(--bm-royal);
          padding: 3rem 2.5rem;
          position: relative; overflow: hidden;
        }
        .ab-overview-box::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: rgba(255,255,255,0.2);
        }
        .ab-overview-box-num {
          font-family: var(--bm-font-head);
          font-size: 5rem; font-weight: 900;
          color: rgba(255,255,255,0.08);
          line-height: 1; position: absolute;
          bottom: 1rem; right: 1.5rem;
        }
        .ab-overview-box-stat {
          font-family: var(--bm-font-head);
          font-size: 3rem; font-weight: 900;
          color: var(--bm-white); line-height: 1;
          margin-bottom: 0.5rem;
        }
        .ab-overview-box-label {
          font-size: 0.82rem; font-weight: 600;
          color: rgba(255,255,255,0.6);
          text-transform: uppercase; letter-spacing: 0.1em;
        }
        .ab-overview-boxes {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 2px; margin-bottom: 2px;
        }

        /* ── MISSION / VISION ── */
        .ab-mv-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        .ab-mv-card {
          background: var(--bm-white);
          border: 1px solid var(--bm-gray-2);
          border-top: 3px solid var(--bm-royal);
          padding: 3rem 2.5rem;
          transition: box-shadow 0.3s var(--bm-ease), transform 0.3s var(--bm-ease);
        }
        .ab-mv-card:hover {
          box-shadow: 0 20px 50px rgba(0,47,167,0.08);
          transform: translateY(-4px);
        }
        .ab-mv-icon {
          width: 52px; height: 52px;
          background: var(--bm-royal-faint);
          border: 1px solid rgba(0,47,167,0.12);
          display: flex; align-items: center; justify-content: center;
          color: var(--bm-royal);
          margin-bottom: 1.5rem;
          transition: background 0.25s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .ab-mv-card:hover .ab-mv-icon {
          background: var(--bm-royal);
          color: white;
          transform: scale(1.1) rotate(3deg);
        }
        .ab-mv-title {
          font-family: var(--bm-font-head);
          font-size: 1.5rem; font-weight: 900;
          text-transform: uppercase; color: var(--bm-royal-dark);
          margin-bottom: 1rem;
        }
        .ab-mv-text {
          font-size: 0.93rem; line-height: 1.8;
          color: var(--bm-gray-4);
        }

        /* ── VALUES GRID ── */
        .ab-values-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 2px; margin-top: 3rem;
        }
        .ab-value-card {
          background: var(--bm-white);
          border: 1px solid var(--bm-gray-2);
          padding: 2.5rem 2rem;
          position: relative; overflow: hidden;
          transition: box-shadow 0.3s var(--bm-ease), transform 0.3s var(--bm-ease), border-color 0.25s;
        }
        .ab-value-card::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 0; height: 3px;
          background: var(--bm-royal);
          transition: width 0.4s var(--bm-ease);
        }
        .ab-value-card:hover {
          box-shadow: 0 16px 40px rgba(0,47,167,0.1);
          transform: translateY(-4px);
          border-color: var(--bm-royal);
        }
        .ab-value-card:hover::before { width: 100%; }
        .ab-value-num {
          font-family: var(--bm-font-head);
          font-size: 0.65rem; font-weight: 800;
          color: var(--bm-gray-3); margin-bottom: 1rem;
        }
        .ab-value-icon {
          width: 46px; height: 46px;
          background: var(--bm-gray-1);
          border: 1px solid var(--bm-gray-2);
          display: flex; align-items: center; justify-content: center;
          color: var(--bm-royal); margin-bottom: 1.25rem;
          transition: background 0.25s, border-color 0.25s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .ab-value-card:hover .ab-value-icon {
          background: var(--bm-royal); color: white;
          border-color: var(--bm-royal);
          transform: scale(1.1);
        }
        .ab-value-title {
          font-family: var(--bm-font-head);
          font-size: 1.15rem; font-weight: 900;
          text-transform: uppercase; color: var(--bm-royal-dark);
          margin-bottom: 0.75rem;
          transition: color 0.2s;
        }
        .ab-value-card:hover .ab-value-title { color: var(--bm-royal); }
        .ab-value-desc {
          font-size: 0.875rem; line-height: 1.75;
          color: var(--bm-gray-4);
        }

        /* ── WHY BLUMOND ── */
        .ab-why-grid {
          display: grid; grid-template-columns: repeat(2,1fr);
          gap: 0; margin-top: 3rem;
        }
        /* Reuse global .why-point style exactly */
        .ab-why-point {
          display: flex; align-items: flex-start;
          gap: 1.25rem; padding: 1.5rem 1.5rem;
          border-left: 3px solid transparent;
          border-bottom: 1px solid var(--bm-gray-2);
          transition: border-color 0.25s, background 0.25s, transform 0.25s;
          cursor: default;
        }
        .ab-why-point:nth-child(odd) { border-right: 1px solid var(--bm-gray-2); }
        .ab-why-point:hover {
          border-left-color: var(--bm-royal);
          background: rgba(0,47,167,0.03);
          transform: translateX(4px);
        }
        .ab-why-check {
          width: 26px; height: 26px;
          background: var(--bm-royal);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 2px;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .ab-why-point:hover .ab-why-check { transform: scale(1.15); }
        .ab-why-title {
          font-family: var(--bm-font-head);
          font-size: 1rem; font-weight: 800;
          text-transform: uppercase; color: var(--bm-royal-dark);
          margin-bottom: 0.35rem;
        }
        .ab-why-desc {
          font-size: 0.875rem; line-height: 1.7;
          color: var(--bm-gray-4);
        }

        /* ── TEAM ── */
        .ab-team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 360px));
          justify-content: center;
          justify-items: center;
          gap: 2rem;
          margin: 0 auto;
          margin-top: 3rem;
          padding: 0 1rem;
          max-width: 1120px;
        }
        .ab-team-card {
          width: 100%;
          max-width: 360px;
          background: var(--bm-white);
          border: 1px solid rgba(0,47,167,0.18);
          border-radius: 24px;
          padding: 2.75rem 2rem;
          position: relative; overflow: hidden;
          transition: box-shadow 0.3s var(--bm-ease), transform 0.3s var(--bm-ease), border-color 0.25s;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ab-team-card::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; background: var(--bm-royal);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s var(--bm-ease);
        }
        .ab-team-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,47,167,0.1); border-color: rgba(0,47,167,0.28); }
        .ab-team-card:hover::after { transform: scaleX(1); }
        .ab-team-avatar {
          width: 60px; height: 60px;
          background: var(--bm-royal);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--bm-font-head); font-weight: 900;
          font-size: 1.25rem; color: white;
          margin-bottom: 1.25rem;
          clip-path: polygon(14% 0%, 100% 0%, 86% 100%, 0% 100%);
          transition: transform 0.35s var(--bm-ease);
        }
        .ab-team-card:hover .ab-team-avatar { transform: scale(1.08); }
        .ab-team-name {
          font-family: var(--bm-font-head);
          font-size: 1.1rem; font-weight: 900;
          text-transform: uppercase; color: var(--bm-royal-dark);
          margin-bottom: 0.25rem;
        }
        .ab-team-role {
          font-size: 0.8rem; font-weight: 600;
          color: var(--bm-gray-3); margin-bottom: 0.75rem;
        }
        .ab-team-exp {
          display: inline-block;
          font-family: var(--bm-font-head);
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--bm-royal);
          background: var(--bm-royal-faint);
          border: 1px solid rgba(0,47,167,0.18);
          padding: 4px 12px;
          border-radius: 999px;
        }

        /* ── REVEAL ── */
        .ab-reveal {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.6s var(--bm-ease), transform 0.6s var(--bm-ease);
        }
        .ab-reveal.ab-visible { opacity: 1; transform: translateY(0); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .ab-overview-grid { grid-template-columns: 1fr; gap: 3rem; }
          .ab-values-grid { grid-template-columns: repeat(2,1fr); }
          .ab-team-grid { grid-template-columns: 1fr; max-width: 720px; gap: 1.75rem; }
          .ab-team-card { max-width: 100%; }
        }
        @media (max-width: 768px) {
          .ab-hero { padding: 5rem 1.5rem 4rem; }
          .ab-section { padding: 4rem 1.5rem; }
          .ab-stats { padding: 0 1.5rem; }
          .ab-stats-inner { grid-template-columns: repeat(2,1fr); }
          .ab-stat { border-bottom: 1px solid rgba(255,255,255,0.12); }
          .ab-mv-grid { grid-template-columns: 1fr; gap: 2px; }
          .ab-values-grid { grid-template-columns: 1fr; }
          .ab-why-grid { grid-template-columns: 1fr; }
          .ab-why-point:nth-child(odd) { border-right: none; }
          .ab-team-grid { grid-template-columns: 1fr; gap: 1.5rem; padding: 0 0.75rem; }
          .ab-team-card { padding: 2.5rem 1.75rem; }
          .ab-overview-boxes { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ab-stats-inner { grid-template-columns: 1fr 1fr; }
          .ab-team-grid { grid-template-columns: 1fr; gap: 1rem; padding: 0 0.5rem; }
          .ab-team-card { padding: 2rem 1.25rem; }
        }
      `}</style>

      <div className="ab-page">

        {/* ══ HERO ══ */}
        <section className="ab-hero">
          <div className="ab-hero-inner">
            <div className="ab-hero-label">
              <span>About BlueMond Solutions</span>
            </div>
            <h1 className="ab-hero-h1">
              Trusted Eyes.<br /><span>Everywhere.</span>
            </h1>
            <p className="ab-hero-para">
              We are a specialist remote surveillance company dedicated to proactive CCTV monitoring, rapid incident response, and intelligent security infrastructure — built for the industries that can't afford to blink.
            </p>
            <div className="ab-hero-actions">
              <Link href="/request-quote" className="bm-cta">
                <span>Get a Free Consultation</span>
                <span className="bm-cta-arrow"><ArrowIcon /></span>
              </Link>
              <Link href="/services" className="btn-white-outline">
                <span>Explore Services</span>
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ STATS BAND ══ */}
        <div className="ab-stats">
          <div className="ab-stats-inner">
            {stats.map((s, i) => (
              <div key={i} className="ab-stat">
                <div className="ab-stat-num">{s.num}</div>
                <div className="ab-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ COMPANY OVERVIEW ══ */}
        <RevealSection>
          <section className="ab-section">
            <div className="ab-section-inner">
              <div className="ab-overview-grid">
                <div>
                  <div className="ab-label">Company Overview</div>
                  <h2 className="ab-title">Who We <span>Are</span></h2>
                  <p className="ab-body">
                    BlueMond Solutions was established with a single mandate: to deliver surveillance infrastructure that doesn't just record — it responds. We partner with businesses, developers, healthcare institutions, and public-sector operators across multiple industries to provide intelligent, always-on security coverage.
                  </p>
                  <p className="ab-body" style={{ marginTop: '1rem' }}>
                    Our teams operate across distributed monitoring command centres, backed by proprietary escalation protocols and AI-assisted detection logic — ensuring your assets are protected around the clock without compromise.
                  </p>
                  <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link href="/services" className="btn-primary">
                      <span>Our Services</span> <ArrowIcon />
                    </Link>
                    <Link href="/contact" className="btn-outline">
                      <span>Contact Us</span> <ArrowIcon />
                    </Link>
                  </div>
                </div>
                <div className="ab-overview-visual">
                  <div className="ab-overview-boxes">
                    {stats.map((s, i) => (
                      <div key={i} className="ab-overview-box">
                        <div className="ab-overview-box-stat">{s.num}</div>
                        <div className="ab-overview-box-label">{s.label}</div>
                        <div className="ab-overview-box-num">{String(i + 1).padStart(2, '0')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* ══ MISSION & VISION ══ */}
        <RevealSection>
          <section className="ab-section ab-section--alt">
            <div className="ab-section-inner">
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div className="ab-label" style={{ justifyContent: 'center' }}>Our Direction</div>
                <h2 className="ab-title">Mission &amp; <span>Vision</span></h2>
              </div>
              <div className="ab-mv-grid">
                <div className="ab-mv-card">
                  <div className="ab-mv-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                      <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
                    </svg>
                  </div>
                  <div className="ab-mv-title">Our Mission</div>
                  <p className="ab-mv-text">
                    To provide the most reliable, intelligent, and responsive remote surveillance services available — reducing risk, enabling rapid response, and giving our clients total confidence in their security posture. We exist to protect what matters most: people, assets, and continuity of operations.
                  </p>
                </div>
                <div className="ab-mv-card">
                  <div className="ab-mv-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <div className="ab-mv-title">Our Vision</div>
                  <p className="ab-mv-text">
                    To become the defining security intelligence platform of the next decade — a trusted backbone of national and international security infrastructure, where every camera, every operator, and every protocol works in perfect orchestration to create environments that are truly safe.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* ══ CORE VALUES ══ */}
        <RevealSection>
          <section className="ab-section">
            <div className="ab-section-inner">
              <div className="ab-label">What Drives Us</div>
              <h2 className="ab-title">Core <span>Values</span></h2>
              <div className="ab-values-grid">
                {values.map((v, i) => (
                  <div key={i} className="ab-value-card" style={{ animationDelay: `${i * 60}ms` }}>
                    <div className="ab-value-num">{v.num}</div>
                    <div className="ab-value-icon">{v.icon}</div>
                    <div className="ab-value-title">{v.title}</div>
                    <p className="ab-value-desc">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* ══ WHY BLUMOND ══ */}
        <RevealSection>
          <section className="ab-section ab-section--alt">
            <div className="ab-section-inner">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                <div>
                  <div className="ab-label">Why Choose Us</div>
                  <h2 className="ab-title">Why <span>BlueMond</span> Solutions</h2>
                  <p className="ab-body">
                    There are hundreds of security companies. Very few are built from the ground up for the demands of modern remote surveillance. Here's what sets us apart.
                  </p>
                  <div style={{ marginTop: '2rem' }}>
                    <Link href="/request-quote" className="btn-primary">
                      <span>Start Today</span> <ArrowIcon />
                    </Link>
                  </div>
                </div>
                <div className="ab-why-grid">
                  {whyPoints.map((p, i) => (
                    <div key={i} className="ab-why-point">
                      <div className="ab-why-check">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <div>
                        <div className="ab-why-title">{p.title}</div>
                        <div className="ab-why-desc">{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* ══ LEADERSHIP ══ */}
        <RevealSection>
          <section className="ab-section">
            <div className="ab-section-inner">
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div className="ab-label" style={{ justifyContent: 'center' }}>The People</div>
                <h2 className="ab-title">Leadership <span>Team</span></h2>
              </div>
              <div className="ab-team-grid">
                {team.map((m, i) => (
                  <div key={i} className="ab-team-card">
                    <div className="ab-team-avatar">{m.initials}</div>
                    <div className="ab-team-name">{m.name}</div>
                    <div className="ab-team-role">{m.role}</div>
                    <div className="ab-team-exp">{m.exp} Experience</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealSection>

        {/* ══ CTA BAND ══ */}
        <section className="ab-section ab-section--dark">
          <div className="ab-section-inner" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <div className="ab-label ab-label--light">Ready to Begin</div>
                <h2 className="ab-title ab-title--light">
                  Secure your assets.<br /><span>Talk to us today.</span>
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/request-quote" className="bm-cta">
                  <span>Request a Quote</span>
                  <span className="bm-cta-arrow"><ArrowIcon /></span>
                </Link>
                <Link href="/contact" className="btn-white-outline">
                  <span>Contact Us</span> <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

/* ── Reveal wrapper ── */
function RevealSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.07 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`ab-reveal${vis ? ' ab-visible' : ''}`}>
      {children}
    </div>
  );
}

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}