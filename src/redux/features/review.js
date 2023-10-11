import { createSlice } from "@reduxjs/toolkit"
import reviewAsyncThunk from "./apiCalls/review"

const { create, showAll, showFive } = reviewAsyncThunk

const initialState = {
  review: {
    item: [],
    error: '',
    status: 'idle',
    message: ''
  },
  top: {
    item: [],
    error: '',
    status: 'idle'
  },
  reviews: {
    item: [],
    error: '',
    status: 'idle'
  }
}

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    clearReviewMessage: (state) => {
      state.review.message = ''
    },
    clearReviewError: (state) => {
      state.review.error = ''
    },
  },
  extraReducers: {
    [create.pending]: (state) => {
      state.review.status = 'pending'
      state.review.error = ''
    },
    [create.fulfilled]: (state, actions) => {
      if (actions.payload.status === 201) {
        state.review.item.push(actions.payload.data.review)
        state.review.error = ''
        state.review.message = actions.payload.data.message
        state.review.status = 'idle'
      } else {
        state.review.error = actions.payload.error
        state.review.status = 'failed'
      }
    },
    [create.rejected]: (state, actions) => {
      state.review.error = actions.error.message
      state.review.status = 'failed'
    },
    [showFive.pending]: (state) => {
      state.top.status = 'pending'
      state.top.error = ''
    },
    [showFive.fulfilled]: (state, actions) => {
      state.top.item = actions.payload.data.reviews
      state.top.status = 'idle'
      state.top.error = ''
    },
    [showFive.rejected]: (state, actions) => {
      state.top.status = 'failed'
      state.top.error = actions.error.message
    },
    [showAll.pending]: (state) => {
      state.reviews.status = 'pending'
    },
    [showAll.fulfilled]: (state, actions) => {
      state.reviews.item = actions.payload.reviews
      state.reviews.status = 'idle'
      state.reviews.error = ''
    },
    [showAll.rejected]: (state, actions) => {
      state.reviews.status = 'failed'
      state.reviews.error = actions.error.message
    }
  }
})

export const { clearReviewError, clearReviewMessage } = reviewSlice.actions

export default reviewSlice.reducer