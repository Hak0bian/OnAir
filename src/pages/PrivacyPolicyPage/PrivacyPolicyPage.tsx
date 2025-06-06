import { useEffect } from 'react';
import PrivacyPolicy from '../../components/PrivacyPolicy/PrivacyPolicy'
import { useAppSelector } from '../../store/hooks/hooks';
import { translations } from '../../translations/translations';
import '../../components/global.css'

const PrivacyPolicyPage = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].pageTitles

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <section>
            <div className='sectionHeader'>
                <div className='headerDiv'>
                    <h2 className='sectionTitle'>{t.privacyTitle}</h2>
                    <p className='sectionText'>{t.privacyText}</p>
                </div>
            </div>
            <PrivacyPolicy />
        </section>
    )
}

export default PrivacyPolicyPage