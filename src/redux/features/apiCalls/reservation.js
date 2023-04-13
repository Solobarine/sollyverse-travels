import { createAsyncThunk } from "@reduxjs/toolkit"
import { domain, apiCall } from "./country"

const reservationApiCall = {
  create: (payload) => {
    const url = `${domain}/reservation`
    const method = 'POST'
    return apiCall(method, url, payload)
  },
  show: (payload) => {
    const url = `${domain}/reservation/${payload._id}`
    const method = 'POST'
    return apiCall(method, url, payload)
  },
  cancel: (payload) => {
    const url = `${domain}/reservation`
    const method = 'DELETE'
    return apiCall(method, url, payload)
  },
  reservationsData: (payload) => {
    const url = `${domain}/admin/reservations/data`
    const method = 'GET'
    return apiCall(method, url, payload)
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
