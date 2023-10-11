import { createSlice } from "@reduxjs/toolkit";
import { register, login, verifyToken } from "./apiCalls/user";

const initialState = {
  user: [],
  status: 'idle',
  isLoggedIn: false,
  error: [],
  likes: []
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      let result = state
      result = initialState
      localStorage.removeItem('authentication_token')
      return result
    },
    addUserLikes: (state, data) => {
      state.likes = [...state.likes, data.payload]
    }
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.status = 'loading'
    },
    [register.fulfilled]: (state, actions) => {
      if (actions.payload.status !== 200) {
        state.status = 'failed'
        state.error = actions.payload
        state.isLoggedIn = false
        state.user = []
      } else {
        state.status = 'idle'
        state.error = []
        localStorage.setItem('authentication_token', actions.payload.data.token)
        state.isLoggedIn = true
        state.user = actions.payload.data.user
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
      console.log(actions.payload);
      if (actions.payload.status !== 200 && !actions.payload.data.user) {
        state.status = 'failed'
        state.error = actions.payload
        state.isLoggedIn = false
        state.user = []
      } else {
        state.status = 'idle'
        state.error = []
        localStorage.setItem('authentication_token', actions.payload.data.token)
        state.isLoggedIn = true
        state.user = actions.payload.data.user
        state.likes = actions.payload.data.userLikes
      }
    },
    [login.failed]: (state) => {
      state.status = 'failed'
    },
    [verifyToken.pending]: (state) => {
      state.status = 'pending'
      state.error = []
    },
    [verifyToken.fulfilled]: (state, actions) => {
      if (actions.payload.status === 200 && actions.payload.data.user) {
        state.status = 'idle'
        state.isLoggedIn = true
        state.user = actions.payload.data.user
        state.likes = actions.payload.data.userLikes
        state.error = []
      } else {
        state.status = 'failed'
        state.isLoggedIn = false
        state.user = []
      }
    },
    [verifyToken.rejected]: (state, actions) => {
      state.status = 'failed'
      state.isLoggedIn = false
      state.user = []
      state.error = actions.error.message
    }
  }
})

export const { logout, addUserLikes } = userSlice.actions

export default userSlice.reducer
