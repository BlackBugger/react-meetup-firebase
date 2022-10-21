import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import '../components/ui/LoadingSpinner.css'

import MeetupContext from '../store/meetups-content';

function AllMeetupsPage(props) {

  const meetupCtx = useContext(MeetupContext);




  return (
    <section>
      <h1>All Meetups</h1>
     <div className='center'>
     {meetupCtx.itemLoading && <LoadingSpinner/>}
      </div>
      
      <MeetupList meetups={meetupCtx.meetups} />
    </section>
  );
}

export default AllMeetupsPage;
