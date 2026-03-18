const bullets = [
  'A beginner-friendly walkthrough for setting up your own Telegram AI assistant',
  'Copy/paste prompts for daily planning, reminders, and momentum',
  'A tiny CEO ritual: morning priorities + 2am nightly review',
  'Troubleshooting guide so you don’t get stuck on setup'
];

export default function GirliesDraftPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#f8f4ee',
        color: '#171717',
        padding: '48px 20px 72px'
      }}
    >
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <p style={{ margin: 0, letterSpacing: 1.4, textTransform: 'uppercase', fontSize: 12, color: '#7a5b61' }}>
          Draft landing page v1
        </p>

        <h1 style={{ fontSize: 'clamp(34px, 7vw, 62px)', lineHeight: 1.05, margin: '12px 0 14px' }}>
          everyone has an AI agent now… getting FOMO?
        </h1>

        <p style={{ fontSize: 20, maxWidth: 700, marginTop: 0 }}>
          Build your little AI assistant right inside Telegram — with a cute, clear, step-by-step guide.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24, marginBottom: 14 }}>
          <button
            style={{
              border: 0,
              borderRadius: 999,
              padding: '13px 22px',
              background: '#b76e79',
              color: '#fff',
              fontWeight: 700,
              fontSize: 15
            }}
          >
            Get the PDF for $1
          </button>
          <button
            style={{
              border: '1px solid #b76e79',
              borderRadius: 999,
              padding: '13px 22px',
              background: 'transparent',
              color: '#7f4a53',
              fontWeight: 700,
              fontSize: 15
            }}
          >
            Preview what’s inside
          </button>
        </div>

        <p style={{ color: '#6f6a66', marginTop: 0 }}>Beginner-friendly • no heavy coding • start today</p>

        <section
          style={{
            background: '#fff',
            border: '1px solid #eadbd0',
            borderRadius: 18,
            padding: '22px 20px',
            marginTop: 30,
            boxShadow: '0 8px 24px rgba(74,34,44,0.05)'
          }}
        >
          <h2 style={{ marginTop: 0 }}>What you get</h2>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginTop: 34 }}>
          <h2 style={{ marginBottom: 10 }}>Who this is for</h2>
          <p style={{ marginTop: 0, fontSize: 18 }}>
            You keep seeing AI agents everywhere, feel a little behind, and want a practical win without getting lost in technical setup.
          </p>
        </section>

        <section
          style={{
            marginTop: 30,
            background: '#fff',
            border: '1px solid #eadbd0',
            borderRadius: 18,
            padding: '18px 20px'
          }}
        >
          <p style={{ margin: 0, fontWeight: 700, fontSize: 22 }}>$1 launch price</p>
          <p style={{ marginBottom: 0, color: '#5f5955' }}>One dollar. Instant PDF delivery.</p>
        </section>

        <p style={{ marginTop: 24, color: '#7a7470', fontSize: 13 }}>Draft for review — voice, design direction, and offer can all be adjusted.</p>
      </div>
    </main>
  );
}
