import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://6526d426917d673fd76d1134.mockapi.io";


export const fetchCars = createAsyncThunk(
  "adverts/fetchCars",

  async ({ page, make }, { rejectWithValue }) => {
    try {
      if (page === undefined) {
        page = 1;
      } 
      const response = await axios.get(
        `/Contacts/adverts?&page=${page}&limit=12&make=${make}`
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


export const deleteFavorite = createAsyncThunk(
  "adverts/deleteFavorite",
  async (contactsId, thunkAPI) => {
    try {
      await axios.delete(`/Contacts/adverts/${contactsId}`);
      return contactsId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
