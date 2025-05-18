import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { latestMoviesThunk, popularMoviesThunk } from "./homeMoviesThunk";
import { IMoviesReturnType } from "../../../types";
import { IHomeMoviesStateType } from "../sliceTypes/stateTypes";


const initialState: IHomeMoviesStateType = {
    latestMovies: [],
    popularMovies: [],
    popularError: null,
    latestError: null,
    isLatestLoading: false,
    isPopularLoading: false,
    isLoading: false,
    page: 1,
    totalPages: 0,
}

export const homeMoviesSlice = createSlice({
    name: "homeMoviesSlice",
    initialState,
    reducers: {
        changeSeeAllPageNumber(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
    },
    extraReducers(builder) {
        builder
            // Latest Movies
            .addCase(latestMoviesThunk.fulfilled, (state, action: PayloadAction<IMoviesReturnType>) => {
                state.latestMovies = action.payload.results;
                state.totalPages = action.payload.total_pages
                state.isLoading = false;
            })
            .addCase(latestMoviesThunk.pending, (state) => {
                state.isLoading = true;
                state.latestError = null;
            })
            .addCase(latestMoviesThunk.rejected, (state, action) => {
                state.latestError = action.payload as string;
                state.isLoading = false;
            })

            // Popular Movies
            .addCase(popularMoviesThunk.fulfilled, (state, action: PayloadAction<IMoviesReturnType>) => {
                state.popularMovies = action.payload.results;
                state.totalPages = action.payload.total_pages
                state.isLoading = false;
            })
            .addCase(popularMoviesThunk.pending, (state) => {
                state.isLoading = true;
                state.popularError = null;
            })
            .addCase(popularMoviesThunk.rejected, (state, action) => {
                state.popularError = action.payload as string;
                state.isLoading = false;
            });
    },
})

export default homeMoviesSlice.reducer
export const { changeSeeAllPageNumber } = homeMoviesSlice.actions