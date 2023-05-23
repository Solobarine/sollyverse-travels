import { createSlice } from "@reduxjs/toolkit";
import countryAsyncThunk from "./apiCalls/country";

const { showOne, showAll } = countryAsyncThunk

const initialState = {
  countries: {
    item: [],
    status: 'idle',
    error: []
  },
  country: {
    item: [],
    cities: [],
    likes: 0,
    status: 'idle',
    error: []
  }
}

const countrySlice = createSlice({
  name: 'userCountry',
  initialState,
  reducers: {
    increment: (state) => {
      state.country.likes += 1
    },
    decrement: (state) => {
      state.country.likes -= 1
    }
  },
  extraReducers: {
    [showAll.pending]: (state) => {
      state.countries.status = 'Pending'
    },
    [showAll.fulfilled]: (state, actions) => {
      if (!actions.payload.ok) {
        console.log(actions)
        state.countries.item = []
        state.countries.status = 'Failed'
        state.countries.error = actions.payload.data.error
      } else {
        console.log(actions)
        state.countries.item = actions.payload.data.countries
        state.countries.status = 'Successful'
        state.countries.error = []
      }
    },
    [showAll.failed]: (state) => {
      state.countries.status = 'Failed'
    },
    [showOne.pending]: (state) => {
      state.country.status = 'Pending'
    },
    [showOne.fulfilled]: (state, actions) => {
      if (!actions.payload.ok) {
        state.country.item = []
        state.country.status = 'Failed'
        state.country.error = actions.payload.data.error
      } else {
        state.country.item = initialState
        state.country.item = actions.payload.data.country
        state.country.cities = actions.payload.data.cities
        state.country.likes = actions.payload.data.likes
        state.country.status = 'Success'
        localStorage.setItem("country_id", actions.payload.data.country._id)
        state.country.error = []
      }
    },
    [showOne.failed]: (state) => {
      state.country.status = 'Failed'
    }
  }
})

export const {increment, decrement} = countrySlice.actions

export default countrySlice.reducer
