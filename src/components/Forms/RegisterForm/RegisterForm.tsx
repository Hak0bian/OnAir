import { useState } from 'react';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useAppSelector } from '../../../store/hooks/hooks';
import { IRegisterFormPropsType } from '../../componentsTypes/propsTypes';
import { translations } from '../../../translations/translations';
import CloseIcon from '@mui/icons-material/Close';
import logoForDark from '../../../assets/images/onair-logo.png'
import logoForLight from '../../../assets/images/onair-logo-light.png'
import MainButton from '../../UI/MainButton/MainButton'
import validation from '../validation';
import styles from './RegisterForm.module.css'
import SignInForm from '../SignInForm/SignInForm';


const RegisterForm = ({ openSignUpForm, handleCloseSignUp, handleOpenSignUp }: IRegisterFormPropsType) => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const t = translations[selectedLanguage].forms
    const { mode } = useAppSelector((state) => state.theme)
    const [openSignIn, setOpenSignIn] = useState(false);
    const handleOpenSignIn = () => setOpenSignIn(true);
    const handleCloseSignIn = () => setOpenSignIn(false);

    const showSignInForm = () => {
        handleCloseSignUp()
        handleOpenSignIn()
    }

    return (
        <div>
            <Dialog open={openSignUpForm} onClose={handleCloseSignUp} maxWidth="xs" fullWidth>
                <DialogContent sx={{ position: 'relative', p: 0 }}>
                    <IconButton onClick={handleCloseSignUp}
                        sx={{
                            position: 'absolute', top: 4, right: 4, color: 'var(--text-color-primary)',
                            '&:hover': { color: 'var(--text-color-secondary)' }
                        }}
                    >
                        <CloseIcon sx={{ fontSize: '20px' }} />
                    </IconButton>
                    <div className={styles.registerFormDiv}>
                        <div className={styles.logoDiv}>
                            <img src={mode === 'dark' ? logoForDark : logoForLight} className={styles.logo} />
                        </div>
                        <Formik
                            initialValues={{
                                name: "",
                                lastName: "",
                                email: "",
                                pass: "",
                                agree: false
                            }}
                            onSubmit = {() => handleCloseSignUp()}
                            validationSchema = {validation(selectedLanguage)}
                        >
                            <Form className={styles.registerForm}>
                                <label>
                                    <Field name="name" placeholder={t.name} className={styles.inp} />
                                    <ErrorMessage name="name" component="div" className={styles.error} />
                                </label>
                                <label>
                                    <Field name="lastName" placeholder={t.lastname} className={styles.inp} />
                                    <ErrorMessage name="lastName" component="div" className={styles.error} />
                                </label>
                                <label>
                                    <Field name="email" placeholder={t.email} className={styles.inp} />
                                    <ErrorMessage name="email" component="div" className={styles.error} />
                                </label>
                                <label>
                                    <Field name="pass" placeholder={t.pass} type="password" className={styles.inp} />
                                    <ErrorMessage name="pass" component="div" className={styles.error} />
                                </label>
                                <label className={styles.agreeLabel}>
                                    <Field type="checkbox" name="agree" />
                                    {t.agree}
                                    <button className={styles.agreeBtn}>{t.privacy}</button>
                                </label>
                                <label className={styles.btnLabel}>
                                    <MainButton text={t.signUp} />
                                </label>
                                <label className={styles.signInLabel}>
                                    {t.have}
                                    <button className={styles.signIn} onClick={showSignInForm}>{t.signIn}</button>
                                </label>
                            </Form>
                        </Formik>
                    </div>
                </DialogContent>
            </Dialog>

            <SignInForm 
                openSignIn={openSignIn} 
                handleCloseSignIn={handleCloseSignIn}
                handleOpenSignUp={handleOpenSignUp}
                handleOpenSignIn={handleOpenSignIn}
            />
        </div>
    )
}

export default RegisterForm