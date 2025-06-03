import { useState, useEffect } from 'react'
import { searchMovieThunk, searchActorThunk, clearMovieResults, clearActorsResults } from '../../store/slices'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { translations } from '../../translations/translations'
import { useLocation } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import SearchedMoviesList from '../Movies/SearchedMoviesList/SearchedMoviesList'
import SearchedActorsList from '../Actors/SearchedActorsList/SearchedActorsList'
import styles from './Search.module.css'


const SearchMovie = () => {
    const dispatch = useAppDispatch();
    const { selectedLanguage } = useAppSelector((state) => state.languagesData);
    const { movieNotFound, movieIsLoading } = useAppSelector((state) => state.searchedMoviesData);
    const { actorNotFound, actorIsLoading } = useAppSelector((state) => state.searchedActorsData);
    const t = translations[selectedLanguage].movies
    const [inputValue, setInputValue] = useState<string>("");
    const [showResults, setShowResults] = useState(false)
    const location = useLocation();
    const currentPage = location.pathname === '/Search-Results';

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        if(currentPage){
            setShowResults(true)
        } else {
            setShowResults(false)
        }
    }, [location.pathname])

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            if (inputValue.trim()) {
                dispatch(searchMovieThunk(inputValue))
                dispatch(searchActorThunk(inputValue))
            } 
            else {
                dispatch(clearMovieResults())
                dispatch(clearActorsResults())
            }
        }, 500);
        return () => clearTimeout(delaySearch);
    }, [inputValue]);


    return (
        <div className={styles.searchDiv}>
            <input
                type="text"
                placeholder={t.search}
                value={inputValue}
                onChange={(e) => handleSearch(e)}
                className={styles.searchInput}
            />
            <IoMdClose className={styles.resetIcon} onClick={() => setInputValue('')}/>
            <div className={styles.resultsDiv}>
                {
                    !movieIsLoading && movieNotFound && showResults
                        ? <p className={styles.notFound}>No movies found for “{inputValue}”</p>
                        : <SearchedMoviesList 
                            showResults={showResults}
                            inputValue={inputValue} 
                            setInputValue={setInputValue} />
                }
                {
                    !actorIsLoading && actorNotFound && showResults
                        ? <p className={styles.notFound}>No actors found for “{inputValue}”</p>
                        : <SearchedActorsList 
                            showResults={showResults}
                            inputValue={inputValue} 
                            setInputValue={setInputValue} />
                }
            </div>
        </div>
    )
}

export default SearchMovie