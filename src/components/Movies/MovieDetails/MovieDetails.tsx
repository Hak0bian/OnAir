import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import { MovieCastSlider } from '../..'
import styles from './MovieDetails.module.css'
import AboutMovie from '../AboutMovie/AboutMovie';
import MoviesSimilarSlider from '../MoviesSimilarSlider/MoviesSimilarSlider';

const MovieDetails = () => {
    const { selectedMovie } = useAppSelector((state => state.moviesData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].movies
    const movieCast = selectedMovie?.credits?.cast
    const backdrop = selectedMovie?.backdrop_path ? `https://image.tmdb.org/t/p/w1280${selectedMovie?.backdrop_path}` : '';

    console.log(selectedMovie);
        

    return (
        <section className={styles.detailsSection}
            style={{
                backgroundImage: `url(${backdrop})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <AboutMovie />

            <section className='container'>
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

            </section>
        </section>
    )
}

export default MovieDetails