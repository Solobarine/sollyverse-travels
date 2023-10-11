import { createSlice } from "@reduxjs/toolkit"
import { create } from "../apiCalls/staff"

const initialState = {
  singleStaff: {
    value: [],
    status: 'idle',
    error: ''
  },
  staff: {
    value: [],
    status: 'idle',
    error: ''
  }
}

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    clearSingleStaffError: (state) => {
      state.singleStaff.error = ''
    },
    clearStaffError: (state) => {
      state.staff.error = ''
    }
  },
  extraReducers: {
    [create.pending]: (state) => {
      state.singleStaff.status = 'Pending'
      state.singleStaff.error = []
    },
    [create.fulfilled]: (state, actions) => {
      state.singleStaff.value = actions.payload.staff
      state.singleStaff.status = 'Success'
      state.singleStaff.error = []
    },
    [create.rejected]: (state, actions) => {
      state.singleStaff.error = actions.payload.error
      state.singleStaff.status = 'Failed'
    }
  }
})

export const { clearSingleStaffError, clearStaffError } = staffSlice.actions

export default staffSlice.reducer
