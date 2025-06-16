import { showForgotPassForm, showSelectPlanForm, showSignInForm, showSignUpForm 
  } from '../../store/slices/OpenCloseFormsSlice/OpenCloseFormsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { translations } from '../../translations/translations';
import { NavLink } from 'react-router-dom';
import logoOnDark from '../../assets/images/onair-logo-white.png'
import logoOnLight  from "../../assets/images/onair-logo-light.png";
import styles from './Footer.module.css'
import ContactsIcons from '../ContactsIcons/ContactsIcons';

const Footer = () => {
  const dispatch = useAppDispatch()
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)
  const t = translations[selectedLanguage].footer;
  const { mode } = useAppSelector((state) => state.theme)

  const scrollToTopPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const openSignUpForm = () => {
    dispatch(showSignUpForm(true))
  }

  const openSignInForm = () => {
    dispatch(showSignInForm(true))
  }

  const openforgotPassForm = () => {
    dispatch(showForgotPassForm(true))
  }

  const openSelectPlanForm = () => {
    dispatch(showSelectPlanForm(true))
  }

  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerTopDiv}>
          <div className={styles.logoDiv}>
            <NavLink to={`/`} onClick={scrollToTopPage}>
              <img src={mode === 'dark' ? logoOnDark : logoOnLight} />
            </NavLink>
            <p className={styles.footerText}>{t.text1}</p>
          </div>

          <div className={styles.footerListDiv}>
            <h3>{t.browse}</h3>
            <ul>
              <li><NavLink to={`/`} onClick={scrollToTopPage}>{t.home}</NavLink></li>
              <li><NavLink to={`/Movies/page/1`}>{t.movies}</NavLink></li>
              <li><NavLink to={`/TV/page/1`}>{t.tv}</NavLink></li>
              <li><NavLink to={`/Actors/page/1`}>{t.actors}</NavLink></li>
              <li><NavLink to={`/Library`} onClick={scrollToTopPage}>{t.library}</NavLink></li>
            </ul>
          </div>

          <div className={styles.footerListDiv}>
            <h3>{t.resources}</h3>
            <ul>
              <li><NavLink to={`/Help-Center`}>{t.help}</NavLink></li>
              <li><NavLink to={`/Features`}>{t.features}</NavLink></li>
              <li><NavLink to={`/Pricing-Plans`}>{t.plans}</NavLink></li>
              <li><NavLink to={`/Contact-Us`}>{t.contact}</NavLink></li>
              <li><NavLink to={`/Privacy-Policy`}>{t.privacy}</NavLink></li>
            </ul>
          </div>

          <div className={styles.footerListDiv}>
            <h3>{t.profile}</h3>
            <ul>
              <li><button className={styles.openFormBtn} onClick={openSignUpForm}>{t.signUp}</button></li>
              <li><button className={styles.openFormBtn} onClick={openSignInForm}>{t.signIn}</button></li>
              <li><button className={styles.openFormBtn} onClick={openforgotPassForm}>{t.forgot}</button></li>
              <li><button className={styles.openFormBtn} onClick={openSelectPlanForm}>{t.choose}</button></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottomDiv}>
          <p className={styles.text2}>{t.text2}</p>
          <ContactsIcons />
        </div>
      </div>
    </footer>
  )
}

export default Footer