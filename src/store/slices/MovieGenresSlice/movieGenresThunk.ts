import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api/api";
import { IMoviesReturnType, IPropsType } from "../../../types";
import { IGenresReturnType } from "../sliceTypes/stateTypes";

export const genresListThunk = createAsyncThunk<IGenresReturnType, string>(
    'movieGenresThunk',
    async (selectedLanguage, { rejectWithValue }) => {
        try {
            const res = await API.getGenres(selectedLanguage)
            return res.data
        }catch(err: any) {
            return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch movie genres")
        }
    }
)

export const moviesByGenreThunk = createAsyncThunk<IMoviesReturnType, IPropsType>(
    'moviesByGenreThunk',
    async ({genreId, page, selectedLanguage}, { rejectWithValue }) => {
        try {
            const res = await API.getMoviesByGenre({genreId, page, selectedLanguage})
            return res.data
        }catch(err: any) {
            return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch movie genres")
        }
    }
)