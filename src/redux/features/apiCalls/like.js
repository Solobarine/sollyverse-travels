import { createAsyncThunk } from "@reduxjs/toolkit"
import { domain, apiCall } from "./country"

const likeApiCall = {
  create: (payload) => {
    const url = `${domain}/likes`
    const method = 'POST'
    return apiCall(method, url, payload)
  },
  cancel: (payload) => {
    const url = `${domain}/delete/${payload._id}`
    const method = 'DELETE'
    return apiCall(method, url, payload)
  }
}

const likeAsyncThunk = {
  createLike: createAsyncThunk(
    'LIKE',
    likeApiCall.create
  ),
  cancelLike: createAsyncThunk(
    'CANCEL_LIKE',
    likeApiCall.delete
  )
}

export default likeAsyncThunk
