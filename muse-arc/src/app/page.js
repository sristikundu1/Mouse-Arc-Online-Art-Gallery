import Banner from '@/components/Banner/Banner';
import Exhibition from '@/components/Exhibition/Exhibition';
import History from '@/components/History/History';
import VisitorsInfo from '@/components/VisitorsInfo/VisitorsInfo';


const HomePage = () => {

  return (
    <div className='relative'>
      <Banner></Banner>
      <History></History>
      <Exhibition></Exhibition>
      <VisitorsInfo></VisitorsInfo>
    </div>
  );
};

export default HomePage;