import { useEffect } from 'react';
import PrivacyPolicy from '../../components/PrivacyPolicy/PrivacyPolicy'
import { useAppSelector } from '../../store/hooks/hooks';
import { translations } from '../../translations/translations';
import { PageIntro } from '../../components';
import styles from './PrivacyPolicyPage.module.css'

const PrivacyPolicyPage = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].pageTitles

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <section>
            <PageIntro title={t.privacyTitle} text={t.privacyText}/>
            <div className={styles.privacyContainer}>
                <PrivacyPolicy />
            </div>
        </section>
    )
}

export default PrivacyPolicyPage