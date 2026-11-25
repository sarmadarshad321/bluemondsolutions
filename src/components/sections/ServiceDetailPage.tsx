// import Link from 'next/link';
// import { ServiceItem } from '@/lib/siteData';

// export default function ServiceDetailPage({ service }: { service?: ServiceItem }) {
//   if (!service) {
//     return (
//       <main style={{ padding: '5rem 2rem', textAlign: 'center' }}>
//         <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Service Not Found</h1>
//         <p style={{ color: 'var(--gray-mid)', maxWidth: '640px', margin: '0 auto' }}>
//           The service you requested could not be found. Please return to the services page and select another option.
//         </p>
//       </main>
//     );
//   }

//   return (
//     <main style={{ overflowX: 'hidden' }}>
//       <section
//         style={{
//           background: 'linear-gradient(135deg, var(--blue-royal-dark), var(--blue-royal))',
//           color: 'white',
//           padding: '5rem 2rem 4rem',
//           position: 'relative',
//         }}
//       >
//         <div
//           aria-hidden
//           style={{
//             position: 'absolute',
//             inset: 0,
//             backgroundImage:
//               'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
//             backgroundSize: '48px 48px',
//           }}
//         />
//         <div style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
//           <div style={{ maxWidth: '760px' }}>
//             <div className="live-badge" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}>
//               <span className="dot" />{service.hero.label}
//             </div>
//             <h1 style={{ fontFamily: 'var(--bm-font-head)', fontWeight: 900, fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', lineHeight: 1.05, margin: '1.5rem 0 1.25rem' }}>
//               {service.hero.title}
//             </h1>
//             <p style={{ maxWidth: '640px', color: 'rgba(255,255,255,0.78)', fontSize: '1rem', lineHeight: 1.8 }}>
//               {service.hero.description}
//             </p>
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2.5rem' }}>
//               <Link href="/request-quote" className="btn-primary">
//                 {service.cta.primary}
//               </Link>
//               <Link href="/contact" className="btn-outline">
//                 {service.cta.secondary}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: 'var(--white)' }}>
//         <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
//             <div>
//               <div className="section-label">Overview</div>
//               <h2 className="section-title" style={{ marginBottom: '1rem' }}>{service.summary}</h2>
//               <p style={{ color: 'var(--gray-mid)', lineHeight: 1.8, fontSize: '0.98rem' }}>
//                 {service.hero.description}
//               </p>
//             </div>
//             <div style={{ display: 'grid', gap: '1rem' }}>
//               {service.features.map((feature) => (
//                 <div key={feature.title} className="service-card" style={{ padding: '1.75rem' }}>
//                   <div className="card-title">{feature.title}</div>
//                   <div className="card-desc">{feature.desc}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
//             <div style={{ background: 'var(--off-white)', padding: '2rem', borderRadius: '6px', border: '1px solid var(--gray-light)' }}>
//               <div className="section-label">Why It Works</div>
//               <h3 style={{ fontFamily: 'var(--bm-font-head)', marginTop: '1rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--blue-royal-dark)' }}>
//                 The advantages of BlueMond monitoring
//               </h3>
//               <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--gray-mid)', lineHeight: 1.85 }}>
//                 {service.bullets.map((bullet) => (
//                   <li key={bullet} style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.9rem' }}>
//                     <span style={{ color: 'var(--blue-royal)', fontSize: '1.2rem', lineHeight: 1 }}>•</span>
//                     <span>{bullet}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div style={{ background: 'var(--blue-royal)', color: 'white', padding: '2rem', borderRadius: '6px' }}>
//               <div style={{ fontFamily: 'var(--bm-font-head)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1rem' }}>
//                 Secure Monitoring
//               </div>
//               <h3 style={{ fontFamily: 'var(--bm-font-head)', fontSize: '1.75rem', marginBottom: '1rem' }}>{service.cta.heading}</h3>
//               <p style={{ lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>{service.cta.copy}</p>
//               <Link href="/contact" className="btn-white-outline" style={{ display: 'inline-flex', padding: '0.95rem 1.9rem' }}>
//                 Contact Sales
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


import Link from 'next/link';
import { ServiceItem } from '@/lib/siteData';

export default function ServiceDetailPage({ service }: { service?: ServiceItem }) {
  if (!service) {
    return (
      <main style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Service Not Found</h1>
        <p style={{ color: 'var(--gray-mid)', maxWidth: '640px', margin: '0 auto' }}>
          The service you requested could not be found. Please return to the services page and select another option.
        </p>
      </main>
    );
  }

  return (
    <main style={{ overflowX: 'hidden' }}>
      
      {/* SECTION 1: HERO BANNER (Full width background, no white blocks on sides) */}
      <section
        style={{
          background: 'linear-gradient(135deg, var(--blue-royal-dark), var(--blue-royal))',
          color: 'white',
          padding: 'clamp(5rem, 12vw, 8rem) clamp(1.25rem, 4vw, 2.5rem) clamp(4rem, 10vw, 6rem)',
          position: 'relative',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '760px' }}>
            <div className="live-badge" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', display: 'inline-flex', alignItems: 'center' }}>
              <span className="dot" />{service.hero.label}
            </div>
            <h1 style={{ fontFamily: 'var(--bm-font-head)', fontWeight: 900, fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1.15, margin: '1.5rem 0 1.25rem' }}>
              {service.hero.title}
            </h1>
            <p style={{ maxWidth: '640px', color: 'rgba(255,255,255,0.78)', fontSize: '1rem', lineHeight: 1.8 }}>
              {service.hero.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2.5rem' }}>
              <Link href="/request-quote" className="btn-primary">
                {service.cta.primary}
              </Link>
              {/* FIX: Injected explicit white color for text visibility in normal state */}
              <Link href="/contact" className="btn-outline" style={{ color: '#fff', display: 'inline-flex', alignItems: 'center' }}>
                {service.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTENT INTERNALS */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.25rem', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div>
              <div className="section-label">Overview</div>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>{service.summary}</h2>
              <p style={{ color: 'var(--gray-mid)', lineHeight: 1.8, fontSize: '0.98rem' }}>
                {service.hero.description}
              </p>
            </div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {service.features.map((feature) => (
                <div key={feature.title} className="service-card" style={{ padding: '1.75rem' }}>
                  <div className="card-title">{feature.title}</div>
                  <div className="card-desc">{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'var(--off-white)', padding: '2rem', borderRadius: '6px', border: '1px solid var(--gray-light)' }}>
              <div className="section-label">Why It Works</div>
              <h3 style={{ fontFamily: 'var(--bm-font-head)', marginTop: '1rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--blue-royal-dark)' }}>
                The advantages of BlueMond monitoring
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--gray-mid)', lineHeight: 1.85 }}>
                {service.bullets.map((bullet) => (
                  <li key={bullet} style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.9rem' }}>
                    <span style={{ color: 'var(--blue-royal)', fontSize: '1.2rem', lineHeight: 1 }}>•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: 'var(--blue-royal)', color: 'white', padding: '2rem', borderRadius: '6px' }}>
              <div style={{ fontFamily: 'var(--bm-font-head)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1rem' }}>
                Secure Monitoring
              </div>
              <h3 style={{ fontFamily: 'var(--bm-font-head)', fontSize: '1.75rem', marginBottom: '1rem' }}>{service.cta.heading}</h3>
              <p style={{ lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>{service.cta.copy}</p>
              <Link href="/contact" className="btn-white-outline" style={{ display: 'inline-flex', padding: '0.95rem 1.9rem', color: '#fff', textDecoration: 'none' }}>
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}