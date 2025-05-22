import { ICastAndCrewType } from '../../../store/slices/sliceTypes/stateTypes'
import { NavLink } from 'react-router-dom'
import GradeIcon from '@mui/icons-material/Grade';
import styles from './CastCard.module.css'

const CastCard = ({ actor }: { actor: ICastAndCrewType }) => {
  return (
    <NavLink to={`/Actors/actor/${actor?.id}`}>
      <div className={styles.castCard}>
        <div className={styles.actorImageDiv}>
          <img src={`https://image.tmdb.org/t/p/w400${actor?.profile_path}`} />
        </div>
        <div className={styles.castTitleDiv}>
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

export default CastCard