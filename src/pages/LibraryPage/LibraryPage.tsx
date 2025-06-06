import { useEffect } from "react";
import { MainButton, MovieCard } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setMovieinLibrary, clearLibrary, setSeriainLibrary } from "../../store/slices";
import { translations } from "../../translations/translations";
import TvSeriesCard from "../../components/TvSeries/TvSeriesCard/TvSeriesCard";
import styles from './LibraryPage.module.css'
// import Test from "../test/Test";

const LibraryPage = () => {
  const dispatch = useAppDispatch()
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)
  const { moviesInibrary, seriesInLibrary } = useAppSelector(state => state.libraryData);
  const t = translations[selectedLanguage].library

  useEffect(() => {
    const storedMovies = localStorage.getItem('libraryMovies');
    const storedSeries = localStorage.getItem('librarySeries');
    if (storedMovies) {
      dispatch(setMovieinLibrary(JSON.parse(storedMovies)));
    }
    if (storedSeries) {
      dispatch(setSeriainLibrary(JSON.parse(storedSeries)))
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleClearLibrary = () => {
    dispatch(clearLibrary());
  };


  return (
    <section>
      {/* <Test/> */}
      <div className='sectionHeader'>
        <div className='headerDiv'>
          <h2 className='sectionTitle'>{t.libraryTitle}</h2>
          <p className='sectionText'>{t.libraryText}</p>
        </div>
      </div>

      <div className={styles.libraryContainer}>
        {moviesInibrary.length === 0 && seriesInLibrary.length === 0 ? (
          <div className={styles.emptyLibrary}>
            <p>{t.emptyTitle}</p>
            <p>{t.emptySubtitle}</p>
          </div>
        ) : (
          <>
            {moviesInibrary.length > 0 && (
              <div>
                <h3 className={styles.blockTitle}>{t.savedMovies}</h3>
                <div className={styles.block}>
                  {moviesInibrary.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
              </div>
            )}

            {seriesInLibrary.length > 0 && (
              <div>
                <h3 className={styles.blockTitle}>{t.savedSeries}</h3>
                <div className={styles.block}>
                  {seriesInLibrary.map(seria => (
                    <TvSeriesCard key={seria.id} seria={seria} />
                  ))}
                </div>
              </div>
            )}

            <div className={styles.clearBtnDiv}>
              <MainButton text={t.clearBtn} onClick={handleClearLibrary} />
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default LibraryPage