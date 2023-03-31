import { createSlice } from "@reduxjs/toolkit"
import { signUp, login } from "../apiCalls/admin"

const initialState = {
  user: {
    value: [],
    status: 'idle',
    error: []
  }
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    login_admin: () => login,
    register: () => signUp
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.user.status = 'Pending'
      state.user.error = []
    },
    [signUp.fulfilled]: (state, actions) => {
      state.user.value = actions.payload.admin
      state.user.status = 'Success'
      state.user.error = []
    },
    [signUp.rejected]: (state, actions) => {
      state.user.error = actions.payload.error
      state.user.status = 'Failed'
    },
    [login.pending]: (state) => {
      state.user.status = 'Pending'
      state.user.error = []
    },
    [login.fulfilled]: (state, actions) => {
      state.user.value = actions.payload.admin
      state.user.status = 'Success'
      state.user.error = []
    },
    [login.rejected]: (state, actions) => {
      state.user.error = actions.payload.error
      state.user.status = 'Failed'
    }
  }
})

export const { login_admin, register } = adminSlice.actions

export default adminSlice.reducer
