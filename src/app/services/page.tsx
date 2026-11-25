// import Link from "next/link";
// import { services } from "@/lib/siteData";

// const serviceBenefits = [
//   {
//     title: 'Rapid Deployment',
//     desc: 'Coverage that can be live in days with proven surveillance workflows and operational support.',
//   },
//   {
//     title: 'Industry Expertise',
//     desc: 'Service teams built for construction, retail, residential, healthcare, hospitality, and more.',
//   },
//   {
//     title: 'Integrated Monitoring',
//     desc: 'Watch, verify, and report through one security ecosystem that removes false alarms and speeds response.',
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <main style={{ padding: '0 2rem 4rem' }}>
//       <section
//         style={{
//           position: 'relative',
//           overflow: 'hidden',
//           width: '100%',
//           margin: 0,
//           padding: 'clamp(4.5rem, 11vw, 7.5rem) clamp(1.25rem, 4vw, 2.5rem) clamp(4rem, 10vw, 5.5rem)',
//           background: 'linear-gradient(135deg, #060a3b 0%, #0c1f7c 45%, #0d38d2 100%)',
//         }}
//       >
//         <div
//           aria-hidden="true"
//           style={{
//             position: 'absolute',
//             inset: 0,
//             backgroundImage:
//               'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
//             backgroundSize: '48px 48px',
//             opacity: 0.18,
//             pointerEvents: 'none',
//           }}
//         />
//         <div style={{ position: 'relative', zIndex: 1, maxWidth: '1440px', margin: '0 auto' }}>
//           <div className="section-label" style={{ color: 'rgba(255,255,255,0.85)' }}>Services</div>
//           <h1 className="section-title" style={{ margin: '1rem 0 1rem', color: 'white' }}>
//             Security Services Built to Scale
//           </h1>
//         </div>
//         <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, maxWidth: '760px' }}>
//           BlueMond offers a complete suite of remote security services designed to protect people, property, and continuity of operations across industries.
//         </p>
//         <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
//           <Link href="/request-quote" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
//             Request a Quote
//           </Link>
//           <Link href="/contact" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
//             Contact Our Team
//           </Link>
//         </div>
//       </section>

//       <section style={{ maxWidth: '1180px', margin: '0 auto', marginTop: '4rem' }}>
//         <div className="section-label">Why Choose Us</div>
//         <h2 className="section-title" style={{ margin: '1rem 0 2rem' }}>
//           Tailored Monitoring for Every Operation
//         </h2>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
//           {serviceBenefits.map((item) => (
//             <div key={item.title} className="service-card" style={{ padding: '1.75rem' }}>
//               <h2 className="card-title">{item.title}</h2>
//               <p className="card-desc">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section style={{ maxWidth: '1180px', margin: '0 auto', marginTop: '4rem' }}>
//         <div className="section-label">Service Catalog</div>
//         <h2 className="section-title" style={{ margin: '1rem 0 2rem' }}>
//           Choose the service that matches your site
//         </h2>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
//           {services.map((service) => (
//             <Link key={service.slug} href={service.href} className="service-card">
//               <div className="icon-wrap">{service.icon}</div>
//               <h2 className="card-title">{service.title}</h2>
//               <p className="card-desc">{service.summary}</p>
//               <div className="card-cta">Explore Service</div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }


import Link from "next/link";
import { services } from "@/lib/siteData";

const serviceBenefits = [
  {
    title: 'Rapid Deployment',
    desc: 'Coverage that can be live in days with proven surveillance workflows and operational support.',
  },
  {
    title: 'Industry Expertise',
    desc: 'Service teams built for construction, retail, residential, healthcare, hospitality, and more.',
  },
  {
    title: 'Integrated Monitoring',
    desc: 'Watch, verify, and report through one security ecosystem that removes false alarms and speeds response.',
  },
];

export default function ServicesPage() {
  return (
    <main style={{ padding: '0 0 4rem' }}> 
      
      {/* SECTION 1: HERO BANNER (Full width background, no white spaces on sides) */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          margin: 0,
          padding: 'clamp(4.5rem, 11vw, 7.5rem) clamp(1.25rem, 4vw, 2.5rem) clamp(4rem, 10vw, 5.5rem)',
          background: 'linear-gradient(135deg, #060a3b 0%, #0c1f7c 45%, #0d38d2 100%)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: 0.18,
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1440px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.85)' }}>Services</div>
          <h1 className="section-title" style={{ margin: '1rem 0 1rem', color: 'white' }}>
            Security Services Built to Scale
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, maxWidth: '760px', margin: '0' }}>
            BlueMond offers a complete suite of remote security services designed to protect people, property, and continuity of operations across industries.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/request-quote" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Request a Quote
            </Link>
            {/* Explicit color: 'white' fixes text visibility issue */}
            <Link href="/contact" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE US */}
      <section style={{ maxWidth: '1240px', margin: '0 auto', marginTop: '4rem', padding: '0 1.25rem' }}>
        <div className="section-label">Why Choose Us</div>
        <h2 className="section-title" style={{ margin: '1rem 0 2rem' }}>
          Tailored Monitoring for Every Operation
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {serviceBenefits.map((item) => (
            <div key={item.title} className="service-card" style={{ padding: '1.75rem' }}>
              <h2 className="card-title">{item.title}</h2>
              <p className="card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: SERVICE CATALOG (Exact 3+2 Home Page Layout) */}
      <section style={{ maxWidth: '1240px', margin: '0 auto', marginTop: '4rem', padding: '0 1.25rem' }}>
        <div className="section-label">Service Catalog</div>
        <h2 className="section-title" style={{ margin: '1rem 0 2rem' }}>
          Choose the service that matches your site
        </h2>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', // Row wrap hone par bottom cards ko bilkul center karega
          gap: '1.5rem' 
        }}>
          {services.map((service) => (
            <Link 
              key={service.slug} 
              href={service.href} 
              className="service-card"
              style={{ 
                // Laptop par maximum 3 cards per row set karega, baki 2 niche line mein center ho jayenge
                flex: '1 1 calc(33.333% - 1.5rem)', 
                minWidth: '280px', 
                maxWidth: '380px', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textDecoration: 'none'
              }}
            >
              <div>
                <div className="icon-wrap">{service.icon}</div>
                <h2 className="card-title">{service.title}</h2>
                <p className="card-desc">{service.summary}</p>
              </div>
              <div className="card-cta" style={{ marginTop: '2rem' }}>Explore Service</div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}