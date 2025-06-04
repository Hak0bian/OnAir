import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { movieByIdThunk, moviesThunk } from "./moviesThunk";
import { IDetailsByIdType, IMoviesReturnType } from "../../../types";
import { IMoviesStateType } from "../sliceTypes/stateTypes";


const initialState: IMoviesStateType = {
    movies: [],
    selectedMovie: null,
    page: 1,
    totalPages: 0,
    isLoading: false,
    error: null
}

const moviesSlice = createSlice({
    name: "defaultMovies",
    initialState,
    reducers: {
        changeMoviesPageNumber(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
    },
    extraReducers(builder) {
        builder
        // getMovies
        .addCase(moviesThunk.fulfilled, (state, action: PayloadAction<IMoviesReturnType>) => {
            state.movies = action.payload.results;
            state.totalPages = action.payload.total_pages
            state.isLoading = false
        })
        .addCase(moviesThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(moviesThunk.rejected, (state, action) => {
            state.error = action.payload as string;
            state.isLoading = false
        })

        // getMovieById
        .addCase(movieByIdThunk.fulfilled, (state, action: PayloadAction<IDetailsByIdType>) => {
            state.selectedMovie = action.payload
            state.isLoading = false
        })
        .addCase(movieByIdThunk.pending, (state) => {
            state.isLoading = true
        })
        .addCase(movieByIdThunk.rejected, (state, action) => {
            state.error = action.payload as string;
            state.isLoading = false
        })
    },
})

export default moviesSlice.reducer
export const { changeMoviesPageNumber } = moviesSlice.actions