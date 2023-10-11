import { createAsyncThunk } from "@reduxjs/toolkit"
import apiCall from "../../../utils/apiCall"
import { domain } from "../../../config/api"

const auth = localStorage.getItem('authentication_token')

const likeApiCall = {
  create: (payload) => {
    const url = `${domain}/likes`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  cancel: (payload) => {
    const url = `${domain}/delete/${payload._id}`
    const method = 'DELETE'
    return apiCall(method, auth, url, payload)
  }
}

const likeAsyncThunk = {
  create: createAsyncThunk(
    'LIKE',
    likeApiCall.create
  ),
  cancel: createAsyncThunk(
    'CANCEL_LIKE',
    likeApiCall.delete
  )
}

export default likeAsyncThunk
