import { createAsyncThunk } from "@reduxjs/toolkit";
import apiCall from "../../../utils/apiCall";
import { domain } from "../../../config/api";

const auth = localStorage.getItem('authentication_token')
const cityApiCall = {
  create: (payload) => {
    const url = `${domain}/city`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  update: (payload) => {
    const url = `${domain}/city/${payload._id}`
    const method = 'PUT'
    return apiCall(method, auth, url, payload)
  },
  deleteCity: (payload) => {
    const url = `${domain}/admin/city/${payload._id}`
    const method = 'DELETE'
    return apiCall(method, auth, url, payload)
  },
  adminShowOne: (payload) => {
    const url = `${domain}/admin/city/${payload._id}`
    const method = 'GET'
    return apiCall(method, auth, url, payload)
  },
  adminShowAll: (payload) => {
    const url = `${domain}/admin/city`
    const method = 'GET'
    return apiCall(method, auth, url, payload)
  },
  showOne: (payload) => {
    const url = `${domain}/city/${payload}`
    const method = 'GET'
    return apiCall(method, auth, url, payload)
  },
  showAll: (payload) => {
    const url = `${domain}/city`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  showFavourite: () => {
    const url = `${domain}/likes/favourites`
    const method = 'GET'
    return apiCall(method, auth, url, {})
  },
  showTopFour: () => {
    const url = `${domain}/city/top`
    const method = 'GET'
    return apiCall(method, auth, url, {})
  },
  showRandomFive: () => {
    const url = `${domain}/city/random`
    const method = 'GET'
    return apiCall(method, auth, url, {})
  },
  showTopCities: (payload) => {
    const url = `${domain}/admin/cities/top`
    const method = 'GET'
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
  showRandomFive: createAsyncThunk(
    'SHOW_RANDOM_FIVE',
    cityApiCall.showRandomFive
  ),
  showTopCities: createAsyncThunk(
    'SHOW_TOP_CITIES',
    cityApiCall.showTopCities
  )
}

export default cityAsyncThunk
