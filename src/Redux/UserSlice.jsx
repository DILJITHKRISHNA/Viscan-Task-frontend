import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    userDetails: {},
}

export const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
            console.log(action.payload,'-----------------------------------');
        },
        resetState: (state) => {
            return INITIAL_STATE;
        }

    }

})

export const { setUserDetails, resetState } = userSlice.actions; 

export default userSlice.reducer;