import {useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { toggleMenu } from '../effects';
import { logout } from '../redux/features/user';
import './Menu.css'

const Menu = () => {
  const menu = useRef()
  const sun = useRef()
  const moon = useRef()

  const button = useRef()

  const toggleTheme = (menu, sun, moon) => {
    console.log(menu)
    menu.current.classList.toggle('dark')
    if (menu.current.classList.contains('dark') ) {
      sun.current.classList.toggle('lumen')
      moon.current.classList.toggle('lumen')
    } else {
      moon.current.classList.toggle('lumen')
      sun.current.classList.toggle('lumen')
    }
  }

  const is_logged_in = useSelector(state => state.user.login)

  const dispatch = useDispatch()

  const exit = () => {
    dispatch(logout())
    if (!is_logged_in) return <Navigate to="/login"/>
  }

  return (
    <>
      <i className="fa-solid fa-bars"/>
      <section ref={menu} className='menu'>
        <i
          ref={button}
          className="fa-solid fa-circle-chevron-right menuToggle"
          onClick={() => {
            const containers = document.querySelectorAll('.page')
            const links = document.querySelectorAll('.nav-links')
            toggleMenu(button, containers, links)
          }}
        />
        <ul className="menuNav">
          <li className="nav-links">
            <Link to="/account/dashboard">
            <i className="fa-solid fa-house"></i>
            <p>Dashboard</p>
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/account/profile">
            <i className="fa-solid fa-user"></i>
            <p>Profile</p>
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/countries">
            <i className="fa-solid fa-globe"></i>
            <p>Discover</p>
            </Link>
          </li>
          <li className="nav-links">
            <Link to="/account/favourites">
            <i className="fa-regular fa-thumbs-up"></i>
            <p>Favourites</p>
          </Link>
          </li>
          <li className="nav-links">
            <Link to="/account/messages">
            <i className="fa-solid fa-envelope"></i>
            <p>Messages</p>
          </Link>
          </li>
          <li className="nav-links">
            <Link to="/account/reservations">
            <i className="fa-solid fa-wallet"></i>
            <p>Reservations</p>
          </Link>
          </li>
          <li className="nav-links">
            <Link to="/account/settings">
            <i className="fa-solid fa-gear"></i>
            <p>Settings</p>
            </Link>
          </li>
          <li className="nav-links">
            <Link onClick={() => exit()}>
            <i className="fa-solid fa-door-open"></i>
            <p>Logout</p>
            </Link>
          </li>
        </ul>
        <div className="theme">
          <span className='icon'>
            <i ref={sun} className="fa-regular fa-sun lumen"></i>
            <i ref={moon} className="fa-regular fa-moon"></i>
          </span>
          <p className="mode">Dark Mode</p>
          <div id="switch">
            <div onClick={toggleTheme} className="toggle"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu;
