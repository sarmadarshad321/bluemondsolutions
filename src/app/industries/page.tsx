// // import Link from "next/link";
// // import { industries } from "@/lib/siteData";

// // const industryReasons = [
// //   {
// //     title: 'Sector-Specific Coverage',
// //     desc: 'We adapt monitoring, reporting, and escalation to the distinct risks of residential, commercial, healthcare, and industrial environments.',
// //   },
// //   {
// //     title: 'Operational Intelligence',
// //     desc: 'Each industry page is backed by monitoring playbooks that reflect your site workflows and compliance demands.',
// //   },
// //   {
// //     title: 'Command Center Integration',
// //     desc: 'A single operations platform connects your camera feeds, alerts, and incident logs for better visibility across all sites.',
// //   },
// // ];

// // export default function IndustriesPage() {
// //   return (
// //     <main style={{ padding: '0 2rem 4rem' }}>
// //       <section
// //         style={{
// //           position: 'relative',
// //           overflow: 'hidden',
// //           width: 'calc(100% + 4rem)',
// //           margin: '0 -2rem',
// //           padding: '9rem 2.5rem 8rem',
// //           background: 'linear-gradient(135deg, #060a3b 0%, #0c1f7c 45%, #0d38d2 100%)',
// //         }}
// //       >
// //         <div
// //           aria-hidden="true"
// //           style={{
// //             position: 'absolute',
// //             inset: 0,
// //             backgroundImage:
// //               'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
// //             backgroundSize: '48px 48px',
// //             opacity: 0.18,
// //             pointerEvents: 'none',
// //           }}
// //         />
// //         <div style={{ position: 'relative', zIndex: 1, maxWidth: '1440px', margin: '0 auto' }}>
// //           <div className="section-label" style={{ color: 'rgba(255,255,255,0.85)' }}>Industries</div>
// //           <h1 className="section-title" style={{ margin: '1rem 0 1rem', color: 'white' }}>
// //             Industry Security Tailored for Your Sector
// //           </h1>
// //         </div>
// //         <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, maxWidth: '760px' }}>
// //           From residential estate protection to complex retail and industrial environments, BlueMond delivers monitoring solutions built for each market.
// //         </p>
// //         <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
// //           <Link href="/request-quote" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
// //             Request a Quote
// //           </Link>
// //           <Link href="/services" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
// //             Explore Services
// //           </Link>
// //         </div>
// //       </section>

// //       <section style={{ maxWidth: '1180px', margin: '0 auto', marginTop: '4rem' }}>
// //         <div className="section-label">Why BlueMond</div>
// //         <h2 className="section-title" style={{ margin: '1rem 0 2rem' }}>
// //           Built for every market we serve
// //         </h2>
// //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.5rem' }}>
// //           {industryReasons.map((item) => (
// //             <div key={item.title} className="service-card" style={{ padding: '1.75rem' }}>
// //               <h2 className="card-title">{item.title}</h2>
// //               <p className="card-desc">{item.desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       <section style={{ maxWidth: '1180px', margin: '0 auto', marginTop: '4rem' }}>
// //         <div className="section-label">Sector Pages</div>
// //         <h2 className="section-title" style={{ margin: '1rem 0 2rem' }}>
// //           Explore the industries we support
// //         </h2>
// //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
// //           {industries.map((industry) => (
// //             <Link key={industry.slug} href={industry.href} className="industry-card">
// //               <div className="ind-icon">{industry.icon}</div>
// //               <h2 className="ind-label">{industry.title}</h2>
// //               <div className="ind-count">{industry.summary}</div>
// //             </Link>
// //           ))}
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }


// 'use client';

// import Link from "next/link";
// import { industries } from "@/lib/siteData";

// const industryReasons = [
//   {
//     title: 'Sector-Specific Coverage',
//     desc: 'We adapt monitoring, reporting, and escalation to the distinct risks of residential, commercial, healthcare, and industrial environments.',
//   },
//   {
//     title: 'Operational Intelligence',
//     desc: 'Each industry page is backed by monitoring playbooks that reflect your site workflows and compliance demands.',
//   },
//   {
//     title: 'Command Center Integration',
//     desc: 'A single operations platform connects your camera feeds, alerts, and incident logs for better visibility across all sites.',
//   },
// ];

// export default function IndustriesPage() {
//   return (
//     <main style={{ padding: '0 2rem 5rem', background: '#fafafa' }}>
//       <style>{`
//         /* ── INTERACTIVE HOVER CARDS ── */
//         .bm-industry-card {
//           background: #ffffff;
//           border: 1px solid #e2e8f0;
//           border-radius: 16px;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           text-decoration: none;
//           transition: transform 0.3s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
//         }
//         .bm-industry-card:hover {
//           transform: translateY(-4px);
//           border-color: rgba(15, 58, 214, 0.25);
//           box-shadow: 0 12px 24px rgba(13, 27, 69, 0.05);
//         }

