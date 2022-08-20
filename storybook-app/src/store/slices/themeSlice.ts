import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeType = "lightMode" | "darkMode";

interface CommonState {
    theme: ThemeType;
}

const initialState: CommonState = {
    theme: "lightMode"
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme(state: CommonState, action: PayloadAction<ThemeType>) {
            state.theme = action.payload;
        }
    }
})

export const { setTheme } = themeSlice.actions;

export default themeSlice;