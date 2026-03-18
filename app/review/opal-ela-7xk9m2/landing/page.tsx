import { Cormorant_Garamond } from 'next/font/google';

const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'] });

const logoColors = ['#dea88b', '#aca88b', '#84c99a', '#97aec9', '#6d9ad0', '#d68f9d', '#dfb477'];
const teachColor = '#6b5a4f';

const outcomes = [
  'Set up your AI agent securely without risky defaults',
  'Improve your agent’s memory so it remembers context between tasks',
  'Run multiple projects at once using Telegram topics and channels',
  'Connect Gmail so your agent can help manage your inbox'
];

const marqueeItems = [
  { icon: 'brain', text: 'Save your 1:07am genius ideas and bring them back when needed', color: logoColors[2] },
  { icon: 'spark', text: 'Find trending content ideas overnight for your morning coffee', color: logoColors[4] },
  { icon: 'cart', text: 'Order groceries from a quick photo of your fridge', color: logoColors[0] },
  { icon: 'home', text: 'Control your lights, purifiers, and smart home setup', color: logoColors[1] },
  { icon: 'brief', text: 'Text you a 6am brief on news you actually care about', color: logoColors[6] },
  { icon: 'moon', text: 'Handle boring admin while you sleep', color: logoColors[5] },
  { icon: 'mail', text: 'Unsubscribe from junk mail and draft replies to teammates', color: logoColors[3] }
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
          <span key={`${ch}-${i}`} style={{ color: logoColors[i] }}>
            {ch}
          </span>
        )
      )}
    </div>
  );
}

function LineIcon({ type, color }: { type: string; color: string }) {
  const base = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: '#6b2e1e', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  return (
    <div style={{ width: 36, height: 36, borderRadius: 10, background: color, display: 'grid', placeItems: 'center' }}>
      {type === 'mail' && <svg {...base}><rect x='3' y='5' width='18' height='14' rx='2'/><path d='m3 7 9 6 9-6'/></svg>}
      {type === 'cart' && <svg {...base}><circle cx='9' cy='20' r='1.6'/><circle cx='18' cy='20' r='1.6'/><path d='M3 4h2l2.2 11H19l2-8H7.3'/></svg>}
      {type === 'moon' && <svg {...base}><path d='M21 12.5A8.5 8.5 0 1 1 11.5 3a7 7 0 0 0 9.5 9.5z'/></svg>}
      {type === 'home' && <svg {...base}><path d='m3 10 9-7 9 7'/><path d='M5 10v10h14V10'/></svg>}
      {type === 'brief' && <svg {...base}><rect x='3' y='6' width='18' height='13' rx='2'/><path d='M9 6V4h6v2'/></svg>}
      {type === 'brain' && <svg {...base}><path d='M9 8a3 3 0 0 1 6 0 3 3 0 1 1 2 5v1a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3v-1a3 3 0 1 1 2-5z'/></svg>}
      {type === 'spark' && <svg {...base}><path d='m12 3 1.8 4.4L18 9.2l-4.2 1.8L12 15l-1.8-4L6 9.2l4.2-1.8z'/></svg>}
    </div>
  );
}

