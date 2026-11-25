import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface TermSection {
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

const SECTIONS: TermSection[] = [
  {
    id: "acceptance",
    heading: "1. Acceptance of Terms",
    body: 'By accessing our website at www.blumond.com, engaging Blumond Solutions (Private) Limited ("Blumond", "we", "us", or "our") for any services, or by clicking "I agree" on any electronic form, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions ("Terms") and all policies incorporated by reference. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity.',
  },
  {
    id: "services",
    heading: "2. Our Services",
    body: "Blumond provides managed and professional cybersecurity, networking, and IT services including but not limited to:",
    list: [
      "Managed Security Operations Centre (SOC) services",
      "Network design, deployment, and management",
      "Cloud security architecture and implementation",
      "Governance, Risk, and Compliance (GRC) consulting",
      "Penetration testing and vulnerability assessments",
      "Endpoint protection and incident response",
      "Security awareness training and consultancy",
    ],
  },
  {
    id: "engagement",
    heading: "3. Service Engagement & Contracts",
    body: "These Terms apply to all visitors and general users of our website. Specific services are governed by individual Service Agreements, Statements of Work (SOW), or Master Service Agreements (MSA) executed between Blumond and the client. In the event of a conflict between these Terms and a signed service agreement, the service agreement shall prevail.",
  },
  {
    id: "accounts",
    heading: "4. Client Portal & Account Access",
    body: "Where Blumond provides access to a client portal or secure platform:",
    list: [
      "You are responsible for maintaining the confidentiality of your credentials",
      "You must notify us immediately of any unauthorised access to your account",
      "You may not share access credentials with third parties not authorised under your service agreement",
      "Blumond reserves the right to suspend or terminate access for suspected misuse or security risk",
    ],
  },
  {
    id: "fees",
    heading: "5. Fees, Payment & Invoicing",
    body: "All fees for services are as agreed in your service agreement or SOW. Unless otherwise stated:",
    list: [
      "Invoices are payable within 30 days of the invoice date",
      "Overdue amounts attract a late payment charge of 2% per month (compounding)",
      "All fees are exclusive of applicable taxes including sales tax, GST, and withholding tax",
      "Blumond reserves the right to suspend services for accounts with outstanding balances beyond 45 days",
      "Disputed invoices must be raised in writing within 14 days of the invoice date",
    ],
  },
  {
    id: "acceptable-use",
    heading: "6. Acceptable Use",
    body: "You agree not to use our website or services to:",
    list: [
      "Violate any applicable law, regulation, or third-party rights",
      "Transmit malicious code, malware, or any content that disrupts systems or networks",
      "Attempt to gain unauthorised access to Blumond's or any third-party's systems",
      "Reverse-engineer, decompile, or disassemble any software or tools provided by Blumond",
      "Reproduce or distribute our proprietary materials without written consent",
      "Misrepresent your identity or affiliation in any communication with us",
      "Use our services to facilitate or carry out illegal cyber activities of any kind",
    ],
  },
  {
    id: "ip",
    heading: "7. Intellectual Property",
    body: "All content on this website — including text, graphics, logos, reports, tools, and methodologies — is the intellectual property of Blumond Solutions or its licensors and is protected under applicable intellectual property law. Nothing in these Terms grants you any right to use Blumond's trademarks, service marks, or trade names without prior written consent. Deliverables produced under a service agreement are subject to IP ownership terms in that agreement.",
  },
  {
    id: "confidentiality",
    heading: "8. Confidentiality",
    body: 'Both parties agree to keep confidential any non-public information received in connection with the services ("Confidential Information"). Obligations of confidentiality do not apply to information that:',
    list: [
      "Is or becomes publicly available through no fault of the receiving party",
      "Was already known to the receiving party before disclosure",
      "Is independently developed without use of the Confidential Information",
      "Is required to be disclosed by law, regulation, or court order (subject to prior notice where legally permissible)",
    ],
  },
  {
    id: "liability",
    heading: "9. Limitation of Liability",
    body: "To the fullest extent permitted by law:",
    list: [
      "Blumond's total aggregate liability for any claims arising under or related to these Terms shall not exceed the total fees paid by the client in the 3 months preceding the claim",
      "Blumond shall not be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profit, loss of data, or business interruption",
      "Blumond does not warrant that our services will prevent all security incidents — cybersecurity services reduce risk but cannot eliminate it entirely",
      "These limitations apply even if Blumond has been advised of the possibility of such damages",
    ],
  },
  {
    id: "warranties",
    heading: "10. Warranties & Disclaimers",
    body: "Blumond warrants that its services will be performed with reasonable skill and care by qualified professionals. Except as expressly stated, our website and services are provided on an \"as is\" basis without warranties of any kind — express or implied — including fitness for a particular purpose, non-infringement, or uninterrupted availability.",
  },
  {
    id: "indemnification",
    heading: "11. Indemnification",
    body: "You agree to indemnify, defend, and hold harmless Blumond, its directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:",
    list: [
      "Your breach of these Terms",
      "Your violation of applicable law",
      "Your misuse of our services or website",
      "Any data or content you provide to us that infringes third-party rights",
    ],
  },
  {
    id: "termination",
    heading: "12. Termination",
    body: "Either party may terminate a service engagement as specified in the applicable service agreement. Blumond may immediately suspend or terminate your access to this website or any service if you breach these Terms, fail to pay invoices, or engage in conduct that poses a risk to Blumond, its clients, or third parties. Upon termination, all outstanding fees become immediately payable.",
  },
  {
    id: "governing-law",
    heading: "13. Governing Law & Dispute Resolution",
    body: "These Terms are governed by the laws of the Islamic Republic of Pakistan. Any disputes arising under these Terms shall first be subject to good-faith negotiation for 30 days. Failing resolution, disputes shall be referred to arbitration under the Arbitration Act 1940 (or its successor) in Karachi, Pakistan. The language of arbitration shall be English.",
  },
  {
    id: "changes",
    heading: "14. Changes to These Terms",
    body: "Blumond reserves the right to update these Terms at any time. We will post the updated Terms on this page with a new effective date. For material changes, we will provide notice via email or prominent website notice. Your continued use of our website or services after changes take effect constitutes acceptance.",
  },
  {
    id: "contact",
    heading: "15. Contact",
    body: "For legal enquiries relating to these Terms, please contact:",
    list: [
      "Email: legal@blumond.com",
      "Phone: +92 21 0000 0000",
      "Address: Blumond Solutions (Private) Limited, Karachi, Pakistan",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

function SectionBlock({ section }: { section: TermSection }) {
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
          fontSize: "clamp(1.05rem,2vw,1.3rem)",
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
            <div key={i} style={{ background: "var(--off-white)", borderLeft: "3px solid var(--blue-royal)", padding: "1.25rem 1.5rem" }}>
              <h3 style={{ fontFamily: "var(--bm-font-head)", fontSize: "0.88rem", fontWeight: 800, textTransform: "uppercase", color: "var(--blue-royal-dark)", marginBottom: "0.5rem", letterSpacing: "0.03em" }}>
                {sub.heading}
              </h3>
              <p style={{ color: "var(--gray-mid)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: sub.list ? "0.875rem" : 0 }}>{sub.body}</p>
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

export default function TermsPage() {
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
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 60%, rgba(0,70,255,0.18) 0%, transparent 55%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, fontSize: "12rem", opacity: 0.04, pointerEvents: "none", lineHeight: 1 }}>⚖️</div>

        <div style={{ maxWidth: 820, margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <Link href="/" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textDecoration: "none" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>/</span>
            <Link href="/legal" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textDecoration: "none" }}>Legal</Link>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>/</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>Terms & Conditions</span>
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
            Terms & Conditions
          </h1>

          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.8, maxWidth: 600 }}>
            Please read these Terms carefully before using our website or engaging Blumond for any services. By accessing our site or signing a service agreement, you agree to be bound by these Terms.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
            {[
              { label: "Effective Date", value: EFFECTIVE_DATE },
              { label: "Last Updated", value: LAST_UPDATED },
              { label: "Jurisdiction", value: "Pakistan" },
            ].map((m) => (
              <div key={m.label} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", padding: "0.5rem 1rem" }}>
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
            {/* Summary banner */}
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
              <strong>Summary:</strong> These Terms govern your use of our website and services. Key points — payments are due within 30 days; our liability is capped at 3 months of fees; disputes are resolved under Pakistani law in Karachi. Contact legal@blumond.com with any questions.
            </div>

            {SECTIONS.map((section) => (
              <SectionBlock key={section.id} section={section} />
            ))}
          </article>

          {/* Sidebar */}
          <aside className="responsive-sidebar-aside" style={{ position: "sticky", top: "108px" }}>
            <div style={{ border: "1px solid var(--gray-light)", borderTop: "3px solid var(--blue-royal)", padding: "1.5rem", marginBottom: "1.5rem" }}>
              <p style={{ fontFamily: "var(--bm-font-head)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--blue-royal)", marginBottom: "1rem" }}>
                Contents
              </p>
              <nav style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="legal-toc-link"
                    style={{ fontSize: "0.78rem", color: "var(--gray-mid)", textDecoration: "none", padding: "0.35rem 0.75rem", borderLeft: "2px solid var(--gray-light)", fontWeight: 500, lineHeight: 1.4, transition: "all 0.2s" }}
                  >
                    {s.heading}
                  </a>
                ))}
              </nav>
            </div>

            <div style={{ border: "1px solid var(--gray-light)", padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
              <p style={{ fontFamily: "var(--bm-font-head)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-mid)", marginBottom: "0.875rem" }}>Related Legal</p>
              {[
                { href: "/legal/privacy-policy", label: "Privacy Policy" },
                { href: "/legal/cookie-policy", label: "Cookie Policy" },
                { href: "/legal/disclaimer", label: "Disclaimer" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="legal-related-link"
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid var(--gray-light)", fontSize: "0.82rem", fontWeight: 600, color: "var(--gray-dark)", textDecoration: "none", transition: "color 0.2s" }}
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              ))}
            </div>

            <div style={{ background: "var(--blue-royal)", padding: "1.5rem" }}>
              <p style={{ fontFamily: "var(--bm-font-head)", fontWeight: 900, fontSize: "0.85rem", textTransform: "uppercase", color: "white", marginBottom: "0.5rem" }}>Legal Enquiries</p>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Questions about our terms or contracts?
              </p>
              <a href="mailto:legal@blumond.com" className="btn-white-outline" style={{ padding: "0.6rem 1rem", fontSize: "0.75rem", width: "100%", justifyContent: "center" }}>
                <span>legal@blumond.com</span>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: "Terms & Conditions | Blumond Solutions",
  description: "Blumond Solutions Terms & Conditions governing the use of our website and professional cybersecurity services.",
};