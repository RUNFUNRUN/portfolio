import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
import Link from 'next/link';

type Props = {
  title: string;
  description?: string;
  image: string;
  url?: string;
  github?: string;
  className?: string;
};

export const WorkCard = ({ title, description, image, url, github, className }: Props) => {
  return (
    <Card className={`${className} py-2 text-left md:w-[700px] md:mx-auto`}>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <h3 className='font-bold text-2xl'>{title}</h3>
        <h4 className='my-2'>{description}</h4>
        {url && (
          <>
            <p>URL</p>
            <p>
              <Link href={url} className='hover:underline'>
                {url}
              </Link>
            </p>
          </>
        )}
        {github && (
          <>
            <p>GitHub</p>
            <p>
              <Link href={github} className='hover:underline'>
                {github}
              </Link>
            </p>
          </>
        )}
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <Link href={url ?? github ?? 'https://www.runfunrun.info/notfound'}>
          <Image
            alt='Card background'
            className='object-cover rounded-xl'
            src={image}
            width={1000}
          />
        </Link>
      </CardBody>
    </Card>
  );
};
