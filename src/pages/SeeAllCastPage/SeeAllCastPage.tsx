import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { translations } from '../../translations/translations'
import CastCard from '../../components/Movies/CastCard/CastCard'
import { movieByIdThunk, tvSeriaByIdThunk } from '../../store/slices'


const SeeAllCastPage = () => {
    const dispatch = useAppDispatch();
    const { movieId, seriaId } = useParams();
    const { selectedMovie } = useAppSelector((state) => state.moviesData);
    const { selectedSeria } = useAppSelector((state) => state.tvSeriesData);
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].movies

    useEffect(() => {
        if (movieId) {
            dispatch(movieByIdThunk({ id: Number(movieId), selectedLanguage }));
        }
        if (seriaId) {
            dispatch(tvSeriaByIdThunk({ id: Number(seriaId), selectedLanguage }))
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [movieId, seriaId, selectedLanguage]);

    const castList =
        movieId && selectedMovie?.credits?.cast
        ? selectedMovie.credits.cast
        : seriaId && selectedSeria?.credits?.cast
            ? selectedSeria.credits.cast
            : [];

    return (
        <section className='container'>
            <h3 className='pageTitle'>{t.cast}</h3>
            <div className='gridDiv'>
                {castList.length > 0 &&
                    castList.map((actor) => (
                        <CastCard actor={actor} key={actor.id} />
                    ))}
            </div>
        </section>
    );
};

export default SeeAllCastPage;