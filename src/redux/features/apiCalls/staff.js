import { createAsyncThunk } from "@reduxjs/toolkit"
import apiCall from "../../../utils/apiCall"
import { domain } from "../../../config/api"

const staffApiCall = {
  create: (auth, payload) => {
    const url = `${domain}/admin/staff`
    const method = 'POST'
    return apiCall(method, auth, url, payload)
  }
}

const staffAsyncThunk = {
  create: createAsyncThunk(
    'CREATE_STAFF',
    staffApiCall.create
  )
}

export const { create } = staffAsyncThunk
