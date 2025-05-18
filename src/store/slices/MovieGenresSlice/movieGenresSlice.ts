import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { genresListThunk, moviesByGenreThunk } from "./movieGenresThunk";
import { IMoviesReturnType } from "../../../types";
import { IMovieGenresStateType, IGenresReturnType } from "../sliceTypes/stateTypes";

const initialState: IMovieGenresStateType = {
    genres: [],
    moviesByGenre: [],
    isLoading: false,
    selectedGenreId: 0,
    error: null,
}

const movieGenresSlice = createSlice({
    name: 'movieGenresSlice',
    initialState,
    reducers: {
        changeSelectedGenreId(state, action: PayloadAction<number>) {
            state.selectedGenreId = action.payload;
        },
        clearmoviesByGenre(state) {
            state.moviesByGenre = []
        }
    },
    extraReducers(builder) {
        builder
        .addCase(genresListThunk.fulfilled, (state, action: PayloadAction<IGenresReturnType>) => {
            state.genres = action.payload.genres
            state.isLoading = false
        })
        .addCase(genresListThunk.pending, (state) => {
            state.isLoading = true
        })
        .addCase(genresListThunk.rejected, (state, action) => {
            state.error = action.payload as string;
            state.isLoading = false
        })


        .addCase(moviesByGenreThunk.fulfilled, (state, action: PayloadAction<IMoviesReturnType>) => {
            state.moviesByGenre = action.payload.results
            state.isLoading = false
        })
        .addCase(moviesByGenreThunk.pending, (state) => {
            state.isLoading = true
        })
        .addCase(moviesByGenreThunk.rejected, (state, action) => {
            state.error = action.payload as string;
            state.isLoading = false
        })
    },
})

export default movieGenresSlice.reducer
export const { changeSelectedGenreId, clearmoviesByGenre } = movieGenresSlice.actions;