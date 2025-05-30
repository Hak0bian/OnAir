import { Dialog, DialogContent, IconButton } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { translations } from '../../../translations/translations';
import { NavLink } from 'react-router-dom';
import { showSignInForm, showSignUpForm } from '../../../store/slices/OpenCloseFormsSlice/OpenCloseFormsSlice';
import CloseIcon from '@mui/icons-material/Close';
import logoForDark from '../../../assets/images/onair-logo.png'
import logoForLight from '../../../assets/images/onair-logo-light.png'
import MainButton from '../../UI/MainButton/MainButton'
import SignInForm from '../SignInForm/SignInForm';
import registerValidation from '../validations/registerValidation';
import styles from './RegisterForm.module.css'


const RegisterForm = ({ handleOpenSignUp }: {handleOpenSignUp: () => void}) => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const { signUp } = useAppSelector((state) => state.formsData)
    const { mode } = useAppSelector((state) => state.theme)
    const t = translations[selectedLanguage].forms
    const dispatch = useAppDispatch()

    const handleCloseSignUp = () => {
        dispatch(showSignUpForm(false))
    }

    const handleOpenSignIn = () => {
        dispatch(showSignInForm(true))
    };

    const toggleForms = () => {
        handleOpenSignIn()
        handleCloseSignUp()
    }

    const handleSubmit = (_: any, { resetForm }: { resetForm: () => void }) => {
        alert("You have successfully registered.");
        resetForm();
        handleCloseSignUp()
    };

    return (
        <div>
            <Dialog open={signUp} onClose={handleCloseSignUp} maxWidth="xs" fullWidth>
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
                            onSubmit={handleSubmit}
                            validationSchema={registerValidation(selectedLanguage)}
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
                                    <NavLink to={`/Privacy-Policy`} className={styles.agreeBtn}> {t.privacy} </NavLink>
                                </label>
                                <label className={styles.btnLabel}>
                                    <MainButton text={t.signUp} />
                                </label>
                                <label className={styles.signInLabel}>
                                    {t.have}
                                    <button className={styles.signIn} onClick={toggleForms}>{t.signIn}</button>
                                </label>
                            </Form>
                        </Formik>
                    </div>
                </DialogContent>
            </Dialog>

            <SignInForm
                handleOpenSignIn={handleOpenSignIn}
                handleOpenSignUp={handleOpenSignUp}
            />
        </div>
    )
}

export default RegisterForm