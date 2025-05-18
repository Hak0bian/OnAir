import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { addToLibrary, removeFromLibrary } from '../../../store/slices';
import { IMoviesType } from '../../../types';
import styles from './LibraryButton.module.css'

const LibraryButton = ({ movie }: { movie: IMoviesType }) => {
  const dispatch = useAppDispatch();
  const { library } = useAppSelector(state => state.libraryData);
  const isInLibrary = library.some(m => m.id === movie.id);

  const handleClick = () => {
    if (isInLibrary) {
      dispatch(removeFromLibrary(movie.id));
    } else {
      dispatch(addToLibrary(movie));
    }
  };

  return (
    <div className={styles.btnDiv}>
      <button className={styles.libraryBtn} onClick={handleClick}>
        {isInLibrary ? "Remove from library" : "Add to my library"}
      </button>
    </div>
  )
}

export default LibraryButton