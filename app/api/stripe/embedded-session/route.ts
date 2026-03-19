import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json({ error: 'Missing STRIPE_SECRET_KEY' }, { status: 500 });
  }

  try {
    const stripe = new Stripe(secretKey);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://use-opal.com';

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      mode: 'payment',
      return_url: `${siteUrl}/review/opal-ela-7xk9m2/landing?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: 1000,
            product_data: {
              name: 'Opal AI Starter PDF',
              description: 'Instant PDF Delivery'
            }
          }
        }
      ],
      metadata: {
        project: 'agent-inbox-mvp',
        product: 'starter-pdf'
      }
    });

    if (!session.client_secret) {
      return NextResponse.json({ error: 'Stripe did not return client secret' }, { status: 500 });
    }

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to create embedded checkout session';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
