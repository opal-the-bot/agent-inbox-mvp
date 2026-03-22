'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

type Status = 'idle' | 'checking' | 'paid' | 'unpaid' | 'error';

export default function PurchaseSuccessCard() {
  const params = useSearchParams();
  const checkout = params.get('checkout');
  const sessionId = params.get('session_id');

  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (checkout !== 'success' || !sessionId) return;

    let cancelled = false;
    setStatus('checking');

    fetch(`/api/stripe/session-status?session_id=${encodeURIComponent(sessionId)}`)
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) throw new Error(json?.error || 'Could not verify payment');
        return json;
      })
      .then((json) => {
        if (cancelled) return;
        if (json?.paid) {
          setStatus('paid');
        } else {
          setStatus('unpaid');
          setMessage('Payment not completed yet. If you were charged, refresh in 10 seconds.');
        }
      })
      .catch((err: Error) => {
        if (cancelled) return;
        setStatus('error');
        setMessage(err.message || 'Could not verify payment');
      });

    return () => {
      cancelled = true;
    };
  }, [checkout, sessionId]);

  if (checkout !== 'success') return null;

  return (
    <section style={{ marginBottom: 18, background: '#ecfdf3', border: '1px solid #b7ebc9', borderRadius: 14, padding: '14px 16px' }}>
      {status === 'checking' && <p style={{ margin: 0, color: '#245b3e', fontSize: 14 }}>Verifying payment…</p>}
      {status === 'paid' && (
        <div style={{ display: 'grid', gap: 8 }}>
          <p style={{ margin: 0, color: '#1f4d35', fontSize: 14, fontWeight: 600 }}>Payment confirmed 🎉 Your guide is ready:</p>
          <a href='/products/opal-ai-starter-guide-v1.pdf' download style={{ width: 'fit-content', borderRadius: 999, padding: '10px 14px', background: '#1f7a4d', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
            Download PDF
          </a>
        </div>
      )}
      {status === 'unpaid' && <p style={{ margin: 0, color: '#8c3b2f', fontSize: 13 }}>{message}</p>}
      {status === 'error' && <p style={{ margin: 0, color: '#8c3b2f', fontSize: 13 }}>{message}</p>}
    </section>
  );
}
