import { createSlice } from '@reduxjs/toolkit';

export interface Theme {
    stateTheme: string;
}

const initialState: Theme = {
    stateTheme: 'Light',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        increment: (state) => {
            state.stateTheme = 'Light';
        },
        decrement: (state) => {
            state.stateTheme = 'Dark';
        },
    },
});

export const { increment, decrement } = themeSlice.actions;

export default themeSlice.reducer;
