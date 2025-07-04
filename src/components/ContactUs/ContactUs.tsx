import { useAppSelector } from '../../store/hooks/hooks'
import { translations } from '../../translations/translations'
import ContactsIcons from '../ContactsIcons/ContactsIcons'
import ContactUsForm from '../Forms/ContactUsForm/ContactUsForm'
import styles from './ContactUs.module.css'


const ContactUs = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].contactUs

    return (
        <section>
            <div className={styles.contactUsContainer}>
                <div className={styles.getInTouchDiv}>
                    <h2 className={styles.getInTouchTitle}> {t.getInTouchTitle} </h2>
                    <p className={styles.getInTouchText}> {t.getInTouchText} </p>
                    <ContactsIcons/>
                </div>
                <ContactUsForm/>
            </div>
        </section>
    )
}

export default ContactUs