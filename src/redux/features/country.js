import { createSlice } from "@reduxjs/toolkit";
import countryAsyncThunk from "./apiCalls/country";

const { showOne, showAll } = countryAsyncThunk

const initialState = {
  countries: {
    value: [],
    status: 'idle',
    error: ''
  },
  country: {
    value: [],
    status: 'idle',
    error: ''
  }
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    show_one: () => showOne,
    show_all: () => showAll
  },
  extraReducers: {
    [showAll.pending]: (state) => {
      state.countries.error = ''
      state.countries.status = 'pending'
    },
    [showAll.fulfilled]: (state, actions) => {
      if (actions.payload.status === 200) {
        state.countries.value = actions.payload.data.countries
        state.status = 'idle'
        state.error = ''
      } else {
        state.countries.status = 'failed'
        state.countries.error = actions.error.message
      }
    },
    [showAll.failed]: (state, actions) => {
      state.countries.error = actions.error.message
      state.countries.status = 'failed'
    },
    [showOne.pending]: (state) => {
      state.country.status = 'pending'
      state.country.error = ''
    },
    [showOne.fulfilled]: (state, actions) => {
      if (actions.payload.status === 200) {
        state.country.value = actions.payload.data
        state.country.status = 'idle'
        state.country.error = ''
      } else {
        state.country.status = 'failed'
      }
    },
    [showOne.failed]: (state, actions) => {
      state.country.status = 'failed'
      state.country.error = actions.error.message
    }
  }
})

export const { show_one, show_all } = countrySlice.actions

export default countrySlice.reducer
