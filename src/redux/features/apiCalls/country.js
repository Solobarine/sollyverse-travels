import { createAsyncThunk } from "@reduxjs/toolkit";
import { domain } from "../../../config/api";
import apiCall from "../../../utils/apiCall";

const auth = localStorage.getItem('authentication_token')

const countryApiCall = {
  create: async (payload) => {
    const url = `${domain}/country`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  update: async (payload) => {
    const url = `${domain}/admin/update/${payload._id}`
    const method = 'PUT'
    return apiCall(method, auth, url, payload)
  },
  delete: (payload) => {
    const url = `${domain}/admin/country/${payload._id}`
    const method = 'DELETE'
    return apiCall(method, auth, url, payload)
  },
  showAll: async (payload) => {
    const url = `${domain}/country`
    const method = 'GET'
    return apiCall(method, auth, url, payload)
  },
  showOne: async (payload) => {
    console.log(payload);
    const url = `${domain}/country/${payload}`
    const method = 'GET'
    return apiCall(method, auth, url, payload)
  },
  adminShowOne: async (payload) => {
    const url = `${domain}/admin/country/${payload._id}`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  adminShowAll: async (payload) => {
    const url = `${domain}/country`
    const method = 'GET'
    return apiCall(method, auth, url, payload)
  },
  showTopCountries: (payload) => {
    const url = `${domain}/admin/country/top`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  }
}

const countryAsyncThunk = {
  create: createAsyncThunk(
    'CREATE_COUNTRY',
    countryApiCall.create
  ),
  update: createAsyncThunk(
    'UPDATE_COUNTRY',
    countryApiCall.update
  ),
  showAll: createAsyncThunk(
    'QUERY_COUNTRIES',
    countryApiCall.showAll
  ),
  showOne: createAsyncThunk(
    'QUERY_COUNTRY',
    countryApiCall.showOne
  ),
  adminShowOne: createAsyncThunk(
    'ADMIN_SHOW_ONE',
    countryApiCall.adminShowOne
  ),
  adminShowAll: createAsyncThunk(
    'ADMIN_SHOW_ALL',
    countryApiCall.adminShowAll
  ),
  showTopCountries: createAsyncThunk(
    'SHOW_TOP_COUNTRIES',
    countryApiCall.showTopCountries
  )
}

export default countryAsyncThunk
