'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/* ─── DATA CONFIGURATION ─────────────────────────────────── */

const services = [
  {
    icon: '📹',
    title: 'CCTV Monitoring',
    desc: 'Round-the-clock remote monitoring with real-time alerts and rapid tactical response loops.',
    href: '/services/cctv-monitoring',
  },
  {
    icon: '🚨',
    title: 'Incident Reporting',
    desc: 'Detailed analytical logs generated instantly for your security deck and law authorities.',
    href: '/services/incident-reporting',
  },
  {
    icon: '🗣️',
    title: 'Two-Way Communication',
    desc: 'Live audio intervention to instantly challenge intruders and voice-down perimeter threats.',
    href: '/services/two-way-communication',
  },
  {
    icon: '🔑',
    title: 'Virtual Doorman',
    desc: 'Remote visitor verification, credential logging, and secure access control nodes.',
    href: '/services/virtual-doorman',
  },
  {
    icon: '📊',
    title: 'Monthly Sheets',
    desc: 'Comprehensive analytical reports, operational metric sheets, and health data tracking.',
    href: '/services/monthly-sheets',
  },
];

const industries = [
  { label: 'Residential Sector',  href: '/industries/residential',  icon: '🏠', count: '59 Sites Secure' },
  { label: 'Commercial Blocks',   href: '/industries/commercial',   icon: '🏢', count: '42 Complex Hubs' },
  { label: 'Construction Yards',  href: '/industries/construction', icon: '🏗️', count: '38 Active Projects' },
  { label: 'Healthcare Hubs',     href: '/industries/healthcare',   icon: '🏥', count: '22 Medical Zones' },
  { label: 'Educational Zones',   href: '/industries/education',    icon: '🎓', count: '16 Campus Grids' },
  { label: 'Retail Environments', href: '/industries/retail',       icon: '🛍️', count: '31 Outlets Armed' },
  { label: 'Hospitality Sites',   href: '/industries/hospitality',  icon: '🏨', count: '20 Premier Venues' },
  { label: 'Industrial Plants',   href: '/industries/industrial',   icon: '🏭', count: '10 Logistics Yards' },
];

const stats = [
  { number: '500+',  label: 'Clients Protected',       sub: 'Enterprise Globals' },
  { number: '24/7',  label: 'Monitoring Coverage',      sub: 'Zero Interval Lag' },
  { number: '98%',   label: 'Incident Detection Rate', sub: 'AI-Assisted Precision' },
  { number: '<30s',  label: 'Average Response Time',   sub: 'Instant Dispatch Link' },
];

const steps = [
  {
    step: '01',
    title: 'Structural Consultation',
    desc: 'We map out site bounds, inspect dead angles, and design a customized telemetry network blueprint.',
  },
  {
    step: '02',
    title: 'Secure Loop Integration',
    desc: 'Our engineers bridge your camera feeds onto our end-to-end encrypted cloud monitoring platform.',
  },
  {
    step: '03',
    title: 'Live Tactical Oversight',
    desc: 'Control room units inspect lines continuously, parsing anomalies in real-time.',
  },
  {
    step: '04',
    title: 'Immediate Neutralization',
    desc: 'When threats cross borders, tactical dispatch lines initialize and lock down structures.',
  },
];

const testimonials = [
  {
    name: 'James Harrington',
    role: 'Operations Manager, BuildCo',
    text: 'BlueMond cut our construction site inventory loss by over 80% inside ninety days. Their tracking room alerts authorities faster than we ever thought possible.',
    initial: 'J',
    stars: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Retail Chain Owner',
    text: 'Having BlueMond surveillance running on our stores overnight has saved us tens of thousands in structural shrinkage. The setup pays for itself weekly.',
    initial: 'S',
    stars: 4,
  },
  {
    name: 'Dr. Khalid Ansari',
    role: 'Facilities Director, MedTrust',
    text: 'The discretion and total line accuracy their surveillance operators display inside our psychiatric facility nodes is elite. A standard of its own.',
    initial: 'K',
    stars: 4,
  },
];

/* ─── SCROLL ANIMATION HOOK ──────────────────────────────── */

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

