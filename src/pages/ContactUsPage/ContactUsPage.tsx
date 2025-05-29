import { useEffect } from 'react'
import { ContactUs } from '../../components';
import { useAppSelector } from '../../store/hooks/hooks';
import { translations } from '../../translations/translations';
import '../../components/global.css'

const ContactUsPage = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].pageTitles

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <section>
            <div className='sectionHeader'>
                <h2 className='sectionTitle'>{t.contacts}</h2>
            </div>
            <ContactUs/>
        </section>
    )
}

export default ContactUsPage