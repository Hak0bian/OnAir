import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { clearActorsResults, clearMovieResults, clearTvSeriesResults } from "../../../store/slices";
import { ISearchPropsType } from "../../componentsTypes/propsTypes";
import { translations } from '../../../translations/translations';
import GradeIcon from '@mui/icons-material/Grade';
import styles from './SearchedMoviesList.module.css'


const SearchedMoviesList = ({ showResults, inputValue, setInputValue }: ISearchPropsType) => {
    const { searchedMovies } = useAppSelector((state) => state.searchedMoviesData);
    const { selectedLanguage } = useAppSelector((state) => state.languagesData);
    const t = translations[selectedLanguage].search
    const dispatch = useAppDispatch()

    const handleClick = () => {
        setInputValue('');
        dispatch(clearMovieResults())
        dispatch(clearActorsResults())
        dispatch(clearTvSeriesResults())
    }

    return (
        <div className={showResults ? styles.hideDiv : ''}>
            {searchedMovies.length > 0 && (
                <ul className={styles.resultList}>
                    <li className={styles.listTitle}>{t.movies}</li>
                    {searchedMovies?.map((movie, ind) => (
                        <NavLink to={`/Movies/movie/${movie?.id}`} key={ind} onClick={handleClick}>
                            <li key={movie.id} className={styles.movieListItem}>
                                <img src={`https://image.tmdb.org/t/p/w200${movie?.backdrop_path}`} />
                                <div>
                                    <p>{movie?.title}</p>
                                    <p className={styles.rating}>
                                        <GradeIcon className={styles.starIcon} />
                                        {movie?.vote_average.toFixed(1)}
                                    </p>
                                    <span className={styles.date}>{movie?.release_date}</span>
                                </div>
                            </li>
                        </NavLink>
                    ))}
                    <li className={styles.seeResults}>
                        <NavLink to={`/Search-Results?query=${encodeURIComponent(inputValue)}`}>{t.seeResults}</NavLink>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default SearchedMoviesList