import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { actorFullInfoThunk } from '../../store/slices'
import { translations } from '../../translations/translations'
import { MovieCard } from '../../components'

const KnownForMoviesPage = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch();
    const { selectedActor, loadingInfo, errorInfo } = useAppSelector((state => state.actorsData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].actors

    useEffect(() => {
        if (id) {
            dispatch(actorFullInfoThunk({ id: Number(id), selectedLanguage }))
        }
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [])

    return (
        <section className='container'>
            <h3 style={{ fontWeight: 'normal', paddingTop: '20px' }}>{t.knownForMovies}</h3>
            <div className='gridDiv'>
                {
                    loadingInfo ? (
                        <p className='loading'>Loading...</p>
                    ) : errorInfo ? (
                        <p className='error'>{errorInfo}</p>
                    ) : (
                        selectedActor?.known_for_movies?.map((movie) => (<MovieCard key={movie.id} movie={movie} />))
                    )
                }
            </div>
        </section>
    )
}

export default KnownForMoviesPage