import { NavLink } from 'react-router-dom'
import { ISimilarResultsType } from '../../../types';
import { useMediaQuery } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import styles from './MovieSimilarCard.module.css'


const MovieSimilarCard = ({ movie }: {movie: ISimilarResultsType}) => {
    const isSmallScreen = useMediaQuery('(max-width: 540px)');
    const titleLimit = isSmallScreen ? 12 : 15;

    return (
        <NavLink to={`/Movies/movie/${movie?.id}`}>
            <div className={styles.movieCard}>
                <img src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`} className={styles.slideImg}/>
                <div className={styles.titleDiv}>
                    <h4>
                        {movie?.title && movie?.title.length > titleLimit
                            ? movie?.title.slice(0, titleLimit) + "..."
                            : movie?.title}
                    </h4>
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