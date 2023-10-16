import { createSlice } from "@reduxjs/toolkit";
import cityAsyncThunk from "./apiCalls/city";
import likeAsyncThunk from "./apiCalls/like"

const { showOne,
  showAll,
  showFavourite,
  showTopFour,
  showRandomFive
} = cityAsyncThunk
const { create, cancel } = likeAsyncThunk

const initialState = {
  city: {
    value: [],
    error: '',
    status: 'idle'
  },
  cities: {
    value: [],
    error: '',
    status: 'idle'
  },
  favourites: {
    value: [],
    error: '',
    status: 'idle'
  },
  top: {
    value: [],
    error: '',
    status: 'idle'
  },
  random: {
    value: [],
    error: '',
    status: 'idle'
  }
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    show_one: () => showOne,
    show_favourite: () => showFavourite,
    show_top_four: () => showTopFour,
    like: () => create,
    unlike: () => cancel,
    updateLike: (state, action) => {
      console.log(action)
      state.city.value.likes += action.payload
    }
  },
  extraReducers: {
    [showOne.pending]: (state) => {
      state.city.status = 'pending'
      state.city.error = ''
    },
    [showOne.fulfilled]: (state, actions) => {
      if (actions.payload.status === 200) {
        state.city.value = actions.payload.data.city
        state.city.status = 'idle'
        state.city.error = ''
      } else {
        state.city.status = 'failed'
      }
    },
    [showOne.rejected]: (state, actions) => {
      state.city.status = 'failed'
      state.city.error = actions.error.message
    },
    [showAll.pending]: (state) => {
      state.cities.status = 'pending'
    },
    [showAll.fulfilled]: (state, actions) => {
      state.cities.items = actions.payload.cities
      state.cities.status = 'idle'
      state.cities.error = []
    },
    [showAll.rejected]: (state) => {
      state.cities.status = 'failed'
    },
    [showFavourite.pending]: (state) => {
      state.favourites.status = 'pending'
      state.favourites.error = ''
    },
    [showFavourite.fulfilled]: (state, actions) => {
      state.favourites.value = actions.payload.data.favourites
      state.favourites.status = 'success'
      state.favourites.error = ''
    },
    [showFavourite.rejected]: (state, actions) => {
      state.favourites.status = 'failed'
      state.favourites.error = actions.error.message
    },
    [showTopFour.pending]: (state) => {
      state.top.status = 'pending'
      state.top.error = ''
    },
    [showTopFour.fulfilled]: (state, actions) => {
      state.top.value = actions.payload.data
      state.top.status = 'idle'
      state.top.error = []
    },
    [showTopFour.rejected]: (state, actions) => {
      state.top.status = 'failed'
      state.top.error = actions.error.message
    },
    [showRandomFive.pending]: (state) => {
      state.random.status = 'pending'
      state.random.error = ''
    },
    [showRandomFive.fulfilled]: (state, actions) => {
      if (actions.payload.status === 200) {
        state.random.value = actions.payload.data.cities
        state.random.status = 'idle'
        state.random.error = ''
      } else {
        state.random.status = 'failed'
      }
    },
    [showRandomFive.rejected]: (state, actions) => {
      state.random.status = 'failed'
      state.random.error = actions.error.message
    }
  }
})

export const { show_one, show_favourite, show_top_four, like, unlike, updateLike } = citySlice.actions

export default citySlice.reducer
