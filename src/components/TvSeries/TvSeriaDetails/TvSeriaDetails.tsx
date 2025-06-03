import { useAppSelector } from '../../../store/hooks/hooks'
import { translations } from '../../../translations/translations';
import { NavLink } from 'react-router-dom';
import TvSeriaCastSlider from '../TvSeriaCastSlider/TvSeriaCastSlider';
import LastEpisode from '../LastEpisode/LastEpisode';
import TvSeriesSimilarSlider from '../TvSeriesSimilarSlider/TvSeriesSimilarSlider';
import styles from './TvSeriaDetails.module.css'
import AboutTvSeria from '../../AboutTvSeria/AboutTvSeria';

const TvSeriaDetails = () => {
    const { selectedSeria } = useAppSelector((state) => state.tvSeriesData)
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].movies

    const imageUrl = selectedSeria?.images.backdrops?.[0]?.file_path
        ? `https://image.tmdb.org/t/p/w1280${selectedSeria.images.backdrops[0].file_path}`
        : '';

    console.log(selectedSeria);

    return (
        <section className={styles.detailsSection}>
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.2)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            />
            <section>
                <AboutTvSeria />
            </section>

            <section className='container'>
                <h3 className={styles.last}>{t.last}</h3>
                <LastEpisode />

                <div className={styles.slideTopDiv}>
                    <h3 className={styles.slideTitle}>{t.cast}</h3>
                    <NavLink to={`/TV/Seria/${selectedSeria?.id}/cast`} className={styles.seeAll}>{t.seeAll}</NavLink>
                </div>
                {selectedSeria?.id && <TvSeriaCastSlider />}

                <div className={styles.slideTopDiv}>
                    <h3 className={styles.slideTitle}>{t.recommendations}</h3>
                    <NavLink to={`/TV/Seria/recommendations`} className={styles.seeAll}>{t.seeAll}</NavLink>
                </div>
                <TvSeriesSimilarSlider />
            </section>
        </section>
    )
}

export default TvSeriaDetails