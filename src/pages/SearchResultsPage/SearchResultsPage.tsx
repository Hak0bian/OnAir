import { useEffect } from 'react';
import { ActorCard, MovieCard } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { searchActorThunk, searchMovieThunk, searchTvSeriesThunk } from '../../store/slices';
import { useSearchParams } from 'react-router-dom';
import { translations } from '../../translations/translations';
import TvSeriesCard from '../../components/TvSeries/TvSeriesCard/TvSeriesCard';


const SearchResultsPage = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const { searchedMovies, movieIsLoading, movieNotFound } = useAppSelector((state) => state.searchedMoviesData);
    const { searchedActors, actorIsLoading, actorNotFound } = useAppSelector((state) => state.searchedActorsData);
    const { searchedSeries, seriaIsLoading, seriaNotFound } = useAppSelector((state) => state.searchSeriesData);
    const { selectedLanguage } = useAppSelector((state) => state.languagesData);
    const t = translations[selectedLanguage].search

    useEffect(() => {
        if (query.trim()) {
            dispatch(searchMovieThunk(query));
            dispatch(searchActorThunk(query));
            dispatch(searchTvSeriesThunk(query));
        }
    }, []);

    return (
        <section style={{paddingBottom: '20px'}}>
            <div className='container'>
                <h3 className='pageTitle'>{t.searchedMovies}</h3>
                <div className='gridDiv'>
                    {
                        movieIsLoading ? (
                            <p>Loading ...</p>
                        ) : movieNotFound ? (
                            <p>{t.noResults}</p>
                        ) : searchedMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                    }
                </div>

                <h3 className='pageTitle'>{t.searchedSeries}</h3>
                <div className='gridDiv'>
                    {
                        seriaIsLoading ? (
                            <p>Loading...</p>
                        ) : seriaNotFound ? (
                            <p>{t.noResults}</p>
                        ) : searchedSeries.map((seria) => <TvSeriesCard key={seria.id} seria={seria} />)
                    }
                </div>
                <h3 className='pageTitle'>{t.searchedActors}</h3>
                <div className='gridDiv'>
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