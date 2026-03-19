# Secrets Workflow (fast handoff to Opal)

Use this once and never repeat the long setup dance.

## One-time setup

```bash
cd /root/.openclaw/workspace/agent-inbox-mvp
scripts/secret init
```

## Add/update a key

```bash
scripts/secret set STRIPE_SECRET_KEY
scripts/secret set STRIPE_PUBLISHABLE_KEY
scripts/secret set RESEND_API_KEY
```

(If you pass value inline, it may end up in shell history. Prompt mode is safer.)

## Check what exists (masked)

```bash
scripts/secret list
```

## Remove a key

```bash
scripts/secret unset STRIPE_SECRET_KEY
```

## Where keys are stored

` .secrets/keys.env ` (local only)

- `.secrets/` is gitignored
- file permissions are locked to `600`
- directory permissions are locked to `700`

## Recommended pattern

- Keep **test** keys in this local store for build/debug automation
- Keep production keys in Vercel env vars
- Rotate keys after broad sharing events
