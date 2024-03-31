'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { Archivo_Black } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const archivoBlack = Archivo_Black({ weight: ['400'], subsets: ['latin'] });

export const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      title: 'Home',
      url: '/',
      className: pathname === '/' ? 'text-green-400' : '',
    },
    {
      title: 'Contact',
      url: '/contact',
      className: pathname === '/contact' ? 'text-green-400' : '',
    },
    {
      title: 'Blog',
      url: 'https://www.runfunrun.tech',
      className: '',
      blank: true,
    },
  ];

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='lg:hidden'
        />
        <NavbarBrand>
          <Link href='/' className='flex'>
            <Image
              src='/favicon.ico'
              alt='miwa-icon'
              priority
              width={50}
              height={50}
              className='mx-2 hidden sm:block'
            />
            <p
              className={`text-2xl sm:text-4xl font-bold my-auto ${archivoBlack.className}`}
            >
              RUNFUNRUN.info
            </p>
          </Link>
        </NavbarBrand>
        {menuItems.map((item) => (
          <NavbarItem key={item.url}>
            <Link
              className={`hidden lg:flex text-2xl ${archivoBlack.className} ${item.className}`}
              href={item.url}
              target={item.blank ? '_blank' : ''}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
        <NavbarMenu>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.url}>
              <Link
                className={`w-full text-2xl ${archivoBlack.className} ${item.className}`}
                href={item.url}
                target={item.blank ? '_blank' : ''}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
};
