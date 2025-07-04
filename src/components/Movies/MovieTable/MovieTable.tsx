import { useAppSelector } from '../../../store/hooks/hooks'
import { translations } from '../../../translations/translations'
import { IMovieTablePropsType } from '../../componentsTypes/propsTypes'
import styles from './MovieTable.module.css'


const MovieTable = ({ selectedMovie }: IMovieTablePropsType) => {
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].movies.movieTable

    return (
        <div>
            <table className={styles.moviesTable}>
                <tbody>
                    <tr>
                        <td className={styles.key}>{t.vote}</td>
                        <td>{selectedMovie?.vote_average?.toFixed(1) || '—'} / {selectedMovie?.vote_count || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>{t.popularity}</td>
                        <td>{selectedMovie?.popularity || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>{t.language}</td>
                        <td>{selectedMovie?.original_language || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>{t.country}</td>
                        <td>{selectedMovie?.origin_country?.[0] || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>{t.companies}</td>
                        <td>{selectedMovie?.production_companies?.map(c => c?.name).join(', ') || '—'}</td>
                    </tr>
                    {selectedMovie?.runtime !== 0 && (
                        <tr>
                            <td className={styles.key}>{t.runtime}</td>
                            <td>{selectedMovie?.runtime} {t.minutes}</td>
                        </tr>
                    )}
                    {selectedMovie?.tagline && (
                        <tr>
                            <td className={styles.key}>{t.tagline}</td>
                            <td>{selectedMovie.tagline}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default MovieTable