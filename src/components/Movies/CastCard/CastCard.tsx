import { ICastAndCrewType } from '../../../store/slices/sliceTypes/stateTypes'
import { NavLink } from 'react-router-dom'
import Rating from '../../UI/Rating/Rating'
import styles from './CastCard.module.css'

const CastCard = ({ actor }: { actor: ICastAndCrewType }) => {
  return (
    <NavLink to={`/Actors/actor/${actor?.id}`}>
      <div className={styles.castCard}>
        <div className={styles.actorImageDiv}>
          <img src={`https://image.tmdb.org/t/p/w400${actor?.profile_path}`} />
        </div>
        <div className={styles.castTitleDiv}>
          <h3>{actor?.name}</h3>
          <p className={styles.department}>{actor?.known_for_department}</p>
          <Rating value={actor?.popularity} type="popularity" />
        </div>
      </div>
    </NavLink>
  )
}

export default CastCard