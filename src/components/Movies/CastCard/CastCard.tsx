import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../../store/hooks/hooks';
import { ICastType } from '../../../types';
import { useMediaQuery } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import darkProfile from '../../../assets/images/dark-profile.png'
import lightProfile from '../../../assets/images/light-profile.png'
import styles from './CastCard.module.css'


const CastCard = ({ actor }: { actor: ICastType }) => {
  const { mode } = useAppSelector((state) => state.theme)
  const profileImg = mode === 'dark' ? darkProfile : lightProfile
  const isSmallScreen = useMediaQuery('(max-width: 540px)');
  const titleLimit = isSmallScreen ? 12 : 15;

  return (
    <NavLink to={`/Actors/actor/${actor?.id}`}>
      <div className={styles.castCard}>
        <img src={actor?.profile_path ? `https://image.tmdb.org/t/p/w400${actor?.profile_path}` : profileImg} />
        <div className={styles.castTitleDiv}>
          <h4>
            {actor?.name && actor?.name.length > titleLimit
              ? actor?.name.slice(0, titleLimit) + "..."
              : actor?.name}
          </h4>
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