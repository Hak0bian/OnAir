import { createAsyncThunk } from "@reduxjs/toolkit";
import { IActorsReturnType, ISelectedActorType } from "../sliceTypes/stateTypes";
import { IPropsType } from "../../../types";
import { API } from "../../../api/api";

export const actorsThunk = createAsyncThunk<IActorsReturnType, IPropsType>(
    'actorsThunk',
    async ({ page, selectedLanguage }, { rejectWithValue }) => {
        try {
            const res = await API.getActors({ page, selectedLanguage })
            return res.data

        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch actors")
        }
    }
)

export const actorFullInfoThunk = createAsyncThunk<ISelectedActorType, number>(
    "actorFullInfoThunk",
    async (id, { rejectWithValue }) => {
        try {
            const [actorRes, knownForRes] = await Promise.all([
                API.getActorById(id),
                API.getActorKnownFor(id)
            ]);
            return {
                ...actorRes.data,
                known_for: knownForRes.data.crew,
            };
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch actor info")
        }
    }
)


export const actorBiographyThunk = createAsyncThunk(
    'actors/fetchBiography',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await API.getActorById(id)
            return { id, biography: response.data.biography };
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.status_message || 'Failed to fetch biography');
        }
    }
);

