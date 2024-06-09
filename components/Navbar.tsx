'use client';

import { NAVIGATION } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='flexBetween max-container padding-container z-30 py-5 bg-gray-900 sticky top-0'>
      <Link href='/'>
        <Image
          src='/stelko.png'
          alt='Stelko Construction Logo'
          width={150}
          height={80}
        />
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAVIGATION.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              key={link.key}
              className='regular-16 text-white curor-pointer pb-1.5 transition-all hover:font-bold'
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className='lg:flexCenter hidden '>
        <Link href='/contact'>
          <Button
            type='button'
            title='Contact Us'
            icon='./mail.svg'
            variant='btn_yellow'
          />
        </Link>
      </div>

      <div className='lg:hidden'>
        <button
          className='flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white'
          onClick={toggleMenu}
        >
          <Image src='/menu.svg' alt='Menu' width={20} height={20} />
        </button>
      </div>

      <div
        className={
          isOpen
            ? 'fixed left-0 top-0 w-[65%] h-screen bg-gray-900 p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 w-[65%] h-screen bg-gray-900 p-10 ease-in duration-500'
        }
      >
        <div className='flex justify-end'>
          <div className='cursor-pointer' onClick={toggleMenu}>
            <Image
              src='/square-rounded-x.svg'
              alt='Close'
              width={40}
              height={40}
            />
          </div>
        </div>

        <div className='mt-8'>
          <ul className='space-y-4'>
            {NAVIGATION.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  key={link.key}
                  className='block text-white text-2xl font-semibold hover:text-yellow-500'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
