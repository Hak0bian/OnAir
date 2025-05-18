import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api/api";
import { IlanguagesType } from "../sliceTypes/stateTypes";

export const languagesThunk = createAsyncThunk<IlanguagesType[], void>(
    'languagesThunk',
    async (_, { rejectWithValue }) => {
        try {
            const res = await API.getLanguages()
            return res.data
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch languages")
        }
    }
)