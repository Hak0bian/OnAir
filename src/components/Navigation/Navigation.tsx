import { useAppSelector } from '../../store/hooks/hooks'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import darkMode from '../../assets/images/dark-mode.png'
import styles from './Navigation.module.css'
import SelectLanguage from '../SelectLanguage/SelectLanguage'

const Navigation = () => {
    const { page: moviesPage } = useAppSelector((state) => state.moviesData)
    const { page: actorsPage } = useAppSelector((state) => state.actorsData)
    const scrollToTopPage = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <nav className={styles.navigation}>
            <div className={styles.navContainer}>
                <NavLink to='/' onClick={scrollToTopPage}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </NavLink>

                <div className={styles.navMenu}>
                    <NavLink to={`/`} onClick={scrollToTopPage}>HOME</NavLink>
                    <NavLink to={`/Movies/page/${moviesPage}`} onClick={scrollToTopPage}>MOVIES</NavLink>
                    <NavLink to={`/Actors/page/${actorsPage}`} onClick={scrollToTopPage}>ACTORS</NavLink>
                    <NavLink to={`/Library`} onClick={scrollToTopPage}>MY LIBRARY</NavLink>
                </div>

                <div className={styles.navButtonsDiv}>
                    <SelectLanguage/>
                    <img src={darkMode} alt="Dark mode icon" />
                </div>
            </div>
        </nav>
    )
}

export default Navigation