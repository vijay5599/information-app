// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
  loading: false,
  error: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    fetchLocationRequest: (state) => {
      state.loading = true;
      state.error = "";
    },
    fetchLocationSuccess: (state, action) => {
      state.location = action.payload;
      state.loading = false;
    },
    fetchLocationFailure: (state) => {
      state.loading = false;
      state.error = "Error fetching location information.";
    },
    clearLocation: (state) => {
      state.location = null;
    },
  },
});

const store = configureStore({
  reducer: locationSlice.reducer,
});

export const {
  fetchLocationRequest,
  fetchLocationSuccess,
  fetchLocationFailure,
  clearLocation,
} = locationSlice.actions;

export default store;
