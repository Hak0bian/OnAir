import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMoviesReturnType, IPropsType } from "../../../types";
import { API } from "../../../api/api";

export const latestMoviesThunk = createAsyncThunk<IMoviesReturnType, IPropsType>(
  "latestMoviesThunk",
  async ({ page, selectedLanguage }, { rejectWithValue }) => {
    try {
      const res = await API.getLatestMovies({ page, selectedLanguage });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch latest movies");
    }
  }
);

export const popularMoviesThunk = createAsyncThunk<IMoviesReturnType, IPropsType>(
  "popularMoviesThunk",
  async ({ page, selectedLanguage }, { rejectWithValue }) => {
    try {
      const res = await API.getPopularMovies({ page, selectedLanguage });
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data?.status_message || "Failed to fetch popular movies");
    }
  }
);