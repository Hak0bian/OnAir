import { NavLink } from 'react-router-dom'
import GradeIcon from '@mui/icons-material/Grade';
import styles from './MovieSimilarCard.module.css'
import { ISimilarResultsType } from '../../../types';

const MovieSimilarCard = ({ movie }: {movie: ISimilarResultsType}) => {
    return (
        <NavLink to={`/Movies/movie/${movie?.id}`}>
            <div className={styles.movieCard}>
                <img src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`} className={styles.slideImg}/>
                <div className={styles.titleDiv}>
                    <h4>{movie?.title && movie?.title.length > 20 ? movie?.title.slice(0, 15) + "..." : movie?.title}</h4>
                    <div className={styles.dateAndRate}>
                        <p className={styles.date}>{movie?.release_date}</p>
                        <p className={styles.rating}>
                            <GradeIcon className={styles.starIcon}/>
                            {movie?.vote_average.toFixed(1)}
                        </p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default MovieSimilarCard