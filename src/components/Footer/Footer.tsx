import { useAppSelector } from '../../store/hooks/hooks'
import styles from './Footer.module.css'

const Footer = () => {
  const { selectedLanguage } = useAppSelector((state) => state.languagesData)

  return (
    <footer>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>{selectedLanguage === 'en' ? "OnAir is always waiting for you. Come back to discover new genres and stories!" : "OnAir всегда ждёт тебя. Возвращайся, чтобы открыть новые жанры и истории!"} </p>
        <p className={styles.footerText}>{selectedLanguage === 'en' ? "© 2025 | All Rights Reserved | Developed by Garik Hakobyan" : "© 2025 | Все права защищены | Разработка: Гарик Акобян"}</p>
      </div>
    </footer>
  )
}

export default Footer