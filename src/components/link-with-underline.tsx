import Link from 'next/link';
import type { ReactNode } from 'react';

export const LinkWithUnderline = ({
  href,
  children,
  blank = false,
}: Readonly<{ href: string; children: ReactNode; blank?: boolean }>) => {
  return (
    <Link href={href} className='group' target={blank ? '_blank' : undefined}>
      <span className='mx-1 underline sm:no-underline'>{children}</span>
      <div className='bg-white h-px w-0 group-hover:w-full transition-all duration-500 hidden sm:block' />
    </Link>
  );
};
