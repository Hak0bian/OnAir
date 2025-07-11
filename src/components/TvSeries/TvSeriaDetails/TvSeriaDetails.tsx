import { useAppSelector } from '../../../store/hooks/hooks'
import { translations } from '../../../translations/translations';
import { NavLink } from 'react-router-dom';
import TvSeriaCastSlider from '../TvSeriaCastSlider/TvSeriaCastSlider';
import LastEpisode from '../LastEpisode/LastEpisode';
import TvSeriesSimilarSlider from '../TvSeriesSimilarSlider/TvSeriesSimilarSlider';
import AboutTvSeria from '../AboutTvSeria/AboutTvSeria';
import styles from './TvSeriaDetails.module.css'


const TvSeriaDetails = () => {
    const { selectedSeria, loadingInfo, errorInfo } = useAppSelector((state) => state.tvSeriesData)
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].movies
    const seriaCast = selectedSeria?.credits?.cast
    const seriaSimilar = selectedSeria?.similar?.results
    const backdrop = selectedSeria?.backdrop_path ? `https://image.tmdb.org/t/p/w1280${selectedSeria?.backdrop_path}` : '';

    if (loadingInfo) return <h3 className='loading'>Loading...</h3>;
    if (errorInfo) return <h3 className='error'>{errorInfo}</h3>;

    return (
        <section className={styles.detailsSection}
            style={{
                backgroundImage: `url(${backdrop})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <section className='container'>
                <AboutTvSeria />
                { 
                    selectedSeria?.last_air_date &&  
                    <>
                        <h3 className={styles.last}>{t.last}</h3>
                        <LastEpisode />
                    </>
                }

                <div className={styles.slideTopDiv}>
                    <h3 className={styles.slideTitle}>{t.cast}</h3>
                    {
                        seriaCast && seriaCast?.length > 8 &&
                        <NavLink to={`/TV/Seria/${selectedSeria?.id}/cast`} className={styles.seeAll}>{t.seeAll}</NavLink>
                    }
                </div>
                <TvSeriaCastSlider />

                <div className={styles.slideTopDiv}>
                    <h3 className={styles.slideTitle}>{t.recommendations}</h3>
                    {
                        seriaSimilar && seriaSimilar?.length > 8 &&
                        <NavLink to={`/TV/Seria/${selectedSeria?.id}/recommendations`} className={styles.seeAll}>{t.seeAll}</NavLink>
                    }
                </div>
                <TvSeriesSimilarSlider />
            </section>
        </section>
    )
}

export default TvSeriaDetails