import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import MessageMenu from './MessageMenu';
import './css/Messages.css'
import messageAsyncThunk from '../../redux/features/apiCalls/message';

const Messages = () => {
  const dispatch = useDispatch()
  const [modalOpen, setModalOpen] = useState(false)
  const [messageNumber, setMessageNumber] = useState(0)
  const {messages} = useSelector(state => state.messages)
  const message = messages[messageNumber]

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  useEffect(() => {
    dispatch(messageAsyncThunk.view())
  }, [dispatch])


  return message
  ? (
    <section className="messages">
      <MessageMenu />
      <div id='messagesList'>
        {
          messages.map((message, index) => (
            <Message
            details={message}
            state={modalOpen}
            setState={setModalOpen}
            setNumber={setMessageNumber}
            number={index}
            />
          ))
        }
      </div>
      <div id="modal" className={`${modalOpen ? 'showModal' : ''}`}>
        <div>
          <p id='subject'>{message.sender}</p>
          <p onClick={toggleModal} id='closeButton'>&#10006;</p>
        </div>
        <hr />
        <small id='content'>{message.message}</small>
      </div>
      <div
      id="overlay"
      className={`${modalOpen ? 'show' : ''}`}
      onClick={() => setModalOpen(!modalOpen)}></div>
    </section>
  )
  : null
}

export default Messages;
