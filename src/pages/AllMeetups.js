import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import '../components/ui/LoadingSpinner.css'

import MeetupContext from '../store/meetups-content';

function AllMeetupsPage(props) {

  const meetupCtx = useContext(MeetupContext);

  return (
    <section>
     <div className='center'>
     {meetupCtx.itemLoading && <LoadingSpinner/>}
      </div>
      <div className=''>
         <MeetupList meetups={meetupCtx.meetups} />
      </div>
     
    </section>
  );
}

export default AllMeetupsPage;
