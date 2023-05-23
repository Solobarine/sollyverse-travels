import { createAsyncThunk } from "@reduxjs/toolkit";
import domain from "../../../config/config";
import getData from "../../../hooks/getData";
import sendData from "../../../hooks/sendData";

const auth = localStorage.getItem("authentication_token")
export const apiCall = async (method, url, payload) => {

  const options = {
    method,
    headers: {
      'Content-type': 'application/json',
      'authentication_token': auth
     },
    body: JSON.stringify(payload)
  }

  const response = await fetch(url, options).then(data => data.json()).catch(error => console.error(error))
  console.log(response)
  return response
}

const countryApiCall = {
  create: async (payload) => {
    const url = `${domain}/country`
    const method = 'POST'
    return sendData(method, url, payload)
  },
  update: async (payload) => {
    const url = `${domain}/admin/update/${payload._id}`
    const method = 'PUT'
    return sendData(method, url, payload)
  },
  delete: async (payload) => {
    const url = `${domain}/admin/country/${payload._id}`
    const method = 'DELETE'
    return sendData(method, url, payload)
  },
  showAll: async (payload) => {
    const url = `${domain}/country`
    const method = 'GET'
    return sendData(method, url, payload)
  },
  showOne: async (payload) => {
    const url = `${domain}/country/${payload._id}`
    const method = 'GET'
    return getData(method, url, payload)
  },
  adminShowOne: async (payload) => {
    const url = `${domain}/admin/country/${payload._id}`
    const method = 'POST'
    return sendData(method, url, payload)
  },
  adminShowAll: async (payload) => {
    const url = `${domain}/admin/country`
    const method = 'POST'
    return sendData(method, url, payload)
  },
  showTopCountries: (payload) => {
    const url = `${domain}/admin/country/top`
    const method = 'POST'
    return sendData(method, url, payload)
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
