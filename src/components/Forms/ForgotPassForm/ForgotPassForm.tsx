import { Dialog, DialogContent, IconButton } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useAppSelector } from '../../../store/hooks/hooks';
import { IForgotPassFormPropsType } from '../../componentsTypes/propsTypes'
import { translations } from '../../../translations/translations';
import validation from '../validation';
import CloseIcon from '@mui/icons-material/Close';
import logoForDark from '../../../assets/images/onair-logo.png'
import logoForLight from '../../../assets/images/onair-logo-light.png'
import MainButton from '../../UI/MainButton/MainButton'
import styles from './ForgotPassForm.module.css'


const ForgetPassForm = ({ openForgot, handleCloseForgot, handleOpenSignIn }: IForgotPassFormPropsType) => {
    const { mode } = useAppSelector((state) => state.theme)
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].forms

    const showSignInForm = () => {
        handleCloseForgot()
        handleOpenSignIn()
    }

    return (
        <div>
            <Dialog open={openForgot} onClose={handleCloseForgot} maxWidth="xs" fullWidth>
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
                            onSubmit = {() => handleCloseForgot()}
                            validationSchema = {validation(selectedLanguage)}
                        >
                            <Form className={styles.forgotForm}>
                                <label>
                                    <Field name="email" placeholder={t.email} className={styles.inp} />
                                    <ErrorMessage name="email" component="div" className={styles.error} />
                                </label>
                                <label className={styles.agreeLabel}>
                                    <Field type="checkbox" name="agree" />
                                    {t.agree}
                                    <button className={styles.agreeBtn}>{t.privacy}</button>
                                </label>
                                <label className={styles.btnLabel}>
                                    <MainButton text={t.recover} />
                                </label>
                                <label className={styles.linkLabel}>{t.willSend}</label>
                                <label className={styles.backLabel}>
                                    <button onClick={showSignInForm} className={styles.backBtn}>{t.back}</button>
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