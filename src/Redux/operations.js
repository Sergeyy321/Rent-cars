import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://6526d426917d673fd76d1134.mockapi.io";


export const fetchCars = createAsyncThunk(
  "adverts/fetchCars",

  async (page, { rejectWithValue }) => {
    try {
      if (page === undefined) {
        page = 1
      } else if (page == []) {
        return console.log('error');
      }
      const response = await axios.get(
        `/Contacts/adverts?&page=${page}&limit=12`
      );

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);


export const addFavorite = createAsyncThunk(
  "adverts/addFavorite",
  async (cars, thunkAPI) => {
    try {
      const response = await axios.post("/Contacts/adverts", cars);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);