import { useEffect, useRef } from 'react'
import { useAppDispatch } from '../../store/hooks/hooks'
import { changeLanguages } from '../../store/slices'
import { GrLanguage } from "react-icons/gr";
import styles from './SelectLanguage.module.css'

const SelectLanguage = () => {
    const dispatch = useAppDispatch()
    const ulRef = useRef<HTMLUListElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleChange = (leng: string) => {
        dispatch(changeLanguages(leng))
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
                    <li onClick={() => handleChange("en")}>English</li>
                    <li onClick={() => handleChange("ru")}>Russian</li>
                </ul>
            </div>
        </div>
    )
}

export default SelectLanguage