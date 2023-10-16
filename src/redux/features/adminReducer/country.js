import { createSlice } from "@reduxjs/toolkit"
import countryAsyncThunk from "../apiCalls/country"

const { create, update, adminShowOne, adminShowAll } = countryAsyncThunk

const initialState = {
  country: {
    value: [],
    status: 'idle',
    error: '',
    message: ''
  },
  countries: {
    value: [],
    status: 'idle',
    error: '',
    message: ''
  }
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    clearCountryError: (state) => {
      console.log(state);
      state.country.error = ''
    },
    clearCountryMessage: (state) => {
      state.country.message = ''
    },
    clearCountriesError: (state) => state.countries.error = '',
    clearCountriesMessage: (state) => state.countries.message = ''
  },
  extraReducers: {
    [create.pending]: (state) => {
      state.country.status = 'pending'
      state.country.error = ''
    },
    [create.fulfilled]: (state, actions) => {
      console.log(actions);
      if (actions.payload.status === 201) {
        state.country.value = actions.payload.data.country
        state.country.message = actions.payload.data.message
        state.country.status = 'idle'
        state.country.error = ''
      } else {
        state.country.message = ''
        state.country.status = 'failed'
        state.country.value = []
        state.country.error = 'An Unexpected Error Occured'
      }
    },
    [create.rejected]: (state, actions) => {
      console.log(actions);
      state.country.status = 'failed'
      state.country.value = []
      state.country.message = ''
      state.country.error = actions.error.message
    },
    [update.fulfilled]: (state, actions) => {
      state.country.message = actions.payload.message
      state.country.status = 'idle'
      state.country.error = ''
    },
    [update.rejected]: (state, actions) => {
      state.country.status = 'failed'
      state.country.error = actions.payload.error
    },
    [adminShowOne.pending]: (state) => {
      state.country.status = 'pending'
      state.country.error = ''
    },
    [adminShowOne.fulfilled]: (state,actions) => {
      state.country.value = actions.payload.country
      state.country.status = 'idle'
      state.country.error = ''
    },
    [adminShowOne.rejected]: (state, actions) => {
      state.country.status = 'failed'
      state.country.error = actions.error.message
    },
    [adminShowAll.pending]: (state) => {
      state.countries.status = 'pending'
      state.countries.error = ''
    },
    [adminShowAll.fulfilled]: (state, actions) => {
      console.log(actions);
      if (actions.payload.status === 200) {
        state.countries.value = actions.payload.data.countries
        state.countries.status = 'idle'
        state.country.error = ''
      } else {
        state.countries.value = []
        state.countries.status = 'failed'
      }
    },
    [adminShowAll.rejected]: (state, actions) => {
      state.countries.status = 'failed'
      state.countries.error = actions.error.message
    }
  }
})

export const {
  clearCountryError,
  clearCountryMessage,
  clearCountriesError,
  clearCountriesMessage
} = countrySlice.actions

export default countrySlice.reducer
