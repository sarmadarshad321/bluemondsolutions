// // 'use client';

// // import { useState, useRef, useEffect } from 'react';
// // import Link from 'next/link';
// // import { careersPage } from '@/lib/siteData';

// // const careerBenefits = [
// //   {
// //     title: 'Growth Opportunities',
// //     summary:
// //       'Work with a team that invests in training, leadership development, and certification pathways.',
// //   },
// //   {
// //     title: 'Remote-First Support',
// //     summary:
// //       'Flexible roles that support remote monitoring, field engineering, and hybrid client engagement.',
// //   },
// //   {
// //     title: 'Mission-Driven Culture',
// //     summary:
// //       'Help protect people and property through secure, intelligent operations every day.',
// //   },
// // ];

// // export default function CareersPage() {
// //   const [form, setForm] = useState({ name: '', email: '', role: '', message: '' });
// //   const [resumeFile, setResumeFile] = useState<File | null>(null);
// //   const [submitted, setSubmitted] = useState(false);
// //   const [loading, setLoading]     = useState(false);
// //   const [error, setError]         = useState<string | null>(null);
// //   const [showToast, setShowToast] = useState(false);
// //   const fileInputRef = useRef<HTMLInputElement>(null);

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
// //   ) => {
// //     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// //     setError(null);
// //   };

// //   const handleResume = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0] ?? null;
// //     setResumeFile(file);
// //   };

// //   // Toast auto-hide keeper
// //   useEffect(() => {
// //     if (showToast) {
// //       const timer = setTimeout(() => setShowToast(false), 5000);
// //       return () => clearTimeout(timer);
// //     }
// //   }, [showToast]);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (!form.name.trim() || !form.email.trim() || !form.role.trim()) {
// //       setError('Please complete your name, email, and desired role before submitting.');
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const payload = new FormData();
// //       payload.append('name',    form.name);
// //       payload.append('email',   form.email);
// //       payload.append('role',    form.role);
// //       payload.append('message', form.message);
// //       if (resumeFile) payload.append('resume', resumeFile);

// //       const res = await fetch('/api/apply', { method: 'POST', body: payload });
// //       const json = await res.json();

// //       if (!res.ok) throw new Error(json.error ?? 'Something went wrong.');

// //       setSubmitted(true);
// //       setShowToast(true);
      
// //       // Reset form structure gracefully
// //       setForm({ name: '', email: '', role: '', message: '' });
// //       setResumeFile(null);
// //       if (fileInputRef.current) fileInputRef.current.value = '';
// //     } catch (err: unknown) {
// //       setError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <main style={{ padding: '0 2rem 5rem', background: '#fafafa' }}>
// //       <style>{`
// //         /* ── TOAST ANIMATION LINKERS ── */
// //         .bm-toast {
// //           position: fixed;
// //           top: 24px;
// //           right: 24px;
// //           background: #ffffff;
// //           border-left: 4px solid #0f3ad6;
// //           box-shadow: 0 10px 30px rgba(15, 58, 214, 0.15);
// //           border-radius: 8px;
// //           padding: 1rem 1.5rem;
// //           z-index: 9999;
// //           display: flex;
// //           align-items: center;
// //           gap: 0.75rem;
// //           transform: translateX(120%);
// //           transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
// //         }
// //         .bm-toast.show {
// //           transform: translateX(0);
// //         }

// //         /* ── INTERACTIVE HOVER CARDS ── */
// //         .bm-hover-card {
// //           background: #ffffff;
// //           border: 1px solid #e2e8f0;
// //           border-radius: 16px;
// //           transition: transform 0.3s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
// //         }
// //         .bm-hover-card:hover {
// //           transform: translateY(-4px);
// //           border-color: rgba(15, 58, 214, 0.25);
// //           box-shadow: 0 12px 24px rgba(13, 27, 69, 0.05);
// //         }

