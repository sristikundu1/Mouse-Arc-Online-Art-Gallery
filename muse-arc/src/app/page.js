import Banner from '@/components/Banner/Banner';
import Exhibition from '@/components/Exhibition/Exhibition';
import History from '@/components/History/History';


const HomePage = () => {

  return (
    <div className='relative'>
      <Banner></Banner>
      <History></History>
      <Exhibition></Exhibition>
    </div>
  );
};

export default HomePage;