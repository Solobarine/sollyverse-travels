import { createSlice } from "@reduxjs/toolkit"
import countryAsyncThunk from "../apiCalls/country"

const { create, update, adminShowOne, adminShowAll } = countryAsyncThunk

const initialState = {
  country: {
    value: [],
    status: 'idle',
    error: []
  },
  countries: {
    value: [],
    status: 'idle',
    error: []
  },
  message: [],
  status: 'idle'
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
  },
  extraReducers: {
    [create.fulfilled]: (state, actions) => {
      state.message = actions.payload.message
      state.country.status = 'Success'
      state.country.error = []
    },
    [create.rejected]: (state, actions) => {
      state.country.status = 'Failed'
      state.country.error = actions.payload.error
    },
    [update.fulfilled]: (state, actions) => {
      state.message = actions.payload.message
      state.country.status = 'Success'
      state.country.error = []
    },
    [update.rejected]: (state, actions) => {
      state.country.status = 'Failed'
      state.country.error = actions.payload.error
    },
    [adminShowOne.pending]: (state) => {
      state.country.status = 'Pending'
    },
    [adminShowOne.fulfilled]: (state,actions) => {
      state.country.value = actions.payload.country
      state.country.status = 'Success'
      state.country.error = []
    },
    [adminShowOne.rejected]: (state, actions) => {
      state.country.status = 'Failed'
      state.country.error = actions.payload.error
    },
    [adminShowAll.pending]: (state) => {
      state.country.status = 'Failed'
    },
    [adminShowAll.fulfilled]: (state, actions) => {
      state.countries.value = actions.payload.countries
      state.countries.status = 'Success'
      state.country.error = []
    },
    [adminShowAll.rejected]: (state, actions) => {
      state.countries.status = 'Failed'
      state.countries.error = actions.payload.error
    }
  }
})

export const { create_country, update_country } = countrySlice.actions

export default countrySlice.reducer
