import { useContext, useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { db } from '../api/config';
import { collection, getDocs } from 'firebase/firestore';
import MeetupContext from '../store/meetups-content';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);

  const meetupCtx = useContext(MeetupContext);

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetupCtx.meetups} />
    </section>
  );
}

export default AllMeetupsPage;
