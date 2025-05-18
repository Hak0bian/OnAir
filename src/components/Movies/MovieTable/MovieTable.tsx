import { IMovieTablePropsType } from '../../componentsTypes/propsTypes'
import styles from './MovieTable.module.css'

const MovieTable = ({ selectedMovie }: IMovieTablePropsType) => {
    return (
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
                    <tr>
                        <td className={styles.key}>Adult</td>
                        <td>{selectedMovie?.adult === false ? "No" : "Yes"}</td>
                    </tr>
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
    )
}

export default MovieTable