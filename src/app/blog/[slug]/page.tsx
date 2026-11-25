import { notFound } from "next/navigation";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// MOCK CONTENT DATABASE
// In production, replace with CMS / MDX / DB calls.
// ─────────────────────────────────────────────────────────────────────────────

interface Section {
  heading?: string;
  body: string;
  list?: string[];
}

interface PostDetail {
  slug: string;
  category: string;
  emoji: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorBio: string;
  date: string;
  readTime: string;
  sections: Section[];
  tags: string[];
  relatedSlugs: string[];
}

const POST_DETAILS: Record<string, PostDetail> = {
  "zero-trust-architecture-2025": {
    slug: "zero-trust-architecture-2025",
    category: "Security Strategy",
    emoji: "🛡️",
    title: "Zero Trust Architecture: Why 'Never Trust, Always Verify' Is No Longer Optional",
    excerpt: "Traditional perimeter-based security is dead. We break down how to implement a practical Zero Trust model across identity, devices, networks, and applications without disrupting operations.",
    author: "Zain Raza",
    authorRole: "Head of Security Architecture",
    authorBio: "Zain leads Blumond's architecture practice and holds CISSP, CISM, and multiple vendor certifications. He has designed security programmes for 40+ enterprise clients across MENA.",
    date: "28 May 2025",
    readTime: "9 min read",
    sections: [
      {
        heading: "The Perimeter Is Dead",
        body: "For three decades, enterprise security was built on a castle-and-moat model: build a strong perimeter, trust everything inside. VPNs, firewalls, and DMZs were the tools of choice. Then came cloud workloads, remote work, SaaS applications, and bring-your-own-device policies — and the perimeter dissolved almost overnight.",
      },
      {
        heading: "What Zero Trust Actually Means",
        body: "Zero Trust is not a product you can buy. It's a strategic framework based on one core principle: never implicitly trust any user, device, or network — regardless of where they are. Every access request must be authenticated, authorised, and continuously validated.",
        list: [
          "Verify explicitly: Authenticate and authorise based on all available data — identity, location, device health, service, workload, and data classification.",
          "Use least privilege access: Limit user access with just-in-time and just-enough-access policies.",
          "Assume breach: Minimise blast radius. Segment access, verify end-to-end encryption, and use analytics to detect anomalies.",
        ],
      },
      {
        heading: "The Five Pillars of Zero Trust",
        body: "Microsoft's CISA-aligned framework breaks Zero Trust into five pillars, each requiring its own maturity progression from Traditional → Advanced → Optimal.",
        list: [
          "Identity: Move beyond passwords. Implement MFA, conditional access, and identity governance.",
          "Devices: Enforce device health checks before granting access. Integrate MDM/EDR with your access policies.",
          "Network: Micro-segment your environment. Replace implicit trust with verified, encrypted, policy-driven communication.",
          "Applications: Treat every app as internet-facing. Apply API security, app-layer firewalls, and least-privilege service accounts.",
          "Data: Classify your data. Apply sensitivity labels, encrypt at rest and in transit, and monitor access patterns.",
        ],
      },
      {
        heading: "Where Pakistani Enterprises Should Start",
        body: "Most local organisations have weak identity hygiene — shared accounts, no MFA, and overly permissive Active Directory groups. Identity is where you'll get the fastest wins and the highest risk reduction per rupee spent.",
      },
      {
        heading: "Common Implementation Pitfalls",
        body: "Zero Trust programmes frequently fail due to a few recurring mistakes:",
        list: [
          "Treating it as a one-time project rather than an ongoing programme.",
          "Starting with network segmentation before fixing identity — the hardest, least impactful starting point.",
          "Neglecting legacy applications that cannot support modern auth protocols.",
          "Under-investing in change management — users will route around controls they find too disruptive.",
        ],
      },
      {
        heading: "Final Thoughts",
        body: "Zero Trust is a journey, not a destination. Begin with identity, build visibility, then extend controls outward. The organisations that treat security as a continuous programme — not a compliance checkbox — are the ones that survive modern threats.",
      },
    ],
    tags: ["Zero Trust", "Identity", "Network Security", "Enterprise Security", "Strategy"],
    relatedSlugs: ["siem-vs-edr-comparison", "cloud-security-misconfigurations", "network-segmentation-best-practices"],
  },
  "ransomware-resilience-guide": {
    slug: "ransomware-resilience-guide",
    category: "Threat Intelligence",
    emoji: "🔐",
    title: "Ransomware in 2025: How Pakistani Enterprises Can Build Genuine Resilience",
    excerpt: "Ransomware attacks against MENA enterprises rose 67% in 2024. This guide covers detection, containment, backup strategies, and negotiation decisions.",
    author: "Sara Malik",
    authorRole: "Senior Incident Responder",
    authorBio: "Sara has led ransomware response engagements across banking, manufacturing, and healthcare sectors. She holds GCFE, GCIH, and GREM certifications.",
    date: "15 May 2025",
    readTime: "12 min read",
    sections: [
      {
        heading: "The Threat Landscape in 2025",
        body: "Ransomware groups have evolved from opportunistic spray-and-pray campaigns to sophisticated, targeted operations with dedicated reconnaissance teams, custom tooling, and negotiation specialists. Groups like LockBit 4.0 and BlackCat/ALPHV operate like businesses — complete with customer service portals and SLAs for their victims.",
      },
      {
        heading: "Why Backups Alone Won't Save You",
        body: "Modern ransomware operations typically spend 3–6 weeks inside a network before triggering encryption. During that time, they exfiltrate sensitive data, compromise backup systems, and move laterally across the entire estate. Even if you can restore from backup, you still face data extortion.",
        list: [
          "Immutable backups stored offline or in air-gapped environments are essential.",
          "Backup restoration testing must happen quarterly — not just annual disaster recovery exercises.",
          "Cloud backup targets must also be hardened; threat actors actively target S3 and Azure Blob snapshots.",
        ],
      },
      {
        heading: "Detection: The Golden Window",
        body: "The median dwell time before ransomware detonation is 8 days. That's your window. Organisations with mature detection capabilities can identify the precursors — suspicious Cobalt Strike activity, LOLBin abuse, unusual AD enumeration — well before encryption begins.",
      },
      {
        heading: "Containment: Speed Over Perfection",
        body: "When ransomware is detected mid-detonation, most organisations freeze. The right response is immediate network isolation, even at the cost of operational disruption. Every minute of hesitation expands the blast radius.",
      },
      {
        heading: "The Negotiation Decision",
        body: "Paying a ransom should be a last resort, and the decision must involve legal counsel due to OFAC sanctions implications. That said, organisations should prepare by:",
        list: [
          "Engaging a specialist IR firm with ransom negotiation experience before an incident occurs.",
          "Understanding your cyber insurance policy's ransom payment provisions.",
          "Having Bitcoin acquisition processes pre-approved and documented.",
        ],
      },
    ],
    tags: ["Ransomware", "Incident Response", "Threat Intelligence", "Backup", "SOC"],
    relatedSlugs: ["zero-trust-architecture-2025", "siem-vs-edr-comparison", "social-engineering-prevention"],
  },
};

