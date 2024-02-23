import Banner from '@/components/Banner/Banner';
import Head from 'next/head';



const HomePage = () => {
  return (
    <div>
       {/* Set the favicon */}
       {/* <Head>
        <link rel="icon" href="favicon.png" />
      </Head> */}
      
      {/* <h1 className='font-bold text-center' >This is homepage</h1> */}
      <Banner></Banner>
    </div>
  );
};

export default HomePage;