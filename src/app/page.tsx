import { Avatar } from '@nextui-org/react';
import { Archivo_Black } from 'next/font/google';

const archivoBlack = Archivo_Black({ weight: ['400'], subsets: ['latin'] });

export default function Home() {
  return (
    <main className="text-center m-6 mx-10 sm:m-10 lg:m-16">
      <h1
        className={`text-3xl sm:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500 ${archivoBlack.className}`}
      >
        Hi! I&apos;m RUNFUNRUN
      </h1>
      <div className="sm:grid sm:grid-cols-3 lg:grid-cols-4 my-6 mx-auto sm:w-5/6 lg:w-4/5">
        <div className="w-1/2 sm:w-auto sm:col-span-1 mx-auto my-auto">
          <Avatar src="miwa_icon.jpeg" className="w-auto h-auto text-large" />
        </div>
        <div className="text-left text-lg sm:col-span-2 lg:col-span-3 sm:text-2xl lg:text-4xl my-6 sm:pl-10 lg:pl-16">
          <p>Hello. I&apos;m Ryota Uchiyama a.k.a RUNFUNRUN.</p>
          <p>
            I&apos;m a software developer in Japan. I&apos;m also a FPS gamer. I like to play
            VALORANT. If you have any questions, please contact me on Discord.
          </p>
        </div>
      </div>
    </main>
  );
}
