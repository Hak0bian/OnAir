import { NavLink } from 'react-router-dom'
import { ITvSeriesType } from '../../../types'
import GradeIcon from '@mui/icons-material/Grade';
import styles from './TvSeriesCard.module.css'

const TvSeriesCard = ({seria} : {seria: ITvSeriesType}) => {
    return (
        <NavLink to={`/TV/Seria/${seria?.id}`}>
            <div className={styles.seriaCard}>
                <img src={`https://image.tmdb.org/t/p/w400${seria?.poster_path}`} className={styles.slideImg}/>
                <div className={styles.nameDiv}>
                    <h4>{seria?.name.length > 20 ? seria?.name.slice(0, 15) + "..." : seria?.name}</h4>
                    <div className={styles.dateAndRate}>
                        <p className={styles.date}>{seria?.first_air_date}</p>
                        <p className={styles.rating}>
                            <GradeIcon className={styles.starIcon}/>
                            {seria?.vote_average.toFixed(1)}
                        </p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default TvSeriesCard