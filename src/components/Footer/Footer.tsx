import { useAppSelector } from '../../store/hooks/hooks'
import { translations } from '../../translations/translations';
import styles from './Footer.module.css'

const Footer = () => {
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)
  const t = translations[selectedLanguage].footer;

  return (
    <footer>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>{t.line1}</p>
        <p className={styles.footerText}>{t.line2}</p>
      </div>
    </footer>
  )
}

export default Footer