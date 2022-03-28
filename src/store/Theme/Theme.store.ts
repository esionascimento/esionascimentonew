import { createSlice } from '@reduxjs/toolkit';

export interface Theme {
    stateTheme: string;
}

const initialState: Theme = {
    stateTheme: 'light',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        increment: (state) => {
            state.stateTheme = 'light';
        },
        decrement: (state) => {
            state.stateTheme = 'dark';
        },
    },
});

export const { increment, decrement } = themeSlice.actions;

export default themeSlice.reducer;
