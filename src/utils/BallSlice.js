import { createSlice } from "@reduxjs/toolkit";

export const ballSlice = createSlice(
    {
        name: "balls",
        initialState: {
            value: {
                pokeballs: 10,
                greatballs: 0,
                ultraballs: 0,
                masterballs: 0
            }
        },
        reducers: {
            addBalls: (state, action, ballType) => {
                state.value[ballType] = state.value[ballType] + action.payload;
            },
            removeBalls: (state, action, ballType) => {
                state.value[ballType] = state.value[ballType] - action.payload;
            },
            loadBalls: (state, action) => {
                state.value = action.payload;
            }
        }
    }
);

export const {addBalls, removeBalls, loadBalls } = ballSlice.actions;

export default ballSlice.reducer;