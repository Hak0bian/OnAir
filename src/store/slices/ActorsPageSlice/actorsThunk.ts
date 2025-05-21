import { createAsyncThunk } from "@reduxjs/toolkit";
import { IActorsReturnType, ISelectedActorType } from "../sliceTypes/stateTypes";
import { IPropsType, IPropsTypeToo } from "../../../types";
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

export const actorFullInfoThunk = createAsyncThunk<ISelectedActorType, IPropsTypeToo>(
    "actorFullInfoThunk",
    async ({id, selectedLanguage}, { rejectWithValue }) => {
        try {
            const [actorRes, knownForRes] = await Promise.all([
                API.getActorById({id, selectedLanguage}),
                API.getActorKnownFor({id, selectedLanguage})
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

export const actorBiographyThunk = createAsyncThunk<{ id: number; biography: string }, IPropsTypeToo>(
    'actorBiographyThunk',
    async ({id, selectedLanguage}, { rejectWithValue }) => {
        try {
            const res = await API.getActorById({id, selectedLanguage})
            return { id, biography: res.data.biography };
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.status_message || 'Failed to fetch biography');
        }
    }
);