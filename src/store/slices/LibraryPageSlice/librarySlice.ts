import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMoviesType } from '../../../types';
import { ILibraryStateType } from '../sliceTypes/stateTypes';

const initialState: ILibraryStateType = {
    library: [],
};

const librarySlice = createSlice({
    name: 'librarySlice',
    initialState,
    reducers: {
        setLibrary(state, action: PayloadAction<IMoviesType[]>) {
            state.library = action.payload;
        },
        addToLibrary(state, action: PayloadAction<IMoviesType>) {
            const existingMovies = state.library.find((movie) => movie.id === action.payload.id);
            if (!existingMovies) {
                state.library.push(action.payload);
                localStorage.setItem('library', JSON.stringify(state.library));
            }
        },
        removeFromLibrary(state, action: PayloadAction<number>) {
            state.library = state.library.filter((movie) => movie.id !== action.payload);
            localStorage.setItem('library', JSON.stringify(state.library));
        },
        clearLibrary(state) {
            state.library = []
            localStorage.removeItem('library')
        }
    },
});

export const { setLibrary, addToLibrary, removeFromLibrary, clearLibrary } = librarySlice.actions;
export default librarySlice.reducer;