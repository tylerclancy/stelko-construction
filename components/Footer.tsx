// Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <Image
              src='/stelko.png'
              alt='Stelko Construction Logo'
              width={150}
              height={80}
            />
            <p className='mt-4 text-gray-400'>
              Building Excellence from the Ground Up
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/' className='text-gray-300 hover:text-white'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about' className='text-gray-300 hover:text-white'>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-300 hover:text-white'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-300 hover:text-white'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Contact Info</h3>
            <p className='text-gray-300'>123 Construction Street</p>
            <p className='text-gray-300'>City, State ZIP</p>
            <p className='text-gray-300'>Phone: (123) 456-7890</p>
            <p className='text-gray-300'>Email: info@stelkoconstruction.com</p>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 text-center'>
          <p className='text-gray-400'>
            &copy; {new Date().getFullYear()} Stelko Construction. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