// Fallback for slugs without full content
function getFallbackPost(slug: string): PostDetail | null {
  const titleMap: Record<string, string> = {
    "iso-27001-implementation-roadmap": "ISO 27001:2022 Implementation Roadmap for Mid-Size Organisations",
    "cloud-security-misconfigurations": "Top 10 Cloud Misconfigurations That Lead to Data Breaches",
    "siem-vs-edr-comparison": "SIEM vs EDR vs XDR: Which Security Stack Is Right for Your Organisation?",
    "social-engineering-prevention": "Social Engineering in the AI Era",
    "network-segmentation-best-practices": "Network Segmentation: A Practical Guide to Containing Lateral Movement",
    "pdpa-compliance-pakistan": "Pakistan's PDPA: What Businesses Need to Do Before the Deadline",
  };

  if (!titleMap[slug]) return null;

  return {
    slug,
    category: "Security",
    emoji: "🔒",
    title: titleMap[slug],
    excerpt: "Detailed guidance from Blumond's security practitioners.",
    author: "Blumond Editorial",
    authorRole: "Security Research Team",
    authorBio: "The Blumond editorial team comprises certified security professionals with decades of combined industry experience.",
    date: "2025",
    readTime: "8 min read",
    sections: [
      {
        heading: "Coming Soon",
        body: "The full article is being finalised by our editorial team. Subscribe to our newsletter to get notified when it's published.",
      },
    ],
    tags: ["Security"],
    relatedSlugs: ["zero-trust-architecture-2025", "ransomware-resilience-guide"],
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// RELATED POSTS DATA (mini version, enough for cards)
// ─────────────────────────────────────────────────────────────────────────────

const RELATED_META: Record<string, { title: string; category: string; readTime: string; emoji: string }> = {
  "zero-trust-architecture-2025": { title: "Zero Trust Architecture: Why 'Never Trust, Always Verify' Is No Longer Optional", category: "Security Strategy", readTime: "9 min", emoji: "🛡️" },
  "ransomware-resilience-guide": { title: "Ransomware in 2025: How Pakistani Enterprises Can Build Genuine Resilience", category: "Threat Intelligence", readTime: "12 min", emoji: "🔐" },
  "siem-vs-edr-comparison": { title: "SIEM vs EDR vs XDR: Which Security Stack Is Right?", category: "Technology", readTime: "10 min", emoji: "⚙️" },
  "cloud-security-misconfigurations": { title: "Top 10 Cloud Misconfigurations That Lead to Data Breaches", category: "Cloud Security", readTime: "8 min", emoji: "☁️" },
  "social-engineering-prevention": { title: "Social Engineering in the AI Era", category: "Awareness", readTime: "7 min", emoji: "🎭" },
  "network-segmentation-best-practices": { title: "Network Segmentation: A Practical Guide", category: "Networking", readTime: "11 min", emoji: "🌐" },
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POST_DETAILS[params.slug] ?? getFallbackPost(params.slug);

  if (!post) notFound();

  return (
    <>
      {/* ── Back nav ── */}
      <div style={{ background: "var(--off-white)", borderBottom: "1px solid var(--gray-light)", padding: "0.75rem 2.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link
            href="/blog"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--bm-font-head)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--blue-royal)", textDecoration: "none" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Blog
          </Link>
        </div>
      </div>

      {/* ── Hero ── */}
      <section style={{ background: "var(--blue-royal-dark)", padding: "5rem 2.5rem 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "35%", height: "100%", background: "rgba(0,47,167,0.15)", clipPath: "polygon(30% 0%,100% 0%,100% 100%,0% 100%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-1rem", right: "2rem", fontSize: "9rem", opacity: 0.07, pointerEvents: "none" }}>{post.emoji}</div>

        <div style={{ maxWidth: 820, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)", fontFamily: "var(--bm-font-head)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.25rem 0.75rem" }}>
              {post.category}
            </span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>{post.date}</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>·</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>{post.readTime}</span>
          </div>

          <h1 style={{ fontFamily: "var(--bm-font-head)", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 900, textTransform: "uppercase", color: "white", lineHeight: 1.08, marginBottom: "1.5rem" }}>
            {post.title}
          </h1>

          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 680 }}>
            {post.excerpt}
          </p>

          {/* Author */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--bm-font-head)", fontWeight: 900, color: "white", fontSize: "1rem", flexShrink: 0 }}>
              {post.author[0]}
            </div>
            <div>
              <div style={{ fontFamily: "var(--bm-font-head)", fontWeight: 800, fontSize: "0.95rem", textTransform: "uppercase", color: "white", letterSpacing: "0.03em" }}>{post.author}</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>{post.authorRole}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section style={{ background: "var(--white)", padding: "5rem 2.5rem" }}>
        <div className="responsive-sidebar-grid" style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Main content */}
          <article>
            {post.sections.map((section, i) => (
              <div key={i} style={{ marginBottom: "3rem" }}>
                {section.heading && (
                  <h2 style={{ fontFamily: "var(--bm-font-head)", fontSize: "clamp(1.3rem,2.5vw,1.7rem)", fontWeight: 900, textTransform: "uppercase", color: "var(--blue-royal-dark)", lineHeight: 1.1, marginBottom: "1rem", paddingTop: i > 0 ? "1rem" : 0, borderTop: i > 0 ? "1px solid var(--gray-light)" : "none" }}>
                    {section.heading}
                  </h2>
                )}
                <p style={{ color: "var(--gray-mid)", fontSize: "1rem", lineHeight: 1.85, marginBottom: section.list ? "1.25rem" : 0, fontWeight: 400 }}>
                  {section.body}
                </p>
                {section.list && (
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {section.list.map((item, j) => (
                      <li key={j} className="why-point" style={{ paddingLeft: "1rem" }}>
                        <div className="why-check" style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2 }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "var(--gray-mid)" }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Tags */}
            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--gray-light)" }}>
              <p style={{ fontFamily: "var(--bm-font-head)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-mid)", marginBottom: "0.875rem" }}>Topics</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {post.tags.map((tag) => (
                  <span key={tag} style={{ background: "var(--blue-pale)", border: "1px solid rgba(0,47,167,0.15)", padding: "0.3rem 0.875rem", fontFamily: "var(--bm-font-head)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--blue-royal)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author bio */}
            <div style={{ marginTop: "2.5rem", background: "var(--off-white)", border: "1px solid var(--gray-light)", borderLeft: "4px solid var(--blue-royal)", padding: "1.75rem 2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "0.875rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--blue-royal)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--bm-font-head)", fontWeight: 900, color: "white", fontSize: "1rem", flexShrink: 0 }}>
                  {post.author[0]}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--bm-font-head)", fontWeight: 900, fontSize: "0.95rem", textTransform: "uppercase", color: "var(--blue-royal-dark)" }}>{post.author}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--gray-mid)", fontWeight: 600 }}>{post.authorRole}</div>
                </div>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--gray-mid)", lineHeight: 1.7 }}>{post.authorBio}</p>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="responsive-sidebar-aside" style={{ position: "sticky", top: "108px" }}>
            {/* Table of contents */}
            <div style={{ marginBottom: "2rem" }}>
              <p style={{ fontFamily: "var(--bm-font-head)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--blue-royal)", marginBottom: "0.875rem" }}>
                In This Article
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                {post.sections.filter((s) => s.heading).map((s) => (
                  <a key={s.heading} href="#" style={{ fontSize: "0.82rem", color: "var(--gray-mid)", textDecoration: "none", padding: "0.375rem 0.75rem", borderLeft: "2px solid var(--gray-light)", transition: "color 0.2s, border-color 0.2s, padding-left 0.2s", fontWeight: 500 }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--blue-royal)"; (e.target as HTMLElement).style.borderLeftColor = "var(--blue-royal)"; (e.target as HTMLElement).style.paddingLeft = "1rem"; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--gray-mid)"; (e.target as HTMLElement).style.borderLeftColor = "var(--gray-light)"; (e.target as HTMLElement).style.paddingLeft = "0.75rem"; }}
                  >
                    {s.heading}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ background: "var(--blue-royal)", padding: "1.75rem", marginBottom: "2rem" }}>
              <p style={{ fontFamily: "var(--bm-font-head)", fontWeight: 900, fontSize: "0.95rem", textTransform: "uppercase", color: "white", marginBottom: "0.5rem", lineHeight: 1.2 }}>
                Need a Security Assessment?
              </p>
              <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                Our certified team will evaluate your environment and deliver a prioritised roadmap.
              </p>
              <a href="/contact" className="btn-white-outline" style={{ padding: "0.65rem 1.25rem", fontSize: "0.78rem", width: "100%", justifyContent: "center" }}>
                <span>Book a Free Call</span>
              </a>
            </div>

            {/* Share */}
            <div>
              <p style={{ fontFamily: "var(--bm-font-head)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-mid)", marginBottom: "0.75rem" }}>Share</p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {["LinkedIn", "Twitter", "Copy Link"].map((s) => (
                  <button key={s} style={{ padding: "0.5rem 0.875rem", fontFamily: "var(--bm-font-head)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", background: "var(--off-white)", border: "1px solid var(--gray-light)", color: "var(--gray-dark)", cursor: "pointer", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "var(--blue-royal)"; (e.currentTarget as HTMLButtonElement).style.color = "white"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--blue-royal)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "var(--off-white)"; (e.currentTarget as HTMLButtonElement).style.color = "var(--gray-dark)"; (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gray-light)"; }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Related Posts ── */}
      {post.relatedSlugs.length > 0 && (
        <section style={{ background: "var(--off-white)", padding: "5rem 2.5rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p className="section-label" style={{ marginBottom: "2rem" }}>Continue Reading</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {post.relatedSlugs
                .map((s) => RELATED_META[s])
                .filter(Boolean)
                .map((r) => (
                  <Link key={r.title} href={`/blog/${post.relatedSlugs.find((s) => RELATED_META[s]?.title === r.title)}`} style={{ textDecoration: "none", display: "block" }}>
                    <div
                      className="service-card"
                      style={{ cursor: "pointer" }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem", position: "relative", zIndex: 1 }}>
                        <span style={{ fontFamily: "var(--bm-font-head)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--blue-royal)", background: "var(--blue-pale)", padding: "0.2rem 0.6rem" }}>
                          {r.category}
                        </span>
                        <span style={{ fontSize: "1.5rem" }}>{r.emoji}</span>
                      </div>
                      <h3 className="card-title" style={{ fontSize: "0.95rem" }}>{r.title}</h3>
                      <p className="card-cta" style={{ marginTop: "1rem", position: "relative", zIndex: 1 }}>
                        {r.readTime}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STATIC PARAMS — tells Next.js which slugs to pre-render
// ─────────────────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return [
    { slug: "zero-trust-architecture-2025" },
    { slug: "ransomware-resilience-guide" },
    { slug: "iso-27001-implementation-roadmap" },
    { slug: "cloud-security-misconfigurations" },
    { slug: "siem-vs-edr-comparison" },
    { slug: "social-engineering-prevention" },
    { slug: "network-segmentation-best-practices" },
    { slug: "pdpa-compliance-pakistan" },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────
// METADATA (SEO)
// ─────────────────────────────────────────────────────────────────────────────

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = POST_DETAILS[params.slug] ?? getFallbackPost(params.slug);
  if (!post) return { title: "Post Not Found | Blumond" };
  return {
    title: `${post.title} | Blumond Blog`,
    description: post.excerpt,
  };
}