import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPropsType, IPropsTypeToo, ITvDetailsResponse, ITvSeriesReturnType } from "../../../types";
import { API } from "../../../api/api";

export const tvSeriesThunk = createAsyncThunk<ITvSeriesReturnType, IPropsType>(
    'tvSeriesThunk',
    async ({page, selectedLanguage}, { rejectWithValue }) => {
        try {
            const res = await API.getTvSeries({page, selectedLanguage})
            return res.data
        }catch(err: any){
            return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch Tv series")
        }
    }
)

export const tvSeriaByIdThunk = createAsyncThunk<ITvDetailsResponse, IPropsTypeToo>(
    'tvSeriaByIdThunk',
    async ({id, selectedLanguage}, { rejectWithValue }) => {
        try {
            const res = await API.getTvSeriaById({id, selectedLanguage})
            return res.data
        }catch(err: any){
            return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch selected Tv seria")
        }
    }
)