import { Button } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';
import { Archivo_Black } from 'next/font/google';

const archivoBlack = Archivo_Black({ weight: ['400'], subsets: ['latin'] });

export default function NotFound() {
  return (
    <main className='text-center'>
      <h2 className={`text-4xl sm:text-6xl lg:text-8xl ${archivoBlack.className}`}>Not Found</h2>
      <p className='text-sm sm:text-xl lg:text-2xl'>This is ramen.</p>
      <Image src='/ramen.jpg' width={800} height={600} alt='yoshimueraya' className='mx-auto' />
      <Link href='/'>
        <Button color='secondary' size='lg' className='my-3 sm:my-6 lg:my-9 w-40'>
          Back to Home
        </Button>
      </Link>
    </main>
  );
}
