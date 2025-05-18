import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../api/api";
import { IActorsReturnType } from "../sliceTypes/stateTypes";

export const searchActorThunk = createAsyncThunk<IActorsReturnType, string>(
    'searchActorThunk',
    async (text, { rejectWithValue }) => {
        try {
            const res = await API.searchActor(text)
            return res.data
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.status_message || "Failed to search movies")
        }
    }
)