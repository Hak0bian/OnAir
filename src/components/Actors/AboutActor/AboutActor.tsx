import { useAppSelector } from '../../../store/hooks/hooks';
import GradeIcon from '@mui/icons-material/Grade';
import darkProfile from '../../../assets/images/dark-profile.png'
import lightProfile from '../../../assets/images/light-profile.png'
import styles from './AboutActor.module.css'


const AboutActor = () => {
    const { selectedActor } = useAppSelector((state => state.actorsData))
    const { mode } = useAppSelector((state) => state.theme)
    const profileImg = mode === 'dark' ? darkProfile : lightProfile

    return (
        <div className={styles.actorDetailsDiv}>
            <div className={styles.posterDiv}>
                <img src={selectedActor?.profile_path ? `https://image.tmdb.org/t/p/w400${selectedActor?.profile_path}` : profileImg} />
            </div>
            <div>
                <h2 className={styles.actorTitle}>{selectedActor?.name}</h2>
                <div className={styles.flexDiv}>
                    <p className={styles.rating}>
                        <GradeIcon className={styles.starIcon} />
                        {selectedActor?.popularity?.toFixed(1)}
                    </p>
                    {
                        selectedActor?.known_for_department &&
                        <p className={styles.department}>{selectedActor.known_for_department}</p>
                    }
                </div>
                    <p className={styles.knownAS}>
                        {selectedActor?.also_known_as?.map((names, ind) => (<span key={ind}> {names}, </span>))}
                    </p> 
                <p className={styles.biography}>{selectedActor?.biography}</p>
            </div>
        </div>
    )
}

export default AboutActor