import { createSlice } from "@reduxjs/toolkit"
import reviewAsyncThunk from "./apiCalls/review"

const { create, showAll, showFive, showOneReview, update } = reviewAsyncThunk

const initialState = {
  review: {
    item: [],
    error: [],
    status: 'idle'
  },
  has_reviewed: {
    value: false,
    review: {}
  },
  top: {
    item: [],
    error: [],
    status: 'idle'
  },
  reviews: {
    item: [],
    error: [],
    status: 'idle'
  }
}

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
      
  },
  extraReducers: {
    [create.pending]: (state) => {
      state.top.status = 'Pending'
    },
    [create.fulfilled]: (state, actions) => {
      if (!actions.payload.ok) {
        state.review.item = []
        state.review.status = 'Failed'
        state.review.error = actions.payload.data.error
        return
      } else {
        state.review.item = actions.payload.data.reviews
        state.review.status = 'Success'
        state.review.error = []
        return
      }
    },
    [create.rejected]: (state) => {
      state.review.status = 'Failed'
    },
    [update.pending]: (state) => {
      state.review.status = 'Pending'
    },
    [update.fulfilled]: (state, actions) => {
      if (!actions.payload.ok) {
        state.review.item = []
        state.review.status = 'Failed'
        state.review.error = actions.payload.data.error
        return
      } else {
        state.review.item = actions.payload.data.reviews
        state.review.status = 'Success'
        state.review.error = []
        return
      }
    },
    [update.rejected]: (state) => {
      state.review.status = 'Failed'
    },
    [showFive.pending]: (state) => {
      state.top.status = 'Pending'
    },
    [showFive.fulfilled]: (state, actions) => {
      if (!actions.payload.ok) {
        console.log(actions.payload)
        state.top.item = []
        state.top.status = 'Failed'
        state.top.error = actions.payload.data.error
        return
      } else {
        state.top.item = actions.payload.data.eviews
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
      if (!actions.payload.ok) {
        state.reviews.item = []
        state.reviews.status = 'Failed'
        state.reviews.error = actions.payload.data.error
        return
      } else {
        state.reviews.item = actions.payload.data.reviews
        state.reviews.status = 'Success'
        state.reviews.error = []
        return
      }
    },
    [showAll.rejected]: (state) => {
      state.reviews.status = 'Failed'
    },
    [showOneReview.fulfilled]: (state, actions) => {
      console.log(actions.payload.error)
      if (!actions.payload.ok) {
        state.has_reviewed.value = false
        state.has_reviewed.review = null
        return
      } else {
        state.has_reviewed.value = true
        state.has_reviewed.review = actions.payload.data.review
        return
      }
    },
    [showOneReview.rejected]: (state) => {
      state.has_reviewed = false
    }
  }
})

export default reviewSlice.reducer
