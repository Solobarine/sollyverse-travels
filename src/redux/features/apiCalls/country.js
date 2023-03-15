import { createAsyncThunk } from "@reduxjs/toolkit";

export const domain = process.env.DOMAIN_NAME

export const apiCall = async (method, auth, url, payload) => {
  const options = {
    method,
    headers: {
      'Conternt-type': 'application/json',
      'authentication_token': auth
    },
body: JSON.stringify(payload)
  }

  const response = await fetch(url, options).then(data => JSON.parse(data)).catch(error => console.error(error))
  return response
}

const countryApiCall = {
  create: (auth, payload) => {
    const url = `${domain}/admin`
    const method = 'POST'
    const response = apiCall(method, auth, url, payload)
    return response
  },
  update: async (auth, payload) => {
    const url = `${domain}/admin/update/${payload._id}`
    const method = 'PUT'
    const response = apiCall(method, auth, url, payload)
    return response
  },
  showAll: async (auth, payload) => {
    const url = `${domain}/country`
    const method = 'POST'
    const response = apiCall(method, auth, url, payload)
    return response
  },
  showOne: (auth, payload) => {
    const url = `${domain}/country/${payload._id}`
    const method = 'POST'
    const response = apiCall(method, auth, url, payload)
    return response
  }
}

const countryAsyncThunk = {
  showAll: createAsyncThunk(
    'QUERY_COUNTRIES',
    countryApiCall.showAll
  ),
  showOne: createAsyncThunk(
    'QUERY_COUNTRY',
    countryApiCall.showOne
  )
}

export const {create, update} = countryApiCall


export default countryAsyncThunk
