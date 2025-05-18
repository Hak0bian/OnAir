import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActorsReturnType, IActorsStateType, ISelectedActorType } from "../sliceTypes/stateTypes";
import { actorsThunk, actorFullInfoThunk, actorBiographyThunk } from "./actorsThunk";

const initialState: IActorsStateType = {
    actors: [],
    selectedActor: null,
    page: 1,
    totalPages: 0,
    isLoading: false,
    error: null
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
        .addCase(actorsThunk.fulfilled, (state, action: PayloadAction<IActorsReturnType>) => {
            state.actors = action.payload.results
            state.totalPages = action.payload.total_pages
            state.isLoading = false
        })
        .addCase(actorsThunk.pending, (state) => {
            state.isLoading = true
        })
        .addCase(actorsThunk.rejected, (state, action) => {
            state.error = action.payload as string
        })

        .addCase(actorFullInfoThunk.fulfilled, (state, action: PayloadAction<ISelectedActorType>) => {
            state.selectedActor = action.payload
            state.isLoading = false
        })
        .addCase(actorFullInfoThunk.pending, (state) => {
            state.isLoading = true
        })
        .addCase(actorFullInfoThunk.rejected, (state, action) => {
            state.error = action.payload as string
        })

        .addCase(actorBiographyThunk.fulfilled, (state, action) => {
            const { id, biography } = action.payload;
            const actor = state.actors.find((a) => a.id === id);
            if (actor) {
                actor.biography = biography;
            }
        })
        .addCase(actorBiographyThunk.pending, (state) => {
            state.isLoading = true
        })
        .addCase(actorBiographyThunk.rejected, (state, action) => {
            state.error = action.payload as string
        })
    },
})

export default actorsSlice.reducer
export const { changeActorsPageNumber } = actorsSlice.actions