'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';

const LinkButton = ({
  children,
  href,
}: Readonly<{ children: ReactNode; href: string }>) => {
  return (
    <Link href={href} target='_blank'>
      <Button variant='outline' size='icon' className='w-16 h-16'>
        {children}
      </Button>
    </Link>
  );
};

export const SocialMediaButtons = () => {
  return (
    <div className='flex gap-6 justify-center pt-6'>
      <span>
        <Button
          variant='outline'
          size='icon'
          className='w-16 h-16'
          onClick={() => {
            navigator.clipboard.writeText('runfunrun');
            toast.info('Discord ID: "runfunrun" is copied!');
          }}
        >
          <Image src='./discord.svg' width={50} height={50} alt='Discord' />
        </Button>
      </span>
      <LinkButton href='https://x.com/GRAPH_fps'>
        <Image src='./twitter.svg' width={50} height={50} alt='Twitter' />
      </LinkButton>
      <LinkButton href='https://www.instagram.com/ryota_uchiyama'>
        <Image src='./instagram.svg' width={60} height={60} alt='Instagram' />
      </LinkButton>
      <LinkButton href='https://github.com/RUNFUNRUN'>
        <Image src='./github.svg' width={45} height={45} alt='GitHub' />
      </LinkButton>
    </div>
  );
};
