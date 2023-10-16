import { createSlice } from "@reduxjs/toolkit"
import cityAsyncThunk from "../apiCalls/city"

const { create, update, deleteCity, adminShowOne, adminShowAll } = cityAsyncThunk

const initialState = {
  city: {
    value: [],
    error: '',
    message: '',
    status: 'idle'
  },
  cities: {
    value: [],
    error: [],
    status: 'idle'
  }
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    clearCityError: (state) => {
      console.log(state);
      state.city.error = ''
    },
    clearCityMessage: (state) => {
      state.city.message = ''
    },
    clearCitiesError: (state) => {state.cities.error = ''},
    clearCitiesMessage: (state) => {state.cities.message = ''}
  },
  extraReducers: {
    [create.pending]: (state) =>  {
      state.city.status = 'pending'
      state.city.error = ''
    },
    [create.fulfilled]: (state) => {
      state.city.message = 'City created Successfully'
      state.city.status = 'idle'
      state.city.error = ''
    },
    [create.rejected]: (state, actions) => {
      state.city.message = 'Unable to create a City.'
      state.city.status = 'failed'
      state.city.error = actions.error.message
    },
    [update.fulfilled]: (state) => {
      state.city.message =  'City updated Successfully'
      state.city.status = 'idle'
      state.city.error = ''
    },
    [deleteCity.fulfilled]: (state) => {
      state.city.message = 'City deleted Successfully'
      state.city.status = 'idle'
      state.city.error = ''
    },
    [deleteCity.rejected]: (state, actions) => {
      state.city.message = 'failed to delete city'
      state.city.status = 'failed'
      state.city.error = actions.error.message
    },
    [adminShowOne.pending]: (state) => {
      state.city.status = 'pending'
      state.city.error = ''
    },
    [adminShowOne.fulfilled]: (state, actions) => {
      state.city.value = actions.payload.city
      state.city.status = 'idle'
      state.city.error = []
    },
    [adminShowOne.rejected]: (state, actions) => {
      state.city.status = 'failed'
      state.city.error = actions.error.message
    },
    [adminShowAll.pending]: (state) => {
      state.cities.status = 'pending'
      state.cities.error = ''
    },
    [adminShowAll.fulfilled]: (state, actions) => {
      state.cities.value = actions.payload.cities
      state.cities.status = 'idle'
      state.cities.error = ''
    },
    [adminShowAll.rejected]: (state, actions) => {
      state.cities.status = 'failed'
      state.cities.error = actions.error.message
    }
  }
})

export const { clearCitiesError, clearCitiesMessage, clearCityError, clearCityMessage } = citySlice.actions

export default citySlice.reducer
