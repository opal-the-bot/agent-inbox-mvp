import { Cormorant_Garamond } from 'next/font/google';

const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'] });

export const metadata = {
  robots: { index: false, follow: false }
};

const sections = [
  {
    title: '1) Secure foundation first (SSH + Tailscale)',
    bullets: [
      'Create VPS (Ubuntu), generate SSH key, and connect over Tailscale private network.',
      'Use private access patterns only; verify SSH over Tailscale works before anything else.',
      'Checklist: VPS account, terminal, Tailscale account, Telegram account, API key.'
    ]
  },
  {
    title: '2) Install OpenClaw in terminal',
    bullets: [
      'Install Node.js 22+, install OpenClaw, run onboarding, configure Telegram, restart gateway.',
      'Validate with: openclaw --version, openclaw status, openclaw gateway status.',
      'Approve pairing and send first successful message.'
    ]
  },
  {
    title: '3) Telegram multi-project setup',
    bullets: [
      'One group, multiple topics (Product, Marketing, Ops, Personal).',
      'One topic = one context. Keep decisions + blockers in relevant topic.',
      'Run daily topic summaries to prevent context drift.'
    ]
  },
  {
    title: '4) Memory upgrade prompting (Ela-style)',
    bullets: [
      'Use PARA-style loop: daily notes, priorities, blockers, project files, nightly review.',
      'Prompt: “Run nightly review now… add durable facts only, flag blockers requiring my input.”',
      'Goal: no dropped decisions, reliable recall.'
    ]
  },
  {
    title: '5) Connect Gmail in safe mode',
    bullets: [
      'Allow read + draft + labels + archive; disable direct send by default.',
      'Agent drafts first, human approves final send.',
      'Morning inbox summary + draft responses + urgent triage workflow.'
    ]
  },
  {
    title: '6) Daily + nightly operating cadence',
    bullets: [
      'Morning: ask Top 3 priorities and blockers.',
      'Nightly: run memory review and update priorities/blockers.',
      'Weekly: prune stale rules and keep what still works.'
    ]
  },
  {
    title: '7) Promote + improve your assistant',
    bullets: [
      'Share practical before/after workflows publicly to drive trust and audience growth.',
      'After mistakes: document root cause + permanent fix and update process docs.',
      'Create prevention checklists for recurring failures.'
    ]
  }
];

export default function PdfFullDraftPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7f4ed', color: '#1f1d1a', padding: '42px 20px 80px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: 1.2, fontSize: 12, color: '#7a7268' }}>Private PDF draft — full content view</p>
        <h1 className={editorial.className} style={{ margin: '10px 0 8px', fontSize: 'clamp(34px, 6vw, 64px)', color: '#6b2e1e', fontWeight: 500 }}>
          Set Up Your AI Agent (Girlies Edition)
        </h1>
        <p style={{ marginTop: 0, fontSize: 18, color: '#4c453f', lineHeight: 1.5 }}>
          Beginner-friendly guide to secure setup, memory upgrades, multi-project Telegram workflow, and Gmail cleanup.
        </p>

        <section style={{ marginTop: 20, background: '#fff', border: '1px solid #e9dece', borderRadius: 14, padding: 16 }}>
          <h2 className={editorial.className} style={{ margin: '0 0 8px', color: '#6b2e1e', fontSize: 32, fontWeight: 600 }}>What this guide helps you do</h2>
          <ol style={{ margin: 0, paddingLeft: 22, color: '#4d453f', lineHeight: 1.55 }}>
            <li>Run an OpenClaw assistant securely</li>
            <li>Chat with it in Telegram</li>
            <li>Manage multiple projects cleanly in topics</li>
            <li>Improve memory reliability</li>
            <li>Keep Gmail triaged without unsafe auto-send</li>
          </ol>
        </section>

        <section style={{ marginTop: 18, display: 'grid', gap: 12 }}>
          {sections.map((s) => (
            <article key={s.title} style={{ background: '#fff', border: '1px solid #e9dece', borderRadius: 14, padding: 16 }}>
              <h2 className={editorial.className} style={{ margin: '0 0 8px', color: '#6b2e1e', fontSize: 32, fontWeight: 600 }}>{s.title}</h2>
              <ul style={{ margin: 0, paddingLeft: 22, color: '#4d453f', lineHeight: 1.6 }}>
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section style={{ marginTop: 18, background: '#fff', border: '1px solid #e9dece', borderRadius: 14, padding: 16 }}>
          <h2 className={editorial.className} style={{ margin: '0 0 8px', color: '#6b2e1e', fontSize: 32, fontWeight: 600 }}>Screenshot checklist for visual v2</h2>
          <ul style={{ margin: 0, paddingLeft: 22, color: '#4d453f', lineHeight: 1.6 }}>
            <li>VPS create screen</li>
            <li>SSH key generation</li>
            <li>Tailscale machine view</li>
            <li>OpenClaw onboarding terminal</li>
            <li>Telegram pairing approval</li>
            <li>Topic/channel layout</li>
            <li>Memory docs before/after</li>
            <li>Gmail draft flow</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
