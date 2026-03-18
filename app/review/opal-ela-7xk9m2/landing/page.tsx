import { Cormorant_Garamond } from 'next/font/google';

const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'] });

const letterColors = ['#dea88b', '#aca88b', '#84c99a', '#97aec9', '#6d9ad0', '#d68f9d', '#dfb477'];

const outcomes = [
  'Set up your AI agent securely (without risky defaults)',
  'Improve your agent’s memory so it actually keeps context',
  'Run multiple projects at once using Telegram group topics/channels',
  'Connect your agent to Gmail to keep your inbox clean'
];

export const metadata = {
  robots: { index: false, follow: false }
};

function LogoSelectedC() {
  const letters = ['O', 'p', 'a', 'l', ' ', 'A', 'I'];
  return (
    <div className={editorial.className} style={{ fontSize: 54, letterSpacing: '-0.03em', lineHeight: 1, fontWeight: 500 }}>
      {letters.map((ch, i) =>
        ch === ' ' ? (
          <span key={`s-${i}`} style={{ marginRight: '0.14em' }} />
        ) : (
          <span key={`${ch}-${i}`} style={{ color: letterColors[i] }}>
            {ch}
          </span>
        )
      )}
    </div>
  );
}

export default function GirliesPrivateDraftPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f4f0e8', color: '#2a211d', padding: '38px 20px 84px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <header style={{ marginBottom: 28 }}>
          <p style={{ margin: 0, letterSpacing: 1.4, textTransform: 'uppercase', fontSize: 12, color: '#8a786c' }}>Private review draft v5</p>
          <div style={{ marginTop: 10 }}>
            <LogoSelectedC />
          </div>
        </header>

        <section
          style={{
            background: '#fffaf3',
            border: '1px solid #e9dece',
            borderRadius: 22,
            padding: '34px 26px',
            boxShadow: '0 10px 30px rgba(77,46,34,0.05)'
          }}
        >
          <h1 className={editorial.className} style={{ fontSize: 'clamp(44px, 7.5vw, 82px)', lineHeight: 1.02, margin: '0 0 12px', color: '#6b2e1e', fontWeight: 500 }}>
            Set Up Your AI Agent
          </h1>
          <p style={{ fontSize: 20, maxWidth: 770, margin: 0, color: '#4e423b' }}>
            One beginner-friendly PDF to launch your assistant and make it genuinely useful in your real life and business.
          </p>
        </section>

        <section style={{ marginTop: 24 }}>
          <article
            style={{
              background: '#fff',
              border: '1px solid #eadfd1',
              borderRadius: 20,
              padding: 22,
              boxShadow: '0 8px 24px rgba(77,46,34,0.04)'
            }}
          >
            <div
              style={{
                borderRadius: 14,
                background: 'linear-gradient(135deg, #f7e2d2 0%, #efe8d5 46%, #ead9df 100%)',
                height: 180,
                marginBottom: 18,
                display: 'grid',
                placeItems: 'center',
                color: '#6b2e1e',
                fontSize: 13,
                letterSpacing: 1,
                textTransform: 'uppercase'
              }}
            >
              PDF cover placeholder
            </div>

            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{ flex: '1 1 560px', minWidth: 280 }}>
                <h2 className={editorial.className} style={{ fontSize: 42, lineHeight: 1.04, margin: '0 0 10px', color: '#6b2e1e', fontWeight: 600 }}>
                  your one-stop AI agent starter guide
                </h2>
                <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10, color: '#514740', fontSize: 16 }}>
                  {outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={{ minWidth: 190, display: 'grid', gap: 10, justifyItems: 'start' }}>
                <strong style={{ fontSize: 36, color: '#5a2e21', lineHeight: 1 }}>$1</strong>
                <button
                  style={{
                    border: 0,
                    borderRadius: 999,
                    padding: '12px 18px',
                    background: '#b76e79',
                    color: '#fff',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontSize: 15
                  }}
                >
                  Add to cart
                </button>
                <p style={{ margin: 0, fontSize: 13, color: '#7a6d65' }}>Instant PDF delivery</p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
