import Head from 'next/head';

const GalleryPage = () => {
  return (
    <>
      <Head>
        <title>Gallery | Stelko Construction</title>
        <meta
          name='description'
          content='Gallery page for Stelko Construction'
        />
      </Head>

      <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4 text-gray-800'>Gallery</h1>
          <p className='text-xl text-gray-600 mb-8'>
            This page is coming soon. Stay tuned for updates!
          </p>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='text-6xl font-bold text-gray-300'>
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default GalleryPage;
