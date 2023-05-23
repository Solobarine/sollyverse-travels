import { createSlice } from "@reduxjs/toolkit";
import likeAsyncThunk from "./apiCalls/like";
const {userLike} = likeAsyncThunk

const initialState = {
    likes: [],
    error: '',
    status: 'idle'
}

const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {

    },
    extraReducers: {
        [userLike.pending]: (state) => {
            state.status = 'Pending'
        },
        [userLike.fulfilled]: (state, actions) => {
            if (!actions.payload.ok) {
                state.likes = []
                state.error = actions.payload.data.error
                state.status = 'Failed'
            } else {
                state.likes = actions.payload.data.likes
                state.error = ''
                state.status = 'Success'
            }
        },
        [userLike.rejected]: (state, actions) => {
            state.status = 'Failed'
            state.likes = []
            state.error = actions.payload.data.error
        }
    }
})

export default likeSlice.reducer