import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { addMovieToLibrary, removeMovieFromLibrary } from '../../../store/slices';
import { translations } from '../../../translations/translations';
import styles from './LibraryMovieBtn.module.css'
import { IMoviesType } from '../../../types';


const LibraryMovieBtn = ({ movie }: { movie: IMoviesType }) => {
  const dispatch = useAppDispatch();
  const { moviesInibrary } = useAppSelector(state => state.libraryData);
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)
  const t = translations[selectedLanguage]
  const existingMovie = moviesInibrary.some(m => m.id === movie.id);

  const handleClick = () => {
    if (existingMovie) {
      dispatch(removeMovieFromLibrary(movie.id));
    } else {
      dispatch(addMovieToLibrary(movie))
    }
  };

  return (
    <button
      onClick={handleClick}
      className={styles.libraryBtn}>
      {existingMovie ? t.removeLibraryBtn : t.addLibraryBtn}
    </button>
  )
}

export default LibraryMovieBtn