import { createAsyncThunk } from "@reduxjs/toolkit"
import { domain, apiCall } from "./country"

const likeApiCall = {
  create: (auth, payload) => {
    const url = `${domain}/likes`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  cancel: (auth, payload) => {
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
