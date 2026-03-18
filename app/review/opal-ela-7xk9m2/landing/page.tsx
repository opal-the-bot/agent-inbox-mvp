import { Cormorant_Garamond } from 'next/font/google';

const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'] });

const letterColors = ['#dea88b', '#aca88b', '#84c99a', '#97aec9', '#6d9ad0', '#d68f9d', '#dfb477'];

const outcomes = [
  'Set up your AI agent securely without risky defaults',
  'Improve your agent’s memory so it remembers context between tasks',
  'Run multiple projects at once using Telegram topics and channels',
  'Connect Gmail so your agent can help manage your inbox'
];

const reportCards = [
  {
    id: '01',
    title: 'Setup Blueprint',
    body: 'A practical setup path so your assistant is useful on day one—not just “installed.”'
  },
  {
    id: '02',
    title: 'Memory Upgrade Plan',
    body: 'Simple changes that make your agent keep context, follow preferences, and avoid repeating mistakes.'
  },
  {
    id: '03',
    title: 'Workflow + Inbox System',
    body: 'A clean operating model for projects and email so your agent supports execution, not noise.'
  }
];

const steps = [
  {
    title: 'Get the PDF instantly',
    body: 'Purchase once and access the guide immediately.'
  },
  {
    title: 'Apply the setup in under an hour',
    body: 'Follow the checklist and copy-ready templates step by step.'
  },
  {
    title: 'Run your assistant with confidence',
    body: 'Use the operating rules to keep output consistent and reliable.'
  }
];

const testimonials = [
  {
    quote:
      'I finally stopped “playing with AI” and started using it to run real work. The setup was clear and immediately useful.',
    name: 'Kate R.',
    role: 'Chief of Staff'
  },
  {
    quote:
      'This gave me a clean system, not more theory. My assistant now tracks context and helps me move faster every week.',
    name: 'Rob W.',
    role: 'Head of Product Growth'
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

export default function PrivateDraftLandingPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f4f0e8', color: '#2a211d', padding: '38px 20px 84px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <header style={{ marginBottom: 28 }}>
          <p style={{ margin: 0, letterSpacing: 1.4, textTransform: 'uppercase', fontSize: 12, color: '#8a786c' }}>Private Review Draft v6</p>
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
          <h1 className={editorial.className} style={{ fontSize: 'clamp(34px, 5.8vw, 58px)', lineHeight: 1.08, margin: '0 0 14px', color: '#6b2e1e', fontWeight: 500, maxWidth: 900 }}>
            Give them a fish, feed them for a day. Teach them to fish, feed them for a lifetime.
          </h1>
          <p style={{ fontSize: 20, maxWidth: 900, margin: 0, color: '#4e423b' }}>
            Everything you need to learn to create your own AI agent, simplified and ELI5-ed. You’ll have the power to make yours fully customized to you — no more paying for expensive wrappers that don’t work.
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
              PDF Cover Placeholder
            </div>

            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{ flex: '1 1 560px', minWidth: 280 }}>
                <h2 className={editorial.className} style={{ fontSize: 42, lineHeight: 1.04, margin: '0 0 10px', color: '#6b2e1e', fontWeight: 600 }}>
                  Your Complete AI Agent Starter Guide
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
                  Add to Cart
                </button>
                <p style={{ margin: 0, fontSize: 13, color: '#7a6d65' }}>Instant PDF Delivery</p>
              </div>
            </div>
          </article>
        </section>

        <section style={{ marginTop: 24, display: 'grid', gap: 14 }}>
          {reportCards.map((card) => (
            <article
              key={card.id}
              style={{
                background: '#fff',
                border: '1px solid #eadfd1',
                borderRadius: 18,
                padding: 20,
                boxShadow: '0 8px 24px rgba(77,46,34,0.035)'
              }}
            >
              <p style={{ margin: 0, fontSize: 12, letterSpacing: 1.2, textTransform: 'uppercase', color: '#8a786c' }}>OpalAI · {card.id}</p>
              <h3 className={editorial.className} style={{ margin: '8px 0 6px', fontSize: 34, lineHeight: 1.05, color: '#6b2e1e' }}>
                {card.title}
              </h3>
              <p style={{ margin: 0, fontSize: 17, color: '#4e423b' }}>{card.body}</p>
            </article>
          ))}
        </section>

        <section style={{ marginTop: 24, background: '#fff', border: '1px solid #eadfd1', borderRadius: 18, padding: 22 }}>
          <h3 className={editorial.className} style={{ margin: '0 0 10px', fontSize: 38, lineHeight: 1.06, color: '#6b2e1e' }}>
            How It Works
          </h3>
          <div style={{ display: 'grid', gap: 10 }}>
            {steps.map((step, idx) => (
              <div key={step.title} style={{ borderTop: idx === 0 ? 'none' : '1px solid #efe4d7', paddingTop: idx === 0 ? 0 : 10 }}>
                <p style={{ margin: '0 0 3px', fontSize: 16, fontWeight: 700, color: '#3f342f' }}>
                  {idx + 1}. {step.title}
                </p>
                <p style={{ margin: 0, fontSize: 15, color: '#5b4f48' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 24, display: 'grid', gap: 14 }}>
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              style={{
                margin: 0,
                background: '#fff',
                border: '1px solid #eadfd1',
                borderRadius: 16,
                padding: 18,
                color: '#4c413a'
              }}
            >
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5 }}>“{t.quote}”</p>
              <footer style={{ marginTop: 10, fontSize: 14, color: '#7a6d65' }}>
                <strong>{t.name}</strong> · {t.role}
              </footer>
            </blockquote>
          ))}
        </section>
      </div>
    </main>
  );
}
