import { NavLink } from 'react-router-dom'
import "./css/Menu.css"
import { useState } from 'react'

const Menu = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <section className={`adminMenu ${isCollapsed ? 'collapsed' : ''}`}>
      <ion-icon
        className="toggleMenuAdmin"
        name="chevron-forward-circle" 
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
      <NavLink
      className='menu_link'
      to="/admin/dashboard"
      onClick={() => setIsCollapsed(true)}>
        <i className="fa-solid fa-house-user"/>
        <p>Dashboard</p>
      </NavLink>
      <NavLink
      className='menu_link'
      to='/admin/profile'
      onClick={() => setIsCollapsed(true)}>
        <i className="fa-solid fa-address-card"/>
        <p>Profile</p>
      </NavLink>
      <NavLink
      className='menu_link'
      to="/admin/staff"
      onClick={() => setIsCollapsed(true)}>
        <i className="fa-solid fa-clipboard-user"/>
        <p>Staff</p>
      </NavLink>
      <NavLink
      className='menu_link'
      to="/admin/destinations"
      onClick={() => setIsCollapsed(true)}>
        <i className="fa-solid fa-map-location-dot"/>
        <p>Destinations</p>
      </NavLink>
      <NavLink
      className='menu_link'
      to="/admin/mails"
      onClick={() => setIsCollapsed(true)}>
        <i className="fa-solid fa-message"/>
        <p>Messages</p>
      </NavLink>
      <NavLink
      className='menu_link'
      to="/admin/settings "
      onClick={() => setIsCollapsed(true)}>
        <i className="fa-solid fa-gears"/>
        <p>Settings</p>
      </NavLink>
      <NavLink
      className='menu_link'
      to="/admin/login"
      onClick={() => {
        localStorage.removeItem('authentication_token')
        setIsCollapsed(true)
        }}>
        <i className="fa-solid fa-right-from-bracket"/>
        <p>Logout</p>
      </NavLink>
    </section>
  )
}

export default Menu
