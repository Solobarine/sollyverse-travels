import { createAsyncThunk } from "@reduxjs/toolkit"
import domain from "../../../config/config"
import getData from "../../../hooks/getData"
import sendData from "../../../hooks/sendData"

const reservationApiCall = {
  create: (payload) => {
    const url = `${domain}/reservations`
    const method = 'POST'
    return sendData(method, url, payload)
  },
  show: (payload) => {
    const url = `${domain}/reservations`
    const method = 'GET'
    return getData(method, url, payload)
  },
  cancel: (payload) => {
    const url = `${domain}/reservations`
    const method = 'DELETE'
    return sendData(method, url, payload)
  },
  reservationsData: (payload) => {
    const url = `${domain}/admin/reservations/data`
    const method = 'GET'
    return sendData(method, url, payload)
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
