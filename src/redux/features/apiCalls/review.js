import {createAsyncThunk} from "@reduxjs/toolkit"
import domain from "../../../config/config"
import { apiCall } from "./country"
import { api } from "../../../utils/api"
import getData from "../../../hooks/getData"
import sendData from "../../../hooks/sendData"

const reviewApiCall = {
  create: (payload) => {
    const url = `${domain}/review`
    const method = 'POST'
    return sendData(method, url, payload)
  },
  showAll: (payload) => {
    const url = `${domain}/review/${payload._id}`
    const method = 'GET'
    return sendData(method, url, payload)
  },
  showOneReview: (payload) => {
    const url = `${domain}/review/city/user/`
    const method = 'POST'
    return sendData(method, url, payload)
  },
  showFive: (payload) => {
    const url = `${domain}/review/city/${payload._id}`
    const method = 'GET'
    console.log(`hit`)
    return getData(method, url, payload)
  },
  update: (payload) => {
    console.log(payload)
    const url = `${domain}/review/${payload._id}`
    const method = 'PATCH'
    return sendData(method, url, payload)
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
  showOneReview: createAsyncThunk(
    'SOW_ONE_REVIEW',
    reviewApiCall.showOneReview
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
