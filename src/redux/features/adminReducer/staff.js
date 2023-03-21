import { createSlice } from "@reduxjs/toolkit"
import staffAsyncThunk from "../apiCalls/staff"

const { create } = staffAsyncThunk

const initialState = {
  singleStaff: {
    value: [],
    status: 'idle',
    error: []
  },
  staff: {
    value: [],
    status: 'idle',
    error: []
  }
}

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    create_staff: () => create
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

export const { create_staff } = staffSlice.actions

export default staffSlice.reducer
