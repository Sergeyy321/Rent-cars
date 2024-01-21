import { createSlice } from "@reduxjs/toolkit";

import { fetchCars, addFavorite } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const sliceCars = createSlice({
  name: "advert",
  initialState: {
    cars: [],
    favoriteList: [],
    isLoading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addFavorite.pending, handlePending)
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
         const existingCar = state.favoriteList.find(
           (car) => car.id === action.payload.id
         );
  if (!existingCar) {
    state.favoriteList.push(action.payload);
  }
      })
      .addCase(addFavorite.rejected, handleRejected);
  },
});

export const tasksReducer = sliceCars.reducer;
export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  sliceCars.actions;
