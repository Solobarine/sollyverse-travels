import { createSlice } from "@reduxjs/toolkit"
import cityAsyncThunk from "../apiCalls/city"

const { create, update, deleteCity, adminShowOne, adminShowAll } = cityAsyncThunk

const initialState = {
  city: {
    value: [],
    error: [],
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
    create_city: () => create,
    update_city: () => update,
    delete_city: () => deleteCity
  },
  extraReducers: {
    [create.fulfilled]: (state) => {
      state.city.message = 'City created Successfully'
      state.city.status = 'Success'
      state.city.error = []
    },
    [create.rejected]: (state, actions) => {
      state.city.message = 'Unable to create a City.'
      state.city.status = 'Failed'
      state.city.error = actions.payload.error
    },
    [update.fulfilled]: (state) => {
      state.city.message =  'City updated Successfully'
      state.city.status = 'Success'
      state.city.error = []
    },
    [deleteCity.fulfilled]: (state) => {
      state.city.message = 'City deleted Successfully'
      state.city.status = 'Success'
      state.city.error = []
    },
    [deleteCity.rejected]: (state, actions) => {
      state.city.message = 'Failed to delete city'
      state.city.status = 'Failed'
      state.city.error = actions.payload.error
    },
    [adminShowOne.pending]: (state) => {
      state.city.status = 'Pending'
      state.city.error = []
    },
    [adminShowOne.fulfilled]: (state, actions) => {
      state.city.value = actions.payload.city
      state.city.status = 'Success'
      state.city.error = []
    },
    [adminShowOne.rejected]: (state, actions) => {
      state.city.status = 'Failed'
      state.city.error = actions.payload.error
    },
    [adminShowAll.pending]: (state) => {
      state.cities.status = 'Pending'
      state.cities.error = []
    },
    [adminShowAll.fulfilled]: (state, actions) => {
      state.cities.value = actions.payload.cities
      state.cities.status = 'Success'
      state.cities.error = []
    },
    [adminShowAll.rejected]: (state, actions) => {
      state.cities.status = 'Failed'
      state.cities.error = actions.payload.error
    }
  }
})

export const { create_city, update_city, delete_city } = citySlice.actions

export default citySlice.reducer