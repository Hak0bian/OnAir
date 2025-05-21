import { NavLink } from 'react-router-dom'
import { IMoviesType } from '../../../types'
import Rating from '../../UI/Rating/Rating'
import styles from './MovieCard.module.css'

const MovieCard = ({ movie }: { movie: IMoviesType }) => {
    return (
        <NavLink to={`/Movies/movie/${movie?.id}`}>
            <div className={styles.movieCard}>
                <img src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`} className={styles.slideImg}/>
                <div className={styles.titleDiv}>
                    <h4>{movie?.title}</h4>
                    <div className={styles.dateAndStars}>
                        <p>{movie?.release_date}</p>
                        <Rating value={movie?.vote_average} type="vote"/>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default MovieCard