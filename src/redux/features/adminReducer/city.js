import { createSlice } from "@reduxjs/toolkit"
import cityAsyncThunk from "../apiCalls/city"

const { create, update, deleteCity, adminShowOne, adminShowAll } = cityAsyncThunk

const initialState = {
  city: {
    value: [],
    create_error: '',
    update_error: '',
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
    delete_city: () => deleteCity,
    clear_city_error: (state, payload) => {
      console.log(payload);
      (payload.payload === 1) ? state.city.create_error = '' : state.city.update_error = ''
    },
    clear_message: (state, payload) => {
      state.city.message = ''
    }
  },
  extraReducers: {
    [create.fulfilled]: (state, actions) => {
      console.log(actions)
      if (!actions.payload.ok) {
        // state.city.message = 'Unable to create City'
        state.city.status = 'Failed'
        state.city.create_error = actions.payload.data.error
        state.city.update_error = ''
        return
      } else {
        state.city.message = 'City created Successfully'
        state.city.status = 'Success'
        state.city.create_error = ''
        state.city.update_error = ''
        return
      }
    },
    [create.rejected]: (state, actions) => {
      state.city.status = 'Failed'
      state.city.create_error = actions.payload.data.error
      state.city.update_error = ''
    },
    [update.fulfilled]: (state, actions) => {
      if(actions.payload.ok) {
        state.city.message =  'City updated Successfully'
        state.city.status = 'Success'
        state.city.create_error = ''
        state.city.update_error = ''
      } else {
        state.city.message =  ''
        state.city.status = 'Failed'
        state.city.create_error = ''
        state.city.update_error = actions.payload.data.error
      }
    },
    [update.rejected]: (state, actions) => {
      state.city.message =  ''
      state.city.status = 'Failed'
      state.city.create_error = ''
      state.city.update_error = actions.payload.data.error
    },
    [deleteCity.fulfilled]: (state, actions) => {
      if (!actions.payload.ok) {
        state.city.message = 'Unable to delete City'
        state.city.status = 'Failed'
        state.city.error = actions.payload.data.error
        return
      } else {
        state.city.message = 'City deleted Successfully'
        state.city.status = 'Success'
        state.city.error = []
        return
      }
    },
    [deleteCity.rejected]: (state, actions) => {
      state.city.message = 'Failed to delete city'
      state.city.status = 'Failed'
      state.city.error = actions.payload.data.error
    },
    [adminShowOne.pending]: (state) => {
      state.city.status = 'Pending'
      state.city.error = []
    },
    [adminShowOne.fulfilled]: (state, actions) => {
      if (!actions.payload.ok) {
        state.city.value = []
        state.city.status = 'Failed'
        state.city.error = actions.payload.data.error
        return
      } else {
        state.city.value = actions.payload.city
        state.city.status = 'Success'
        state.city.error = []
        return
      }
    },
    [adminShowOne.rejected]: (state, actions) => {
      state.city.status = 'Failed'
      state.city.error = actions.payload.data.error
    },
    [adminShowAll.pending]: (state) => {
      state.cities.status = 'Pending'
      state.cities.error = []
    },
    [adminShowAll.fulfilled]: (state, actions) => {
      if (!actions.payload.ok) {
        state.cities.value = []
        state.cities.status = 'Failed'
        state.cities.error = actions.payload.data.error
        return
      } else {
        state.cities.value = actions.payload.cities
        state.cities.status = 'Success'
        state.cities.error = []
        return
      }
    },
    [adminShowAll.rejected]: (state, actions) => {
      state.cities.status = 'Failed'
      state.cities.error = actions.payload.data.error
    }
  }
})

export const { create_city, update_city, delete_city, clear_city_error, clear_message } = citySlice.actions

export default citySlice.reducer
