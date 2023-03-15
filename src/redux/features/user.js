import { createSlice } from "@reduxjs/toolkit";
import apiCall from "./apiCalls/user";

const {register, login} = apiCall
const initialState = {user: [], status: 'idle', login: false, error: []}
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      const result = state
      result = initialState
      return result
    }
  },
  extraReducers: {
    [register.pending]: (state) => {
      state = state;
      state.status = 'loading'
    },
    [register.fulfilled]: (state, actions) => {
      state.status = 'successful'
      state.error = []
      state.login = true
      state.user = actions.payload
    },
    [register.failed]: (state) => {
      state = state;
      state.status = 'failed'
      state.error = 'Unable to sign up. Try again later'
    },
    [login.pending]: (state) => {
      state = state
      state.status = 'loading'
    },
    [login.fulfilled]: (state, actions) => {
      if (error) {
        state.status = 'failed'
        state.error = actions.peyload
        state.login = false
        state.user = []
      } else {
        state.status = 'successful'
        state.error = []
        state.login = true
        state.user = actions.payload
      }
    },
    [login.failed]: (state) => {
      state = state
      state.status = 'failed'
    }
  }
})

export const { logout } = userSlice.actions

export default userSlice.reducer
