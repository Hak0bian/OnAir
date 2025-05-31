import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import CastCard from '../../components/Movies/CastCard/CastCard'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { movieCrewThunk } from '../../store/slices'

const SeeAllCastPage = () => {
    const { movieId } = useParams()
    const dispatch = useAppDispatch()
    const { movieCast } = useAppSelector((state) => state.moviesData)

    useEffect(() => {
        dispatch(movieCrewThunk(Number(movieId)))
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <section>
            <div className='container'>
                <h2 style={{ fontWeight: 'normal', padding: '20px 0' }}>MOVIE CAST</h2>
                <Box sx={{
                    display: 'grid', gap: 2, justifyContent: 'center',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(6, 1fr)',
                        xl: 'repeat(6, 1fr)',
                    }
                }}
                >
                    {
                        movieCast.length > 0 && movieCast.map((actor) => (
                            <CastCard actor={actor} />
                        ))
                    }
                </Box>
            </div>
        </section >
    )
}

export default SeeAllCastPage