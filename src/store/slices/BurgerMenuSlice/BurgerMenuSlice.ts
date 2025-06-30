import { createSlice } from "@reduxjs/toolkit";
import { IBurgerMenuStateType } from "../sliceTypes/stateTypes";

const initialState: IBurgerMenuStateType = {
    openBurger: false
}

const burgerMenuSlice = createSlice({
    name: 'BurgerMenuSlice',
    initialState,
    reducers: {
        setOpenBurger(state, action){
            state.openBurger = action.payload
        }
    }
})

export default burgerMenuSlice.reducer
export const { setOpenBurger } = burgerMenuSlice.actions