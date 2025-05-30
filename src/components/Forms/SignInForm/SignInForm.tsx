import { Dialog, DialogContent, IconButton } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { ISignInFormPropsType } from '../../componentsTypes/propsTypes';
import { translations } from '../../../translations/translations';
import { showForgotPassForm, showSignInForm } from '../../../store/slices/OpenCloseFormsSlice/OpenCloseFormsSlice';
import CloseIcon from '@mui/icons-material/Close';
import logoForDark from '../../../assets/images/onair-logo.png'
import logoForLight from '../../../assets/images/onair-logo-light.png'
import MainButton from '../../UI/MainButton/MainButton'
import ForgetPassForm from '../ForgotPassForm/ForgotPassForm';
import styles from './SignInForm.module.css'


const SignInForm = ({ handleOpenSignIn, handleOpenSignUp } : ISignInFormPropsType) => {
    const { selectedLanguage } = useAppSelector((state) => state.languagesData)
    const { signIn } = useAppSelector((state) => state.formsData)
    const { mode } = useAppSelector((state) => state.theme)
    const t = translations[selectedLanguage].forms
    const dispatch = useAppDispatch()

    const handleCloseSignIn = () => {
        dispatch(showSignInForm(false))
    };

    const handleOpenForgot = () => {
        dispatch(showForgotPassForm(true))
    };

    const toggleForms = () => {
        handleCloseSignIn()
        handleOpenSignUp()
    };

    const showForgotPass = () => {
        handleCloseSignIn()
        handleOpenForgot()
    }

    return (
        <div>
            <Dialog open={signIn} onClose={handleCloseSignIn} maxWidth="xs" fullWidth>
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
                            onSubmit = {(values) => console.log(values)}
                            
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
                                    <button className={styles.signUp} onClick={toggleForms}>{t.signUp}</button>
                                </label>
                                <button className={styles.signUp} onClick={showForgotPass}>{t.forgot}</button>
                            </Form>
                        </Formik>
                    </div>
                </DialogContent>
            </Dialog>

            <ForgetPassForm
                handleOpenSignIn={handleOpenSignIn}
            />
        </div>
    )
}

export default SignInForm