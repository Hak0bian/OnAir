import { useAppSelector } from '../../../store/hooks/hooks'
import { IMovieTablePropsType } from '../../componentsTypes/propsTypes'
import styles from './MovieTable.module.css'

const MovieTable = ({ selectedMovie }: IMovieTablePropsType) => {
    const { selectedLanguage } = useAppSelector((state => state.languagesData))

    return (
        selectedLanguage === 'en' ? (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className={styles.key}>Date</td>
                        <td>{selectedMovie?.release_date || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>Vote/Votes</td>
                        <td>{selectedMovie?.vote_average?.toFixed(1) || '—'} / {selectedMovie?.vote_count || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>Popularity</td>
                        <td>{selectedMovie?.popularity || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>Genre</td>
                        <td>{selectedMovie?.genres?.map(g => g?.name).join(', ') || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>Language</td>
                        <td>{selectedMovie?.original_language || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>Country</td>
                        <td>{selectedMovie?.origin_country?.[0] || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>Companies</td>
                        <td>{selectedMovie?.production_companies?.map(c => c?.name).join(', ') || '—'}</td>
                    </tr>
                    {selectedMovie?.adult && (
                        <tr>
                            <td className={styles.key}>Adult</td>
                            <td>Yes</td>
                        </tr>
                    )}
                    {selectedMovie?.runtime !== 0 && (
                        <tr>
                            <td className={styles.key}>Runtime</td>
                            <td>{selectedMovie?.runtime} minutes</td>
                        </tr>
                    )}
                    {selectedMovie?.tagline && (
                        <tr>
                            <td className={styles.key}>Tagline</td>
                            <td>{selectedMovie.tagline}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        ) : (
            <div>
            <table>
                <tbody>
                    <tr>
                        <td className={styles.key}>Дата</td>
                        <td>{selectedMovie?.release_date || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>Голосование/Голоса</td>
                        <td>{selectedMovie?.vote_average?.toFixed(1) || '—'} / {selectedMovie?.vote_count || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>Популярность</td>
                        <td>{selectedMovie?.popularity || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>Жанр</td>
                        <td>{selectedMovie?.genres?.map(g => g?.name).join(', ') || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>Язык</td>
                        <td>{selectedMovie?.original_language || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>Страна</td>
                        <td>{selectedMovie?.origin_country?.[0] || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>Компании</td>
                        <td>{selectedMovie?.production_companies?.map(c => c?.name).join(', ') || '—'}</td>
                    </tr>
                    {selectedMovie?.adult && (
                        <tr>
                            <td className={styles.key}>Для взрослых</td>
                            <td>Да</td>
                        </tr>
                    )}
                    {selectedMovie?.runtime !== 0 && (
                        <tr>
                            <td className={styles.key}>Продолжительность</td>
                            <td>{selectedMovie?.runtime} минут</td>
                        </tr>
                    )}
                    {selectedMovie?.tagline && (
                        <tr>
                            <td className={styles.key}>Слоган</td>
                            <td>{selectedMovie.tagline}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        )
    )
}

export default MovieTable