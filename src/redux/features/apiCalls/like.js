import { createAsyncThunk } from "@reduxjs/toolkit"
import domain from "../../../config/config"
import { apiCall } from "./country"

const likeApiCall = {
  create: (payload) => {
    const url = `${domain}/likes`
    const method = 'POST'
    return apiCall(method, url, payload)
  },
  userLikes: (payload) => {
    const url = `${domain}/likes/user`
    const method = 'POST'
    return apiCall(method, url, payload)
  },
  cancel: (payload) => {
    const url = `${domain}/likes/${payload._id}`
    const method = 'DELETE'
    return apiCall(method, url, payload)
  }
}

const likeAsyncThunk = {
  createLike: createAsyncThunk(
    'LIKE',
    likeApiCall.create
  ),
  userLike: createAsyncThunk(
    'USER_LIKES',
    likeApiCall.userLikes
  ),
  cancelLike: createAsyncThunk(
    'CANCEL_LIKE',
    likeApiCall.delete
  )
}

export default likeAsyncThunk
