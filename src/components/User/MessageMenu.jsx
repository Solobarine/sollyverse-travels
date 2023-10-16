import { NavLink } from 'react-router-dom'
import './css/MessageMenu.css'

const MessageMenu = () => {
  return (
    <div id='messageMenu'>
        <NavLink to='/messages/inbox'>
            <ion-icon name="mail"></ion-icon>
            <p>Inbox</p>
        </NavLink>
        <NavLink to='/messages/archived'>
            <ion-icon name='archive'></ion-icon>
            <p>Archive</p>
        </NavLink>
        <NavLink to='/messages/important'>
            <ion-icon name='albums'></ion-icon>
            <p>Important</p>
        </NavLink>
        <NavLink to='/messages/starred'>
            <ion-icon name='star'></ion-icon>
            <p>Starred</p>
        </NavLink>
    </div>
  )
}

export default MessageMenu