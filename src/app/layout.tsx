import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const sourceCodePro = Source_Code_Pro({ weight: '300', subsets: ['latin'] });

const RootLayout = ({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) => {
  return (
    <html lang='en'>
      {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
      )}
      <body className={cn('flex min-h-dvh flex-col', sourceCodePro.className)}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          {children}
          {modal}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

const title = 'RUNFUNRUN';
const description = 'This is my portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/',
  },
  twitter: {
    title,
    description,
  },
};
