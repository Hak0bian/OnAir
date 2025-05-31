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
        },
        handleInputValue(state, action){
            state.inputValue = action.payload
        }
    },
    extraReducers(builder) {
        builder
        .addCase(searchMovieThunk.fulfilled, (state, action: PayloadAction<IMoviesReturnType>) => {
            state.searchedMovies = action.payload.results
            state.movieNotFound = action.payload.results.length === 0;
            state.movieIsLoading = false
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
export const { clearMovieResults, handleInputValue } = searchMovieSlice.actions