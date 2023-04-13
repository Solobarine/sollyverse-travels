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
      if (actions.payload.error) {
        state.message.error = actions.payload.error
        state.message.status = 'Failed'
        return
      } else {
        state.message.value = actions.payload.message
        state.message.status = 'Success'
        state.message.error = []
        return
      }
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
      if (actions.payload.error) {
        state.message.error = actions.payload.error
        state.message.status = 'Failed'
        return
      } else {
        state.message.value = actions.payload.message
        state.message.value = 'Success'
        state.message.error = []
        return
      }
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
      if (actions.payload.error) {
        state.messages.error = actions.payload.error
        state.messages.status = 'Failed'
        return
      } else {
        state.messages.value = actions.payload.messages
        state.messages.status = 'Success'
        state.messages.error = []
        return
      }
    },
    [adminShowMessages.rejected]: (state, actions) => {
      state.messages.error = actions.payload.error
      state.messages.status = 'Failed'
    }
  }
})

export const { create_message } = messageSlice.actions

export default messageSlice.reducer
