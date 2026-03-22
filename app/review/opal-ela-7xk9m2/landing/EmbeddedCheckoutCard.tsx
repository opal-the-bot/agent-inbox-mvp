'use client';

import { useState } from 'react';

export default function EmbeddedCheckoutCard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startCheckout = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/stripe/embedded-session', {
        method: 'POST'
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json?.error || 'Checkout unavailable right now');
      }

      if (!json?.url) {
        throw new Error('Missing checkout URL');
      }

      window.location.href = json.url as string;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Checkout unavailable right now');
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={startCheckout}
        disabled={loading}
        style={{ border: 0, borderRadius: 999, padding: '12px 18px', background: '#b76e79', color: '#fff', fontWeight: 700, cursor: loading ? 'wait' : 'pointer', fontSize: 15, opacity: loading ? 0.75 : 1 }}
      >
        {loading ? 'Opening checkout...' : 'Buy Now'}
      </button>
      {error ? (
        <p style={{ margin: '8px 0 0', color: '#8c3b2f', fontSize: 12 }}>{error}</p>
      ) : null}
    </div>
  );
}
