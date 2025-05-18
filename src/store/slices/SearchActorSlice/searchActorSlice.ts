import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActorsReturnType, ISearchActorsStateType } from "../sliceTypes/stateTypes";
import { searchActorThunk } from "./searchActorThunk";

const initialState: ISearchActorsStateType = {
    searchedActors: [],
    isLoading: false,
    notFound: null,
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
            state.isLoading = false
        })
        .addCase(searchActorThunk.pending, (state) => {
            state.isLoading = true
        })
        .addCase(searchActorThunk.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string;
        })
    },
})

export default searchActorSlice.reducer
export const { clearActorsResults } = searchActorSlice.actions