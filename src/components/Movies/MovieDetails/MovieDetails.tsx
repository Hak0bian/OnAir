import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import { MovieCastSlider } from '../..'
import styles from './MovieDetails.module.css'
import AboutMovie from '../AboutMovie/AboutMovie';
import MoviesSimilarSlider from '../MoviesSimilarSlider/MoviesSimilarSlider';

const MovieDetails = () => {
    const { selectedMovie, loadingInfo, errorInfo } = useAppSelector((state => state.moviesData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].movies
    const movieCast = selectedMovie?.credits?.cast
    const backdrop = selectedMovie?.backdrop_path ? `https://image.tmdb.org/t/p/w1280${selectedMovie?.backdrop_path}` : '';

    if (loadingInfo) return <h2 className='loading'>Loading...</h2>;
    if (errorInfo) return <h2 className='error'>{errorInfo}</h2>;

    return (
        <section className={styles.detailsSection}
            style={{
                backgroundImage: `url(${backdrop})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className='container'>
                <AboutMovie />

                <div className={styles.slideTopDiv}>
                    <h3 className={styles.slideTitle}>{t.cast}</h3>
                    {
                        movieCast && movieCast.length > 8 &&
                        <NavLink to={`/Movies/movie/${selectedMovie.id}/cast`} className={styles.seeAll}>{t.seeAll}</NavLink>
                    }
                </div>
                <MovieCastSlider />

                <div className={styles.slideTopDiv}>
                    <h3 className={styles.slideTitle}>{t.recommendations}</h3>
                    <NavLink to={`/Movies/movie/${selectedMovie?.id}/recommendations`} className={styles.seeAll}>{t.seeAll}</NavLink>
                </div>
                <MoviesSimilarSlider />
            </div>
        </section>
    )
}

export default MovieDetails