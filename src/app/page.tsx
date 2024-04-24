import { Avatar } from '@nextui-org/react';
import { Archivo_Black } from 'next/font/google';
import Link from 'next/link';
import { CopyButton } from './_components/copy-button';
import { SocialMediaButton } from './_components/socialmedia-button';
import { WorkCard } from './_components/work-card';

const archivoBlack = Archivo_Black({ weight: ['400'], subsets: ['latin'] });

const Home = () => {
  return (
    <main>
      <h1
        className={`text-4xl sm:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500 ${archivoBlack.className}`}
      >
        Hi! I&apos;m RUNFUNRUN
      </h1>
      <div className='sm:grid sm:grid-cols-3 lg:grid-cols-4 my-6 sm:my-12 lg:my-20 mx-auto sm:w-5/6 lg:w-4/5'>
        <div className='w-1/2 sm:w-auto sm:col-span-1 mx-auto my-auto'>
          <Avatar src='miwa_icon.jpeg' className='w-auto h-auto text-large' />
        </div>
        <div className='text-left text-lg sm:col-span-2 lg:col-span-3 sm:text-2xl lg:text-4xl my-6 sm:m-10 lg:m-16'>
          <p>Hello. I&apos;m Ryota Uchiyama a.k.a RUNFUNRUN.</p>
          <p>
            I&apos;m a software developer in Japan. I&apos;m also a FPS gamer. I
            like VALORANT.
          </p>
          <p>This icon is my favorite singer &quot;miwa&quot;.</p>
          <p>
            If you have any questions, please contact me on Discord or{' '}
            <Link
              href='/contact'
              className='text-blue-500 hover:underline hover:text-blue-400'
            >
              this form
            </Link>
            .
          </p>
        </div>
      </div>
      <div className='my-6 sm:my-12 lg:my-20'>
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl sm:my-6 lg:my-10 ${archivoBlack.className}`}
        >
          Social Media
        </h2>
        <div className='sm:w-2/3 xl:w-2/5 sm:mx-auto sm:grid sm:grid-cols-4'>
          <SocialMediaButton
            title='GitHub'
            description='RUNFUNRUN'
            icon='/github.png'
            url='https://github.com/RUNFUNRUN'
            className='bg-gray-800 sm:col-span-1 my-3 sm:my-0 sm:mx-auto'
          />
          <SocialMediaButton
            title='Discord'
            description='runfunrun'
            icon='/discord.png'
            url='https://discord.com/invite/Btg5hqCA'
            className='bg-indigo-400 sm:col-span-1 my-3 sm:my-0 sm:mx-auto'
          />
          <SocialMediaButton
            title='X'
            description='@GRAPH_fps'
            icon='/x.png'
            url='https://x.com/GRAPH_fps'
            className='bg-blue-500 sm:col-span-1 my-3 sm:my-0 sm:mx-auto'
          />
          <SocialMediaButton
            title='Instagram'
            description='@ryota_uchiyama'
            icon='/instagram.png'
            url='https://www.instagram.com/ryota_uchiyama'
            className='bg-pink-300 sm:col-span-1 my-3 sm:my-0 sm:mx-auto'
          />
        </div>
      </div>
      <div className='my-6 sm:my-12 lg:my-20'>
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl my-3 sm:my-6 lg:my-10 ${archivoBlack.className}`}
        >
          My works
        </h2>
        <div>
          <WorkCard
            title='VALORANT Oekaki Chat'
            description='VALORANT ASCII art generator | "Oekaki" means "drawing" in Japanese.'
            image='https://www.valorant-oekaki-chat.net/og.png'
            url='https://www.valorant-oekaki-chat.net'
            github='https://github.com/RUNFUNRUN/VALORANT-Oekaki-Chat'
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
