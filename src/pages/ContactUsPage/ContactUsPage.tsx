import { useEffect } from 'react'
import { ContactUs, PageIntro } from '../../components';
import { useAppSelector } from '../../store/hooks/hooks';
import { translations } from '../../translations/translations';

const ContactUsPage = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].pageTitles

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <section>
            <PageIntro title={t.contactsTitle} text={t.contactsText} />
            <div style={{paddingTop: '20px'}}>
                <ContactUs/>
            </div>
        </section>
    )
}

export default ContactUsPage