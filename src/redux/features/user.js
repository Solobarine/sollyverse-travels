import { createSlice } from "@reduxjs/toolkit";
import { register, login, autoLogin }from "./apiCalls/user";

const initialState = {user: [], status: 'idle', login: false, error: []}
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      let result = state
      result = initialState
      localStorage.removeItem("authentication_token")
      return result
    }
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.status = 'loading'
    },
    [register.fulfilled]: (state, actions) => {
      if (actions.payload === undefined || actions.payload.length === 0 || actions.payload.error) {
        state.status = 'failed'
        state.error = actions.payload
        state.login = false
        state.user = []
        return
      } else {
        state.status = 'Successful'
        console.log(actions)
        state.error = []
        state.login = true
        state.user = actions.payload.user
        localStorage.setItem("authentication_token", actions.payload.token)
        return
      }
    },
    [register.failed]: (state) => {
      state.status = 'failed'
      state.error = 'Unable to sign up. Try again later'
    },
    [login.pending]: (state) => {
      state.status = 'loading'
    },
    [login.fulfilled]: (state, actions) => {
      if (actions.payload === undefined || actions.payload.length === 0 || actions.payload.error) {
        state.status = 'Failed'
        state.error = actions.payload.error
        state.login = false
        state.user = []
      } else {
        state.status = 'Successful'
        state.error = []
        state.login = true
        state.user = actions.payload.user
        localStorage.setItem("authentication_token", actions.payload.token)
      }
    },
    [login.failed]: (state) => {
      state.status = 'Failed'
    },
    [autoLogin.pending]: (state) => {
      state.status = 'loading'
    },
    [autoLogin.fulfilled]: (state, actions) => {
      if (actions.payload === undefined || actions.payload.length === 0 || actions.payload.error) {
        state.status = 'Failed'
        state.error = actions.payload.error
        state.login = false
        state.user = []
      } else {
        state.status = 'Successful'
        state.error = []
        state.login = true
        state.user = actions.payload.user
      }
    },
    [autoLogin.failed]: (state) => {
      state.status = 'Failed'
    }
  }
})

export const { logout } = userSlice.actions

export default userSlice.reducer
