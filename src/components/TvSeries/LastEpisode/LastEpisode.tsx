import { useAppSelector } from '../../../store/hooks/hooks'
import GradeIcon from '@mui/icons-material/Grade';
import { BiSolidMoviePlay } from "react-icons/bi";
import styles from './LastEpisode.module.css'

const LastEpisode = () => {
    const { selectedSeria } = useAppSelector((state) => state.tvSeriesData)
    const last = selectedSeria?.last_episode_to_air

    return (
        <div>
            <div className={styles.episodeDiv}>
                <div className={styles.posterDiv}>
                    {
                        last?.still_path
                        ? <img src={`https://image.tmdb.org/t/p/w400${last?.still_path}`}/>
                        : <BiSolidMoviePlay className={styles.movieIcon}/>
                    }
                </div>

                <div className={styles.episodeInfo}>
                    <h2>{last?.name}</h2>
                    <p className={styles.episodeNum}>Season {last?.season_number} Episode {last?.episode_number}</p>
                    <div className={styles.flexDiv}>
                        <p className={styles.rating}>
                            <GradeIcon className={styles.starIcon} />
                            {last?.vote_average.toFixed(1)}
                        </p>
                        <span>{last?.air_date}</span>
                        <span>{last?.runtime + " minutes"}</span>
                    </div>
                    <p className={styles.about}>{last?.overview}</p>
                </div>
            </div>
            <p className={styles.hiddenAbout}>{last?.overview}</p>
        </div>
    )
}

export default LastEpisode