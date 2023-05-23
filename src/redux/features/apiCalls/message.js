import {createAsyncThunk} from "@reduxjs/toolkit"
import domain from "../../../config/config"
import sendData from "../../../hooks/sendData"

const messageApiCall = {
  create: (payload) => {
    const url = `${domain}/admin/messages`
    const method = 'POST'
    return sendData(method, url, payload)
  },
  adminShowMessages: (payload) => {
    const url = `${domain}/admin/messages/${payload._id}`
    const method = 'GET'
    return sendData(method, url, payload)
  },
  adminShowOne: (payload) => {
    const url = `${domain}/admin/messages/${payload._id}`
    const method = 'POST'
    return sendData(method, url, payload)
  },
  view: (payload) => {
    const url = `${domain}/messages/${payload._id}`
    const method = 'POST'
    return sendData(method, url, payload)
  },
  markAsRead: (payload) => {
    const url = `${domain}/messages/${payload._id}`
    const method = 'POST'
    return sendData(method, url, payload)
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
