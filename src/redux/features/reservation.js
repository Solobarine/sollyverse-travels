import { createSlice } from "@reduxjs/toolkit"
import reservationAsyncThunk from "./apiCalls/reservation"

const {create, show, cancel } = reservationAsyncThunk

const initialState = {
  reservations: {
    item: [],
    cities: [],
    error: [],
    status: 'idle',
    cancelStatus: 'idle'
  }
}

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducer: {
    reserve: () => create,
    show_reservations: () => show,
    cancel_reservation: () => cancel
  },
  extraReducers: {
    [create.pending]: (state) => {
      state.reservations.status = 'Pending'
      state.reservations.error = []
    },
    [create.fulfilled]: (state, actions) => {
      if (actions.payload.error) {
        state.reservations.value = []
        state.reservations.status = 'Failed'
        state.reservations.error = actions.payload.error
        return
      } else {
        state.reservations.value = actions.payload.reservations
        state.reservations.status = 'Success'
        state.reservations.error = []
        return
      }
    },
    [show.rejected]: (state, actions) => {
      state.reservations.error = actions.payload.error
      state.reservations.status = 'Failed'
    },
    [show.pending]: (state) => {
      state.reservations.status = 'Pending'
    },
    [show.fulfilled]: (state, actions) => {
      if (actions.payload.error) {
        state.reservations.item = []
        state.reservations.cities = []
        state.reservations.status = 'Failed'
        state.reservations.error = actions.payload.error
        return
      } else {
        state.reservations.item = actions.payload.reservations
        state.reservations.cities = actions.payload.cities
        state.reservations.status = 'Success'
        state.reservations.error = []
        return
      }
    },
    [show.rejected]: (state) => {
      state.reservations.status = 'Failed'
    },
    [cancel.pending]: (state) => {
      state.reservations.cancelStatus = 'Pending'
      state.reservations.error = []
    },
    [cancel.fulfilled]: (state) => {
      state.reservations.cancelStatus = 'Success'
      state.reservations.error = []
    },
    [cancel.rejected]: (state, actions) => {
      state.reservations.error = actions.payload.error
      state.reservations.cancelStatus = 'Failed'
    }
  }
})

export const { reserve, show_reservations, cancel_reservation } = reservationSlice.actions

export default reservationSlice.reducer
