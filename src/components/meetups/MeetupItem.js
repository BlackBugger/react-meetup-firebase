import FavoritesContext from '../../store/favorites-content';
import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import MeetupContext from '../../store/meetups-content';

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const meetupCtx = useContext(MeetupContext);

  const itemIsFavoriteForAllMeetups = meetupCtx.itemIsFavoriteForAllMeetups(
    props.favorite
  );

  function toggleFavoriteStatusHandler(props) {
    if (itemIsFavoriteForAllMeetups) {
      favoritesCtx.removeFavorite(props.id);
      meetupCtx.removeFavorite(props.id);
    } else {
      meetupCtx.addFavorite(props.id);
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.descriptions}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={() => toggleFavoriteStatusHandler(props)}>
            {itemIsFavoriteForAllMeetups
              ? 'Remove from Favorites'
              : 'Add to Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
