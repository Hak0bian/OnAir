import { Formik, Form, Field, ErrorMessage } from "formik"
import { useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import MainButton from "../../UI/MainButton/MainButton";
import styles from './ContactUsForm.module.css'
import contactValidation from "../validations/contactValidation";


const ContactUsForm = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].forms

    const handleSubmit = (_: any, { resetForm }: { resetForm: () => void }) => {
        alert("Message sent successfully");
        resetForm();
    };

    return (
        <div className={styles.contactUsFormDiv}>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                }}
                onSubmit={handleSubmit}
                validationSchema={contactValidation(selectedLanguage)}
            >
                <Form className={styles.contactUsForm}>
                    <div className={styles.labelsDiv}>
                        <label>
                            <Field name="name" placeholder={t.name} className={styles.inp} />
                            <ErrorMessage name="name" component="div" className={styles.error} />
                        </label>
                        <label>
                            <Field name="email" placeholder={t.email} className={styles.inp} />
                            <ErrorMessage name="email" component="div" className={styles.error} />
                        </label>
                    </div>
                    <label>
                        <Field name="subject" placeholder={t.subject} className={styles.inp} />
                        <ErrorMessage name="subject" component="div" className={styles.error} />
                    </label>
                    <label>
                        <Field as="textarea" name="message" placeholder={t.message} className={styles.textarea} />
                        <ErrorMessage name="message" component="div" className={styles.error} />
                    </label>
                    <label className={styles.btnLabel}>
                        <MainButton text={t.send} />
                    </label>
                </Form>
            </Formik>
        </div>
    )
}

export default ContactUsForm