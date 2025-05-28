import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react";
import { clearResults } from "../../../store/slices";
import { ISearchPropsType } from "../../componentsTypes/propsTypes";
import GradeIcon from '@mui/icons-material/Grade';
import styles from './SearchedMoviesList.module.css'


const SearchedMoviesList = ({ inputValue, setInputValue }: ISearchPropsType) => {
    const dispatch = useAppDispatch();
    const { searchedMovies } = useAppSelector((state) => state.searchedMoviesData);
    const [notFound, setNotFound] = useState<boolean>(false)

    const handleCleareResults = () => {
        setInputValue("");
        dispatch(clearResults());
    }

    useEffect(() => {
        setNotFound(false);
        const delayNotFound = setTimeout(() => {
            if (inputValue.trim() && searchedMovies.length === 0) {
                setNotFound(true);
            }
        }, 1000);
        return () => clearTimeout(delayNotFound);
    }, [inputValue, searchedMovies]);

    return (
        <div>
            {searchedMovies.length > 0 && (
                <ul className={styles.resultList}>
                    {searchedMovies?.map((movie, ind) => (
                        <NavLink to={`/Movies/movie/${movie?.id}`} key={ind} onClick={handleCleareResults}>
                            <li key={movie.id} className={styles.movieListItem}>
                                <img src={`https://image.tmdb.org/t/p/w400${movie?.backdrop_path}`} />
                                <div>
                                    <p>{movie?.title}</p>
                                    <p className={styles.rating}>
                                        <GradeIcon sx={{ fontSize: '16px', color: '#E13C52' }} />
                                        {movie?.vote_average.toFixed(1)}
                                    </p>
                                    <span className={styles.date}>{movie?.release_date}</span>
                                </div>
                            </li>
                            <li>
                            </li>
                        </NavLink>
                    ))}
                </ul>
            )}
            {notFound && <p className={styles.notFound}>Movie not found...</p>}
        </div>
    )
}

export default SearchedMoviesList