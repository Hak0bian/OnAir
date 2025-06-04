import { useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import { NavLink } from 'react-router-dom';
import GradeIcon from '@mui/icons-material/Grade';
import darkProfile from '../../../assets/images/dark-profile.png'
import lightProfile from '../../../assets/images/light-profile.png'
import styles from './ActorDetails.module.css'
import KnownForSlider from '../KnownForSlider/KnownForSlider';

const ActorDetails = () => {
    const { selectedActor } = useAppSelector((state => state.actorsData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const { mode } = useAppSelector((state) => state.theme)
    const profileImg = mode === 'dark' ? darkProfile : lightProfile
    const t = translations[selectedLanguage].actors


    return (
        <section className={styles.actorDetailsSec}>
            <div className={styles.actorDetailsDiv}>
                <div className={styles.actorPosterDiv}>
                    <img src={selectedActor?.profile_path ? `https://image.tmdb.org/t/p/w400${selectedActor?.profile_path}` : profileImg} />
                </div>
                <div>
                    <h2 className={styles.actorTitle}>{selectedActor?.name}</h2>
                    {
                        selectedActor?.known_for_department &&
                        <p className={styles.department}>{selectedActor.known_for_department}</p>
                    }
                    <p className={styles.rating}>
                        <GradeIcon className={styles.starIcon} />
                        {selectedActor?.popularity.toFixed(1)}
                    </p>
                    <p className={styles.knownAS}>
                        {selectedActor?.also_known_as?.map((names, ind) => (<span key={ind}> {names}, </span>))}
                    </p>
                    <p className={styles.biography}>{selectedActor?.biography}</p>
                </div>
            </div>

            <div className={styles.knownForBox}>
                <div className={styles.slideTopDiv}>
                    <h3 className={styles.slideTitle}>{t.knownFor}</h3>
                    {
                        selectedActor?.known_for && selectedActor?.known_for?.length > 8 &&
                        <NavLink to={`/Actors/actor/${selectedActor.id}/cast`} className={styles.seeAll}>{t.seeAll}</NavLink>
                    }
                </div>
                <KnownForSlider />
            </div>
        </section>
    )
}

export default ActorDetails