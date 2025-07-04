import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { changeLanguages, setOpenBurger } from '../../store/slices'
import { GrLanguage } from "react-icons/gr";
import styles from './SelectLanguage.module.css'
import { translations } from '../../translations/translations';


const SelectLanguage = () => {
    const dispatch = useAppDispatch()
    const ulRef = useRef<HTMLUListElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].navigation.language

    const handleChange = (leng: string) => {
        dispatch(changeLanguages(leng))
        dispatch(setOpenBurger(false))
        localStorage.setItem('language', leng)

        if (ulRef.current) {
            ulRef.current.classList.remove(styles.show);
        }
    }

    const toggleDropdown = () => {
        if (ulRef.current) {
            ulRef.current.classList.toggle(styles.show);
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if ( wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                ulRef.current?.classList.remove(styles.show);
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => { 
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    
    return (
        <div className={styles.customSelect} ref={wrapperRef}>
            <GrLanguage className={styles.langBtn} onClick={toggleDropdown} />
            <div>
                <ul ref={ulRef} className={styles.languageList}>
                    <li onClick={() => handleChange("en")}>{t.eng}</li>
                    <li onClick={() => handleChange("ru")}>{t.rus}</li>
                </ul>
            </div>
        </div>
    )
}

export default SelectLanguage