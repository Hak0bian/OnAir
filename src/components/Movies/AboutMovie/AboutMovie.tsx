import { useAppSelector } from '../../../store/hooks/hooks'
import { translations } from '../../../translations/translations'
import LibraryMovieBtn from '../../UI/LibraryMovieBtn/LibraryMovieBtn'
import MovieTable from '../MovieTable/MovieTable'
import Trailer from '../Trailer/Trailer'
import GradeIcon from '@mui/icons-material/Grade';
import styles from './AboutMovie.module.css'

const AboutMovie = () => {
    const { selectedMovie } = useAppSelector((state => state.moviesData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].movies
    const trailer = selectedMovie?.videos?.results?.find(video => video.type === "Trailer")
    let key = trailer ? trailer?.key : null;
    const logo = selectedMovie?.images?.logos?.[0]?.file_path
        ? `https://image.tmdb.org/t/p/w200${selectedMovie.images.logos[0].file_path}` : '';

    return (
        <section className={styles.movieDetails}>
            <div className={styles.movieDetailsDiv}>
                <div className={styles.posterDiv}>
                    <img src={`https://image.tmdb.org/t/p/w400${selectedMovie?.poster_path}`} />
                </div>
                <div>
                    {
                        logo
                        ? <img src={logo} alt={selectedMovie?.name} className={styles.logoImage} />
                        : <h2 className={styles.detailsTitle}>{selectedMovie?.title}</h2>
                    }
                    {
                        selectedMovie?.genres && selectedMovie?.genres?.length > 0 &&
                        <p className={styles.genre}>{selectedMovie?.genres?.map(g => g?.name).join(', ')}</p>
                    }
                    <div className={styles.flexDiv}>
                        <p className={styles.rating}>
                            <GradeIcon className={styles.starIcon} />
                            {selectedMovie?.vote_average.toFixed(1)}
                        </p>
                        <span>{selectedMovie?.release_date}</span>
                    </div>
                    <MovieTable selectedMovie={selectedMovie} />

                    <div className={styles.buttonsDiv}>
                        <Trailer trailerKey={key} />
                        {selectedMovie && <LibraryMovieBtn movie={selectedMovie} />}
                    </div>
                </div>
            </div>

            <h3 className={styles.secondary}>{t.overview}</h3>
            <p className={styles.about}>{selectedMovie?.overview}</p>
        </section>
    )
}

export default AboutMovie