import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks/hooks";
import { actorFullInfoThunk } from "../../store/slices";
import { ActorDetails } from "../../components";

const AboutActorPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(actorFullInfoThunk(Number(id)))
    }, [])

    return (
        <section className='container'>
            <ActorDetails />
        </section>
    )
}

export default AboutActorPage