// //         /* ── PREMIUM INPUT FIELDS ── */
// //         .bm-input-field {
// //           padding: 0.95rem 1rem;
// //           border: 1px solid #e2e8f0;
// //           border-radius: 12px;
// //           outline: none;
// //           background: #ffffff;
// //           font-family: inherit;
// //           transition: border-color 0.25s ease, box-shadow 0.25s ease;
// //         }
// //         .bm-input-field:focus {
// //           border-color: #0f3ad6;
// //           box-shadow: 0 0 0 4px rgba(15, 58, 214, 0.08);
// //         }
// //       `}</style>

// //       {/* ── Dynamic Floating Toast ── */}
// //       <div className={`bm-toast ${showToast ? 'show' : ''}`}>
// //         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f3ad6" strokeWidth="2.5">
// //           <polyline points="20 6 9 17 4 12"></polyline>
// //         </svg>
// //         <div>
// //           <strong style={{ display: 'block', color: '#0d1b45', fontSize: '0.9rem' }}>Application Sent!</strong>
// //           <span style={{ color: '#64748b', fontSize: '0.82rem' }}>We will contact you within 3-5 business days.</span>
// //         </div>
// //       </div>

// //       {/* ── Hero Block ── */}
// //       <section
// //         style={{
// //           position: 'relative',
// //           overflow: 'hidden',
// //           width: '100%',
// //           margin: 0,
// //           padding: 'clamp(5rem, 12vw, 8rem) clamp(1.25rem, 4vw, 2.5rem) clamp(4rem, 10vw, 6rem)',
// //           background: 'linear-gradient(135deg, #060a3b 0%, #0c1f7c 45%, #0d38d2 100%)',
// //         }}
// //       >
// //         <div
// //           aria-hidden="true"
// //           style={{
// //             position: 'absolute',
// //             inset: 0,
// //             backgroundImage:
// //               'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
// //             backgroundSize: '48px 48px',
// //             opacity: 0.25,
// //             pointerEvents: 'none',
// //           }}
// //         />
// //         <div style={{ position: 'relative', zIndex: 1, maxWidth: '1440px', margin: '0 auto' }}>
// //           <div className="section-label" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
// //             Careers
// //           </div>
// //           <h1 className="section-title" style={{ margin: '0.75rem 0 1.25rem', color: 'white', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.15 }}>
// //             {careersPage.heading}
// //           </h1>
// //           <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontSize: '1.05rem', maxWidth: '760px', margin: 0 }}>
// //             {careersPage.description}
// //           </p>
          
