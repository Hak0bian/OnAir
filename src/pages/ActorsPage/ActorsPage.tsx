import { Box } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { useEffect } from 'react'
import { actorBiographyThunk, actorsThunk, changeActorsPageNumber } from '../../store/slices'
import { ActorCard, ActorsPageSlider, Paginationn, SearchActor } from '../../components'
import { useNavigate } from 'react-router-dom'

const ActorsPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { actors, page, totalPages } = useAppSelector((state) => state.actorsData)
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)

    useEffect(() => {
        dispatch(actorsThunk({ page, selectedLanguage }))
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [page])

    useEffect(() => {
        actors.forEach((actor) => {
            if (!actor.biography) {
                dispatch(actorBiographyThunk(actor.id));
            }
        });
    }, [actors]);

    const handleChangePage = (newPage: number) => {
        if (newPage !== page) {
            dispatch(changeActorsPageNumber(newPage))
            navigate(`/Actors/page/${newPage}`)
        }
    }

    return (
        <section>
            <ActorsPageSlider actors={actors} />
            <div className='container'>
                <SearchActor/>
                <Box
                    sx={{
                        display: 'grid', gap: 2, justifyContent: 'center',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(4, 1fr)',
                            xl: 'repeat(5, 1fr)',
                        }
                    }}
                >
                    {
                        actors
                            .filter((actor) => actor.profile_path)
                            .map((actor) => (
                                <ActorCard key={actor.id} actor={actor} />
                            ))
                    }
                </Box>
                <Paginationn page={page} totalPages={totalPages} handleChangePage={handleChangePage} />
            </div>
        </section>
    )
}

export default ActorsPage