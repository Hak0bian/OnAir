import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api/api";
import { IMoviesReturnType } from "../../../types";

export const searchMovieThunk = createAsyncThunk<IMoviesReturnType, string>(
    'searchMovieThunk',
    async (text, { rejectWithValue }) => {
        try {
            const res = await API.searchMovie(text)
            return res.data
        }catch(err: any){
            return rejectWithValue(err?.response?.data?.status_message || "Failed to search movies")
        }
    }
)