// //           <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
// //             <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 14px rgba(15, 58, 214, 0.3)' }}>
// //               Talk to Talent
// //             </Link>
// //             <Link href="/request-quote" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
// //               Explore Services
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── Why Work With Us ── */}
// //       <section style={{ maxWidth: '1180px', margin: '5rem auto 0' }}>
// //         <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Why Work With Us</div>
// //         <h2 className="section-title" style={{ margin: '0.5rem 0 2.5rem', color: '#0d1b45', fontWeight: 800 }}>
// //           A career in modern security operations
// //         </h2>
// //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>
// //           {careerBenefits.map((item) => (
// //             <div key={item.title} className="bm-hover-card" style={{ padding: '2.25rem 2rem' }}>
// //               <h3 className="card-title" style={{ color: '#0d1b45', margin: '0 0 0.75rem', fontSize: '1.25rem', fontWeight: 700 }}>{item.title}</h3>
// //               <p className="card-desc" style={{ color: '#475569', margin: 0, fontSize: '0.92rem', lineHeight: 1.6 }}>{item.summary}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* ── Open Roles ── */}
// //       <section style={{ maxWidth: '1180px', margin: '6rem auto 0' }}>
// //         <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Open Roles</div>
// //         <h2 className="section-title" style={{ margin: '0.5rem 0 2.5rem', color: '#0d1b45', fontWeight: 800 }}>
// //           Current opportunities at BlueMond
// //         </h2>
// //         <div style={{ display: 'grid', gap: '1.75rem', marginBottom: '4rem' }}>
// //           {careersPage.openings.map((job) => (
// //             <div key={job.role} className="bm-hover-card" style={{ padding: '2.25rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
// //               <div>
// //                 <div className="card-title" style={{ color: '#0d1b45', fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{job.role}</div>
// //                 <p className="card-desc" style={{ color: '#475569', fontSize: '0.95rem', margin: 0, maxWidth: '850px', lineHeight: 1.65 }}>{job.summary}</p>
// //               </div>
// //               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
// //                 <div style={{ color: '#0f3ad6', fontWeight: 700, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
// //                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path><circle cx="12" cy="10" r="3"></circle></svg>
// //                   {job.location}
// //                 </div>
// //                 <button 
// //                   onClick={() => {
// //                     setForm(prev => ({ ...prev, role: job.role }));
// //                     document.getElementById('app-form-block')?.scrollIntoView({ behavior: 'smooth' });
// //                   }}
// //                   className="card-cta" 
// //                   style={{ display: 'inline-flex', background: 'transparent', border: 'none', color: '#0f3ad6', fontWeight: 700, cursor: 'pointer', alignItems: 'center', gap: '0.25rem' }}
// //                 >
// //                   Apply Now →
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* ── Application Form Container ── */}
// //         <div id="app-form-block" style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.02)', borderRadius: '24px', padding: '3rem 2.5rem' }}>
// //           <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Application Form</div>
// //           <h2 className="section-title" style={{ margin: '0.5rem 0 0.75rem', color: '#0d1b45', fontWeight: 800 }}>
// //             Submit your application
// //           </h2>
// //           <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem', maxWidth: '720px', marginBottom: '2.5rem', margin: 0 }}>
// //             Upload your resume and tell us which role you are interested in. We&apos;ll follow up to discuss your fit and next operational steps.
// //           </p>

// //           <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
// //             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
// //               {/* Name */}
// //               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
// //                 <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Name</label>
// //                 <input
// //                   name="name"
// //                   value={form.name}
// //                   onChange={handleChange}
// //                   type="text"
// //                   placeholder="Jane Doe"
// //                   className="bm-input-field"
// //                 />
// //               </div>

// //               {/* Email */}
// //               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
// //                 <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Email Address</label>
// //                 <input
// //                   name="email"
// //                   value={form.email}
// //                   onChange={handleChange}
// //                   type="email"
// //                   placeholder="you@company.com"
// //                   className="bm-input-field"
// //                 />
// //               </div>
// //             </div>

// //             {/* Desired Role */}
// //             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
// //               <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Desired Role</label>
// //               <select
// //                 name="role"
// //                 value={form.role}
// //                 onChange={handleChange}
// //                 className="bm-input-field"
// //                 style={{ appearance: 'none', backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2rem' }}
// //               >
// //                 <option value="">Select a role</option>
// //                 {careersPage.openings.map((job) => (
// //                   <option key={job.role} value={job.role}>
// //                     {job.role}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>

// //             {/* Resume Upload */}
// //             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
// //               <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Resume Upload</label>
// //               <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '1rem' }}>
// //                 <input
// //                   ref={fileInputRef}
// //                   type="file"
// //                   accept=".pdf,.doc,.docx"
// //                   onChange={handleResume}
// //                   className="bm-input-field"
// //                   style={{ width: '100%' }}
// //                 />
// //               </div>
// //               {resumeFile && (
// //                 <div style={{ color: '#0f3ad6', fontWeight: 600, fontSize: '0.85rem', marginTop: '0.2rem' }}>
// //                   ✓ Selected document: {resumeFile.name}
// //                 </div>
// //               )}
// //             </div>

// //             {/* Message */}
// //             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
// //               <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Additional Details</label>
// //               <textarea
// //                 name="message"
// //                 value={form.message}
// //                 onChange={handleChange}
// //                 rows={4}
// //                 placeholder="Share a brief summary of your background or interest."
// //                 className="bm-input-field"
// //                 style={{ minHeight: '120px', resize: 'vertical' }}
// //               />
// //             </div>

