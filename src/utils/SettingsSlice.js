import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice(
    {
        name: "settings",
        initialState: {
            value: {
                currentRegionId: 'Kanto',
                currentRouteId: 'kroute1',
                listView: 'pokeDex',
                autoSort: true,
                dexView: 'all',
                dexVersion: 194, // check if users dex is out of date
                spriteChoice: 'back',
                catching: false,
            }
        },
        reducers: {
            changeRouteRegion: (state, action, routeOrRegion) => {
                if(routeOrRegion === "route") {
                    state.value.currentRouteId = action.payload;
                } else {
                    state.value.currentRegionId = action.payload;
                }
            }
        }
    }
);

export const { changeRouteRegion } = settingSlice.actions;
export default settingSlice.reducer;