import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const Layout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <>{children}</>;
};

export default Layout;

const title = 'Contact RUNFUNRUN';

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
    url: '/contact',
  },
  twitter: {
    title,
  },
  robots: {
    index: false,
    googleBot: {
      index: false,
    },
  },
};
