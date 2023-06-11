import { configureStore } from "@reduxjs/toolkit";

import jholderUserReducer from "./jsonplaceholderUserSlice";

// Burada import ettiğimiz slice'lardan dönen reducer'ları aşağıdaki
// configureStore objesi içerisinde kullanmamız gerekiyor.

const store = configureStore({
  reducer: {
    jholderUser: jholderUserReducer,
  },
});

/**
 * Redux'ın oluşturduğu state objesinin type'ını oluşturuyoruz.
 * Bu type'ı diğer componentlerde useSelector() hook'u içerisinde kullanacağız.
 */
export type RootState = ReturnType<typeof store.getState>;

console.log(">> GETSTATE", store.getState()); // {jholderUser: {...}}
// >> GETSTATE {jholderUser: {…}}

export default store;
