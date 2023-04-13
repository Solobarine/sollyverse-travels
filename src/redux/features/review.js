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
      if (actions.payload.error) {
        state.top.item = []
        state.top.status = 'Failed'
        state.top.error = actions.payload.error
        return
      } else {
        state.top.item = actions.payload.reviews
        state.top.status = 'Success'
        state.top.error = []
        return
      }
    },
    [showFive.rejected]: (state) => {
      state.top.status = 'Failed'
    },
    [showAll.pending]: (state) => {
      state.reviews.status = 'Pending'
    },
    [showAll.fulfilled]: (state, actions) => {
      if (actions.payload.error) {
        state.reviews.item = []
        state.reviews.status = 'Failed'
        state.reviews.error = actions.payload.error
        return
      } else {
        state.reviews.item = actions.payload.reviews
        state.reviews.status = 'Success'
        state.reviews.error = []
        return
      }
    },
    [showAll.rejected]: (state) => {
      state.reviews.status = 'Failed'
    }
  }
})

export default reviewSlice.reducer
