'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ─────────────────────────────────────────
    DATA CONFIGURATIONS
───────────────────────────────────────── */
const serviceLinks = [
  { label: 'CCTV Monitoring',         href: '/services/cctv-monitoring',         num: '01' },
  { label: 'Incident Reporting',      href: '/services/incident-reporting',      num: '02' },
  { label: 'Two-Way Communication', href: '/services/two-way-communication', num: '03' },
  { label: 'Virtual Doorman',         href: '/services/virtual-doorman',       num: '04' },
  { label: 'Monthly Sheets',  href: '/services/monthly-sheets',  num: '05' },
];

const industryLinks = [
  { label: 'Residential Sector',  href: '/industries/residential',  num: '01' },
  { label: 'Commercial Blocks',   href: '/industries/commercial',   num: '02' },
  { label: 'Construction Yards',  href: '/industries/construction', num: '03' },
  { label: 'Healthcare Hubs',     href: '/industries/healthcare',   num: '04' },
  { label: 'Educational Zones',   href: '/industries/education',    num: '05' },
  { label: 'Retail Environments', href: '/industries/retail',       num: '06' },
  { label: 'Hospitality Sites',   href: '/industries/hospitality',  num: '07' },
  { label: 'Industrial Plants',   href: '/industries/industrial',   num: '08' },
];

const companyLinks = [
  { label: 'About Us',        href: '/about' },
  { label: 'Careers',         href: '/careers' },
  { label: 'Blog',            href: '/blog' },
  { label: 'Resources',       href: '/resources' },
  { label: 'Contact',         href: '/contact' },
  { label: 'Request a Quote', href: '/request-quote' },
];

const legalLinks = [
  { label: 'Privacy Policy',     href: '/legal/privacy-policy' },
  { label: 'Terms & Conditions', href: '/legal/terms' },
  { label: 'Cookie Policy',      href: '/legal/cookie-policy' },
  { label: 'Disclaimer',         href: '/legal/disclaimer' },
];

