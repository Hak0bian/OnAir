import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { changeMoviesPageNumber } from '../../store/slices'
import { translations } from '../../translations/translations'
import MainButton from '../UI/MainButton/MainButton'
import styles from './Header.module.css'


const Header = () => {
    const dispatch = useAppDispatch()
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].header

    const handleGetStarted = () => {
        dispatch(changeMoviesPageNumber(1))
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerTitleDiv}>
                    <h2 className={styles.headerTitle}> {t.headerTitle} </h2>
                    <p className={styles.headerText}> {t.headerText} </p>
                    <NavLink to='/Movies/page/1' onClick={handleGetStarted}>
                        <MainButton text={t.headerBtn} />
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header