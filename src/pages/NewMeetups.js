import { addDoc, collection } from 'firebase/firestore';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from '../api/config';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import MeetupContext from '../store/meetups-content';

function NewMeetupPage() {
  const history = useHistory();
  const meetupsCollectionRef = collection(db, 'meetups');
  const meetupCtx = useContext(MeetupContext);

  async function addMeetupHandler(meetupData) {
    await addDoc(meetupsCollectionRef, {
      title: meetupData.title,
      image: meetupData.image,
      address: meetupData.address,
      description: meetupData.description,
    })
      .then(() => {
        meetupCtx.reloadMeetups();
      })
      .then(() => {
        history.replace('/');
      });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