const socialLinks = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/bluemond-solutions/?viewAsMember=true',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    key: 'twitter',
    label: 'Twitter / X',
    href: 'https://x.com/bluemondsol',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/bluemondsolutions',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5c0 3.3-2.45 5.75-5.75 5.75h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5C5.4 3.5 3.5 5.4 3.5 7.75v8.5c0 2.35 1.9 4.25 4.25 4.25h8.5c2.35 0 4.25-1.9 4.25-4.25v-8.5c0-2.35-1.9-4.25-4.25-4.25h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm4.88-2.88a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24z"/>
      </svg>
    ),
  },
  {
    key: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61590541143497',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────
    HOOK: Intersection Observer for reveal
───────────────────────────────────────── */
function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─────────────────────────────────────────
    FOOTER COMPONENT
───────────────────────────────────────── */
export default function Footer() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`
        /* ══════════════════════════════════════
           BLUMOND FOOTER — mirrors bm- design system
         ══════════════════════════════════════ */

        /* CTA strip — same background as bm-topbar */
        .bm-footer-cta-strip {
          background: var(--bm-royal-dark);
          border-top: 3px solid var(--bm-royal);
          padding: 3.5rem 2.5rem;
        }
        .bm-footer-cta-inner {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .bm-footer-cta-eyebrow {
          font-family: var(--bm-font-head);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.5rem;
        }
        .bm-footer-cta-eyebrow::before {
          content: '';
          display: block;
          width: 2rem;
          height: 2px;
          background: var(--bm-royal);
          flex-shrink: 0;
        }
        .bm-footer-cta-heading {
          font-family: var(--bm-font-head);
          font-weight: 900;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 1.08;
          color: var(--bm-white);
        }
        .bm-footer-cta-heading span {
          color: var(--bm-royal);
        }

        /* Pulse dot — same as .bm-pulse-dot from global.css */
        .bm-footer-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
          animation: bm-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
          display: inline-block;
        }

        /* ── MAIN FOOTER BODY ── */
        .bm-footer-body {
          background: var(--bm-white);
          border-top: 1px solid var(--bm-gray-2);
        }

        .bm-footer-grid {
          max-width: 1440px;
          margin: 0 auto;
          padding: 5rem 2.5rem 4rem;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.1fr;
          gap: 4rem;
        }

        /* ── BRAND COLUMN ── */
        .bm-footer-logo-wrapper {
          display: flex;
          align-items: center;
          width: fit-content;
          height: auto;
          max-width: 280px; /* Larger footer logo width */
        }
        .bm-footer-logo-img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
        .bm-footer-tagline {
          font-family: var(--bm-font-body);
          font-size: 0.875rem;
          line-height: 1.75;
          color: var(--bm-gray-3);
          margin: 1.25rem 0 1.75rem;
          max-width: 270px;
        }

        /* live-badge reuse from global.css */
        .bm-footer-live {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: rgba(0,47,167,0.06);
          border: 1px solid rgba(0,47,167,0.14);
          padding: 0.35rem 0.9rem;
          font-family: var(--bm-font-head);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--bm-royal);
          margin-bottom: 1.75rem;
        }
        .bm-footer-live-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #10B981;
          animation: pulse-dot 1.8s infinite;
          flex-shrink: 0;
        }

        /* Social icons */
        .bm-footer-socials {
          display: flex;
          gap: 0.5rem;
        }
        .bm-footer-social {
          width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          background: var(--bm-gray-1);
          border: 1.5px solid var(--bm-gray-2);
          color: var(--bm-gray-3);
          text-decoration: none;
          transition:
            background 0.25s var(--bm-ease),
            border-color 0.25s var(--bm-ease),
            color 0.25s var(--bm-ease),
            transform 0.25s var(--bm-ease),
            box-shadow 0.25s var(--bm-ease);
        }
        .bm-footer-social:hover {
          background: var(--bm-royal);
          border-color: var(--bm-royal);
          color: var(--bm-white);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px var(--bm-royal-glow);
        }

        /* ── LINK COLUMNS ── */
        .bm-footer-col-heading {
          font-family: var(--bm-font-head);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--bm-royal);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .bm-footer-col-heading::before {
          content: '';
          display: block;
          width: 1.5rem;
          height: 2px;
          background: var(--bm-royal);
          flex-shrink: 0;
        }

        /* Footer links — same hover bar mechanic as .bm-navlink */
        .bm-footer-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.38rem 0;
          font-family: var(--bm-font-body);
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--bm-gray-4);
          text-decoration: none;
          transition:
            color 0.22s var(--bm-ease),
            padding-left 0.22s var(--bm-ease);
          position: relative;
          border-bottom: 1px solid var(--bm-gray-2);
        }
        .bm-footer-link:last-of-type {
          border-bottom: none;
        }
        .bm-footer-link-num {
          font-family: var(--bm-font-head);
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--bm-gray-3);
          min-width: 20px;
          transition: color 0.22s;
        }
        .bm-footer-link-arrow {
          margin-left: auto;
          flex-shrink: 0;
          color: var(--bm-gray-3);
          opacity: 0;
          transform: translateX(-4px);
          transition:
            opacity 0.2s var(--bm-ease),
            transform 0.2s var(--bm-ease),
            color 0.2s;
        }
        .bm-footer-link:hover {
          color: var(--bm-royal);
          padding-left: 4px;
        }
        .bm-footer-link:hover .bm-footer-link-num {
          color: var(--bm-royal);
        }
        .bm-footer-link:hover .bm-footer-link-arrow {
          opacity: 1;
          transform: translateX(0);
          color: var(--bm-royal);
        }

        /* Contact desk */
        .bm-footer-desk {
          margin-top: 2.25rem;
        }
        .bm-footer-desk-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-family: var(--bm-font-body);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--bm-gray-4);
          line-height: 1.55;
          margin-bottom: 0.75rem;
          transition: color 0.2s;
          text-decoration: none;
        }
        .bm-footer-desk-item:hover { color: var(--bm-royal); }
        .bm-footer-desk-icon {
          width: 26px; height: 26px;
          background: var(--bm-gray-1);
          border: 1px solid var(--bm-gray-2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: var(--bm-royal);
          margin-top: 1px;
          transition: background 0.22s, border-color 0.22s;
        }
        .bm-footer-desk-item:hover .bm-footer-desk-icon {
          background: rgba(0,47,167,0.07);
          border-color: rgba(0,47,167,0.2);
        }

        /* ── BOTTOM BAR — mirrors bm-topbar style ── */
        .bm-footer-bottom {
          background: var(--bm-gray-1);
          border-top: 1px solid var(--bm-gray-2);
          padding: 1.5rem 2.5rem;
        }
        .bm-footer-bottom-inner {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .bm-footer-copy {
          font-family: var(--bm-font-body);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--bm-gray-3);
          letter-spacing: 0.02em;
        }
        .bm-footer-legal {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        /* Legal links — same underline bar as .bm-navlink-bar */
        .bm-footer-legal-link {
          font-family: var(--bm-font-body);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--bm-gray-3);
          text-decoration: none;
          position: relative;
          transition: color 0.22s;
        }
        .bm-footer-legal-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 2px;
          background: var(--bm-royal);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.3s var(--bm-ease);
        }
        .bm-footer-legal-link:hover { color: var(--bm-royal); }
        .bm-footer-legal-link:hover::after { transform: scaleX(1); }

        .bm-footer-copy a {
          color: inherit;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        /* ── ENTRANCE ANIMATIONS — same easing as global.css reveals ── */
        .bm-footer-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.6s var(--bm-ease),
            transform 0.6s var(--bm-ease);
        }
        .bm-footer-reveal.bm-footer-reveal--in {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .bm-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            padding: 4rem 2rem 3rem;
          }
        }
        @media (max-width: 768px) {
          .bm-footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: 3rem 1.5rem 2.5rem;
          }
          .bm-footer-cta-strip { padding: 2.5rem 1.5rem; }
          .bm-footer-cta-inner { flex-direction: column; align-items: flex-start; }
          .bm-footer-bottom { padding: 1.25rem 1.5rem; }
          .bm-footer-bottom-inner { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .bm-footer-legal { gap: 1rem; }
        }
      `}</style>

      <footer>

        {/* ── CTA STRIP — dark like bm-topbar ── */}
        <div className="bm-footer-cta-strip">
          <div className="bm-footer-cta-inner">
            <div>
              <div className="bm-footer-cta-eyebrow">
                <span className="bm-footer-pulse-dot" />
                24/7 Monitoring Active
              </div>
              <div className="bm-footer-cta-heading">
                Ready to secure your <span>perimeter?</span>
              </div>
            </div>
            {/* Exact .bm-cta from header */}
            <Link href="/request-quote" className="bm-cta">
              <span>Establish Security Loop</span>
              <span className="bm-cta-arrow"><ArrowIcon /></span>
            </Link>
          </div>
        </div>

        {/* ── MAIN GRID — white bg like header ── */}
        <div className="bm-footer-body" ref={ref}>
          <div className="bm-footer-grid">

            {/* Brand Column */}
            <div
              className={`bm-footer-reveal${inView ? ' bm-footer-reveal--in' : ''}`}
              style={{ transitionDelay: '0ms' }}
            >
              {/* EXACT NAVBAR MATCH LOGO STRUCTURE */}
              <Link href="/" className="bm-logo" aria-label="BlueMond Solutions home">
                <div className="bm-footer-logo-wrapper">
                  <Image 
                    src="/logo.png" 
                    alt="BlueMond Solutions logo" 
                    width={180} 
                    height={48} 
                    className="bm-footer-logo-img"
                    priority
                  />
                </div>
              </Link>

              <p className="bm-footer-tagline">
                Professional remote CCTV logistics and strategic monitoring networks protecting assets worldwide 24/7.
              </p>

              {/* live-badge from global.css */}
              <div className="bm-footer-live">
                <span className="bm-footer-live-dot" />
                All Systems Operational
              </div>

              <div className="bm-footer-socials">
                {socialLinks.map((s) => (
                  <a key={s.key} href={s.href} className="bm-footer-social" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div
              className={`bm-footer-reveal${inView ? ' bm-footer-reveal--in' : ''}`}
              style={{ transitionDelay: '80ms' }}
            >
              <div className="bm-footer-col-heading">Services</div>
              {serviceLinks.map((l, i) => (
                <Link key={i} href={l.href} className="bm-footer-link">
                  <span className="bm-footer-link-num">{l.num}</span>
                  {l.label}
                  <ArrowIcon className="bm-footer-link-arrow" />
                </Link>
              ))}
            </div>

            {/* Industries Column */}
            <div
              className={`bm-footer-reveal${inView ? ' bm-footer-reveal--in' : ''}`}
              style={{ transitionDelay: '160ms' }}
            >
              <div className="bm-footer-col-heading">Industries</div>
              {industryLinks.map((l, i) => (
                <Link key={i} href={l.href} className="bm-footer-link">
                  <span className="bm-footer-link-num">{l.num}</span>
                  {l.label}
                  <ArrowIcon className="bm-footer-link-arrow" />
                </Link>
              ))}
            </div>

            {/* Company + Contact Column */}
            <div
              className={`bm-footer-reveal${inView ? ' bm-footer-reveal--in' : ''}`}
              style={{ transitionDelay: '240ms' }}
            >
              <div className="bm-footer-col-heading">Company</div>
              {companyLinks.map((l, i) => (
                <Link key={i} href={l.href} className="bm-footer-link">
                  <span className="bm-footer-link-num">{String(i + 1).padStart(2, '0')}</span>
                  {l.label}
                  <ArrowIcon className="bm-footer-link-arrow" />
                </Link>
              ))}

              <div className="bm-footer-desk">
                <div className="bm-footer-col-heading" style={{ marginBottom: '1rem' }}>Global Desk</div>
                <a href="tel:18002586663" className="bm-footer-desk-item">
                  <div className="bm-footer-desk-icon"><PhoneIcon /></div>
                  <span>+1(608)7535466</span>
                </a>
                <a href="mailto:info@bluemond.com" className="bm-footer-desk-item">
                  <div className="bm-footer-desk-icon"><MailIcon /></div>
                  <span>info@bluemondsolutions.com</span>
                </a>
                <div className="bm-footer-desk-item">
                  <div className="bm-footer-desk-icon"><ClockIcon /></div>
                  <span>Mon–Fri 9am–6pm EST</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR — mirrors bm-topbar ── */}
        <div className="bm-footer-bottom">
          <div className="bm-footer-bottom-inner">
            <p className="bm-footer-copy">
              © {new Date().getFullYear()} BlueMond Solutions. All structural layouts encrypted. Built by{' '}
              <a href="https://verqorasolutions.com" target="_blank" rel="noreferrer">
                Verqora Solutions
              </a>
            </p>
            <div className="bm-footer-legal">
              {legalLinks.map((l) => (
                <Link key={l.href} href={l.href} className="bm-footer-legal-link">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}

/* ─────────────────────────────────────────
    ICONS — same as header (stroke="currentColor", strokeWidth="2.5")
───────────────────────────────────────── */
function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 2.18L6.4 2a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.32 9.91a16 16 0 0 0 6.07 6.07l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 21.4 17z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-10 7L2 7"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  );
}