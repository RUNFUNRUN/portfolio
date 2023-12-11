import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Roboto } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'RUNFUNRUN Info',
  description: 'This is my portfolio site.',
  openGraph: {
    images: '/miwa.jpeg',
  },
  twitter: {
    images: '/miwa.jpeg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={roboto.className}>
        <SpeedInsights />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
