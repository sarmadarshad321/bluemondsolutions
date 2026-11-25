// 'use client';

// import { useState, useEffect } from 'react';
// import Link from "next/link";
// import { resourcesPage } from "@/lib/siteData";

// const resourceCategories = [
//   {
//     title: 'Security Guides',
//     description: 'Foundational and advanced playbooks for building strong monitoring programs.',
//   },
//   {
//     title: 'Best Practices',
//     description: 'Practical recommendations for incident response, monitoring architecture, and uptime reliability.',
//   },
//   {
//     title: 'Checklists',
//     description: 'Actionable lists to help your team prepare, deploy, and review security operations.',
//   },
// ];

// export default function ResourcesPage() {
//   const [form, setForm] = useState({ name: '', email: '', interest: 'Security Operations Guide' });
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [showToast, setShowToast] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     setError(null);
//   };

//   // Toast auto-hide custom dynamic tracker
//   useEffect(() => {
//     if (showToast) {
//       const timer = setTimeout(() => setShowToast(false), 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [showToast]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.name.trim() || !form.email.trim()) {
//       setError('Please enter your name and email to receive the requested resource.');
//       return;
//     }
//     setSubmitted(true);
//     setShowToast(true);
//     setForm({ name: '', email: '', interest: 'Security Operations Guide' });
//   };

//   return (
//     <main style={{ padding: '0 clamp(1rem, 4vw, 2rem) 5rem', background: '#fafafa', overflowX: 'hidden' }}>
//       <style>{`
//         /* ── TOAST LAYER ANIMATION ── */
//         .bm-toast {
//           position: fixed;
//           top: 20px;
//           right: 20px;
//           background: #ffffff;
//           border-left: 4px solid #0f3ad6;
//           box-shadow: 0 10px 30px rgba(15, 58, 214, 0.15);
//           border-radius: 8px;
//           padding: 1rem 1.5rem;
//           z-index: 9999;
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           transform: translateX(120%);
//           transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//         }
//         .bm-toast.show {
//           transform: translateX(0);
//         }

//         /* ── PREMIUM INTERACTIVE HOVER CARDS ── */
//         .bm-resource-card {
//           background: #ffffff;
//           border: 1px solid #e2e8f0;
//           border-radius: 16px;
//           transition: transform 0.3s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
//         }
//         .bm-resource-card:hover {
//           transform: translateY(-4px);
//           border-color: rgba(15, 58, 214, 0.25);
//           box-shadow: 0 12px 24px rgba(13, 27, 69, 0.05);
//         }

//         /* ── PREMIUM INLINE INPUTS ── */
//         .bm-field-input {
//           padding: 0.95rem 1rem;
//           border: 1px solid #e2e8f0;
//           border-radius: 12px;
//           outline: none;
//           background: #ffffff;
//           font-family: inherit;
//           font-size: 0.92rem;
//           color: #0d1b45;
//           transition: border-color 0.25s ease, box-shadow 0.25s ease;
//         }
//         .bm-field-input:focus {
//           border-color: #0f3ad6;
//           box-shadow: 0 0 0 4px rgba(15, 58, 214, 0.08);
//         }

//         @media (max-width: 768px) {
//           .bm-toast {
//             left: 1rem;
//             right: 1rem;
//             top: 1rem;
//             max-width: calc(100% - 2rem);
//           }
//           .bm-resource-card {
//             border-radius: 14px;
//           }
//           .bm-field-input {
//             padding: 0.9rem 0.95rem;
//           }
//           .btn-primary,
//           .btn-outline {
//             width: 100%;
//             justify-content: center;
//           }
//         }
//       `}</style>

