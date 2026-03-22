'use client';

import { useEffect, useMemo, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';

export default function EmbeddedCheckoutCard() {
  const [open, setOpen] = useState(false);
  const [publishableKey, setPublishableKey] = useState<string | null>(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || null);
  const [keyError, setKeyError] = useState<string | null>(null);

  useEffect(() => {
    if (publishableKey) return;

    let cancelled = false;
    fetch('/api/stripe/publishable-key')
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) throw new Error(json?.error || 'Missing Stripe key');
        return json.publishableKey as string;
      })
      .then((key) => {
        if (!cancelled) setPublishableKey(key);
      })
      .catch((err: Error) => {
        if (!cancelled) setKeyError(err.message);
      });

    return () => {
      cancelled = true;
    };
  }, [publishableKey]);

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
        {keyError ? `Checkout unavailable: ${keyError}` : 'Loading checkout...'}
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
