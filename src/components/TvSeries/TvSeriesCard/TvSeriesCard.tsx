import { NavLink } from 'react-router-dom'
import { ISeriesCardPropsType } from '../../componentsTypes/propsTypes';
import { BiSolidMoviePlay } from "react-icons/bi";
import GradeIcon from '@mui/icons-material/Grade';
import styles from './TvSeriesCard.module.css'

const TvSeriesCard = ({seria} : ISeriesCardPropsType) => {
    return (
        <NavLink to={`/TV/Seria/${seria?.id}`}>
            <div className={styles.seriaCard}>
                <div className={styles.imageDiv}>
                    {
                        seria?.poster_path 
                        ? <img src={`https://image.tmdb.org/t/p/w400${seria?.poster_path}`} className={styles.slideImg} />
                        : <BiSolidMoviePlay className={styles.movieIcon}/>
                    }
                </div>
                
                <div className={styles.nameDiv}>
                    <h4>{seria?.name && seria?.name.length > 15 ? seria?.name.slice(0, 15) + "..." : seria?.name}</h4>
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