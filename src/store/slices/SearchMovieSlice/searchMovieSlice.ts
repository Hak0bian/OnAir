import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchMovieThunk } from "./searchMovieThunk";
import { IMoviesReturnType } from "../../../types";
import { ISearchMoviesStateType } from "../sliceTypes/stateTypes";

const initialState: ISearchMoviesStateType = {
    searchedMovies: [],
    inputValue: "",
    movieIsLoading: false,
    movieNotFound: false,
    error: null,
}

const searchMovieSlice = createSlice({
    name: 'searchMovieSlice',
    initialState,
    reducers: {
        clearMovieResults(state){
            state.searchedMovies = []
        }
    },
    extraReducers(builder) {
        builder
        .addCase(searchMovieThunk.fulfilled, (state, action: PayloadAction<IMoviesReturnType>) => {
            state.searchedMovies = action.payload.results
            state.movieIsLoading = false
            state.movieNotFound = action.payload.results.length === 0;
        })
        .addCase(searchMovieThunk.pending, (state) => {
            state.movieIsLoading = true
            state.movieNotFound = false; 
        })
        .addCase(searchMovieThunk.rejected, (state, action) => {
            state.movieIsLoading = false
            state.error = action.payload as string;
        })
    },
})

export default searchMovieSlice.reducer
export const { clearMovieResults } = searchMovieSlice.actions