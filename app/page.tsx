const tasks = [
  { title: 'Clean inbox for founder@startup.com', status: 'In Progress', agent: 'Inbox Agent' },
  { title: 'Draft 5 follow-ups from unread', status: 'Blocked', agent: 'Reply Agent' },
  { title: 'Summarize today + tomorrow priorities', status: 'Done', agent: 'Daily Brief Agent' }
];

const blockers = [
  'Approve sending drafted replies to top-3 leads',
  'Connect Gmail account for Inbox Agent run'
];

export default function Page() {
  return (
    <main style={{ maxWidth: 980, margin: '0 auto', padding: '32px 20px 64px' }}>
      <h1 style={{ fontSize: 36, marginBottom: 6 }}>Agent Inbox</h1>
      <p style={{ opacity: 0.85, marginTop: 0 }}>Run AI tasks, clear blockers fast, and keep humans in control.</p>

      <section style={{ marginTop: 26, display: 'grid', gap: 14 }}>
        <h2>Task Board</h2>
        {tasks.map((t, i) => (
          <div key={i} style={{ border: '1px solid #233056', borderRadius: 12, padding: 14, background: '#131a31' }}>
            <strong>{t.title}</strong>
            <div style={{ opacity: 0.8, marginTop: 6 }}>{t.agent} · {t.status}</div>
          </div>
        ))}
      </section>

      <section style={{ marginTop: 34 }}>
        <h2>Blockers Needing Human Input</h2>
        <ul>
          {blockers.map((b, i) => <li key={i} style={{ marginBottom: 8 }}>{b}</li>)}
        </ul>
      </section>

      <section style={{ marginTop: 34, borderTop: '1px solid #233056', paddingTop: 18 }}>
        <h2>Daily Brief</h2>
        <p>Top focus: ship paid Inbox Clean task ($1-$5), collect first 5 user reviews, reduce unblock response time under 1 hour.</p>
      </section>
    </main>
  );
}
