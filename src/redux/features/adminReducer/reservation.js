import { createSlice } from "@reduxjs/toolkit"
import reservationAsyncThunk from "../apiCalls/reservation"

const { reservationsData } = reservationAsyncThunk

const initialState = {
  totalNumber: [],
  recentReservations: [],
  status: 'idle',
  error: ''
}

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    clearReservationError: (state) => {
      state.error = ''
    }
  },
  extraReducers: {
    [reservationsData.fulfilled]: (state, actions) => {
      state.totalNumber = actions.payload.number
      state.recentReservations = actions.payload.recents
      state.status = 'idle'
      state.error = ''
    },
    [reservationsData.rejected]: (state, actions) => {
      state.error = actions.error.message
      state.status = 'failed'
    }
  }
})

export const {clearReservationError } = reservationSlice.actions

export default reservationSlice.reducer
