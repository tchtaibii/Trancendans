import { createSlice } from "@reduxjs/toolkit";
// import { user } from './StateM'
export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        value: {
            login: "tchtaibi",
            level: 6.9,
            lastGame: 'won',
            avatar: "https://cdn.intra.42.fr/users/d00282f766753d56196928b23a2f9b00/tchtaibi.jpg",
            points: 11660,
        }
    },
    reducers: {
        profile : (state, action) => {
            state.value = action.payload;
        },
    }
});
export default profileSlice.reducer;