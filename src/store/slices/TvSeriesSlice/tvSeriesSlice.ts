import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tvSeriaByIdThunk, tvSeriesThunk } from "./tvSeriesThunk";
import { ITvSeriesStateType } from "../sliceTypes/stateTypes";
import { IDetailsByIdType, ITvSeriesReturnType } from "../../../types";

const initialState: ITvSeriesStateType = {
    tvSeries: [],
    selectedSeria: null,
    page: 1,
    totalPages: 0,
    loadingSeries: false,
    loadingInfo: false,
    errorSeries: null,
    errorInfo: null
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
            state.loadingSeries = false
        })
        .addCase(tvSeriesThunk.pending, (state) => {
            state.loadingSeries = true
        })
        .addCase(tvSeriesThunk.rejected, (state, action) => {
            state.errorSeries = action.payload as string;
           state.loadingSeries = false
        })

        // getTvSeriaById
        .addCase(tvSeriaByIdThunk.fulfilled, (state, action: PayloadAction<IDetailsByIdType>) => {
            state.selectedSeria = action.payload
            state.loadingInfo = false
        })
        .addCase(tvSeriaByIdThunk.pending, (state) => {
            state.loadingInfo = true
        })
        .addCase(tvSeriaByIdThunk.rejected, (state, action) => {
            state.errorInfo = action.payload as string;
            state.loadingInfo = false
        })
    }
})

export default tvSeriesSlice.reducer
export const { changeTvSeriesPageNumber } = tvSeriesSlice.actions