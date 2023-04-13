import { createAsyncThunk } from "@reduxjs/toolkit";
import { domain, apiCall } from "./country";
import { api } from "../../../utils/api";

const cityApiCall = {
  create: (payload) => {
    const url = `${domain}/city`
    const method = 'POST'
    console.log(payload)
    return apiCall(method, url, payload)
  },
  update: (payload) => {
    const url = `${domain}/city/${payload._id}`
    const method = 'PATCH'
    return apiCall(method, url, payload)
  },
  deleteCity: (payload) => {
    const url = `${domain}/admin/city/${payload._id}`
    const method = 'DELETE'
    return apiCall(method, url, payload)
  },
  adminShowOne: (payload) => {
    const url = `${domain}/city/${payload._id}`
    const method = 'GET'
    return apiCall(method, url, payload)
  },
  adminShowAll: (payload) => {
    const url = `${domain}/city`
    const method = 'GET'
    return apiCall(method, url, payload)
  },
  showOne: (payload) => {
    const url = `${domain}/city/${payload._id}`
    const method = 'GET'
    return api(method, url, payload)
  },
  showAll: (payload) => {
    const url = `${domain}/city`
    const method = 'POST'
    return apiCall(method, url, payload)
  },
  showFavourite: (payload) => {
    const url = `${domain}/city/favourite`
    const method = 'POST'
    return apiCall(method, url, payload)
  },
  showTopFour: (payload) => {
    const url = `${domain}/city/top`
    const method = 'GET'
    return apiCall(method, url, payload)
  },
  showTopCities: (payload) => {
    const url = `${domain}/cities/top`
    const method = 'GET'
    return apiCall(method, url, payload)
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

export const {showAll} = cityAsyncThunk

export default cityAsyncThunk
