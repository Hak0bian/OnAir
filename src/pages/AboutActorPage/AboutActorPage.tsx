import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { actorFullInfoThunk } from "../../store/slices";
import { ActorDetails } from "../../components";

const AboutActorPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch()
    const {selectedLanguage} = useAppSelector((state) => state.languagesData)
    
    useEffect(() => {
        dispatch(actorFullInfoThunk({id: Number(id), selectedLanguage}))
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [selectedLanguage])

    return (
        <section className='container'>
            <ActorDetails />
        </section>
    )
}

export default AboutActorPage