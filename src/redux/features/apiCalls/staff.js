import { createAsyncThunk } from "@reduxjs/toolkit"
import { domain, apiCall } from "./country"

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

export default staffAsyncThunk
