'use client';

import { redirect, useSearchParams } from 'next/navigation';
import { Archivo_Black } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@nextui-org/react';

const archivoBlack = Archivo_Black({ weight: ['400'], subsets: ['latin'] });

export default function Home() {
  const searchParams = useSearchParams();
  const success = searchParams.get('success') as string | undefined;

  if (success === null) {
    redirect('/');
  }

  if (success === 'true') {
    return (
      <main>
        <h2 className={`text-4xl sm:text-6xl lg:text-8xl ${archivoBlack.className}`}>Success</h2>
        <p className="text-sm sm:text-xl lg:text-2xl">You successfully sent a message!</p>
        <Link href="/">
          <Button color="secondary" size="lg" className="my-3 sm:my-6 lg:my-9 w-40">
            Back to Home
          </Button>
        </Link>
      </main>
    );
  }

  return (
    <main>
      <h2 className={`text-4xl sm:text-6xl lg:text-8xl ${archivoBlack.className}`}>Error</h2>
      <p className="text-sm sm:text-xl lg:text-2xl">
        You failed to send a message. Please contact me directly on Discord.
      </p>
      <Link href="/">
        <Button color="danger" size="lg" className="my-3 sm:my-6 lg:my-9 w-40">
          Back to Home
        </Button>
      </Link>
    </main>
  );
}
