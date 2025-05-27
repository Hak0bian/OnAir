import { useState } from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useAppSelector } from '../../../store/hooks/hooks';
import { ISignInFormPropsType } from '../../componentsTypes/propsTypes';
import { translations } from '../../../translations/translations';
import validation from '../validation';
import CloseIcon from '@mui/icons-material/Close';
import logoForDark from '../../../assets/images/onair-logo.png'
import logoForLight from '../../../assets/images/onair-logo-light.png'
import MainButton from '../../UI/MainButton/MainButton'
import styles from './SignInForm.module.css'
import ForgetPassForm from '../ForgotPassForm/ForgotPassForm';


const SignInForm = ({ openSignIn, handleCloseSignIn, handleOpenSignUp, handleOpenSignIn } : ISignInFormPropsType) => {
    const { mode } = useAppSelector((state) => state.theme)
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].forms
    const [openForgot, setOpenForgot] = useState(false);
    const handleOpenForgot = () => setOpenForgot(true);
    const handleCloseForgot = () => setOpenForgot(false);

    const showSignUpForm = () => {
        handleCloseSignIn()
        handleOpenSignUp()
    }

    const showForgotPassForm = () => {
        handleCloseSignIn()
        handleOpenForgot()
    }

    return (
        <div>
            <Dialog open={openSignIn} onClose={handleCloseSignIn} maxWidth="xs" fullWidth>
                <DialogContent sx={{ position: 'relative', p: 0 }}>
                    <IconButton onClick={handleCloseSignIn}
                        sx={{
                            position: 'absolute', top: 4, right: 4, color: 'var(--text-color-primary)',
                            '&:hover': { color: 'var(--text-color-secondary)' }
                        }}
                    >
                    <CloseIcon sx={{ fontSize: '20px' }} />
                    </IconButton>
                    <div className={styles.signInFormDiv}>
                        <div className={styles.logoDiv}>
                            <img src={mode === 'dark' ? logoForDark : logoForLight} className={styles.logo} />
                        </div>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                                remember: false
                            }}
                            onSubmit = {() => handleCloseSignIn()}
                            validationSchema = {validation(selectedLanguage)}
                        >
                            <Form className={styles.signInForm}>
                                <label>
                                    <Field name="email" placeholder={t.email} className={styles.inp} />
                                    <ErrorMessage name="email" component="div" className={styles.error} />
                                </label>
                                <label>
                                    <Field name="password" placeholder={t.pass} type="password" className={styles.inp} />
                                    <ErrorMessage name="password" component="div" className={styles.error} />
                                </label>
                                <label className={styles.rememberLabel}>
                                    <Field type="checkbox" name="remember" />
                                    {t.remember}
                                </label>
                                <label className={styles.btnLabel}>
                                    <MainButton text={t.signIn} />
                                </label>
                                <label className={styles.signUpLabel}>
                                    {t.dontHave}
                                    <button className={styles.signUp} onClick={showSignUpForm}>{t.signUp}</button>
                                </label>
                                <button className={styles.signUp} onClick={showForgotPassForm}>{t.forgot}</button>
                            </Form>
                        </Formik>
                    </div>
                </DialogContent>
            </Dialog>

            <ForgetPassForm
                openForgot={openForgot}
                handleCloseForgot={handleCloseForgot}
                handleOpenSignIn={handleOpenSignIn}
            />
        </div>
    )
}

export default SignInForm