import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { JsonPlaceholderUserType } from "../hooks/useJsonPlaceholderApi";

/**
 * Slice'ımızın yöneteceği (tutacağı) değerini türünü
 * belirtiyoruz. Bu tür hem reducer'ların state parametresinde
 * hem store objesinin içerisinde hem de bu state'i kullanan
 * diğer componentlerde kullanılacak.
 */
export type JHolderUserStateType = {
  users: JsonPlaceholderUserType[] | null;
};

const initialState: JHolderUserStateType = {
  users: null,
};

export const jsonplaceholderUserSlice = createSlice({
  name: "jsonplaceholderUserSlice",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<JsonPlaceholderUserType[]>) => {
      state.users = action.payload;
    },
    removeUsers: (state) => {
      state.users = [];
    },
  },
});

export const { removeUsers, setUsers } = jsonplaceholderUserSlice.actions;

export default jsonplaceholderUserSlice.reducer;
