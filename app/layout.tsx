export const metadata = {
  metadataBase: new URL('https://use-opal.com'),
  title: 'Opal AI — Build Your Own AI Assistant',
  description:
    'A beginner-friendly guide to set up your own AI assistant with OpenClaw — no coding required. Own your agent and run it for about $7/month.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Opal AI — Build Your Own AI Assistant',
    description:
      'A beginner-friendly guide to set up your own AI assistant with OpenClaw — no coding required. Own your agent and run it for about $7/month.',
    url: 'https://use-opal.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Opal AI Starter Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opal AI — Build Your Own AI Assistant',
    description:
      'A beginner-friendly guide to set up your own AI assistant with OpenClaw — no coding required.',
    images: ['/og-image.jpg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter, system-ui, sans-serif', background: '#0b1020', color: '#e8eefc' }}>
        {children}
      </body>
    </html>
  );
}
