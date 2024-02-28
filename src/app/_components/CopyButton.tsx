'use client';

import Image from 'next/image';
import { Popover, PopoverTrigger, PopoverContent, Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';

type Props = {
  title?: string;
  description?: string;
  icon: string;
  text: string;
  message: string;
  className?: string;
};

export const CopyButton = ({ title, description, icon, text, message, className }: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    navigator.clipboard.writeText(text);
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <Popover placement='top' showArrow={true} isOpen={isOpen}>
      <PopoverTrigger>
        <Button
          radius='full'
          className={`${className} w-full sm:w-20 h-16 sm:h-20`}
          onClick={handleClick}
          isIconOnly={isMobile}
          startContent={<Image src={icon} alt={`${title} logo`} priority width={50} height={50} />}
        >
          {isMobile ? null : (
            <div className='w-full flex'>
              <span className='text-2xl ml-3'>{description}</span>
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='px-1 py-2'>
          <div className='text-small'>{message}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
