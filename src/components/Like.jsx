import {useRef} from 'react';
import './Like.css';

const Like = () => {
  const likeButton = useRef()
  const like = useRef()

  const HandleClick = () => {
    like.current.classList.toggle('fa-regular fa-heart');
    like.current.classList.toggle('fa-solid fa-heart');
  }

  return (
    <button onclick={HandleClick} ref={likeButton} className="like">
      <i ref={like} className='fa-regular fa-heart'></i>
    </button>
  )
}

export default Like;
