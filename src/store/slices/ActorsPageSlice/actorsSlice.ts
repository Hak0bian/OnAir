import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActorsReturnType, IActorsStateType, ISelectedActorType } from "../sliceTypes/stateTypes";
import { actorsThunk, actorFullInfoThunk } from "./actorsThunk";

const initialState: IActorsStateType = {
    actors: [],
    selectedActor: null,
    page: 1,
    totalPages: 0,
    loadingActors: false,
    loadingInfo: false,
    errorActors: null,
    errorInfo: null
}

const actorsSlice = createSlice({
    name: 'actorsSlice',
    initialState,
    reducers: {
        changeActorsPageNumber(state, action) {
            state.page = action.payload
        }
    },
    extraReducers(builder) {
        builder
        // getActors
        .addCase(actorsThunk.fulfilled, (state, action: PayloadAction<IActorsReturnType>) => {
            state.actors = action.payload.results
            state.totalPages = action.payload.total_pages
            state.loadingActors = false
        })
        .addCase(actorsThunk.pending, (state) => {
            state.loadingActors = true
        })
        .addCase(actorsThunk.rejected, (state, action) => {
            state.errorActors = action.payload as string
            state.loadingActors = false
        })

        // getActorsById
        .addCase(actorFullInfoThunk.fulfilled, (state, action: PayloadAction<ISelectedActorType>) => {
            state.selectedActor = action.payload
            state.loadingInfo = false
        })
        .addCase(actorFullInfoThunk.pending, (state) => {
            state.loadingInfo = true
        })
        .addCase(actorFullInfoThunk.rejected, (state, action) => {
            state.errorInfo = action.payload as string
            state.loadingInfo = false
        })
    }
})

export default actorsSlice.reducer
export const { changeActorsPageNumber } = actorsSlice.actions