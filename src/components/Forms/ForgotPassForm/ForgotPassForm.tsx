import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Dialog, DialogContent, IconButton } from '@mui/material';
import { showForgotPassForm } from '../../../store/slices/OpenCloseFormsSlice/OpenCloseFormsSlice';
import { translations } from '../../../translations/translations';
import { NavLink } from 'react-router-dom';
import forgotValidation from '../validations/forgotValidation';
import CloseIcon from '@mui/icons-material/Close';
import logoForDark from '../../../assets/images/onair-logo.png'
import logoForLight from '../../../assets/images/onair-logo-light.png'
import MainButton from '../../UI/MainButton/MainButton'
import styles from './ForgotPassForm.module.css'


const ForgetPassForm = ({ handleOpenSignIn }: {handleOpenSignIn: () => void}) => {
    const { forgotPass } = useAppSelector((state) => state.formsData)
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const { mode } = useAppSelector((state) => state.theme)
    const t = translations[selectedLanguage].forms
    const dispatch = useAppDispatch()

    const handleCloseForgot = () => {
        dispatch(showForgotPassForm(false))
    };

    const toggleForms = () => {
        handleCloseForgot()
        handleOpenSignIn()
    }

    const handleSubmit = (_: any, { resetForm }: { resetForm: () => void }) => {
        alert("We have sent the link to your email.");
        resetForm();
        handleCloseForgot()
    };

    return (
        <div>
            <Dialog open={forgotPass} onClose={handleCloseForgot} maxWidth="xs" fullWidth>
                <DialogContent sx={{ position: 'relative', p: 0 }}>
                    <IconButton onClick={handleCloseForgot}
                        sx={{
                            position: 'absolute', top: 4, right: 4, color: 'var(--text-color-primary)',
                            '&:hover': { color: 'var(--text-color-secondary)' }
                        }}
                    >
                        <CloseIcon sx={{ fontSize: '20px' }} />
                    </IconButton>
                    <div className={styles.forgotFormDiv}>
                        <div className={styles.logoDiv}>
                            <img src={mode === 'dark' ? logoForDark : logoForLight} className={styles.logo} />
                        </div>
                        <Formik
                            initialValues={{
                                email: "",
                                agree: false
                            }}
                            onSubmit = {handleSubmit}
                            validationSchema = {forgotValidation(selectedLanguage)}
                        >
                            <Form className={styles.forgotForm}>
                                <label>
                                    <Field name="email" placeholder={t.email} className={styles.inp} />
                                    <ErrorMessage name="email" component="div" className={styles.error} />
                                </label>
                                <label className={styles.agreeLabel}>
                                    <Field type="checkbox" name="agree" />
                                    {t.agree}
                                    <NavLink to={`/Privacy-Policy`} onClick={handleCloseForgot} className={styles.agreeBtn}> 
                                        {t.privacy} 
                                    </NavLink>
                                </label>
                                <label className={styles.btnLabel}>
                                    <MainButton text={t.recover} />
                                </label>
                                <label className={styles.linkLabel}>{t.willSend}</label>
                                <label className={styles.backLabel}>
                                    <button onClick={toggleForms} className={styles.backBtn}>{t.back}</button>
                                </label>
                            </Form>
                        </Formik>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ForgetPassForm