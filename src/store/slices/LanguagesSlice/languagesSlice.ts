import { createSlice } from "@reduxjs/toolkit";
import { IԼanguagesStateType } from "../../slices/sliceTypes/stateTypes"

const initialState: IԼanguagesStateType = {
    selectedLanguage: localStorage.getItem('language') || 'en',
    isLoading: false,
}

const languagesSlice = createSlice({
    name: 'languagesSlice',
    initialState,
    reducers: {
        changeLanguages(state, action) {
            state.selectedLanguage = action.payload
        }
    }
})

export default languagesSlice.reducer
export const { changeLanguages } = languagesSlice.actions