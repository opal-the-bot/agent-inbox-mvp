const sections = [
  'Welcome + FOMO-to-Flow',
  'What an AI agent actually is (in plain English)',
  'OpenClaw setup + onboarding',
  'Telegram group setup with topics by project',
  'Your first useful workflows',
  'Telegram prompts you can copy/paste',
  'Make it feel like yours',
  'CEO mode mini-system',
  'Troubleshooting + FAQ',
  'Next steps'
];

export const metadata = {
  robots: { index: false, follow: false }
};

export default function PrivateOutlinePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#fff', color: '#1d1d1f', padding: '46px 20px 70px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: 1.2, fontSize: 12, color: '#7c7c85' }}>Private review outline v1</p>
        <h1 style={{ margin: '10px 0 6px', fontSize: 'clamp(30px, 5.6vw, 52px)' }}>Your Little AI Assistant</h1>
        <p style={{ marginTop: 0, fontSize: 18, color: '#4c4c55' }}>Build it in Telegram (even if you’re new)</p>
        <ol style={{ paddingLeft: 22, display: 'grid', gap: 8 }}>
          {sections.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </div>
    </main>
  );
}
