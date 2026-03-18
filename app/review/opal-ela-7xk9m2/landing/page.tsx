const bullets = [
  'A beginner-friendly walkthrough for setting up your own Telegram AI assistant',
  'Copy/paste prompts for daily planning, reminders, and momentum',
  'A tiny CEO ritual: morning priorities + 2am nightly review',
  'Troubleshooting guide so you don’t get stuck on setup'
];

export const metadata = {
  robots: { index: false, follow: false }
};

export default function GirliesPrivateDraftPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f8f4ee', color: '#171717', padding: '48px 20px 72px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <p style={{ margin: 0, letterSpacing: 1.4, textTransform: 'uppercase', fontSize: 12, color: '#7a5b61' }}>
          Private review draft v1
        </p>
        <h1 style={{ fontSize: 'clamp(34px, 7vw, 62px)', lineHeight: 1.05, margin: '12px 0 14px' }}>
          everyone has an AI agent now… getting FOMO?
        </h1>
        <p style={{ fontSize: 20, maxWidth: 700, marginTop: 0 }}>
          Build your little AI assistant right inside Telegram — with a cute, simple, step-by-step guide so it can run for you day and night.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24, marginBottom: 14 }}>
          <button style={{ border: 0, borderRadius: 999, padding: '13px 22px', background: '#b76e79', color: '#fff', fontWeight: 700, fontSize: 15 }}>
            Get the PDF for $1
          </button>
        </div>
        <p style={{ color: '#6f6a66', marginTop: 0 }}>Beginner-friendly • no heavy coding • start today</p>

        <section style={{ background: '#fff', border: '1px solid #eadbd0', borderRadius: 18, padding: '22px 20px', marginTop: 30 }}>
          <h2 style={{ marginTop: 0 }}>What you get</h2>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
