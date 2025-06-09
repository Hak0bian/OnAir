import { useState, useEffect } from 'react'
import { searchMovieThunk, searchActorThunk, clearMovieResults, clearActorsResults, searchTvSeriesThunk, clearTvSeriesResults } from '../../store/slices'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { SearchedMoviesList, SearchedSeriesList, SearchedActorsList } from '../index'
import { translations } from '../../translations/translations'
import { useLocation } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import styles from './Search.module.css'


const SearchMovie = () => {
    const dispatch = useAppDispatch();
    const { selectedLanguage } = useAppSelector((state) => state.languagesData);
    const { movieNotFound, movieIsLoading } = useAppSelector((state) => state.searchedMoviesData);
    const { seriaNotFound, seriaIsLoading } = useAppSelector((state) => state.searchSeriesData);
    const { actorNotFound, actorIsLoading } = useAppSelector((state) => state.searchedActorsData);
    const t = translations[selectedLanguage].search
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
                dispatch(searchTvSeriesThunk(inputValue))
            } 
            else {
                dispatch(clearMovieResults())
                dispatch(clearActorsResults())
                dispatch(clearTvSeriesResults())
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
                    !movieIsLoading && movieNotFound && inputValue.trim()
                        ? <p className={styles.notFound}>{t.noFoundMovies} “{inputValue}”</p>
                        : 
                        <SearchedMoviesList
                            showResults={showResults}
                            inputValue={inputValue} 
                            setInputValue={setInputValue} />
                }
                {
                    !seriaIsLoading && seriaNotFound && inputValue.trim()
                        ? <p className={styles.notFound}>{t.noFoundSeries} “{inputValue}”</p>
                        : <SearchedSeriesList
                            showResults={showResults}
                            inputValue={inputValue} 
                            setInputValue={setInputValue} />
                }
                {
                    !actorIsLoading && actorNotFound && inputValue.trim()
                        ? <p className={styles.notFound}>{t.noFoundActors} “{inputValue}”</p>
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