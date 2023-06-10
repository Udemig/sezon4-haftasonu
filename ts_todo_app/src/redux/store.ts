import { configureStore } from "@reduxjs/toolkit";

import jholderUserReducer from "./jsonplaceholderUserSlice";

// Burada import ettiğimiz slice'lardan dönen reducer'ları aşağıdaki
// configureStore objesi içerisinde kullanmamız gerekiyor.

configureStore({
  reducer: {
    jholderUser: jholderUserReducer,
  },
});
