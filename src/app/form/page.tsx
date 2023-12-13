import { Archivo_Black } from 'next/font/google';

const archivoBlack = Archivo_Black({ weight: ['400'], subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <h1 className={`text-3xl sm:text-4xl lg:text-5xl ${archivoBlack.className}`}>Contact form</h1>
    </main>
  );
}
