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
                <div className='headerDiv'>
                    <h2 className='sectionTitle'>{t.contactsTitle}</h2>
                    <p className='sectionText'>{t.contactsText}</p>
                </div>
            </div>
            <div style={{padding: '40px 0 20px'}}>
                <ContactUs/>
            </div>
        </section>
    )
}

export default ContactUsPage