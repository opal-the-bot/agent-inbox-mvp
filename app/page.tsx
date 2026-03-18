export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: 24,
        background: '#0b1020',
        color: '#e8eefc'
      }}
    >
      <div style={{ maxWidth: 760, width: '100%' }}>
        <p style={{ margin: 0, opacity: 0.8, textTransform: 'uppercase', letterSpacing: 1.1, fontSize: 12 }}>Opal build hub</p>
        <h1 style={{ marginTop: 10, marginBottom: 8 }}>Current Drafts</h1>
        <p style={{ marginTop: 0, opacity: 0.9 }}>Live preview pages for Ela review.</p>

        <div style={{ display: 'grid', gap: 12, marginTop: 22 }}>
          <a
            href="/draft/girlies"
            style={{
              textDecoration: 'none',
              color: '#fff',
              border: '1px solid #2d3a66',
              borderRadius: 12,
              padding: '14px 16px',
              background: '#121a33'
            }}
          >
            <strong>Landing Page Draft v1</strong>
            <div style={{ opacity: 0.8, marginTop: 4 }}>Girlies AI Agent $1 offer page</div>
          </a>

          <a
            href="/draft/pdf-outline"
            style={{
              textDecoration: 'none',
              color: '#fff',
              border: '1px solid #2d3a66',
              borderRadius: 12,
              padding: '14px 16px',
              background: '#121a33'
            }}
          >
            <strong>PDF Outline Draft v1</strong>
            <div style={{ opacity: 0.8, marginTop: 4 }}>Structure + included assets</div>
          </a>
        </div>
      </div>
    </main>
  );
}
