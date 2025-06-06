import { useEffect } from 'react';
import { ActorCard, MovieCard } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { searchActorThunk, searchMovieThunk, searchTvSeriesThunk } from '../../store/slices';
import { useSearchParams } from 'react-router-dom';
import { translations } from '../../translations/translations';
import TvSeriesCard from '../../components/TvSeries/TvSeriesCard/TvSeriesCard';
import styles from './SearchResultsPage.module.css'


const SearchResultsPage = () => {
    const { searchedMovies, movieIsLoading, movieNotFound } = useAppSelector((state) => state.searchedMoviesData);
    const { searchedActors, actorIsLoading, actorNotFound } = useAppSelector((state) => state.searchedActorsData);
    const { searchedSeries, seriaIsLoading, seriaNotFound } = useAppSelector((state) => state.searchSeriesData);
    const { selectedLanguage } = useAppSelector((state) => state.languagesData);
    const t = translations[selectedLanguage].search
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (query.trim()) {
            dispatch(searchMovieThunk(query));
            dispatch(searchActorThunk(query));
            dispatch(searchTvSeriesThunk(query));
        }
    }, []);


    return (
        <section>
            <div className='container'>
                <h3 className={styles.searchedTitle}>{t.searchedMovies}</h3>
                <div className={styles.moviesDiv}>
                    {
                        movieIsLoading ? (
                            <p>Loading ...</p>
                        ) : movieNotFound ? (
                            <p>{t.noResults}</p>
                        ) : searchedMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                    }
                </div>

                <h3 className={styles.searchedTitle}>{t.searchedSeries}</h3>
                <div className={styles.moviesDiv}>
                    {
                        seriaIsLoading ? (
                            <p>Loading...</p>
                        ) : seriaNotFound ? (
                            <p>{t.noResults}</p>
                        ) : searchedSeries.map((seria) => <TvSeriesCard key={seria.id} seria={seria} />)
                    }
                </div>
                <h3 className={styles.searchedTitle}>{t.searchedActors}</h3>
                <div className={styles.actorsDiv}>
                    {
                        actorIsLoading ? (
                            <p>Loading...</p>
                        ) : actorNotFound ? (
                            <p>{t.noResults}</p>
                        ) : searchedActors.map((actor) => <ActorCard key={actor.id} actor={actor} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default SearchResultsPage