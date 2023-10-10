import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import likeAsyncThunk from '../../redux/features/apiCalls/like';
import './css/Like.css';
import { useState } from 'react';

const Like = ({user, city}) => {
  const dispatch = useDispatch()
  const [isLiked, setIsLiked] = useState('fa-regular fa-heart')
  const { likes } = useSelector(state => state.user)

  useEffect(() => {
    likes.map(like => (
        (like.city === city)
        ? setIsLiked('fa-solid fa-heart')
        : null
      ))
  })

  const HandleClick = (e) => {
    e.target.classList.toggle('fa-regular')
    e.target.classList.toggle('fa-solid')
  }

  return (
    <button onClick={(e) => {
      dispatch(likeAsyncThunk.create({user, city}))
      HandleClick(e)
      }} className="like">
      <i className={isLiked}></i>
    </button>
  )
}

export default Like;
