import { useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import { BiSolidMoviePlay } from "react-icons/bi";
import TvSeriaTable from '../TvSeriaTable/TvSeriaTable';
import LibrarySeriaBtn from '../../UI/LibrarySeriaBtn/LibrarySeriaBtn';
import Trailer from '../../Movies/Trailer/Trailer';
import GradeIcon from '@mui/icons-material/Grade';
import styles from './AboutTvSeria.module.css'


const AboutTvSeria = () => {
    const { selectedSeria } = useAppSelector((state) => state.tvSeriesData)
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].movies
    const trailer = selectedSeria?.videos?.results.find(video => video.type === "Trailer")
    let key = trailer ? trailer?.key : null;
    const logo = selectedSeria?.images?.logos?.[0]?.file_path
        ? `https://image.tmdb.org/t/p/w200${selectedSeria.images.logos[0].file_path}` : '';


    return (
        <section className={styles.seriaDetails}>
            <div className={styles.seriaDetailsDiv}>
                <div className={styles.posterDiv}>
                    {
                        selectedSeria?.poster_path 
                        ? <img src={`https://image.tmdb.org/t/p/w400${selectedSeria?.poster_path}`} />
                        : <BiSolidMoviePlay className={styles.movieIcon}/>
                    }
                </div>
                <div className={styles.seriaName}>
                    {
                        logo
                            ? <img src={logo} alt={selectedSeria?.name} className={styles.logoImage} />
                            : <h2 className={styles.detailsTitle}>{selectedSeria?.name}</h2>
                    }
                    {
                        selectedSeria?.genres && selectedSeria?.genres?.length > 0 &&
                        <p className={styles.genre}>{selectedSeria?.genres?.map(g => g?.name).join(', ')}</p>
                    }
                    <div className={styles.flexDiv}>
                        <p className={styles.rating}>
                            <GradeIcon className={styles.starIcon} />
                            {selectedSeria?.vote_average.toFixed(1)}
                        </p>
                        <span>{selectedSeria?.first_air_date || '—'} - {selectedSeria?.last_air_date || '—'}</span>
                    </div>
                    <div className={styles.hiddenButtonsDiv}>
                        <Trailer trailerKey={key} />
                        {selectedSeria && <LibrarySeriaBtn seria={selectedSeria} />}
                    </div>
                    <div className={styles.tableDiv}>
                        <TvSeriaTable selectedSeria={selectedSeria} />
                    </div>
                    <div className={styles.hiddenOverview}>
                        <p className={styles.about}>{selectedSeria?.overview}</p>
                    </div>
                    <div className={styles.buttonsDiv}>
                        <Trailer trailerKey={key} />
                        {selectedSeria && <LibrarySeriaBtn seria={selectedSeria} />}
                    </div>
                </div>
            </div>

            <div className={styles.bottomOverview}>
                <h3 className={styles.secondary}>{t.overview}</h3>
                <p className={styles.about}>{selectedSeria?.overview}</p>
            </div>
            <div className={styles.bottomTable}>
                <TvSeriaTable selectedSeria={selectedSeria} />
            </div>
        </section>
    )
}

export default AboutTvSeria