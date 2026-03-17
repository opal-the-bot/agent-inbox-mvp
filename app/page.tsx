const features = [
  {
    title: 'Search + Compare in Seconds',
    body: 'Your agent gets normalized flight options across routes, airlines, and fare classes with clear tradeoffs.'
  },
  {
    title: 'Human-in-the-Loop Checkout',
    body: 'Agents create booking intents. Humans confirm before payment so nothing risky happens silently.'
  },
  {
    title: '$1 per Successful Booking Call',
    body: 'Simple usage pricing for agent builders. No enterprise sales loop required to start.'
  }
];

const apiEndpoints = [
  'POST /v1/search_flights',
  'POST /v1/price_check',
  'POST /v1/create_booking_intent',
  'POST /v1/confirm_booking',
  'POST /v1/cancel_or_change_options'
];

export default function Page() {
  return (
    <main style={{ maxWidth: 980, margin: '0 auto', padding: '40px 20px 72px', lineHeight: 1.5 }}>
      <section style={{ marginBottom: 36 }}>
        <p style={{ letterSpacing: 1, textTransform: 'uppercase', opacity: 0.75, marginBottom: 8 }}>Flight Agent Infrastructure</p>
        <h1 style={{ fontSize: 44, margin: 0 }}>Give any AI agent the power to book flights</h1>
        <p style={{ fontSize: 18, opacity: 0.9, maxWidth: 760 }}>
          Build travel-capable agents without wrestling GDS complexity. Start with search, pricing, and booking intents — keep humans in control at checkout.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
          <button style={{ border: 0, background: '#4f7cff', color: 'white', borderRadius: 10, padding: '12px 16px', fontWeight: 700 }}>
            Join Beta
          </button>
          <button style={{ border: '1px solid #33416f', background: 'transparent', color: 'inherit', borderRadius: 10, padding: '12px 16px', fontWeight: 700 }}>
            View API Docs
          </button>
        </div>

        <p style={{ marginTop: 14, opacity: 0.8 }}>
          Pricing: <strong>$1 per successful booking call</strong> · Search and price checks metered separately during beta.
        </p>
      </section>

      <section style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginBottom: 40 }}>
        {features.map((f, i) => (
          <div key={i} style={{ border: '1px solid #233056', borderRadius: 12, padding: 16, background: '#131a31' }}>
            <h3 style={{ marginTop: 0 }}>{f.title}</h3>
            <p style={{ marginBottom: 0, opacity: 0.9 }}>{f.body}</p>
          </div>
        ))}
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>Core API</h2>
        <div style={{ border: '1px solid #233056', borderRadius: 12, padding: 16, background: '#0f152b' }}>
          {apiEndpoints.map((e) => (
            <div key={e} style={{ fontFamily: 'monospace', marginBottom: 8 }}>{e}</div>
          ))}
        </div>
      </section>

      <section style={{ borderTop: '1px solid #233056', paddingTop: 22 }}>
        <h2>Why this exists</h2>
        <p style={{ maxWidth: 780 }}>
          Most agents can plan trips, but fail at execution. This gives them a safe booking layer with explicit approval moments, audit logs, and support-ready booking records.
        </p>
      </section>
    </main>
  );
}