// //             {/* Error Container */}
// //             {error && (
// //               <div style={{ color: '#dc2626', fontWeight: 600, fontSize: '0.88rem', background: '#fef2f2', padding: '0.75rem 1rem', borderRadius: '8px', borderLeft: '3px solid #dc2626' }}>
// //                 {error}
// //               </div>
// //             )}

// //             {/* Submit Mechanism */}
// //             <button
// //               type="submit"
// //               className="btn-primary"
// //               disabled={loading}
// //               style={{
// //                 width: 'fit-content',
// //                 padding: '1rem 2.5rem',
// //                 justifyContent: 'center',
// //                 opacity: loading ? 0.7 : 1,
// //                 cursor: loading ? 'not-allowed' : 'pointer',
// //                 boxShadow: '0 4px 12px rgba(15, 58, 214, 0.2)',
// //                 marginTop: '0.5rem'
// //               }}
// //             >
// //               {loading ? 'Sending Application…' : 'Submit Application'}
// //             </button>
// //           </form>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }

// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { careersPage } from '@/lib/siteData';

// const careerBenefits = [
//   {
//     title: 'Growth Opportunities',
//     summary:
//       'Work with a team that invests in training, leadership development, and certification pathways.',
//   },
//   {
//     title: 'Remote-First Support',
//     summary:
//       'Flexible roles that support remote monitoring, field engineering, and hybrid client engagement.',
//   },
//   {
//     title: 'Mission-Driven Culture',
//     summary:
//       'Help protect people and property through secure, intelligent operations every day.',
//   },
// ];

// // Explicitly defined targeted openings without location/address markers
// const activeOpenings = [
//   {
//     role: 'Monitoring Agent',
//     summary: 'Responsible for live video surveillance streams, identifying anomalies, validating structural perimeter metrics, and executing rapid escalation loops during active security incidents.',
//   },
//   {
//     role: 'Calling Agent',
//     summary: 'Manage client communications desk, facilitate inbound security alerts routing, verify customer credentials, and handle operational desk logistics with absolute precision.',
//   },
// ];

// export default function CareersPage() {
//   const [form, setForm] = useState({ name: '', email: '', role: '', message: '' });
//   const [resumeFile, setResumeFile] = useState<File | null>(null);
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading]     = useState(false);
//   const [error, setError]         = useState<string | null>(null);
//   const [showToast, setShowToast] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     setError(null);
//   };

//   const handleResume = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] ?? null;
//     setResumeFile(file);
//   };

//   // Toast auto-hide keeper
//   useEffect(() => {
//     if (showToast) {
//       const timer = setTimeout(() => setShowToast(false), 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [showToast]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.name.trim() || !form.email.trim() || !form.role.trim()) {
//       setError('Please complete your name, email, and desired role before submitting.');
//       return;
//     }

//     loading(true);
//     setError(null);

//     try {
//       const payload = new FormData();
//       payload.append('name',    form.name);
//       payload.append('email',   form.email);
//       payload.append('role',    form.role);
//       payload.append('message', form.message);
//       if (resumeFile) payload.append('resume', resumeFile);

//       const res = await fetch('/api/apply', { method: 'POST', body: payload });
//       const json = await res.json();

//       if (!res.ok) throw new Error(json.error ?? 'Something went wrong.');

//       setSubmitted(true);
//       setShowToast(true);
      
//       // Reset form structure gracefully
//       setForm({ name: '', email: '', role: '', message: '' });
//       setResumeFile(null);
//       if (fileInputRef.current) fileInputRef.current.value = '';
//     } catch (err: unknown) {
//       setError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main style={{ padding: '0 2rem 5rem', background: '#fafafa' }}>
//       <style>{`
//         /* ── TOAST ANIMATION LINKERS ── */
//         .bm-toast {
//           position: fixed;
//           top: 24px;
//           right: 24px;
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