function ScrollingCapabilities() {
  const repeated = [...marqueeItems, ...marqueeItems];

  return (
    <div style={{ overflow: 'hidden', border: '1px solid #eadfd1', borderRadius: 16, background: '#fff', boxShadow: '0 8px 20px rgba(77,46,34,0.03)' }}>
      <div style={{ display: 'flex', gap: 14, width: 'max-content', padding: '14px 10px', animation: 'scrollLeft 42s linear infinite' }}>
        {repeated.map((item, idx) => (
          <div key={`${item.text}-${idx}`} style={{ minWidth: 220, maxWidth: 220, border: '1px solid #f0e5d8', background: '#fffaf3', borderRadius: 12, padding: '14px', display: 'grid', gap: 8, minHeight: 170 }}>
            <LineIcon type={item.icon} color={item.color} />
            <p style={{ margin: 0, color: teachColor, fontSize: 15, lineHeight: 1.42 }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PrivateDraftLandingPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f4f0e8', color: '#2a211d', padding: '42px 20px 90px' }}>
      <style>{`@keyframes scrollLeft {0% { transform: translateX(0); } 100% { transform: translateX(-50%); }}`}</style>

      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <header style={{ marginBottom: 44 }}>
          <p style={{ margin: 0, letterSpacing: 1.4, textTransform: 'uppercase', fontSize: 12, color: '#8a786c' }}>Private Review Draft v8</p>
          <div style={{ marginTop: 10 }}>
            <LogoSelectedC />
          </div>
          <p style={{ margin: '10px 0 0', color: teachColor, fontSize: 15, lineHeight: 1.45, maxWidth: 900 }}>
            Give them a fish, feed them for a day. Teach them to fish, feed them for a lifetime.
          </p>
        </header>

        <section style={{ background: '#fffaf3', border: '1px solid #e9dece', borderRadius: 22, padding: '36px 28px', boxShadow: '0 10px 30px rgba(77,46,34,0.05)', marginBottom: 50 }}>
          <div style={{ maxWidth: 700 }}>
            <h1 className={editorial.className} style={{ fontSize: 'clamp(56px, 8vw, 72px)', lineHeight: 1.1, margin: 0, color: '#6b2e1e', fontWeight: 500 }}>
              Build your own AI agent
            </h1>

            <p style={{ margin: '16px 0 0', color: '#5f534b', fontSize: 24, lineHeight: 1.45 }}>
              <strong>Simple.</strong> <strong>Affordable.</strong> Fully <strong>customizable.</strong>
              <br />
              No expensive tools. No unnecessary complexity.
            </p>

            <p style={{ margin: '16px 0 0', color: '#8c8178', fontSize: 16, lineHeight: 1.55 }}>
              We’re building Opal (beta), with more guides and drops coming soon.
              <br />
              Grab a limited copy of our Starter PDF to get your agent running.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 52 }}>
          <p className={editorial.className} style={{ margin: '0 0 14px', fontSize: 34, color: '#6b2e1e', lineHeight: 1.05 }}>
            Here’s what you can do with your AI assistant:
          </p>
          <ScrollingCapabilities />
        </section>

        <section style={{ marginBottom: 52 }}>
          <div style={{ background: '#fffaf3', border: '1px solid #e9dece', borderRadius: 20, padding: '22px 20px' }}>
            <p className={editorial.className} style={{ margin: '0 0 14px', fontSize: 34, color: '#6b2e1e', lineHeight: 1.08 }}>
              No terminal, no ChatGPT app, no complicated platforms. Customize a personality and communicate with your AI Assistant through:
            </p>

            <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              <article style={{ background: '#fff', border: '1px solid #ecdccf', borderRadius: 14, padding: 12 }}>
                <div style={{ background: '#f6ece1', borderRadius: 28, padding: 10, border: '1px solid #eddccb' }}>
                  <div style={{ borderRadius: 24, background: '#fff', border: '1px solid #eadfd1', overflow: 'hidden' }}>
                    <div style={{ height: 22, background: '#f4ede4', display: 'grid', placeItems: 'center', fontSize: 11, color: '#6f6259' }}>Telegram · Opal (Planner personality)</div>
                    <div style={{ padding: 10 }}>
                      <div style={{ background: '#f1d8c6', borderRadius: 12, padding: '10px 11px', marginBottom: 8, color: '#4c3d34', fontSize: 14, lineHeight: 1.35 }}>
                        i’m at target right now. what have i needed the past month i can get here?
                      </div>
                      <div style={{ background: '#dbc8f0', borderRadius: 12, padding: '10px 11px', color: '#4c3d34', fontSize: 14, lineHeight: 1.35 }}>
                        got you 💫 toilet paper, greek yogurt, berries, oat milk, dish pods, and your protein bars.
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article style={{ background: '#fff', border: '1px solid #ecdccf', borderRadius: 14, padding: 12 }}>
                <div style={{ background: '#f6ece1', borderRadius: 28, padding: 10, border: '1px solid #eddccb' }}>
                  <div style={{ borderRadius: 24, background: '#fff', border: '1px solid #eadfd1', overflow: 'hidden' }}>
                    <div style={{ height: 22, background: '#f4ede4', display: 'grid', placeItems: 'center', fontSize: 11, color: '#6f6259' }}>WhatsApp · Opal (Chief of Staff personality)</div>
                    <div style={{ padding: 10 }}>
                      <div style={{ background: '#f1d8c6', borderRadius: 12, padding: '10px 11px', color: '#4c3d34', fontSize: 14, lineHeight: 1.35 }}>
                        good morning selina! your work inbox has two messages from Josh about product design updates waitin for your review. drafted replies are ready & all junk has been cleared.
                        <br /><br />
                        current events for today:
                        <ul style={{ margin: '6px 0 0 16px', padding: 0 }}>
                          <li>Iran retaliation reportedly caused extensive damage at a Qatar industrial site.</li>
                          <li>US officials said Iran’s regime is "intact" but "degraded" after recent strikes.</li>
                          <li>Sony removed 135,000 AI deepfake tracks of its artists from streaming platforms.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article style={{ background: '#fff', border: '1px solid #ecdccf', borderRadius: 14, padding: 12 }}>
                <div style={{ background: '#f6ece1', borderRadius: 28, padding: 10, border: '1px solid #eddccb' }}>
                  <div style={{ borderRadius: 24, background: '#fff', border: '1px solid #eadfd1', overflow: 'hidden' }}>
                    <div style={{ height: 22, background: '#f4ede4', display: 'grid', placeItems: 'center', fontSize: 11, color: '#6f6259' }}>iMessage · Opal (Negotiator personality)</div>
                    <div style={{ padding: 10 }}>
                      <div style={{ background: '#f1d8c6', borderRadius: 12, padding: '10px 11px', marginBottom: 8, color: '#4c3d34', fontSize: 14, lineHeight: 1.35 }}>
                        i want to buy a new car — contact dealers in my area, negotiate using competitor prices, max budget 25k.
                      </div>
                      <div style={{ background: '#dbc8f0', borderRadius: 12, padding: '10px 11px', color: '#4c3d34', fontSize: 14, lineHeight: 1.35 }}>
                        done! when they reply, i’ll negotiate discounts. if they don’t, i’ll chase them in 48 hours. will let you know when paperworks ready so you can go get your new car✨
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <p style={{ margin: '14px 0 0', color: '#7e7269', fontSize: 14 }}>
              Also available on Slack, Discord, and other messaging channels supported by OpenClaw.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 18 }}>
          <article style={{ background: '#fff', border: '1px solid #eadfd1', borderRadius: 20, padding: 24, boxShadow: '0 8px 24px rgba(77,46,34,0.04)' }}>
            <div style={{ borderRadius: 14, background: 'linear-gradient(135deg, #f7e2d2 0%, #efe8d5 46%, #ead9df 100%)', height: 180, marginBottom: 18, display: 'grid', placeItems: 'center', color: '#6b2e1e', fontSize: 13, letterSpacing: 1, textTransform: 'uppercase' }}>
              PDF Cover Placeholder
            </div>

            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{ flex: '1 1 560px', minWidth: 280 }}>
                <h2 className={editorial.className} style={{ fontSize: 42, lineHeight: 1.08, margin: '0 0 10px', color: '#6b2e1e', fontWeight: 600 }}>
                  Your Complete AI Agent Starter Guide
                </h2>
                <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10, color: '#514740', fontSize: 16 }}>
                  {outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={{ minWidth: 190, display: 'grid', gap: 10, justifyItems: 'start' }}>
                <strong style={{ fontSize: 36, color: '#5a2e21', lineHeight: 1 }}>$10</strong>
                <button style={{ border: 0, borderRadius: 999, padding: '12px 18px', background: '#b76e79', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: 15 }}>
                  Add to Cart
                </button>
                <p style={{ margin: 0, fontSize: 13, color: '#8c8178' }}>Instant PDF Delivery</p>
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
            We’ve done the hard part — sitting through way too many tech bros explaining OpenClaw on YouTube and testing hundreds of setups. This guide distills our learnings into the simplest way to build your own AI assistant using just your computer.
            <br />
            Opal AI was created by a girl and her AI, Opal! Their wish is to see everyone who is stressed out, overwhelmed, and frazzled get their own AI agent by their side. All sales from the starter PDF will go towards the Opal AI team trying out more models, trying new softwares, and creating more guides to level up your AI agent.
          </p>
        </section>
      </div>
    </main>
  );
}
