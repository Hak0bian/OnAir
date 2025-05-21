import { createAsyncThunk } from "@reduxjs/toolkit"
import { IMoviesReturnType, IMoviesType, IMovieVideosReturnType, IPropsType, IPropsTypeToo } from "../../../types"
import { IMovieCreditsType } from "../sliceTypes/stateTypes"
import { API } from "../../../api/api"

export const moviesThunk = createAsyncThunk<IMoviesReturnType, IPropsType>(
    "moviesThunk",
    async ({page, selectedLanguage}, { rejectWithValue }) => {
        try {
            const res = await API.getMovies({page, selectedLanguage})
            return res.data
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch movies")
        }
    }
)

export const movieByIdThunk = createAsyncThunk<IMoviesType, IPropsTypeToo>(
    "movieByIdThunk",
    async ({id, selectedLanguage}, { rejectWithValue }) => {
        try {
            const res = await API.getMovieById({id, selectedLanguage})
            return res.data
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch selected movie")
        }
    }
)

export const movieCrewThunk = createAsyncThunk<IMovieCreditsType, number>(
    "movieCrewThunk",
    async (movieId, { rejectWithValue }) => {
        try {
            const res = await API.getMovieCrew(movieId)
            return res.data
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch movie crew")
        }
    }
)

export const movieVideosThunk = createAsyncThunk<IMovieVideosReturnType, number>(
    "movieVideosThunk",
    async (id, { rejectWithValue }) => {
        try {
            const res = await API.getMovieVideos(id)
            return res.data
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch movie trailer")
        }
    }
)