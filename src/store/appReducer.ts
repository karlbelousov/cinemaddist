import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  isOpenFilmDetails: boolean;
  filmCountPerStep: number;
}

const initialState: AppState = {
  isOpenFilmDetails: false,
  filmCountPerStep: 5,
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
    incrementFilmCountPerStep(state) {
      state.filmCountPerStep += 5;
    },
  },
});

export const { openFilmDetails, closeFilmDetails, incrementFilmCountPerStep } =
  appReducer.actions;

export default appReducer;
