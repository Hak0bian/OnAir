import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { addSeriaToLibrary, removeSeriaFromLibrary } from '../../../store/slices';
import { translations } from '../../../translations/translations';
import { ITvDetailsResponse } from '../../../types';
import styles from './LibrarySeriaBtn.module.css'


const LibrarySeriaBtn = ({ seria }: { seria: ITvDetailsResponse }) => {
  const dispatch = useAppDispatch();
  const { seriesInLibrary } = useAppSelector(state => state.libraryData);
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)
  const t = translations[selectedLanguage]
  const existingSeria = seriesInLibrary.some(s => s.id === seria.id);

  const handleClick = () => {
    if (existingSeria) {
      dispatch(removeSeriaFromLibrary(seria.id));
    } else {
      dispatch(addSeriaToLibrary(seria))
    }
  };

  return (
    <button
      onClick={handleClick}
      className={styles.libraryBtn}>
      { existingSeria ? t.removeLibraryBtn : t.addLibraryBtn }
    </button>
  )
}

export default LibrarySeriaBtn