import { IActorType } from '../../../store/slices/sliceTypes/stateTypes'
import { NavLink } from 'react-router-dom'
import GradeIcon from '@mui/icons-material/Grade';
import styles from './ActorCard.module.css'

const ActorCard = ({ actor }: { actor: IActorType }) => {
  return (
    <NavLink to={`/Actors/actor/${actor?.id}`}>
      <div className={styles.actorCard}>
        <img src={`https://image.tmdb.org/t/p/w400${actor?.profile_path}`} />
        <div className={styles.titleDiv}>
          <h4>{actor?.name.length > 20 ? actor?.name.slice(0, 20) + "..." : actor?.name}</h4>
          <div className={styles.dateAndRate}>
            <p className={styles.department}>{actor?.known_for_department}</p>
            <p className={styles.rating}>
              <GradeIcon sx={{ fontSize: '18px', color: '#E13C52' }} />
              {actor?.popularity.toFixed(1)}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default ActorCard