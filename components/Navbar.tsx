import { NAVIGATION } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='border-2 border-red-500 flexBetween max-container padding-container z-30 py-5 bg-gray-900 sticky top-0'>
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
        <Button
          type='button'
          title='Contact Us'
          icon='./mail.svg'
          variant='btn_yellow'
        />
      </div>

      <Image
        src='/menu.svg'
        alt='Menu'
        width={45}
        height={45}
        className='lg:hidden inline-block cursor-pointer'
      />
    </nav>
  );
};

export default Navbar;
