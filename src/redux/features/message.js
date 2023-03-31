import { createSlice } from "@reduxjs/toolkit"
import messageAsyncThunk from "./apiCalls/message"

const { view, markAsRead } = messageAsyncThunk

const initialState = {
  messages: [],
  status: 'idle',
  error: []
}

const messageSlice = createSlice({
  name: 'massage',
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
      state.messages = actions.payload.messages
      state.status = 'Success'
      state.error = []
    },
    [view.rejected]: (state) => {
      state.status = 'Failed'
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
      state.status = 'Failed'
    }
  }
})

export const { show, open } = messageSlice.actions

export default messageSlice.reducer
