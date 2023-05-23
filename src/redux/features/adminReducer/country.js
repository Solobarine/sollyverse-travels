import { createSlice } from "@reduxjs/toolkit"
import countryAsyncThunk from "../apiCalls/country"

const { create, update, adminShowOne, adminShowAll } = countryAsyncThunk

const initialState = {
  country: {
    value: [],
    status: 'idle',
    create_error: '',
    update_error: '',
    error: '',
    message: ''
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
    clear_error: (state, payload) => {
      (payload.payload === 1) ? state.country.create_error = '' : state.country.update_error = ''
    },
    clear_country_message: (state) => {
      state.country.message = ''
    }
  },
  extraReducers: {
    [create.fulfilled]: (state, actions) => {
      if (!actions.payload.ok) {
        state.country.value = []
        state.country.status = 'Failed'
        state.country.message = ''
        state.country.create_error = actions.payload.data.error
        state.country.update_error = ''
        return
      } else {
        state.country.status = 'Success'
        state.country.value = actions.payload.country
        state.country.create_error = ''
        state.country.update_error = ''
        state.country.message = actions.payload.response
        return
      }
    },
    [create.rejected]: (state, actions) => {
      state.country.status = 'Failed'
      state.country.create_error = actions.payload.data.error
      state.country.update_error = ''
    },
    [update.fulfilled]: (state, actions) => {
      if (!actions.payload.ok) {
        state.message = "Country Update Failed"
        state.country.status = 'Failed'
        state.country.update_error = actions.payload.data.error
        state.country.create_error = ''
        return
      } else {
        state.message = actions.payload.message
        state.country.status = 'Success'
        state.country.create_error = ''
        state.country.update_error = ''
        return
      }
    },
    [update.rejected]: (state, actions) => {
      state.country.status = 'Failed'
      state.country.update_error = actions.payload.data.error
      state.country.create_error = ''
    },
    [adminShowOne.pending]: (state) => {
      state.country.status = 'Pending'
    },
    [adminShowOne.fulfilled]: (state,actions) => {
      if (!actions.payload.ok) {
        state.country.value =[]
        state.country.status = 'Failed'
        state.country.error = actions.payload.data.error
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
      state.country.error = actions.payload.data.error
    },
    [adminShowAll.pending]: (state) => {
      state.country.status = 'Failed'
    },
    [adminShowAll.fulfilled]: (state, actions) => {
      if (!actions.payload.ok) {
        state.countries.value =[]
        state.countries.status = 'Failed'
        state.country.error = actions.payload.data.error
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
      state.countries.error = actions.payload.data.error
    }
  }
})

export const { create_country, update_country, clear_error, clear_country_message } = countrySlice.actions

export default countrySlice.reducer
