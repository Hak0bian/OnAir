import { useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import { NavLink } from 'react-router-dom';
import { KnownForMoviesSlider, KnownForSeriesSlider } from '../../';
import AboutActor from '../AboutActor/AboutActor';
import styles from './ActorDetails.module.css'


const ActorDetails = () => {
    const { selectedActor, loadingInfo, errorInfo } = useAppSelector((state => state.actorsData))
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].actors

    if (loadingInfo) return <h3 className='loading'>Loading...</h3>;
    if (errorInfo) return <h3 className='error'>{errorInfo}</h3>;

    return (
        <section className={styles.actorDetailsSec}>
            <AboutActor />
            <div className={styles.knownForBox}>
                <div className={styles.slideTopDiv}>
                    <h3 className={styles.slideTitle}>{t.knownForMovies}</h3>
                    {
                        selectedActor?.known_for_movies && selectedActor?.known_for_movies?.length > 8 &&
                        <NavLink to={`/Actors/actor/${selectedActor?.id}/known-for-movies`} className={styles.seeAll}>{t.seeAll}</NavLink>
                    }
                </div>
                <KnownForMoviesSlider />
            </div>
            <div>
                <div className={styles.slideTopDiv}>
                    <h3 className={styles.slideTitle}>{t.knownForSeries}</h3>
                    {
                        selectedActor?.known_for_series && selectedActor?.known_for_series?.length > 8 &&
                        <NavLink to={`/Actors/actor/${selectedActor?.id}/known-for-series`} className={styles.seeAll}>{t.seeAll}</NavLink>
                    }
                </div>
                <KnownForSeriesSlider />
            </div>
        </section>
    )
}

export default ActorDetails