import {createAsyncThunk} from "@reduxjs/toolkit"
import { domain, apiCall } from "./country"

const reviewApiCall = {
  create: (payload) => {
    const url = `${domain}/review`
    const method = 'POST'
    return apiCall(method, url, payload)
  },
  showAll: (payload) => {
    const url = `${domain}/review/${payload._id}`
    const method = 'POST'
    return apiCall(method, url, payload)
  },
  showFive: (payload) => {
    const url = `${domain}/review/${payload._id}`
    const method = 'POST'
    return apiCall(method, url, payload)
  },
  update: (payload) => {
    const url = `${domain}/review/${payload._id}`
    const method = 'PUT'
    return apiCall(method, url, payload)
  }
}

const reviewAsyncThunk = {
  create: createAsyncThunk(
    'CREATE_RESERVATION',
    reviewApiCall.create
  ),
  showAll: createAsyncThunk(
    'SHOW_ALL_REVIEWS',
    reviewApiCall.showAll
  ),
  showFive: createAsyncThunk(
    'SHOW_FIVE',
    reviewApiCall.showFive
  ),
  update: createAsyncThunk(
    'UPDATE_REVIEW',
    reviewApiCall.update
  )
}

export default reviewAsyncThunk
