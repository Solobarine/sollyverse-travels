import { createSlice } from "@reduxjs/toolkit"
import reservationAsyncThunk from "../apiCalls/reservation"

const { reservationsData } = reservationAsyncThunk

const initialState = {
  totalNumber: [],
  recentReservations: [],
  status: 'idle',
  error: []
}

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    reservationsInfo: () => reservationsData
  },
  extraReducers: {
    [reservationsData.fulfilled]: (state, actions) => {
      if (!actions.payload.ok) {
        state.error = actions.payload.data.error
        state.status = 'Failed'
        state.totalNumber = []
        state.recentReservations = []
        return
      } else {
        state.totalNumber = actions.payload.number
        state.recentReservations = actions.payload.recents
        state.status = 'Success'
        state.error = []
        return
      }
    },
    [reservationsData.rejected]: (state, actions) => {
      state.error = actions.payload.data.error
      state.status = 'Failed'
    }
  }
})

export const {reservationsInfo } = reservationSlice.actions

export default reservationSlice.reducer
