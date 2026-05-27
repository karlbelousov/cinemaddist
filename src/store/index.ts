import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appReducer";
import { appApi } from "../services/appApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";


export const store = configureStore({
  reducer: {
    [appReducer.name]: appReducer.reducer,
    [appApi.reducerPath]: appApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appApi.middleware),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
