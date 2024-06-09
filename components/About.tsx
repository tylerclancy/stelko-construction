import Image from 'next/image';

const About = () => {
  const specializations = [
    { name: 'CIVIL', image: '/civil.jpg' },
    { name: 'PAVING', image: '/paving.jpg' },
    { name: 'BUILDING', image: '/building.jpg' },
    { name: 'INDUSTRIAL', image: '/industrial.jpg' },
  ];

  return (
    <section className='py-24 bg-gray-200 shadow-lg'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold mb-8 text-center text-gray-90 font-sans'>
          CONSTRUCTION DONE RIGHT
        </h2>
        <p className='text-xl text-center text-gray-800 mb-12 tracking-wider'>
          SPECIALIZATION IN VARIOUS FIELDS
        </p>
        <div className='px-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
          {specializations.map((specialization, index) => (
            <div
              key={index}
              className='relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer'
            >
              <div className='relative w-full h-0 pb-[166.66%] overflow-hidden'>
                <Image
                  src={specialization.image}
                  alt={specialization.name}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  className='w-full h-auto transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent flex items-start justify-center pt-8 transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0'>
                <h3 className='text-xl font-bold text-white'>
                  {specialization.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-12 flex justify-center'>
          <div className='flex items-center space-x-6'>
            <div className='w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex items-center justify-center'>
              <Image
                src='/josh.webp'
                alt='Founder'
                width={120}
                height={120}
                objectFit='cover'
                className='rounded-full'
              />
            </div>
            <div>
              <p className='text-lg font-semibold'>Joshua Stepp</p>
              <p className='text-gray-600'>Founder</p>
            </div>
          </div>
          <div className='flex items-center space-x-6'>
            <div className='w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex items-center justify-center'>
              <Image
                src='/josh.webp'
                alt='Founder'
                width={120}
                height={120}
                objectFit='cover'
                className='rounded-full'
              />
            </div>
            <div>
              <p className='text-lg font-semibold'>second person</p>
              <p className='text-gray-600'>Founder</p>
            </div>
          </div>
          <div className='flex items-center space-x-6'>
            <div className='w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex items-center justify-center'>
              <Image
                src='/josh.webp'
                alt='Founder'
                width={120}
                height={120}
                objectFit='cover'
                className='rounded-full'
              />
            </div>
            <div>
              <p className='text-lg font-semibold'>third person</p>
              <p className='text-gray-600'>Founder</p>
            </div>
          </div>
        </div>
        <p className='mt-8 text-2xl text-center font-bold text-yellow-400 tracking-widest drop-shadow-lg bg-gray-800 bg-opacity-50 py-4'>
          Where Precision Meets Passion
        </p>
      </div>
    </section>
  );
};

export default About;
