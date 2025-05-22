
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { changeLanguages } from '../../store/slices'
import styles from './SelectLanguage.module.css'

const SelectLanguage = () => {
    const dispatch = useAppDispatch()
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)

    const handleChange = (leng: string) => {
        dispatch(changeLanguages(leng))
        localStorage.setItem('language', leng);
    }

    return (
        <div>
            <select 
                value={selectedLanguage}
                onChange={(e) => handleChange(e.target.value)}
                className={styles.langSelect}
            >
                <option value="en" >English</option>
                <option value="ru" >Russin</option>
            </select>
        </div>
    )
}

export default SelectLanguage