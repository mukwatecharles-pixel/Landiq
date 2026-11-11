import './globals.css';
import ClientWrapper from '@/components/ClientWrapper';

export const metadata = {
  title: 'LandIQ - Intelligent Land Marketplace',
  description: 'Africa\'s Intelligent Land Marketplace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}