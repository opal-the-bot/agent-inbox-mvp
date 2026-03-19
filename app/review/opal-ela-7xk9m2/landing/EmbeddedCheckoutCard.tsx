'use client';

import { useMemo, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';

export default function EmbeddedCheckoutCard() {
  const [open, setOpen] = useState(false);
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

  const stripePromise = useMemo(() => {
    if (!publishableKey) return null;
    return loadStripe(publishableKey);
  }, [publishableKey]);

  const fetchClientSecret = async () => {
    const response = await fetch('/api/stripe/embedded-session', {
      method: 'POST'
    });

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json?.error || 'Checkout unavailable right now');
    }

    return json.clientSecret as string;
  };

  if (!publishableKey) {
    return (
      <div style={{ color: '#8c8178', fontSize: 13 }}>
        Checkout not configured yet (missing <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code>).
      </div>
    );
  }

  if (!open || !stripePromise) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{ border: 0, borderRadius: 999, padding: '12px 18px', background: '#b76e79', color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: 15 }}
      >
        Add to Cart
      </button>
    );
  }

  return (
    <div style={{ width: '100%', minWidth: 320, maxWidth: 560, border: '1px solid #eadfd1', borderRadius: 14, background: '#fffaf3', padding: 12 }}>
      <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
