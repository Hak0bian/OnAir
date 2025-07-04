import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { actorsThunk, changeActorsPageNumber } from '../../store/slices'
import { ActorCard, Carousel, Paginationn } from '../../components'


const ActorsPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { actors, loadingActors, errorActors, page, totalPages } = useAppSelector((state) => state.actorsData)
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const images = actors.filter(actor => actor?.profile_path)
        .map(actor => `https://image.tmdb.org/t/p/w500${actor?.profile_path}`);

    useEffect(() => {
        dispatch(actorsThunk({ page, selectedLanguage }))
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [page, selectedLanguage])

    const handleChangePage = (newPage: number) => {
        if (newPage !== page) {
            dispatch(changeActorsPageNumber(newPage))
            navigate(`/Actors/page/${newPage}`)
        }
    }

    return (
        <section style={{ minHeight: '100vh' }}>
            {
                loadingActors ? (
                    <p className='loading'>Loading...</p>
                ) : errorActors ? (
                    <p className='error'>{errorActors}</p>
                ) : (
                    <section>
                        <Carousel images={images} />
                        <div className='container'>
                            <div className='gridDiv'>
                                {actors?.map((actor) => (<ActorCard key={actor.id} actor={actor} />))}
                            </div>
                            <Paginationn page={page} totalPages={totalPages} handleChangePage={handleChangePage} />
                        </div>
                    </section>
                )
            }
        </section>
    )
}

export default ActorsPage