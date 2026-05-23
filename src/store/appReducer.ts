import { createSlice } from "@reduxjs/toolkit";
import { Filter } from "../types/filter";
import { SortName } from "../const";

export interface AppState {
  isOpenFilmDetails: boolean;
  filmCountPerStep: number;
  selectedFilmId: number;
  activeFilter: Filter;
  activeSort: SortName;
}

const initialState: AppState = {
  isOpenFilmDetails: false,
  filmCountPerStep: 5,
  selectedFilmId: 0,
  activeFilter: "all",
  activeSort: "Default"
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
    addIdSelectedFilmId(state, action) {
      state.selectedFilmId = action.payload;
    },
    changeFilter(state, action) {
      state.activeFilter = action.payload;
      state.filmCountPerStep = 5;
      state.activeSort = "Default";
    },
    changeSort(state, action) {
      state.activeSort = action.payload;
    }
  },
});

export const {
  openFilmDetails,
  closeFilmDetails,
  incrementFilmCountPerStep,
  addIdSelectedFilmId,
  changeFilter,
  changeSort
} = appReducer.actions;

export default appReducer;
