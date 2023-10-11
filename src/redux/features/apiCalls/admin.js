import { createAsyncThunk } from "@reduxjs/toolkit"
import apiCall from "../../../utils/apiCall"
import { domain } from "../../../config/api"

const adminApiCall = {
  signUp: (payload) => {
    const url = `${domain}/admin/register`
    const method = 'POST'
    return apiCall(method, null, url, payload)
  },
  login: (payload) => {
    const url = `${domain}/admin/login`
    const method = 'POST'
    return apiCall(method, null, url, payload)
  },
  verifyToken: () => {
    const url = `${domain}/admin/token/login`
    const method = 'POST'
    const auth = localStorage.getItem('authentication_token')
    return apiCall(method, auth, url, {})
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
  verifyToken: createAsyncThunk(
    'VERIFY_ADMIN_TOKEN',
    adminApiCall.verifyToken
  )
}

export const { login, signUp, verifyToken } = adminAsyncThunk
