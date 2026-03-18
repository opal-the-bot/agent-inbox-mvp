import { Cormorant_Garamond } from 'next/font/google';

const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'] });

const letterColors = ['#dea88b', '#aca88b', '#84c99a', '#97aec9', '#6d9ad0', '#d68f9d', '#dfb477'];

const outcomes = [
  'Set up your AI agent securely without risky defaults',
  'Improve your agent’s memory so it remembers context between tasks',
  'Run multiple projects at once using Telegram topics and channels',
  'Connect Gmail so your agent can help manage your inbox'
];

const marqueeItems = [
  { icon: '📧', text: 'Unsubscribe from junk mail you hate & draft perfect replies to your scary boss before you wake up' },
  { icon: '🛒', text: 'Build your grocery list from your week + remind you before you run out of oat milk' },
  { icon: '🌙', text: 'Do your boring admin while you sleep so you wake up to “already handled”' },
  { icon: '📱', text: 'Stalk your niche (politely) and hand you content ideas that actually sound like you' },
  { icon: '🧠', text: 'Remember random genius ideas you drop at 1:07am and resurface them when needed' },
  { icon: '📅', text: 'Give you a no-BS morning plan so you stop doomscrolling and start moving' },
  { icon: '🧾', text: 'Turn messy meeting notes into clear action steps with owners and deadlines' },
  { icon: '✈️', text: 'Compare flight options and prep a trip shortlist before your coffee is ready' }
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

function ScrollingCapabilities() {
  const repeated = [...marqueeItems, ...marqueeItems];

  return (
    <div
      style={{
        overflow: 'hidden',
        border: '1px solid #eadfd1',
        borderRadius: 16,
        background: '#fff',
        boxShadow: '0 8px 20px rgba(77,46,34,0.03)'
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 12,
          width: 'max-content',
          padding: '12px 10px',
          animation: 'scrollLeft 34s linear infinite'
        }}
      >
        {repeated.map((item, idx) => (
          <div
            key={`${item.text}-${idx}`}
            style={{
              minWidth: 260,
              maxWidth: 260,
              border: '1px solid #f0e5d8',
              background: '#fffaf3',
              borderRadius: 12,
              padding: '12px 12px 10px',
              display: 'grid',
              gap: 6
            }}
          >
            <div style={{ fontSize: 22 }}>{item.icon}</div>
            <p style={{ margin: 0, color: '#4f433c', fontSize: 14, lineHeight: 1.35 }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PrivateDraftLandingPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f4f0e8', color: '#2a211d', padding: '38px 20px 84px' }}>
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <header style={{ marginBottom: 24 }}>
          <p style={{ margin: 0, letterSpacing: 1.4, textTransform: 'uppercase', fontSize: 12, color: '#8a786c' }}>Private Review Draft v7</p>
          <div style={{ marginTop: 10 }}>
            <LogoSelectedC />
          </div>
          <p style={{ margin: '10px 0 0', color: '#6b5a4f', fontSize: 13, lineHeight: 1.45, maxWidth: 900 }}>
            Give them a fish, feed them for a day. Teach them to fish, feed them for a lifetime.
          </p>
        </header>

        <section
          style={{
            background: '#fffaf3',
            border: '1px solid #e9dece',
            borderRadius: 22,
            padding: '28px 24px',
            boxShadow: '0 10px 30px rgba(77,46,34,0.05)'
          }}
        >
          <h1 className={editorial.className} style={{ fontSize: 'clamp(28px, 3.7vw, 42px)', lineHeight: 1.15, margin: '0 0 12px', color: '#6b2e1e', fontWeight: 500, maxWidth: 920 }}>
            Everything you need to learn to create your own AI agent, simplified and ELI5-ed. You’ll have the power to make yours fully customized to you — no more paying for expensive wrappers that don’t work.
          </h1>

          <p className={editorial.className} style={{ margin: '12px 0 12px', fontSize: 33, color: '#6b2e1e', lineHeight: 1.05 }}>
            Here’s What You Can Do with Your AI Assistant
          </p>

          <ScrollingCapabilities />
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

        <section
          style={{
            marginTop: 16,
            background: '#fffaf3',
            border: '1px solid #e9dece',
            borderRadius: 16,
            padding: '16px 18px'
          }}
        >
          <p style={{ margin: 0, color: '#5b4d44', fontSize: 15, lineHeight: 1.5 }}>
            We’ve done the hard part — sat through way too many tech bros explaining OpenClaw on YouTube, tested hundreds of setups,
            and distilled it into the simplest way to build your own AI assistant using just your computer.
          </p>
        </section>
      </div>
    </main>
  );
}
