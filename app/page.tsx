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
      <div style={{ maxWidth: 720, width: '100%', textAlign: 'center' }}>
        <p style={{ margin: 0, opacity: 0.8, textTransform: 'uppercase', letterSpacing: 1.1, fontSize: 12 }}>Opal Project</p>
        <h1 style={{ marginTop: 10, marginBottom: 8 }}>Agent Inbox MVP</h1>
        <p style={{ marginTop: 0, opacity: 0.9 }}>Product in active development.</p>
      </div>
    </main>
  );
}
