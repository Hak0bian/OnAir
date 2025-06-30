import { useEffect } from 'react';
import { Features, PageIntro } from '../../components'
import { useAppSelector } from '../../store/hooks/hooks';
import { translations } from '../../translations/translations';
import styles from './FeaturesPage.module.css'

const FeaturesPage = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].pageTitles

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <section>
            <PageIntro title={t.featuresTitle} text={t.featuresText}/>
            <div className={styles.featuresContainer}>
                <Features />
            </div>
        </section>
    )
}

export default FeaturesPage