/* ─── ANIMATED COUNTER ───────────────────────────────────── */

function AnimatedCounter({
  target,
  visible,
}: {
  target: string;
  visible: boolean;
}) {
  const [count, setCount] = useState('0');

  useEffect(() => {
    if (!visible) return;

    const isSpecial =
      target === '24/7' ||
      target === '<30s' ||
      target === '98%' ||
      target === '500+';

    if (isSpecial) {
      setCount(target);
      return;
    }

    let start = 0;
    const end = parseInt(target, 10);

    if (isNaN(end)) {
      setCount(target);
      return;
    }

    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start + (target.includes('%') ? '%' : '+'));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [visible, target]);

  return <span>{count}</span>;
}

/* ─── ARROW SVG HELPER ───────────────────────────────────── */

function ArrowRight({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ChevronRight({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

// CheckIcon definition linked cleanly
function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="3.5"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function StarIcon({ color }: { color: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* ─── MAIN PAGE COMPONENT ────────────────────────────────── */

export default function HomePage() {
  const [statsRef,        statsVisible]        = useScrollReveal();
  const [whyRef,          whyVisible]          = useScrollReveal();
  const [servicesRef,     servicesVisible]     = useScrollReveal();
  const [industriesRef,   industriesVisible]   = useScrollReveal();
  const [stepsRef,        stepsVisible]        = useScrollReveal();
  const [testimonialsRef, testimonialsVisible] = useScrollReveal();
  const [ctaRef,          ctaVisible]          = useScrollReveal();

  return (
    <>
      <style>{`
        .bm-services-flex-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          width: 100%;
        }
        .bm-services-flex-container .service-card {
          width: calc(33.333% - 1.34rem);
          min-width: 300px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          height: auto;
          box-sizing: border-box;
          text-decoration: none; /* Link styling reset */
          color: inherit;
        }
        
        @media (max-width: 1024px) {
          .bm-services-flex-container .service-card {
            width: calc(50% - 1rem);
          }
        }
        @media (max-width: 680px) {
          .bm-services-flex-container .service-card {
            width: 100%;
          }
        }
      `}</style>

      <section
        style={{
          position: 'relative',
          minHeight: '100svh',
          background: 'var(--white)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          paddingTop: 'clamp(5rem, 10vw, 7rem)',
          paddingBottom: 'clamp(6rem, 12vw, 9rem)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            pointerEvents: 'none',
            opacity: 0.22,
          }}
        />
        <div
          className="hero-blue-block"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: '50%',
            background: 'linear-gradient(135deg, #060a3b 0%, #0c1f7c 45%, #0d38d2 100%)',
            clipPath: 'polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)',
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.18,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: '10%',
              top: '50%',
              transform: 'translateY(-50%)',
              animation: 'float 5s ease-in-out infinite',
              opacity: 0.12,
              fontSize: 'clamp(6rem, 12vw, 14rem)',
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            🛡️
          </div>
        </div>

        <div
          style={{
            maxWidth: '1440px',
            width: '100%',
            margin: '0 auto',
            padding: '0 clamp(1.25rem, 5vw, 3.5rem)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <div className="live-badge hero-label" style={{ marginBottom: '1.5rem' }}>
              <span className="dot" />
              Live Monitoring Active — 24/7 Operations
            </div>

            <h1
              className="hero-h1"
              style={{
                fontFamily: 'var(--bm-font-head)',
                fontSize: 'clamp(2.6rem, 6vw, 5.8rem)',
                color: 'var(--blue-royal-dark)',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                lineHeight: 1.0,
                fontWeight: 900,
              }}
            >
              Your Property.
              <br />
              <span style={{ color: 'var(--blue-royal)' }}>Our Eyes.</span>
              <br />
              <span style={{ fontSize: '0.85em', fontWeight: 700 }}>24 / 7.</span>
            </h1>

            <p
              className="hero-para"
              style={{
                fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
                lineHeight: 1.8,
                color: 'var(--gray-mid)',
                marginBottom: '2.5rem',
                fontWeight: 500,
                maxWidth: '520px',
              }}
            >
              BlueMond Solutions implements continuous enterprise-grade
              surveillance operations. We monitor boundaries, eliminate
              structural human lag, and neutralize terminal hazards within
              seconds.
            </p>

            <div
              className="hero-btns"
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <Link href="/request-quote" className="btn-primary">
                <span>Connect Command Room</span>
                <ArrowRight />
              </Link>
              <Link href="/services" className="btn-outline">
                Surveillance Matrix
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hero-badge hero-stat-badge"
          style={{
            position: 'absolute',
            right: 'clamp(1rem, 4%, 3rem)',
            bottom: 'clamp(1.5rem, 5%, 3rem)',
            zIndex: 2,
            background: 'white',
            padding: '1.25rem 1.75rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
          }}
        >
          <div style={{ fontSize: '1.75rem' }} aria-hidden="true">⚡</div>
          <div>
            <div
              style={{
                fontFamily: 'var(--bm-font-head)',
                fontSize: '1.6rem',
                fontWeight: 900,
                color: 'var(--blue-royal)',
                lineHeight: 1,
              }}
            >
              {'<30s'}
            </div>
            <div
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                color: 'var(--gray-mid)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginTop: '3px',
              }}
            >
              Avg Response Time
            </div>
          </div>
        </div>

        <div
          className="hero-scroll-indicator"
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: 'clamp(1.25rem, 5vw, 3.5rem)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            opacity: 0,
            animation: 'fadeIn 1s 1.5s forwards',
          }}
          aria-hidden="true"
        >
          <div style={{ width: '1px', height: '36px', background: 'var(--blue-royal)' }} />
          <span
            style={{
              fontFamily: 'var(--bm-font-head)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--blue-royal)',
            }}
          >
            Scroll to explore
          </span>
        </div>
      </section>

      <section
        ref={statsRef}
        style={{
          background: 'var(--white)',
          padding: 'clamp(3rem, 6vw, 5.5rem) clamp(1.5rem, 5vw, 3.5rem)',
          borderTop: '1px solid var(--gray-light)',
          borderBottom: '1px solid var(--gray-light)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="stat-card"
                style={{
                  opacity: statsVisible ? 1 : 0,
                  animation: statsVisible
                    ? `fadeUp 0.6s ${i * 0.12}s cubic-bezier(0.16,1,0.3,1) forwards`
                    : 'none',
                }}
              >
                <div className="stat-number">
                  <AnimatedCounter target={s.number} visible={statsVisible} />
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--blue-royal-dark)',
                    marginTop: '0.3rem',
                    fontFamily: 'var(--bm-font-head)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: '0.73rem',
                    fontWeight: 600,
                    color: 'var(--gray-mid)',
                    marginTop: '3px',
                    letterSpacing: '0.03em',
                  }}
                >
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={whyRef}
        style={{
          background: 'var(--off-white)',
          padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 3.5rem)',
          borderBottom: '1px solid var(--gray-light)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(3rem, 6vw, 6rem)',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                opacity: whyVisible ? 1 : 0,
                animation: whyVisible
                  ? 'slideRight 0.8s 0.1s cubic-bezier(0.16,1,0.3,1) forwards'
                  : 'none',
              }}
            >
              <div className="section-label">Operational Security Layer</div>
              <h2
                className="section-title"
                style={{ marginTop: '0.75rem', marginBottom: '1.75rem' }}
              >
                Tactical Redundancy Built For High Risks
              </h2>
              <p
                style={{
                  color: 'var(--gray-dark)',
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  marginBottom: '2.5rem',
                }}
              >
                On-site guard profiles are prone to split-second blindspots and
                local layout limits. BlueMond runs a central command network
                that locks down property coordinates continuously with digital
                verification systems.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'SIA-certified operator squads managing line checkpoints 24/7',
                  'Encrypted real-time data streaming with absolute storage isolation',
                  'Automated threat indicators scaling multi-site perimeter arrays instantly',
                ].map((point, i) => (
                  <div key={i} className="why-point">
                    <div className="why-check">
                      <CheckIcon />
                    </div>
                    <span
                      style={{
                        color: 'var(--gray-dark)',
                        fontWeight: 600,
                        fontSize: '0.93rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                opacity: whyVisible ? 1 : 0,
                animation: whyVisible
                  ? 'slideLeft 0.8s 0.25s cubic-bezier(0.16,1,0.3,1) forwards'
                  : 'none',
              }}
            >
              <div
                style={{
                  background: 'var(--blue-royal)',
                  padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(2rem, 4vw, 3.5rem)',
                  position: 'relative',
                  boxShadow: '0 30px 70px rgba(0,47,167,0.22)',
                  transition:
                    'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.025) translateY(-4px)';
                  e.currentTarget.style.boxShadow =
                    '0 40px 90px rgba(0,47,167,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 30px 70px rgba(0,47,167,0.22)';
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.05,
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                  aria-hidden="true"
                />

                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }} aria-hidden="true">
                  🛡️
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--bm-font-head)',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    color: 'white',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    fontWeight: 900,
                  }}
                >
                  Centralized Threat Operations Deck
                </h3>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.97rem',
                    lineHeight: 1.75,
                    marginBottom: '3.5rem',
                  }}
                >
                  Our highly modernized control architecture intercepts logistics
                  line crossbreaks without latency blockages, 365 days a year.
                </p>

                <div
                  style={{
                    padding: '1.25rem 0 1.25rem 1.75rem',
                    borderLeft: '4px solid rgba(255,255,255,0.5)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.12em',
                      color: 'rgba(255,255,255,0.7)',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      marginBottom: '4px',
                    }}
                  >
                    Telemetry Latency Limit
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--bm-font-head)',
                      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                      fontWeight: 900,
                      color: 'white',
                      lineHeight: 1,
                    }}
                  >
                    Sub 30 Seconds Live
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={servicesRef}
        style={{
          background: 'var(--white)',
          padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 3.5rem)',
          borderBottom: '1px solid var(--gray-light)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 'clamp(3rem, 5vw, 5rem)',
              flexWrap: 'wrap',
              gap: '2rem',
              opacity: servicesVisible ? 1 : 0,
              animation: servicesVisible
                ? 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards'
                : 'none',
            }}
          >
            <div>
              <div className="section-label">Core System Frameworks</div>
              <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
                Our Security Services
              </h2>
            </div>
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>

          {/* ⚡ FIXED: Flexbox components dynamically wrapped with dynamic Next.js Link logic */}
          <div className="bm-services-flex-container">
            {services.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="service-card"
                style={{
                  opacity: servicesVisible ? 1 : 0,
                  animation: servicesVisible
                    ? `scaleIn 0.55s ${0.05 + i * 0.07}s cubic-bezier(0.16,1,0.3,1) forwards`
                    : 'none',
                }}
              >
                <div className="icon-wrap" aria-hidden="true">{s.icon}</div>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-desc" style={{ flexGrow: 1 }}>{s.desc}</p>
                <span className="card-cta">
                  Explore Service
                  <ChevronRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={industriesRef}
        style={{
          background: 'var(--blue-royal)',
          padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 3.5rem)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 'clamp(3rem, 5vw, 5rem)',
              flexWrap: 'wrap',
              gap: '2rem',
              opacity: industriesVisible ? 1 : 0,
              animation: industriesVisible
                ? 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards'
                : 'none',
            }}
          >
            <div>
              <div
                className="section-label"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                Active Perimeter Zones
              </div>
              <h2
                className="section-title"
                style={{ color: 'white', marginTop: '0.5rem' }}
              >
                Sectors Under Surveillance
              </h2>
            </div>
            <Link href="/industries" className="btn-white-outline">
              View All Segments
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {industries.map((ind, i) => (
              <Link
                key={i}
                href={ind.href}
                className="industry-card"
                style={{
                  opacity: industriesVisible ? 1 : 0,
                  animation: industriesVisible
                    ? `scaleIn 0.55s ${0.05 + i * 0.06}s cubic-bezier(0.16,1,0.3,1) forwards`
                    : 'none',
                }}
              >
                <span className="ind-icon" aria-hidden="true">{ind.icon}</span>
                <div>
                  <div className="ind-label">{ind.label}</div>
                  <div className="ind-count">{ind.count}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={stepsRef}
        style={{
          background: 'var(--white)',
          padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 3.5rem)',
          borderBottom: '1px solid var(--gray-light)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              marginBottom: 'clamp(3rem, 5vw, 5rem)',
              opacity: stepsVisible ? 1 : 0,
              animation: stepsVisible
                ? 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards'
                : 'none',
            }}
          >
            <div className="section-label">Pipeline System Implementation</div>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
              How Deployment Works
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '2px',
              background: 'var(--gray-light)',
              position: 'relative',
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                className="step-card"
                style={{
                  opacity: stepsVisible ? 1 : 0,
                  animation: stepsVisible
                    ? `fadeUp 0.6s ${0.1 + i * 0.12}s cubic-bezier(0.16,1,0.3,1) forwards`
                    : 'none',
                }}
              >
                <div className="step-num">{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>

                {i < steps.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      right: '-12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 10,
                      width: '24px',
                      height: '24px',
                      background: 'var(--blue-royal)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-hidden="true"
                  >
                    <ChevronRight size={10} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={testimonialsRef}
        style={{
          background: 'var(--off-white)',
          padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 3.5rem)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              textAlign: 'center',
              marginBottom: 'clamp(3rem, 6vw, 6rem)',
              opacity: testimonialsVisible ? 1 : 0,
              animation: testimonialsVisible
                ? 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards'
                : 'none',
            }}
          >
            <div
              className="section-label"
              style={{ justifyContent: 'center' }}
            >
              Verified Case Responses
            </div>
            <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
              Trusted Operational Feedback
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`testi-card ${i === 1 ? 'dark' : 'light'}`}
                style={{
                  opacity: testimonialsVisible ? 1 : 0,
                  animation: testimonialsVisible
                    ? `fadeUp 0.65s ${0.1 + i * 0.14}s cubic-bezier(0.16,1,0.3,1) forwards`
                    : 'none',
                }}
              >
                <div
                  style={{ display: 'flex', gap: '4px', marginBottom: '2rem' }}
                  aria-label={`${t.stars} out of 5 stars`}
                >
                  {Array.from({ length: t.stars }).map((_, idx) => (
                    <StarIcon
                      key={idx}
                      color={
                        i === 1 ? 'rgba(255,255,255,0.9)' : 'var(--blue-royal)'
                      }
                    />
                  ))}
                </div>

                <p className="testi-text">&ldquo;{t.text}&rdquo;</p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                  }}
                >
                  <div
                    className="testi-avatar"
                    aria-hidden="true"
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        style={{
          background: 'var(--blue-royal)',
          padding: 'clamp(5rem, 9vw, 9rem) clamp(1.5rem, 5vw, 3.5rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-5%',
            width: '35%',
            height: '140%',
            background: 'rgba(255,255,255,0.03)',
            transform: 'skewX(-8deg)',
          }}
          aria-hidden="true"
        />

        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            opacity: ctaVisible ? 1 : 0,
            animation: ctaVisible
              ? 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards'
              : 'none',
          }}
        >
          <div
            className="section-label"
            style={{ color: 'rgba(255,255,255,0.7)', justifyContent: 'center' }}
          >
            Secure Telemetry Loop
          </div>

          <h2
            style={{
              fontFamily: 'var(--bm-font-head)',
              fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1,
              margin: '1.5rem 0 2rem',
              textTransform: 'uppercase',
            }}
          >
            Ready to Connect
            <br />
            <span className="shimmer-text">Live Operations Surveillance?</span>
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              lineHeight: 1.75,
              marginBottom: '4rem',
              fontWeight: 400,
            }}
          >
            Establish high-speed tactical feeds. Connect to our operations
            center engineering desk for a comprehensive site telemetry layout
            audit today.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/request-quote"
              className="btn-primary"
              style={{ background: 'white', color: 'var(--blue-royal)' }}
            >
              <span>Request Free Consultation</span>
              <ChevronRight size={15} />
            </Link>
            <Link href="/contact" className="btn-white-outline">
              <span>Contact Strategy Room</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}