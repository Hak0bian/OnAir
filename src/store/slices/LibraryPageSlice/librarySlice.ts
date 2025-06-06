import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDetailsByIdType } from '../../../types';
import { ILibraryStateType } from '../sliceTypes/stateTypes';

const initialState: ILibraryStateType = {
    moviesInibrary: [],
    seriesInLibrary: []
};

const librarySlice = createSlice({
    name: 'librarySlice',
    initialState,
    reducers: {
        setMovieinLibrary(state, action: PayloadAction<IDetailsByIdType[]>) {
            state.moviesInibrary = action.payload;
        },
        addMovieToLibrary(state, action: PayloadAction<IDetailsByIdType>) {
            const existingMovies = state.moviesInibrary.find((movie) => movie.id === action.payload.id);
            if (!existingMovies) {
                state.moviesInibrary.push(action.payload);
                localStorage.setItem('libraryMovies', JSON.stringify(state.moviesInibrary));
            }
        },
        removeMovieFromLibrary(state, action: PayloadAction<number>) {
            state.moviesInibrary = state.moviesInibrary.filter((movie) => movie.id !== action.payload);
            localStorage.setItem('libraryMovies', JSON.stringify(state.moviesInibrary));
        },

        setSeriainLibrary(state, action: PayloadAction<IDetailsByIdType[]>) {
            state.seriesInLibrary = action.payload;
        },
        addSeriaToLibrary(state, action: PayloadAction<IDetailsByIdType>) {
            const existingSeries = state.seriesInLibrary.find((movie) => movie.id === action.payload.id);
            if (!existingSeries) {
                state.seriesInLibrary.push(action.payload);
                localStorage.setItem('librarySeries', JSON.stringify(state.seriesInLibrary));
            }
        },
        removeSeriaFromLibrary(state, action: PayloadAction<number>) {
            state.seriesInLibrary = state.seriesInLibrary.filter((movie: {id: number}) => movie.id !== action.payload);
            localStorage.setItem('librarySeries', JSON.stringify(state.seriesInLibrary));
        },
        clearLibrary(state) {
            state.moviesInibrary = []
            state.seriesInLibrary = []
            localStorage.removeItem('libraryMovies')
            localStorage.removeItem('librarySeries')
        }
    },
});

export default librarySlice.reducer;
export const { setMovieinLibrary, addMovieToLibrary, removeMovieFromLibrary, 
    setSeriainLibrary, addSeriaToLibrary, removeSeriaFromLibrary, clearLibrary } = librarySlice.actions;