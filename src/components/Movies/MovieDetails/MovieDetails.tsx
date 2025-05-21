import { useAppSelector } from '../../../store/hooks/hooks';
import { LibraryButton, MovieCastSlider, MovieTable, Rating, Trailer } from '../..'
import styles from './MovieDetails.module.css'

const MovieDetails = () => {
    const { movieVideos, selectedMovie, isLoading } = useAppSelector((state => state.moviesData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
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
                    <Rating value={selectedMovie?.vote_average} type="vote"/>
                    <MovieTable selectedMovie={selectedMovie} />
                    <h3 className={styles.secondary}>{selectedLanguage === 'en' ? 'Overview' : 'Обзор'}</h3>
                    <p className={styles.about}>{selectedMovie?.overview}</p>

                    <div className={styles.buttonsDiv}>
                        <Trailer trailerKey={key} />
                        <LibraryButton movie={selectedMovie} />
                    </div>

                </div>
            </div>
            <MovieCastSlider movieId={selectedMovie?.id} />
        </section>
    )
}

export default MovieDetails