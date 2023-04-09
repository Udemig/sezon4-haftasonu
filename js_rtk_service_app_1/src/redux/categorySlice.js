import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // TODO burayı doldur.
    categories: []
}

export const categorySlice = createSlice({
    name: "categorySlice",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            console.log('>> Set Categories Action Called', state, action)

            state.categories = action.payload
        }
    }
})

export default categorySlice.reducer
export const {
    setCategories
} = categorySlice.actions

