import likeAsyncThunk from "../redux/features/apiCalls/like"
import { increment, decrement } from "../redux/features/country"

const postLike = (e, dispatch, payload) => {
    if (e.target.classList.contains('fa-regular')) {
        dispatch(likeAsyncThunk.createLike(payload))
        return dispatch(increment())
    }

    if (e.target.classList.contains('fa-solid')) {
        dispatch(likeAsyncThunk.cancelLike(payload))
        return dispatch(decrement())
    }
}

export default postLike