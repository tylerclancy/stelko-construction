import Link from 'next/link';
import Button from './Button';

const Hero = () => {
  return (
    <section className='bg-gray-800 py-64'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold mb-6 text-white'>
            STELKO CONSTRUCTION
          </h1>
          <p className='text-2xl text-gray-300 mb-10 max-w-3xl mx-auto'>
            Proudly transforming Hershey and Beyond's landscape since 2024.
          </p>
          <div className='border-2 border-red-500 flex justify-center'>
            <Link href='/gallery'>
              <Button
                type='button'
                title='View Our Projects'
                icon='./mail.svg'
                variant='btn_yellow'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
