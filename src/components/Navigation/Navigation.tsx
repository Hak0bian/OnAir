import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { NavLink, useNavigate } from 'react-router-dom'
import { translations } from '../../translations/translations'
import { setOpenBurger, toggleTheme } from '../../store/slices'
import { showSignUpForm } from '../../store/slices/OpenCloseFormsSlice/OpenCloseFormsSlice'
import { LuCircleUserRound } from "react-icons/lu";
import { MdSunny } from "react-icons/md";
import { BurgerMenu, Search, SelectLanguage, MorePages } from '..'
import logoForDark from '../../assets/images/onair-logo.png'
import logoForLight from '../../assets/images/onair-logo-light.png'
import styles from './Navigation.module.css'


const Navigation = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { page: moviesPage } = useAppSelector((state) => state.moviesData)
    const { page: actorsPage } = useAppSelector((state) => state.actorsData)
    const { page: tvPage } = useAppSelector((state) => state.tvSeriesData)
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].navigation
    const { mode } = useAppSelector((state) => state.theme)

    const clickOnLogo = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        dispatch(setOpenBurger(false))
    }

    const toggle = () => {
        dispatch(toggleTheme())
    };

    const openSignUpForm = () => {
        dispatch(showSignUpForm(true))
    }

    return (
        <nav className={styles.navigation}>
            <div className={styles.navContainer}>
                <div className={styles.logoDiv} 
                    onClick={() => {
                        clickOnLogo()
                        navigate('/')
                    }}>
                    <img src={mode === 'dark' ? logoForDark : logoForLight} className={styles.logo} />
                </div>

                <div className={styles.navMenu}>
                    <NavLink to={`/`}>{t.home}</NavLink>
                    <NavLink to={`/Movies/page/${moviesPage}`}>{t.movies}</NavLink>
                    <NavLink to={`/TV/page/${tvPage}`}>{t.tv}</NavLink>
                    <NavLink to={`/Actors/page/${actorsPage}`}>{t.actors}</NavLink>
                    <MorePages />
                </div>
                <div className={styles.searchandButtons}>
                    <div className={styles.searchDiv}><Search /></div>
                    <div className={styles.navButtonsDiv}>
                        <SelectLanguage />
                        <MdSunny className={styles.themeBtn} onClick={toggle} />
                        <LuCircleUserRound onClick={openSignUpForm} className={styles.profileBtn} />
                    </div>
                </div>
                <BurgerMenu toggle={toggle} openSignUpForm={openSignUpForm}/>  
            </div>
        </nav>
    )
}

export default Navigation