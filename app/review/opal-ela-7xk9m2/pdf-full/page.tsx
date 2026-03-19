import { Cormorant_Garamond } from 'next/font/google';

const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'] });

export const metadata = {
  robots: { index: false, follow: false }
};

type Level = {
  title: string;
  subtitle: string;
  goal: string;
  why: string;
  steps: string[];
  done: string[];
  panic?: string;
};

const levels: Level[] = [
  {
    title: 'Level 1 — It replies to you',
    subtitle: 'Give your AI a home + first response',
    goal: 'Send one message in Telegram and get one response back.',
    why: 'This is your first real win. Don’t optimize yet — just prove the loop works.',
    steps: [
      'Create a small Ubuntu VPS.',
      'Generate an SSH key and attach it to your VPS provider.',
      'Install OpenClaw and run onboarding in terminal.',
      'Pair Telegram and send “hi”.'
    ],
    done: ['You sent a message.', 'It replied.', 'You officially have your own AI assistant 🎉'],
    panic: 'If this feels technical, that’s normal. You only need to follow the sequence, not understand every command.'
  },
  {
    title: 'Level 2 — It stays private and stable',
    subtitle: 'Security without overcomplication',
    goal: 'Use private access (SSH + Tailscale) so your setup is safer and less fragile.',
    why: 'If you skip this, things can break randomly or be exposed in ways you don’t want.',
    steps: [
      'Install Tailscale on your laptop + server.',
      'Connect both to the same tailnet.',
      'SSH over private network instead of weak/public defaults.',
      'Run health checks: openclaw status + gateway status.'
    ],
    done: ['Private connectivity works.', 'Gateway is healthy.', 'You can reconnect reliably after restart.']
  },
  {
    title: 'Level 3 — It remembers things',
    subtitle: 'Simple memory, not perfection',
    goal: 'Stop the “why did my AI forget?” problem.',
    why: 'AI feels smart but forgets quickly unless you give it structure.',
    steps: [
      'Keep one daily note file with what changed today.',
      'Track Top 3 priorities + blockers in separate files.',
      'Run nightly memory maintenance to keep it fresh.',
      'Write rules when mistakes happen so they don’t repeat.'
    ],
    done: ['Decisions are recoverable.', 'Blockers are visible.', 'Repeated errors drop over time.'],
    panic: 'Don’t build a perfect memory system on day one. Simple and consistent beats fancy and abandoned.'
  },
  {
    title: 'Level 4 — It starts helping your real life',
    subtitle: 'Inbox, projects, routines',
    goal: 'Move from “cool demo” to actual leverage.',
    why: 'The point is less mental load and more execution, not just chatting.',
    steps: [
      'Set up Telegram topics: Build, Marketing, Ops, Personal, Payments.',
      'Connect Gmail in safe mode (read + draft + archive, no auto-send).',
      'Run a morning brief: priorities + blockers.',
      'Run nightly review: memory + SOP updates.'
    ],
    done: ['You get useful daily guidance.', 'Drafts are ready for approval.', 'Context is separated by topic.']
  }
];

const imageList = [
  'VPS creation screen',
  'SSH key generation terminal output',
  'Tailscale dashboard with connected machines',
  'OpenClaw onboarding terminal',
  'Telegram pairing approval',
  'First Telegram response screenshot',
  'Telegram topic structure',
  'Memory before/after example',
  'Gmail draft review flow'
];

