import { createAsyncThunk } from "@reduxjs/toolkit";
import { domain, apiCall } from "./country";

const cityApiCall = {
  create: (auth, payload) => {
    const url = `${domain}/admin/city`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  update: (auth, payload) => {
    const url = `${domain}/admin/city/${payload._id}`
    const method = 'PUT'
    return apiCall(method, auth, url, payload)
  },
  deleteCity: (auth, payload) => {
    const url = `${domain}/admin/city/${payload._id}`
    const method = 'DELETE'
    return apiCall(method, auth, url, payload)
  },
  adminShowOne: (auth, payload) => {
    const url = `${domain}/admin/city/${payload._id}`
    const method = 'GET'
    return apiCall(method, auth, url, payload)
  },
  adminShowAll: (auth, payload) => {
    const url = `${domain}/admin/city`
    const method = 'GET'
    return apiCall(method, auth, url, payload)
  },
  showOne: (auth, payload) => {
    const url = `${domain}/city/${payload._id}`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  showAll: (auth, payload) => {
    const url = `${domain}/city`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  showFavourite: (auth, payload) => {
    const url = `${domain}/city/${payload._id}`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  showTopFour: (auth, payload) => {
    const url = `${domain}/city/top`
    const method = 'GET'
    return apiCall(method, auth, url, payload)
  },
  showTopCities: (auth, payload) => {
    const url = `${domain}/admin/citirs/top`
    const method = 'GeT'
    return apiCall(method, auth, url, payload)
  }
}

const cityAsyncThunk = {
  create: createAsyncThunk(
    'CREATE_CITY',
    cityApiCall.create
  ),
  update: createAsyncThunk(
    'UPDATE_CITY',
    cityApiCall.update
  ),
  deleteCity: createAsyncThunk(
    'DELETE_CITY',
    cityApiCall.delete
  ),
  adminShowOne: createAsyncThunk(
    'ADMIN_SHOW_ONE',
    cityApiCall.adminShowOne
  ),
  adminShowAll: createAsyncThunk(
    'ADMIN_SHOW_ALL',
    cityApiCall.adminShowAll
  ),
  showOne: createAsyncThunk(
    'SHOW_ONE_CITY',
    cityApiCall.showOne
  ),
  showAll: createAsyncThunk(
    'SHOW_ALL',
    cityApiCall.showAll
  ),
  showFavourite: createAsyncThunk(
    'SHOW_FAVOURITE',
    cityApiCall.showFavourite
  ),
  showTopFour: createAsyncThunk(
    'SHOW_TOP_FOUR',
    cityApiCall.showTopFour
  ),
  showTopCities: createAsyncThunk(
    'SHOW_TOP_CITIES',
    cityApiCall.showTopCities
  )
}

export default cityAsyncThunk
