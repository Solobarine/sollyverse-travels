import {createAsyncThunk} from "@reduxjs/toolkit"
import apiCall from "../../../utils/apiCall"
import { domain } from "../../../config/api"

const auth = localStorage.getItem('authentication_token')

const reviewApiCall = {
  create: (payload) => {
    const url = `${domain}/review`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  showAll: (payload) => {
    const url = `${domain}/review/${payload._id}`
    const method = 'GET'
    return apiCall(method, auth, url, payload)
  },
  showFive: (payload) => {
    const url = `${domain}/review/${payload}`
    const method = 'GET'
    return apiCall(method, auth, url, {})
  },
  update: (payload) => {
    const url = `${domain}/review/${payload._id}`
    const method = 'PUT'
    return apiCall(method, auth, url, payload)
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
