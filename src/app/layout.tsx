import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import './globals.css';

const sourceCodePro = Source_Code_Pro({ weight: '300', subsets: ['latin'] });

const Layout = ({ children, modal }: LayoutProps<'/'>) => {
  return (
    <html lang='en'>
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

export default Layout;

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
