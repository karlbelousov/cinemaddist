import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  isOpenFilmDetails: boolean;
}

const initialState: AppState = {
  isOpenFilmDetails: false,
};

export const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    openFilmDetails(state) {
      state.isOpenFilmDetails = true;
      document.body.classList.add("hide-overflow");
    },
    closeFilmDetails(state) {
      state.isOpenFilmDetails = false;
      document.body.classList.remove("hide-overflow");
    },
  },
});

export const { openFilmDetails, closeFilmDetails } = appReducer.actions;
export default appReducer;
