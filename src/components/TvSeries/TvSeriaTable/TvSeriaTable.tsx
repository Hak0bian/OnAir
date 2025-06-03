import { useAppSelector } from '../../../store/hooks/hooks'
import { translations } from '../../../translations/translations'
import { ITvSeriaTablePropsType } from '../../componentsTypes/propsTypes'
import styles from './TvSeriaTable.module.css'

const TvSeriaTable = ({ selectedSeria } : ITvSeriaTablePropsType ) => {
    const { selectedLanguage } = useAppSelector((state => state.languagesData))
    const t = translations[selectedLanguage].movies.movieTable

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td className={styles.key}>{t.season}</td>
                        <td>{selectedSeria?.number_of_seasons || '—'} / {selectedSeria?.number_of_episodes || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>{t.status}</td>
                        <td>{selectedSeria?.status || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>{t.type}</td>
                        <td>{selectedSeria?.type || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>{t.popularity}</td>
                        <td>{selectedSeria?.popularity || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>{t.language}</td>
                        <td>{selectedSeria?.original_language || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>{t.country}</td>
                        <td>{selectedSeria?.origin_country?.[0] || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>{t.created}</td>
                        <td>{selectedSeria?.created_by?.map(c => c?.name).join(', ') || '—'}</td>
                    </tr>
                    <tr>
                        <td className={styles.key}>{t.companies}</td>
                        <td>{selectedSeria?.production_companies?.map(c => c?.name).join(', ') || '—'}</td>
                    </tr>
                    {selectedSeria?.tagline && (
                        <tr>
                            <td className={styles.key}>{t.tagline}</td>
                            <td>{selectedSeria.tagline}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TvSeriaTable