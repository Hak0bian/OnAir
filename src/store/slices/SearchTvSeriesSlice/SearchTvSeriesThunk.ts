import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api/api";
import { ITvSeriesReturnType } from "../../../types";

export const searchTvSeriesThunk = createAsyncThunk<ITvSeriesReturnType, string>(
    'searchTvSeriesThunk',
    async (text, { rejectWithValue }) => {
        try {
            const res = await API.searchTvSeria(text)
            return res.data
        }catch(err: any){
            return rejectWithValue(err?.response?.data?.status_message || "Failed to search tv seria")
        }
    }
)