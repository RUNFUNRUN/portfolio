import { LinkWithUnderline } from '@/components/link-with-underline';
import { SocialMediaButtons } from '@/components/social-media-buttons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

export const runtime = 'edge';

const Home = () => {
  return (
    <div className='px-4 sm:px-0 space-y-4'>
      <h1 className='text-center text-3xl sm:text-5xl'>
        Hi<span className='animate-waving-hand inline-block mx-1'>👋</span>, I'm
        RUNFUNRUN.
      </h1>
      <div className='flex justify-center sm:justify-end text-2xl gap-8'>
        <LinkWithUnderline href='https://www.runfunrun.dev' blank>
          Blog
        </LinkWithUnderline>
        <LinkWithUnderline href='/contact'>Contact</LinkWithUnderline>
      </div>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Who am I?</AccordionTrigger>
          <AccordionContent className='space-y-2'>
            <p>My real name is Ryota Uchiyama.</p>
            <p>
              I am a software engineer living in Japan. I primarily work in the
              web development domain. I started working in 2024. I love Neovim.
              Please check the settings here.{' '}
              <Link
                href='https://github.com/RUNFUNRUN/LazyVim'
                target='_blank'
                className='underline'
              >
                https://github.com/RUNFUNRUN/LazyVim
              </Link>
            </p>
            <p>Also, I enjoy playing video games. I mainly play Valorant.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <SocialMediaButtons />
    </div>
  );
};

export default Home;
