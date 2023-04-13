import { createAsyncThunk } from "@reduxjs/toolkit"
import { domain, apiCall } from "./country"

const adminApiCall = {
  signUp: (payload) => {
    const url = `${domain}/admin/signUp`
    const method = 'POST'
    return apiCall(method, url, payload)
  },
  login: (payload) => {
    const url = `${domain}/admin/login`
    const method = 'POST'
    return apiCall(method, url, payload)
  },
  autoLogin: async (payload) => {
    const url = `${domain}/admin/token/login`

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'authentication_token': payload
      },
    }
    const response = await fetch(url, options).then((admin) => {
      return admin.json()
    }).catch(err => console.log(err))
    return response
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
  ),
  autoLogin: createAsyncThunk(
    'ADMIN_AUTO_LOGIN',
    adminApiCall.autoLogin
  )
}

export const { login, signUp, autoLogin } = adminAsyncThunk
