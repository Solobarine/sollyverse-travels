import { createSlice } from "@reduxjs/toolkit"
import messageAsyncThunk from "../apiCalls/message"

const { create, adminShowMessages, adminShowOne } = messageAsyncThunk

const initialState = {
  message: {
    value: [],
    status: 'idle',
    error: []
  },
  messages: {
    value: [],
    status: 'idle',
    error: []
  }
}

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    create_message: () => create
  },
  extraReducers: {
    [create.fulfilled]: (state, actions) => {
      state.message.value = actions.payload.message
      state.message.status = 'Success'
      state.message.error = []
    },
    [create.rejected]: (state, actions) => {
      state.message.error = actions.payload.error
      state.message.status = 'Failed'
    },
    [adminShowOne.pending]: (state) => {
      state.message.status = 'Pending'
      state.message.error = []
    },
    [adminShowOne.fulfilled]: (state, actions) => {
      state.message.value = actions.payload.message
      state.message.value = 'Success'
      state.message.error = []
    },
    [adminShowOne.rejected]: (state, actions) => {
      state.message.error = actions.payload.error
      state.message.status = 'Failed'
    },
    [adminShowMessages.pending]: (state) => {
      state.messages.status = 'Pending'
      state.messages.error = []
    },
    [adminShowMessages.fulfilled]: (state, actions) => {
      state.messages.value = actions.payload.messages
      state.messages.status = 'Success'
      state.messages.error = []
    },
    [adminShowMessages.rejected]: (state, actions) => {
      state.messages.error = actions.payload.error
      state.messages.status = 'Failed'
    }
  }
})

export const { create_message } = messageSlice.actions

export default messageSlice.reducer
