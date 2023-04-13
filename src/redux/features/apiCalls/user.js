import { createAsyncThunk } from "@reduxjs/toolkit"

const domain = 'http://localhost:3005'

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

    const response = await fetch(url, options).then((user) => {
        return user.json()
    }).catch((err) => console.log(err))
    return response
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

    const response = await fetch(url, options).then((user) => {
      return user.json()
    }).catch(err => console.log(err))
    return response
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
    const response = await fetch(url, options).then((user) => {
      return user.json()
    }).catch(err => console.log(err))
    return response
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
