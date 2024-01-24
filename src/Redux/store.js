
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { sliceCars } from "./sliceCars";
import { sliceFilter } from "./sliceFilter";


const rootReducer = combineReducers({
  advert: sliceCars.reducer,
  filter: sliceFilter.reducer
});

export const store = configureStore({
  reducer: rootReducer,
});
