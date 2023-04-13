import { createSlice } from "@reduxjs/toolkit"
import { signUp, login, autoLogin } from "../apiCalls/admin"

const initialState = {
  user: {
    value: [],
    id: '',
    status: 'idle',
    logged_in: false,
    error: []
  }
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = initialState.user
      localStorage.removeItem("authentication_token")
    }
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.user.status = 'Pending'
      state.user.error = []
    },
    [signUp.fulfilled]: (state, actions) => {
      if (actions.payload.error) {
        state.user.value = []
        state.user.status = 'Failed'
        state.user.logged_in = false
        state.user.error = actions.payload.error
        return
      }
        state.user.value = actions.payload.admin
        state.user.status = 'Success'
        state.user.logged_in = true
        state.user.error = []
        localStorage.setItem("authentication_token", actions.payload.token)
        return
    },
    [signUp.rejected]: (state, actions) => {
      state.user.error = actions.payload.error
      state.user.status = 'Failed'
      state.user.logged_in = false
    },
    [login.pending]: (state) => {
      state.user.status = 'Pending'
      state.user.error = []
    },
    [login.fulfilled]: (state, actions) => {
      if (actions.payload.error) {
        state.user.value = []
        state.user.status = 'Failed'
        state.user.error = actions.payload.error
        return
      } else {
        console.log(actions.payload)
        state.user.value = actions.payload.adminInfo
        state.user.status = 'Success'
        state.user.logged_in = true
        state.user.error = []
        state.user.id = actions.payload.admin._id
        localStorage.setItem("authentication_token", actions.payload.token)
        return
      }
    },
    [login.rejected]: (state, actions) => {
      state.user.error = actions.payload.error
      state.user.status = 'Failed'
    },
    [autoLogin.rejected]: (state, actions) => {
      state.user.error = actions.payload.error
      state.user.status = 'Failed'
    },
    [autoLogin.fulfilled]: (state, actions) => {
      if (actions.payload.error) {
        state.user.value = []
        state.user.status = 'Failed'
        state.user.error = actions.payload.error
        return
      } else {
        state.user.value = actions.payload.admin
        state.user.status = 'Success'
        state.user.logged_in = true
        state.user.error = []
        return
      }
    },
    [autoLogin.rejected]: (state, actions) => {
      state.user.error = actions.payload.error
      state.user.status = 'Failed'
    }
  }
})

export const { logout } = adminSlice.actions

export default adminSlice.reducer
