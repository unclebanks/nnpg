import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice(
    {
        name: "currency",
        initialState: {
            value: {
                pokeCoins: 1000,
                catchCoins: 0,
                battleCoins: 0,
                evoCoins: 0
            }
        },
        reducers: {
            addCoins: (state, action, coinType) => {
                state.value[coinType] = state.value[coinType] + action.payload;
            },
            removeCoins: (state, action, coinType) => {
                state.value[coinType] = state.value[coinType] - action.payload;
            },
            loadCoins: (state, action) => {
                state.value = action.payload;
            }
        }
    }
);

export const {addCoins, removeCoins, loadCoins } = currencySlice.actions;

export default currencySlice.reducer;