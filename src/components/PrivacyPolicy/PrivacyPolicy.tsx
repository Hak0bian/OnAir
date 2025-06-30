import { useAppSelector } from '../../store/hooks/hooks'
import { translations } from '../../translations/translations'
import styles from './PrivacyPolicy.module.css'

const PrivacyPolicy = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].privacy

    return (
        <div className={styles.privacyContainer}>
            <p className={styles.mainText}>{t.mainText}</p>

            <div className={styles.privacyDiv}>
                <h3>{t.title1}</h3>
                <ul>
                    <li>{t.item1_1}</li>
                    <li>{t.item1_2}</li>
                    <li>{t.item1_3}</li>
                </ul>
            </div>

            <div className={styles.privacyDiv}>
                <h3>{t.title2}</h3>
                <ul>
                    <li>{t.item2_1}</li>
                    <li>{t.item2_2}</li>
                    <li>{t.item2_3}</li>
                    <li>{t.item2_4}</li>
                    <li>{t.item2_5}</li>
                    <li>{t.item2_6}</li>
                </ul>
            </div>

            <div className={styles.privacyDiv}>
                <h3>{t.title3}</h3>
                <ul>
                    <li>{t.item3_1}</li>
                    <li>{t.item3_2}</li>
                    <li>{t.item3_3}</li>
                </ul>
            </div>

            <div className={styles.privacyDiv}>
                <h3>{t.title4}</h3>
                <ul>
                    <li>{t.item4_1}</li>
                    <li>{t.item4_2}</li>
                    <li>{t.item4_3}</li>
                    <li>{t.item4_4}</li>
                </ul>
            </div>

            <div className={styles.privacyDiv}>
                <h3>{t.title5}</h3>
                <ul>
                    <li>{t.item5_1}</li>
                    <li>{t.item5_2}</li>
                </ul>
            </div>

            <div className={styles.privacyDiv}>
                <h3>{t.title6}</h3>
                <ul>
                    <li>{t.item6_1}</li>
                    <li>{t.item6_2}</li>
                </ul>
            </div>

            <div className={styles.privacyDiv}>
                <h3>{t.title7}</h3>
                <ul>
                    <li>{t.item7_1}</li>
                    <li>{t.item7_2}</li>
                    <li>{t.item7_3}</li>
                </ul>
            </div>

            <div className={styles.privacyDiv}>
                <h3>{t.title8}</h3>
                <ul>
                    <li>{t.item8_1}</li>
                    <li>{t.item8_2}</li>
                    <li>{t.item8_3}</li>
                </ul>
            </div>
        </div>
    )
}

export default PrivacyPolicy