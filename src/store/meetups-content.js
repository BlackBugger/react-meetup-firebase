/* eslint-disable react-hooks/exhaustive-deps */
import {
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';
import { db } from '../api/config';

const MeetupContext = createContext({
  meetups: [],
  reloadMeetups: () => {},
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavoriteForAllMeetups: (meetupId) => {},
});

export function MeetupsContextProvider(props) {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const meetupsCollectionRef = collection(db, 'meetups');

  const getLoadedMeetups = async () => {
    const data = await getDocs(meetupsCollectionRef);
    setLoadedMeetups(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    getLoadedMeetups();
  }, []);

  function reloadMeetups() {
    getLoadedMeetups();
  }

  async function addFavoriteHandler(id) {
    const meetupsDoc = doc(db, 'meetups', id);
    const appendFavorite = { favorite: true };
    await updateDoc(meetupsDoc, appendFavorite);

    getLoadedMeetups();
  }

  async function removeFavoriteHandler(id) {
    const meetupsDoc = doc(db, 'meetups', id);
    const appendFavorite = { favorite: false };
    await updateDoc(meetupsDoc, appendFavorite);

    getLoadedMeetups();
  }

  function itemIsFavoriteForAllMeetupsHandler(isFavorite) {
    return isFavorite ? true : false;
  }

  const context = {
    meetups: loadedMeetups,
    addFavorite: addFavoriteHandler,
    reloadMeetups: reloadMeetups,
    removeFavorite: removeFavoriteHandler,
    itemIsFavoriteForAllMeetups: itemIsFavoriteForAllMeetupsHandler,
  };

  return (
    <MeetupContext.Provider value={context}>
      {props.children}
    </MeetupContext.Provider>
  );
}

export default MeetupContext;
