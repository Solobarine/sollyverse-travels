import { createAsyncThunk } from "@reduxjs/toolkit"

const domain = 'https://localhost:5000'

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
        return {status: 'successful', data: JSON.parse(user)}
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
        return {status: 'successful', data: JSON.parse(user)}
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
  )
}
export const { register, login } = userAsyncThunk
