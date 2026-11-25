// 'use client';

// import Link from "next/link";
// import { blogPosts } from "@/lib/siteData";

// export default function BlogPage() {
//   return (
//     <main style={{ padding: '0 clamp(1rem, 4vw, 2rem) 5rem', background: '#fafafa' }}>
//       <style>{`
//         /* ── INTERACTIVE BLOG CARDS ── */
//         .bm-blog-card {
//           background: #ffffff;
//           border: 1px solid #e2e8f0;
//           border-radius: 20px;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           transition: transform 0.3s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
//         }
//         .bm-blog-card:hover {
//           transform: translateY(-5px);
//           border-color: rgba(15, 58, 214, 0.25);
//           box-shadow: 0 20px 35px rgba(13, 27, 69, 0.05);
//         }

//         /* ── CARD HOVER ANIMATION FOR CTA ── */
//         .bm-blog-link {
//           color: #0f3ad6;
//           font-weight: 700;
//           text-decoration: none;
//           display: inline-flex;
//           align-items: center;
//           gap: 0.25rem;
//           transition: gap 0.2s ease;
//         }
//         .bm-blog-card:hover .bm-blog-link {
//           gap: 0.5rem;
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
//             Blog
//           </div>
//           <h1 className="section-title" style={{ margin: '0.75rem 0 1.25rem', color: 'white', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.15 }}>
//             Insights from the BlueMond Security Team
//           </h1>
//           <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontSize: '1.05rem', maxWidth: '760px', margin: 0 }}>
//             Explore our latest thinking on monitoring, incident response, and security operations for modern sites.
//           </p>
          
//           <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
//             <Link href="/request-quote" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 14px rgba(15, 58, 214, 0.3)' }}>
//               Request a Quote
//             </Link>
//             <Link href="/contact" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── Articles Grid ── */}
//       <section style={{ maxWidth: '1180px', margin: '5rem auto 0' }}>
//         <div 
//           style={{ 
//             display: 'grid', 
//             gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
//             gap: '2rem' 
//           }}
//         >
//           {blogPosts.map((post) => (
//             <article key={post.slug} className="bm-blog-card" style={{ padding: '2.5rem' }}>
//               <div>
//                 {/* Date / Metadata Info */}
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
//                   <p style={{ color: '#0f3ad6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', margin: 0 }}>
//                     {post.date}
//                   </p>
//                   <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#cbd5e1' }} />
//                   <p style={{ color: '#64748b', fontSize: '0.82rem', margin: 0, fontWeight: 500 }}>
//                     Security Insights
//                   </p>
//                 </div>

//                 {/* Title */}
//                 <h2 className="card-title" style={{ marginBottom: '1rem', color: '#0d1b45', fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3 }}>
//                   {post.title}
//                 </h2>

//                 {/* Excerpt */}
//                 <p className="card-desc" style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
//                   {post.excerpt}
//                 </p>
//               </div>

//               {/* Action Link Row */}
//               <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid #f1f5f9' }}>
//                 <Link href={`/blog/${post.slug}`} className="bm-blog-link">
//                   <span>Read Full Article</span>
//                   <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>→</span>
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }


'use client';

import Link from "next/link";
import { blogPosts } from "@/lib/siteData";

export default function BlogPage() {
  return (
    // FIX 1: Changed padding to '0 0 5rem' so the blue gradient header container expands full-width edge-to-edge
    <main style={{ padding: '0 0 5rem', background: '#fafafa' }}>
      <style>{`
        /* ── INTERACTIVE BLOG CARDS ── */
        .bm-blog-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          transition: transform 0.3s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .bm-blog-card:hover {
          transform: translateY(-5px);
          border-color: rgba(15, 58, 214, 0.25);
          box-shadow: 0 20px 35px rgba(13, 27, 69, 0.05);
        }

        /* ── CARD HOVER ANIMATION FOR CTA ── */
        .bm-blog-link {
          color: #0f3ad6;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: gap 0.2s ease;
        }
        .bm-blog-card:hover .bm-blog-link {
          gap: 0.5rem;
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
            Blog
          </div>
          <h1 className="section-title" style={{ margin: '0.75rem 0 1.25rem', color: 'white', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.15 }}>
            Insights from the BlueMond Security Team
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontSize: '1.05rem', maxWidth: '760px', margin: 0 }}>
            Explore our latest thinking on monitoring, incident response, and security operations for modern sites.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            <Link href="/request-quote" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 14px rgba(15, 58, 214, 0.3)' }}>
              Request a Quote
            </Link>
            <Link href="/contact" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Articles Grid ── */}
      {/* FIX 2: Added padding: '0 1.25rem' so content has safety spacing from screen bounds on mobile/tablets */}
      <section style={{ maxWidth: '1180px', margin: '5rem auto 0', padding: '0 1.25rem' }}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {blogPosts.map((post) => (
            <article key={post.slug} className="bm-blog-card" style={{ padding: '2.5rem' }}>
              <div>
                {/* Date / Metadata Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <p style={{ color: '#0f3ad6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', margin: 0 }}>
                    {post.date}
                  </p>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#cbd5e1' }} />
                  <p style={{ color: '#64748b', fontSize: '0.82rem', margin: 0, fontWeight: 500 }}>
                    Security Insights
                  </p>
                </div>

                {/* Title */}
                <h2 className="card-title" style={{ marginBottom: '1rem', color: '#0d1b45', fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.3 }}>
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="card-desc" style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
                  {post.excerpt}
                </p>
              </div>

              {/* Action Link Row */}
              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid #f1f5f9' }}>
                <Link href={`/blog/${post.slug}`} className="bm-blog-link">
                  <span>Read Full Article</span>
                  <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}