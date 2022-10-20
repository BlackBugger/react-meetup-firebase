import { useContext, useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-content';

function FavoritesPage() {
  const [loadedFavorites, setLoadedFavorites] = useState([]);

  const favoritesCtx = useContext(FavoritesContext);

  useEffect(() => {
    fetch(
      'https://react-udemy-meetups-default-rtdb.firebaseio.com/favorites.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const favorites = [];

        for (const key in data) {
          const favorite = {
            id: key,
            ...data[key],
          };
          favorites.push(favorite);
        }

        setLoadedFavorites(favorites);
      });
  }, []);

  let content;

  if (loadedFavorites === 0) {
    content = <p> You have no favorites. Want to add some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
