import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { tvSeriaByIdThunk } from '../../store/slices';
import { TvSeriaDetails } from '../../components';

const AboutTvSeriaPage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch()
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)

    useEffect(() => {
        dispatch(tvSeriaByIdThunk({ id: Number(id), selectedLanguage }))
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [selectedLanguage, id])


    return (
        <section>
            <TvSeriaDetails />
        </section>
    )
}

export default AboutTvSeriaPage