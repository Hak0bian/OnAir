import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITvSeriesReturnType } from "../../../types";
import { ISerachTvSeriesStateType } from "../sliceTypes/stateTypes";
import { searchTvSeriesThunk } from "./SearchTvSeriesThunk";

const initialState: ISerachTvSeriesStateType = {
    searchedSeries: [],
    inputValue: "",
    seriaIsLoading: false,
    seriaNotFound: false,
    error: null,
}

const searchTvSeriesSlice = createSlice({
    name: 'searchTvSeriesSlice',
    initialState,
    reducers: {
        clearTvSeriesResults(state){
            state.searchedSeries = []
        }
    },
    extraReducers(builder) {
        builder
        .addCase(searchTvSeriesThunk.fulfilled, (state, action: PayloadAction<ITvSeriesReturnType>) => {
            state.searchedSeries = action.payload.results
            state.seriaIsLoading = false
            state.seriaNotFound = action.payload.results.length === 0;
        })
        .addCase(searchTvSeriesThunk.pending, (state) => {
            state.seriaIsLoading = true
            state.seriaNotFound = false; 
        })
        .addCase(searchTvSeriesThunk.rejected, (state, action) => {
            state.seriaIsLoading = false
            state.error = action.payload as string;
        })
    },
})

export default searchTvSeriesSlice.reducer
export const { clearTvSeriesResults } = searchTvSeriesSlice.actions