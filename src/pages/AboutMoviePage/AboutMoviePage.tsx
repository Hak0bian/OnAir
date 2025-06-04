import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { movieByIdThunk, moviesThunk } from '../../store//slices';
import { MovieDetails } from '../../components';

const AboutMoviePage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch()
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)

    useEffect(() => {
        dispatch(movieByIdThunk({ id: Number(id), selectedLanguage}))
    }, [selectedLanguage])

    return (
        <section>
            <MovieDetails />
        </section>
    )
}

export default AboutMoviePage