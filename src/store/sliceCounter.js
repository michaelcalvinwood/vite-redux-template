import { createSlice } from '@reduxjs/toolkit';

const sliceCounter = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        counterIncrement: (state, action) => {
            state = state + 1;
            return state;
        },
        counterDecrement: (state, action) => {
            state = state - 1;
            return state;
        },
        counterSetValue: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

export const {counterIncrement, counterDecrement, counterSetValue } = sliceCounter.actions;

export default sliceCounter.reducer;