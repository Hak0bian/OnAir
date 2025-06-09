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
            const [actorRes, knownForMoviesRes, knownForSeriesRes] = await Promise.all([
                API.getActorById({id, selectedLanguage}),
                API.getActorKnownForMovies({id, selectedLanguage}),
                API.getActorKnownForSeries({id, selectedLanguage})
            ]);
            return {
                ...actorRes.data,
                known_for_movies: knownForMoviesRes?.data?.crew,
                known_for_series: knownForSeriesRes?.data?.crew
            };
        } catch (err: any) {
            return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch selected actor")
        }
    }
)