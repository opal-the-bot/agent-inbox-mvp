import { Cormorant_Garamond } from 'next/font/google';

const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'] });

const sections = [
  {
    title: 'Secure foundation first (SSH + Tailscale)',
    points: ['Private server access', 'SSH key setup', 'Tailscale network']
  },
  {
    title: 'Install OpenClaw in terminal',
    points: ['Install + onboard', 'Telegram pairing', 'First successful message']
  },
  {
    title: 'Telegram multi-project setup',
    points: ['One group, multiple topics', 'Project context separation', 'Daily topic summaries']
  },
  {
    title: 'Memory upgrade prompting (Ela-style)',
    points: ['Daily + nightly memory loop', 'Priorities + blockers', 'No dropped decisions']
  },
  {
    title: 'Connect to Gmail (safe mode)',
    points: ['Read + draft + archive permissions', 'No direct send permission', 'Human approval required']
  },
  {
    title: 'Promote + improve your OpenClaw agent',
    points: ['Simple content loop', 'Mistake-recovery prompting', 'Permanent fix workflow']
  }
];

const imageChecklist = [
  'VPS create screen',
  'SSH key generation',
  'Tailscale machine view',
  'OpenClaw onboard terminal',
  'Telegram pairing approval',
  'Telegram topic/channel layout',
  'Memory docs before/after',
  'Gmail draft flow'
];

export const metadata = {
  robots: { index: false, follow: false }
};

export default function PdfDraftV1Page() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7f4ed', color: '#1f1d1a', padding: '42px 20px 70px' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: 1.2, fontSize: 12, color: '#7a7268' }}>Private PDF draft v1</p>

        <h1 className={editorial.className} style={{ margin: '10px 0 6px', fontSize: 'clamp(34px, 6vw, 64px)', color: '#6b2e1e', fontWeight: 500 }}>
          Set Up Your AI Agent
        </h1>
        <p style={{ marginTop: 0, fontSize: 18, color: '#4c453f' }}>
          Beginner-friendly guide to secure setup, memory upgrades, multi-project Telegram workflow, and Gmail cleanup.
        </p>

        <section style={{ marginTop: 24, display: 'grid', gap: 12 }}>
          {sections.map((s) => (
            <article key={s.title} style={{ background: '#fff', border: '1px solid #e9dece', borderRadius: 14, padding: 16 }}>
              <h2 className={editorial.className} style={{ margin: '0 0 8px', color: '#6b2e1e', fontSize: 32, fontWeight: 600 }}>
                {s.title}
              </h2>
              <ul style={{ margin: 0, paddingLeft: 20, color: '#4d453f' }}>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section style={{ marginTop: 24, background: '#fff', border: '1px solid #e9dece', borderRadius: 14, padding: 16 }}>
          <h2 className={editorial.className} style={{ margin: '0 0 8px', color: '#6b2e1e', fontSize: 32, fontWeight: 600 }}>
            Photo demonstration checklist
          </h2>
          <p style={{ marginTop: 0, color: '#5d544c' }}>Yes — images are possible. Share these screenshots and I’ll place + annotate them in v2.</p>
          <ul style={{ margin: 0, paddingLeft: 20, color: '#4d453f', display: 'grid', gap: 6 }}>
            {imageChecklist.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
