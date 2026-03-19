import { Cormorant_Garamond } from 'next/font/google';

const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'] });

export const metadata = {
  robots: { index: false, follow: false }
};

type Section = {
  title: string;
  why: string;
  steps: string[];
  check: string[];
  mistakes?: string[];
};

const sections: Section[] = [
  {
    title: '1) Before you begin: what this guide is for',
    why: 'You are not trying to become an engineer. You are setting up one reliable assistant that runs safely and helps you every day.',
    steps: [
      'Goal for today: your assistant can respond in Telegram and remember project context.',
      'You only need: laptop, one VPS, Telegram, and an API key for a model.',
      'Time estimate: 60–90 minutes for first setup.'
    ],
    check: ['You understand the goal: useful + safe > fancy.', 'You are ready to move one step at a time.']
  },
  {
    title: '2) Secure foundation (SSH + private network)',
    why: 'If security is weak, everything after this is fragile. This is the non-negotiable base.',
    steps: [
      'Create a VPS with Ubuntu 22.04/24.04.',
      'Create an SSH key on your laptop and add the public key to the VPS provider.',
      'Install Tailscale on laptop + server so SSH happens over a private network.',
      'Log in using private address (not open public password auth).'
    ],
    check: [
      'You can SSH into server without password prompts every time.',
      'You can see both devices connected in Tailscale.',
      'Server is reachable privately before OpenClaw setup.'
    ],
    mistakes: ['Skipping private networking.', 'Using weak/default auth.', 'Moving to app setup before SSH is stable.']
  },
  {
    title: '3) Install OpenClaw and verify health',
    why: 'Install is easy. Verification is what saves hours later.',
    steps: [
      'Install Node.js 22+ on server.',
      'Install OpenClaw and run onboarding.',
      'Connect Telegram during onboarding and approve pairing.',
      'Run health checks after onboarding.'
    ],
    check: ['openclaw --version works', 'openclaw status shows healthy', 'openclaw gateway status shows running', 'You received first Telegram response'],
    mistakes: ['Not checking gateway status after onboarding.', 'Pairing in wrong chat/topic.']
  },
  {
    title: '4) Telegram setup for multiple projects',
    why: 'Without topic structure, context gets messy and outputs degrade fast.',
    steps: [
      'Create one Telegram group for your assistant workflows.',
      'Use separate topics: Build, Marketing, Ops, Personal, Payments.',
      'Keep each topic single-purpose. Don’t mix project requests in one thread.',
      'Ask for daily topic summaries if context gets long.'
    ],
    check: ['Each topic has a clear function.', 'Assistant can stay focused per topic.'],
    mistakes: ['Running unrelated tasks in one thread.', 'No naming convention for topics.']
  },
  {
    title: '5) Memory system that actually works',
    why: 'Agents seem smart but forget unless memory is structured and maintained.',
    steps: [
      'Keep daily memory logs (what changed today).',
      'Maintain a long-term memory file for durable facts and operating rules.',
      'Track priorities + blockers separately so execution stays clear.',
      'Run a nightly maintenance pass to update memory and SOPs.'
    ],
    check: ['Important decisions are recoverable next day.', 'Blockers are visible with owners.', 'Repeated tasks have written SOPs.'],
    mistakes: ['Relying on chat history alone.', 'No nightly update routine.']
  },
  {
    title: '6) Gmail integration in safe mode',
    why: 'Email automation is high leverage, but must keep human control for sends.',
    steps: [
      'Grant read + draft + label/archive permissions first.',
      'Keep send permission off by default.',
      'Use workflow: summarize inbox → draft replies → human approves send.',
      'Add morning triage and end-of-day cleanup routines.'
    ],
    check: ['Inbox gets summarized with priority order.', 'Drafts are ready for approval.', 'No unsupervised sending.'],
    mistakes: ['Auto-send too early.', 'No clear approval rule.']
  },
  {
    title: '7) How to recover from mistakes (critical)',
    why: 'The difference between chaos and scale is whether mistakes become system upgrades.',
    steps: [
      'After any failure, write what happened + root cause in memory.',
      'Add a permanent rule/SOP update to prevent recurrence.',
      'Use blocker language: ask only for access/approval that unlocks execution.'
    ],
    check: ['You can point to the exact SOP/rule created after each failure.', 'Repeated mistakes decrease over time.']
  }
];

