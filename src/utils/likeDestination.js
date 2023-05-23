import likeAsyncThunk from "../redux/features/apiCalls/like"
import {increment, decrement} from '../redux/features/country'
import {incrementLike, decrementLike} from '../redux/features/city'

const postLike = async(e, dispatch, payload) => {
    const data = await dispatch(likeAsyncThunk.createLike(payload))
    console.log(data.payload.data.msg);
    (data.payload.data.msg === 'Liked') ? dispatch(incrementLike()) : dispatch(decrementLike())
}

export const postLikeCountry = async(e, dispatch, payload) => {
    const data = await dispatch(likeAsyncThunk.createLikeCountry(payload))
    console.log(data.payload.data.msg);
    if (data.payload.data.msg === 'Liked') {
        dispatch(increment())
    } else if (data.payload.data.msg === 'unliked') {
        dispatch(decrement())
    }
        
}


export default postLike