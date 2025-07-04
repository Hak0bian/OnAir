import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useRef } from "react";
import { useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import emailjs from "@emailjs/browser";
import MainButton from "../../UI/MainButton/MainButton";
import contactValidation from "../validations/contactValidation";
import styles from './ContactUsForm.module.css';

type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactUsForm = () => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData);
    const t = translations[selectedLanguage].forms;
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (_: any, { resetForm }: FormikHelpers<FormValues>) => {
        if (!formRef.current) return;

        emailjs
            .sendForm(
                'service_hab31ph',
                'template_8kyhp9u',
                formRef.current,
                {publicKey: '3WiK1zFLYxTKjHs4f'}
            )
            .then(() => {
                alert("Message sent successfully");
                resetForm();
            })
            .catch((error: any) => {
                console.error("Message send failed:", error.text);
            });
    };

    return (
        <div className={styles.contactUsFormDiv}>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={contactValidation(selectedLanguage)}
            >
                <Form className={styles.contactUsForm} ref={formRef}>
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
    );
};

export default ContactUsForm;