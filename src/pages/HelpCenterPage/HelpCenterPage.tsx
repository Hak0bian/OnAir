import { useEffect } from 'react'
import { useAppSelector } from '../../store/hooks/hooks'
import { translations } from '../../translations/translations'
import HelpCenter from '../../components/HelpCenter/HelpCenter'
import '../../components/global.css'

const HelpCenterPage = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].pageTitles

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])
    
    return (
        <section>
            <div className='sectionHeader'>
                <h2 className='sectionTitle'>{t.help}</h2>
            </div>
            <HelpCenter/>
        </section>
    )
}

export default HelpCenterPage