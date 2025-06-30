import { useEffect } from 'react'
import { useAppSelector } from '../../store/hooks/hooks'
import { translations } from '../../translations/translations'
import { PageIntro } from '../../components'
import HelpCenter from '../../components/HelpCenter/HelpCenter'
import styles from './HelpCenterPage.module.css'

const HelpCenterPage = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].pageTitles

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])
    
    return (
        <section>
            <PageIntro title={t.helpTitle} text={t.helpText} />
            <div className={styles.helpContainer}>
                <HelpCenter/>
            </div>
        </section>
    )
}

export default HelpCenterPage