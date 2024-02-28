import { Archivo_Black } from 'next/font/google';
import { Form } from './_components/Form';

const archivoBlack = Archivo_Black({ weight: ['400'], subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <h1 className={`text-3xl sm:text-4xl lg:text-5xl ${archivoBlack.className}`}>Contact</h1>
      <div className='my-6 sm:my-8 lg:my-10 mx-0 sm:mx-auto'>
        <Form />
      </div>
    </main>
  );
}
