import { createSlice } from "@reduxjs/toolkit"
import messageAsyncThunk from "../apiCalls/message"

const { create, adminShowMessages, adminShowOne } = messageAsyncThunk

const initialState = {
  message: {
    value: [],
    status: 'idle',
    error: '',
    notice: ''
  },
  messages: {
    value: [],
    status: 'idle',
    error: '',
    notice: ''
  }
}

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    clearMessageError: (state) => {
      console.log(state);
      state.message.error = ''
    },
    clearMessageNotice: (state) => {
      state.message.notice = ''
    },
    clearMessagesError: (state) => state.messages.error = '',
    clearMessagesNotice: (state) => state.messages.notice = ''
  },
  extraReducers: {
    [create.fulfilled]: (state, actions) => {
      state.message.value = actions.payload.data.message
      state.message.status = 'idle'
      state.message.error = []
    },
    [create.rejected]: (state, actions) => {
      state.message.error = actions.error.message
      state.message.status = 'failed'
    },
    [adminShowOne.pending]: (state) => {
      state.message.status = 'pending'
      state.message.error = []
    },
    [adminShowOne.fulfilled]: (state, actions) => {
      state.message.value = actions.payload.data.message
      state.message.value = 'idle'
      state.message.error = []
    },
    [adminShowOne.rejected]: (state, actions) => {
      state.message.error = actions.error.message
      state.message.status = 'failed'
    },
    [adminShowMessages.pending]: (state) => {
      state.messages.status = 'pending'
      state.messages.error = []
    },
    [adminShowMessages.fulfilled]: (state, actions) => {
      state.messages.value = actions.payload.data.messages
      state.messages.status = 'idle'
      state.messages.error = []
    },
    [adminShowMessages.rejected]: (state, actions) => {
      state.messages.error = actions.error.message
      state.messages.status = 'failed'
    }
  }
})

export const { clearMessageError, clearMessageNotice, clearMessagesError, clearMessagesNotice } = messageSlice.actions

export default messageSlice.reducer
