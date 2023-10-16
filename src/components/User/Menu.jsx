import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggle } from '../../effects';
import { logout } from '../../redux/features/user';
import './css/Menu.css'

const Menu = () => {
  const dispatch = useDispatch()
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isLight, setIsLight] = useState(true)


  return (
    <section className={`menu ${isCollapsed ? 'collapsed' : ''}`}>
      <i
        className="fa-solid fa-circle-chevron-right menuToggle"
        onClick={() => toggle(isCollapsed, setIsCollapsed)}
      />
      <div className="nav-links">
        <NavLink
        to="/dashboard"
        className={`${isCollapsed ? 'collapsed' : ''}`}
        onClick={() => setIsCollapsed(true)}
        >
          <i className="fa-solid fa-house"></i>
          <p>Dashboard</p>
        </NavLink>
        <NavLink
        to="/profile"
        className={`${isCollapsed ? 'collapsed' : ''}`}
        onClick={() => setIsCollapsed(true)}
        >
          <i className="fa-solid fa-user"></i>
          <p>Profile</p>
        </NavLink>
        <NavLink
        to="/countries"
        className={`${isCollapsed ? 'collapsed' : ''}`}
        onClick={() => setIsCollapsed(true)}
        >
          <i className="fa-solid fa-globe"></i>
          <p>Discover</p>
        </NavLink>
        <NavLink
        to="/favourites"
        className={`${isCollapsed ? 'collapsed' : ''}`}
        onClick={() => setIsCollapsed(true)}
        >
          <i className="fa-regular fa-thumbs-up"></i>
          <p>Favourites</p>
        </NavLink>
        <NavLink 
        to="/messages"
        className={`${isCollapsed ? 'collapsed' : ''}`}
        onClick={() => setIsCollapsed(true)}
        >
          <i className="fa-solid fa-envelope"></i>
          <p>Messages</p>
        </NavLink>
        <NavLink 
        to="/reservations"
        className={`${isCollapsed ? 'collapsed' : ''}`}
        onClick={() => setIsCollapsed(true)}
        >
          <i className="fa-solid fa-wallet"></i>
          <p>Reservations</p>
        </NavLink>
        <NavLink 
        to="/settings"
        className={`${isCollapsed ? 'collapsed' : ''}`}
        onClick={() => setIsCollapsed(true)}
        >
          <i className="fa-solid fa-gear"></i>
          <p>Settings</p>
        </NavLink>
        <div
        className={`${isCollapsed ? 'collapsed' : ''} logout_link`}
        onClick={() => {
          dispatch(logout())
          setIsCollapsed(true)
        }}
        >
          <i className="fa-solid fa-door-open"></i>
          <p>Logout</p>
        </div>
      </div>
      <div className={`theme ${isCollapsed ? 'collapsed' : ''}`}>
          <i className="fa-regular fa-sun lumen"></i>
          <div onClick={() => toggle(isLight, setIsLight)} className={`theme_toggle ${isLight ? 'lumen' : 'dark'}`}></div>
          <i className="fa-regular fa-moon"></i>
      </div>
    </section>
  )
}

export default Menu;
