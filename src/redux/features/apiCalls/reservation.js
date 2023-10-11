import { createAsyncThunk } from "@reduxjs/toolkit"
import apiCall from "../../../utils/apiCall"
import { domain } from "../../../config/api"

const auth = localStorage.getItem('authentication_token')

const reservationApiCall = {
  create: (payload) => {
    const url = `${domain}/reservations`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  show: () => {
    const url = `${domain}/reservations`
    const method = 'GET'
    return apiCall(method, auth, url, {})
  },
  cancel: (payload) => {
    const url = `${domain}/reservations/${payload}`
    const method = 'DELETE'
    return apiCall(method, auth, url, {})
  },
  reservationsData: (payload) => {
    const url = `${domain}/admin/reservations/data`
    const method = 'GET'
    return apiCall(method, auth, url, payload)
  }
}

const reservationAsyncThunk = {
  create: createAsyncThunk(
    'CREATE_RESERVATION',
    reservationApiCall.create
  ),
  show: createAsyncThunk(
    'SHOW_RESERVATION',
    reservationApiCall.show
  ),
  cancel: createAsyncThunk(
    'CANCEL_RESERVATION',
    reservationApiCall.cancel
  ),
  reservationsData: createAsyncThunk(
    'RECENT_RESERVATION',
    reservationApiCall.reservationsData
  )
}

export default reservationAsyncThunk
