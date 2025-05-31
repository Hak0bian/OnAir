import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { clearActorsResults, clearMovieResults } from "../../../store/slices";
import { ISearchPropsType } from "../../componentsTypes/propsTypes";
import GradeIcon from '@mui/icons-material/Grade';
import styles from './SearchedActorsList.module.css'


const SearchedActorsList = ({ showResults, inputValue, setInputValue }: ISearchPropsType) => {
    const { searchedActors } = useAppSelector((state) => state.searchedActorsData);
    const dispatch = useAppDispatch()

    const handleClick = () => {
        setInputValue('');
        dispatch(clearMovieResults())
        dispatch(clearActorsResults())
    }

    return (
        <div className={showResults ? styles.hideDiv : ''}>
            {searchedActors.length > 0 && (
                <ul className={styles.resultList}>
                    {searchedActors?.map((actor, ind) => (
                        <NavLink to={`/Actors/actor/${actor?.id}`} key={ind} onClick={handleClick} >
                            <li key={actor?.id} className={styles.actorListItem}>
                                <img src={`https://image.tmdb.org/t/p/w200${actor?.profile_path}`} />
                                <div>
                                    <p>{actor?.name}</p>
                                    <p className={styles.rating}>
                                        <GradeIcon sx={{ fontSize: '16px', color: '#E13C52' }} />
                                        {actor?.popularity.toFixed(1)}
                                    </p>
                                    <p className={styles.department}>{actor?.known_for_department}</p>
                                </div>
                            </li>
                        </NavLink>
                    ))}
                    <li className={styles.seeResults}>
                        <NavLink to={`/Search-Results?query=${encodeURIComponent(inputValue)}`} >See all results</NavLink>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default SearchedActorsList