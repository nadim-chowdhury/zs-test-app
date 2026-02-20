import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "@/services/baseApi";
import counterReducer from "./slices/counterSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
