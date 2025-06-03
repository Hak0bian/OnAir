import { useAppSelector } from '../../../store/hooks/hooks';
import { LibraryMovieBtn, MovieCastSlider, MovieTable, Trailer } from '../..'
import { translations } from '../../../translations/translations';
import GradeIcon from '@mui/icons-material/Grade';
import styles from './MovieDetails.module.css'

const MovieDetails = () => {
    const { movieVideos, selectedMovie, isLoading } = useAppSelector((state => state.moviesData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].movies
    const trailer = movieVideos.find(video => video.type === "Trailer")
    let key = trailer ? trailer?.key : null;

    if (isLoading) return <h3 className={styles.loading}>Loading...</h3>;
    if (!selectedMovie) return <h3 className={styles.notFound}>Movie not found...</h3>;

    return (
        <section className={styles.detailsSection}>
            <div className={styles.movieDetailsDiv}>
                <div className={styles.posterDiv}>
                    <img src={`https://image.tmdb.org/t/p/w400${selectedMovie?.poster_path}`} />
                </div>
                <div>
                    <h2 className={styles.detailsTitle}>{selectedMovie?.title}</h2>
                    {
                        selectedMovie.genres && selectedMovie.genres.length > 0 && 
                        <p className={styles.genre}>{selectedMovie?.genres?.map(g => g?.name).join(', ')}</p>
                    }
                    <p className={styles.rating}>
                        <GradeIcon className={styles.starIcon} />
                        {selectedMovie?.vote_average.toFixed(1)}
                    </p>
                    <MovieTable selectedMovie={selectedMovie} />
                    <h3 className={styles.secondary}>{t.overview}</h3>
                    <p className={styles.about}>{selectedMovie?.overview}</p>

                    <div className={styles.buttonsDiv}>
                        <Trailer trailerKey={key} />
                        { selectedMovie && <LibraryMovieBtn movie={selectedMovie} /> }
                    </div>
                </div>
            </div>
            <MovieCastSlider movieId={selectedMovie?.id} />
        </section>
    )
}

export default MovieDetails