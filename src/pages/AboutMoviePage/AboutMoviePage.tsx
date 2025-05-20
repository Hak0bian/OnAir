import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useAppDispatch } from '../../store/hooks/hooks';
import { movieByIdThunk, movieCrewThunk, movieVideosThunk } from '../../store//slices';
import { MovieDetails } from '../../components';

const AboutMoviePage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieByIdThunk(Number(id)))
        dispatch(movieVideosThunk(Number(id)))
        dispatch(movieCrewThunk(Number(id)))
    }, [])

    return (
        <section className='container'>
            <MovieDetails />
        </section>
    )
}

export default AboutMoviePage