//         /* ── SECTOR EXPLORE SECTIONS ── */
//         .bm-sector-grid-card {
//           background: #ffffff;
//           border: 1px solid #e2e8f0;
//           border-radius: 16px;
//           padding: 2rem;
//           text-decoration: none;
//           display: flex;
//           flex-direction: column;
//           position: relative;
//           transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
//         }
//         .bm-sector-grid-card:hover {
//           border-color: #0f3ad6;
//           background: #ffffff;
//           box-shadow: 0 15px 30px rgba(15, 58, 214, 0.06);
//           transform: translateY(-2px);
//         }
//         .bm-sector-arrow {
//           color: #64748b;
//           transition: transform 0.25s ease, color 0.25s ease;
//         }
//         .bm-sector-grid-card:hover .bm-sector-arrow {
//           transform: translateX(4px);
//           color: #0f3ad6;
//         }
//       `}</style>

//       {/* ── Hero Block ── */}
//       <section
//         style={{
//           position: 'relative',
//           overflow: 'hidden',
//           width: '100%',
//           margin: 0,
//           padding: 'clamp(5rem, 12vw, 8rem) clamp(1.25rem, 4vw, 2.5rem) clamp(4rem, 10vw, 6rem)',
//           background: 'linear-gradient(135deg, #060a3b 0%, #0c1f7c 45%, #0d38d2 100%)',
//         }}
//       >
//         <div
//           aria-hidden="true"
//           style={{
//             position: 'absolute',
//             inset: 0,
//             backgroundImage:
//               'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
//             backgroundSize: '48px 48px',
//             opacity: 0.25,
//             pointerEvents: 'none',
//           }}
//         />
//         <div style={{ position: 'relative', zIndex: 1, maxWidth: '1440px', margin: '0 auto' }}>
//           <div className="section-label" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
//             Industries
//           </div>
//           <h1 className="section-title" style={{ margin: '0.75rem 0 1.25rem', color: 'white', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.15 }}>
//             Industry Security Tailored for Your Sector
//           </h1>
//           <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontSize: '1.05rem', maxWidth: '760px', margin: 0 }}>
//             From residential estate protection to complex retail and industrial environments, BlueMond delivers monitoring solutions built for each market.
//           </p>
          
//           <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
//             <Link href="/request-quote" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 14px rgba(15, 58, 214, 0.3)' }}>
//               Request a Quote
//             </Link>
//             <Link href="/services" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
//               Explore Services
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── Why BlueMond Center ── */}
//       <section style={{ maxWidth: '1180px', margin: '5rem auto 0' }}>
//         <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Why BlueMond</div>
//         <h2 className="section-title" style={{ margin: '0.5rem 0 2.5rem', color: '#0d1b45', fontWeight: 800 }}>
//           Built for every market we serve
//         </h2>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>
//           {industryReasons.map((item) => (
//             <div key={item.title} className="bm-industry-card" style={{ padding: '2.25rem 2rem' }}>
//               <h3 className="card-title" style={{ color: '#0d1b45', margin: '0 0 0.75rem', fontSize: '1.25rem', fontWeight: 700 }}>{item.title}</h3>
//               <p className="card-desc" style={{ color: '#475569', margin: 0, fontSize: '0.92rem', lineHeight: 1.6 }}>{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── Sector Navigation Grid ── */}
//       <section style={{ maxWidth: '1180px', margin: '6rem auto 0' }}>
//         <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Sector Pages</div>
//         <h2 className="section-title" style={{ margin: '0.5rem 0 2.5rem', color: '#0d1b45', fontWeight: 800 }}>
//           Explore the industries we support
//         </h2>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.75rem' }}>
//           {industries.map((industry) => (
//             <Link key={industry.slug} href={industry.href} className="bm-sector-grid-card">
//               <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
//                 <div className="ind-icon" style={{ color: '#0f3ad6', background: 'rgba(15, 58, 214, 0.06)', padding: '0.75rem', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
//                   {industry.icon}
//                 </div>
//                 <div className="bm-sector-arrow" style={{ fontWeight: 700, fontSize: '1.25rem' }}>→</div>
//               </div>
              
//               <h3 className="ind-label" style={{ color: '#0d1b45', fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.5rem' }}>
//                 {industry.title}
//               </h3>
              
//               <p className="ind-count" style={{ color: '#64748b', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>
//                 {industry.summary}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }


