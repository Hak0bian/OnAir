import { HowItWorks, PageIntro, SelectPlan } from '../../components'
import { useAppSelector } from '../../store/hooks/hooks'
import { translations } from '../../translations/translations'
import { useEffect } from 'react'
import styles from './PricingPlansPage.module.css'

const PricingPlansPage = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].pageTitles

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <section>
            <PageIntro title={t.plansTitle} text={t.plansText}/>
            <div className={styles.pricingContainer}>
                <SelectPlan />
                <HowItWorks />
            </div>
        </section>
    )
}

export default PricingPlansPage