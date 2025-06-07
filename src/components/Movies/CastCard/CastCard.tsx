import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../../store/hooks/hooks';
import GradeIcon from '@mui/icons-material/Grade';
import darkProfile from '../../../assets/images/dark-profile.png'
import lightProfile from '../../../assets/images/light-profile.png'
import styles from './CastCard.module.css'
import { ICastType } from '../../../types';

const CastCard = ({ actor }: { actor: ICastType }) => {
  const { mode } = useAppSelector((state) => state.theme)
  const profileImg = mode === 'dark' ? darkProfile : lightProfile

  return (
    <NavLink to={`/Actors/actor/${actor?.id}`}>
      <div className={styles.castCard}>
        <div className={styles.actorImageDiv}>
          <img src={actor?.profile_path ? `https://image.tmdb.org/t/p/w400${actor?.profile_path}` : profileImg} />
        </div>
        <div className={styles.castTitleDiv}>
          <h4>{actor?.name.length > 20 ? actor?.name.slice(0, 15) + "..." : actor?.name}</h4>
          <div className={styles.dateAndRate}>
            <p className={styles.department}>{actor?.known_for_department}</p>
            <p className={styles.rating}>
              <GradeIcon className={styles.starIcon} />
              {actor?.popularity.toFixed(1)}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  )
}

export default CastCard