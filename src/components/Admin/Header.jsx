import { NavLink } from 'react-router-dom'
import './css/Header.css'
import { useState } from 'react'

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
      <nav id="adminHeader">
        <div id='company'>
          <NavLink to="/">
            <img src="/airplane.png" alt="sollyverse"/>
            <p>Sollyverse</p>
            </NavLink>
        </div>
        <div
        id='adminLinks'
        className={`${isCollapsed ? 'collapsed' : ''}`}>
          <div>
            <NavLink to="/admin/destinations">Destination</NavLink>
            <NavLink to="/admin/staff">Staff</NavLink>
            <NavLink to="/admin/mails">Messages</NavLink>
          </div>
          <div>
            <NavLink to="/admin/logout">Logout</NavLink>
            <NavLink to="/admin/register">Register</NavLink>
            <NavLink to="/admin/login">Login</NavLink>
          </div>
        </div>
        <div className={`menu_toggles ${isCollapsed ? 'open' : ''}`}>
          <ion-icon
          name="grid-outline"
          onClick={() => setIsCollapsed(!isCollapsed)}></ion-icon>
          <ion-icon
          name="close"
          onClick={() => setIsCollapsed(!isCollapsed)}></ion-icon>
        </div>
      </nav>
  )
}

export default Header
