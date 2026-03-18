const sections = [
  'Welcome + FOMO-to-Flow',
  'What an AI agent actually is (in plain English)',
  'Setup in ~15 minutes',
  'Your first useful workflows',
  'Telegram prompts you can copy/paste',
  'Make it feel like yours (tone + personality)',
  'CEO mode mini-system (daily + nightly)',
  'Troubleshooting + FAQ',
  'Next steps and expansion ideas'
];

export default function PdfOutlineDraftPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#fff', color: '#1d1d1f', padding: '46px 20px 70px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: 1.2, fontSize: 12, color: '#7c7c85' }}>Draft PDF outline v1</p>
        <h1 style={{ margin: '10px 0 6px', fontSize: 'clamp(30px, 5.6vw, 52px)' }}>Your Little AI Assistant</h1>
        <p style={{ marginTop: 0, fontSize: 18, color: '#4c4c55' }}>Build it in Telegram (even if you’re new)</p>

        <div style={{ border: '1px solid #ececf1', borderRadius: 14, padding: '16px 18px', background: '#fafafe', marginTop: 22 }}>
          <p style={{ margin: 0 }}>
            <strong>Offer:</strong> $1 PDF • beginner-friendly • goal = launch one useful assistant with one daily and one nightly routine
          </p>
        </div>

        <h2 style={{ marginTop: 30 }}>Outline</h2>
        <ol style={{ paddingLeft: 22, display: 'grid', gap: 8 }}>
          {sections.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>

        <h2 style={{ marginTop: 30 }}>Included assets</h2>
        <ul style={{ paddingLeft: 22, display: 'grid', gap: 8 }}>
          <li>Setup checklist</li>
          <li>Starter prompt pack</li>
          <li>Daily and nightly templates</li>
        </ul>

        <p style={{ marginTop: 30, color: '#6f6f78', fontSize: 13 }}>Draft for review — content depth and style can be tuned after feedback.</p>
      </div>
    </main>
  );
}
