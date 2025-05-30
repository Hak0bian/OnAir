import RegisterForm from "../Forms/RegisterForm/RegisterForm"
import SignInForm from "../Forms/SignInForm/SignInForm"
import ForgetPassForm from "../Forms/ForgotPassForm/ForgotPassForm"
import SelectPlanForm from "../Forms/SelectPlanForm/SelectPlanForm"
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks"
import { showSignInForm, showSignUpForm } from "../../store/slices/OpenCloseFormsSlice/OpenCloseFormsSlice"

const FormsPortal = () => {
    const { signUp, signIn, forgotPass, selectPlan } = useAppSelector((state) => state.formsData)
    const dispatch = useAppDispatch()

    const handleOpenSignUp = () => {
        dispatch(showSignUpForm(true))
    }

    const handleOpenSignIn = () => {
        dispatch(showSignInForm(true))
    };


    return (
        <>
            { signUp && <RegisterForm handleOpenSignUp={handleOpenSignUp} /> }
            { signIn && <SignInForm handleOpenSignIn={handleOpenSignIn} handleOpenSignUp={handleOpenSignUp} /> }
            { forgotPass && <ForgetPassForm handleOpenSignIn={handleOpenSignIn} /> }
            { selectPlan && <SelectPlanForm /> }
        </>
    )
}

export default FormsPortal