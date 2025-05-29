import { useAppSelector } from '../../store/hooks/hooks'
import { translations } from '../../translations/translations'
import styles from './HowItWorks.module.css'

const HowItWorks = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].howItWorks

    return (
        <section className={styles.howSection}>
            <h2 className={styles.howTitle}>{t.mainTitle}</h2>
            <div className={styles.howContainer}>
                <div className={styles.howBox}>
                    <span>01</span>
                    <h3>{t.title_01}</h3>
                    <p>{t.text_01}</p>
                </div>
                <div className={styles.howBox}>
                    <span>02</span>
                    <h3>{t.title_02}</h3>
                    <p>{t.text_02}</p>
                </div>
                <div className={styles.howBox}>
                    <span>03</span>
                    <h3>{t.title_03}</h3>
                    <p>{t.text_03}</p>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks