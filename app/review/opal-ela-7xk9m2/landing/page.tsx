import { Cormorant_Garamond } from 'next/font/google';

const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'] });

const bullets = [
  'A beginner-friendly walkthrough for setting up your own Telegram AI assistant',
  'Copy/paste prompts for daily planning, reminders, and momentum',
  'A tiny CEO ritual: morning priorities + 2am nightly review',
  'Troubleshooting guide so you don’t get stuck on setup'
];

const letterColors = ['#dea88b', '#aca88b', '#84c99a', '#97aec9', '#6d9ad0', '#d68f9d', '#dfb477'];

export const metadata = {
  robots: { index: false, follow: false }
};

function LogoCirclesWord() {
  const letters = ['O', 'p', 'a', 'l', ' ', 'A', 'I'];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
      {letters.map((ch, i) =>
        ch === ' ' ? (
          <div key={`space-${i}`} style={{ width: 14 }} />
        ) : (
          <div
            key={`${ch}-${i}`}
            className={editorial.className}
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: letterColors[i],
              display: 'grid',
              placeItems: 'center',
              color: '#6b2e1e',
              fontSize: 27,
              lineHeight: 1,
              fontWeight: 600
            }}
          >
            {ch}
          </div>
        )
      )}
    </div>
  );
}

function LogoTextColorLetters() {
  const letters = ['O', 'p', 'a', 'l', ' ', 'A', 'I'];
  return (
    <div className={editorial.className} style={{ fontSize: 46, color: '#6b2e1e', letterSpacing: '-0.01em', lineHeight: 1, fontWeight: 600 }}>
      {letters.map((ch, i) =>
        ch === ' ' ? (
          <span key={`s-${i}`}>&nbsp;</span>
        ) : (
          <span key={`${ch}-${i}`} style={{ color: letterColors[i], marginRight: '-0.01em' }}>
            {ch}
          </span>
        )
      )}
    </div>
  );
}

function LogoTextColorLettersTight() {
  const letters = ['O', 'p', 'a', 'l', ' ', 'A', 'I'];
  return (
    <div className={editorial.className} style={{ fontSize: 54, color: '#6b2e1e', letterSpacing: '-0.03em', lineHeight: 1, fontWeight: 500 }}>
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

function LogoOutlinedChips() {
  const letters = ['O', 'p', 'a', 'l', ' ', 'A', 'I'];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
      {letters.map((ch, i) =>
        ch === ' ' ? (
          <div key={`space2-${i}`} style={{ width: 14 }} />
        ) : (
          <div
            key={`${ch}-${i}`}
            className={editorial.className}
            style={{
              borderRadius: 999,
              border: `1px solid ${letterColors[i]}`,
              color: '#6b2e1e',
              background: '#fff7f2',
              padding: '4px 10px 6px',
              fontSize: 28,
              lineHeight: 1,
              fontWeight: 600
            }}
          >
            {ch}
          </div>
        )
      )}
    </div>
  );
}

export default function GirliesPrivateDraftPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#eeede2', color: '#171717', padding: '48px 20px 72px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <p style={{ margin: 0, letterSpacing: 1.4, textTransform: 'uppercase', fontSize: 12, color: '#7a5b61' }}>Private review draft v2 — logo explorations</p>

        <section style={{ background: '#fff', border: '1px solid #e7dfd4', borderRadius: 16, padding: 18, marginTop: 14, marginBottom: 28 }}>
          <h2 style={{ marginTop: 0, marginBottom: 16, fontSize: 20 }}>Logo options</h2>

          <div style={{ display: 'grid', gap: 16 }}>
            <div>
              <p style={{ margin: '0 0 8px', fontSize: 13, color: '#6f6660' }}>A) Circles per letter with space between “Opal” and “AI”</p>
              <LogoCirclesWord />
            </div>

            <div>
              <p style={{ margin: '0 0 8px', fontSize: 13, color: '#6f6660' }}>B) Text logo only, each letter different color (normal tightness)</p>
              <LogoTextColorLetters />
            </div>

            <div>
              <p style={{ margin: '0 0 8px', fontSize: 13, color: '#6f6660' }}>C) Text logo only, each letter different color (extra tight spacing)</p>
              <LogoTextColorLettersTight />
            </div>

            <div>
              <p style={{ margin: '0 0 8px', fontSize: 13, color: '#6f6660' }}>D) Rounded chips (soft outline style)</p>
              <LogoOutlinedChips />
            </div>
          </div>
        </section>

        <h1 className={editorial.className} style={{ fontSize: 'clamp(44px, 8vw, 82px)', lineHeight: 1.03, margin: '12px 0 14px', color: '#6b2e1e', fontWeight: 500 }}>
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
