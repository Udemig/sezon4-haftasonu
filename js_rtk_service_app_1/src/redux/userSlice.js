import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: null,
    token: null,
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            console.log('>> Set User Data Reducer Function Called', state, action)

            state.userData = action.payload
        },

        /**
         * Aslında bunun diğer anlamı (veya diğer ismi) `logoutUser` diyebiliriz.
         */
        removeUserData: (state) => {
            state.userData = null
        }
    }
})


export const {
    setUserData,
    removeUserData
} = userSlice.actions

export default userSlice.reducer
