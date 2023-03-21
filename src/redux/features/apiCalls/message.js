import {createAsyncThunk} from "@reduxjs/toolkit"
import { domain, apiCall } from "./country"

const messageApiCall = {
  create: (auth, payload) => {
    const url = `${domain}/admin/messages`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  adminShowMessages: (auth, payload) => {
    const url = `${domain}/admin/messages/${payload._id}`
    const method = 'GET'
    return apiCall(method, auth, url, payload)
  },
  adminShowOne: (auth, payload) => {
    const url = `${domain}/admin/messages/${payload._id}`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  view: (auth, payload) => {
    const url = `${domain}/messages/${payload._id}`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  },
  markAsRead: (auth, payload) => {
    const url = `${domain}/messages/${payload._id}`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  }
}

const messageAsyncThunk = {
  create: createAsyncThunk(
    'CREATE_MESSAGE',
    messageApiCall.create
  ),
  adminShowMessages: createAsyncThunk(
    'ADMIN_SHOW_MeSSAGES',
    messageApiCall.adminShowMessages
  ),
  adminShowOne: createAsyncThunk(
    'SHOW_ONE_MESSAGE',
    messageApiCall.adminShowOne
  ),
  view: createAsyncThunk(
    'VIEW_MESSAGES',
    messageApiCall.view
  ),
  markAsRead: createAsyncThunk(
    'MARK_AS_READ',
    messageApiCall.markAsRead
  )
}

export default messageAsyncThunk
