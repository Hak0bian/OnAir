import { useEffect } from "react";
import { LibraryHeader, MainButton, MovieCard } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setLibrary, clearLibrary } from "../../store/slices";
import styles from './LibraryPage.module.css'

const LibraryPage = () => {
  const dispatch = useAppDispatch()
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

  return (
    <section>
      <div className='container'>
        <LibraryHeader />

        {library.length === 0 ? (
          <div className={styles.emptyLibrary}>
            <p>We are very sorry!</p>
            <p>You don’t have any movies at your library.</p>
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
              <MainButton text={'Clear library'} onClick={handleClearLibrary} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default LibraryPage