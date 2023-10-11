import { createSlice } from "@reduxjs/toolkit"
import { signUp, login, verifyToken } from "../apiCalls/admin"

const initialState = {
  user: [],
  isLoggedIn: false,
  status: 'idle',
  error: ''
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    logout: (state) => {
      let result = state
      result = initialState
      localStorage.removeItem('authentication_token')
      return result
    }
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.status = 'pending'
      state.error = ''
    },
    [signUp.fulfilled]: (state, actions) => {
      if (actions.payload.status === 201) {
        state.user = actions.payload.data.admin
        localStorage.setItem('authentication_token', actions.payload.data.token)
        state.status = 'idle'
        state.isLoggedIn = true
        state.error = ''
      } else {
        state.user = ''
        state.status = 'failed'
        state.isLoggedIn = false
        state.error = actions.payload.error
      }
    },
    [signUp.rejected]: (state, actions) => {
      if (actions.error.name !== 'TypeError') {
        state.error = actions.error.message
        state.isLoggedIn = false
        state.status = 'failed'
      }
    },
    [login.pending]: (state) => {
      state.status = 'pending'
      state.error = ''
    },
    [login.fulfilled]: (state, actions) => {
      console.log(actions);
      if (actions.payload.status !== 200) {
        state.user = ''
        state.status = 'failed'
        state.isLoggedIn = false
        state.error = actions.payload.error
      } else {
        state.user = actions.payload.data.admin
        localStorage.setItem('authentication_token', actions.payload.data.token)
        state.status = 'idle'
        state.isLoggedIn = true
        state.error = ''
      }
    },
    [login.rejected]: (state, actions) => {
      if (actions.error.name !== 'TypeError') {
        state.error = actions.error.message
        state.isLoggedIn = false
        state.status = 'failed'
      }
    },
    [verifyToken.pending]: (state) => {
      state.status = 'pending'
      state.error = ''
    },
    [verifyToken.fulfilled]: (state, actions) => {
      if (actions.payload.status === 200) {
        state.user = actions.payload.data.admin
        state.status = 'idle'
        state.isLoggedIn = true
        state.error = ''
      } else {
        state.user = ''
        state.status = 'failed'
        state.isLoggedIn = false
        state.error = actions.payload.error
      }
    },
    [verifyToken.rejected]: (state, actions) => {
      if (actions.error.name !== 'TypeError') {
        state.error = actions.error.message
        state.isLoggedIn = false
        state.status = 'failed'
      }
    }
  }
})

export default adminSlice.reducer