//       {/* ── Dynamic Floating Toast ── */}
//       <div className={`bm-toast ${showToast ? 'show' : ''}`}>
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f3ad6" strokeWidth="2.5">
//           <polyline points="20 6 9 17 4 12"></polyline>
//         </svg>
//         <div>
//           <strong style={{ display: 'block', color: '#0d1b45', fontSize: '0.9rem' }}>Link Dispatched!</strong>
//           <span style={{ color: '#64748b', fontSize: '0.82rem' }}>Please check your inbox for secure resource documentation.</span>
//         </div>
//       </div>

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
//             Resources
//           </div>
//           <h1 className="section-title" style={{ margin: '0.75rem 0 1.25rem', color: 'white', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.15 }}>
//             {resourcesPage.heading}
//           </h1>
//           <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontSize: '1.05rem', maxWidth: '760px', margin: 0 }}>
//             {resourcesPage.description}
//           </p>
          
//           <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
//             <Link href="/request-quote" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 14px rgba(15, 58, 214, 0.3)' }}>
//               Request a Quote
//             </Link>
//             <Link href="/contact" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
//               Contact Support
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── Download Center ── */}
//       <section style={{ maxWidth: '1180px', margin: '5rem auto 0' }}>
//         <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Download Center</div>
//         <h2 className="section-title" style={{ margin: '0.5rem 0 2.5rem', color: '#0d1b45', fontWeight: 800 }}>
//           Free resources for security leaders
//         </h2>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>
//           {resourceCategories.map((item) => (
//             <div key={item.title} className="bm-resource-card" style={{ padding: '2.25rem 2rem' }}>
//               <h3 className="card-title" style={{ color: '#0d1b45', margin: '0 0 0.75rem', fontSize: '1.25rem', fontWeight: 700 }}>{item.title}</h3>
//               <p className="card-desc" style={{ color: '#475569', margin: 0, fontSize: '0.92rem', lineHeight: 1.6 }}>{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── Lead Capture Hub ── */}
//       <section style={{ maxWidth: '1180px', margin: '6rem auto 0' }}>
//         <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.02)', borderRadius: '24px', padding: '3rem 2.5rem' }}>
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            
//             <div>
//               <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Lead Capture</div>
//               <h2 className="section-title" style={{ margin: '0.5rem 0 0.75rem', color: '#0d1b45', fontWeight: 800, fontSize: '1.75rem', lineHeight: 1.25 }}>
//                 Get the guide delivered to your inbox
//               </h2>
//               <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
//                 Select the resource that best fits your operational environment and submit your business details. We will send the download gateway links immediately.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
//               {/* Name */}
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
//                 <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Name</label>
//                 <input
//                   name="name"
//                   type="text"
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="Jane Doe"
//                   className="bm-field-input"
//                 />
//               </div>

//               {/* Email */}
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
//                 <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Business Email</label>
//                 <input
//                   name="email"
//                   type="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="you@company.com"
//                   className="bm-field-input"
//                 />
//               </div>

//               {/* Resource Select Dropdown */}
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
//                 <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Select Resource Blueprint</label>
//                 <select
//                   name="interest"
//                   value={form.interest}
//                   onChange={handleChange}
//                   className="bm-field-input"
//                   style={{ appearance: 'none', backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2rem' }}
//                 >
//                   {resourcesPage.items.map((item) => (
//                     <option key={item.label} value={item.label}>{item.label}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Input Validation Errors */}
//               {error && (
//                 <div style={{ color: '#dc2626', fontWeight: 600, fontSize: '0.88rem', background: '#fef2f2', padding: '0.75rem 1rem', borderRadius: '8px', borderLeft: '3px solid #dc2626' }}>
//                   {error}
//                 </div>
//               )}

//               {/* Action Button Strip */}
//               <button 
//                 type="submit" 
//                 className="btn-primary" 
//                 style={{ 
//                   width: '100%', 
//                   padding: '1rem 0', 
//                   justifyContent: 'center', 
//                   boxShadow: '0 4px 12px rgba(15, 58, 214, 0.2)',
//                   cursor: 'pointer'
//                 }}
//               >
//                 Send Download Link
//               </button>
//             </form>