export default function PdfFullDraftPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7f4ed', color: '#1f1d1a', padding: '42px 20px 80px' }}>
      <div style={{ maxWidth: 940, margin: '0 auto' }}>
        <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: 1.2, fontSize: 12, color: '#7a7268' }}>Private PDF draft — beginner rewrite v3</p>

        <h1 className={editorial.className} style={{ margin: '10px 0 8px', fontSize: 'clamp(36px, 6vw, 68px)', color: '#6b2e1e', fontWeight: 500 }}>
          Build Your Own AI Assistant
        </h1>

        <p style={{ marginTop: 0, fontSize: 21, color: '#4c453f', lineHeight: 1.5 }}>
          No coding required. No “tech bro” energy required.
        </p>

        <section style={{ marginTop: 18, background: '#fff', border: '1px solid #e9dece', borderRadius: 14, padding: 18 }}>
          <p style={{ margin: '0 0 10px', color: '#4d453f', lineHeight: 1.6 }}>
            We sat through too many OpenClaw tutorials, tested the setups that broke, and kept only what actually works.
            This is the version we wish existed at the start.
          </p>
          <p style={{ margin: '0 0 10px', color: '#4d453f', lineHeight: 1.6 }}>
            <strong>Goal:</strong> in about 60 minutes, your AI replies to you in Telegram.
            Then we level it up so it remembers and helps with real tasks.
          </p>
          <h2 className={editorial.className} style={{ margin: '8px 0 8px', color: '#6b2e1e', fontSize: 34, fontWeight: 600 }}>What you’ll have in ~60 minutes</h2>
          <ul style={{ margin: 0, paddingLeft: 22, color: '#4d453f', lineHeight: 1.6 }}>
            <li>An AI you can text like a person</li>
            <li>A private setup that won’t collapse every week</li>
            <li>A simple memory structure so it stops forgetting everything</li>
          </ul>
        </section>

        <section style={{ marginTop: 18, display: 'grid', gap: 12 }}>
          {levels.map((level) => (
            <article key={level.title} style={{ background: '#fff', border: '1px solid #e9dece', borderRadius: 14, padding: 16 }}>
              <h2 className={editorial.className} style={{ margin: '0 0 4px', color: '#6b2e1e', fontSize: 34, fontWeight: 600 }}>{level.title}</h2>
              <p style={{ margin: '0 0 10px', color: '#7a5a4d', fontSize: 15 }}>{level.subtitle}</p>

              <p style={{ margin: '0 0 8px', color: '#4d453f', lineHeight: 1.6 }}><strong>Goal:</strong> {level.goal}</p>
              <p style={{ margin: '0 0 8px', color: '#4d453f', lineHeight: 1.6 }}><strong>Why this matters:</strong> {level.why}</p>

              <p style={{ margin: '0 0 6px', color: '#5a5048' }}><strong>Do this:</strong></p>
              <ol style={{ margin: '0 0 10px', paddingLeft: 22, color: '#4d453f', lineHeight: 1.65 }}>
                {level.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <p style={{ margin: '0 0 6px', color: '#5a5048' }}><strong>You did it if:</strong></p>
              <ul style={{ margin: 0, paddingLeft: 22, color: '#4d453f', lineHeight: 1.65 }}>
                {level.done.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              {level.panic && (
                <div style={{ marginTop: 10, background: '#fff8ef', border: '1px solid #efd8b8', borderRadius: 10, padding: '10px 12px', color: '#6b4a3a' }}>
                  <strong>⚠️ Don’t panic:</strong> {level.panic}
                </div>
              )}
            </article>
          ))}
        </section>

        <section style={{ marginTop: 18, background: '#fff', border: '1px solid #e9dece', borderRadius: 14, padding: 16 }}>
          <h2 className={editorial.className} style={{ margin: '0 0 8px', color: '#6b2e1e', fontSize: 34, fontWeight: 600 }}>Images to include in the designed PDF</h2>
          <ul style={{ margin: 0, paddingLeft: 22, color: '#4d453f', lineHeight: 1.65 }}>
            {imageList.map((img) => (
              <li key={img}>{img}</li>
            ))}
          </ul>
        </section>

        <section style={{ marginTop: 18, background: '#fff', border: '1px solid #e9dece', borderRadius: 14, padding: 16 }}>
          <h2 className={editorial.className} style={{ margin: '0 0 8px', color: '#6b2e1e', fontSize: 34, fontWeight: 600 }}>You’re not done — you’re started</h2>
          <p style={{ margin: 0, color: '#4d453f', lineHeight: 1.65 }}>
            Right now your AI can reply, remember a little, and help with core tasks. From here, you can train it for inbox, planning, travel, research, and business workflows.
            That’s the real upside: less overwhelm, more execution.
          </p>
        </section>
      </div>
    </main>
  );
}
