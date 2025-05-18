import { IActorType } from '../../../store/slices/sliceTypes/stateTypes'
import { NavLink } from 'react-router-dom'
import Rating from '../../UI/Rating/Rating'
import styles from './ActorCard.module.css'

const ActorCard = ({ actor }: { actor: IActorType }) => {
  return (
    <NavLink to={`/Actors/actor/${actor.id}`}>
      <div className={styles.actorCard}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w400${actor.profile_path}`} />
        </div>
        <div className={styles.titleDiv}>
          <h3>{actor.name}</h3>
          <Rating value={actor.popularity} type="popularity" />
        </div>
      </div>
    </NavLink>
  )
}

export default ActorCard