//           </div>
//         </div>
//       </section>

//       {/* ── Coming Soon Section ── */}
//       <section style={{ maxWidth: '1180px', margin: '5rem auto 0', padding: '2.5rem', background: '#ffffff', border: '1px dashed #cbd5e1', borderRadius: '20px' }}>
//         <div className="section-label" style={{ color: '#64748b', fontWeight: 700 }}>Future Resource</div>
//         <h2 className="section-title" style={{ margin: '0.5rem 0 0.75rem', color: '#0d1b45', fontWeight: 800, fontSize: '1.5rem' }}>
//           Premium Intelligence Coming Soon
//         </h2>
//         <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem', maxWidth: '760px', margin: 0 }}>
//           We are preparing specialized corporate security blueprints, autonomous workflow analysis docs, and real-time network perimeter monitoring data analytics logs for enterprise scale subscription profiles.
//         </p>
//       </section>
//     </main>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { resourcesPage } from "@/lib/siteData";

const resourceCategories = [
  {
    title: 'Security Guides',
    description: 'Foundational and advanced playbooks for building strong monitoring programs.',
  },
  {
    title: 'Best Practices',
    description: 'Practical recommendations for incident response, monitoring architecture, and uptime reliability.',
  },
  {
    title: 'Checklists',
    description: 'Actionable lists to help your team prepare, deploy, and review security operations.',
  },
];

