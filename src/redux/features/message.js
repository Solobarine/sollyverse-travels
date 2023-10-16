import { createSlice } from "@reduxjs/toolkit"
import messageAsyncThunk from "./apiCalls/message"

const { view, markAsRead } = messageAsyncThunk

const initialState = {
  messages: [],
  status: 'idle',
  error: ''
}

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    show: () => view,
    open: () => markAsRead
  },
  extraReducers: {
    [view.pending]: (state) => {
      state.status = 'pending'
    },
    [view.fulfilled]: (state, actions) => {
      state.messages = actions.payload.data.messages
      state.status = 'idle'
      state.error = ''
    },
    [view.rejected]: (state, actions) => {
      state.error = actions.error.message
      state.status = 'failed'
    },
    [markAsRead.pending]: (state) => {
      state.status = 'Pending'
    },
    [markAsRead.fulfilled]: (state, actions) => {
      state = state.messages.map((message) => { // eslint-disable-line
        if (message._id === actions.payload._id) {
          message.status = 'read'
        }
      })
    },
    [markAsRead.rejected]: (state) => {
      state.status = 'failed'
    }
  }
})

export const { show, open } = messageSlice.actions

export default messageSlice.reducer
