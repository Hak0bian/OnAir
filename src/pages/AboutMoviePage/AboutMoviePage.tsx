import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { movieByIdThunk } from '../../store//slices';
import { MovieDetails } from '../../components';

const AboutMoviePage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch()
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)

    useEffect(() => {
        dispatch(movieByIdThunk({ id: Number(id), selectedLanguage}))
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id, selectedLanguage])

    return (
        <section>
            <MovieDetails />
        </section>
    )
}

export default AboutMoviePage