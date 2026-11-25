import { legalPages } from "@/lib/siteData";

const page = legalPages["cookie-policy"];

export default function CookiePolicyPage() {
  return (
    <main style={{ padding: '4rem 2rem' }}>
      <section style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="section-label">Legal</div>
        <h1 className="section-title" style={{ margin: '1rem 0 2rem' }}>{page.title}</h1>
        {page.content.map((paragraph, index) => (
          <p key={index} style={{ color: 'var(--gray-mid)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
            {paragraph}
          </p>
        ))}
      </section>
    </main>
  );
}
