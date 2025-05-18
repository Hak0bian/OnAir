import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react";
import { clearResults } from "../../../store/slices";
import { ISearchedMoviesPropsType } from "../../componentsTypes/propsTypes";
import Rating from "../../UI/Rating/Rating";
import styles from './SearchedMoviesList.module.css'


const SearchedMoviesList = ({ inputValue, setInputValue }: ISearchedMoviesPropsType) => {
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
                                    <span className={styles.date}>{movie?.release_date}</span>
                                    <Rating value={movie?.vote_average} type="vote"/>
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