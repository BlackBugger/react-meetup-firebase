import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import MeetupContext from '../store/meetups-content';

function AllMeetupsPage() {

  const meetupCtx = useContext(MeetupContext);

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetupCtx.meetups} />
    </section>
  );
}

export default AllMeetupsPage;
