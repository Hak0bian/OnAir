import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { movieByIdThunk, moviesThunk } from "./moviesThunk";
import { IDetailsByIdType, IMoviesReturnType } from "../../../types";
import { IMoviesStateType } from "../sliceTypes/stateTypes";


const initialState: IMoviesStateType = {
    movies: [],
    selectedMovie: null,
    sortBy: '',
    page: 1,
    totalPages: 0,
    loadingMovies: false,
    loadingInfo: false,
    errorMovies: null,
    errorInfo: null
}

const moviesSlice = createSlice({
    name: "defaultMovies",
    initialState,
    reducers: {
        changeMoviesPageNumber(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
        changeMoviesSortBy(state, action: PayloadAction<string>) {
            state.sortBy = action.payload
        }
    },
    extraReducers(builder) {
        builder
        // getMovies
        .addCase(moviesThunk.fulfilled, (state, action: PayloadAction<IMoviesReturnType>) => {
            state.movies = action.payload.results;
            state.totalPages = action.payload.total_pages
            state.loadingMovies = false
        })
        .addCase(moviesThunk.pending, (state) => {
            state.loadingMovies = true;
        })
        .addCase(moviesThunk.rejected, (state, action) => {
            state.errorMovies = action.payload as string;
            state.loadingMovies = false
        })

        // getMovieById
        .addCase(movieByIdThunk.fulfilled, (state, action: PayloadAction<IDetailsByIdType>) => {
            state.selectedMovie = action.payload
            state.loadingInfo = false
        })
        .addCase(movieByIdThunk.pending, (state) => {
            state.loadingInfo = true
        })
        .addCase(movieByIdThunk.rejected, (state, action) => {
            state.errorInfo = action.payload as string;
            state.loadingInfo = false
        })
    },
})

export default moviesSlice.reducer
export const { changeMoviesPageNumber, changeMoviesSortBy } = moviesSlice.actions