//         /* ── INTERACTIVE HOVER CARDS ── */
//         .bm-hover-card {
//           background: #ffffff;
//           border: 1px solid #e2e8f0;
//           border-radius: 16px;
//           transition: transform 0.3s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
//         }
//         .bm-hover-card:hover {
//           transform: translateY(-4px);
//           border-color: rgba(15, 58, 214, 0.25);
//           box-shadow: 0 12px 24px rgba(13, 27, 69, 0.05);
//         }

//         /* ── PREMIUM INPUT FIELDS ── */
//         .bm-input-field {
//           padding: 0.95rem 1rem;
//           border: 1px solid #e2e8f0;
//           border-radius: 12px;
//           outline: none;
//           background: #ffffff;
//           font-family: inherit;
//           transition: border-color 0.25s ease, box-shadow 0.25s ease;
//         }
//         .bm-input-field:focus {
//           border-color: #0f3ad6;
//           box-shadow: 0 0 0 4px rgba(15, 58, 214, 0.08);
//         }
//       `}</style>

//       {/* ── Dynamic Floating Toast ── */}
//       <div className={`bm-toast ${showToast ? 'show' : ''}`}>
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f3ad6" strokeWidth="2.5">
//           <polyline points="20 6 9 17 4 12"></polyline>
//         </svg>
//         <div>
//           <strong style={{ display: 'block', color: '#0d1b45', fontSize: '0.9rem' }}>Application Sent!</strong>
//           <span style={{ color: '#64748b', fontSize: '0.82rem' }}>We will contact you within 3-5 business days.</span>
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
//             Careers
//           </div>
//           <h1 className="section-title" style={{ margin: '0.75rem 0 1.25rem', color: 'white', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.15 }}>
//             {careersPage.heading}
//           </h1>
//           <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontSize: '1.05rem', maxWidth: '760px', margin: 0 }}>
//             {careersPage.description}
//           </p>
          
//           <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
//             <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 14px rgba(15, 58, 214, 0.3)' }}>
//               Talk to Talent
//             </Link>
//             <Link href="/request-quote" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
//               Explore Services
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── Why Work With Us ── */}
//       <section style={{ maxWidth: '1180px', margin: '5rem auto 0' }}>
//         <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Why Work With Us</div>
//         <h2 className="section-title" style={{ margin: '0.5rem 0 2.5rem', color: '#0d1b45', fontWeight: 800 }}>
//           A career in modern security operations
//         </h2>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>
//           {careerBenefits.map((item) => (
//             <div key={item.title} className="bm-hover-card" style={{ padding: '2.25rem 2rem' }}>
//               <h3 className="card-title" style={{ color: '#0d1b45', margin: '0 0 0.75rem', fontSize: '1.25rem', fontWeight: 700 }}>{item.title}</h3>
//               <p className="card-desc" style={{ color: '#475569', margin: 0, fontSize: '0.92rem', lineHeight: 1.6 }}>{item.summary}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ── Open Roles ── */}
//       <section style={{ maxWidth: '1180px', margin: '6rem auto 0' }}>
//         <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Open Roles</div>
//         <h2 className="section-title" style={{ margin: '0.5rem 0 2.5rem', color: '#0d1b45', fontWeight: 800 }}>
//           Current opportunities at BlueMond
//         </h2>
//         <div style={{ display: 'grid', gap: '1.75rem', marginBottom: '4rem' }}>
//           {activeOpenings.map((job) => (
//             <div key={job.role} className="bm-hover-card" style={{ padding: '2.25rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
//               <div>
//                 <div className="card-title" style={{ color: '#0d1b45', fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{job.role}</div>
//                 <p className="card-desc" style={{ color: '#475569', fontSize: '0.95rem', margin: 0, maxWidth: '850px', lineHeight: 1.65 }}>{job.summary}</p>
//               </div>
//               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
//                 <button 
//                   onClick={() => {
//                     setForm(prev => ({ ...prev, role: job.role }));
//                     document.getElementById('app-form-block')?.scrollIntoView({ behavior: 'smooth' });
//                   }}
//                   className="card-cta" 
//                   style={{ display: 'inline-flex', background: 'transparent', border: 'none', color: '#0f3ad6', fontWeight: 700, cursor: 'pointer', alignItems: 'center', gap: '0.25rem' }}
//                 >
//                   Apply Now →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ── Application Form Container ── */}
//         <div id="app-form-block" style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.02)', borderRadius: '24px', padding: '3rem 2.5rem' }}>
//           <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Application Form</div>
//           <h2 className="section-title" style={{ margin: '0.5rem 0 0.75rem', color: '#0d1b45', fontWeight: 800 }}>
//             Submit your application
//           </h2>
//           <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem', maxWidth: '720px', marginBottom: '2.5rem', margin: 0 }}>
//             Upload your resume and tell us which role you are interested in. We&apos;ll follow up to discuss your fit and next operational steps.
//           </p>

