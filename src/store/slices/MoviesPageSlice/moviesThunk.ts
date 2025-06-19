import { createAsyncThunk } from "@reduxjs/toolkit"
import { IDetailsByIdType, IMoviesReturnType, IPropsType, IPropsTypeToo } from "../../../types"
import { API } from "../../../api/api"

export const moviesThunk = createAsyncThunk<IMoviesReturnType, IPropsType>(
    "moviesThunk",
    async ({page, selectedLanguage, sortBy}, { rejectWithValue }) => {
        try {
            const res = await API.getMovies({page, selectedLanguage, sortBy})
            return res.data
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch movies")
        }
    }
)

export const movieByIdThunk = createAsyncThunk<IDetailsByIdType, IPropsTypeToo>(
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