import { createAsyncThunk } from "@reduxjs/toolkit"
import { domain, apiCall } from "./country"

const adminApiCall = {
  signUp: (auth, payload) => {
    const url = `${domain}/admin/signUp`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  login: (auth, payload) => {
    const url = `${domain}/admin/login`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  }
}

const adminAsyncThunk = {
  signUp: createAsyncThunk(
    'ADMIN_SIGN_UP',
    adminApiCall.signUp
  ),
  login: createAsyncThunk(
    'ADMIN_LOGIN',
    adminApiCall.login
  )
}

export const { login, signUp } = adminAsyncThunk
