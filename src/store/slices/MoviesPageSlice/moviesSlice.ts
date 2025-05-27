import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { movieByIdThunk, movieCrewThunk, moviesThunk, movieVideosThunk } from "./moviesThunk";
import { IMoviesReturnType, IMoviesType, IMovieVideosReturnType } from "../../../types";
import { IMovieCreditsType, IMoviesStateType } from "../sliceTypes/stateTypes";


const initialState: IMoviesStateType = {
    movies: [],
    movieVideos: [],
    selectedMovie: null,
    movieCast: [],
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
        .addCase(movieByIdThunk.fulfilled, (state, action: PayloadAction<IMoviesType>) => {
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

        // getMoviesCredits
        .addCase(movieCrewThunk.fulfilled, (state, action: PayloadAction<IMovieCreditsType>) => {
            state.movieCast = [ ...action.payload.cast, ...action.payload.crew ]
            state.isLoading = false
        })
        .addCase(movieCrewThunk.pending, (state => {
            state.isLoading = true
        }))
        .addCase(movieCrewThunk.rejected, (state, action) => {
             state.error = action.payload as string;
            state.isLoading = false
        })

        // getMoviesVideos
        .addCase(movieVideosThunk.fulfilled, (state, action: PayloadAction<IMovieVideosReturnType>) => {
            state.movieVideos = action.payload.results
            state.isLoading = false
        })
        .addCase(movieVideosThunk.pending, (state) => {
            state.isLoading = true
        })
        .addCase(movieVideosThunk.rejected, (state, action) => {
            state.error = action.payload as string;
            state.isLoading = false
        })
    },
})

export default moviesSlice.reducer
export const { changeMoviesPageNumber } = moviesSlice.actions