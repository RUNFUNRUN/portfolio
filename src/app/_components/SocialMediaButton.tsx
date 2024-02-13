'use client';

import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';

type Props = {
  title?: string;
  description?: string;
  icon: string;
  url: string;
  className?: string;
};

export const SocialMediaButton = ({ title, description, icon, url, className }: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const breakpoint = 640;
    const handleResize = () => {
      if (window.innerWidth >= breakpoint) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <Button
      radius="full"
      className={`${className} w-full sm:w-20 h-16 sm:h-20`}
      onClick={handleClick}
      isIconOnly={isMobile}
      startContent={<Image src={icon} alt={`${title} logo`} priority width={50} height={50} />}
    >
      {isMobile ? null : (
        <div className="w-full">
          <span className="text-2xl">{description}</span>
        </div>
      )}
    </Button>
  );
};
