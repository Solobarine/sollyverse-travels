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
      if (actions.payload.error) {
        console.log(actions)
        state.countries.item = []
        state.countries.status = 'Failed'
        state.countries.error = actions.payload.error
      } else {
        console.log(actions)
        state.countries.item = actions.payload.countries
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
      if (!actions.payload || actions.payload.error) {
        state.country.item = []
        state.country.status = 'Failed'
        state.country.error = actions.payload.error
      } else {
        state.country.item = initialState
        state.country.item = actions.payload.country
        state.country.cities = actions.payload.cities
        state.country.likes = actions.payload.likes
        state.country.status = 'Success'
        localStorage.setItem("country_id", actions.payload.country._id)
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