'use client';

import Link from "next/link";
import { industries } from "@/lib/siteData";

const industryReasons = [
  {
    title: 'Sector-Specific Coverage',
    desc: 'We adapt monitoring, reporting, and escalation to the distinct risks of residential, commercial, healthcare, and industrial environments.',
  },
  {
    title: 'Operational Intelligence',
    desc: 'Each industry page is backed by monitoring playbooks that reflect your site workflows and compliance demands.',
  },
  {
    title: 'Command Center Integration',
    desc: 'A single operations platform connects your camera feeds, alerts, and incident logs for better visibility across all sites.',
  },
];

export default function IndustriesPage() {
  return (
    // FIX 1: Main spacing changed to '0 0 5rem' so the blue gradient header container expands full-width edge-to-edge
    <main style={{ padding: '0 0 5rem', background: '#fafafa' }}>
      <style>{`
        /* ── INTERACTIVE HOVER CARDS ── */
        .bm-industry-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          text-decoration: none;
          transition: transform 0.3s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .bm-industry-card:hover {
          transform: translateY(-4px);
          border-color: rgba(15, 58, 214, 0.25);
          box-shadow: 0 12px 24px rgba(13, 27, 69, 0.05);
        }

        /* ── SECTOR EXPLORE SECTIONS ── */
        .bm-sector-grid-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 2rem;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bm-sector-grid-card:hover {
          border-color: #0f3ad6;
          background: #ffffff;
          box-shadow: 0 15px 30px rgba(15, 58, 214, 0.06);
          transform: translateY(-2px);
        }
        .bm-sector-arrow {
          color: #64748b;
          transition: transform 0.25s ease, color 0.25s ease;
        }
        .bm-sector-grid-card:hover .bm-sector-arrow {
          transform: translateX(4px);
          color: #0f3ad6;
        }
      `}</style>

      {/* ── Hero Block ── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          margin: 0,
          padding: 'clamp(5rem, 12vw, 8rem) clamp(1.25rem, 4vw, 2.5rem) clamp(4rem, 10vw, 6rem)',
          background: 'linear-gradient(135deg, #060a3b 0%, #0c1f7c 45%, #0d38d2 100%)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: 0.25,
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1440px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
            Industries
          </div>
          <h1 className="section-title" style={{ margin: '0.75rem 0 1.25rem', color: 'white', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.15 }}>
            Industry Security Tailored for Your Sector
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontSize: '1.05rem', maxWidth: '760px', margin: 0 }}>
            From residential estate protection to complex retail and industrial environments, BlueMond delivers monitoring solutions built for each market.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            <Link href="/request-quote" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 14px rgba(15, 58, 214, 0.3)' }}>
              Request a Quote
            </Link>
            <Link href="/services" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why BlueMond Center ── */}
      {/* FIX 2: Added safety margin container padding: '0 1.25rem' so text/cards do not collide with viewport edge */}
      <section style={{ maxWidth: '1180px', margin: '5rem auto 0', padding: '0 1.25rem' }}>
        <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Why BlueMond</div>
        <h2 className="section-title" style={{ margin: '0.5rem 0 2.5rem', color: '#0d1b45', fontWeight: 800 }}>
          Built for every market we serve
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>
          {industryReasons.map((item) => (
            <div key={item.title} className="bm-industry-card" style={{ padding: '2.25rem 2rem' }}>
              <h3 className="card-title" style={{ color: '#0d1b45', margin: '0 0 0.75rem', fontSize: '1.25rem', fontWeight: 700 }}>{item.title}</h3>
              <p className="card-desc" style={{ color: '#475569', margin: 0, fontSize: '0.92rem', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sector Navigation Grid ── */}
      <section style={{ maxWidth: '1180px', margin: '6rem auto 0', padding: '0 1.25rem' }}>
        <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Sector Pages</div>
        <h2 className="section-title" style={{ margin: '0.5rem 0 2.5rem', color: '#0d1b45', fontWeight: 800 }}>
          Explore the industries we support
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.75rem' }}>
          {industries.map((industry) => (
            <Link key={industry.slug} href={industry.href} className="bm-sector-grid-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div className="ind-icon" style={{ color: '#0f3ad6', background: 'rgba(15, 58, 214, 0.06)', padding: '0.75rem', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  {industry.icon}
                </div>
                <div className="bm-sector-arrow" style={{ fontWeight: 700, fontSize: '1.25rem' }}>→</div>
              </div>
              
              <h3 className="ind-label" style={{ color: '#0d1b45', fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.5rem' }}>
                {industry.title}
              </h3>
              
              <p className="ind-count" style={{ color: '#64748b', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>
                {industry.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}