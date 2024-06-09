import Head from 'next/head';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Stelko Construction</title>
        <meta
          name='description'
          content='Contact page for Stelko Construction'
        />
      </Head>

      <main className='bg-gray-100 py-12 min-h-screen items-center flex'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
            Contact Us
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                Get in Touch
              </h2>
              <form>
                <div className='mb-4'>
                  <label
                    htmlFor='name'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500'
                    placeholder='Your Name'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='email'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500'
                    placeholder='Your Email'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor='message'
                    className='block text-gray-700 font-bold mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={4}
                    className='w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500'
                    placeholder='Your Message'
                    required
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300'
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <h2 className='text-2xl font-bold mb-4 text-gray-800'>
                Contact Information
              </h2>
              <div className='flex items-center mb-4'>
                <Image
                  src='/map-2.svg'
                  alt='Map Icon'
                  width={20}
                  height={20}
                  className='mr-2'
                />
                <p className='text-gray-700'>
                  123 Construction Street, City, State ZIP
                </p>
              </div>
              <div className='flex items-center mb-4'>
                <Image
                  src='/phone.svg'
                  alt='Phone Icon'
                  width={20}
                  height={20}
                  className='mr-2'
                />
                <p className='text-gray-700'>(123) 456-7890</p>
              </div>
              <div className='flex items-center'>
                <Image
                  src='/mail.svg'
                  alt='Email Icon'
                  width={20}
                  height={20}
                  className='mr-2'
                />
                <p className='text-gray-700'>info@stelkoconstruction.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
