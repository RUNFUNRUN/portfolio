import type { Metadata } from 'next';

const Layout = ({ children }: LayoutProps<'/contact'>) => {
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