const dailyRitual = [
  'Morning (5 min): ask for Top 3 priorities and today’s blockers.',
  'Midday (2 min): check if priorities changed.',
  'Nightly (automated): update memory + priorities + SOPs.'
];

const screenshotChecklist = [
  'VPS create screen',
  'SSH key generation',
  'Tailscale machine list',
  'OpenClaw onboarding in terminal',
  'Telegram pairing approval',
  'Topic structure in Telegram',
  'Memory before/after example',
  'Gmail draft review flow'
];

export default function PdfFullDraftPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7f4ed', color: '#1f1d1a', padding: '42px 20px 80px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: 1.2, fontSize: 12, color: '#7a7268' }}>Private PDF draft — full beginner version v2</p>

        <h1 className={editorial.className} style={{ margin: '10px 0 8px', fontSize: 'clamp(34px, 6vw, 64px)', color: '#6b2e1e', fontWeight: 500 }}>
          Set Up Your AI Agent (Beginner-Friendly)
        </h1>

        <p style={{ marginTop: 0, fontSize: 18, color: '#4c453f', lineHeight: 1.55 }}>
          This version is written for non-technical builders. It gives you practical setup steps, what to check after each step, and what mistakes to avoid.
        </p>

        <section style={{ marginTop: 20, background: '#fff', border: '1px solid #e9dece', borderRadius: 14, padding: 16 }}>
          <h2 className={editorial.className} style={{ margin: '0 0 8px', color: '#6b2e1e', fontSize: 32, fontWeight: 600 }}>What you’ll have by the end</h2>
          <ul style={{ margin: 0, paddingLeft: 22, color: '#4d453f', lineHeight: 1.6 }}>
            <li>A secure OpenClaw assistant running on your server</li>
            <li>Telegram topics for separate projects and cleaner context</li>
            <li>A memory system that retains decisions and blockers</li>
            <li>Safe Gmail triage with human approval on sends</li>
            <li>A repeatable daily/weekly routine to keep quality high</li>
          </ul>
        </section>

        <section style={{ marginTop: 18, display: 'grid', gap: 12 }}>
          {sections.map((s) => (
            <article key={s.title} style={{ background: '#fff', border: '1px solid #e9dece', borderRadius: 14, padding: 16 }}>
              <h2 className={editorial.className} style={{ margin: '0 0 8px', color: '#6b2e1e', fontSize: 32, fontWeight: 600 }}>{s.title}</h2>

              <p style={{ margin: '0 0 10px', color: '#5a5048', lineHeight: 1.55 }}><strong>Why this matters:</strong> {s.why}</p>

              <p style={{ margin: '0 0 6px', color: '#5a5048' }}><strong>Steps:</strong></p>
              <ol style={{ margin: '0 0 10px', paddingLeft: 22, color: '#4d453f', lineHeight: 1.6 }}>
                {s.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <p style={{ margin: '0 0 6px', color: '#5a5048' }}><strong>Done means:</strong></p>
              <ul style={{ margin: '0 0 0', paddingLeft: 22, color: '#4d453f', lineHeight: 1.6 }}>
                {s.check.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>

              {s.mistakes && (
                <>
                  <p style={{ margin: '10px 0 6px', color: '#8a3d30' }}><strong>Avoid these mistakes:</strong></p>
                  <ul style={{ margin: 0, paddingLeft: 22, color: '#6b3f35', lineHeight: 1.6 }}>
                    {s.mistakes.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          ))}
        </section>

        <section style={{ marginTop: 18, background: '#fff', border: '1px solid #e9dece', borderRadius: 14, padding: 16 }}>
          <h2 className={editorial.className} style={{ margin: '0 0 8px', color: '#6b2e1e', fontSize: 32, fontWeight: 600 }}>Your simple operating rhythm</h2>
          <ul style={{ margin: 0, paddingLeft: 22, color: '#4d453f', lineHeight: 1.6 }}>
            {dailyRitual.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginTop: 18, background: '#fff', border: '1px solid #e9dece', borderRadius: 14, padding: 16 }}>
          <h2 className={editorial.className} style={{ margin: '0 0 8px', color: '#6b2e1e', fontSize: 32, fontWeight: 600 }}>Screenshot checklist (for visual version)</h2>
          <ul style={{ margin: 0, paddingLeft: 22, color: '#4d453f', lineHeight: 1.6 }}>
            {screenshotChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
