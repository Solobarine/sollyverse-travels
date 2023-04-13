import { createSlice } from "@reduxjs/toolkit";
import cityAsyncThunk from "./apiCalls/city";
import likeAsyncThunk from "./apiCalls/like"

const { showOne, showAll, showFavourite, showTopFour } = cityAsyncThunk
const { createLike, cancelLike } = likeAsyncThunk

const initialState = {
  city: {
    item: [],
    likes: '',
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
  },
  extraReducers: {
    [showOne.pending]: (state) => {
      state.city.status = 'Pending'
    },
    [showOne.fulfilled]: (state, actions) => {
      if (actions.payload === undefined || actions.payload.error) {
        state.city.error = actions.payload.error || undefined
        state.city.status = 'Failed'
        state.city.item = []
        return
      } else {
        state.city.item = actions.payload
        localStorage.setItem("city_id", actions.payload._id)
        state.city.likes = actions.payload.likes
        state.city.status = 'Success'
        state.city.error = []
      }
    },
    [showOne.rejected]: (state) => {
      state.city.status = 'Failed'
    },
    [showAll.pending]: (state) => {
      state.cities.status = 'Pending'
    },
    [showAll.fulfilled]: (state, actions) => {
      if (actions.payload === undefined || actions.payload.error) {
        state.cities.items = []
        state.cities.status = 'Failed'
        state.cities.error = actions.payload.error || undefined
      } else {
        state.cities.items = actions.payload.cities
        state.cities.status = 'Success'
        state.cities.error = []
      }
    },
    [showAll.rejected]: (state) => {
      state.cities.status = 'Failed'
    },
    [showFavourite.pending]: (state) => {
      state.favourites.status = 'Pending'
    },
    [showFavourite.fulfilled]: (state, actions) => {
      if (actions.payload === undefined || actions.payload.error) {
        state.favourites.item = []
        state.favourites.status = 'Failed'
        state.favourites.error = actions.payload.error || undefined
    } else {
        state.favourites.item = actions.payload.cities
        state.favourites.status = 'Success'
        state.favourites.error = []
      }
    },
    [showFavourite.rejected]: (state) => {
      state.favourites.status = 'Failed'
    },
    [showTopFour.pending]: (state) => {
      state.top.status = 'Pending'
    },
    [showTopFour.fulfilled]: (state, actions) => {
      if (actions.payload.error) {
        state.top.status = 'Failed'
        state.top.error = actions.payload.error
        return
      } else {
        state.top.item = actions.payload.cities
        state.top.status = 'Success'
        state.top.error = []
        return
      }
    },
    [showTopFour.rejected]: (state) => {
      state.top.status = 'Failed'
    },
    [createLike.fulfilled]: (state, actions) => {
      state.cities.item.map((city) => { // eslint-disable-line
        if (city._id === actions.payload._id) {
          return city.likes +=1
        }
      })
    },
    [cancelLike.fulfilled]: (state, actions) => {
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
