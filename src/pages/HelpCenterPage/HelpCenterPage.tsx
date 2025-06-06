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
                <div className='headerDiv'>
                    <h2 className='sectionTitle'>{t.helpTitle}</h2>
                    <p className='sectionText'>{t.helpText}</p>
                </div>
            </div>
            <HelpCenter/>
        </section>
    )
}

export default HelpCenterPage