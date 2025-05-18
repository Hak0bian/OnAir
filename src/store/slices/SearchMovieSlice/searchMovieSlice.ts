import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchMovieThunk } from "./searchMovieThunk";
import { IMoviesReturnType } from "../../../types";
import { ISearchMoviesStateType } from "../sliceTypes/stateTypes";

const initialState: ISearchMoviesStateType = {
    searchedMovies: [],
    isLoading: false,
    notFound: null,
    error: null
}

const searchMovieSlice = createSlice({
    name: 'searchMovieSlice',
    initialState,
    reducers: {
        clearResults(state) {
            state.searchedMovies = []
        }
    },
    extraReducers(builder) {
        builder
        .addCase(searchMovieThunk.fulfilled, (state, action: PayloadAction<IMoviesReturnType>) => {
            state.searchedMovies = action.payload.results
            state.isLoading = false
        })
        .addCase(searchMovieThunk.pending, (state) => {
            state.isLoading = true
        })
        .addCase(searchMovieThunk.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload as string;
        })
    },
})

export default searchMovieSlice.reducer
export const { clearResults } = searchMovieSlice.actions