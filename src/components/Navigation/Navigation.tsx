import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { NavLink, useNavigate } from 'react-router-dom'
import { translations } from '../../translations/translations'
import { toggleTheme } from '../../store/slices'
import logoForDark from '../../assets/images/onair-logo.png'
import logoForLight from '../../assets/images/onair-logo-light.png'
import SelectLanguage from '../SelectLanguage/SelectLanguage'
import LightModeIcon from '@mui/icons-material/LightMode';
import styles from './Navigation.module.css'
import MorePages from '../MorePages/MorePages'

const Navigation = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { page: moviesPage } = useAppSelector((state) => state.moviesData)
    const { page: actorsPage } = useAppSelector((state) => state.actorsData)
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const { mode } = useAppSelector((state) => state.theme)
    const t = translations[selectedLanguage].navigation

    const scrollToTopPage = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const toggle = () => {
        dispatch(toggleTheme())
    };

    return (
        <nav className={styles.navigation}>
            <div className={styles.navContainer}>
                <div className={styles.logoDiv} onClick={() => {
                    scrollToTopPage()
                    navigate('/')
                }}>
                    <img src={mode === 'dark' ? logoForDark : logoForLight} className={styles.logo} />
                </div>

                <div className={styles.navMenu}>
                    <NavLink to={`/`} onClick={scrollToTopPage}>{t.home}</NavLink>
                    <NavLink to={`/Movies/page/${moviesPage}`} onClick={scrollToTopPage}>{t.movies}</NavLink>
                    <NavLink to={`TV`}>{t.tv}</NavLink>
                    <NavLink to={`/Actors/page/${actorsPage}`} onClick={scrollToTopPage}>{t.actors}</NavLink>
                    <NavLink to={`/Library`} onClick={scrollToTopPage}>{t.library}</NavLink>
                    <MorePages/>
                </div>

                <div className={styles.navButtonsDiv}>
                    <SelectLanguage />
                    <button className={styles.themeBtn} onClick={toggle}>
                        <LightModeIcon
                            sx={{
                                color: mode === 'dark' ? 'white' : 'black',
                                fontSize: '20px',
                                transition: '.3s',
                                '&:hover': {
                                    color: 'var(--buttons-color)',
                                }
                            }} />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation