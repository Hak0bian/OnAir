import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { useEffect } from 'react'
import { movieByIdThunk, tvSeriaByIdThunk } from '../../store/slices';
import { translations } from '../../translations/translations';
import TvSeriesCard from '../../components/TvSeries/TvSeriesCard/TvSeriesCard';
import MovieSimilarCard from '../../components/Movies/MovieSimilarCard/MovieSimilarCard';

const RecommendationsPage = () => {
    const { movieId, seriaId } = useParams();
    const dispatch = useAppDispatch();
    const { selectedMovie } = useAppSelector((state) => state.moviesData)
    const { selectedSeria } = useAppSelector((state) => state.tvSeriesData)
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].movies

    useEffect(() => {
        if (movieId) {
            dispatch(movieByIdThunk({ id: Number(movieId), selectedLanguage }))
        }
        if (seriaId) {
            dispatch(tvSeriaByIdThunk({ id: Number(seriaId), selectedLanguage }))
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [movieId, seriaId, selectedLanguage])

    const recMovies = selectedMovie?.similar?.results;
    const recSeries = selectedSeria?.similar?.results;


    return (
        <section>
            <div className='container'>
                <h2 style={{ fontWeight: 'normal', paddingTop: '20px' }}>{t.recommendations}</h2>
                <div className='gridDiv'>
                    {movieId && recMovies?.map(movie => (
                        <MovieSimilarCard key={movie.id} movie={movie} />
                    ))}
                    {seriaId && recSeries?.map(seria => (
                        <TvSeriesCard key={seria.id} seria={seria} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecommendationsPage