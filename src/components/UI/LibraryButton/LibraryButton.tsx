import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { addToLibrary, removeFromLibrary } from '../../../store/slices';
import { IMoviesType } from '../../../types';
import styles from './LibraryButton.module.css'

const LibraryButton = ({ movie }: { movie: IMoviesType }) => {
  const dispatch = useAppDispatch();
  const { library } = useAppSelector(state => state.libraryData);
  const isInLibrary = library.some(m => m.id === movie.id);
  const currentTheme = document.body.getAttribute('data-theme');

  const location = useLocation();
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
      {isInLibrary ? "Remove from library" : "Add to my library"}
    </button>
  )
}

export default LibraryButton