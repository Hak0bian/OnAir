import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActorsReturnType, ISearchActorsStateType } from "../sliceTypes/stateTypes";
import { searchActorThunk } from "./searchActorThunk";

const initialState: ISearchActorsStateType = {
    searchedActors: [],
    actorIsLoading: false,
    actorNotFound: false,
    error: null
}

const searchActorSlice = createSlice({
    name: 'searchActorSlice',
    initialState,
    reducers: {
        clearActorsResults(state) {
            state.searchedActors = []
        }
    },
    extraReducers(builder) {
        builder
        .addCase(searchActorThunk.fulfilled, (state, action: PayloadAction<IActorsReturnType>) => {
            state.searchedActors = action.payload.results
            state.actorNotFound = action.payload.results.length === 0;
            state.actorIsLoading = false
        })
        .addCase(searchActorThunk.pending, (state) => {
            state.actorIsLoading = true
            state.actorNotFound = false
        })
        .addCase(searchActorThunk.rejected, (state, action) => {
            state.actorIsLoading = false
            state.error = action.payload as string;
        })
    },
})

export default searchActorSlice.reducer
export const { clearActorsResults } = searchActorSlice.actions