import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tvSeriaByIdThunk, tvSeriesThunk } from "./tvSeriesThunk";
import { ITvSeriesStateType } from "../sliceTypes/stateTypes";
import { IDetailsByIdType, ITvSeriesReturnType } from "../../../types";

const initialState: ITvSeriesStateType = {
    tvSeries: [],
    selectedSeria: null,
    page: 1,
    totalPages: 0,
    isLoading: false,
    error: null,
}

const tvSeriesSlice = createSlice({
    name: 'tvSeriesSlice',
    initialState,
    reducers: {
        changeTvSeriesPageNumber(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
    },
    extraReducers(builder) {
        builder
        // getTvSeries
        .addCase(tvSeriesThunk.fulfilled, (state, action: PayloadAction<ITvSeriesReturnType>) => {
            state.tvSeries = action.payload.results
            state.totalPages = action.payload.total_pages
            state.isLoading = true
        })
        .addCase(tvSeriesThunk.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        .addCase(tvSeriesThunk.rejected, (state, action) => {
            state.error = action.payload as string;
            state.isLoading = false;
        })

        // getTvSeriaById
        .addCase(tvSeriaByIdThunk.fulfilled, (state, action: PayloadAction<IDetailsByIdType>) => {
            state.selectedSeria = action.payload
            state.isLoading = true
        })
        .addCase(tvSeriaByIdThunk.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        .addCase(tvSeriaByIdThunk.rejected, (state, action) => {
            state.error = action.payload as string;
            state.isLoading = false;
        })
    }
})

export default tvSeriesSlice.reducer
export const { changeTvSeriesPageNumber } = tvSeriesSlice.actions