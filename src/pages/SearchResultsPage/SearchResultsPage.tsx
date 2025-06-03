import { useEffect } from 'react';
import { ActorCard, MovieCard } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { searchActorThunk, searchMovieThunk } from '../../store/slices';
import { useSearchParams } from 'react-router-dom';
import styles from './SearchResultsPage.module.css'


const SearchResultsPage = () => {
    const { searchedMovies, movieIsLoading, movieNotFound } = useAppSelector((state) => state.searchedMoviesData);
    const { searchedActors, actorIsLoading, actorNotFound } = useAppSelector((state) => state.searchedActorsData);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (query.trim()) {
            dispatch(searchMovieThunk(query));
            dispatch(searchActorThunk(query));
        }
    }, []);


    return (
        <section>
            <div className='container'>
                <h2 className={styles.searchedTitle}>Searched movies</h2>
                <div className={styles.moviesDiv}>
                    {
                        movieIsLoading ? (
                            <p>Loading movies...</p>
                        ) : movieNotFound ? (
                            <p>No results for movies</p>
                        ) : searchedMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                    }
                </div>

                <h2 className={styles.searchedTitle}>Searched actors</h2>
                <div className={styles.actorsDiv}>
                    {
                        actorIsLoading ? (
                            <p>Loading actors...</p>
                        ) : actorNotFound ? (
                            <p>No results for actors</p>
                        ) : searchedActors.map((actor) => <ActorCard key={actor.id} actor={actor} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default SearchResultsPage