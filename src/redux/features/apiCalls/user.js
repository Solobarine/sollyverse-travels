import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { domain } from "../../../config/api"

const userApiCalls = {
  register: async (payload) => {
    const url = `${domain}/register`
    const headers = {
      "Content-type": 'application/json'
    }

    try {
      return axios.post(url, payload, {headers})
      .then(res => {
        console.log(res)
        return {data: res.payload.data, status: res.payload.status}
      })
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  login: async (payload) => {
    const url = `${domain}/login`

    const headers = {
      'Content-type': 'application/json'
    }

    try {
      return axios.post(url, payload, {headers})
      .then(res => {
        return {data: res.data, status: res.status}
      })
    } catch (error) {
      throw error
    }
  },
  verifyToken: async () => {
    const url = `${domain}/verify-token`
    const token = localStorage.getItem('authentication_token')
    const headers = {
      'Content-Type': 'application/json',
      'authentication_token': token
    }

    try {
      return axios.post(url, {}, {headers})
      .then(res => {
        return {data: res.data, status: res.status}
      })
    } catch (error) {
      console.log(error)
      throw error
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
  verifyToken: createAsyncThunk(
    'VERIFY_TOKEN',
    userApiCalls.verifyToken
  )
}
export const { register, login, verifyToken } = userAsyncThunk
