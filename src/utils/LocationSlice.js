import { createSlice } from "@reduxjs/toolkit";


export const locationSlice = createSlice(
    {
        name: "location",
        initialState: {
            value: {
                currentRegionId: 'Kanto',
                currentRouteId: 'palletTown',
                type: "town"
            }
        },
        reducers: {
            changeRoute: (state, action, type ) => {
                state.value.currentRouteId = action.payload;
                state.value.type = type;
            }
        }
    }
);

export const { changeRoute } = locationSlice.actions;
export default locationSlice.reducer;