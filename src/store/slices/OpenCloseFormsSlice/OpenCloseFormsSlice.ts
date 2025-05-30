import { createSlice } from "@reduxjs/toolkit";
import { IOpenCloseFormsStateType } from "../sliceTypes/stateTypes";

const initialState : IOpenCloseFormsStateType = {
    signUp: false,
    signIn: false,
    forgotPass: false,
    selectPlan: false
}

const openCloseFormsSlice = createSlice({
    name: 'openCloseFormsSlice',
    initialState,
    reducers: {
        showSignUpForm(state, action){
            state.signUp = action.payload
        },

        showSignInForm(state, action){
            state.signIn = action.payload
        },

        showForgotPassForm(state, action){
            state.forgotPass = action.payload
        },

        showSelectPlanForm(state, action){
            state.selectPlan = action.payload
        }
    }
})

export default openCloseFormsSlice.reducer
export const { showSignUpForm, showSignInForm, showForgotPassForm, showSelectPlanForm } = openCloseFormsSlice.actions