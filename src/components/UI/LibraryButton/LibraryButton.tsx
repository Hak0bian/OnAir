import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { addToLibrary, removeFromLibrary } from '../../../store/slices';
import { IMoviesType } from '../../../types';
import { translations } from '../../../translations/translations';
import styles from './LibraryButton.module.css'

const LibraryButton = ({ movie }: { movie: IMoviesType }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { library } = useAppSelector(state => state.libraryData);
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)
  const t = translations[selectedLanguage]
  const isInLibrary = library.some(m => m.id === movie.id);
  const currentTheme = document.body.getAttribute('data-theme');
  const isOnMovieDetailsPage = location.pathname.startsWith('/Movies/movie/');

  const handleClick = () => {
    if (isInLibrary) {
      dispatch(removeFromLibrary(movie.id));
    } else {
      dispatch(addToLibrary(movie));
    }
  };

  return (
    <button
      onClick={handleClick}
      className={currentTheme === 'dark'
        ? styles.libraryBtn
        : isOnMovieDetailsPage
          ? styles.libraryBtnLight2
          : styles.libraryBtnLight}
    >
      { isInLibrary ? t.removeLibraryBtn : t.addLibraryBtn }
    </button>
  )
}

export default LibraryButton