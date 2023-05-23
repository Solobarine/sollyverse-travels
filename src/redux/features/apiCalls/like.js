import { createAsyncThunk } from "@reduxjs/toolkit"
import domain from "../../../config/config"
import sendData from "../../../hooks/sendData"

const likeApiCall = {
  create: (payload) => {
    const url = `${domain}/likes`
    const method = 'POST'
    return sendData(method, url, payload)
  },
  create_country: (payload) => {
    const url = `${domain}/likes`
    const method = 'POST'
    return sendData(method, url, payload)
  },
  userLikes: (payload) => {
    const url = `${domain}/likes/user`
    const method = 'POST'
    return sendData(method, url, payload)
  },
  cancel: (payload) => {
    const url = `${domain}/likes/${payload._id}`
    const method = 'DELETE'
    return sendData(method, url, payload)
  }
}

const likeAsyncThunk = {
  createLike: createAsyncThunk(
    'LIKE',
    likeApiCall.create
  ),
  createLikeCountry: createAsyncThunk(
    'LIKE',
    likeApiCall.createCountryLike
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