export default function ResourcesPage() {
  const [form, setForm] = useState({ name: '', email: '', interest: 'Security Operations Guide' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError('Please enter your name and email to receive the requested resource.');
      return;
    }
    setSubmitted(true);
    setShowToast(true);
    setForm({ name: '', email: '', interest: 'Security Operations Guide' });
  };

  return (
    // FIX 1: Changed padding to 0 0 5rem so the blue header container goes full width edge-to-edge
    <main style={{ padding: '0 0 5rem', background: '#fafafa', overflowX: 'hidden' }}>
      <style>{`
        /* ── TOAST LAYER ANIMATION ── */
        .bm-toast {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #ffffff;
          border-left: 4px solid #0f3ad6;
          box-shadow: 0 10px 30px rgba(15, 58, 214, 0.15);
          border-radius: 8px;
          padding: 1rem 1.5rem;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transform: translateX(120%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bm-toast.show {
          transform: translateX(0);
        }

        /* ── PREMIUM INTERACTIVE HOVER CARDS ── */
        .bm-resource-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          transition: transform 0.3s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .bm-resource-card:hover {
          transform: translateY(-4px);
          border-color: rgba(15, 58, 214, 0.25);
          box-shadow: 0 12px 24px rgba(13, 27, 69, 0.05);
        }

        /* ── PREMIUM INLINE INPUTS ── */
        .bm-field-input {
          padding: 0.95rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          outline: none;
          background: #ffffff;
          font-family: inherit;
          font-size: 0.92rem;
          color: #0d1b45;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .bm-field-input:focus {
          border-color: #0f3ad6;
          box-shadow: 0 0 0 4px rgba(15, 58, 214, 0.08);
        }

        @media (max-width: 768px) {
          .bm-toast {
            left: 1rem;
            right: 1rem;
            top: 1rem;
            max-width: calc(100% - 2rem);
          }
          .bm-resource-card {
            border-radius: 14px;
          }
          .bm-field-input {
            padding: 0.9rem 0.95rem;
          }
          .btn-primary,
          .btn-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* ── Dynamic Floating Toast ── */}
      <div className={`bm-toast ${showToast ? 'show' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f3ad6" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <div>
          <strong style={{ display: 'block', color: '#0d1b45', fontSize: '0.9rem' }}>Link Dispatched!</strong>
          <span style={{ color: '#64748b', fontSize: '0.82rem' }}>Please check your inbox for secure resource documentation.</span>
        </div>
      </div>

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
            Resources
          </div>
          <h1 className="section-title" style={{ margin: '0.75rem 0 1.25rem', color: 'white', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.15 }}>
            {resourcesPage.heading}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontSize: '1.05rem', maxWidth: '760px', margin: 0 }}>
            {resourcesPage.description}
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            <Link href="/request-quote" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 14px rgba(15, 58, 214, 0.3)' }}>
              Request a Quote
            </Link>
            <Link href="/contact" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* ── Download Center ── */}
      {/* FIX 2: Added padding: '0 1.25rem' to prevent elements from hitting the edge of the screen on smaller layouts */}
      <section style={{ maxWidth: '1180px', margin: '5rem auto 0', padding: '0 1.25rem' }}>
        <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Download Center</div>
        <h2 className="section-title" style={{ margin: '0.5rem 0 2.5rem', color: '#0d1b45', fontWeight: 800 }}>
          Free resources for security leaders
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>
          {resourceCategories.map((item) => (
            <div key={item.title} className="bm-resource-card" style={{ padding: '2.25rem 2rem' }}>
              <h3 className="card-title" style={{ color: '#0d1b45', margin: '0 0 0.75rem', fontSize: '1.25rem', fontWeight: 700 }}>{item.title}</h3>
              <p className="card-desc" style={{ color: '#475569', margin: 0, fontSize: '0.92rem', lineHeight: 1.6 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lead Capture Hub ── */}
      <section style={{ maxWidth: '1180px', margin: '6rem auto 0', padding: '0 1.25rem' }}>
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.02)', borderRadius: '24px', padding: '3rem 2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            
            <div>
              <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Lead Capture</div>
              <h2 className="section-title" style={{ margin: '0.5rem 0 0.75rem', color: '#0d1b45', fontWeight: 800, fontSize: '1.75rem', lineHeight: 1.25 }}>
                Get the guide delivered to your inbox
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                Select the resource that best fits your operational environment and submit your business details. We will send the download gateway links immediately.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
              {/* Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Name</label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  className="bm-field-input"
                />
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Business Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="bm-field-input"
                />
              </div>

              {/* Resource Select Dropdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Select Resource Blueprint</label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="bm-field-input"
                  style={{ appearance: 'none', backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2rem' }}
                >
                  {resourcesPage.items.map((item) => (
                    <option key={item.label} value={item.label}>{item.label}</option>
                  ))}
                </select>
              </div>

              {/* Input Validation Errors */}
              {error && (
                <div style={{ color: '#dc2626', fontWeight: 600, fontSize: '0.88rem', background: '#fef2f2', padding: '0.75rem 1rem', borderRadius: '8px', borderLeft: '3px solid #dc2626' }}>
                  {error}
                </div>
              )}

              {/* Action Button Strip */}
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ 
                  width: '100%', 
                  padding: '1rem 0', 
                  justifyContent: 'center', 
                  boxShadow: '0 4px 12px rgba(15, 58, 214, 0.2)',
                  cursor: 'pointer'
                }}
              >
                Send Download Link
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* ── Coming Soon Section ── */}
      <section style={{ maxWidth: '1180px', margin: '5rem auto 0', padding: '2.5rem', background: '#ffffff', border: '1px dashed #cbd5e1', borderRadius: '20px' }}>
        <div className="section-label" style={{ color: '#64748b', fontWeight: 700 }}>Future Resource</div>
        <h2 className="section-title" style={{ margin: '0.5rem 0 0.75rem', color: '#0d1b45', fontWeight: 800, fontSize: '1.5rem' }}>
          Premium Intelligence Coming Soon
        </h2>
        <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem', maxWidth: '760px', margin: 0 }}>
          We are preparing specialized corporate security blueprints, autonomous workflow analysis docs, and real-time network perimeter monitoring data analytics logs for enterprise scale subscription profiles.
        </p>
      </section>
    </main>
  );
}