import { createSlice } from "@reduxjs/toolkit";
import countryAsyncThunk from "./apiCalls/country";

const { showOne, showAll } = countryAsyncThunk

const initialState = {
  countries: {
    item: [],
    error: []
  },
  country: {
    item: [],
    error: []
  },
  status: 'idle',
  error: []
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    show_one: () => showOne,
    show_all: () => showAll
  },
  extraReducers: {
    [showAll.pending]: (state) => state.status = 'Pending',
    [showAll.fulfilled]: (state, actions) => {
      state.countries = actions.payload.countries
      state.status = 'Successful'
      state.error = []
    },
    [showAll.failed]: (state) => state.status = 'Failed',

    [showOne.pending]: (state) => state.status = 'Pending',
    [showOne.fulfilled]: (state, actions) => {
      state.country = actions.payload.country
      state.status = 'Success'
      state.error = []
    },
    [showOne.failed]: (state) => state.status = 'Failed'
  }
})

export const { show_one, show_all } = countrySlice.actions

export default countrySlice.reducer
