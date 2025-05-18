import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { changeSelectedGenreId, changeMoviesPageNumber } from '../../../store/slices';
import styles from './SelectGenre.module.css'

const SelectGenre = () => {
    const { genres, selectedGenreId } = useAppSelector((state) => state.genresData);
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const handleChange = (id: number) => {
        dispatch(changeSelectedGenreId(id));
        dispatch(changeMoviesPageNumber(1));
        navigate('/Movies/page/1');
    };

    return (
        <div>
            <select
                value={selectedGenreId}
                onChange={(e) => handleChange(Number(e.target.value))}
                className={styles.select}
            >
                <option value={0} disabled hidden className={styles.option}>Genre</option>
                <option value={1} className={styles.option}>All</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id} className={styles.option}> {genre.name} </option>
                ))}
            </select>
        </div>
    )
}

export default SelectGenre