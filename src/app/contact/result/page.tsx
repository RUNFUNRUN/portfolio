'use client';

import { Button } from '@nextui-org/react';
import { Archivo_Black } from 'next/font/google';
import Link from 'next/link';
import { redirect, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const archivoBlack = Archivo_Black({ weight: ['400'], subsets: ['latin'] });

const Result = () => {
  const searchParams = useSearchParams();
  const success = searchParams.get('success') as string | undefined;

  if (success === undefined) {
    redirect('/');
  }

  if (success) {
    return (
      <>
        <h2
          className={`text-4xl sm:text-6xl lg:text-8xl text-green-300 ${archivoBlack.className}`}
        >
          Success
        </h2>
        <p className='text-sm sm:text-xl lg:text-2xl'>
          You successfully sent a message!
        </p>
      </>
    );
  }

  return (
    <>
      <h2
        className={`text-4xl sm:text-6xl lg:text-8xl text-red-500 ${archivoBlack.className}`}
      >
        Error
      </h2>
      <p className='text-sm sm:text-xl lg:text-2xl'>
        You failed to send a message. Please contact me directly on Discord.
      </p>
    </>
  );
};

const Home = () => {
  return (
    <main>
      <Suspense>
        <Result />
      </Suspense>
      <Link href='/'>
        <Button
          color='secondary'
          size='lg'
          className='my-3 sm:my-6 lg:my-9 w-40'
        >
          Back to Home
        </Button>
      </Link>
    </main>
  );
};

export default Home;
