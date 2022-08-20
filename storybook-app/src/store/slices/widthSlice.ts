import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const viewportWidth: number = window.innerHeight;

interface CommonState {
    viewportWidth: number;
}

const initialState: CommonState = {
    viewportWidth
}

export const widthSlice = createSlice({
    name: "viewportWidth",
    initialState,
    reducers: {
        setViewportWidth(state: CommonState, action: PayloadAction<number>) {
            state.viewportWidth = action.payload;
        }
    }
})

export const { setViewportWidth } = widthSlice.actions;

export default widthSlice;