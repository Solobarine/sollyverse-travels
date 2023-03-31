import { createAsyncThunk } from "@reduxjs/toolkit";

export const domain = process.env.DOMAIN_NAME

export const apiCall = async (method, auth, url, payload) => {
  let headers
  (auth) ? headers = {
    'Content-type': 'application/json',
    'authentication_token': auth
  } : headers = { 'Content-type': 'application/json' }
  const options = {
    method,
    headers,
body: JSON.stringify(payload)
  }

  const response = await fetch(url, options).then(data => JSON.parse(data)).catch(error => console.error(error))
  return response
}

const countryApiCall = {
  create: async (auth, payload) => {
    const url = `${domain}/admin/country`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  update: async (auth, payload) => {
    const url = `${domain}/admin/update/${payload._id}`
    const method = 'PUT'
    return apiCall(method, auth, url, payload)
  },
  delete: (auth, payload) => {
    const url = `${domain}/admin/country/${payload._id}`
    const method = 'DELETE'
    return apiCall(method, auth, url, payload)
  },
  showAll: async (auth, payload) => {
    const url = `${domain}/country`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  showOne: async (auth, payload) => {
    const url = `${domain}/country/${payload._id}`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  adminShowOne: async (auth, payload) => {
    const url = `${domain}/admin/country/${payload._id}`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  adminShowAll: async (auth, payload) => {
    const url = `${domain}/admin/country`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  showTopCountries: (auth, payload) => {
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
