import { useEffect } from "react";
import { LibraryHeader, MainButton, MovieCard } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { setMovieinLibrary, clearLibrary, setSeriainLibrary } from "../../store/slices";
import { translations } from "../../translations/translations";
import styles from './LibraryPage.module.css'
import TvSeriesCard from "../../components/TvSeries/TvSeriesCard/TvSeriesCard";
import Test from "../test/Test";

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
  }, []);

  const handleClearLibrary = () => {
    dispatch(clearLibrary());
  };


  return (
    <section>
      {/* <Test/> */}
      <LibraryHeader />
      <div className={styles.libraryContainer}>
        {moviesInibrary.length === 0 && seriesInLibrary.length === 0
          ? (
            <div className={styles.emptyLibrary}>
              <p>{t.emptyTitle}</p>
              <p>{t.emptySubtitle}</p>
            </div>
          ) : (
            <div className={styles.libraryDiv}>
              <h2>Seved movies</h2>
              <div className={styles.moviesDiv}>
                {
                  moviesInibrary.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))
                }
              </div>

              <h2>Seved series</h2>
              <div className={styles.moviesDiv}>
                {
                  seriesInLibrary.map(seria => (
                    <TvSeriesCard key={seria.id} seria={seria} />
                  ))
                }
              </div>

              <div className={styles.clearBtnDiv}>
                <MainButton text={t.clearBtn} onClick={handleClearLibrary} />
              </div>
            </div>
          )}
      </div>
    </section>
  )
}

export default LibraryPage