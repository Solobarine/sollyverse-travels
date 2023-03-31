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
      state.totalNumber = actions.payload.number
      state.recentReservations = actions.payload.recents
      state.status = 'Success'
      state.error = []
    },
    [reservationsData.rejected]: (state, actions) => {
      state.error = actions.payload.error
      state.status = 'Failed'
    }
  }
})

export const {reservationsInfo } = reservationSlice.actions

export default reservationSlice.reducer
