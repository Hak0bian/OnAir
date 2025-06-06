import { useEffect } from 'react';
import { Features } from '../../components'
import { useAppSelector } from '../../store/hooks/hooks';
import { translations } from '../../translations/translations';
import '../../components/global.css'

const FeaturesPage = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].pageTitles

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <section>
            <div className='sectionHeader'>
                <div className='headerDiv'>
                    <h2 className='sectionTitle'>{t.featuresTitle}</h2>
                    <p className='sectionText'>{t.featuresText}</p>
                </div>
            </div>
            <div style={{ padding: '80px 0' }}>
                <Features />
            </div>
        </section>
    )
}

export default FeaturesPage