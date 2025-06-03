import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import CastCard from '../../components/Movies/CastCard/CastCard'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { movieCrewThunk } from '../../store/slices'
import { translations } from '../../translations/translations'


const SeeAllCastPage = () => {
    const dispatch = useAppDispatch();
    const { movieId, seriaId } = useParams();
    const { movieCast } = useAppSelector((state) => state.moviesData);
    const { selectedSeria } = useAppSelector((state) => state.tvSeriesData);
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage]

    useEffect(() => {
        if (movieId) {
            dispatch(movieCrewThunk(Number(movieId)));
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [movieId]);

    const castList = movieId
        ? movieCast
        : seriaId && selectedSeria
            ? selectedSeria.credits?.cast || []
            : [];

    return (
        <section>
            <div className='container'>
                <h2 style={{ fontWeight: 'normal', paddingTop: '20px' }}>{t.movies.cast}</h2>
                <div className='gridDiv'>
                    {castList.length > 0 &&
                        castList.map((actor) => (
                            <CastCard actor={actor} key={actor.id} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default SeeAllCastPage;