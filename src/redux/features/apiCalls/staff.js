import { createAsyncThunk } from "@reduxjs/toolkit"
import domain from "../../../config/config"
import { apiCall } from "./country"

const staffApiCall = {
  create: (payload) => {
    const url = `${domain}/admin/staff`
    const method = 'POST'
    return apiCall(method, url, payload)
  }
}

const staffAsyncThunk = {
  create: createAsyncThunk(
    'CREATE_STAFF',
    staffApiCall.create
  )
}

export const { create } = staffAsyncThunk