//           <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
//               {/* Name */}
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
//                 <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Name</label>
//                 <input
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   type="text"
//                   placeholder="Jane Doe"
//                   className="bm-input-field"
//                 />
//               </div>

//               {/* Email */}
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
//                 <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Email Address</label>
//                 <input
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   type="email"
//                   placeholder="you@company.com"
//                   className="bm-input-field"
//                 />
//               </div>
//             </div>

//             {/* Desired Role */}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
//               <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Desired Role</label>
//               <select
//                 name="role"
//                 value={form.role}
//                 onChange={handleChange}
//                 className="bm-input-field"
//                 style={{ appearance: 'none', backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2rem' }}
//               >
//                 <option value="">Select a role</option>
//                 {activeOpenings.map((job) => (
//                   <option key={job.role} value={job.role}>
//                     {job.role}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Resume Upload */}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
//               <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Resume Upload</label>
//               <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '1rem' }}>
//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept=".pdf,.doc,.docx"
//                   onChange={handleResume}
//                   className="bm-input-field"
//                   style={{ width: '100%' }}
//                 />
//               </div>
//               {resumeFile && (
//                 <div style={{ color: '#0f3ad6', fontWeight: 600, fontSize: '0.85rem', marginTop: '0.2rem' }}>
//                   ✓ Selected document: {resumeFile.name}
//                 </div>
//               )}
//             </div>

//             {/* Message */}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
//               <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Additional Details</label>
//               <textarea
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 rows={4}
//                 placeholder="Share a brief summary of your background or interest."
//                 className="bm-input-field"
//                 style={{ minHeight: '120px', resize: 'vertical' }}
//               />
//             </div>

//             {/* Error Container */}
//             {error && (
//               <div style={{ color: '#dc2626', fontWeight: 600, fontSize: '0.88rem', background: '#fef2f2', padding: '0.75rem 1rem', borderRadius: '8px', borderLeft: '3px solid #dc2626' }}>
//                 {error}
//               </div>
//             )}

//             {/* Submit Mechanism */}
//             <button
//               type="submit"
//               className="btn-primary"
//               disabled={loading}
//               style={{
//                 width: 'fit-content',
//                 padding: '1rem 2.5rem',
//                 justifyContent: 'center',
//                 opacity: loading ? 0.7 : 1,
//                 cursor: loading ? 'not-allowed' : 'pointer',
//                 boxShadow: '0 4px 12px rgba(15, 58, 214, 0.2)',
//                 marginTop: '0.5rem'
//               }}
//             >
//               {loading ? 'Sending Application…' : 'Submit Application'}
//             </button>
//           </form>
//         </div>
//       </section>
//     </main>
//   );
// }


'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { careersPage } from '@/lib/siteData';

