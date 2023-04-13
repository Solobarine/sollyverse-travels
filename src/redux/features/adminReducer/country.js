import { createSlice } from "@reduxjs/toolkit"
import countryAsyncThunk from "../apiCalls/country"

const { create, update, adminShowOne, adminShowAll } = countryAsyncThunk

const initialState = {
  country: {
    value: [],
    status: 'idle',
    error: [],
    message: ""
  },
  countries: {
    value: [],
    status: 'idle',
    error: []
  }
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
  },
  extraReducers: {
    [create.fulfilled]: (state, actions) => {
      if (actions.payload.error) {
        state.country.value = []
        state.country.status = 'Failed'
        state.country.message = ''
        state.country.error = actions.payload.error
        return
      } else {
        state.country.status = 'Success'
        state.country.value = actions.payload.country
        state.country.error = ''
        state.country.message = actions.payload.response
        return
      }
    },
    [create.rejected]: (state, actions) => {
      state.country.status = 'Failed'
      state.country.error = actions.payload.error
    },
    [update.fulfilled]: (state, actions) => {
      if (actions.payload.error) {
        state.message = "Country Update Failed"
        state.country.status = 'Failed'
        state.country.error = actions.payload.error
        return
      } else {
        state.message = actions.payload.message
        state.country.status = 'Success'
        state.country.error = []
        return
      }
    },
    [update.rejected]: (state, actions) => {
      state.country.status = 'Failed'
      state.country.error = actions.payload.error
    },
    [adminShowOne.pending]: (state) => {
      state.country.status = 'Pending'
    },
    [adminShowOne.fulfilled]: (state,actions) => {
      if (actions.payload.error) {
        state.country.value =[]
        state.country.status = 'Failed'
        state.country.error = actions.payload.error
        return
      } else {
        state.country.value = actions.payload.country
        state.country.status = 'Success'
        state.country.error = []
        return
      }
     
    },
    [adminShowOne.rejected]: (state, actions) => {
      state.country.status = 'Failed'
      state.country.error = actions.payload.error
    },
    [adminShowAll.pending]: (state) => {
      state.country.status = 'Failed'
    },
    [adminShowAll.fulfilled]: (state, actions) => {
      if (actions.payload.error) {
        state.countries.value =[]
        state.countries.status = 'Failed'
        state.country.error = actions.payload.error
        return
      } else {
        state.countries.value = actions.payload.countries
        state.countries.status = 'Success'
        state.country.error = []
        return
      }
    },
    [adminShowAll.rejected]: (state, actions) => {
      state.countries.status = 'Failed'
      state.countries.error = actions.payload.error
    }
  }
})

export const { create_country, update_country } = countrySlice.actions

export default countrySlice.reducer
