
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { changeLanguages, languagesThunk } from '../../store/slices'
import styles from './SelectLanguage.module.css'

const SelectLanguage = () => {
    const dispatch = useAppDispatch()
    const { languages, selectedLanguage } = useAppSelector((state) => state.languagesData)

    const handleChange = (leng: string) => {
        dispatch(changeLanguages(leng))
    }
    
    useEffect(() => {
        dispatch(languagesThunk())
    }, [selectedLanguage])

    return (
        <div>
            <select 
                value={selectedLanguage}
                onChange={(e) => handleChange(e.target.value)}
                className={styles.langSelect}
            >
                {languages
                    .slice()
                    .sort((a, b) => a.english_name.localeCompare(b.english_name))
                    .map((leng) => (
                    <option key={leng.iso_639_1} value={leng.iso_639_1} > {leng.english_name} </option>
                ))}
            </select>
        </div>
    )
}

export default SelectLanguage