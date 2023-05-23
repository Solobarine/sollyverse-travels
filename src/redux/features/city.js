import { createSlice } from "@reduxjs/toolkit";
import cityAsyncThunk from "./apiCalls/city";
import likeAsyncThunk from "./apiCalls/like"

const { showOne, showAll, showFavourite, showTopFour } = cityAsyncThunk
const { createLike, cancelLike } = likeAsyncThunk

const initialState = {
  city: {
    item: [],
    likes: 0,
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
    incrementLike: (state) => {
      state.city.likes += 1
    },
    decrementLike: (state) => {
      // if (state.city.likes === 0) {
      //   return state.city.likes
      // } else {
        state.city.likes -= 1
      // }
    }
  },
  extraReducers: {
    [showOne.pending]: (state) => {
      state.city.status = 'Pending'
    },
    [showOne.fulfilled]: (state, actions) => {
      console.log(actions.payload);
      if (!actions.payload.ok) {
        state.city.error = actions.payload.data.error
        state.city.status = 'Failed'
        state.city.item = []
        return
      } else {
        // console.log(actions.payload)
        state.city.item = actions.payload.data
        localStorage.setItem("city_id", actions.payload._id)
        state.city.likes = parseInt(actions.payload.data.likes) 
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
      if (!actions.payload.ok) {
        state.cities.items = []
        state.cities.status = 'Failed'
        state.cities.error = actions.payload.data.error
      } else {
        state.cities.items = actions.payload.data.cities
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
      if (!actions.payload.ok) {
        state.favourites.item = []
        state.favourites.status = 'Failed'
        state.favourites.error = actions.payload.data.error
    } else {
        state.favourites.item = actions.payload.data.cities
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
      if (!actions.payload.ok) {
        state.top.status = 'Failed'
        state.top.error = actions.payload.data.error
        return
      } else {
        state.top.item = actions.payload.data.cities
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

export const { show_one, show_favourite, show_top_four, incrementLike, decrementLike } = citySlice.actions

export default citySlice.reducer
