import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface PolicySection {
  id: string;
  heading: string;
  body: string;
  list?: string[];
  subSections?: { heading: string; body: string; list?: string[] }[];
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT
// ─────────────────────────────────────────────────────────────────────────────

const LAST_UPDATED = "1 June 2025";
const EFFECTIVE_DATE = "1 June 2025";

const SECTIONS: PolicySection[] = [
  {
    id: "overview",
    heading: "1. Overview",
    body: 'Blumond Solutions (Private) Limited ("Blumond", "we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website (www.blumond.com), use our services, or interact with us in any other way. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site and services.',
  },
  {
    id: "information-we-collect",
    heading: "2. Information We Collect",
    body: "We collect information in the following ways:",
    subSections: [
      {
        heading: "2.1 Information You Provide Directly",
        body: "When you contact us, request a consultation, download a resource, or apply for a position, you may provide:",
        list: [
          "Full name, email address, phone number, and company name",
          "Job title, industry, and organisation size",
          "CV/resume and cover letter (for job applications)",
          "Message content submitted through contact or enquiry forms",
          "Payment and billing information (processed securely via third-party providers)",
        ],
      },
      {
        heading: "2.2 Information Collected Automatically",
        body: "When you visit our website, we automatically collect certain technical data:",
        list: [
          "IP address and approximate geolocation",
          "Browser type, version, and operating system",
          "Pages visited, time on page, and referring URLs",
          "Device identifiers and screen resolution",
          "Cookie identifiers and session data (see our Cookie Policy)",
        ],
      },
      {
        heading: "2.3 Information From Third Parties",
        body: "We may receive information about you from third parties, including:",
        list: [
          "Business partners and referral sources",
          "LinkedIn and other professional networks (when you connect with us)",
          "Analytics and advertising platforms",
          "Publicly available commercial databases for B2B prospecting",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    heading: "3. How We Use Your Information",
    body: "We process your personal data for the following lawful purposes:",
    list: [
      "To provide, operate, and improve our cybersecurity and IT services",
      "To respond to your enquiries, quotes, and support requests",
      "To send service updates, invoices, and contractual communications",
      "To send marketing communications where you have consented or where we have a legitimate interest",
      "To process job applications and conduct recruitment activities",
      "To comply with legal obligations, including tax, audit, and regulatory requirements",
      "To detect, investigate, and prevent fraud, security incidents, and abuse",
      "To conduct analytics and improve our website, content, and service offerings",
      "To personalise your experience and show relevant content",
    ],
  },
  {
    id: "legal-basis",
    heading: "4. Legal Basis for Processing",
    body: "Where applicable under data protection law, we rely on the following legal bases:",
    list: [
      "Contractual necessity — processing required to fulfil our contract with you",
      "Legitimate interests — improving our services, marketing to business prospects, and securing our systems",
      "Consent — for marketing emails and non-essential cookies (you may withdraw consent at any time)",
      "Legal obligation — compliance with applicable laws in Pakistan and other jurisdictions where we operate",
    ],
  },
  {
    id: "sharing",
    heading: "5. How We Share Your Information",
    body: "We do not sell your personal data. We may share it with:",
    list: [
      "Service providers who assist us in delivering our services (e.g. hosting, CRM, email platforms) under strict data processing agreements",
      "Professional advisors including lawyers, accountants, and auditors bound by confidentiality obligations",
      "Government and regulatory bodies when required by law or court order",
      "Business partners with your consent, or where required to deliver a joint service",
      "A successor entity in the event of a merger, acquisition, or sale of assets",
    ],
  },
  {
    id: "international",
    heading: "6. International Transfers",
    body: "Our operations are primarily based in Pakistan. Some of our service providers are located abroad, including in the European Union and United States. When we transfer your data internationally, we apply appropriate safeguards including standard contractual clauses, data processing agreements, and adequacy decisions where applicable.",
  },
  {
    id: "retention",
    heading: "7. Data Retention",
    body: "We retain your personal data only as long as necessary for the purposes set out in this policy, and to comply with our legal obligations. Specifically:",
    list: [
      "Client and contract data: 7 years from end of engagement (tax and audit requirements)",
      "Marketing contact data: Until you unsubscribe or request deletion",
      "Job applicant data: 6 months after a recruitment process concludes",
      "Website analytics data: 26 months (anonymised after 14 months)",
      "Support and enquiry records: 3 years",
    ],
  },
  {
    id: "your-rights",
    heading: "8. Your Rights",
    body: "Subject to applicable law, you have the right to:",
    list: [
      "Access — request a copy of the personal data we hold about you",
      "Rectification — request correction of inaccurate or incomplete data",
      "Erasure — request deletion of your data where there is no compelling reason to continue processing",
      "Restriction — request that we limit how we use your data in certain circumstances",
      "Portability — receive your data in a structured, machine-readable format",
      "Objection — object to processing based on legitimate interests or for direct marketing",
      "Withdraw Consent — where processing is based on consent, withdraw it at any time without affecting prior lawfulness",
    ],
  },
  {
    id: "security",
    heading: "9. Security",
    body: "As a cybersecurity company, we hold ourselves to the highest standard of data protection. We implement technical and organisational measures including end-to-end encryption, role-based access control, multi-factor authentication, regular penetration testing, and ISO 27001-aligned information security management practices. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    id: "cookies",
    heading: "10. Cookies",
    body: "We use cookies and similar tracking technologies on our website. For detailed information on the types of cookies we use, how we use them, and how you can control your preferences, please refer to our Cookie Policy.",
  },
  {
    id: "children",
    heading: "11. Children's Privacy",
    body: "Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately and we will delete it.",
  },
  {
    id: "changes",
    heading: "12. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a revised effective date, and where appropriate, by email. Your continued use of our website or services after changes are posted constitutes acceptance of the updated policy.",
  },
  {
    id: "contact",
    heading: "13. Contact Us",
    body: "If you have questions about this Privacy Policy or wish to exercise your rights, please contact our Data Protection Officer:",
    list: [
      "Email: privacy@blumond.com",
      "Phone: +92 21 0000 0000",
      "Post: Data Protection Officer, Blumond Solutions (Private) Limited, Karachi, Pakistan",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function SectionBlock({ section }: { section: PolicySection }) {
  return (
    <div
      id={section.id}
      style={{
        paddingBottom: "2.5rem",
        marginBottom: "2.5rem",
        borderBottom: "1px solid var(--gray-light)",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--bm-font-head)",
          fontSize: "clamp(1.1rem,2vw,1.4rem)",
          fontWeight: 900,
          textTransform: "uppercase",
          color: "var(--blue-royal-dark)",
          lineHeight: 1.1,
          marginBottom: "1rem",
        }}
      >
        {section.heading}
      </h2>

      <p
        style={{
          color: "var(--gray-mid)",
          fontSize: "0.95rem",
          lineHeight: 1.85,
          marginBottom: section.list || section.subSections ? "1.25rem" : 0,
        }}
      >
        {section.body}
      </p>

      {section.list && (
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {section.list.map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.875rem",
                fontSize: "0.93rem",
                color: "var(--gray-mid)",
                lineHeight: 1.75,
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 18,
                  background: "var(--blue-royal)",
                  borderRadius: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 3,
                }}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {section.subSections && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {section.subSections.map((sub, i) => (
            <div
              key={i}
              style={{
                background: "var(--off-white)",
                borderLeft: "3px solid var(--blue-royal)",
                padding: "1.25rem 1.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--bm-font-head)",
                  fontSize: "0.9rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "var(--blue-royal-dark)",
                  marginBottom: "0.625rem",
                  letterSpacing: "0.03em",
                }}
              >
                {sub.heading}
              </h3>
              <p style={{ color: "var(--gray-mid)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: sub.list ? "0.875rem" : 0 }}>
                {sub.body}
              </p>
              {sub.list && (
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {sub.list.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.88rem", color: "var(--gray-mid)", lineHeight: 1.75 }}>
                      <span style={{ color: "var(--blue-royal)", flexShrink: 0, marginTop: 2, fontWeight: 700 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          background: "var(--blue-royal-dark)",
          padding: "5rem 2.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 80% 40%, rgba(0,70,255,0.15) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            fontSize: "12rem",
            opacity: 0.04,
            pointerEvents: "none",
            lineHeight: 1,
          }}
        >
          🔏
        </div>

        <div style={{ maxWidth: 820, margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <Link href="/" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textDecoration: "none" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>/</span>
            <Link href="/legal" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textDecoration: "none" }}>Legal</Link>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>/</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>Privacy Policy</span>
          </div>

          <div className="live-badge" style={{ marginBottom: "1.25rem", background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>
            <span className="dot" />
            Legal Document
          </div>

          <h1
            style={{
              fontFamily: "var(--bm-font-head)",
              fontSize: "clamp(2.2rem,4vw,3.2rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "white",
              lineHeight: 1.0,
              marginBottom: "1.25rem",
            }}
          >
            Privacy Policy
          </h1>

          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: 580, marginBottom: "2rem" }}>
            This policy describes how Blumond Solutions collects, uses, and protects your personal information in accordance with applicable data protection laws.
          </p>

          {/* Meta pills */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {[
              { label: "Effective Date", value: EFFECTIVE_DATE },
              { label: "Last Updated", value: LAST_UPDATED },
              { label: "Version", value: "2.1" },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  padding: "0.5rem 1rem",
                }}
              >
                <div style={{ fontSize: "0.65rem", fontFamily: "var(--bm-font-head)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>{m.label}</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "white" }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section style={{ background: "var(--white)", padding: "5rem 2.5rem" }}>
        <div
          className="responsive-sidebar-grid"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {/* Article */}
          <article>
            {/* Intro note */}
            <div
              style={{
                background: "var(--blue-pale)",
                border: "1px solid rgba(0,47,167,0.15)",
                borderLeft: "4px solid var(--blue-royal)",
                padding: "1.25rem 1.5rem",
                marginBottom: "3rem",
                fontSize: "0.88rem",
                color: "var(--blue-royal-dark)",
                lineHeight: 1.75,
                fontWeight: 500,
              }}
            >
              <strong>Summary:</strong> Blumond does not sell your personal data. We collect only what is necessary to deliver our services and comply with the law. You have the right to access, correct, or delete your information at any time. Contact us at privacy@blumond.com with any questions.
            </div>

            {SECTIONS.map((section) => (
              <SectionBlock key={section.id} section={section} />
            ))}
          </article>

          {/* Sticky Sidebar — Table of Contents */}
          <aside className="responsive-sidebar-aside" style={{ position: "sticky", top: "108px" }}>
            <div
              style={{
                border: "1px solid var(--gray-light)",
                borderTop: "3px solid var(--blue-royal)",
                padding: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--bm-font-head)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--blue-royal)",
                  marginBottom: "1rem",
                }}
              >
                Contents
              </p>
              <nav style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="legal-toc-link"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--gray-mid)",
                      textDecoration: "none",
                      padding: "0.375rem 0.75rem",
                      borderLeft: "2px solid var(--gray-light)",
                      fontWeight: 500,
                      lineHeight: 1.4,
                      transition: "color 0.2s, border-color 0.2s, padding-left 0.2s",
                    }}
                  >
                    {s.heading}
                  </a>
                ))}
              </nav>
            </div>

            {/* Related legal links */}
            <div style={{ border: "1px solid var(--gray-light)", padding: "1.25rem 1.5rem" }}>
              <p style={{ fontFamily: "var(--bm-font-head)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-mid)", marginBottom: "0.875rem" }}>
                Related Legal
              </p>
              {[
                { href: "/legal/terms", label: "Terms & Conditions" },
                { href: "/legal/cookie-policy", label: "Cookie Policy" },
                { href: "/legal/disclaimer", label: "Disclaimer" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.6rem 0",
                    borderBottom: "1px solid var(--gray-light)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--gray-dark)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  className="legal-related-link"
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              ))}
            </div>

            {/* Contact DPO */}
            <div style={{ background: "var(--blue-royal)", padding: "1.5rem", marginTop: "1.5rem" }}>
              <p style={{ fontFamily: "var(--bm-font-head)", fontWeight: 900, fontSize: "0.85rem", textTransform: "uppercase", color: "white", marginBottom: "0.5rem" }}>
                Privacy Questions?
              </p>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Contact our Data Protection Officer directly.
              </p>
              <a href="mailto:privacy@blumond.com" className="btn-white-outline" style={{ padding: "0.6rem 1rem", fontSize: "0.75rem", width: "100%", justifyContent: "center" }}>
                <span>privacy@blumond.com</span>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: "Privacy Policy | Blumond Solutions",
  description:
    "Blumond Solutions' Privacy Policy — how we collect, use, and protect your personal data.",
};