import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
import Link from 'next/link';

type Props = {
  title: string;
  description?: string;
  image: string;
  url: string;
  className?: string;
};

export const WorkCard = ({ title, description, image, url, className }: Props) => {
  return (
    <Card className={`${className} py-2 text-left md:w-[700px] md:mx-auto`}>
      <Link href={url}>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h3 className="font-bold text-2xl">{title}</h3>
          <h4 className="my-2">{description}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={1000}
          />
        </CardBody>
      </Link>
    </Card>
  );
};
