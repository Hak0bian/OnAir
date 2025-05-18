import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react";
import { clearActorsResults } from "../../../store/slices";
import { ISearchPropsType } from "../../componentsTypes/propsTypes";
import Rating from "../../UI/Rating/Rating";
import styles from './SearchedActorsList.module.css'


const SearchedActorsList = ({ inputValue, setInputValue }: ISearchPropsType) => {
    const dispatch = useAppDispatch();
    const { searchedActors } = useAppSelector((state) => state.searchedActorsData);
    const [notFound, setNotFound] = useState<boolean>(false)

    const handleCleareResults = () => {
        setInputValue("");
        dispatch(clearActorsResults());
    }

    useEffect(() => {
        setNotFound(false);
        const delayNotFound = setTimeout(() => {
            if (inputValue.trim() && searchedActors.length === 0) {
                setNotFound(true);
            }
        }, 1000);
        return () => clearTimeout(delayNotFound);
    }, [inputValue, searchedActors]);

    return (
        <div>
            {searchedActors.length > 0 && (
                <ul className={styles.resultList}>
                    {searchedActors?.map((actor, ind) => (
                        <NavLink to={`/Actors/actor/${actor?.id}`} key={ind} onClick={handleCleareResults}>
                            <li key={actor?.id} className={styles.actorListItem}>
                                <img src={`https://image.tmdb.org/t/p/w400${actor?.profile_path}`} />
                                <div>
                                    <p>{actor?.name}</p>
                                    <p className={styles.department}>{actor?.known_for_department}</p>
                                    <Rating value={actor?.popularity} type="popularity"/>
                                </div>
                            </li>
                            <li>
                            </li>
                        </NavLink>
                    ))}
                </ul>
            )}
            {notFound && <p className={styles.notFound}>Actor not found...</p>}
        </div>
    )
}

export default SearchedActorsList