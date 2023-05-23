import { createAsyncThunk } from "@reduxjs/toolkit"
import domain from "../../../config/config"

const userApiCalls = {
  register: async (payload) => {
    const url = `${domain}/register`

    const options = {
      method: 'POST',
      headers: {
        "Content-type": 'application/json'
      },
      body: JSON.stringify(payload)
    }

    try {
      const response = await fetch(url, options)
      console.log(response)
      const { status, ok } = response
      const data = await response.json()
      console.log(data)
      return {status, ok, data}
    } catch(error) {
      return { ok: false, data: { error: `Server down. Try again later` } }
    }
  },
  login: async (payload) => {
    const url = `${domain}/login`

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    }

    try {
      const response = await fetch(url, options)
      console.log(response)
      const { status, ok } = response
      const data = await response.json()
      console.log(data)
      return {status, ok, data}
    } catch(error) {
      return { ok: false, data: { error: `Server down. Try again later` } }
    }
  },
  autoLogin: async (payload) => {
    const url = `${domain}/token/login`

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'authentication_token': payload
      },
    }
    try {
      const response = await fetch(url, options)
      console.log(response)
      const { status, ok } = response
      const data = await response.json()
      console.log(data)
      return {status, ok, data}
    } catch(error) {
      return { ok: false, data: { error: `Server down. Try again later` } }
    }
  }
}

const userAsyncThunk = {
  register: createAsyncThunk(
    'REGISTER',
    userApiCalls.register
  ),
  login: createAsyncThunk(
    'LOGIN',
    userApiCalls.login
  ),
  autoLogin: createAsyncThunk(
    'AUTOLOGIN',
    userApiCalls.autoLogin
  )
}
export const { register, login, autoLogin } = userAsyncThunk
