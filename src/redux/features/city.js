import { createSlice } from "@reduxjs/toolkit";
import cityAsyncThunk from "./apiCalls/city";
import likeAsyncThunk from "./apiCalls/like"

const { showOne, showAll, showFavourite, showTopFour } = cityAsyncThunk
const { create, cancel } = likeAsyncThunk

const initialState = {
  city: {
    item: [],
    error: [],
    status: 'idle'
  },
  cities: {
    item: [],
    error: [],
    status: 'idle'
  },
  favourites: {
    item: [],
    error: [],
    status: 'idle'
  },
  top: {
    item: [],
    error: [],
    status: 'idle'
  },
  errors: [],
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    show_one: () => showOne,
    show_favourite: () => showFavourite,
    show_top_four: () => showTopFour,
    like: () => create,
    unlike: () => cancel
  },
  extraReducers: {
    [showOne.pending]: (state) => {
      state.city.status = 'Pending'
    },
    [showOne.fulfilled]: (state, actions) => {
      state.city.item = actions.payload.city
      state.city.status = 'Success'
      state.city.error = []
    },
    [showOne.rejected]: (state) => {
      state.city.status = 'Failed'
    },
    [showAll.pending]: (state) => {
      state.cities.status = 'Pending'
    },
    [showAll.fulfilled]: (state, actions) => {
      state.cities.items = actions.payload.cities
      state.cities.status = 'Success'
      state.cities.error = []
    },
    [showAll.rejected]: (state) => {
      state.cities.status = 'Failed'
    },
    [showFavourite.pending]: (state) => {
      state.favourites.status = 'Pending'
    },
    [showFavourite.fulfilled]: (state, actions) => {
      state.favourites.item = actions.payload.cities
      state.favourites.status = 'Success'
      state.favourites.error = []
    },
    [showFavourite.rejected]: (state) => {
      state.favourites.status = 'Failed'
    },
    [showTopFour.pending]: (state) => {
      state.top.status = 'Pending'
    },
    [showTopFour.fulfilled]: (state, actions) => {
      state.top.item = actions.payload.cities
      state.top.status = 'Success'
      state.top.error = []
    },
    [showTopFour.rejected]: (state) => {
      state.top.status = 'Failed'
    },
    [create.fulfilled]: (state, actions) => {
      state.cities.item.map((city) => { // eslint-disable-line
        if (city._id === actions.payload._id) {
          return city.likes +=1
        }
      })
    },
    [cancel.fulfilled]: (state, actions) => {
      state.cities.item.map((city) => { // eslint-disable-line
        if (city._id === actions.payload._id) {
          return city._id -= 1
        }
      })
    }
  }
})

export const { show_one, show_favourite, show_top_four, like, unlike } = citySlice.actions

export default citySlice.reducer
