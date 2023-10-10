import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggle_menu } from '../../utils/header'
import { logout } from '../../redux/features/user'
import './css/Header.css'

const Header = () => {
  const dispatch = useDispatch()
  const hamburger_options = useRef(null)
  const nav = useRef(null)
  const {isLoggedIn} = useSelector(state => state.user)

  return (
    <header>
      <img src="/airplane.png" alt="logo" id='image'/>
      <h2 className="brand">Sollyverse</h2>
      <div ref={nav} className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/#aboutUs">About</NavLink>
        <NavLink to="/countries">Discover</NavLink>
        <NavLink to="/">Service</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      {
        !isLoggedIn ?
        <>
          <NavLink to="/login"
          className="header_auth login"
          >Login</NavLink>
          <NavLink to="/register"
          className="header_auth register"
          >Register</NavLink>
        </>
        : <NavLink
          onClick={() => {
            dispatch(logout())
          }}
          className="header_auth">Logout</NavLink>
      }
    <div ref={hamburger_options} id='menu_toggles'>
      <img onClick={(e) => toggle_menu(hamburger_options, nav, e)} src="/hamburger.svg" className='menu_open' alt="Open Menu" />
      <img onClick={(e) => toggle_menu(hamburger_options, nav, e)} src="/close.svg" className='menu_close menu_toggle_hide' alt="Close Menu" />
      </div>
    </header>
  )
}

export default Header;
