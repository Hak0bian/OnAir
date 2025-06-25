import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/hooks';
import { translations } from '../../translations/translations';
import { MdSunny } from 'react-icons/md';
import { LuCircleUserRound } from 'react-icons/lu';
import { IBurgerMenuPropsType } from '../componentsTypes/propsTypes';
import SelectLanguage from '../SelectLanguage/SelectLanguage';
import styles from './BurgerMenu.module.css'
import { Search } from '..';

const BurgerMenu = ({ toggle, openSignUpForm }: IBurgerMenuPropsType) => {
    const { page: moviesPage } = useAppSelector((state) => state.moviesData)
    const { page: actorsPage } = useAppSelector((state) => state.actorsData)
    const { page: tvPage } = useAppSelector((state) => state.tvSeriesData)
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].navigation
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(false)
    }

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [open]);

    return (
        <div className={styles.burgerMenu}>
            {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
            <div className={styles.burgerIcon} onClick={() => setOpen(!open)}>
                <span className={open ? styles.open : ''}></span>
                <span className={open ? styles.open : ''}></span>
                <span className={open ? styles.open : ''}></span>
            </div>

            <ul className={`${styles.menu} ${open ? styles.show : ''}`}>
                <li className={styles.searchItem}><Search /></li>
                <li onClick={handleClick}><NavLink to={`/`}>{t.home}</NavLink></li>
                <li onClick={handleClick}><NavLink to={`/Movies/page/${moviesPage}`}>{t.movies}</NavLink></li>
                <li onClick={handleClick}><NavLink to={`/TV/page/${tvPage}`}>{t.tv}</NavLink></li>
                <li onClick={handleClick}><NavLink to={`/Actors/page/${actorsPage}`}>{t.actors}</NavLink></li>
                <li onClick={handleClick}><NavLink to={`/Library`}>{t.morePages.library}</NavLink></li>
                <li onClick={handleClick}><NavLink to={`/Features`}>{t.morePages.features}</NavLink></li>
                <li onClick={handleClick}><NavLink to={`/Pricing-Plans`}>{t.morePages.plans}</NavLink></li>
                <li onClick={handleClick}><NavLink to={`/Help-Center`}>{t.morePages.help}</NavLink></li>
                <li onClick={handleClick}><NavLink to={`/Contact-Us`}>{t.morePages.contact}</NavLink></li>
                <li onClick={handleClick}><NavLink to={`/Privacy-Policy`}>{t.morePages.privacy}</NavLink></li>
                <li>
                    <div className={styles.navButtonsDiv}>
                        <SelectLanguage />
                        <MdSunny className={styles.themeBtn} onClick={toggle} />
                        <LuCircleUserRound onClick={openSignUpForm} className={styles.profileBtn} />
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default BurgerMenu