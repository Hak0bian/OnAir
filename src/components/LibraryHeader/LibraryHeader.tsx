import { useAppSelector } from '../../store/hooks/hooks'
import { translations } from '../../translations/translations'
import styles from './LibraryHeader.module.css'

const LibraryHeader = () => {
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)
  const t = translations[selectedLanguage].library

  return (
    <section className={styles.libraryHeader}>
      <div className={styles.libraryContainer}>
        <div>
          <h2 className={styles.libraryTitle}>{t.libraryTitle}</h2>
          <p className={styles.libraryText}>{t.libraryText}</p>
        </div>
      </div>
    </section>
  )
}

export default LibraryHeader