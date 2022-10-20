import { doc, updateDoc } from 'firebase/firestore';
import { createContext, useContext } from 'react';
import { db } from '../api/config';
import MeetupContext from './meetups-content';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
});

export function FavoritesContextProvider(props) {
  const meetupCtx = useContext(MeetupContext);

  const newFaves = meetupCtx.meetups.filter((meetup) => meetup.favorite);

  async function removeFavoriteHandler(id) {
    const meetupsDoc = doc(db, 'meetups', id);
    const appendFavorite = { favorite: false };
    await updateDoc(meetupsDoc, appendFavorite);
  }

  const context = {
    favorites: newFaves,
    totalFavorites: newFaves.length,
    removeFavorite: removeFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