const careerBenefits = [
  {
    title: 'Growth Opportunities',
    summary:
      'Work with a team that invests in training, leadership development, and certification pathways.',
  },
  {
    title: 'Remote-First Support',
    summary:
      'Flexible roles that support remote monitoring, field engineering, and hybrid client engagement.',
  },
  {
    title: 'Mission-Driven Culture',
    summary:
      'Help protect people and property through secure, intelligent operations every day.',
  },
];

const activeOpenings = [
  {
    role: 'Monitoring Agent',
    summary: 'Responsible for live video surveillance streams, identifying anomalies, validating structural perimeter metrics, and executing rapid escalation loops during active security incidents.',
  },
  {
    role: 'Calling Agent',
    summary: 'Manage client communications desk, facilitate inbound security alerts routing, verify customer credentials, and handle operational desk logistics with absolute precision.',
  },
];

export default function CareersPage() {
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '' });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleResume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setResumeFile(file);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.role.trim()) {
      setError('Please complete your name, email, and desired role before submitting.');
      return;
    }

    setLoading(true); // FIX 3: Fixed state call from function assignment loading(true) to correct setter syntax
    setError(null);

    try {
      const payload = new FormData();
      payload.append('name',    form.name);
      payload.append('email',   form.email);
      payload.append('role',    form.role);
      payload.append('message', form.message);
      if (resumeFile) payload.append('resume', resumeFile);

      const res = await fetch('/api/apply', { method: 'POST', body: payload });
      const json = await res.json();

      if (!res.ok) throw new Error(json.error ?? 'Something went wrong.');

      setSubmitted(true);
      setShowToast(true);
      
      setForm({ name: '', email: '', role: '', message: '' });
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // FIX 1: Main spacing changed to '0 0 5rem' to render the background full-width correctly
    <main style={{ padding: '0 0 5rem', background: '#fafafa' }}>
      <style>{`
        /* ── TOAST ANIMATION LINKERS ── */
        .bm-toast {
          position: fixed;
          top: 24px;
          right: 24px;
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

        /* ── INTERACTIVE HOVER CARDS ── */
        .bm-hover-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          transition: transform 0.3s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .bm-hover-card:hover {
          transform: translateY(-4px);
          border-color: rgba(15, 58, 214, 0.25);
          box-shadow: 0 12px 24px rgba(13, 27, 69, 0.05);
        }

        /* ── PREMIUM INPUT FIELDS ── */
        .bm-input-field {
          padding: 0.95rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          outline: none;
          background: #ffffff;
          font-family: inherit;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .bm-input-field:focus {
          border-color: #0f3ad6;
          box-shadow: 0 0 0 4px rgba(15, 58, 214, 0.08);
        }
      `}</style>

      {/* ── Dynamic Floating Toast ── */}
      <div className={`bm-toast ${showToast ? 'show' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f3ad6" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <div>
          <strong style={{ display: 'block', color: '#0d1b45', fontSize: '0.9rem' }}>Application Sent!</strong>
          <span style={{ color: '#64748b', fontSize: '0.82rem' }}>We will contact you within 3-5 business days.</span>
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
            Careers
          </div>
          <h1 className="section-title" style={{ margin: '0.75rem 0 1.25rem', color: 'white', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.15 }}>
            {careersPage.heading}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontSize: '1.05rem', maxWidth: '760px', margin: 0 }}>
            {careersPage.description}
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 14px rgba(15, 58, 214, 0.3)' }}>
              Talk to Talent
            </Link>
            <Link href="/request-quote" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Work With Us ── */}
      {/* FIX 2: Added safety inline structure padding: '0 1.25rem' across the body modules */}
      <section style={{ maxWidth: '1180px', margin: '5rem auto 0', padding: '0 1.25rem' }}>
        <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Why Work With Us</div>
        <h2 className="section-title" style={{ margin: '0.5rem 0 2.5rem', color: '#0d1b45', fontWeight: 800 }}>
          A career in modern security operations
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2rem' }}>
          {careerBenefits.map((item) => (
            <div key={item.title} className="bm-hover-card" style={{ padding: '2.25rem 2rem' }}>
              <h3 className="card-title" style={{ color: '#0d1b45', margin: '0 0 0.75rem', fontSize: '1.25rem', fontWeight: 700 }}>{item.title}</h3>
              <p className="card-desc" style={{ color: '#475569', margin: 0, fontSize: '0.92rem', lineHeight: 1.6 }}>{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section style={{ maxWidth: '1180px', margin: '6rem auto 0', padding: '0 1.25rem' }}>
        <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Open Roles</div>
        <h2 className="section-title" style={{ margin: '0.5rem 0 2.5rem', color: '#0d1b45', fontWeight: 800 }}>
          Current opportunities at BlueMond
        </h2>
        <div style={{ display: 'grid', gap: '1.75rem', marginBottom: '4rem' }}>
          {activeOpenings.map((job) => (
            <div key={job.role} className="bm-hover-card" style={{ padding: '2.25rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
              <div>
                <div className="card-title" style={{ color: '#0d1b45', fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{job.role}</div>
                <p className="card-desc" style={{ color: '#475569', fontSize: '0.95rem', margin: 0, maxWidth: '850px', lineHeight: 1.65 }}>{job.summary}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <button 
                  onClick={() => {
                    setForm(prev => ({ ...prev, role: job.role }));
                    document.getElementById('app-form-block')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="card-cta" 
                  style={{ display: 'inline-flex', background: 'transparent', border: 'none', color: '#0f3ad6', fontWeight: 700, cursor: 'pointer', alignItems: 'center', gap: '0.25rem' }}
                >
                  Apply Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Application Form Container ── */}
        <div id="app-form-block" style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.02)', borderRadius: '24px', padding: '3rem 2.5rem' }}>
          <div className="section-label" style={{ color: '#0f3ad6', fontWeight: 700 }}>Application Form</div>
          <h2 className="section-title" style={{ margin: '0.5rem 0 0.75rem', color: '#0d1b45', fontWeight: 800 }}>
            Submit your application
          </h2>
          <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem', maxWidth: '720px', marginBottom: '2.5rem', margin: 0 }}>
            Upload your resume and tell us which role you are interested in. We&apos;ll follow up to discuss your fit and next operational steps.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {/* Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Jane Doe"
                  className="bm-input-field"
                />
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Email Address</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@company.com"
                  className="bm-input-field"
                />
              </div>
            </div>

            {/* Desired Role */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Desired Role</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="bm-input-field"
                style={{ appearance: 'none', backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2rem' }}
              >
                <option value="">Select a role</option>
                {activeOpenings.map((job) => (
                  <option key={job.role} value={job.role}>
                    {job.role}
                  </option>
                ))}
              </select>
            </div>

            {/* Resume Upload */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Resume Upload</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResume}
                  className="bm-input-field"
                  style={{ width: '100%' }}
                />
              </div>
              {resumeFile && (
                <div style={{ color: '#0f3ad6', fontWeight: 600, fontSize: '0.85rem', marginTop: '0.2rem' }}>
                  ✓ Selected document: {resumeFile.name}
                </div>
              )}
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ color: '#0d1b45', fontWeight: 600, fontSize: '0.88rem' }}>Additional Details</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Share a brief summary of your background or interest."
                className="bm-input-field"
                style={{ minHeight: '120px', resize: 'vertical' }}
              />
            </div>

            {/* Error Container */}
            {error && (
              <div style={{ color: '#dc2626', fontWeight: 600, fontSize: '0.88rem', background: '#fef2f2', padding: '0.75rem 1rem', borderRadius: '8px', borderLeft: '3px solid #dc2626' }}>
                {error}
              </div>
            )}

            {/* Submit Mechanism */}
            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              style={{
                width: 'fit-content',
                padding: '1rem 2.5rem',
                justifyContent: 'center',
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: '0 4px 12px rgba(15, 58, 214, 0.2)',
                marginTop: '0.5rem'
              }}
            >
              {loading ? 'Sending Application…' : 'Submit Application'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}