import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice(
    {
        name: "settings",
        initialState: {
            value: {
                listView: 'pokeDex',
                autoSort: true,
                dexView: 'all',
                dexVersion: 194, // check if users dex is out of date
                spriteChoice: 'back',
                catching: false,
            }
        }
    }
);

export default settingSlice.reducer;