import { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/hooks';
import { translations } from '../../translations/translations';
import styles from './MorePages.module.css'

const MorePages = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].navigation.morePages
    const ulRef = useRef<HTMLUListElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        if (ulRef.current) {
            ulRef.current.classList.toggle(styles.show);
        }
    };

    const closeDropdown = () => {
        if (ulRef.current) {
            ulRef.current.classList.remove(styles.show);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if ( wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                closeDropdown();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.customSelect} ref={wrapperRef}>
            <button className={styles.moreBtn} onClick={toggleDropdown}>{t.more}</button>
            <div>
                <ul ref={ulRef} className={styles.morePagesList}>
                    <li><NavLink to={`/Help-Center`} onClick={closeDropdown}>{t.help}</NavLink></li>
                    <li><NavLink to={`/Features`} onClick={closeDropdown}>{t.features}</NavLink></li>
                    <li><NavLink to={`/Pricing-Plans`} onClick={closeDropdown}>{t.plans}</NavLink></li>
                    <li><NavLink to={`/Contact-Us`} onClick={closeDropdown}>{t.contact}</NavLink></li>
                    <li><NavLink to={`/Privacy-Policy`} onClick={closeDropdown}>{t.privacy}</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default MorePages