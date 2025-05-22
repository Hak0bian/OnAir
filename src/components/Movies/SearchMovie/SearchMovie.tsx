import { useState, useEffect } from 'react'
import { searchMovieThunk, clearResults } from '../../../store/slices'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks'
import { translations } from '../../../translations/translations'
import SearchedMoviesList from '../SearchedMoviesList/SearchedMoviesList'
import styles from './SearchMovie.module.css'

const SearchMovie = () => {
    const dispatch = useAppDispatch();
    const { selectedLanguage } = useAppSelector((state) => state.languagesData);
    const t = translations[selectedLanguage].movies
    const [inputValue, setInputValue] = useState<string>("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            if (inputValue.trim()) {
                dispatch(searchMovieThunk(inputValue));
            } else {
                dispatch(clearResults())
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
            <SearchedMoviesList inputValue={inputValue} setInputValue={setInputValue} />
        </div>
    )
}

export default SearchMovie