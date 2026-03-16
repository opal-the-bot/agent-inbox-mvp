export const metadata = {
  title: 'Agent Inbox MVP',
  description: 'Coordinate AI agents and human approvals in one place.'
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
