import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IThemeStateType } from '../sliceTypes/stateTypes';

const initialState: IThemeStateType = {
    mode: (localStorage.getItem('theme') as 'light' | 'dark') || 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.mode = action.payload;
            localStorage.setItem('theme', action.payload);
            document.body.setAttribute('data-theme', action.payload);
        },
        toggleTheme: (state) => {
            const newTheme = state.mode === 'dark' ? 'light' : 'dark';
            state.mode = newTheme;
            localStorage.setItem('theme', newTheme);
            document.body.setAttribute('data-theme', newTheme);
        },
    },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;