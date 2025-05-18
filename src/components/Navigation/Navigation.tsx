import { useAppSelector } from '../../store/hooks/hooks'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import darkMode from '../../assets/images/dark-mode.png'
import lightMode from '../../assets/images/light-mode.png'
import SelectLanguage from '../SelectLanguage/SelectLanguage'
import styles from './Navigation.module.css'

const Navigation = () => {
    const { page: moviesPage } = useAppSelector((state) => state.moviesData)
    const { page: actorsPage } = useAppSelector((state) => state.actorsData)
    const [ theme, setTheme ] = useState<boolean>(false)

    const scrollToTopPage = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const toggleTheme = () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        currentTheme === 'dark' ? setTheme(true) : setTheme(false)
    };
    
    return (
        <nav className={styles.navigation}>
            <div className={styles.navContainer}>
                <NavLink to='/' onClick={scrollToTopPage}>
                    <div className={styles.logoDiv}>
                        <img src={logo} alt="Logo" className={styles.logo} />
                        <span className={styles.pageName}>Cinemania</span>
                    </div>
                </NavLink>

                <div className={styles.navMenu}>
                    <NavLink to={`/`} onClick={scrollToTopPage}>HOME</NavLink>
                    <NavLink to={`/Movies/page/${moviesPage}`} onClick={scrollToTopPage}>MOVIES</NavLink>
                    <NavLink to={`/Actors/page/${actorsPage}`} onClick={scrollToTopPage}>ACTORS</NavLink>
                    <NavLink to={`/Library`} onClick={scrollToTopPage}>MY LIBRARY</NavLink>
                </div>

                <div className={styles.navButtonsDiv}>
                    <SelectLanguage />
                    <button onClick={toggleTheme} className={styles.themeBtn}>
                        <img src={theme ? lightMode : darkMode} alt="Dark mode icon" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation