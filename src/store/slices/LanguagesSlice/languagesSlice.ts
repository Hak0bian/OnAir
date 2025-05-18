import { createSlice } from "@reduxjs/toolkit";
import { languagesThunk } from "./languagesThunk";
import { IԼanguagesStateType } from "../../slices/sliceTypes/stateTypes"

const initialState: IԼanguagesStateType = {
    languages: [],
    selectedLanguage: "en",
    isLoading: false,
    error: null
}

const languagesSlice = createSlice({
    name: 'languagesSlice',
    initialState,
    reducers: {
        changeLanguages(state, action) {
            state.selectedLanguage = action.payload
        }
    },
    extraReducers(builder) {
        builder
        .addCase(languagesThunk.fulfilled, (state, action) => {
            state.languages = action.payload
            state.isLoading = false
        })
        .addCase(languagesThunk.pending, (state) => {
            state.isLoading = true
        })
        .addCase(languagesThunk.rejected, (state, action) => {
            state.error = action.payload as string
            state.isLoading = false
        })

    },
})

export default languagesSlice.reducer
export const { changeLanguages } = languagesSlice.actions