import { HowItWorks, SelectPlan } from '../../components'
import { useAppSelector } from '../../store/hooks/hooks'
import { translations } from '../../translations/translations'
import '../../components/global.css'
import { useEffect } from 'react'

const PricingPlansPage = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].pageTitles

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <section>
            <div className='sectionHeader'>
                <h2 className='sectionTitle'>{t.plans}</h2>
            </div>
            <div style={{ paddingTop: '80px' }}>
                <SelectPlan />
                <HowItWorks />
            </div>
        </section>
    )
}

export default PricingPlansPage