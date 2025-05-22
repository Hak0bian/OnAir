import { useAppSelector } from '../../store/hooks/hooks'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { translations } from '../../translations/translations'
import logo from '../../assets/images/onair-logo.png'
import logoForLight from '../../assets/images/onair-logo-light.png'
import SelectLanguage from '../SelectLanguage/SelectLanguage'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styles from './Navigation.module.css'

const Navigation = () => {
    const { page: moviesPage } = useAppSelector((state) => state.moviesData)
    const { page: actorsPage } = useAppSelector((state) => state.actorsData)
    const { selectedLanguage} = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].navigation
    const [theme, setTheme] = useState<boolean>(false)
    const navigate = useNavigate()

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
                <div className={styles.logoDiv} onClick={() => {
                    scrollToTopPage()
                    navigate('/')
                }}>
                    <img src={theme ? logoForLight : logo} className={styles.logo} />
                </div>

                <div className={styles.navMenu}>
                    <NavLink to={`/`} onClick={scrollToTopPage}>{t.home}</NavLink>
                    <NavLink to={`/Movies/page/${moviesPage}`} onClick={scrollToTopPage}>{t.movies}</NavLink>
                    <NavLink to={`/Actors/page/${actorsPage}`} onClick={scrollToTopPage}>{t.actors}</NavLink>
                    <NavLink to={`/Library`} onClick={scrollToTopPage}>{t.library}</NavLink>
                </div>

                <div className={styles.navButtonsDiv}>
                    <SelectLanguage />

                    <button className={styles.themeBtn} onClick={toggleTheme}>
                        <DarkModeIcon 
                            sx={{
                                color: theme ? 'black' : 'white',
                                backgroundColor: theme ? 'white' : '#E13C52', 
                                fontSize: '24px', 
                                borderRadius: '50%',
                                padding: '4px'
                            }}
                        />
                        <LightModeIcon 
                            sx={{
                                color: theme ? 'black' : 'white',
                                backgroundColor: theme ? '#E13C52' : '#111111', 
                                fontSize: '24px',
                                borderRadius: '50%',
                                padding: '4px'
                            }}/>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation