import type { ReactNode } from 'react';

const Layout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <main className='m-auto w-full max-w-[600px]'>{children}</main>;
};

export default Layout;
