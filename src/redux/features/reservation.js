import { createSlice } from "@reduxjs/toolkit"
import reservationAsyncThunk from "./apiCalls/reservation"

const {create, show, cancel } = reservationAsyncThunk

const initialState = {
  reserve: {
    value: [],
    error: '',
    message: '',
    status: 'idle'
  },
  reservations: {
    value: [],
    error: '',
    status: 'idle',
  },
  cancel: {
    status: 'idle',
    error: '',
    message: ''
  }
}

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    clearReserveMessage: (state) => {
      state.reserve.message = ''
    },
    clearReserveError: (state) => {
      state.reserve.error = ''
    },
    clearCancelMessage: (state) => {
      state.cancel.message = ''
    },
    clearCancelError: (state) => {
      state.cancel.error = ''
    }
  },
  extraReducers: {
    [create.pending]: (state) => {
      state.reserve.status = 'pending'
      state.reserve.error = ''
    },
    [create.fulfilled]: (state, actions) => {
      if (actions.payload.status === 201) {
        state.reserve.value = actions.payload.data.reservation
        state.reserve.message = actions.payload.data.message
        state.reserve.status = 'idle'
        state.reserve.error = ''
      } else {
        state.reserve.value = []
        state.reserve.error = actions.payload.error
        state.reserve.status = 'failed'
      }
    },
    [create.rejected]: (state, actions) => {
      state.reserve.value = []
      state.reserve.error = actions.error.message
      state.reserve.status = 'failed'
    },
    [show.rejected]: (state, actions) => {
      state.reservations.error = actions.payload.error
      state.reservations.status = 'failed'
    },
    [show.pending]: (state) => {
      state.reservations.status = 'pending'
      state.reservations.error = ''
    },
    [show.fulfilled]: (state, actions) => {
      state.reservations.value = actions.payload.data.reservations
      state.reservations.status = 'idle'
      state.reservations.error = ''
    },
    [show.rejected]: (state) => {
      state.reservations.status = 'failed'
    },
    [cancel.pending]: (state) => {
      state.cancel.status = 'pending'
      state.cancel.error = ''
    },
    [cancel.fulfilled]: (state, actions) => {
      if (actions.payload.status === 200) {
        state.cancel.status = 'idle'
        state.cancel.error = ''
        state.cancel.message = 'Reservation canceled successfully'
      } else {
        state.cancel.error = actions.payload.error
        state.cancel.status = 'failed'
      }
    },
    [cancel.rejected]: (state, actions) => {
      state.cancel.error = actions.error.message
      state.cancel.status = 'failed'
    }
  }
})

export const { clearReserveMessage, clearReserveError, clearCancelError, clearCancelMessage } = reservationSlice.actions

export default reservationSlice.reducer