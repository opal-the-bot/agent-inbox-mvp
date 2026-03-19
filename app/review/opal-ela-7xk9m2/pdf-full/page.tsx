import { Cormorant_Garamond } from 'next/font/google';

const editorial = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600', '700'] });

export const metadata = {
  robots: { index: false, follow: false }
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ background: '#fff', border: '1px solid #e9dece', borderRadius: 18, padding: '24px 22px', marginTop: 16 }}>
      <h2 className={editorial.className} style={{ margin: '0 0 12px', color: '#6b2e1e', fontSize: 38, lineHeight: 1.05, fontWeight: 600 }}>
        {title}
      </h2>
      <div style={{ color: '#3f3731', fontSize: 18, lineHeight: 1.7 }}>{children}</div>
    </section>
  );
}

function TinyStep({ n, text }: { n: number; text: string }) {
  return (
    <li style={{ marginBottom: 8 }}>
      <strong>Step {n}:</strong> {text}
    </li>
  );
}

export default function PdfFullDraftPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7f4ed', color: '#1f1d1a', padding: '42px 16px 80px' }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: 1.2, fontSize: 12, color: '#7a7268' }}>Private PDF draft — ELI5 walkthrough v4</p>

        <h1 className={editorial.className} style={{ margin: '10px 0 8px', fontSize: 'clamp(42px, 7vw, 74px)', color: '#6b2e1e', fontWeight: 500, lineHeight: 0.98 }}>
          Give Yourself a Second Brain in 60 Minutes
        </h1>

        <p style={{ marginTop: 0, fontSize: 22, color: '#4c453f', lineHeight: 1.55 }}>
          No coding experience needed. I’ll walk you through every tiny step like you’re five. If you can copy/paste and follow checklists, you can do this.
        </p>

        <Section title="Start here (read this first)">
          <p style={{ marginTop: 0 }}>
            You are building a helpful AI assistant that lives on a small internet computer (a VPS). You’ll connect it to Telegram so you can text it like a person.
          </p>
          <ul style={{ margin: 0, paddingLeft: 24 }}>
            <li><strong>Your only goal right now:</strong> send “hi” and get a reply.</li>
            <li><strong>Time target:</strong> 60–90 minutes for first setup.</li>
            <li><strong>Mental rule:</strong> simple and working beats perfect and broken.</li>
          </ul>
        </Section>

        <Section title="Level 1 — Make it reply to you (first win)">
          <p style={{ marginTop: 0 }}><strong>What we’re doing:</strong> creating a server, installing OpenClaw, pairing Telegram, testing one message.</p>
          <p><strong>Follow these tiny steps exactly:</strong></p>
          <ol style={{ margin: 0, paddingLeft: 24 }}>
            <TinyStep n={1} text="Buy/create a VPS with Ubuntu (22.04 or 24.04)." />
            <TinyStep n={2} text="Open your terminal on your laptop." />
            <TinyStep n={3} text="Generate an SSH key (if you don’t already have one)." />
            <TinyStep n={4} text="Copy your public key into your VPS provider’s SSH key field." />
            <TinyStep n={5} text="SSH into your server." />
            <TinyStep n={6} text="Install Node.js 22+." />
            <TinyStep n={7} text="Install OpenClaw." />
            <TinyStep n={8} text="Run OpenClaw onboarding and connect Telegram." />
            <TinyStep n={9} text="In Telegram, approve pairing." />
            <TinyStep n={10} text="Type “hi” in your chat and wait for reply." />
          </ol>
          <div style={{ marginTop: 12, background: '#f5fff3', border: '1px solid #cfe8c8', borderRadius: 10, padding: '10px 12px' }}>
            ✅ <strong>Done means:</strong> you typed “hi” and got a response. That’s your first dopamine win.
          </div>
          <div style={{ marginTop: 10, background: '#fff8ef', border: '1px solid #efd8b8', borderRadius: 10, padding: '10px 12px' }}>
            ⚠️ <strong>Don’t panic:</strong> if one step fails, it does NOT mean you failed. It means we fix one blocker and continue.
          </div>
        </Section>

        <Section title="Level 2 — Make it private + stable (so it doesn’t break)">
          <p style={{ marginTop: 0 }}><strong>Why:</strong> if you skip this, your setup gets fragile and annoying fast.</p>
          <ol style={{ margin: 0, paddingLeft: 24 }}>
            <TinyStep n={1} text="Install Tailscale on your laptop." />
            <TinyStep n={2} text="Install Tailscale on your server." />
            <TinyStep n={3} text="Log both into same Tailscale account/tailnet." />
            <TinyStep n={4} text="Connect to server using private Tailscale address." />
            <TinyStep n={5} text="Run: openclaw status" />
            <TinyStep n={6} text="Run: openclaw gateway status" />
          </ol>
          <div style={{ marginTop: 12, background: '#f5fff3', border: '1px solid #cfe8c8', borderRadius: 10, padding: '10px 12px' }}>
            ✅ <strong>Done means:</strong> both status checks are healthy and you can reconnect anytime.
          </div>
        </Section>

        <Section title="Level 3 — Make it remember stuff (ELI5 version)">
          <p style={{ marginTop: 0 }}>
            Your AI is smart, but forgetful. Memory files are like giving it a notebook.
          </p>
          <ol style={{ margin: 0, paddingLeft: 24 }}>
            <TinyStep n={1} text="Keep one daily note file: what happened today?" />
            <TinyStep n={2} text="Keep one priorities file: top 3 things now." />
            <TinyStep n={3} text="Keep one blockers file: what is stuck + who can unblock it." />
            <TinyStep n={4} text="Run nightly update so tomorrow starts clean." />
            <TinyStep n={5} text="When a mistake happens, write a rule so it won’t repeat." />
          </ol>
          <div style={{ marginTop: 12, background: '#fff8ef', border: '1px solid #efd8b8', borderRadius: 10, padding: '10px 12px' }}>
            ⚠️ <strong>Important:</strong> don’t overbuild memory on day one. Keep it tiny and consistent.
          </div>
        </Section>

        <Section title="Level 4 — Make it actually useful in daily life">
          <ol style={{ margin: 0, paddingLeft: 24 }}>
            <TinyStep n={1} text="Create Telegram topics: Build, Marketing, Ops, Personal, Payments." />
            <TinyStep n={2} text="Keep each topic single-purpose." />
            <TinyStep n={3} text="Connect Gmail in safe mode: read + draft + archive (no auto-send)." />
            <TinyStep n={4} text="Morning routine: ask for Top 3 + blockers." />
            <TinyStep n={5} text="Night routine: memory + SOP update." />
          </ol>
          <div style={{ marginTop: 12, background: '#f5fff3', border: '1px solid #cfe8c8', borderRadius: 10, padding: '10px 12px' }}>
            ✅ <strong>Done means:</strong> your AI is not a toy anymore — it helps you execute.
          </div>
        </Section>

        <Section title="Exact images to add (visual-first final PDF)">
          <p style={{ marginTop: 0 }}>Add these screenshots next to each step so beginners never feel lost:</p>
          <ul style={{ margin: 0, paddingLeft: 24 }}>
            <li>VPS creation page</li>
            <li>SSH key generation</li>
            <li>Tailscale machine list</li>
            <li>OpenClaw onboarding terminal</li>
            <li>Telegram pairing approval</li>
            <li>First Telegram reply (“hi” → response)</li>
            <li>Topic layout screenshot</li>
            <li>Memory before/after screenshot</li>
            <li>Gmail draft review screenshot</li>
          </ul>
        </Section>

        <Section title="If something breaks, do this">
          <ol style={{ margin: 0, paddingLeft: 24 }}>
            <TinyStep n={1} text="Write exactly what failed (one sentence)." />
            <TinyStep n={2} text="Ask: what single blocker caused this?" />
            <TinyStep n={3} text="Remove blocker." />
            <TinyStep n={4} text="Retry immediately." />
            <TinyStep n={5} text="Add a permanent SOP rule so it never wastes time again." />
          </ol>
        </Section>

        <section style={{ background: '#fff', border: '1px solid #e9dece', borderRadius: 18, padding: '24px 22px', marginTop: 16 }}>
          <h2 className={editorial.className} style={{ margin: '0 0 12px', color: '#6b2e1e', fontSize: 38, lineHeight: 1.05, fontWeight: 600 }}>
            You just built the foundation
          </h2>
          <p style={{ color: '#3f3731', fontSize: 20, lineHeight: 1.7, margin: 0 }}>
            Right now your AI can reply, remember, and help with real tasks. That’s the hard part done. From here, you expand one workflow at a time.
          </p>
        </section>
      </div>
    </main>
  );
}
