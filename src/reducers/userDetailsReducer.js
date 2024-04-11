import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        userDetails: {
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
            state.userDetails = { ...state.userDetails, ...userObj }
            console.log("state", JSON.parse(JSON.stringify(state.userDetails))); // Convert to plain JS object
        },
    }
});
export const { updateProfile } = userSlice.actions

export default userSlice.reducer