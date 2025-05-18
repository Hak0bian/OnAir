import { useState, useEffect } from 'react'
import { clearActorsResults, searchActorThunk } from '../../../store/slices'
import { useAppDispatch } from '../../../store/hooks/hooks'
import styles from './SearchActor.module.css'
import SearchedActorsList from '../SearchedActorsList/SearchedActorsList'

const SearchActor = () => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState<string>("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            if (inputValue.trim()) {
                dispatch(searchActorThunk(inputValue));
            } else {
                dispatch(clearActorsResults())
            }
        }, 500);
        return () => clearTimeout(delaySearch);
    }, [inputValue]);

    return (
        <div className={styles.searchDiv}>
            <input
                type="text"
                placeholder='Search Actor'
                value={inputValue}
                onChange={(e) => handleSearch(e)}
                className={styles.searchActorInput}
            />
            <SearchedActorsList inputValue={inputValue} setInputValue={setInputValue} />
        </div>
    )
}

export default SearchActor