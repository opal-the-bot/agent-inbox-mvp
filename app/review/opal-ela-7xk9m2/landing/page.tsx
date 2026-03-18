import { Cormorant_Garamond } from 'next/font/google';

const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'] });

const letterColors = ['#dea88b', '#aca88b', '#84c99a', '#97aec9', '#6d9ad0', '#d68f9d', '#dfb477'];

const products = [
  {
    title: 'From Zero to Agent Girl in 30 Minutes',
    subtitle: 'Set up your first AI assistant in Telegram without getting lost in tech rabbit holes.',
    price: '$1',
    cta: 'Add to cart'
  },
  {
    title: 'Memory Glow-Up: Make Your Agent Actually Remember',
    subtitle: 'Fix dropped context and build a clean daily + nightly memory system that sticks.',
    price: '$1',
    cta: 'Add to cart'
  },
  {
    title: 'Inbox Witchcraft: Connect Your Agent to Gmail',
    subtitle: 'Turn your inbox into calm, organized action with safe AI-assisted email workflows.',
    price: '$1',
    cta: 'Add to cart'
  }
];

const testimonials = [
  {
    quote:
      'I went from “AI seems cool but confusing” to having a little assistant that keeps me on track every day.',
    name: 'Maya R.',
    role: 'Founder'
  },
  {
    quote: 'The vibe is cute, but the systems are real. My agent now runs day + night and I feel way less scattered.',
    name: 'Nina L.',
    role: 'Creator'
  },
  {
    quote: 'Finally a guide that is actually beginner-friendly and not a wall of jargon.',
    name: 'Jess K.',
    role: 'Freelancer'
  }
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
          <p style={{ margin: 0, letterSpacing: 1.4, textTransform: 'uppercase', fontSize: 12, color: '#8a786c' }}>Private review draft v4</p>
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
            marginBottom: 26,
            boxShadow: '0 10px 30px rgba(77,46,34,0.05)'
          }}
        >
          <h1 className={editorial.className} style={{ fontSize: 'clamp(44px, 7.5vw, 82px)', lineHeight: 1.02, margin: '0 0 12px', color: '#6b2e1e', fontWeight: 500 }}>
            your one-stop shop for AI agent guides
          </h1>
          <p style={{ fontSize: 20, maxWidth: 760, margin: 0, color: '#4e423b' }}>
            Build your little AI assistant, level up its memory, and connect it to real workflows — with simple, girly, practical guides.
          </p>
        </section>

        <section style={{ marginBottom: 30 }}>
          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {products.map((p) => (
              <article
                key={p.title}
                style={{
                  background: '#fff',
                  border: '1px solid #eadfd1',
                  borderRadius: 18,
                  padding: 18,
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 250
                }}
              >
                <div
                  style={{
                    borderRadius: 12,
                    background: 'linear-gradient(135deg, #f7e2d2 0%, #efe8d5 46%, #ead9df 100%)',
                    height: 112,
                    marginBottom: 14,
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
                <h3 className={editorial.className} style={{ fontSize: 30, lineHeight: 1.08, margin: '0 0 8px', color: '#6b2e1e', fontWeight: 600 }}>
                  {p.title}
                </h3>
                <p style={{ margin: '0 0 14px', color: '#5f544d', fontSize: 15 }}>{p.subtitle}</p>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: 24, color: '#5a2e21' }}>{p.price}</strong>
                  <button
                    style={{
                      border: 0,
                      borderRadius: 999,
                      padding: '10px 15px',
                      background: '#b76e79',
                      color: '#fff',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {p.cta}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          style={{
            background: '#fffaf3',
            border: '1px solid #e9dece',
            borderRadius: 22,
            padding: '22px 22px 18px'
          }}
        >
          <h2 className={editorial.className} style={{ margin: '0 0 14px', fontSize: 44, color: '#6b2e1e', fontWeight: 500 }}>
            little reviews, big energy
          </h2>
          <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))' }}>
            {testimonials.map((t) => (
              <blockquote key={t.name} style={{ margin: 0, border: '1px solid #efdfcc', background: '#fff', borderRadius: 14, padding: 14 }}>
                <p style={{ marginTop: 0, marginBottom: 10, color: '#4e433d' }}>“{t.quote}”</p>
                <footer style={{ color: '#7a6e65', fontSize: 13 }}>
                  — {t.name}, {t.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
