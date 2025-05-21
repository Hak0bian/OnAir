import { useAppSelector } from '../../store/hooks/hooks'
import styles from './LibraryHeader.module.css'

const LibraryHeader = () => {
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)

  return (
    <section className={styles.libraryHeader}>
      <div className={styles.libraryContainer}>
        <div>
          <h2 className={styles.libraryTitle}>{selectedLanguage === 'en' ? 'Create Your Own Cinema' : 'Создай свой кинотеатр'}</h2>
          <p className={styles.libraryText}>{selectedLanguage === 'en' ? 'Your movie library — a place where memories and cinema come together. Preserve your collection, organize your watchlist, and revisit your favorite moments anytime.' : 'Ваша кинобиблиотека — место, где воспоминания и кино сливаются воедино. Сохраняйте свою коллекцию, организуйте список для просмотра и возвращайтесь к любимым моментам в любое время.'}</p>
        </div>
      </div>
    </section>
  )
}

export default LibraryHeader