import { createAsyncThunk } from "@reduxjs/toolkit";
import { domain, apiCall } from "./country";

const cityApiCall = {
  create: (auth, payload) => {
    const url = `${domain}/admin/city`
    const response = apiCall(auth, url, payload)
    return response
  },
  update: (auth, payload) => {
    const url = `${domain}/admin/city/${payload._id}`
    const method = 'PUT'
    const response = apiCall(method, auth, url, payload)
    return response
  },
  delete: (auth, payload) => {
    const url = `${domain}/admin/city/${payload._id}`
    const method = 'DELETE'
    const response = apiCall(method, auth, url, payload)
    return response
  },
  showOne: (auth, payload) => {
    const url = `${domain}/city/${payload._id}`
    const method = 'POST'
    const response = apiCall(method, auth, url, payload)
    return response
  },
  showAll: (auth, payload) => {
    const url = `${domain}/city`
    const method = 'POST'
    const response = apiCall(method, auth, url, payload)
    return response
  },
  showFavourite: (auth, payload) => {
    const url = `${domain}/city/${payload._id}`
    const method = 'POST'
    const response = apiCall(method, auth, url, payload)
    return response
  },
  showTopFour: (auth, payload) => {
    const url = `${domain}/city/top`
    const method = 'GET'
    const response = apiCall(method, auth, url, payload)
    return response
  }
}

const cityAsyncThunk = {
  showOne,
  showAll,
  showFavourite,
  showTopFour
}
