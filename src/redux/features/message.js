import { createSlice } from "@reduxjs/toolkit"
import messageAsyncThunk from "./apiCalls/message"

const { view, markAsRead } = messageAsyncThunk

const initialState = {
  messages: [],
  status: 'idle',
  error: []
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
      state.status = 'Pending'
    },
    [view.fulfilled]: (state, actions) => {
      if (!actions.payload.ok) {
        state.messages = []
        state.status = 'Failed'
        state.error = actions.payload.data.error
      } else {
        state.messages = actions.payload.data.messages
        state.status = 'Success'
        state.error = []
      }
    },
    [view.rejected]: (state) => {
      state.status = 'Failed'
    },
    [markAsRead.pending]: (state) => {
      state.status = 'Pending'
    },
    [markAsRead.fulfilled]: (state, actions) => {
      if (!actions.payload.ok) {
        return state
      } else {
        state = state.messages.map((message) => { // eslint-disable-line
          if (message._id === actions.payload._id) {
            message.status = 'read'
          }
        })
      }
    },
    [markAsRead.rejected]: (state) => {
      state.status = 'Failed'
    }
  }
})

export const { show, open } = messageSlice.actions

export default messageSlice.reducer
