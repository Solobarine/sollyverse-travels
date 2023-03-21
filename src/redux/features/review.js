import { createSlice } from "@reduxjs/toolkit"
import reviewAsyncThunk from "./apiCalls/review"

const { create, showAll, showFive, update } = reviewAsyncThunk

const initialState = {
  review: {
    item: [],
    error: [],
    status: 'idle'
  },
  top: {
    item: [],
    error: [],
    status: 'idle'
  },
  reviews: {
    item: [],
    srror: [],
    status: 'idle'
  }
}

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    create_review: () => create,
    update_review: () => update
  },
  extraReducers: {
    [showFive.pending]: (state) => {
      state.top.status = 'Pending'
    },
    [showFive.fulfilled]: (state, actions) => {
      state.top.item = actions.payload.reviews
      state.top.status = 'Success'
      state.top.error = []
    },
    [showFive.rejected]: (state) => {
      state.top.status = 'Failed'
    },
    [showAll.pending]: (state) => {
      state.reviews.status = 'Pending'
    },
    [showAll.fulfilled]: (state, actions) => {
      state.reviews.item = actions.payload.reviews
      state.reviews.status = 'Success'
      state.reviews.error = []
    },
    [showAll.rejected]: (state) => {
      state.reviews.status = 'Failed'
    }
  }
})

export default reviewSlice.reducer
