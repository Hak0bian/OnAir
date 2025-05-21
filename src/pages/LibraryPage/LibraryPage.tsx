import { useEffect } from "react";
import { LibraryHeader, MainButton, MovieCard } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setLibrary, clearLibrary } from "../../store/slices";
import styles from './LibraryPage.module.css'

const LibraryPage = () => {
  const dispatch = useAppDispatch()
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)
  const { library } = useAppSelector(state => state.libraryData);

  useEffect(() => {
    const storedLibrary = localStorage.getItem('library');
    if (storedLibrary) {
      dispatch(setLibrary(JSON.parse(storedLibrary)));
    }
  }, []);

  const handleClearLibrary = () => {
    dispatch(clearLibrary());
  };

  const isEn = selectedLanguage === 'en';
  const emptyTitle = isEn
    ? 'Your library is empty for now.'
    : 'Ваша библиотека пока пуста.';
  const emptySubtitle = isEn
    ? 'Add your favorite movies to get started!'
    : 'Добавьте любимые фильмы, чтобы начать!';

  return (
    <section>
      <LibraryHeader />
      <div style={{ maxWidth: '1240px', margin: 'auto', minHeight: '50vh' }}>
        {library.length === 0 ? (
          <div className={styles.emptyLibrary}>
            <p>{emptyTitle}</p>
            <p>{emptySubtitle}</p>
          </div>
        ) : (
          <div className={styles.libraryDiv}>
            <div className={styles.moviesDiv}>
              {
                library.map(movie => (
                  <MovieCard key={movie.id} movie={movie} />
                ))
              }
            </div>
            <div className={styles.clearBtnDiv}>
              <MainButton text={selectedLanguage === 'en' ? 'Clear library' : 'Очистить все'} onClick={handleClearLibrary} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default LibraryPage