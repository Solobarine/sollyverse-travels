import { createSlice } from "@reduxjs/toolkit";
import { create, update } from "./apiCalls/country";

const initialState = {
  countries: [],
  country: [],
  status: 'idle',
  error: []
}

const countrySlice = createSlice({
  name: 'country',
  initialState: initialState,
  extraReducers: {
    [showAll.pending]: (state) => state.status = 'Pending',
    [showAll.fulfilled]: (state, actions) => {
      state.countries = actions.payload.countries
      state.country = state.country
      state.status = 'Successful'
      state.error = []
    },
    [showAll.failed]: (state) => state.status = 'Failed',

    [showOne.pending]: (state) => state.status = 'Pending',
    [showOne.fulfilled]: (state, actions) => {
      state.countries = state.countries
      state.country = actions.payload.country
      state.status = 'Success'
      state.error = []
    },
    [showOne.failed]: (state) => state.status = 'Failed'
  }
})

export default countrySlice.reducer
