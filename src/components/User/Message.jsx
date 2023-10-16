import { useState } from 'react'
import './css/Message.css'

const Message = ({details, state, setState, setNumber, number}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isStarred, setIsStarred] = useState(false)

    const toggle = (state, setState) => {
        setState(!state)
    }

    const toggleModal = (e) => {
        if (e.target.classList.contains('message') || e.target.classList.contains('messageDetails') || e.target.classList.contains('messageSubject') || e.target.classList.contains('messageContent') ) {
            setState(!state)
        }
    }

  return (
    <div 
    className='message'
    onMouseEnter={() => toggle(isVisible, setIsVisible)}
    onMouseLeave={() => toggle(isVisible, setIsVisible)}
    onClick={(e) => {
        setNumber(number)
        toggleModal(e)
    }}
    >
        <input type="checkbox" name="important" id="check_important" />
        <i class={`${isStarred ? "fa-solid" : "fa-regular"} fa-star`} onClick={() => toggle(isStarred, setIsStarred)}></i>
        <small className='messageDate'>Jul 5</small>
        <div className={`messageOptions ${isVisible ? 'show' : ''}`}>
            <ion-icon name="archive-outline"></ion-icon>
            <ion-icon name="trash-bin-outline"></ion-icon>
        </div>
        <div className='messageDetails'>
            <p className="messageSubject">{details.sender}</p>
            <hr />
            <p className="messageContent">{details.message}</p>
        </div>
    </div>
  )
}

export default Message