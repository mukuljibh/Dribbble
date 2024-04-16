import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        GlobalUserDetails: {
            Name: "",
            Username: "",
            Email: "",
            Location: "",
            ImageUrl: "",
        }
    },
    reducers: {
        updateProfile: (state, action) => {
            const userObj = action.payload;
            state.GlobalUserDetails = { ...state.GlobalUserDetails, ...userObj }
            console.log("state", JSON.parse(JSON.stringify(state.GlobalUserDetails))); // Convert to plain JS object
        },
    }
});
export const { updateProfile } = userSlice.actions

export default userSlice.reducer