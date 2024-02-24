import Banner from '@/components/Banner/Banner';
import Collection from '@/components/Collection/Collection';
import EventPrograms from '@/components/EventPrograms/EventPrograms';
import Exhibition from '@/components/Exhibition/Exhibition';
import History from '@/components/History/History';
import Services from '@/components/Services/Services';
import VisitorsInfo from '@/components/VisitorsInfo/VisitorsInfo';


const HomePage = () => {

  return (
    <div className='relative'>
      <Banner></Banner>
      <History></History>
      <Exhibition></Exhibition>
      <VisitorsInfo></VisitorsInfo>
      <Collection></Collection>
      <EventPrograms></EventPrograms>
      <Services></Services>
    </div>
  );
};

export default HomePage;