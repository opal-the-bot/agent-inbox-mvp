import OpalLandingPage from '../components/OpalLandingPage';

export const metadata = {
  title: 'Opal AI — Build Your Own AI Assistant',
  description:
    'A beginner-friendly guide to set up your own AI assistant with OpenClaw — no coding required. Own your agent and run it for about $7/month.',
  openGraph: {
    title: 'Opal AI — Build Your Own AI Assistant',
    description:
      'A beginner-friendly guide to set up your own AI assistant with OpenClaw — no coding required. Own your agent and run it for about $7/month.',
    url: 'https://use-opal.com/launch',
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
  },
  alternates: {
    canonical: '/launch'
  }
};

export default function LaunchPage() {
  return <OpalLandingPage />;
}
