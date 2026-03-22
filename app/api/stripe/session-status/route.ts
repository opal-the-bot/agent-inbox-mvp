import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: 'Missing STRIPE_SECRET_KEY' }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session_id');
  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
  }

  try {
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paid = session.payment_status === 'paid';

    return NextResponse.json({
      paid,
      customerEmail: session.customer_details?.email || null,
      amountTotal: session.amount_total || null,
      currency: session.currency || null
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to verify checkout session';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
