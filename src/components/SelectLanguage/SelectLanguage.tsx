
import { useRef } from 'react'
import { useAppDispatch } from '../../store/hooks/hooks'
import { changeLanguages } from '../../store/slices'
import LanguageIcon from '@mui/icons-material/Language';
import styles from './SelectLanguage.module.css'

const SelectLanguage = () => {
    const dispatch = useAppDispatch()
    const ulRef = useRef<HTMLUListElement>(null);

    const handleChange = (leng: string) => {
        dispatch(changeLanguages(leng))
        localStorage.setItem('language', leng);
    }

    const toggleDropdown = () => {
        if (ulRef.current) {
            ulRef.current.classList.toggle(styles.show);
        }
    };

    return (
        <div className={styles.customSelect}>
            <button className={styles.selected} onClick={toggleDropdown}>
                <LanguageIcon
                    sx={{
                        fontSize: '29px',
                        borderRadius: '50%',
                        padding: '4px',
                        transition: '.3s',
                        '&:hover': {
                            color: '#ffffff',
                            backgroundColor: '#E13C52',
                        }
                    }} />
            </button>
            <div>
                <ul ref={ulRef} className={styles.languageList}>
                    <li onClick={() => handleChange("en")}>English</li>
                    <li onClick={() => handleChange("ru")}>Russian</li>
                </ul>
            </div>
        </div>
    )
}

export default SelectLanguage